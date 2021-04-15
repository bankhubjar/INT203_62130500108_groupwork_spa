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
  padding: 30px;
  background-color: orange;
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  top: 0;
}

#nav a {
  font-weight: bold;
  font-size: 25px;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
