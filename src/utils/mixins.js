import Dialog from '../../static/vant/dialog/dialog'
import userDefault from '../asset/user.png'
import { mapMutations, mapState } from 'vuex'

export default {
  mounted () {
    if (!this.userInfo) {
      this._getUserInfo()
    }
  },
  data () {
    return {
      userDefault
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['getUserInfo']),
    _getUserInfo () {
      // 查看是否授权
      let _this = this
      wx.getSetting({
        lang: 'zh_CN',
        success (res) {
          // console.log('setting', res)
          let { authSetting } = res
          if (authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: res => {
                // console.log(res.userInfo)
                _this.getUserInfo(res.userInfo)
              }
            })
          } else {
            Dialog.alert({
              title: '授权',
              message: '您好，本小程序需要获取您的授权才能正常运行！',
              confirmButtonOpenType: 'getUserInfo'
            }).then(() => {
            })
          }
        }
      })
    },
    GetUserInfoHandler (res) {
      // console.log(res, 123)
      let { target: { errMsg, userInfo } } = res
      if (errMsg === 'getUserInfo:ok') {
        this.getUserInfo(userInfo)
      } else {
        this._getUserInfo()
      }
    }
  }
}
