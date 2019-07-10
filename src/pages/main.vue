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
import { constants } from 'crypto';
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
    saveFeed(data) {
      const feed = {};

      feed.feed_id = data.order.id; // 订单id

      // // 客户信息
      feed.c_adress = data.c_msg.adress; // 地址
      feed.c_phone = data.c_msg.phone; // 电话
      feed.c_name = data.c_msg.name; // 姓名

      feed.amount_all = data.amount_all;
      feed.amount_youhui = data.amount_youhui;
      feed.amount_yufu = data.amount_yufu;
      feed.amount_pay = data.amount_pay;

      feed.sum1 = data.sum1;
      feed.sum2 = data.sum2;
      feed.sum4 = data.sum4;

      feed.c_msg = data.c_msg;
      feed.s_msg = data.s_msg;

      feed.good_list = [];
      const len = data.prodData.moneyList.length;
      for (let i = 0; i < len; i ++) {
         const obj = {
          index: i + 1
         }
        Object.keys(data.prodData).forEach(p => {
          obj[p.replace('List', '')] = data.prodData[p][i] || '';
        })
        feed.good_list.push(obj);
      }

      API.saveFeed(feed).then(data => {});

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
      this.saveFeed(data);
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
