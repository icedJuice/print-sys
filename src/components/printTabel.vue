<template>
  <div class="print-container">
    <div class="func-edit">
      <el-button type="primary" @click="addLine">增加</el-button>
      <el-button type="primary" @click="deleteLine">删除尾行</el-button>
      <el-button type="primary" @click="clear">清空</el-button>
      <el-button type="primary" @click="print">打印</el-button>
    </div>
    <div class="form" ref="form">
      <div class="form-title">
        <div class="title" contenteditable>表单标题·表单</div>
        <span class="time">打印时间：20190525 19:58</span>
      </div>
      <div class="line"></div>
      <div class="msg">
        <div class="msg-line">
          <div>code: 123456789</div>
          <div>name: xiaoming</div>
          <div>phone: 12345678999</div>
        </div>
        <div class="msg-line">
          <div>name: 123456789</div>
          <div>adress: xiaoming</div>
          <div>xdrq: 12345678999</div>
        </div>
      </div>
      <div class="tabel">
        <div class="tabel-title table-list">
          <div>序号</div>
          <div>项目名称</div>
          <div>耗材</div>
          <div>制作内容</div>
          <div>规格</div>
          <div>单位</div>
          <div>数量</div>
          <div>面积</div>
          <div>单价</div>
          <div>金额</div>
          <div>备注</div>
        </div>
        <div class="table-list" v-for="(item, index) in tableList" :key="index">
          <div class="item" contenteditable>{{index + 1}}</div>
          <div class="item" contenteditable>{{item && item[0]}}</div>
          <div class="item" contenteditable>{{item && item[1]}}</div>
          <div class="item" contenteditable>{{item && item[2]}}</div>
          <div class="item" contenteditable>{{item && item[3]}}</div>
          <div class="item" contenteditable>{{item && item[4]}}</div>
          <div class="item" contenteditable>{{item && item[5]}}</div>
          <div class="item" contenteditable>{{item && item[6]}}</div>
          <div class="item" contenteditable>{{item && item[7]}}</div>
          <div class="item" contenteditable>{{item && item[8]}}</div>
          <div class="item" contenteditable>{{item && item[9]}}</div>
        </div>
        <div class="table-sum1 table-list">
          <div>本页小计</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="table-sum2 table-list">
          <div>金额（大写）</div>
          <div>{{amount | numToWord}}</div>
          <div>金额（小写）</div>
          <div>{{amount.toFixed(2)}}</div>
          <div></div>
        </div>
        <div class="table-sum3 table-list">
          <div>总金额：{{amount_all.toFixed(2)}}</div>
          <div>优惠金额：{{amount_youhui.toFixed(2)}}</div>
          <div>预付金额：{{amount_yufu.toFixed(2)}}</div>
          <div>应付金额：{{amount_pay.toFixed(2)}}</div>
        </div>
        <div class="table-sum4 table-list">
          <div>备注说明：{{123456}}</div>
        </div>

        <div class="form-summary">
          <div>公司地址：{{}}</div>
          <div>电话：{{}}</div>
          <div>微信: {{}}</div>
          <div>QQ: {{}}</div>
        </div>
        <div class="form-cpyt">
          <div>客户签名:</div>
          <div>客户专员:</div>
          <div>开单人:</div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NumToWord from "@/utils/NumToWord";
export default {
  components: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      tableList: [],
      minListLength: 4,
      listLength: 8,
      // 金额
      amount: 3881.0,
      amount_all: 0,
      amount_youhui: 0,
      amount_yufu: 0,
      amount_pay: 0
    };
  },
  mounted() {
    this.tableList = this.tableList.concat(["", "", "", "", "", "", "", ""]);
    window.addEventListener("keydown", this.preventEnter);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.preventEnter);
  },
  methods: {
    preventEnter(event) {
      if (event.keyCode === 13 || event.keyCode == 32) {
        // 禁止换行
        event.cancelBubble = true;
        event.preventDefault();
        event.stopPropagation();
      }
    },

    clear() {
      this.tableList = [];
      this.$nextTick(() => {
        this.tableList = [].concat(
          Array.from({ length: this.listLength }, () => "")
        );
      });
    },
    deleteLine() {
      if (this.listLength <= this.minListLength) {
        return false;
      }
      this.listLength = this.listLength - 1;
      this.tableList.splice(this.listLength - 1, 1);
    },

    addLine() {
      this.listLength = this.listLength + 1;
      this.tableList = this.tableList.concat([""]);
    },

    print() {}
  },
  filters: {
    numToWord(value) {
      const val = Number(value);
      if (isNaN(val)) {
        return "Account is not number.";
      }
      return NumToWord(value);
    }
  },
  watch: {
    // listLength: (value) => {
    //   this.tableList = this.tableList.concat(['','','','','','','','']);
    //   this.tableList = this.
    // }
  }
};
</script>

<style scoped>
</style>
