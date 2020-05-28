<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
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
.shop_btn {
  background-color: #4abeb5;
  border-radius: 3px;
  margin-bottom: 10px;
  cursor: pointer;
}

body {
  font-family: 'Crimson Text', 'serif';
  margin: 0;
  font-size: 1em;
}

a {
  text-decoration: none;
  color: inherit;
}

nav {
  display: flex;
  justify-content: center;
  margin: 0;
  background: #edeef0;
}

li {
  list-style: none;
}

span {
  margin: 0 5px;
}

.shop_btn {
  background-color: #4abeb5;
  border-radius: 3px;
  margin: 5px 5px;
  padding: 2px 5px;
  cursor: pointer;
}
</style>
