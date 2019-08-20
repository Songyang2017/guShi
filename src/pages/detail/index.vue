<template>
  <div>
    <!-- <button @click="isShare =!isShare">点击</button>
     -->
    <div
      @click="isShare = true"
      class="iconfont share icon-fenxiang"
    ></div>
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
    <!-- <div v-else>
      <share-img :origin="origin"></share-img>
    </div> -->
    <van-dialog
      use-slot
      title="保存图片并分享"
      :show="isShare"
      show-cancel-button
      @close="isShare = false"
      @confirm="saveFile"
    >
      <div class="ctx-box">
        <share-img :origin="origin"></share-img>
      </div>
    </van-dialog>
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
    this.isShare = false
    let _this = this
    wx.setNavigationBarTitle({
      title: `${_this.origin.title}-${_this.origin.author}`
    })
  },
  methods: {
    saveFile () {
      this.$bus.$emit('save-ctx')
    }
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
.share {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: #a2a2a2;
}
.ctx-box {
  padding: 20px 0;
  height: 300px;
  overflow: auto;
}
</style>