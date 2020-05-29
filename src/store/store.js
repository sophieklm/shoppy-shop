import Vue from 'vue';
import Vuex from 'vuex';

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
  },
});
