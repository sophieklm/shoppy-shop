<template>
  <div class="admin_wrapper">
    <div class="current_user_wrapper">
      <span>Logged in as:</span>
      <button type="button" class="remove_btn" @click="signOut">
        Sign out
      </button>
      <Login />
    </div>
    <NewItem />
    <div class="shop_wrapper">
      <h3>Shop:</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Remove from shop</th>
          </tr>
        </thead>
        <tbody v-for="item in getShopItems" :key="item.id">
          <tr>
            <td>{{ item.name }}</td>
            <td>
              <button type="button" class="remove_btn">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="order_wrapper">
      <h3>Orders:</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr class="order_number">
            <th colspan="4">
              <strong>Order number: 4</strong>
              <button type="button" class="remove_btn">&times;</button>
            </th>
          </tr>
          <tr>
            <td>Unicorn</td>
            <td>4</td>
            <td>£9</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewItem from './NewItem';
import Login from './Login';
import { firebaseAuth } from '../firebase';

export default {
  name: 'admin',
  components: {
    NewItem,
    Login,
  },
  computed: {
    getShopItems() {
      return this.$store.state.shopItems;
    },
  },
  methods: {
    async signOut() {
      try {
        await firebaseAuth.signOut();
      } catch (error) {
        alert(`error siging out, ${error}`);
      }
    },
  },
};
</script>

<style scoped>
.admin_wrapper {
  margin: 10px;
}

.current_user_wrapper,
.order_wrapper,
.shop_wrapper {
  margin: 10px 0;
  padding: 10px;
  border: solid 1px black;
}

table {
  text-align: left;
  width: 70vw;
}

.order_number th {
  background: white;
}

.order_number button {
  margin: 0 10px;
}
</style>
