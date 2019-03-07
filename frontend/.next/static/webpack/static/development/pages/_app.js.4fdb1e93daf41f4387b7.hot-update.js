webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/withApollo.js":
/*!***************************!*\
  !*** ./lib/withApollo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");





var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_3__["setContext"])(function (_, _ref) {
  var headers = _ref.headers;
  // get the authentication token from local storage if it exists
  var token = localStorage.getItem('token'); // return the headers to the context so httpLink can read them

  return {
    headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers, {
      authorization: token ? "Bearer ".concat(_config_config__WEBPACK_IMPORTED_MODULE_4__["PRISMA_TOKEN"]) : ''
    })
  };
});
/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref2) {
  var ctx = _ref2.ctx,
      headers = _ref2.headers,
      initialState = _ref2.initialState;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["default"]({
    uri: _config_config__WEBPACK_IMPORTED_MODULE_4__["GRAPHQL_URI"],
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]().restore(initialState || {}),
    fetchOptions: {
      Authorization: "Bearer ".concat(_config_config__WEBPACK_IMPORTED_MODULE_4__["PRISMA_TOKEN"])
    }
  });
}));

/***/ })

})
//# sourceMappingURL=_app.js.4fdb1e93daf41f4387b7.hot-update.js.map