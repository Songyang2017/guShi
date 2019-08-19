<template>
  <div>
    <button @click="isShare =!isShare">点击</button>
    <div
      class="wrapper"
      v-if="!isShare"
    >
      <div class="title">{{origin.title}}</div>
      <div
        class="aut"
        v-if="origin.dynasty"
      >{{origin.dynasty}} - {{origin.author}}</div>
      <div
        class="aut"
        v-else
      >{{origin.author}}</div>
      <div class="con">
        <div
          v-for="(its, index) in origin.content"
          :key="index"
        >{{its}}</div>
      </div>
    </div>
    <share-img
      v-else
      :origin="origin"
    ></share-img>
  </div>
</template>
<script>
import shareImg from '@/components/shareImg'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['origin'])
  },
  data () {
    return {
      isShare: false
    }
  },
  components: { shareImg },
  onShow () {
    let _this = this
    wx.setNavigationBarTitle({
      title: `${_this.origin.title}-${_this.origin.author}`
    })
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