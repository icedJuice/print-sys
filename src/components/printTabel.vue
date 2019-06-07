<template>
  <div class="print-container">
    <div class="func-edit">
      <el-button type="success" @click="addLine">增加</el-button>
      <el-button type="success" @click="deleteLine">删除尾行</el-button>
      <el-button type="warning" @click="clear">清空</el-button>
      <el-button type="primary" @click="print">打印</el-button>
    </div>
    <div class="form" ref="form">
      <div class="form-title">
        <div class="title" contenteditable><DivModel :value="'青鸟影视·业务单'" @input="S_fillTitle"/></div>
        <span class="time">打印时间：{{time | formatTime('yyyy 年 mm 月 dd 日 hh:nn')}}</span>
      </div>
      <div class="line"></div>
      <div class="msg">
        <div class="msg-line">
          <div>订单编号: {{order.id}}</div>
          <div>客户名称: <DivModel :type="'c_msg'" :index="'name'" @input="fillData"/></div>
          <div>联系电话: <DivModel :type="'c_msg'" :index="'phone'" @input="fillData"/></div>
        </div>
        <div class="msg-line">
          <div>联系人: <DivModel :type="'c_msg'" :index="'lianxiren'" @input="fillData"/></div>
          <div>客户地址: <DivModel :type="'c_msg'" :index="'adress'" @input="fillData"/></div>
          <div>下单日期: {{time | formatTime('yyyy 年 mm 月 dd 日')}}</div>
        </div>
      </div>
      <div class="table">
        <div class="table-title table-list">
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
        <div>
          <div class="table-list" v-for="(item, index) in tableList" :key="index">
            <div class="item" data-title="序号" contenteditable>{{index + 1}}</div>
            <DivModel data-title="项目名称" :type="'projList'" :index="index" :value="prodData.projList[index]" @input="onProdInput"/>
            <DivModel data-title="耗材" :type="'expList'" :index="index" :value="prodData.expList[index]" @input="onProdInput"/>
            <DivModel data-title="制作内容" :type="'contList'" :index="index" :value="prodData.contList[index]" @input="onProdInput"/>
            <DivModel data-title="规格" :type="'ruleList'" :index="index" :value="prodData.ruleList[index]" @input="onProdInput"/>
            <DivModel data-title="单位" :type="'plexList'" :index="index" :value="prodData.plexList[index]" @input="onProdInput"/>
            <DivModel data-title="数量" :type="'countList'" :index="index" :value="prodData.countList[index]" @input="onProdInput"/>
            <DivModel data-title="面积" :type="'areaList'" :index="index" :value="prodData.areaList[index]" @input="onProdInput"/>
            <DivModel data-title="单价" :type="'perList'" :index="index" :value="prodData.perList[index]" @input="onProdInput"/>
            <div class="item" data-title="金额">{{{'moneyList': prodData.moneyList, index} | getSumMoney}}</div>
            <DivModel data-title="备注" :type="'markList'" :index="index" :value="prodData.markList[index]" @input="onProdInput"/>

          </div>
        </div>
        
        <div class="table-sum1 table-list">
          <div>本页小计</div>
          <div>{{prodData.countList | arrySum}}</div>
          <div>{{prodData.areaList | arrySum}}</div>
          <div></div>
          <div>{{amount_all}}</div>
          <DivModel :type="'sum1'" :index="'mask'" @input="fillData"/>
        </div>
        <div class="table-sum2 table-list">
          <div>金额（大写）</div>
          <div>{{amount_all | numToWord}}</div>
          <div>金额（小写）</div>
          <div>{{amount_all}}</div>
          <DivModel :type="'sum2'" :index="'mask'" @input="fillData"/>
        </div>
        <div class="table-sum3 table-list">
          <div>总金额：{{amount_all}}</div>
          <div>优惠金额：<DivModel :value="'0'" :type="'amount_youhui'" @input="fillData"/></div>
          <div>预付金额：<DivModel :value="'0'" :type="'amount_yufu'" @input="fillData"/></div>
          <div>应付金额：{{{amount_all, amount_youhui, amount_yufu} | countPayMoney }}</div>
        </div>
        <div class="table-sum4 table-list">
          <div>备注说明：<DivModel :type="'sum4'" :index="'mask'" @input="fillData"/></div>
        </div>

        <div class="form-summary">
          <div>公司地址：{{s_msg.adress}}</div>
          <div>电话：{{s_msg.phone}}</div>
          <div>微信: {{s_msg.wx}}</div>
          <div>QQ: {{s_msg.qq}}</div>
        </div>
        <div class="form-cpyt">
          <div>客户签名：</div>
          <div>客户专员：<DivModel :value="'大鹏'" :type="'s_msg'" :index="'zhuanyuan'" @input="fillData"/></div>
          <div>开单人：<DivModel :value="'大鹏'" :type="'s_msg'" :index="'kaidanren'" @input="fillData"/></div>
        </div>
        <div class="line line-min"></div>
        <DescRight/>
      </div>
    </div>
  </div>
</template>

