<template>
  <div class="menu-grid">
    <div v-for="menu in menus" :key="menu.id">
      <menucomponent :menu="menu"></menucomponent>
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
      menuUrl:"http://localhost:5000/menuItems",
      cartUrl: "http://localhost:5000/menu",
      menus: [],
    };
  },
  methods: {
    async getMenu() {
      const response = await fetch(this.menuUrl);
      const data = await response.json();
      console.log(data);
      return data;
    },  
  },
  async created() {
    this.menus = await this.getMenu();
    console.log(this.menus);
  },
};
</script>

<style>
.menu-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>