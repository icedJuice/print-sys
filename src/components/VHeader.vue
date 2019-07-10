<template>
  <div class="header">
    <div class="logo">
      <img :src="logoSrc" alt="青鸟影视">
    </div>
    <div class="navs">
      <el-link type="primary" href="./#/">单据打印</el-link>&nbsp;&nbsp;&nbsp;&nbsp;
      <el-link type="primary" href="./#/list" >历史查询</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader",
  data() {
    return {
      logoSrc: require('@/assets/img/logo.jpg')
    };
  }
};
</script>

<style lang="less" scoped>
.header{
  display: flex;
  justify-content: space-between;
  padding: 6px 20px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
}
.logo{
  width: 48px;
  height: 48px;
  img{
    width: 100%;
    border-radius: 4px;
  }
}
.navs {
  display: flex;
  align-items: center;
  text-align: right;
  padding-right: 30px;
}
.left-cont {
  min-height: 600px;
}
</style>
