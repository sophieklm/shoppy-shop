const state = {
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
};

const getters = {
  getShopItems: (state) => state.shopItems,
};

const mutations = {};

const actions = {};

export default {
  state,
  mutations,
  getters,
  actions,
};
