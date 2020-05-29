import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseAuth } from '../firebase';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    shopItems: {
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
    orders: [],
    currentUser: null,
  },
  getters: {
    getShopItems: (state) => state.shopItems,
    numberOfOrders: (state) => state.orders.length,
    currentUser: (state) => state.currentUser,
  },
  mutations: {
    addOrder: (state, orders) => {
      state.orders.push(orders);
    },
    userStatus: (state, user) => {
      user === null
        ? (state.currentUser = null)
        : (state.currentUser = user.email);
    },
  },
  actions: {
    signIn: async ({ commit }, user) => {
      try {
        const userData = await firebaseAuth.signInWithEmailAndPassword(
          user.email,
          user.password
        );
        commit('userStatus', userData.user);
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
    signOut: async ({ commit }) => {
      try {
        await firebaseAuth.signOut();
      } catch (error) {
        alert(`error siging out, ${error}`);
      }
      commit('userStatus', null);
    },
  },
});
