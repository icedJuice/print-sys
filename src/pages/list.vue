<template>
  <el-container>
    <el-header>
      <VHeader/>
    </el-header>
    <el-container>
      <div class="container">
        <div class="feed-list">
          <div class="item" v-for="(item, index) in feedList" :key="index">
            <h3 class="data">{{item.created_at | formatData}}</h3>
            <div class="msg">
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="grid-content">订单编号：{{item.feed_id}}</div>
                </el-col>
                <el-col :span="10">
                  <div class="grid-content">客户名称：{{item.data.c_name}}</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">联系电话：{{item.data.c_phone}}</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="grid-content">联系人：{{item.c_name}}</div>
                </el-col>
                <el-col :span="10">
                  <div class="grid-content">客户地址：{{item.data.c_adress}}</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">下单时间： {{item.created_at | formatData}}</div>
                </el-col>
              </el-row>
            </div>
            <div class="goodlist">
              <el-collapse>
                <el-collapse-item title="商品列表" name="1">
                  <el-table
                    :data="item.data.good_list"
                    style="width: 100%"
                    :default-sort="{prop: 'index', order: 'descending'}"
                  >
                    <el-table-column prop="index" label="序号" sortable width="80"></el-table-column>
                    <el-table-column prop="drops" label="材料" width="180"></el-table-column>
                    <el-table-column prop="area" label="面积" sortable width="80"></el-table-column>
                    <el-table-column prop="unit" label="单位" width="180"></el-table-column>
                    <el-table-column prop="count" label="数量" sortable width="80"></el-table-column>
                    <el-table-column prop="price" label="单价" sortable width="100"></el-table-column>
                    <el-table-column prop="all_price" label="总价" sortable width="100"></el-table-column>
                    <el-table-column prop="others" label="备注" width="200"></el-table-column>
                  </el-table>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </div>
      </div>
    </el-container>
  </el-container>
</template>
   
  </div>
</template>

<script>
import * as API from "@/vendor/API";
import VHeader from "@/components/VHeader";
export default {
  components: { VHeader },
  data() {
    return {
      feedList: []
    };
  },
  mounted() {
    API.getAllFeeds().then(res => {
      this.feedList = res.data;
      console.log(this.feedList[0]);
    });
  },
  filters: {
    formatData: function(timeStamp) {
      if (!timeStamp) return "";
      return new Date(parseInt(timeStamp) * 1000)
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  min-width: 1100px;
  margin: 0 auto;
}
.item {
  padding-bottom: 10px;
}
.msg {
  padding-bottom: 20px;
}
</style>
