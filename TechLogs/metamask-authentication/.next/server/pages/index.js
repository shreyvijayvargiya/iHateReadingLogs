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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/metamask-authentication/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Home = () => {\n  const connectWallet = async () => {\n    if (window.ethereum === undefined) {\n      react_toastify__WEBPACK_IMPORTED_MODULE_1__[\"toast\"].error(\"Metamask is not installed, please install metamask\");\n    } else {\n      const accounts = await window.ethereum.request({\n        method: \"eth_requestAccounts\"\n      });\n      react_toastify__WEBPACK_IMPORTED_MODULE_1__[\"toast\"].success(\"Metamask connected successfully\");\n      console.log(accounts[0]);\n    }\n  };\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  }, __jsx(\"button\", {\n    onClick: connectWallet,\n    className: \"p-2 m-2 border border-gray-700 hover:bg-indigo-800 hover:text-white rounded-md\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }\n  }, \"Connect Wallet\"), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__[\"ToastContainer\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJjb25uZWN0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJ1bmRlZmluZWQiLCJ0b2FzdCIsImVycm9yIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07RUFFbEIsTUFBTUMsYUFBYSxHQUFHLFlBQVc7SUFDaEMsSUFBSUMsTUFBTSxDQUFDQyxRQUFQLEtBQW9CQyxTQUF4QixFQUFtQztNQUNsQ0Msb0RBQUssQ0FBQ0MsS0FBTixDQUFZLG9EQUFaO0lBQ0EsQ0FGRCxNQUVNO01BQ0wsTUFBTUMsUUFBUSxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkssT0FBaEIsQ0FBd0I7UUFBRUMsTUFBTSxFQUFFO01BQVYsQ0FBeEIsQ0FBdkI7TUFDQUosb0RBQUssQ0FBQ0ssT0FBTixDQUFjLGlDQUFkO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFRLENBQUMsQ0FBRCxDQUFwQjtJQUVBO0VBQ0QsQ0FURDs7RUFXQSxPQUNDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQztJQUNDLE9BQU8sRUFBRU4sYUFEVjtJQUVDLFNBQVMsRUFBQyxnRkFGWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLG9CQURELEVBT0MsTUFBQyw2REFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBUEQsQ0FERDtBQVdBLENBeEJEOztBQXlCZUQsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG5cdGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYygpID0+IHtcblx0XHRpZiAod2luZG93LmV0aGVyZXVtID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRvYXN0LmVycm9yKFwiTWV0YW1hc2sgaXMgbm90IGluc3RhbGxlZCwgcGxlYXNlIGluc3RhbGwgbWV0YW1hc2tcIik7XG5cdFx0fSBlbHNle1xuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG5cdFx0XHR0b2FzdC5zdWNjZXNzKFwiTWV0YW1hc2sgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseVwiKTtcblx0XHRcdGNvbnNvbGUubG9nKGFjY291bnRzWzBdKVxuXHRcdFx0XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17Y29ubmVjdFdhbGxldH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwicC0yIG0tMiBib3JkZXIgYm9yZGVyLWdyYXktNzAwIGhvdmVyOmJnLWluZGlnby04MDAgaG92ZXI6dGV4dC13aGl0ZSByb3VuZGVkLW1kXCJcblx0XHRcdD5cblx0XHRcdFx0Q29ubmVjdCBXYWxsZXRcblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PFRvYXN0Q29udGFpbmVyIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-toastify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiP2FlOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtdG9hc3RpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-toastify\n");

/***/ })

/******/ });