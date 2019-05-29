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
            <h1>大标题</h1>
            <div class="mode-items">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <PrintTabel></PrintTabel>
          </el-main>
          <el-footer>
            <VFooter/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import PrintTabel from "@/components/printTabel";
import VFooter from "@/components/VFooter";
export default {
  components: {
    PrintTabel,
    VFooter
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
}
.item {
  margin-bottom: 20px;
  width: 80%;
  height: 100px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
