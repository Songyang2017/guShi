<template>
  <div class="wrapper">
    <div class="cards">
      <div class="bg">
        <img
          src="../../asset/ying.png"
          alt=""
        >
      </div>
      <div class="text">
        <div class="content">{{data.content}}</div>
        <div class="tip">{{data.origin.title}}</div>
        <div class="tip">{{data.origin.dynasty}} - {{data.origin.author}}</div>
        <button
          class="user-btn"
          open-type="getUserInfo"
          bindgetuserinfo="bindGetUserInfo"
          v-if="!userInfo && canIUse"
        >点击授权</button>
        <div
          v-else
          class="user-box"
        >
          <img
            mode="cover"
            :src="userInfo.avatarUrl||userPng"
          />
          <p>{{userInfo.nickName}}</p>
        </div>
        <div
          @click="toInsert(data)"
          class="collect-tip"
        ><span
            :style="[collectFlag ? 'color:rgb(255, 49, 42)' : 'color:#c5c5c5']"
            class="icon-shoucang iconfont"
          ></span></div>
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
  </div>
</template>

<script>
import shiCi from '@/utils/jinrishici'
import { mapMutations, mapState } from 'vuex'
import cover from '@/asset/blank.png'
import '@/asset/icon/iconfont.css'
import '@/asset/less/index.less'
import userPng from '@/asset/user.png'

export default {
  data () {
    return {
      data: {},
      flag: false,
      userPng: userPng,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      db: wx.cloud.database(),
      collectFlag: false,
      collectRes: {}
    }
  },
  onPullDownRefresh () {
    this.getData()
  },
  onShareAppMessage (res) {
    // console.log(res)
    return {
      title: `${this.data.origin.title} - ${this.data.origin.author}`,
      path: '/pages/index/main',
      imageUrl: cover
    }
  },
  bindGetUserInfo (e) {
    console.log(e, 123)
    this.getUserInfo(e.detail.userInfo)
  },
  created () {
    this.getData()
    if (!this.userInfo) {
      this._getUserInfo()
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted () {
    wx.cloud.database().collection('ci').where({ tags: ['宋词三百首'] }).get().then(res => {
      console.log('cid', res)
    })
  },
  methods: {
    ...mapMutations(['changeOrg', 'getUserInfo', 'getTipCollect']),
    _getUserInfo () {
      // 查看是否授权
      wx.getSetting({
        lang: 'zh_CN',
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: res => {
                console.log(res.userInfo)
                this.getUserInfo(res.userInfo)
              }
            })
          }
        }
      })
    },
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
            console.log(res)
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
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
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
    width: 65%;
    height: 65vh;
    box-shadow: 0rpx 0rpx 50rpx -10rpx rgba(0, 0, 0, 0.5);
    .text {
      text-align: center;
      .content {
        margin-bottom: 10px;
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
      .user-box {
        margin: 15px auto;
        img {
          border-radius: 50%;
          width: 14vw;
          height: 14vw;
        }
        p {
          font-size: 14px;
        }
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
