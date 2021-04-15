<template>
  <div class="" v-for="item in carts" :key="item.id">
    <img class="MenuPic" :src="item.img" />
    <p class="title">{{ item.title }}</p>
    <p class="title">{{ item.price }}</p>
    <p class="title">{{ item.quantity }}</p>
  </div>
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
  },
  computed: {
    totalprice() {
      var price = 0;
      for (const key in this.carts) {
        price += this.carts[key].price;
      }
      return price;
    },
    pricewithfee() {
        return this.totalprice()+this.delivery_fee
    }
  },
  async created() {
    this.carts = await this.getdata(this.cartUrl);
  },
};
</script>

<style scoped>
</style>