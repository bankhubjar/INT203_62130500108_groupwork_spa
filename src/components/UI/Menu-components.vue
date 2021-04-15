<template>
    <div class="MenuGrid">
        <img class="MenuPic" :src="menu.image"/>
        <p>{{menu.title}}</p>
        <button class="button">Add to Cart</button>
    </div>
</template>

<style scoped>

.MenuPic {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
.button {
    bottom: opx;
}
</style>

<script>
export default {
    props: {menu:{type:Object}},
    methods: {

    }
}
</script>