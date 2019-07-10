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
                  <div class="grid-content">订单编号：{{item.data.feed_id}}</div>
                </el-col>
                <el-col :span="10">
                  <div class="grid-content">客户名称：{{item.data.c_name || ''}}</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">联系电话：{{item.data.c_phone || ''}}</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="grid-content">联系人：{{item.c_name || ''}}</div>
                </el-col>
                <el-col :span="10">
                  <div class="grid-content">客户地址：{{item.data.c_adress || ''}}</div>
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
                    :data="item.data.data.good_list"
                    style="width: 100%"
                    :default-sort="{prop: 'index', order: 'descending'}"
                  >
                    <el-table-column prop="index" label="序号" sortable width="80"></el-table-column>
                    <el-table-column prop="proj" label="项目名称" width="120"></el-table-column>
                    <el-table-column prop="exp" label="耗材" sortable width="80"></el-table-column>
                    <el-table-column prop="cont" label="制作内容" width="180"></el-table-column>
                    <el-table-column prop="rule" label="规格" sortable width="80"></el-table-column>
                    <el-table-column prop="plex" label="单位" sortable width="80"></el-table-column>
                    <el-table-column prop="count" label="数量" sortable width="100"></el-table-column>
                    <el-table-column prop="area" label="面积" sortable width="100"></el-table-column>
                    <el-table-column prop="per" label="单价" width="100"></el-table-column>
                    <el-table-column prop="money" label="价格" width="100"></el-table-column>
                    <el-table-column prop="mark" label="备注" width="120"></el-table-column>
                  </el-table>
                </el-collapse-item>
              </el-collapse>
            </div>
            <el-row :gutter="20">
                <el-col :span="4">
                  <div class="grid-content">总额：{{item.data.data.amount_all}} 元</div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content">优惠：{{item.data.data.amount_youhui || '0.00'}} 元</div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content">预付：{{item.data.data.amount_youhui || '0.00'}} 元</div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content">付款： {{
                    (
                      item.data.data.amount_all - 
                      item.data.data.amount_youhui - 
                      item.data.data.amount_yufu
                    ).toFixed(2)
                  }} 元</div>
                </el-col>
              </el-row>
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
      console.error('this.feedList',this.feedList);
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
  position: relative;
  max-width: 1200px;
  min-width: 1100px;
  margin: 0 auto 60px;
}
.item {
  padding-top: 1px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 3px solid #aaaaaa;
}
.feed-list .item:last-child{
  border-color: transparent;
}
.msg {
  padding-bottom: 20px;
}
</style>
