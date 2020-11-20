module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/edit-products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  mutation productVariantUpdate($input: ProductVariantInput!) {
    productVariantUpdate(input: $input) {
      product {
        title
      }
      productVariant {
        id
        price
      }
    }
  }
`;

class EditProducts extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      discount: "",
      price: "",
      variantId: ""
    });

    _defineProperty(this, "handleChange", field => {
      return value => this.setState({
        [field]: value
      });
    });

    _defineProperty(this, "itemToBeConsumed", () => {
      const item = store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get("item");
      const price = item.variants.edges[0].node.price;
      const variantId = item.variants.edges[0].node.id;
      const discounter = price * 0.1;
      this.setState({
        price,
        variantId
      });
      return (price - discounter).toFixed(2);
    });
  }

  componentDidMount() {
    this.setState({
      discount: this.itemToBeConsumed()
    });
  }

  render() {
    const {
      name,
      price,
      discount,
      variantId
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], {
      mutation: UPDATE_PRICE,
      children: (handleSubmit, {
        error,
        data
      }) => {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["DisplayText"], {
                size: "large",
                children: name
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Form"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                  sectioned: true,
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"], {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"].Group, {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                        prefix: "$",
                        value: price,
                        disabled: true,
                        label: "Original price",
                        type: "price"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                        prefix: "$",
                        value: discount,
                        onChange: this.handleChange("discount"),
                        label: "Discounted price",
                        type: "discount"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                      children: "This sale price will expire in two weeks"
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["PageActions"], {
                  primaryAction: [{
                    content: "Save",
                    onAction: () => {
                      console.log("submitted");
                    }
                  }],
                  secondaryActions: [{
                    content: "Remove discount"
                  }]
                })]
              })]
            })
          })
        });
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EditProducts);

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RvcmUtanNcIiJdLCJuYW1lcyI6WyJVUERBVEVfUFJJQ0UiLCJncWwiLCJFZGl0UHJvZHVjdHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJjb21wb25lbnREaWRNb3VudCIsIml0ZW1Ub0JlQ29uc3VtZWQiLCJyZW5kZXIiLCJuYW1lIiwic3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsImRhdGEiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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LDhEQUFDLDBEQUFEO0FBQ0UsOEJBQU0sRUFBQyxHQURUO0FBRUUsNkJBQUssRUFBRUQsUUFGVDtBQUdFLGdDQUFRLEVBQUUsS0FBS3VCLFlBQUwsQ0FBa0IsVUFBbEIsQ0FIWjtBQUlFLDZCQUFLLEVBQUMsa0JBSlI7QUFLRSw0QkFBSSxFQUFDO0FBTFAsd0JBUkY7QUFBQSxzQkFERixlQWlCRTtBQUFBO0FBQUEsc0JBakJGO0FBQUE7QUFERixrQkFERixlQXNCRSw4REFBQyw0REFBRDtBQUNFLCtCQUFhLEVBQUUsQ0FDYjtBQUNFQywyQkFBTyxFQUFFLE1BRFg7QUFFRUMsNEJBQVEsRUFBRSxNQUFNO0FBQ2RDLDZCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7QUFKSCxtQkFEYSxDQURqQjtBQVNFLGtDQUFnQixFQUFFLENBQ2hCO0FBQ0VILDJCQUFPLEVBQUU7QUFEWCxtQkFEZ0I7QUFUcEIsa0JBdEJGO0FBQUEsZ0JBRkY7QUFBQTtBQURGO0FBREYsVUFERjtBQStDRDtBQWpESCxNQURGO0FBcUREOztBQWxFd0M7O0FBa0Y1QjNCLDJFQUFmLEU7Ozs7Ozs7Ozs7O0FDL0dBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2VkaXQtcHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2VkaXQtcHJvZHVjdHMuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBEaXNwbGF5VGV4dCxcclxuICBGb3JtLFxyXG4gIEZvcm1MYXlvdXQsXHJcbiAgTGF5b3V0LFxyXG4gIFBhZ2UsXHJcbiAgUGFnZUFjdGlvbnMsXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwic3RvcmUtanNcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XHJcblxyXG5jb25zdCBVUERBVEVfUFJJQ0UgPSBncWxgXHJcbiAgbXV0YXRpb24gcHJvZHVjdFZhcmlhbnRVcGRhdGUoJGlucHV0OiBQcm9kdWN0VmFyaWFudElucHV0ISkge1xyXG4gICAgcHJvZHVjdFZhcmlhbnRVcGRhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBwcm9kdWN0IHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICB9XHJcbiAgICAgIHByb2R1Y3RWYXJpYW50IHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHByaWNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jbGFzcyBFZGl0UHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGlzY291bnQ6IFwiXCIsXHJcbiAgICBwcmljZTogXCJcIixcclxuICAgIHZhcmlhbnRJZDogXCJcIixcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNjb3VudDogdGhpcy5pdGVtVG9CZUNvbnN1bWVkKCkgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHByaWNlLCBkaXNjb3VudCwgdmFyaWFudElkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE11dGF0aW9uIG11dGF0aW9uPXtVUERBVEVfUFJJQ0V9PlxyXG4gICAgICAgIHsoaGFuZGxlU3VibWl0LCB7IGVycm9yLCBkYXRhIH0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwibGFyZ2VcIj57bmFtZX08L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiJFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3JpZ2luYWwgcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKFwiZGlzY291bnRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2NvdW50ZWQgcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgc2FsZSBwcmljZSB3aWxsIGV4cGlyZSBpbiB0d28gd2Vla3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlQWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJTYXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0dGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJSZW1vdmUgZGlzY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA8L011dGF0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4ge1xyXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGl0ZW1Ub0JlQ29uc3VtZWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gc3RvcmUuZ2V0KFwiaXRlbVwiKTtcclxuICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgY29uc3QgdmFyaWFudElkID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLmlkO1xyXG4gICAgY29uc3QgZGlzY291bnRlciA9IHByaWNlICogMC4xO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlLCB2YXJpYW50SWQgfSk7XHJcbiAgICByZXR1cm4gKHByaWNlIC0gZGlzY291bnRlcikudG9GaXhlZCgyKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZHVjdHM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0b3JlLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=