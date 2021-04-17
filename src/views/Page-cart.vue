<template>
  <Base-Card>
    <table class="header">
      <th>Item</th>
      <th>Item Name</th>
      <th>quantity</th>
      <th>Price</th>
      <th>Edit</th>
    </table>
    <h1 v-show="!carts.length"> Your Cart is Empty <br> <router-link to="/menu">Order Here</router-link> </h1>
    <table  class="cart-display" v-for="item in carts" :key="item.id">
      <tr class="grid-item">
        <th><img class="MenuPic" :src="item.img" /></th>
        <th class="title">{{ item.title }}</th>
        <th class="quantity">
          <button class="button" id="minus" v-on:click="removeitem(item)">
            -
          </button>
          {{ item.quantity }}
          <button class="button" id="plus" v-on:click="additem(item)">+</button>
        </th>
        <th class="price">$ {{ item.price }}</th>
        <th class="edit">
          <button class="button" id="delete" v-on:click="deleteitem(item)">
            DELETE
          </button>
        </th>
      </tr>
    </table>
  </Base-Card>
  <div class="tail">
    <Base-Card>
      <div class="link">
        <router-link to="/menu">Back to Order</router-link>
      </div>
    </Base-Card>
    <Base-Card>
      <div>
        <p>Subtotal $ {{ totalprice }}</p>
        <p>Delivery Fee $ {{ delivery_fee }}</p>
        <h2>Total $ {{ pricewithfee }}</h2>
        <button class="button" id="checkout" v-on:click="checkout">Checkout</button>
      </div>
    </Base-Card>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      cartUrl: "http://localhost:5000/cart",
      carts: [],
      delivery_fee: 50,
    };
  },
  methods: {
    checkout() {
      alert(`Your Pay will be ${this.pricewithfee}\nYour subtotal is ${this.totalprice}\nDelivery Fee $ ${this.delivery_fee}`)
    },
    async getdata(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    },
    async changeitemquatity(item) {
      await fetch(`${this.cartUrl}/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
    },
    async deleteitem(item) {
      if (confirm(`Are you sure to delete ${item.title} ?`)) {
        await fetch(`${this.cartUrl}/${item.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
        this.carts = this.carts.filter((cartsitem) => cartsitem.id !== item.id);
      }
    },
    async additem(InComeItem) {
      for (const key in this.carts) {
        if (this.carts[key].id == InComeItem.id) {
          this.carts[key].quantity++;
          await this.changeitemquatity(this.carts[key]);
        }
      }
    },
    async removeitem(InComeItem) {
      for (const key in this.carts) {
        if (this.carts[key].id == InComeItem.id) {
          if (this.carts[key].quantity != 1) {
            this.carts[key].quantity--;
            await this.changeitemquatity(this.carts[key]);
          } else {
            this.deleteitem(InComeItem);
          }
        }
      }
    },
  },
  computed: {
    totalprice() {
      var price = 0;
      for (const key in this.carts) {
        price += this.carts[key].price * this.carts[key].quantity;
      }
      return price;
    },
    pricewithfee() {
      return this.totalprice + this.delivery_fee;
    },
  },
  async created() {
    this.carts = await this.getdata(this.cartUrl);
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: center;
  vertical-align: middle;
  padding: 16px;
}

.tail {
  margin-top: 10px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
  vertical-align: middle;
}

.link {
  margin-top: 10%;
}

.link a{
  font-weight: bold;
  font-size: 30px;
}

.price {
  margin-top: 10%;
}

.title {
  margin-top: 10%;
}

.quantity {
  margin-top: 10%;
}

.edit {
  margin-top: 5%;
}

.grid-item {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-content: center;
}

.MenuPic {
  width: 50%;
  margin-top: none;
}

.button {
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.header {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-content: center;
  margin-top: none;
}

#plus {
  background-color: #f09d00;
  padding: 5px 15px;
}
#plus:hover {
  background-color: #ed570d;
}
#plus:active {
  background-color: #ed570d;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#minus {
  background-color: #f09d00;
  padding: 5px 15px;
}
#minus:hover {
  background-color: #ed570d;
}
#minus:active {
  background-color: #ed570d;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#delete {
  background-color: #f09d00;
  padding: 15px 25px;
}
#delete:hover {
  background-color: #ed570d;
}
#delete:active {
  background-color: #ed570d;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

#checkout {
  background-color: #fa1100;
  padding: 15px 25px;
}
#checkout:hover {
  background-color: #ed570d;
}
#checkout:active {
  background-color: #ed570d;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>