<script>
import NumToWord from "@/utils/NumToWord";
import DescRight from "@/components/printComponents/descRight";
import DivModel from '@/components/divModel';
import formatDate from '@/utils/formatDate';
export default {
  components: {
    DescRight,
    DivModel
  },
  data() {
    return {
      order: { 
        id: '',
      },
      title: '青鸟影视·业务单',
      tableList: [],
      prodData: {
        // 项目名称
        projList: [],
        // 消耗
        expList: [],
        // 制作内容
        contList: [],
        // 规格
        ruleList: [],
        // 单位
        plexList: [],
        // 数量
        countList:[],
        // 面积
        areaList: [],
        //单价
        perList: [],
        // 价格
        moneyList: [],
        // 备注
        markList: [],
      },
      
      minListLength: 4,
      listLength: 8,
      data_list: [],
      // 金额
      amount_all: 0.00,
      amount_youhui: 0,
      amount_yufu: 0,
      amount_pay: 0,
      sum1: {
        mask: ''
      },
      sum2: {
        mask: ''
      },
      sum4: {
        mask: ''
      },
      c_msg: {
        lianxiren: '张经理',
        adress: '',
        name: '',
        phone: '',
      },
      s_msg: {
        zhuanyuan: '大鹏',
        kaidanren: '大鹏',
        adress: '外国语幼儿园',
        phone: '15099999999',
        wx: 'qingninao',
        qq: '123456'
      },
      // 当前时间
      time: Date.now(),
      interval: null,
    };
  },
  mounted() {
    this.tabs = Array.from({length: this.listLength}, (k, v) => k);
    this.tableList = [].concat(Array.from({length: this.listLength}, (k, v) => []))
    window.addEventListener("keydown", this.preventEnter);
    this.getCurrentTime();
    this.createOrderId();
  },

  beforeDestroy() {
    window.removeEventListener("keydown", this.preventEnter);
    clearInterval(this.interval);
  },
  methods: {
    createOrderId () {
      let order_num = localStorage.getItem('odrer_num');
      let order_day = localStorage.getItem('order_day');
      var now_day = (new Date()).getDate();
      if (now_day != Number(order_day)) {
        order_num = 1;
        localStorage.setItem('odrer_num', order_num);
        localStorage.setItem('order_day', now_day);
      } else {
        order_num = Number(order_num) + 1;
      }
      this.order.id = formatDate(Date.now(), 'yyyymmdd') + ('000' + order_num).slice(-3);
      return this.order.id;
    },
    getCurrentTime() {
      this.time = new Date();
      this.interval = setInterval(()=> {
        this.time = new Date();
      })
    },
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
      this.countList.splice(this.listLength, 1);

    },

    addLine() {
      this.listLength = this.listLength + 1;
      this.tableList = this.tableList.concat([""]);
    },

    update() {

    },

    needSunMoney(type) {
      var needArr= [ 'countList', 'areaList', 'perList'];
      return needArr.indexOf(type) > -1;
    },
    onProdInput(data) {
      const arr = [].concat(this.prodData[data.type]);
      arr[data.index] = data.value;
      this.prodData[data.type] = arr;

      if (this.needSunMoney(data.type)) {
        const arr = [].concat(this.prodData.moneyList);
        let sum = (Number(this.prodData.countList[data.index]) * Number(this.prodData.areaList[data.index]) * Number (this.prodData.perList[data.index])).toFixed(2) || '';
       console.log(sum);
        if (isNaN(sum)) {
          sum = '';
        }
        arr[data.index] = sum;
        this.prodData.moneyList = arr;
        this.amount_all = this.arrySum(this.prodData.moneyList).toFixed(2);
      }
    },
    print() {},
    fillData(data) {
      if (data.index != undefined) {
        this[data.type][data.index] = data.value;
      } else {
         this[data.type] = data.value;
      }
    },
   
    S_fillTitle(data) {
      this.title = data.value;
    },
    // 将数组求和
    arrySum(array) {
      let i = 0;
      array.forEach(el => {
        i += !isNaN(Number(el)) ? Number(el) : 0;
      });
      return i;
    },

  },
  filters: {
    numToWord(value) {
      const val = Number(value);
      if (isNaN(val)) {
        return "Account is not number.";
      }
      return NumToWord(value);
    },
    // 将数组求和
    arrySum(array) {
      let i = 0;
      array.forEach(el => {
        i += !isNaN(Number(el)) ? Number(el) : 0;
      });
      return i;
    },
    // 取对应行的钱数
    getSumMoney (data) {
      let sum = data.moneyList && data.moneyList[data.index];
      if (sum === undefined || isNaN(Number(sum))) {
        sum = '';
      }
      return  sum;
    },
    // 计算总需要支付的钱数
    countPayMoney(data) {
      for (let key in data) {
        if (isNaN(Number(data[key]))) {
          data[key] = 0;
        }
      }
      return (data.amount_all - data.amount_youhui - data.amount_yufu).toFixed(2);
    },
    formatTime(time, datatype){
      return formatDate(time, datatype);
    }
  },
  watch: {
    listLength: (value) => {
    },
  }
};
</script>

<style scoped>
.func-edit{
  text-align: left;
}
input{
  border: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
