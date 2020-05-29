import { firebaseAuth } from '../../firebase';

const state = {
  currentUser: null,
};

const getters = {
  currentUser: (state) => state.currentUser,
};

const mutations = {
  userStatus: (state, user) => {
    user === null
      ? (state.currentUser = null)
      : (state.currentUser = user.email);
  },
};

const actions = {
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
};

export default {
  state,
  mutations,
  getters,
  actions,
};
