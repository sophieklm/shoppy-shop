<template>
  <div class="admin_wrapper">
    <div class="current_user_wrapper">
      <div v-if="currentUser">
        <span>Logged in as: {{ currentUser }}</span>
        <button type="button" class="remove_btn" @click="signOut">
          Sign out
        </button>
      </div>
      <div v-else>
        <Login />
      </div>
    </div>
    <AdminContent v-if="currentUser !== null" />
  </div>
</template>

<script>
import Login from './Login';
import { store } from '../store/store';
import { mapGetters } from 'vuex';
const AdminContent = () => import('./AdminContent');

export default {
  name: 'admin',
  components: {
    Login,
    AdminContent,
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    async signOut() {
      store.dispatch('signOut');
    },
  },
};
</script>

<style scoped>
.admin_wrapper {
  margin: 10px;
}
</style>
