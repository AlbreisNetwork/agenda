webpackHotUpdate("main",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Agenda.vue?vue&type=template&id=bc663ca0&scoped=true&lang=pug&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Agenda.vue?vue&type=template&id=bc663ca0&scoped=true&lang=pug& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"app-header\", { attrs: { categorias: _vm.categorias } }),\n      _c(\"div\", { staticClass: \"agenda\" }, [\n        _c(\"div\", { staticClass: \"search\" }, [\n          _c(\"form\", [\n            _c(\"div\", { staticClass: \"fa fa-search\" }),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.s,\n                  expression: \"s\"\n                }\n              ],\n              attrs: { type: \"search\", placeholder: \"Nome do evento ou local\" },\n              domProps: { value: _vm.s },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.s = $event.target.value\n                }\n              }\n            }),\n            _c(\"button\", { attrs: { type: \"button\" } }, [_vm._v(\"Encontrar\")])\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"lista\" }, [\n          _c(\"div\", { staticClass: \"container\" }, [\n            _vm._m(0),\n            _c(\"div\", { staticClass: \"daybar\" }, [\n              _c(\"div\", { staticClass: \"now\" }, [\n                _c(\"div\", { staticClass: \"day-number\" }, [\n                  _vm._v(_vm._s(_vm.now.getDate()))\n                ]),\n                _c(\"div\", { staticClass: \"day-text\" }, [\n                  _c(\"div\", { staticClass: \"day-name\" }, [\n                    _vm._v(_vm._s(_vm.days[_vm.now.getDay()]))\n                  ]),\n                  _c(\"div\", { staticClass: \"day-my\" }, [\n                    _c(\"span\", [\n                      _vm._v(_vm._s(_vm.months[_vm.now.getMonth()]) + \" \")\n                    ]),\n                    _c(\"span\", [\n                      _vm._v(\n                        _vm._s(\n                          _vm.now\n                            .getYear()\n                            .toString()\n                            .substr(1, 2)\n                        )\n                      )\n                    ])\n                  ])\n                ])\n              ]),\n              _c(\"div\", { staticClass: \"days-carousel\" }, [\n                _c(\"div\", { staticClass: \"prev\", on: { click: _vm.prev } }, [\n                  _c(\"div\", { staticClass: \"fa fa-angle-left\" })\n                ]),\n                _c(\n                  \"div\",\n                  { staticClass: \"days\" },\n                  _vm._l(_vm.week_days, function(day) {\n                    return _c(\n                      \"div\",\n                      {\n                        staticClass: \"day\",\n                        class: { active: day == _vm.activeDay },\n                        on: {\n                          click: function($event) {\n                            _vm.activeDay = day\n                          }\n                        }\n                      },\n                      [\n                        _c(\"div\", { staticClass: \"day-name\" }, [\n                          _vm._v(_vm._s(_vm.days[day.getDay()].substr(0, 3)))\n                        ]),\n                        _c(\"div\", { staticClass: \"day-number\" }, [\n                          _vm._v(_vm._s(day.getDate()))\n                        ]),\n                        _c(\"div\", { staticClass: \"month\" }, [\n                          _vm._v(_vm._s(_vm.months[day.getMonth()]))\n                        ])\n                      ]\n                    )\n                  }),\n                  0\n                ),\n                _c(\"div\", { staticClass: \"next\", on: { click: _vm.next } }, [\n                  _c(\"div\", { staticClass: \"fa fa-angle-right\" })\n                ])\n              ]),\n              _c(\"img\", {\n                staticClass: \"logo\",\n                attrs: { src: \"https://via.placeholder.com/100x100\" }\n              })\n            ]),\n            _c(\"div\", { staticClass: \"main\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"categories\" },\n                _vm._l(_vm.categorias, function(category) {\n                  return category.posts && category.posts.length\n                    ? _c(\n                        \"div\",\n                        { staticClass: \"category\" },\n                        [\n                          _c(\n                            \"router-link\",\n                            {\n                              staticClass: \"category-title\",\n                              attrs: { to: \"categoria/\" + category.slug }\n                            },\n                            [_vm._v(_vm._s(category.name))]\n                          ),\n                          _c(\"hr\"),\n                          _c(\"div\", { staticClass: \"carousel\" }, [\n                            _vm._m(1, true),\n                            _c(\n                              \"div\",\n                              { staticClass: \"events\" },\n                              _vm._l(category.posts, function(post) {\n                                return _c(\n                                  \"a\",\n                                  {\n                                    staticClass: \"event\",\n                                    attrs: { href: \"#\" }\n                                  },\n                                  [\n                                    _c(\"div\", { staticClass: \"date\" }, [\n                                      _c(\"div\", {\n                                        staticClass: \"far fa-clock\"\n                                      }),\n                                      _c(\"span\", [\n                                        post.acf.dia_de_inicio\n                                          ? _c(\"span\", [\n                                              _vm._v(\n                                                \"De \" +\n                                                  _vm._s(post.acf.dia_de_inicio)\n                                              )\n                                            ])\n                                          : _vm._e(),\n                                        post.acf.hora_de_inicio\n                                          ? _c(\"span\", [\n                                              _vm._v(\n                                                \"- \" +\n                                                  _vm._s(\n                                                    post.acf.hora_de_inicio\n                                                  )\n                                              )\n                                            ])\n                                          : _vm._e(),\n                                        post.acf.dia_de_termino\n                                          ? _c(\"span\", [\n                                              _vm._v(\n                                                \"a \" +\n                                                  _vm._s(\n                                                    post.acf.dia_de_termino\n                                                  )\n                                              )\n                                            ])\n                                          : _vm._e(),\n                                        post.acf.hora_de_termino\n                                          ? _c(\"span\", [\n                                              _vm._v(\n                                                \"- \" +\n                                                  _vm._s(\n                                                    post.acf.hora_de_termino\n                                                  )\n                                              )\n                                            ])\n                                          : _vm._e()\n                                      ])\n                                    ]),\n                                    _c(\n                                      \"div\",\n                                      { staticClass: \"tags\" },\n                                      _vm._l(\n                                        post._embedded[\"wp:term\"],\n                                        function(tag) {\n                                          return tag[0].taxonomy == \"tipos\"\n                                            ? _c(\n                                                \"div\",\n                                                { staticClass: \"tag\" },\n                                                [_vm._v(_vm._s(tag[0].name))]\n                                              )\n                                            : _vm._e()\n                                        }\n                                      ),\n                                      0\n                                    ),\n                                    _vm.getImage(post)\n                                      ? _c(\"div\", { staticClass: \"image\" }, [\n                                          _c(\"img\", {\n                                            attrs: { src: _vm.getImage(post) }\n                                          })\n                                        ])\n                                      : _vm._e(),\n                                    _c(\"h4\", { staticClass: \"headline\" }, [\n                                      _vm._v(_vm._s(post.acf.headline))\n                                    ]),\n                                    _c(\"h3\", { staticClass: \"title\" }, [\n                                      _vm._v(_vm._s(post.title.rendered))\n                                    ])\n                                  ]\n                                )\n                              }),\n                              0\n                            ),\n                            _vm._m(2, true)\n                          ])\n                        ],\n                        1\n                      )\n                    : _vm._e()\n                }),\n                0\n              ),\n              0\n                ? undefined\n                : _vm._e()\n            ])\n          ])\n        ])\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"h3\", { staticClass: \"list-title\" }, [\n      _c(\"div\", { staticClass: \"fa fa-calendar-alt\" }),\n      _vm._v(\"Eventos do dia\")\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"prev\" }, [\n      _c(\"div\", { staticClass: \"fa fa-chevron-left\" })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"next\" }, [\n      _c(\"div\", { staticClass: \"fa fa-chevron-right\" })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/Agenda.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})