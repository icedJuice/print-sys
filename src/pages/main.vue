<template>
  <div class="hello">
      <PrintTabel>
      </PrintTabel>
  </div>
</template>

<script>
import PrintTabel from '@/components/printTabel';
export default {
  components: {
      PrintTabel
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
