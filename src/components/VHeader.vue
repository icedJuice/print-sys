<template>
  <div class="header">
    <button class="logo">LOGO</button>
    <div class="navs">
      <el-link type="primary">主主主</el-link>&nbsp;&nbsp;&nbsp;&nbsp;
      <el-link type="primary">副副副</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
.navs {
  text-align: right;
  padding-right: 30px;
}
.left-cont {
  min-height: 600px;
}
</style>
