<template>
  <header>
    <div class="header_logo">
      <img src="../assets/unicorn.png" alt="shoppy" />
      <h1 href="/">Shoppy Shop</h1>
    </div>
    <nav>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <span>~</span>
        <li>
          <a href="/shop">shop</a>
        </li>
        <span>~</span>
        <li>
          <a href="/contact">contact</a>
        </li>
        <span>~</span>
        <li>
          <a href="/about">about us</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

h1 {
  font-size: 2em;
  color: #00356a;
  font-family: 'Pacifico', sans-serif;
}

.header_logo {
  background-image: linear-gradient(
    45deg,
    #62fdf0 25%,
    #4abeb5 25% 50%,
    #62fdf0 50% 75%,
    #4abeb5 75%,
    #4abeb5 100%
  );
  background-size: 80px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}

.header_logo img {
  max-width: 25vw;
}

nav {
  text-align: center;
}

li {
  display: inline-block;
}

a {
  text-decoration: none;
}

@media screen and (min-width: 900px) {
  .header_logo img {
    max-width: 20vw;
  }
}
</style>
