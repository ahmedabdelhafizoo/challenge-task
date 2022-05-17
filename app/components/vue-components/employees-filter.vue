<template>
  <div class="c-dashboard__form">
    <input
      type="text"
      placeholder="Search"
      v-model="search"
      class="c-dashboard__form__input"
    />
    <button class="c-dashboard__form__btn c-button" @click="resetFilter">Clear</button>
  </div>
</template>

<script>
export default {
  name: "EmployeesFilter",
  data() {
    return {
      search: "",
    };
  },
  created() {
    const params = new URLSearchParams(window.location.search);
    const filterValue = params.get("filter");
    if (filterValue) this.search = filterValue;
  },
  watch: {
    search(newVal) {
      this.$emit("edit-query", newVal);
      // Update current query with the new one.
      if (newVal) {
        history.pushState(null, null, "?filter=" + newVal.toString());
      } else {
        history.pushState(null, null, "");
      }
    },
  },
  methods: {
    resetFilter() {
      this.search = "";
    },
  },
};
</script>
