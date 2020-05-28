<template>
  <div class="login_wrapper">
    <form>
      <div>
        <label for="email">Email address</label>
        <input type="email" v-model="email" id="email" placeholder="Email" />
      </div>
      <div>
        <label for="password">Password</label>
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
import { firebaseAuth } from '../firebase';
export default {
  name: 'login',
  date() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async signIn() {
      try {
        await firebaseAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorCode === 'auth/wrong-password' ||
          errorCode === 'auth/user-not-found'
        ) {
          alert('Maybe you typed your password in wrong?');
        } else {
          alert(errorMessage);
        }
      }
    },
  },
};
</script>
