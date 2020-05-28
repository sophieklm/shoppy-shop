<template>
  <div class="shop_wrapper">
    <div class="shop">
      <h3>Rainbow unicorn magic</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Unicorn</strong>
            </td>
          </tr>
          <tr>
            <td>
              <small>Authentic magic unicorn</small>
            </td>
          </tr>
          <tr>
            <td>
              £10
            </td>
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
