<template>
  <item-cart :numberofitem="itemincarts" />
  <div class="menu-grid">
    <div v-for="menu in menus" :key="menu.id">
      <menucomponent :menu="menu" @menuinfo="additemtocart"></menucomponent>
    </div>
  </div>
</template>

<script>
import menucomponent from "../components/UI/Menu-components";

export default {
  components: {
    menucomponent,
  },
  data() {
    return {
      menuUrl: "http://localhost:5000/menuItems",
      cartUrl: "http://localhost:5000/cart",
      menus: [],
      carts: [],
    };
  },
  methods: {
    async getdata(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    },
    async additemtoserver(item) {
        await fetch(this.cartUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(item)
        })
    },
    async additemquatity(item) {
        await fetch(`${this.cartUrl}/${item.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(item)    
        })
    },
    async additemtocart(InComeItem) {
      var newitem;
      if (this.carts.some((item) => item.id == InComeItem.id)) {
        for (const key in this.carts) {
          if (this.carts[key].id == InComeItem.id) {
            this.carts[key].quantity++;
            await this.additemquatity(this.carts[key])
          }
        }
      } else {
        newitem = {
          id: InComeItem.id,
          img: InComeItem.image,
          title: InComeItem.title,
          price: InComeItem.title.length,
          quantity: 1,
        };
        this.carts.push(newitem);
        await this.additemtoserver(newitem)
      }
      console.log(this.carts);
    },
  },
  computed: {
    itemincarts() {
      var numberofitem = 0;
      for (const key in this.carts) {
        numberofitem += this.carts[key].quantity;
      }
      return numberofitem;
    },
  },
  async created() {
    this.menus = await this.getdata(this.menuUrl)
    this.carts = await this.getdata(this.cartUrl)
  },
};
</script>

<style>
.menu-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>