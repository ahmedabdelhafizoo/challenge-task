import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import performance from './modules/performance';

export default new Vuex.Store({
  state: {
    loading: false,
  },
  getters: {
    getLoadingStatus(state) {
      return state.loading;
    },
  },
  mutations: {
    toggleLoading(state) {
      state.loading = !state.loading;
    },
  },
  actions: {},
  modules: {
    performance,
  },
});
