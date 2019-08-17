import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store

// 初始化数据库
wx.cloud.init({
  env: 'shcii-077f0e',
  traceUser: true
})
Vue.prototype.$db = wx.cloud.database()

const app = new Vue(App)
app.$mount()
