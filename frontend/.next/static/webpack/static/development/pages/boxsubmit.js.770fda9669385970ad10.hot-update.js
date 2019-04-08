webpackHotUpdate("static/development/pages/boxsubmit.js",{

/***/ "./components/BoxSubmit.js":
/*!*********************************!*\
  !*** ./components/BoxSubmit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/Roa/Desktop/project-lockbox/frontend/components/BoxSubmit.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  mutation CREATE_LOCKBOX_MUTATION(\n    $amount: Float!\n    $branch: String!\n    $box: String!\n    $time: String!\n    $date: String!\n  ) {\n    createLockbox(\n      data: {\n        amount: $amount\n        branch: $branch\n        box: $box\n        time: $time\n        date: $date\n      }\n    ) {\n      amount\n      branch\n      box\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CREATE_LOCKBOX_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());

function BoxSubmit() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    branch: '',
    box: '',
    time: '',
    date: '',
    amount: 0
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
      boxForm = _useState2[0],
      setBoxForm = _useState2[1];

  var handleFormReset = function handleFormReset() {
    setBoxForm(function () {
      return boxForm;
    });
  };

  var updateBoxForm = function updateBoxForm(e) {
    if (e.target.name === 'amount') {
      setBoxForm(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, boxForm, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_3___default()(e.target.value))));
    } else {
      setBoxForm(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, boxForm, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Mutation"], {
    mutation: CREATE_LOCKBOX_MUTATION,
    variables: boxForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, function (createLockbox, _ref) {
    var error = _ref.error,
        loading = _ref.loading;
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
      method: "post",
      onSubmit:
      /*#__PURE__*/
      function () {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  console.log(boxForm);
                  _context.next = 4;
                  return createLockbox();

                case 4:
                  e.target.reset();

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(),
      onReset: handleFormReset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      htmlFor: "branch",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Branch", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      type: "text",
      name: "branch",
      placeholder: "Branch",
      onChange: updateBoxForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      htmlFor: "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Box", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      type: "text",
      name: "box",
      placeholder: "Box",
      onChange: updateBoxForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      htmlFor: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Time", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      type: "text",
      name: "time",
      placeholder: "Time",
      onChange: updateBoxForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      htmlFor: "amount",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Amount", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      type: "number",
      step: 0.1,
      name: "amount",
      placeholder: "Amount",
      onChange: updateBoxForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
      htmlFor: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "Date", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
      type: "text",
      name: "date",
      placeholder: "Date",
      onChange: updateBoxForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Submit")));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (BoxSubmit);

/***/ })

})
//# sourceMappingURL=boxsubmit.js.770fda9669385970ad10.hot-update.js.map