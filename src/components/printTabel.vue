<template>
  <div class="print-container">
    <div class="func-edit">
      <button @click="print">打印</button>
      <button>清空</button>
      <button>增行</button>
      <button>删行</button>
    </div>
    <div class="form" ref="form">
      <div class="form-title">
        <h1>表单标题·表单</h1>
        <span>打印时间：20190525 19:58</span>
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
        <div class="table-list">
          <div>1</div>
          <div>111</div>
          <div>2222</div>
          <div>84455</div>
          <div>9444</div>
          <div>54784</div>
          <div>65</div>
          <div>555</div>
          <div>555</div>
          <div>555</div>
          <div>666</div>
        </div>
        <div class="table-list">
          <div>1</div>
          <div>111</div>
          <div>2222</div>
          <div>84455</div>
          <div>9444</div>
          <div>54784</div>
          <div>65</div>
          <div>555</div>
          <div>555</div>
          <div>555</div>
          <div>666</div>
        </div>
        <div class="table-list">
          <div>1</div>
          <div>111</div>
          <div>2222</div>
          <div>84455</div>
          <div>9444</div>
          <div>54784</div>
          <div>65</div>
          <div>555</div>
          <div>555</div>
          <div>555</div>
          <div>666</div>
        </div>
        <div class="table-sum1 table-list">
          <div>金额（大写）</div>
          <div></div>
          <div>金额（小写）</div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      lists: {}
    };
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    print() {}
  }
};
</script>

<style scoped>
</style>
