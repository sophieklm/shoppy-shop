import { firestoreAction } from 'vuexfire';
import { dbShopRef } from '../../firebase';

const state = {
  shopItems: [],
};

const getters = {
  getShopItems: (state) => state.shopItems,
};

const mutations = {};

const actions = {
  setShopRef: firestoreAction((context) => {
    return context.bindFirestoreRef('shopItems', dbShopRef);
  }),
  addShopItem: async (context, item) => {
    try {
      await dbShopRef.add(item);
    } catch (error) {
      alert(`Error creating order, ${error}`);
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
