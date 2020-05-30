<template>
  <div class="admin_wrapper">
    <div class="current_user_wrapper">
      <div v-if="currentUser">
        <span>Logged in as: {{ currentUser }}</span>
        <button type="button" class="remove_btn" @click="signOut">
          Sign out
        </button>
      </div>
      <div v-else>
        <Login />
      </div>
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
      <h3>Orders ({{ numberOfOrders }}):</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody v-for="(order, index) in getOrders" :key="order.id">
          <tr class="order_number">
            <th colspan="4">
              <strong>Order number: {{ index + 1 }}</strong>
              <button type="button" class="remove_btn">&times;</button>
            </th>
          </tr>
          <tr v-for="orderItem in order.items" :key="orderItem.id">
            <td>{{ orderItem.name }}</td>
            <td>{{ orderItem.quantity }}</td>
            <td>£{{ orderItem.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewItem from './NewItem';
import Login from './Login';
import { store } from '../store/store';
import { mapGetters } from 'vuex';

export default {
  name: 'admin',
  components: {
    NewItem,
    Login,
  },
  computed: {
    ...mapGetters([
      'getShopItems',
      'numberOfOrders',
      'currentUser',
      'getOrders',
    ]),
  },
  methods: {
    async signOut() {
      store.dispatch('signOut');
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
