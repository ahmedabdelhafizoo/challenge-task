<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <performance-chart-filter />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import PerformanceChartFilter from "../components/vue-components/performance-chart-filter.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    PerformanceChartFilter
  },
};
</script>
