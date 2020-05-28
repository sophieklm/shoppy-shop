<template>
  <div class="about_wrapper">
    <h3>About</h3>
    <span>Matching good people with the unicorns they deserve.</span>
    <div>
      <nav>
        <ul>
          <router-link :to="{ name: 'historyLink' }" tag="li">
            <a class="nav-link">History</a>
          </router-link>
        </ul>
        <ul>
          <router-link :to="{ name: 'orderingGuideLink' }">
            <a class="nav-link">Ordering Guide</a>
          </router-link>
        </ul>
        <ul>
          <router-link :to="{ name: 'deliveryLink' }">
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
