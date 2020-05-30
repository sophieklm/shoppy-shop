<template>
  <div class="shop_wrapper">
    <div class="shop">
      <h3>Totally authentic unicorns</h3>
      <table v-for="item in getShopItems" :key="item.name">
        <tbody>
          <tr>
            <td>
              <strong>{{ item.name }}</strong>
            </td>
          </tr>
          <tr>
            <td>
              <small>{{ item.description }}</small>
            </td>
          </tr>
          <tr>
            <td>£{{ item.price }}</td>
            <td>
              <button type="button" class="shop_btn" @click="addToBasket(item)">
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="basket">
      <h3>Basket</h3>
      <div v-if="basket.length > 0">
        <table v-for="(item, index) in basket" :key="index">
          <tbody>
            <tr>
              <td>
                <button
                  type="button"
                  class="shop_btn"
                  @click="decreaseQuantity(item)"
                >
                  -
                </button>
                <span>{{ item.quantity }}</span>
                <button
                  type="button"
                  class="shop_btn"
                  @click="increaseQuantity(item)"
                >
                  +
                </button>
              </td>
              <td>
                <small>{{ item.name }}</small>
              </td>
              <td>
                <small>£{{ item.price }}</small>
              </td>
            </tr>
            <tr>
              <td>
                <small>{{ item.description }}</small>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Order total:</p>
        <button type="button" class="shop_btn" @click="addNewOrder">
          Place Order
        </button>
      </div>
      <div v-else>
        <p>{{ basketText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { store } from '../store/store';

export default {
  name: 'shop',
  data() {
    return {
      basket: [],
      basketText: 'Your basket is empty!',
    };
  },
  computed: {
    ...mapGetters(['getShopItems']),
  },
  methods: {
    async addToBasket(item) {
      const itemExists = await this.basket.find((i) => i.name === item.name);
      if (itemExists) {
        itemExists.quantity++;
        return;
      }
      this.basket.push({
        name: item.name,
        price: item.price,
        quantity: 1,
      });
    },
    alert() {
      alert('Hooray, your unicorder is on its magical way.');
    },
    removeFromBasket(item) {
      this.basket.splice(this.basket.indexOf(item), 1);
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromBasket(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    addNewOrder() {
      const order = {
        items: { ...this.basket },
        createdAt: new Date(),
      };
      store.dispatch('addNewOrder', order);
      this.basket = [];
      this.basketText = 'Thank you, your order has been placed!';
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

.shop_wrapper {
  display: flex;
  flex-direction: column;
}

.shop,
.basket {
  background: #edeef0;
  border-radius: 3px;
  height: 100vh;
  margin: 10px;
  padding: 10px;
}

@media screen and (min-width: 900px) {
  .shop_wrapper {
    justify-content: space-between;
    flex-direction: row;
  }

  .shop {
    width: 65vw;
  }
  .basket {
    width: 35vw;
  }
}
</style>
