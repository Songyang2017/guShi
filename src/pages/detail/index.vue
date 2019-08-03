<template>
  <div class="wrapper">
    <div class="title">{{origin.title}}</div>
    <div class="aut">{{origin.dynasty}} - {{origin.author}}</div>
    <div class="con">
      <div
        v-for="(its, index) in origin.content"
        :key="index"
      >{{its}}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import '@/asset/less/index.less'
export default {
  computed: {
    ...mapState(['origin'])
  }
}
</script>
<style scoped lang="less">
.wrapper {
  padding: 30px 20px;
  font-family: "KT";
  div {
    text-align: center;
  }
  .aut {
    margin: 20px 0;
    font-size: 14px;
  }
  .con {
    line-height: 30px;
  }
}
</style>