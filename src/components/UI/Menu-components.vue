<template>
    <div class="MenuGrid">
        <img class="MenuPic" :src="menu.image"/>
        <p class="title">{{menu.title}}</p>
        <p class="price">$ {{calprice}}</p>
        <button class="button" v-on:click="returntitle">Add to Cart</button>
    </div>
</template>

<style scoped>
.MenuGrid {
  color: white;
  font-size: 30px;
}
.MenuPic {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 60%;
}
.button {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #F09D00;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #ED570D}

.button:active {
  background-color: #ED570D;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>

<script>

export default {
    props: {menu:{type:Object}},
    data(){
        return{
            price: 0,
        }
    },
    methods: {
        returntitle(){
            this.$emit("menuinfo",this.menu)
        }
    },
    computed: {
        calprice(){
            return this.menu.title.length
        }
    }
}
</script>