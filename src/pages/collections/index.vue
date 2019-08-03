<template>
  <div class="wrapper">
    <div
      class="box"
      v-for="(its, index) in list"
      :key="index"
      @click="goDetail(its.description.origin)"
    >
      <div class="box-l">
        <p>{{its.description.origin.title}}</p>
        <p>{{its.description.origin.author}}</p>
      </div>
      <div
        class="box-r"
        @click.stop="removeCollect(its._id)"
      >
        <span class="icon-iconfontshanchu1 iconfont"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import '@/asset/icon/iconfont.css'
export default {
  data () {
    return {
      openId: '',
      list: [],
      db: wx.cloud.database()
    }
  },
  onLoad () {
    wx.showLoading({
      title: '加载中'
    })
    wx.cloud.callFunction({
      name: 'user',
      complete: res => {
        console.log('callFunction test result: ', res)
        let { result: { OPENID } } = res
        this.openId = OPENID
        this.toQuery(this.openId)
      }
    })
  },
  computed: {
    ...mapState(['tipCollect'])
  },
  watch: {
    tipCollect () {
      this.toQuery(this.openId)
    }
  },
  methods: {
    ...mapMutations(['changeOrg']),
    toQuery (id) {
      this.db.collection('collection').where({
        _openid: id
      }).get().then(res => {
        wx.hideLoading()
        this.list = res.data
        // console.log(this.list)
      })
    },
    goDetail (data) {
      this.changeOrg(data)
      wx.navigateTo({
        url: '/pages/detail/main'
      })
    },
    removeCollect (id) {
      this.db.collection('collection').doc(id).remove()
        .then(res => {
          wx.showToast({
            title: '收藏取消成功！',
            icon: 'none',
            duration: 2000
          })
          // this.getTipCollect()
          this.toQuery(this.openId)
        })
        .catch(console.error)
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../asset/less/index.less";
.wrapper {
  .box {
    width: 88%;
    margin: 10px auto;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0rpx 0rpx 15rpx -3rpx rgba(0, 0, 0, 0.5);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .box-l {
      p {
        font-size: 15px;
        .multiEllipsis(1);
      }
    }
    .box-r {
      .icon-iconfontshanchu1 {
        font-size: 20px;
        color: #c5c5c5;
      }
    }
  }
}
</style>