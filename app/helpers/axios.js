/* eslint-disable no-undef */
import axios from 'axios';
import store from '../store';

const globalAxios = axios.create({
  baseURL: 'https://fe-task.getsandbox.com',
});

globalAxios.interceptors.request.use(
  function (config) {
    store.commit('toggleLoading');
    return config;
  },
  function (error) {
    store.commit('toggleLoading');
    return Promise.reject(error);
  }
);

globalAxios.interceptors.response.use(
  function (response) {
    store.commit('toggleLoading');
    return response;
  },
  function (error) {
    store.commit('toggleLoading');
    alert('something went wrong try again later');
    return Promise.reject(error);
  }
);

export default globalAxios;
