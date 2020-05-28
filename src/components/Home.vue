<template>
  <div class="background">
    <div class="background-overlay">
      <h2>Welcome to Shoppy Shop</h2>
      <button class="shop_btn">Shop</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped>
h2,
h3 {
  margin: 2%;
}

.background {
  /* background: url('../assets/images/rainbow.png') center; */
  background-size: cover;
  height: 30vh;
}

.background-overlay {
  display: flex;
  flex-direction: column;
  background: #edeef0;
  opacity: 0.8;
  width: 50%;
  margin: 0 auto;
  padding: 5px;
  align-items: center;
}

.shop_btn {
  background-color: #4abeb5;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 5px;
  cursor: pointer;
}
</style>
