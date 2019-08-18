<template>
  <div>
    <div v-if="list.length">
      <div
        v-for="its in list"
        :key="its._id"
        @click="goDetail(its)"
      >
        <div class="card">
          <p class="title">{{its.title || its.rhythmic || its.chapter}}</p>
          <p
            class="author"
            v-if="its.author"
          >{{its.author}}</p>
          <p
            class="p-content"
            v-if="its.paragraphs"
          >{{its.paragraphs[0]}}{{its.paragraphs[1]}}{{its.paragraphs[2]}}</p>
          <p
            v-else
            class="p-content"
          >{{its.content[0]}}</p>
        </div>
      </div>
    </div>
    <div v-if="isNull">
      <div class="null-tip">
        <div class="null-wrapper">
          <img
            mode="cover"
            src="../../asset/img/null.jpg"
            alt=""
          >
          <p>该资源还未收录，去看看其他的吧！</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as API from '@/api/getData'
import { mapMutations } from 'vuex'

const PAGE_SIZE = 10
export default {
  data () {
    return {
      list: [],
      pageIndex: 0,
      total: 0,
      isNull: false
    }
  },
  onLoad () {
    this.initData()
    this._getDataList()
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
    wx.setNavigationBarTitle({
      title: this.$root.$mp.query.text
    })
  },
  watch: {
    '$root.$mp.query.id' (id) {
      this._getDataList()
    }
  },
  methods: {
    ...mapMutations(['changeOrg']),
    // 初始化
    initData () {
      this.list.length = 0
      this.pageIndex = 0
      this.total = 0
      this.isNull = false
    },
    // 获取数据
    async _getDataList () {
      wx.showLoading({
        title: '玩命加载中'
      })
      // console.log(this.$root.$mp.query.id)
      // 如果是从搜索过来的数组
      if (this.$root.$mp.query.id.indexOf(',') > 0) {
        let arr = this.$root.$mp.query.id.split(',')
        const list = await Promise.all([
          API.getDataList(PAGE_SIZE, this.pageIndex, arr[0], { author: this.$root.$mp.query.text }),
          API.getDataList(PAGE_SIZE, this.pageIndex, arr[1], { author: this.$root.$mp.query.text })
        ])
        // console.log(arr, list)
        this.list = this.list.concat(list[0]['list']['data'], list[1]['list']['data'])
        list.forEach(v => {
          if (v.total !== 0) {
            this.total = v.total
          }
        })
        // 无数据提示
        if (this.list.length === 0) {
          this.isNull = true
        }
        wx.hideLoading()
      } else {
        API.getDataList(PAGE_SIZE, this.pageIndex, this.$root.$mp.query.id).then(res => {
          let { list: { data }, total } = res
          this.total = total
          this.list = this.list.concat(data)
          // 无数据提示
          if (this.list.length === 0) {
            this.isNull = true
          }
          wx.hideLoading()
        })
      }
    },
    goDetail (its) {
      let _origin = {
        title: its.title || its.rhythmic || its.chapter,
        author: its.author || its.chapter || '',
        content: its.paragraphs || its.content
      }
      this.changeOrg(_origin)
      wx.navigateTo({
        url: '/pages/detail/main'
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
.null-tip {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .null-wrapper {
    text-align: center;
    img {
      width: 45vw;
      height: 45vw;
    }
    p {
      margin-top: 8px;
      font-size: 14px;
      color: rgba(69, 90, 100, 0.6);
    }
  }
}
</style>