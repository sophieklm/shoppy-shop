<template>
  <div id="app">
    <Header />
    <Home />
    <Shop />
    <Admin />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Shop from "./components/Shop.vue";
import Admin from "./components/Admin.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Shop,
    Admin
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.shop_btn {
  background-color: #4abeb5;
  border-radius: 3px;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
