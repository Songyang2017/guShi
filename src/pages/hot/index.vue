<template>
  <div>
    <van-search
      :value="query"
      show-action
      @search="getSearch"
      use-action-slot
      placeholder="请输入相关诗词的作者"
    >
      <span
        slot="action"
        @click="query = ''"
      >取消</span>
    </van-search>
    <p class="tip">热门作者</p>
    <div class="hot-keys">
      <div
        class="tit"
        v-for="(it, inx) in hotlist"
        :key="inx"
        @click="clickHot(it)"
      >{{it}}</div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      query: '',
      queryArray: ['poet_tang', 'ci'],
      hotlist: [
        '李白', '李贺', '苏轼', '杜甫', '崔颢', '孟浩然',
        '辛弃疾', '李清照', '白居易', '王昌龄', '欧阳修',
        '王安石', '杜牧', '柳永', '晏几道'
      ]
    }
  },
  onShow () {
    wx.setNavigationBarTitle({
      title: '热门'
    })
  },
  methods: {
    getSearch (ret) {
      let { mp: { detail } } = ret
      this.query = detail
      // console.log(detail)
      wx.navigateTo({
        url: `/pages/listItem/main?id=${this.queryArray}&query=${this.query}&text=${this.query}`
      })
    },
    clickHot (it) {
      this.query = it
      wx.navigateTo({
        url: `/pages/listItem/main?id=${this.queryArray}&query=${this.query}&text=${this.query}`
      })
    }
  }
}
</script>
<style lang="less" scoped>
.tip {
  margin: 15px 0 15px;
  padding: 0 10px;
  font-size: 15px;
}
.hot-keys {
  padding: 0 10px;
  .tit {
    display: inline-block;
    font-size: 15px;
    padding: 5px 10px;
    color: #333;
    background: #f0f3f5;
    margin: 0 10px 10px 0;
  }
}
</style>
