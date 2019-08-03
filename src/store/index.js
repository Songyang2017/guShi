import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    origin: {},
    userInfo: null,
    tipCollect: true
  },
  mutations: {
    changeOrg (state, payload) {
      state.origin = payload
    },
    getUserInfo (state, payload) {
      state.userInfo = payload
    },
    getTipCollect (state) {
      state.tipCollect = !state.tipCollect
    }
  }
})
