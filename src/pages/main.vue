<template>
  <el-container>
    <el-header>
      <VHeader/>
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
          <el-button type="primary" @click="getPrefabs">getPrefabs</el-button>
          <el-button type="primary" @click="savePrefab">savePrefab</el-button>
          <el-button type="primary" @click="getFeedById">getFeedyId</el-button>
          <el-button type="primary" @click="saveFeed">saveFeed</el-button>
          <!-- <PrintTabel></PrintTabel> -->
        </el-main>
      </el-container>
    </el-container>
    <el-footer>
      <VFooter/>
    </el-footer>
  </el-container>
</template>
<script>
import PrintTabel from "@/components/printTabel";
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
import * as API from "@/vendor/API";

export default {
  components: {
    PrintTabel,
    VHeader,
    VFooter
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    getPrefabs() {
      API.getPrefabs().then(data => {
        console.log(data);
      });
    },
    savePrefab() {},
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
    }
  }
};
</script>

<style scoped>
.item {
  margin-bottom: 20px;
  width: 80%;
  height: 100px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
