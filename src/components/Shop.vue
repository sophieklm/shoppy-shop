<template>
  <div class="shop_wrapper">
    <div class="shop">
      <h3>Rainbow unicorn magic</h3>
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
              <button type="button" class="shop_btn">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data() {
    return {
      getShopItems: {
        1: {
          name: 'Unicorn',
          description: 'Authentic magic unicorn',
          price: 29,
        },
        2: {
          name: 'Oonicorn',
          description: 'Non-magical unicorn',
          price: 9,
        },
        3: {
          name: 'Moonicorn',
          description: 'Unicow',
          price: 20,
        },
      },
    };
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

.shop {
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
}
</style>
