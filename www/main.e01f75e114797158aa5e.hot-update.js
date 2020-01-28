webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Agenda.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Agenda.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    appHeader: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n\n  mounted() {\n    if (window.innerWidth < 800) {\n      this.visibleDays = 1;\n    }\n\n    this.getWeek();\n    this.$http.get('categoria?_embed&__hide_empty=1').then(res => {\n      this.categorias = res.data;\n      this.getPosts();\n    });\n  },\n\n  data() {\n    return {\n      categorias: [],\n      week: 0,\n      visibleDays: 7,\n      activeDay: false,\n      week_days: [],\n      days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],\n      months: [\"Jan\", \"Fev\", \"Mar\", \"Abr\", \"Mai\", \"Jun\", \"Jul\", \"Ago\", \"Set\", \"Out\", \"Nov\", \"Dez\"],\n      s: '',\n      now: new Date(),\n      curr_date: new Date(),\n      selectedDate: new Date()\n    };\n  },\n\n  methods: {\n    getImage(post) {\n      var img = post._embedded['wp:featuredmedia'][0].media_details;\n\n      if (img) {\n        return post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;\n      }\n\n      return 'https://via.placeholder.com/388x214';\n    },\n\n    getPosts() {\n      for (var i in this.categorias) {\n        this.$http.get('agenda?_embed&categoria[]=' + this.categorias[i].id + '&dia_de_inicio=' + this.activeDay.valueOf()).then(resp => {\n          vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(this.categorias[i], 'posts', resp.data);\n          this.categorias[i].page = 0;\n          console.log(resp); //this.categorias.push(this.categorias[i])\n        });\n      }\n    },\n\n    nextPage(category) {\n      if (category.page < category.posts.length) {\n        category.page++;\n      }\n    },\n\n    prevPage(category) {\n      if (category.page > 0) {\n        category.page--;\n      }\n    },\n\n    getWeek() {\n      this.week_days = [];\n      this.activeDay = false;\n\n      for (var d = 0; d < this.visibleDays; d++) {\n        var date = new Date(this.curr_date);\n\n        if (this.activeDay === false) {\n          this.activeDay = date;\n        }\n\n        date.setDate(date.getDate() + d);\n        this.week_days.push(date);\n      }\n\n      console.log(this.curr_date);\n    },\n\n    next() {\n      this.curr_date = this.curr_date.addDays(this.visibleDays);\n      this.getWeek();\n    },\n\n    prev() {\n      this.curr_date = this.curr_date.subDays(this.visibleDays);\n      this.getWeek();\n    }\n\n  },\n  watch: {\n    activeDay() {\n      this.getPosts();\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/Agenda.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-class-component/dist/vue-class-component.esm.js":
false,

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Header.vue?vue&type=template&id=61dd7a3d&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=template&id=61dd7a3d& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [_vm._v(\"Header\")])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Header.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js":
false,

/***/ "./src/components/Header.ts":
false,

/***/ "./src/components/Header.vue":
/*!***********************************!*\
  !*** ./src/components/Header.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header_vue_vue_type_template_id_61dd7a3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=61dd7a3d& */ \"./src/components/Header.vue?vue&type=template&id=61dd7a3d&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _Header_vue_vue_type_template_id_61dd7a3d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Header_vue_vue_type_template_id_61dd7a3d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (true) {\n  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ \"./node_modules/vue-hot-reload-api/dist/index.js\")\n  api.install(__webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\"))\n  if (api.compatible) {\n    module.hot.accept()\n    if (!api.isRecorded('61dd7a3d')) {\n      api.createRecord('61dd7a3d', component.options)\n    } else {\n      api.reload('61dd7a3d', component.options)\n    }\n    module.hot.accept(/*! ./Header.vue?vue&type=template&id=61dd7a3d& */ \"./src/components/Header.vue?vue&type=template&id=61dd7a3d&\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Header_vue_vue_type_template_id_61dd7a3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=61dd7a3d& */ \"./src/components/Header.vue?vue&type=template&id=61dd7a3d&\");\n(function () {\n      api.rerender('61dd7a3d', {\n        render: _Header_vue_vue_type_template_id_61dd7a3d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n        staticRenderFns: _Header_vue_vue_type_template_id_61dd7a3d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]\n      })\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))\n  }\n}\ncomponent.options.__file = \"src/components/Header.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Header.vue?");

/***/ }),

/***/ "./src/components/Header.vue?vue&type=template&id=61dd7a3d&":
/*!******************************************************************!*\
  !*** ./src/components/Header.vue?vue&type=template&id=61dd7a3d& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_61dd7a3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=61dd7a3d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Header.vue?vue&type=template&id=61dd7a3d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_61dd7a3d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_61dd7a3d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Header.vue?");

/***/ })

})