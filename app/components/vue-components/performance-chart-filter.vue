<template>
  <div>
    <div class="c-filters__container__options" v-if="chartData.length > 0">
      <div>
        Start Date:
        <input
          type="date"
          name="startDateVal"
          :value="startDateVal || startDate"
          :min="startDate"
          :max="startMaxDay"
          @change="handleSelectDate"
        />
      </div>
      <div>
        End Date:
        <input
          type="date"
          name="endDateVal"
          :value="endDateVal || endDate"
          :min="startDate"
          :max="endDate"
          @change="handleSelectDate"
        />
      </div>
    </div>
    <div v-if="feedback" class="c-filters__container__options__feedback">{{ feedback }}</div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  name: "PerformanceChartFilter",
  data() {
    return {
      startDateVal: "",
      endDateVal: "",
      feedback: "",
    };
  },
  methods: {
    handleSelectDate(e) {
      let input = e.currentTarget;
      this[`${input.name}`] = input.value;
      console.log(this.validateInputs());
      if(this.validateInputs()) {
        this.$store.commit("performance/setDateRange", {startDate: this.startDateVal || this.startDate, endDate: this.endDateVal || this.endDate})
      }
    },
    validateInputs() {
      let startDate = new Date(this.startDateVal || this.startDate);
      let endDate = new Date(this.endDateVal || this.endDate);
      if (startDate.getTime() >= endDate.getTime()) {
        this.feedback = "The End date Should Be Greater Than the Start Date";
        return false;
      } else {
        this.feedback = "";
        return true;
      }
    },
  },
  computed: {
    ...mapGetters({
      getStartDate: "performance/getStartDate",
      getEndDate: "performance/getEndDate",
      chartData: 'performance/getPerformanceData'
    }),
    startDate() {
      return moment(this.getStartDate).format("YYYY-MM-DD");
    },
    endDate() {
      return moment(this.getEndDate).format("YYYY-MM-DD");
    },
    startMaxDay() {
      return moment(this.getEndDate).subtract(1, "days").format("YYYY-MM-DD");
    },
  },
};
</script>
