<template>
  <div v-if="list.length">
    <div
      v-for="its in list"
      :key="its._id"
      class="card"
    >
      <p class="title">{{its.title || its.rhythmic || its.chapter}}</p>
      <p
        class="author"
        v-if="its.author"
      >{{its.author}}</p>
      <p class="p-content">{{its.paragraphs[0] || its.content[0]}}{{its.paragraphs[1] || its.content[1]}}{{its.paragraphs[2] || its.content[2]}}</p>
    </div>
  </div>
</template>
<script>
import * as API from '@/api/getData'

const PAGE_SIZE = 10
export default {
  data () {
    return {
      list: [],
      pageIndex: 0,
      total: 0
    }
  },
  onLoad () {
    this.initData()
  },
  onReachBottom () {
    this.pageIndex++
    if (this.total !== 0 && this.total > this.list.length) {
      this._getDataList()
    } else {
      wx.showToast({
        title: '到底啦！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  onShow () {
    this._getDataList()
    wx.setNavigationBarTitle({
      title: this.$root.$mp.query.text
    })
  },
  methods: {
    // 初始化
    initData () {
      this.list.length = 0
      this.pageIndex = 0
      this.total = 0
    },
    // 获取数据
    _getDataList () {
      wx.showLoading({
        title: '玩命加载中'
      })
      API.getDataList(PAGE_SIZE, this.pageIndex, this.$root.$mp.query.id).then(res => {
        let { list: { data }, total } = res
        this.total = total
        this.list = this.list.concat(data)
        wx.hideLoading()
      })
    }
  }
}
</script>
<style scoped lang="less">
.multiEllipsis(@x) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: @x;
  overflow: hidden;
}
.card {
  margin: 0 18px 18px;
  padding: 15px;
  box-shadow: 0rpx 0rpx 23rpx -10rpx rgba(0, 0, 0, 0.5);
  .title {
    font-size: 16px;
    margin-bottom: 8px;
  }
  .author {
    font-size: 13px;
    margin-bottom: 10px;
    color: rgba(69, 90, 100, 0.6);
  }
  .p-content {
    .multiEllipsis(1);
    font-size: 16px;
  }
}
</style>