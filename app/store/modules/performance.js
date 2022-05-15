/* eslint-disable no-shadow */
import axios from '../../helpers/axios';
import { datesRangeFilter } from '../../helpers';
const state = {
  chartData: [],
  dateRange: null,
};

const getters = {
  getPerformanceData(state) {
    if (state.dateRange) {
      return datesRangeFilter(state.chartData, state.dateRange.startDate, state.dateRange.endDate);
    }
    return state.chartData;
  },
  getStartDate(state) {
    return state.chartData[0] && state.chartData[0].date_ms;
  },
  getEndDate() {
    return (
      state.chartData[0] && state.chartData[state.chartData.length - 1].date_ms
    );
  },
};

const mutations = {
  setDateRange(state, payload) {
    state.dateRange = payload;
  },
  setChartData(state, payload) {
    state.chartData = payload;
  },
};

const actions = {
  getCHartData({ commit }) {
    axios.get('/performance').then((res) => {
      commit('setChartData', res.data);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
