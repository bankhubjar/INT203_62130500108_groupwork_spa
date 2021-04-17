<template>
  <div id="nav">
    <div>
      <router-link to="/">Home</router-link>  
    </div>
    <div>
      <router-link to="/menu">Menu</router-link>
    </div>
    <div>
      <router-link to="/Cart">Cart</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 25px;
  background-color: #F09D00;
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  top: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

#nav a {
  font-weight: bold;
  font-size: 25px;
  color: #55A5FF;
}

#nav a.router-link-exact-active {
  color: #22259F;
}
</style>
