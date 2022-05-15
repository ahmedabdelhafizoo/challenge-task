<template>
  <div class="c-chart__container">
    <page-loader v-if="loading" />
    <v-chart v-else ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
/*
  helper resources
  1- https://stackoverflow.com/questions/63901955/echart-series-with-different-tooltip
  2- https://stackoverflow.com/questions/67635823/line-color-change-based-on-logic-in-apache-echarts
  3- https://echarts.apache.org/examples/en/editor.html?c=line-sections
  4- https://echarts.apache.org/examples/en/editor.html?c=line-aqi&edit=1&reset=1
*/

import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { mapGetters } from "vuex";
import PageLoader from "../shared/page-loader.vue";
use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
    PageLoader,
  },
  created() {
    this.$store.dispatch("performance/getCHartData");
  },

  computed: {
    ...mapGetters({
      loading: "getLoadingStatus",
      chartData: "performance/getPerformanceData",
    }),
    chartOptions() {
      return {
        title: {
          text: "Team Performance Index:",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          padding: 10,
          backgroundColor: "#172236",
          borderColor: "#fff",
          borderWidth: "1",
          textStyle: {
            color: "#fff",
          },
          formatter: (params) => {
            // console.log(params);
            return `
                <div style="text-align:center; font-weight:bold;">${params[0].name}</div>
                ${params[0].marker} ${params[0].seriesName} ${params[0].value}%
                `;
          },
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        series: [
          {
            name: "Team Performance Index:",
            backgroundColor: "#000",
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: "#EE5F48",
            },
            {
              gt: 50,
              lte: 80,
              color: "#F8D530",
            },
            {
              gt: 80,
              lte: 100,
              color: "#178B48",
            },
          ],
          outOfRange: {
            color: "#ccc",
          },
        },
      };
    },

    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => Math.round(+item.performance * 100));
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>
