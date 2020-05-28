<template>
  <div class="about_wrapper">
    <h3>About</h3>
    <span>Matching good people with the unicorns they deserve.</span>
    <div>
      <nav>
        <ul>
          <router-link to="/history" tag="li">
            <a class="nav-link">History</a>
          </router-link>
        </ul>
        <ul>
          <router-link to="/ordering-guide">
            <a class="nav-link">Ordering Guide</a>
          </router-link>
        </ul>
        <ul>
          <router-link to="/delivery">
            <a class="nav-link">Delivery</a>
          </router-link>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
};
</script>

<style scoped>
.about_wrapper {
  text-align: center;
}

nav {
  margin-top: 10px;
}
</style>
