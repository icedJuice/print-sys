<template>
  <div class="hello">
    <el-container>
      <el-header>
        <button class="logo">LOGO</button>
        <div class="navs">
          <el-link type="primary">主主主</el-link>&nbsp;&nbsp;&nbsp;&nbsp;
          <el-link type="primary">副副副</el-link>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="left-cont">
            <div>默认的</div>
            <div>第一个</div>
            <div>第二个</div>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <!-- <PrintTabel></PrintTabel> -->
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import PrintTabel from "@/components/printTabel";
export default {
  components: {
    PrintTabel
  },
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
  background-color: #eee;
}
</style>
