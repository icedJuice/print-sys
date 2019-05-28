<template>
    <div class="print-container">

        <div class="func-edit">
            <button>打印</button>
            <button>清空</button>
            <button>增行</button>
            <button>删行</button>
        </div>
        <div class="form">
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
                <div class="tabel-title table-list"></div>
                <div class="tabel-items">
                    <table>
                        <tr>
                            <th>111</th>
                            <th>222</th>
                            <th>333</th>
                            <th>444</th>
                            <th>555</th>
                            <th>666</th>
                            <th>777</th>
                            <th>888</th>
                            <th>999</th>
                        </tr>
                        <tr>
                            <td><div>11</div></td>
                            <td><div>22</div></td>
                            <td><div>33</div></td>
                            <td><div>44</div></td>
                            <td><div>55</div></td>
                            <td><div>66</div></td>
                            <td><div>77</div></td>
                            <td><div>88</div></td>
                            <td><div>99</div></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div class="func-todo">

        </div>
    </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lists: {

      }
    }
  }
}
</script>

<style scoped>
.print-container{
    width: 700px;
}
.line{
    height: 6px;
    background-color: #999;
}
.msg-line div{
    text-align: left;
    display: inline-block;
}
.msg-line div:nth-child(1){
    width: 25%;
}
.msg-line div:nth-child(2){
    width: 50%;
}
.msg-line div:nth-child(3){
    width: 25%;
}
td div{
    height: 100%;
}
</style>
