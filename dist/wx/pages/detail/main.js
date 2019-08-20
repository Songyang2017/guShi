require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_shareImg_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_459c784b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_shareImg_vue__ = __webpack_require__(171);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(169)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-459c784b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_shareImg_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_459c784b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_shareImg_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\shareImg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] shareImg.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-459c784b", Component.options)
  } else {
    hotAPI.reload("data-v-459c784b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_img_minQr_jpg__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_img_minQr_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__asset_img_minQr_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(6);

//
//
//
//
//
//
//
//




var WIN_WH = wx.getSystemInfoSync().windowWidth;
var WIN_HE = wx.getSystemInfoSync().windowHeight;
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    origin: Object
  },
  onLoad: function onLoad() {
    this.$bus.$off('save-ctx');
    this.initCanvas();
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapState */])(['userInfo'])),
  mounted: function mounted() {
    var _this = this;

    this.$bus.$on('save-ctx', function () {
      _this.saveCanvas();
    });
  },
  data: function data() {
    return {
      winWh: WIN_WH * 0.8,
      winHe: WIN_HE,
      size: {
        normal: 13,
        aut: 12
      },
      ctx: '',
      line: {
        base: 80,
        sept: 27
      }
    };
  },

  methods: {
    saveCanvas: function saveCanvas() {
      var _this2 = this;

      var qrWh = 60;
      var qrHe = 60;
      this.ctx = wx.createCanvasContext('my-ctx');
      var _list = this.origin.content.join(',').replace(/!|\?|？/g, ',').split('。');

      // this.winHe = (4 + _list.length) * this.line.sept
      this.winHe = qrHe + this.line.base + this.size.normal + (1 + _list.length) * this.line.sept + this.size.aut + _list.length * this.size.normal;

      this.ctx.setFillStyle('#fffbf8');
      this.ctx.fillRect(0, 0, this.winWh, this.winHe);
      this.ctx.setTextAlign('center');
      this.ctx.setFontSize(this.size.aut);
      this.ctx.setFillStyle('#a2a2a2');
      this.ctx.setFontSize(this.size.aut);
      this.ctx.fillText(this.userInfo.nickName + ' \u5206\u4EAB', this.winWh / 2, this.line.base / 2);
      this.ctx.setFillStyle('#454545');
      this.ctx.fillText(this.origin.title, this.winWh / 2, this.line.base);
      this.ctx.setFontSize(this.size.aut);
      this.ctx.fillText(this.origin.author, this.winWh / 2, this.line.base + this.line.sept * 1);
      this.ctx.setFontSize(this.size.normal);

      _list.forEach(function (v, i) {
        _this2.ctx.fillText(v.replace(/,/g, ''), _this2.winWh / 2, _this2.line.base + _this2.line.sept * (i + 2));
      });

      this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_1__asset_img_minQr_jpg___default.a, this.winWh / 2 - qrWh / 2, this.winHe - 120, qrWh, qrHe);
      this.ctx.setFillStyle('#a2a2a2');
      this.ctx.setFontSize(this.size.aut);
      this.ctx.fillText('\u6253\u5F00\u5FAE\u4FE1\u641C\u7D22 \u201C\u8BD7\u4E0E\u8BCD\u201D', this.winWh / 2, this.winHe - 40);

      this.ctx.draw(false, function () {
        wx.canvasToTempFilePath({
          canvasId: 'my-ctx',
          x: 0,
          y: 0,
          width: _this2.winWh,
          height: _this2.winHe,
          destWidth: _this2.winWh * 10,
          destHeight: _this2.winHe * 10,
          fileType: 'jpg',
          quality: 1,
          success: function success(res) {
            var tempFilePath = res.tempFilePath;

            wx.saveImageToPhotosAlbum({
              filePath: tempFilePath,
              success: function success() {
                wx.showToast({
                  icon: 'none',
                  title: '分享图片已保存至相册',
                  duration: 2000
                });
              }
            });
          }
        });
      });
    },
    initCanvas: function initCanvas() {
      var _this3 = this;

      var qrWh = 60;
      var qrHe = 60;
      this.ctx = wx.createCanvasContext('my-ctx');
      var _list = this.origin.content.join(',').replace(/!|\?|？/g, ',').split('。');

      // this.winHe = (4 + _list.length) * this.line.sept
      this.winHe = qrHe + this.line.base + this.size.normal + (1 + _list.length) * this.line.sept + this.size.aut + _list.length * this.size.normal;

      this.ctx.setFillStyle('#fffbf8');
      this.ctx.fillRect(0, 0, this.winWh, this.winHe);
      this.ctx.setTextAlign('center');
      this.ctx.setFontSize(this.size.aut);
      this.ctx.setFillStyle('#a2a2a2');
      this.ctx.setFontSize(this.size.aut);
      this.ctx.fillText(this.userInfo.nickName + ' \u5206\u4EAB', this.winWh / 2, this.line.base / 2);
      this.ctx.setFillStyle('#454545');
      this.ctx.fillText(this.origin.title, this.winWh / 2, this.line.base);
      this.ctx.setFontSize(this.size.aut);
      this.ctx.fillText(this.origin.author, this.winWh / 2, this.line.base + this.line.sept * 1);
      this.ctx.setFontSize(this.size.normal);

      _list.forEach(function (v, i) {
        _this3.ctx.fillText(v.replace(/,/g, ''), _this3.winWh / 2, _this3.line.base + _this3.line.sept * (i + 2));
      });

      this.ctx.drawImage(__WEBPACK_IMPORTED_MODULE_1__asset_img_minQr_jpg___default.a, this.winWh / 2 - qrWh / 2, this.winHe - 120, qrWh, qrHe);
      this.ctx.setFillStyle('#a2a2a2');
      this.ctx.setFontSize(this.size.aut);
      this.ctx.fillText('\u6253\u5F00\u5FAE\u4FE1\u641C\u7D22 \u201C\u8BD7\u4E0E\u8BCD\u201D', this.winWh / 2, this.winHe - 40);
      this.ctx.draw();
    }
  }
});

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "canvas-box"
  }, [_c('canvas', {
    style: ({
      width: _vm.winWh + 'px',
      height: _vm.winHe + 'px'
    }),
    attrs: {
      "canvas-id": "my-ctx"
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-459c784b", esExports)
  }
}

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/minQr.jpg";

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(70);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1d936461_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(73);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(71)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d936461"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1d936461_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d936461", Component.options)
  } else {
    hotAPI.reload("data-v-1d936461", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_shareImg__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(6);

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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapState */])(['origin'])),
  data: function data() {
    return {
      isShare: false
    };
  },

  components: { shareImg: __WEBPACK_IMPORTED_MODULE_1__components_shareImg__["a" /* default */] },
  onShow: function onShow() {
    this.isShare = false;
    var _this = this;
    wx.setNavigationBarTitle({
      title: _this.origin.title + '-' + _this.origin.author
    });
  },

  methods: {
    saveFile: function saveFile() {
      this.$bus.$emit('save-ctx');
    }
  }
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "iconfont share icon-fenxiang",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.isShare = true
      }
    }
  }), _vm._v(" "), (!_vm.isShare) ? _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.origin.title))]), _vm._v(" "), (_vm.origin.dynasty) ? _c('div', {
    staticClass: "aut"
  }, [_vm._v(_vm._s(_vm.origin.dynasty) + " - " + _vm._s(_vm.origin.author))]) : _c('div', {
    staticClass: "aut"
  }, [_vm._v(_vm._s(_vm.origin.author))]), _vm._v(" "), _c('div', {
    staticClass: "con"
  }, _vm._l((_vm.origin.content), function(its, index) {
    return _c('div', {
      key: index
    }, [_vm._v(_vm._s(its))])
  }))]) : _vm._e(), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "use-slot": "",
      "title": "分享",
      "show": _vm.isShare,
      "show-cancel-button": "",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "close": function($event) {
        _vm.isShare = false
      },
      "confirm": _vm.saveFile
    }
  }, [_c('div', {
    staticClass: "ctx-box"
  }, [_c('share-img', {
    attrs: {
      "origin": _vm.origin,
      "mpcomid": '0'
    }
  })], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1d936461", esExports)
  }
}

/***/ })

},[69]);