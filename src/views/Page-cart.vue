<template>
  <Base-Card>
    <table class="cart-display" v-for="item in carts" :key="item.id">
      <tr class="grid-item">
        <th><img class="MenuPic" :src="item.img" /></th>
        <th class="title">{{ item.title }}</th>
        <th class="quantity">
          <button class="button" id="minus" v-on:click="removeitem(item)">
            -</button
          >{{ item.quantity
          }}<button class="button" id="plus" v-on:click="additem(item)">
            +
          </button>
        </th>
        <th class="price">{{ item.price }}</th>
        <th><button class="button" v-on:click="deleteitemquatity(item)">DELETE</button></th>
      </tr>
      <!-- <div class="cart-display" v-for="item in carts" :key="item.id">
    <img class="MenuPic" :src="item.img" />
    <p class="title">{{ item.title }}</p>
    <p class="price">{{ item.price }}</p>
    <p class="quantity">{{ item.quantity }}</p>
  </div> -->
    </table>
  </Base-Card>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      cartUrl: "http://localhost:5000/cart",
      carts: [],
      delivery_fee: 5,
    };
  },
  methods: {
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
    async deleteitemquatity(item) {
      if (confirm(`Are you sure to delete ${item.title} ?`)) {
      await fetch(`${this.cartUrl}/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
      this.carts = this.carts.filter(
        (cartsitem) => cartsitem.id !== item.id
      )}
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
      return this.totalprice() + this.delivery_fee;
    },
  },
  async created() {
    this.carts = await this.getdata(this.cartUrl);
  },
};
</script>

<style scoped>
.cart-display {
  display: flex;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: left;
  padding: 16px;
}

.grid-item {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-content: center; 
  justify-content: space-around; 
}

.MenuPic{
  width: 50%;
}

.button {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #f09d00;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}
.button:hover {
  background-color: #ed570d;
}

.button:active {
  background-color: #ed570d;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>