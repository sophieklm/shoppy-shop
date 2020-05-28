<template>
  <header>
    <div class="header_logo">
      <img src="../assets/unicorn.png" alt="shoppy" />
      <h1 href="/">Shoppy Shop</h1>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/"><a>Home</a></router-link>
        </li>
        <span></span>
        <li>
          <router-link to="/shop"><a>Shop</a></router-link>
        </li>
        <span> </span>
        <li>
          <router-link to="/contact"><a>Contact</a></router-link>
        </li>
        <span></span>
        <li>
          <router-link to="/about"><a>About</a></router-link>
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
  color: #00356a;
  text-decoration: none;
  padding: 8px;
}

@media screen and (min-width: 900px) {
  .header_logo img {
    max-width: 20vw;
  }
}
</style>
