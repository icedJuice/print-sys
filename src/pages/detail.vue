<template>
  <div class="hello"></div>
</template>

<script>
import { getPrefabs } from "@/vendor/API";

export default {
  components: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    console.log(getPrefabs({ id: 1 }));
  }
};
</script>

<style scoped>
</style>
