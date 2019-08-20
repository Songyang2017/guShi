require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(103);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0cac13a1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0cac13a1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0cac13a1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\listItem\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cac13a1", Component.options)
  } else {
    hotAPI.reload("data-v-0cac13a1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_getData__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(6);




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
//
//
//
//
//




var PAGE_SIZE = 10;
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      list: [],
      pageIndex: 0,
      total: 0,
      isNull: false
    };
  },
  onLoad: function onLoad() {
    this.initData();
    this._getDataList();
  },
  onReachBottom: function onReachBottom() {
    this.pageIndex++;
    if (this.total !== 0 && this.total > this.list.length) {
      this._getDataList();
    } else {
      wx.showToast({
        title: '到底啦！',
        icon: 'none',
        duration: 2000
      });
    }
  },
  onShow: function onShow() {
    wx.setNavigationBarTitle({
      title: this.$root.$mp.query.text
    });
  },

  watch: {
    '$root.$mp.query.id': function $root$mpQueryId(id) {
      this._getDataList();
    }
  },
  methods: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapMutations */])(['changeOrg']), {
    // 初始化
    initData: function initData() {
      this.list.length = 0;
      this.pageIndex = 0;
      this.total = 0;
      this.isNull = false;
    },

    // 获取数据
    _getDataList: function _getDataList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var arr, list;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading({
                  title: '玩命加载中'
                });
                // console.log(this.$root.$mp.query.id)
                // 如果是从搜索过来的数组

                if (!(_this.$root.$mp.query.id.indexOf(',') > 0)) {
                  _context.next = 12;
                  break;
                }

                arr = _this.$root.$mp.query.id.split(',');
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all([__WEBPACK_IMPORTED_MODULE_4__api_getData__["a" /* getDataList */](PAGE_SIZE, _this.pageIndex, arr[0], { author: _this.$root.$mp.query.text }), __WEBPACK_IMPORTED_MODULE_4__api_getData__["a" /* getDataList */](PAGE_SIZE, _this.pageIndex, arr[1], { author: _this.$root.$mp.query.text })]);

              case 5:
                list = _context.sent;

                // console.log(arr, list)
                _this.list = _this.list.concat(list[0]['list']['data'], list[1]['list']['data']);
                list.forEach(function (v) {
                  if (v.total !== 0) {
                    _this.total = v.total;
                  }
                });
                // 无数据提示
                if (_this.list.length === 0) {
                  _this.isNull = true;
                }
                wx.hideLoading();
                _context.next = 13;
                break;

              case 12:
                __WEBPACK_IMPORTED_MODULE_4__api_getData__["a" /* getDataList */](PAGE_SIZE, _this.pageIndex, _this.$root.$mp.query.id).then(function (res) {
                  var data = res.list.data,
                      total = res.total;

                  _this.total = total;
                  _this.list = _this.list.concat(data);
                  // 无数据提示
                  if (_this.list.length === 0) {
                    _this.isNull = true;
                  }
                  wx.hideLoading();
                });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    goDetail: function goDetail(its) {
      var _origin = {
        title: its.title || its.rhythmic || its.chapter,
        author: its.author || its.chapter || '',
        content: its.paragraphs || its.content
      };
      this.changeOrg(_origin);
      wx.navigateTo({
        url: '/pages/detail/main'
      });
    }
  })
});

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDataList; });
/* unused harmony export getImageinfo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);


/**
 *
 * @param {*} pageSize 分页数据
 * @param {*} pageNo 页码
 * @param {*} name 集合名字
 * @param {*} queryObj 查询条件
 */
var getDataList = function getDataList(pageSize, pageNo, name, queryObj) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.cloud.callFunction({
      name: 'pages',
      data: {
        pageSize: pageSize,
        pageNo: pageNo,
        name: name,
        queryObj: queryObj
      },
      success: function success(res) {
        resolve(res.result);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};

var getImageinfo = function getImageinfo(url) {
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.getImageinfo({
      url: url,
      success: resolve,
      file: reject
    });
  });
};

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.list.length) ? _c('div', _vm._l((_vm.list), function(its, index) {
    return _c('div', {
      key: its._id,
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetail(its)
        }
      }
    }, [_c('div', {
      staticClass: "card"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(its.title || its.rhythmic || its.chapter))]), _vm._v(" "), (its.author) ? _c('p', {
      staticClass: "author"
    }, [_vm._v(_vm._s(its.author))]) : _vm._e(), _vm._v(" "), (its.paragraphs) ? _c('p', {
      staticClass: "p-content"
    }, [_vm._v(_vm._s(its.paragraphs[0]) + _vm._s(its.paragraphs[1]) + _vm._s(its.paragraphs[2]))]) : _c('p', {
      staticClass: "p-content"
    }, [_vm._v(_vm._s(its.content[0]))])], 1)])
  })) : _vm._e(), _vm._v(" "), (_vm.isNull) ? _c('div', [_c('div', {
    staticClass: "null-tip"
  }, [_c('div', {
    staticClass: "null-wrapper"
  }, [_c('img', {
    attrs: {
      "mode": "cover",
      "src": "../../asset/img/null.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("该资源还未收录，去看看其他的吧！")])], 1)])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0cac13a1", esExports)
  }
}

/***/ })

},[102]);