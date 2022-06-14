webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  var handleDragDrop = function handleDragDrop() {};\n\n  var DragComponent = function DragComponent(_ref) {\n    var item = _ref.item,\n        index = _ref.index;\n    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"Draggable\"], {\n      draggableId: item.id,\n      index: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, function (provided) {\n      return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        ref: provided.innerRef\n      }, provided.dragHandleProps, provided.draggableProps, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }\n      }), item.name);\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"Droppable\"], {\n    droppableId: \"droppable\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, function (provided) {\n    return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      ref: provided.innerRef\n    }, provided.droppableProps, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }\n    }), _data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (item, index) {\n      return __jsx(DragComponent, {\n        item: item,\n        index: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }\n      });\n    }));\n  })));\n};\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // const DragComponent = ({ item, index }) => (\n// \t<Draggable key={item.id} index={index} draggableId={item.id}>\n// \t\t{(provided) => (\n// \t\t\t<div\n// \t\t\t\t{...provided.draggableProps}\n// \t\t\t\t{...provided.dragHandleProps}\n// \t\t\t\tref={provided.innerRef}\n// \t\t\t\tclassName=\"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\"\n// \t\t\t>\n// \t\t\t\t<p>{item.name}</p>\n// \t\t\t</div>\n// \t\t)}\n// \t</Draggable>\n// );\n// <Droppable droppableId=\"droppable\">\n// \t{(provided) => (\n// \t\t<div\n// \t\t\t{...provided.droppableProps}\n// \t\t\tref={provided.innerRef}\n// \t\t\tclassName=\"w-3/5 mx-auto\"\n// \t\t>\n// \t\t\t{state.map((item, index) => (\n// \t\t\t\t<DragComponent item={item} index={index} />\n// \t\t\t))}\n// \t\t\t{provided.placeholder}\n// \t\t</div>\n// \t)}\n// </Droppable>;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeD9jM2FmIl0sIm5hbWVzIjpbIkhvbWUiLCJoYW5kbGVEcmFnRHJvcCIsIkRyYWdDb21wb25lbnQiLCJpdGVtIiwiaW5kZXgiLCJpZCIsInByb3ZpZGVkIiwiaW5uZXJSZWYiLCJkcmFnSGFuZGxlUHJvcHMiLCJkcmFnZ2FibGVQcm9wcyIsIm5hbWUiLCJkcm9wcGFibGVQcm9wcyIsImRhdGEiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBR2pCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTSxDQUFFLENBQS9COztFQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBcUI7SUFBQSxJQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0lBQUEsSUFBWkMsS0FBWSxRQUFaQSxLQUFZO0lBQ3pDLE9BQ0UsTUFBQyw2REFBRDtNQUFXLFdBQVcsRUFBRUQsSUFBSSxDQUFDRSxFQUE3QjtNQUFpQyxLQUFLLEVBQUVELEtBQXhDO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDRyxVQUFDRSxRQUFEO01BQUEsT0FDQztRQUFLLEdBQUcsRUFBRUEsUUFBUSxDQUFDQztNQUFuQixHQUFpQ0QsUUFBUSxDQUFDRSxlQUExQyxFQUErREYsUUFBUSxDQUFDRyxjQUF4RTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLElBQ0dOLElBQUksQ0FBQ08sSUFEUixDQUREO0lBQUEsQ0FESCxDQURGO0VBU0QsQ0FWRDs7RUFZRCxPQUNDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQztJQUFHLFNBQVMsRUFBQyxzQkFBYjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHVCQURELEVBRUM7SUFBSSxTQUFTLEVBQUMsVUFBZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRkQsRUFHQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBSEQsRUFJQyxNQUFDLG1FQUFEO0lBQWlCLFNBQVMsRUFBRVQsY0FBNUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNDLE1BQUMsNkRBQUQ7SUFBVyxXQUFXLEVBQUMsV0FBdkI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLFVBQUNLLFFBQUQ7SUFBQSxPQUNBO01BQUssR0FBRyxFQUFFQSxRQUFRLENBQUNDO0lBQW5CLEdBQWlDRCxRQUFRLENBQUNLLGNBQTFDO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsSUFDU0MsNkNBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNWLElBQUQsRUFBT0MsS0FBUDtNQUFBLE9BQ1IsTUFBQyxhQUFEO1FBQWUsSUFBSSxFQUFFRCxJQUFyQjtRQUEyQixLQUFLLEVBQUVDLEtBQWxDO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFEUTtJQUFBLENBQVQsQ0FEVCxDQURBO0VBQUEsQ0FERixDQURELENBSkQsQ0FERDtBQWtCQSxDQW5DRDs7S0FBTUosSTtBQW9DU0EsbUVBQWYsRSxDQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG5cbiAgY29uc3QgaGFuZGxlRHJhZ0Ryb3AgPSAoKSA9PiB7fTtcbiAgXG4gIGNvbnN0IERyYWdDb21wb25lbnQgPSAoeyBpdGVtLCBpbmRleCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmFnZ2FibGUgZHJhZ2dhYmxlSWQ9e2l0ZW0uaWR9IGluZGV4PXtpbmRleH0+XG4gICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICA8ZGl2IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9IHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30+XG4gICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgKVxuICB9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIj5EcmFnIGRyb3AgZXhhbXBsZTwvcD5cblx0XHRcdDxociBjbGFzc05hbWU9XCJ3LXNjcmVlblwiIC8+XG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRHJvcH0+XG5cdFx0XHRcdDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIj5cblx0XHRcdFx0XHR7KHByb3ZpZGVkKSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30+XG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8RHJhZ0NvbXBvbmVudCBpdGVtPXtpdGVtfSBpbmRleD17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICkpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9Ecm9wcGFibGU+XG5cdFx0XHQ8L0RyYWdEcm9wQ29udGV4dD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNvbnN0IERyYWdDb21wb25lbnQgPSAoeyBpdGVtLCBpbmRleCB9KSA9PiAoXG4vLyBcdDxEcmFnZ2FibGUga2V5PXtpdGVtLmlkfSBpbmRleD17aW5kZXh9IGRyYWdnYWJsZUlkPXtpdGVtLmlkfT5cbi8vIFx0XHR7KHByb3ZpZGVkKSA9PiAoXG4vLyBcdFx0XHQ8ZGl2XG4vLyBcdFx0XHRcdHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbi8vIFx0XHRcdFx0ey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cbi8vIFx0XHRcdFx0cmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbi8vIFx0XHRcdFx0Y2xhc3NOYW1lPVwicC00IHctMy81IG14LWF1dG8gYmctZ3JheS0yMDAgcm91bmRlZC14bCBob3ZlcjpiZy1ncmF5LTMwMCBteS0yXCJcbi8vIFx0XHRcdD5cbi8vIFx0XHRcdFx0PHA+e2l0ZW0ubmFtZX08L3A+XG4vLyBcdFx0XHQ8L2Rpdj5cbi8vIFx0XHQpfVxuLy8gXHQ8L0RyYWdnYWJsZT5cbi8vICk7XG5cbi8vIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIj5cbi8vIFx0eyhwcm92aWRlZCkgPT4gKFxuLy8gXHRcdDxkaXZcbi8vIFx0XHRcdHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cbi8vIFx0XHRcdHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4vLyBcdFx0XHRjbGFzc05hbWU9XCJ3LTMvNSBteC1hdXRvXCJcbi8vIFx0XHQ+XG4vLyBcdFx0XHR7c3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuLy8gXHRcdFx0XHQ8RHJhZ0NvbXBvbmVudCBpdGVtPXtpdGVtfSBpbmRleD17aW5kZXh9IC8+XG4vLyBcdFx0XHQpKX1cbi8vIFx0XHRcdHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbi8vIFx0XHQ8L2Rpdj5cbi8vIFx0KX1cbi8vIDwvRHJvcHBhYmxlPjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ })

})