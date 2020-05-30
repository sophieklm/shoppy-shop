<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <div class="info_block_wrapper">
      <router-view name="ordering-guide"></router-view>
      <router-view name="delivery"></router-view>
      <router-view name="history"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import { dbShopRef } from './firebase';

export default {
  name: 'App',
  components: {
    Header,
  },
  created() {
    this.$store.dispatch('setShopRef', dbShopRef);
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

.info_block_wrapper {
  display: flex;
  flex-direction: column;
}

.info_block {
  background: #edeef0;
  margin: 10px 0;
  padding: 10px;
}

.info_block h4 {
  text-align: center;
}

.info_block_content {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 900px) {
  .info_block {
    width: 100%;
  }

  .info_block_wrapper {
    flex-direction: row;
  }

  .info_block:nth-child(2) {
    margin: 10px;
  }

  .info_block_content {
    flex-direction: column;
    align-items: center;
  }
}
</style>
