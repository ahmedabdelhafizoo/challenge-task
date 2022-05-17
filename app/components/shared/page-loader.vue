<template>
  <div class="d-flex align-items-center justify-content-center page-loader">
    <div class="page-loader__circle"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
  computed: {
    loading() {
      return this.$store.getters.getLoadingStatus;
    },
  },
};
</script>
