webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  var handleDragDrop = function handleDragDrop() {};\n\n  var DragComponent = function DragComponent() {\n    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"Draggable\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 30\n      }\n    }, function (provided) {\n      return __jsx(\"div\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 7\n        }\n      });\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"Droppable\"], {\n    droppableId: \"droppable\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, function (provided) {\n    return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      ref: provided.innerRef\n    }, provided.droppableProps, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }\n    }), _data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (item, index) {\n      return __jsx(DragComponent, {\n        key: item.id,\n        item: item,\n        index: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 9\n        }\n      });\n    }));\n  })));\n};\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // const [state, setState] = useState(data);\n// const handleDragDrop = (result) => {\n//   if (!result.destination) return;\n//   const items = Array.from(state);\n//   const [reorder] = items.splice(result.source.index, 1);\n//   items.splice(result.destination.index, 0, reorder);\n//   setState(items);\n// };\n// const DragComponent = ({ item, index }) => {\n//   return (\n//     <Draggable key={item.id} index={index} draggableId={item.id}>\n//       {(provided) => (\n//         <div\n//           ref={provided.innerRef}\n//           {...provided.draggableProps}\n//           {...provided.dragHandleProps}\n//           className=\"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\"\n//         >\n//           {item.name}\n//         </div>\n//       )}\n//     </Draggable>\n//   );\n// };\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeD9jM2FmIl0sIm5hbWVzIjpbIkhvbWUiLCJoYW5kbGVEcmFnRHJvcCIsIkRyYWdDb21wb25lbnQiLCJwcm92aWRlZCIsImlubmVyUmVmIiwiZHJvcHBhYmxlUHJvcHMiLCJkYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBQ2xCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTSxDQUFFLENBQS9COztFQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7SUFBQSxPQUFNLE1BQUMsNkRBQUQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUN4QixVQUFDQyxRQUFEO01BQUEsT0FDQztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBREQ7SUFBQSxDQUR3QixDQUFOO0VBQUEsQ0FBdEI7O0VBUUEsT0FDQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0M7SUFBRyxTQUFTLEVBQUMsc0JBQWI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx1QkFERCxFQUVDO0lBQUksU0FBUyxFQUFDLFVBQWQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZELEVBR0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUhELEVBSUMsTUFBQyxtRUFBRDtJQUFpQixTQUFTLEVBQUVGLGNBQTVCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQyxNQUFDLDZEQUFEO0lBQVcsV0FBVyxFQUFDLFdBQXZCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxVQUFDRSxRQUFEO0lBQUEsT0FDQTtNQUFLLEdBQUcsRUFBRUEsUUFBUSxDQUFDQztJQUFuQixHQUFpQ0QsUUFBUSxDQUFDRSxjQUExQztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLElBQ0VDLDZDQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7TUFBQSxPQUNULE1BQUMsYUFBRDtRQUFlLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxFQUF6QjtRQUE2QixJQUFJLEVBQUVGLElBQW5DO1FBQXlDLEtBQUssRUFBRUMsS0FBaEQ7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQURTO0lBQUEsQ0FBVCxDQURGLENBREE7RUFBQSxDQURGLENBREQsQ0FKRCxDQUREO0FBa0JBLENBN0JEOztLQUFNVCxJO0FBOEJTQSxtRUFBZixFLENBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXHRjb25zdCBoYW5kbGVEcmFnRHJvcCA9ICgpID0+IHt9O1xuXG5cdGNvbnN0IERyYWdDb21wb25lbnQgPSAoKSA9PiA8RHJhZ2dhYmxlPlxuICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgIDxkaXY+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9EcmFnZ2FibGU+O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtY2VudGVyXCI+RHJhZyBkcm9wIGV4YW1wbGU8L3A+XG5cdFx0XHQ8aHIgY2xhc3NOYW1lPVwidy1zY3JlZW5cIiAvPlxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0Ryb3B9PlxuXHRcdFx0XHQ8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCI+XG5cdFx0XHRcdFx0eyhwcm92aWRlZCkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9PlxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PERyYWdDb21wb25lbnQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSBpbmRleD17aW5kZXh9IC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9Ecm9wcGFibGU+XG5cdFx0XHQ8L0RyYWdEcm9wQ29udGV4dD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG4vLyBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRhdGEpO1xuXG4vLyBjb25zdCBoYW5kbGVEcmFnRHJvcCA9IChyZXN1bHQpID0+IHtcbi8vICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcbi8vICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHN0YXRlKTtcbi8vICAgY29uc3QgW3Jlb3JkZXJdID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xuLy8gICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyKTtcbi8vICAgc2V0U3RhdGUoaXRlbXMpO1xuLy8gfTtcblxuLy8gY29uc3QgRHJhZ0NvbXBvbmVudCA9ICh7IGl0ZW0sIGluZGV4IH0pID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8RHJhZ2dhYmxlIGtleT17aXRlbS5pZH0gaW5kZXg9e2luZGV4fSBkcmFnZ2FibGVJZD17aXRlbS5pZH0+XG4vLyAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4vLyAgICAgICAgIDxkaXZcbi8vICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuLy8gICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbi8vICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCB3LTMvNSBteC1hdXRvIGJnLWdyYXktMjAwIHJvdW5kZWQteGwgaG92ZXI6YmctZ3JheS0zMDAgbXktMlwiXG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICB7aXRlbS5uYW1lfVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICl9XG4vLyAgICAgPC9EcmFnZ2FibGU+XG4vLyAgICk7XG4vLyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ })

})