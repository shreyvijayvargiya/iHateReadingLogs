webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  var handleDragDrop = function handleDragDrop() {};\n\n  var DragComponent = function DragComponent() {\n    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"Draggable\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"Droppable\"], {\n    droppableId: \"droppable\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, function (provided) {\n    return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      ref: provided.innerRef\n    }, provided.droppableProps, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }\n    }), _data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (item) {\n      return __jsx(DragComponent, {\n        item: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 33\n        }\n      });\n    }));\n  })));\n};\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // <DragDropContext onDragEnd={handleDragDrop}>\n// \t<Droppable droppableId=\"droppable\">\n// \t\t{(provided) => (\n// \t\t\t<div ref={provided.innerRef} {...provided.droppableProps}>\n// \t\t\t\t{data.map((item, index) => (\n// \t\t\t\t\t<DragComponent item={item} index={index} />\n// \t\t\t\t))}\n// \t\t\t</div>\n// \t\t)}\n// \t</Droppable>\n// </DragDropContext>;\n// const DragComponent = ({ item, index }) => (\n// \t<Draggable key={item.id} index={index} draggableId={item.id}>\n// \t\t{(provided) => (\n// \t\t\t<div\n// \t\t\t\t{...provided.draggableProps}\n// \t\t\t\t{...provided.dragHandleProps}\n// \t\t\t\tref={provided.innerRef}\n// \t\t\t\tclassName=\"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\"\n// \t\t\t>\n// \t\t\t\t<p>{item.name}</p>\n// \t\t\t</div>\n// \t\t)}\n// \t</Draggable>\n// );\n// <Droppable droppableId=\"droppable\">\n// \t{(provided) => (\n// \t\t<div\n// \t\t\t{...provided.droppableProps}\n// \t\t\tref={provided.innerRef}\n// \t\t\tclassName=\"w-3/5 mx-auto\"\n// \t\t>\n// \t\t\t{state.map((item, index) => (\n// \t\t\t\t<DragComponent item={item} index={index} />\n// \t\t\t))}\n// \t\t\t{provided.placeholder}\n// \t\t</div>\n// \t)}\n// </Droppable>;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeD9jM2FmIl0sIm5hbWVzIjpbIkhvbWUiLCJoYW5kbGVEcmFnRHJvcCIsIkRyYWdDb21wb25lbnQiLCJwcm92aWRlZCIsImlubmVyUmVmIiwiZHJvcHBhYmxlUHJvcHMiLCJkYXRhIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07RUFFakIsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNLENBQUUsQ0FBL0I7O0VBR0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0lBQzFCLE9BQ0UsTUFBQyw2REFBRDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBREY7RUFHRCxDQUpEOztFQUtELE9BQ0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNDO0lBQUcsU0FBUyxFQUFDLHNCQUFiO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsdUJBREQsRUFFQztJQUFJLFNBQVMsRUFBQyxVQUFkO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFGRCxFQUdDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFIRCxFQUlJLE1BQUMsbUVBQUQ7SUFBaUIsU0FBUyxFQUFFRCxjQUE1QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyw2REFBRDtJQUFXLFdBQVcsRUFBQyxXQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0csVUFBQ0UsUUFBRDtJQUFBLE9BQ0M7TUFBSyxHQUFHLEVBQUVBLFFBQVEsQ0FBQ0M7SUFBbkIsR0FBaUNELFFBQVEsQ0FBQ0UsY0FBMUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxJQUNHQyw2Q0FBSSxDQUFDQyxHQUFMLENBQVMsVUFBQUMsSUFBSTtNQUFBLE9BQUksTUFBQyxhQUFEO1FBQWUsSUFBSSxFQUFFQSxJQUFyQjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBQUo7SUFBQSxDQUFiLENBREgsQ0FERDtFQUFBLENBREgsQ0FERixDQUpKLENBREQ7QUFrQkEsQ0E1QkQ7O0tBQU1SLEk7QUE2QlNBLG1FQUFmLEUsQ0F1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIGNvbnN0IGhhbmRsZURyYWdEcm9wID0gKCkgPT4ge307XG5cblxuICBjb25zdCBEcmFnQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJhZ2dhYmxlPjwvRHJhZ2dhYmxlPlxuICAgIClcbiAgfVxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPkRyYWcgZHJvcCBleGFtcGxlPC9wPlxuXHRcdFx0PGhyIGNsYXNzTmFtZT1cInctc2NyZWVuXCIgLz5cblx0XHRcdDxiciAvPlxuICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdEcm9wfT5cbiAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiPlxuICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICAgIDxkaXYgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfT5cbiAgICAgICAgICAgICAge2RhdGEubWFwKGl0ZW0gPT4gPERyYWdDb21wb25lbnQgaXRlbT17aXRlbX0gLz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICA8L0Ryb3BwYWJsZT5cbiAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuXG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdEcm9wfT5cbi8vIFx0PERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiPlxuLy8gXHRcdHsocHJvdmlkZWQpID0+IChcbi8vIFx0XHRcdDxkaXYgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfT5cbi8vIFx0XHRcdFx0e2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuLy8gXHRcdFx0XHRcdDxEcmFnQ29tcG9uZW50IGl0ZW09e2l0ZW19IGluZGV4PXtpbmRleH0gLz5cbi8vIFx0XHRcdFx0KSl9XG4vLyBcdFx0XHQ8L2Rpdj5cbi8vIFx0XHQpfVxuLy8gXHQ8L0Ryb3BwYWJsZT5cbi8vIDwvRHJhZ0Ryb3BDb250ZXh0PjtcblxuXG4vLyBjb25zdCBEcmFnQ29tcG9uZW50ID0gKHsgaXRlbSwgaW5kZXggfSkgPT4gKFxuLy8gXHQ8RHJhZ2dhYmxlIGtleT17aXRlbS5pZH0gaW5kZXg9e2luZGV4fSBkcmFnZ2FibGVJZD17aXRlbS5pZH0+XG4vLyBcdFx0eyhwcm92aWRlZCkgPT4gKFxuLy8gXHRcdFx0PGRpdlxuLy8gXHRcdFx0XHR7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4vLyBcdFx0XHRcdHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4vLyBcdFx0XHRcdHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4vLyBcdFx0XHRcdGNsYXNzTmFtZT1cInAtNCB3LTMvNSBteC1hdXRvIGJnLWdyYXktMjAwIHJvdW5kZWQteGwgaG92ZXI6YmctZ3JheS0zMDAgbXktMlwiXG4vLyBcdFx0XHQ+XG4vLyBcdFx0XHRcdDxwPntpdGVtLm5hbWV9PC9wPlxuLy8gXHRcdFx0PC9kaXY+XG4vLyBcdFx0KX1cbi8vIFx0PC9EcmFnZ2FibGU+XG4vLyApO1xuXG4vLyA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCI+XG4vLyBcdHsocHJvdmlkZWQpID0+IChcbi8vIFx0XHQ8ZGl2XG4vLyBcdFx0XHR7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XG4vLyBcdFx0XHRyZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuLy8gXHRcdFx0Y2xhc3NOYW1lPVwidy0zLzUgbXgtYXV0b1wiXG4vLyBcdFx0PlxuLy8gXHRcdFx0e3N0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbi8vIFx0XHRcdFx0PERyYWdDb21wb25lbnQgaXRlbT17aXRlbX0gaW5kZXg9e2luZGV4fSAvPlxuLy8gXHRcdFx0KSl9XG4vLyBcdFx0XHR7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4vLyBcdFx0PC9kaXY+XG4vLyBcdCl9XG4vLyA8L0Ryb3BwYWJsZT47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ })

})