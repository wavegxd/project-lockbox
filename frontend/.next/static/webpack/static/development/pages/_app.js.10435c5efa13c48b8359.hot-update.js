webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./config/config.js");



/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(function (_ref) {
  var ctx = _ref.ctx,
      headers = _ref.headers,
      initialState = _ref.initialState;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
    uri: _config_config__WEBPACK_IMPORTED_MODULE_2__["GRAPHQL_URI"],
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]().restore(initialState || {})
  });
}));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
false,

/***/ "./node_modules/apollo-link-context/lib/bundle.esm.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false

})
//# sourceMappingURL=_app.js.10435c5efa13c48b8359.hot-update.js.map