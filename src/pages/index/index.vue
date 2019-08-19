<template>
  <div class="wrapper">
    <div class="cards">
      <div class="bg">
        <img
          src="../../asset/ying.png"
          alt=""
        >
      </div>
      <div
        class="text"
        v-if="data"
      >
        <div class="content">{{data.content}}</div>
        <div class="tip">{{data.origin.title}}</div>
        <div class="tip">{{data.origin.dynasty}} - {{data.origin.author}}</div>
        <div
          class="see-all"
          hover-class="none"
          @click="goDetail"
        >查看全部</div>
      </div>
    </div>
    <div
      class="tips"
      hover-class="none"
    >下拉即可刷新</div>
    <van-dialog
      id="van-dialog"
      @getuserinfo="GetUserInfoHandler"
    />
  </div>
</template>

<script>
import shiCi from '@/utils/jinrishici'
import { mapMutations } from 'vuex'
import cover from '@/asset/blank.png'
import '@/asset/less/index.less'
import mixins from '@/utils/mixins'

export default {
  data () {
    return {
      data: {},
      flag: false,
      db: wx.cloud.database(),
      collectFlag: false,
      collectRes: {}
    }
  },
  mixins: [mixins],
  onPullDownRefresh () {
    this.getData()
  },
  onShareAppMessage (res) {
    return {
      title: `${this.data.origin.title} - ${this.data.origin.author}`,
      path: '/pages/index/main',
      imageUrl: cover
    }
  },
  created () {
    this.getData()
  },
  methods: {
    ...mapMutations(['changeOrg', 'getTipCollect']),
    toInsert (data) {
      if (!this.collectFlag) {
        this.db.collection('collection').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            description: data,
            id: data.id,
            due: new Date().valueOf(),
            location: new this.db.Geo.Point(113, 23),
            done: false
          }
        })
          .then(res => {
            // console.log(res)
            this.collectRes = res
            wx.showToast({
              title: '收藏成功！',
              icon: 'none',
              duration: 2000
            })
            this.collectFlag = true
            this.getTipCollect()
          })
          .catch(console.error)
      } else {
        if (this.collectRes._id) {
          this.db.collection('collection').doc(this.collectRes._id).remove()
            .then(res => {
              wx.showToast({
                title: '收藏取消！',
                icon: 'none',
                duration: 2000
              })
              this.collectFlag = false
              this.getTipCollect()
            })
            .catch(console.error)
        }
      }
    },
    getData () {
      shiCi.load(res => {
        // console.log(res)
        this.data = res.data
        wx.stopPullDownRefresh({
          success: () => {
            this.flag = true
            this.collectFlag = false
          }
        })
      })
    },
    goDetail () {
      wx.navigateTo({
        url: '/pages/detail/main'
      })
      this.changeOrg(this.data.origin)
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "KT";
  .tips {
    position: absolute;
    bottom: 8vh;
    font-size: 13px;
    color: #adadad;
    z-index: 1;
    font-family: "KT";
  }
  .cards {
    padding: 20px;
    position: relative;
    z-index: 10;
    background: #fff;
    .bg {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
      width: 48vw;
      height: 62.6vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .see-all {
      font-size: 15px;
      width: 100%;
      line-height: 50px;
      position: absolute;
      bottom: 20px;
      left: 0;
      .icon-jinru {
        font-size: 15px;
        margin-left: 1px;
        vertical-align: top;
      }
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65vw;
    height: 65vh;
    box-shadow: 0rpx 0rpx 50rpx -10rpx rgba(0, 0, 0, 0.5);
    .text {
      text-align: center;
      .content {
        margin-bottom: 30px;
        font-family: "jianti";
      }
      .tip {
        font-size: 14px;
        margin-bottom: 6px;
      }
      .user-btn {
        font-size: 14px;
        width: 120px;
        margin: 15px auto;
      }
      .collect-tip {
        text-align: center;
        font-size: 0;
        .icon-shoucang {
          font-size: 35px;
        }
      }
    }
  }
  .catx {
    position: absolute;
    top: 0;
    left: 0;
    .can {
      z-index: 1000;
      width: 300px;
      height: 450px;
    }
  }
}
</style>
