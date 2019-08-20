require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(86);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_14667ed0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(92);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(87)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14667ed0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_14667ed0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14667ed0", Component.options)
  } else {
    hotAPI.reload("data-v-14667ed0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_jinrishici__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_jinrishici___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_jinrishici__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asset_blank_png__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asset_blank_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__asset_blank_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__asset_less_index_less__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__asset_less_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__asset_less_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_mixins__ = __webpack_require__(36);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      data: {},
      flag: false,
      db: wx.cloud.database(),
      collectFlag: false,
      collectRes: {}
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_5__utils_mixins__["a" /* default */]],
  onPullDownRefresh: function onPullDownRefresh() {
    this.getData();
  },
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: this.data.origin.title + ' - ' + this.data.origin.author,
      path: '/pages/index/main',
      imageUrl: __WEBPACK_IMPORTED_MODULE_3__asset_blank_png___default.a
    };
  },
  created: function created() {
    this.getData();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapMutations */])(['changeOrg', 'getTipCollect']), {
    toInsert: function toInsert(data) {
      var _this = this;

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
        }).then(function (res) {
          // console.log(res)
          _this.collectRes = res;
          wx.showToast({
            title: '收藏成功！',
            icon: 'none',
            duration: 2000
          });
          _this.collectFlag = true;
          _this.getTipCollect();
        }).catch(console.error);
      } else {
        if (this.collectRes._id) {
          this.db.collection('collection').doc(this.collectRes._id).remove().then(function (res) {
            wx.showToast({
              title: '收藏取消！',
              icon: 'none',
              duration: 2000
            });
            _this.collectFlag = false;
            _this.getTipCollect();
          }).catch(console.error);
        }
      }
    },
    getData: function getData() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_1__utils_jinrishici___default.a.load(function (res) {
        // console.log(res)
        _this2.data = res.data;
        wx.stopPullDownRefresh({
          success: function success() {
            _this2.flag = true;
            _this2.collectFlag = false;
          }
        });
      });
    },
    goDetail: function goDetail() {
      wx.navigateTo({
        url: '/pages/detail/main'
      });
      this.changeOrg(this.data.origin);
    }
  })
});

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

/**
 * 今日诗词V2 Mini-Program-SDK 1.0
 * https://www.jinrishici.com
 */
var waitingQueue = [];
var lock = false;
var load = function load(callback) {
  getTokenAndDo(function (token) {
    wx.request({
      url: 'https://v2.jinrishici.com/one.json?client=mini-progrram-sdk/1.0',
      header: {
        'X-User-Token': token
      },
      success: function success(res) {
        if (res.data.status === 'success') {
          callback(res.data);
        } else {
          console.error('今日诗词API 获取古诗词 失败，错误原因：' + res.data.errMessage);
        }
      },
      fail: function fail() {
        console.error('今日诗词-小程序SDK 获取古诗词失败，可能是网络问题或者您没有添加到域名白名单');
      }
    });
  });
};

var getTokenAndDo = function getTokenAndDo(callback) {
  var token = wx.getStorageSync('jinrishici-token');
  if (token) {
    callback(token);
  } else {
    waitingQueue.push(callback);
    if (lock) {
      return;
    }
    lock = true;
    wx.request({
      url: 'https://v2.jinrishici.com/token?client=mini-progrram-sdk/1.0',
      success: function success(res) {
        if (res.data.status === 'success') {
          wx.setStorageSync('jinrishici-token', res.data.data);
          lock = false;
          while (waitingQueue.length > 0) {
            waitingQueue.pop()(res.data.data);
          }
        } else {
          console.error('今日诗词API获取 Token 失败，错误原因：' + res.data.errMessage);
          lock = false;
        }
      },
      fail: function fail() {
        console.error('今日诗词-小程序SDK 获取 Token 失败，可能是网络问题或者您没有添加到域名白名单');
      }
    });
  }
};

module.exports = {
  load: load
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blank.png";

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "cards"
  }, [_vm._m(0), _vm._v(" "), (_vm.data) ? _c('div', {
    staticClass: "text"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.data.content))]), _vm._v(" "), _c('div', {
    staticClass: "tip"
  }, [_vm._v(_vm._s(_vm.data.origin.title))]), _vm._v(" "), _c('div', {
    staticClass: "tip"
  }, [_vm._v(_vm._s(_vm.data.origin.dynasty) + " - " + _vm._s(_vm.data.origin.author))]), _vm._v(" "), _c('div', {
    staticClass: "see-all",
    attrs: {
      "hover-class": "none",
      "eventid": '0'
    },
    on: {
      "click": _vm.goDetail
    }
  }, [_vm._v("查看全部")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "tips",
    attrs: {
      "hover-class": "none"
    }
  }, [_vm._v("下拉即可刷新")]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "getuserinfo": _vm.GetUserInfoHandler
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg"
  }, [_c('img', {
    attrs: {
      "src": "../../asset/ying.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-14667ed0", esExports)
  }
}

/***/ })

},[85]);