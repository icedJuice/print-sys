<template>
  <el-container>
    <el-header>
      <VHeader/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <div class="left-cont">
          <h1>业务单模板</h1>
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
          <div class="print-box">
            <PrintTabel ref="PrintTabel" id="PrintTabel" @print="print"></PrintTabel>
          </div>
          <div class="print-box"><iframe ref="printframe" src="./#/print" frameborder="0"></iframe></div>
        </el-main>
      </el-container>
    </el-container>
    <el-footer>
      <!-- <VFooter/> -->
    </el-footer>
  </el-container>
</template>
<script>
import PrintTabel from "@/components/printTabel";
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
import * as API from "@/vendor/API";
import NumToWord from "@/utils/NumToWord";
export default {
  components: {
    PrintTabel,
    VHeader,
    VFooter
  },
  data() {
    return {
      msg: ""
    };
  },
  mounted() {},
  methods: {
    getPrefabs() {
      API.getPrefabs().then(data => {
        console.log(data);
      });
    },
    savePrefab() {
      this.$message({
        message: "预设板保存成功",
        type: "success"
      });
    },
    getFeedById() {
      const queryRole = { key: "id", value: 1559359691823 };
      API.getFeedById().then(data => {
        console.log("getFeedyId", data);
      });
    },
    saveFeed() {
      const data = {
        c_adress: "北京市启明 B 606",
        c_phone: "13099999999",
        c_name: "小张",
        good_list: [
          {
            index: 2,
            name: "小张",
            drops: "pipe",
            Spec: "100*100",
            unit: "m2",
            count: 3,
            area: 100,
            price: 100,
            all_price: 300,
            others: "nothing"
          },
          {
            index: 1,
            name: "小张",
            drops: "pipe",
            Spec: "100*100",
            unit: "m2",
            count: 3,
            area: 100,
            price: 100,
            all_price: 300,
            others: "nothing"
          }
        ]
      };
      API.saveFeed(data).then(data => {});

      this.$message({
        message: "表单保存成功 ",
        type: "success"
      });
    },
    print(data) {
      const frame = this.$refs.printframe.contentWindow;
      const printCont = frame.document.getElementById("form");
      printCont.innerHTML = data.html;
      frame.print();
    }
  }
};
</script>

<style scoped>
.left-cont{
  padding-left: 20px;
}
.print-box{
  width: 1000px;
  margin: 0 auto;
  padding-top: 60px;
}
.item {
  margin-bottom: 20px;
  width: 80%;
  height: 100px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
