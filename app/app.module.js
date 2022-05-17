import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import ErrorPageComponent from './pages/error-page.vue';
import EmployeesFilter from './components/vue-components/employees-filter.vue';
import PageLoader from './components/shared/page-loader.vue';
import store from './store';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]).config(($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store,
  });
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vErrorPage', (createVueComponent) => {
  return createVueComponent(Vue.component('ErrorPageComponent', ErrorPageComponent));
});

angular.module('appModule').directive('vEmployeesFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('EmployeesFilter', EmployeesFilter));
});

angular.module('appModule').directive('vPageLoader', (createVueComponent) => {
  return createVueComponent(Vue.component('PageLoader', PageLoader));
});
