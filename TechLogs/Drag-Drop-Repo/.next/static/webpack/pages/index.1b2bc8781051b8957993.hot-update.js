webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__[\"Droppable\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, function (provided) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    }, \"Drop\");\n  })));\n};\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // const DragComponent = ({ item, index }) => (\n// \t<Draggable key={item.id} index={index} draggableId={item.id}>\n// \t\t{(provided) => (\n// \t\t\t<div\n// \t\t\t\t{...provided.draggableProps}\n// \t\t\t\t{...provided.dragHandleProps}\n// \t\t\t\tref={provided.innerRef}\n// \t\t\t\tclassName=\"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\"\n// \t\t\t>\n// \t\t\t\t<p>{item.name}</p>\n// \t\t\t</div>\n// \t\t)}\n// \t</Draggable>\n// );\n// <Droppable droppableId=\"droppable\">\n// \t{(provided) => (\n// \t\t<div\n// \t\t\t{...provided.droppableProps}\n// \t\t\tref={provided.innerRef}\n// \t\t\tclassName=\"w-3/5 mx-auto\"\n// \t\t>\n// \t\t\t{state.map((item, index) => (\n// \t\t\t\t<DragComponent item={item} index={index} />\n// \t\t\t))}\n// \t\t\t{provided.placeholder}\n// \t\t</div>\n// \t)}\n// </Droppable>;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeD9jM2FmIl0sIm5hbWVzIjpbIkhvbWUiLCJoYW5kbGVEcmFnRHJvcCIsInByb3ZpZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtFQUlsQixPQUNDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQztJQUFHLFNBQVMsRUFBQyxzQkFBYjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHVCQURELEVBRUM7SUFBSSxTQUFTLEVBQUMsVUFBZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRkQsRUFHQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBSEQsRUFJQyxNQUFDLG1FQUFEO0lBQWlCLFNBQVMsRUFBRUMsY0FBNUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNLLE1BQUMsNkRBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNHLFVBQUNDLFFBQUQ7SUFBQSxPQUNDO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsVUFERDtFQUFBLENBREgsQ0FETCxDQUpELENBREQ7QUFjQSxDQWxCRDs7S0FBTUYsSTtBQW1CU0EsbUVBQWYsRSxDQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGFcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuXG4gIFxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPkRyYWcgZHJvcCBleGFtcGxlPC9wPlxuXHRcdFx0PGhyIGNsYXNzTmFtZT1cInctc2NyZWVuXCIgLz5cblx0XHRcdDxiciAvPlxuXHRcdFx0PERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdEcm9wfT5cbiAgICAgICAgPERyb3BwYWJsZT5cbiAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgICA8ZGl2PkRyb3A8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Ryb3BwYWJsZT5cblx0XHRcdDwvRHJhZ0Ryb3BDb250ZXh0PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY29uc3QgRHJhZ0NvbXBvbmVudCA9ICh7IGl0ZW0sIGluZGV4IH0pID0+IChcbi8vIFx0PERyYWdnYWJsZSBrZXk9e2l0ZW0uaWR9IGluZGV4PXtpbmRleH0gZHJhZ2dhYmxlSWQ9e2l0ZW0uaWR9PlxuLy8gXHRcdHsocHJvdmlkZWQpID0+IChcbi8vIFx0XHRcdDxkaXZcbi8vIFx0XHRcdFx0ey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxuLy8gXHRcdFx0XHR7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuLy8gXHRcdFx0XHRyZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuLy8gXHRcdFx0XHRjbGFzc05hbWU9XCJwLTQgdy0zLzUgbXgtYXV0byBiZy1ncmF5LTIwMCByb3VuZGVkLXhsIGhvdmVyOmJnLWdyYXktMzAwIG15LTJcIlxuLy8gXHRcdFx0PlxuLy8gXHRcdFx0XHQ8cD57aXRlbS5uYW1lfTwvcD5cbi8vIFx0XHRcdDwvZGl2PlxuLy8gXHRcdCl9XG4vLyBcdDwvRHJhZ2dhYmxlPlxuLy8gKTtcblxuXG4vLyA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCI+XG4vLyBcdHsocHJvdmlkZWQpID0+IChcbi8vIFx0XHQ8ZGl2XG4vLyBcdFx0XHR7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XG4vLyBcdFx0XHRyZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuLy8gXHRcdFx0Y2xhc3NOYW1lPVwidy0zLzUgbXgtYXV0b1wiXG4vLyBcdFx0PlxuLy8gXHRcdFx0e3N0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbi8vIFx0XHRcdFx0PERyYWdDb21wb25lbnQgaXRlbT17aXRlbX0gaW5kZXg9e2luZGV4fSAvPlxuLy8gXHRcdFx0KSl9XG4vLyBcdFx0XHR7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4vLyBcdFx0PC9kaXY+XG4vLyBcdCl9XG4vLyA8L0Ryb3BwYWJsZT47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ })

})