<template>
  <div class="login_wrapper">
    <p>Please login to continue</p>
    <form>
      <div>
        <label for="email">Email address: </label>
        <input type="email" v-model="email" id="email" placeholder="Email" />
      </div>
      <div>
        <label for="password">Password: </label>
        <input
          type="password"
          v-model="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <button type="button" class="shop_btn" @click.prevent="signIn">
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
import { store } from '../store/store';

export default {
  name: 'login',
  date() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      const user = {
        email: this.email,
        password: this.password,
      };
      store.dispatch('signIn', user);
    },
  },
};
</script>
