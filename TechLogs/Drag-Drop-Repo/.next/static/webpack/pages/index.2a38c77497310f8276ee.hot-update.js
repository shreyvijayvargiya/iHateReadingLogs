webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  var DragComponent = function DragComponent() {\n    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"Droppable\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 4\n      }\n    }, function (provided) {\n      return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        ref: provided.innerRef\n      }, provided.draggableProps, provided.dragHandleProps, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 6\n        }\n      }));\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"Droppable\"], {\n    droppableId: \"droppable\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, function (provided) {\n    return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      ref: provided.innerRef\n    }, provided.droppableProps, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }\n    }), _data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (item) {\n      return __jsx(DragComponent, {\n        item: item,\n        index: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }\n      });\n    }));\n  })));\n};\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // const DragComponent = ({ item, index }) => (\n// \t<Draggable key={item.id} index={index} draggableId={item.id}>\n// \t\t{(provided) => (\n// \t\t\t<div\n// \t\t\t\t{...provided.draggableProps}\n// \t\t\t\t{...provided.dragHandleProps}\n// \t\t\t\tref={provided.innerRef}\n// \t\t\t\tclassName=\"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\"\n// \t\t\t>\n// \t\t\t\t<p>{item.name}</p>\n// \t\t\t</div>\n// \t\t)}\n// \t</Draggable>\n// );\n// <Droppable droppableId=\"droppable\">\n// \t{(provided) => (\n// \t\t<div\n// \t\t\t{...provided.droppableProps}\n// \t\t\tref={provided.innerRef}\n// \t\t\tclassName=\"w-3/5 mx-auto\"\n// \t\t>\n// \t\t\t{state.map((item, index) => (\n// \t\t\t\t<DragComponent item={item} index={index} />\n// \t\t\t))}\n// \t\t\t{provided.placeholder}\n// \t\t</div>\n// \t)}\n// </Droppable>;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeD9jM2FmIl0sIm5hbWVzIjpbIkhvbWUiLCJEcmFnQ29tcG9uZW50IiwicHJvdmlkZWQiLCJpbm5lclJlZiIsImRyYWdnYWJsZVByb3BzIiwiZHJhZ0hhbmRsZVByb3BzIiwiaGFuZGxlRHJhZ0Ryb3AiLCJkcm9wcGFibGVQcm9wcyIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBRWxCLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtJQUMzQixPQUNDLE1BQUMsNkRBQUQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNFLFVBQUNDLFFBQUQ7TUFBQSxPQUNBO1FBQ0MsR0FBRyxFQUFFQSxRQUFRLENBQUNDO01BRGYsR0FFS0QsUUFBUSxDQUFDRSxjQUZkLEVBR0tGLFFBQVEsQ0FBQ0csZUFIZDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBREE7SUFBQSxDQURGLENBREQ7RUFhQSxDQWREOztFQWdCQSxPQUNDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQztJQUFHLFNBQVMsRUFBQyxzQkFBYjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHVCQURELEVBRUM7SUFBSSxTQUFTLEVBQUMsVUFBZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRkQsRUFHQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBSEQsRUFJQyxNQUFDLG1FQUFEO0lBQWlCLFNBQVMsRUFBRUMsY0FBNUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNDLE1BQUMsNkRBQUQ7SUFBVyxXQUFXLEVBQUMsV0FBdkI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLFVBQUNKLFFBQUQ7SUFBQSxPQUNBO01BQUssR0FBRyxFQUFFQSxRQUFRLENBQUNDO0lBQW5CLEdBQWlDRCxRQUFRLENBQUNLLGNBQTFDO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsSUFDRUMsNkNBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLElBQUk7TUFBQSxPQUNMLE1BQUMsYUFBRDtRQUFlLElBQUksRUFBRUEsSUFBckI7UUFBMkIsS0FBSyxFQUFFQyxLQUFsQztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBREs7SUFBQSxDQUFiLENBREYsQ0FEQTtFQUFBLENBREYsQ0FERCxDQUpELENBREQ7QUFrQkEsQ0FwQ0Q7O0tBQU1YLEk7QUFxQ1NBLG1FQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cblx0Y29uc3QgRHJhZ0NvbXBvbmVudCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PERyb3BwYWJsZT5cblx0XHRcdFx0eyhwcm92aWRlZCkgPT4gKFxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG5cdFx0XHRcdFx0XHR7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG5cdFx0XHRcdFx0XHR7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuXHRcdFx0XHRcdD5cblxuICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Ecm9wcGFibGU+XG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPkRyYWcgZHJvcCBleGFtcGxlPC9wPlxuXHRcdFx0PGhyIGNsYXNzTmFtZT1cInctc2NyZWVuXCIgLz5cblx0XHRcdDxiciAvPlxuXHRcdFx0PERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdEcm9wfT5cblx0XHRcdFx0PERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiPlxuXHRcdFx0XHRcdHsocHJvdmlkZWQpID0+IChcblx0XHRcdFx0XHRcdDxkaXYgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfT5cblx0XHRcdFx0XHRcdFx0e2RhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxEcmFnQ29tcG9uZW50IGl0ZW09e2l0ZW19IGluZGV4PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgKSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0Ryb3BwYWJsZT5cblx0XHRcdDwvRHJhZ0Ryb3BDb250ZXh0PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbi8vIGNvbnN0IERyYWdDb21wb25lbnQgPSAoeyBpdGVtLCBpbmRleCB9KSA9PiAoXG4vLyBcdDxEcmFnZ2FibGUga2V5PXtpdGVtLmlkfSBpbmRleD17aW5kZXh9IGRyYWdnYWJsZUlkPXtpdGVtLmlkfT5cbi8vIFx0XHR7KHByb3ZpZGVkKSA9PiAoXG4vLyBcdFx0XHQ8ZGl2XG4vLyBcdFx0XHRcdHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbi8vIFx0XHRcdFx0ey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cbi8vIFx0XHRcdFx0cmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbi8vIFx0XHRcdFx0Y2xhc3NOYW1lPVwicC00IHctMy81IG14LWF1dG8gYmctZ3JheS0yMDAgcm91bmRlZC14bCBob3ZlcjpiZy1ncmF5LTMwMCBteS0yXCJcbi8vIFx0XHRcdD5cbi8vIFx0XHRcdFx0PHA+e2l0ZW0ubmFtZX08L3A+XG4vLyBcdFx0XHQ8L2Rpdj5cbi8vIFx0XHQpfVxuLy8gXHQ8L0RyYWdnYWJsZT5cbi8vICk7XG5cbi8vIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIj5cbi8vIFx0eyhwcm92aWRlZCkgPT4gKFxuLy8gXHRcdDxkaXZcbi8vIFx0XHRcdHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cbi8vIFx0XHRcdHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4vLyBcdFx0XHRjbGFzc05hbWU9XCJ3LTMvNSBteC1hdXRvXCJcbi8vIFx0XHQ+XG4vLyBcdFx0XHR7c3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuLy8gXHRcdFx0XHQ8RHJhZ0NvbXBvbmVudCBpdGVtPXtpdGVtfSBpbmRleD17aW5kZXh9IC8+XG4vLyBcdFx0XHQpKX1cbi8vIFx0XHRcdHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbi8vIFx0XHQ8L2Rpdj5cbi8vIFx0KX1cbi8vIDwvRHJvcHBhYmxlPjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ })

})