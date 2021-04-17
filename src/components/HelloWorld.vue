<template>
  <div class="hello">
    <h1>Freshlicious Fast Food</h1>
    <p>
      Replenish void beginning you all day wherein unto. Void winged beginning a every upon. 
    </p>
    <router-link to="/menu">DISCOVER FOOD HERE</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: white;

}
h1 {
  font-size: 50px;
}
a {
  color: #F09D00;
}
</style>
