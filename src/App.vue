<template>
  <div id="app">
    <Header />
    <Home />
    <Shop />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Shop from './components/Shop.vue';

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Shop,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
