<template>
  <div class="" v-for="item in carts" :key="item.id">
    <img class="MenuPic" :src="item.img"/>
    <p class="title">{{item.title}}</p>
    <p class="title">{{item.price}}</p>
    <p class="title">{{item.quantity}}</p>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      cartUrl: "http://localhost:5000/cart",
      carts: [],
    };
  },
  methods: {
    async getdata(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    },
  },
  async created() {
    this.carts = await this.getdata(this.cartUrl)
  },
};
</script>

<style scoped>
</style>