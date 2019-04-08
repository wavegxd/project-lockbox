webpackHotUpdate("static/development/pages/boxsubmit.js",{

/***/ "./components/BoxSubmit.js":
/*!*********************************!*\
  !*** ./components/BoxSubmit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/Roa/Desktop/project-lockbox/frontend/components/BoxSubmit.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation CREATE_LOCKBOX_MUTATION(\n    $amount: Float!\n    $branch: String!\n    $box: String!\n    $time: String!\n    $date: String!\n  ) {\n    createLockbox(\n      data: {\n        amount: $amount\n        branch: $branch\n        box: $box\n        time: $time\n        date: $date\n      }\n    ) {\n      amount\n      branch\n      box\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CREATE_LOCKBOX_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

function BoxSubmit() {
  var _this = this;

  // state = {
  //   branch: '',
  //   box: '',
  //   time: '',
  //   data: '',
  //   amount: 0
  // };
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    branch: '',
    box: '',
    time: '',
    date: '',
    amount: 0
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      boxForm = _useState2[0],
      setBoxForm = _useState2[1]; // const saveToState = (e) => {
  //   if (e.target.name === 'amount') {
  //     this.setState({ [e.target.name]: parseFloat(e.target.value) });
  //   } else this.setState({ [e.target.name]: e.target.value });
  // };


  var printValues = function printValues(e) {
    e.preventDefault();
    console.log(boxForm.branch, boxForm.box, boxForm.data, boxForm.amount);
  };

  var handleFormReset = function handleFormReset() {
    _this.setState(function () {
      return _this.state;
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
    mutation: CREATE_LOCKBOX_MUTATION,
    variables: this.state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, function (createLockbox, _ref) {
    var error = _ref.error,
        loading = _ref.loading;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
      method: "post" // onSubmit={async (e) => {
      //   e.preventDefault();
      //   console.log(this.state);
      //   await createLockbox();
      //   this.setState({
      //     branch: '',
      //     box: '',
      //     time: '',
      //     date: '',
      //     amount: 0
      //   });
      // }}
      ,
      onSubmit: printValues,
      onReset: handleFormReset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      htmlFor: "branch",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Branch", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "text",
      name: "branch",
      placeholder: "Branch",
      onChange: _this.saveToState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      htmlFor: "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Box", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "text",
      name: "box",
      placeholder: "Box",
      onChange: _this.saveToState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      htmlFor: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Time", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "text",
      name: "time",
      placeholder: "Time",
      onChange: _this.saveToState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      htmlFor: "amount",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Amount", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "number",
      step: 0.1,
      name: "amount",
      placeholder: "Amount",
      onChange: _this.saveToState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      htmlFor: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Date", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "text",
      name: "date",
      placeholder: "Date",
      onChange: _this.saveToState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "Submit")));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (BoxSubmit);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
false,

/***/ "./node_modules/core-js/library/fn/promise.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
false,

/***/ "./node_modules/core-js/library/modules/_for-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_invoke.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/_microtask.js":
false,

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
false,

/***/ "./node_modules/core-js/library/modules/_perform.js":
false,

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-species.js":
false,

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_task.js":
false,

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false

})
//# sourceMappingURL=boxsubmit.js.cd4355d1bd20f0ca9539.hot-update.js.map