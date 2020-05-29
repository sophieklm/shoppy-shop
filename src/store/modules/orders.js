const state = {
  orders: [],
};

const getters = {
  numberOfOrders: (state) => state.orders.length,
};

const mutations = {
  addOrder: (state, orders) => {
    state.orders.push(orders);
  },
};

const actions = {};

export default {
  state,
  mutations,
  getters,
  actions,
};
