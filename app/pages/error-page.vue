<template>
  <div class="c-error-page">
    <img :src="errorImage" alt="404 image">
    <h1>Page Not Found</h1>
  </div>
</template>

<script>
import errorImage from "../assets/404.svg";
export default {
  name: "ErrorPage",
  data() {
    return {
      errorImage
    }
  },
};
</script>
