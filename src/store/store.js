import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';
import shop from './modules/shop';
import orders from './modules/orders';
import users from './modules/users';

Vue.use(Vuex);
export const store = new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    shop,
    users,
    orders,
  },
});
