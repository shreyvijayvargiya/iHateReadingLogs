webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__[\"Droppable\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // <DragDropContext onDragEnd={handleDragDrop}>\n// \t<Droppable droppableId=\"droppable\">\n// \t\t{(provided) => (\n// \t\t\t<div ref={provided.innerRef} {...provided.droppableProps}>\n// \t\t\t\t{data.map((item, index) => (\n// \t\t\t\t\t<DragComponent item={item} index={index} />\n// \t\t\t\t))}\n// \t\t\t</div>\n// \t\t)}\n// \t</Droppable>\n// </DragDropContext>;\n// const DragComponent = ({ item, index }) => (\n// \t<Draggable key={item.id} index={index} draggableId={item.id}>\n// \t\t{(provided) => (\n// \t\t\t<div\n// \t\t\t\t{...provided.draggableProps}\n// \t\t\t\t{...provided.dragHandleProps}\n// \t\t\t\tref={provided.innerRef}\n// \t\t\t\tclassName=\"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\"\n// \t\t\t>\n// \t\t\t\t<p>{item.name}</p>\n// \t\t\t</div>\n// \t\t)}\n// \t</Draggable>\n// );\n// <Droppable droppableId=\"droppable\">\n// \t{(provided) => (\n// \t\t<div\n// \t\t\t{...provided.droppableProps}\n// \t\t\tref={provided.innerRef}\n// \t\t\tclassName=\"w-3/5 mx-auto\"\n// \t\t>\n// \t\t\t{state.map((item, index) => (\n// \t\t\t\t<DragComponent item={item} index={index} />\n// \t\t\t))}\n// \t\t\t{provided.placeholder}\n// \t\t</div>\n// \t)}\n// </Droppable>;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeD9jM2FmIl0sIm5hbWVzIjpbIkhvbWUiLCJoYW5kbGVEcmFnRHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07RUFHbEIsT0FDQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0M7SUFBRyxTQUFTLEVBQUMsc0JBQWI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx1QkFERCxFQUVDO0lBQUksU0FBUyxFQUFDLFVBQWQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZELEVBR0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUhELEVBSUksTUFBQyxtRUFBRDtJQUFpQixTQUFTLEVBQUVDLGNBQTVCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLDZEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQUpKLENBREQ7QUFhQSxDQWhCRDs7S0FBTUQsSTtBQWlCU0EsbUVBQWYsRSxDQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIj5EcmFnIGRyb3AgZXhhbXBsZTwvcD5cblx0XHRcdDxociBjbGFzc05hbWU9XCJ3LXNjcmVlblwiIC8+XG5cdFx0XHQ8YnIgLz5cbiAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRHJvcH0+XG4gICAgICAgIDxEcm9wcGFibGU+XG5cbiAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICA8L0RyYWdEcm9wQ29udGV4dD5cblxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRHJvcH0+XG4vLyBcdDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIj5cbi8vIFx0XHR7KHByb3ZpZGVkKSA9PiAoXG4vLyBcdFx0XHQ8ZGl2IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30+XG4vLyBcdFx0XHRcdHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbi8vIFx0XHRcdFx0XHQ8RHJhZ0NvbXBvbmVudCBpdGVtPXtpdGVtfSBpbmRleD17aW5kZXh9IC8+XG4vLyBcdFx0XHRcdCkpfVxuLy8gXHRcdFx0PC9kaXY+XG4vLyBcdFx0KX1cbi8vIFx0PC9Ecm9wcGFibGU+XG4vLyA8L0RyYWdEcm9wQ29udGV4dD47XG5cblxuLy8gY29uc3QgRHJhZ0NvbXBvbmVudCA9ICh7IGl0ZW0sIGluZGV4IH0pID0+IChcbi8vIFx0PERyYWdnYWJsZSBrZXk9e2l0ZW0uaWR9IGluZGV4PXtpbmRleH0gZHJhZ2dhYmxlSWQ9e2l0ZW0uaWR9PlxuLy8gXHRcdHsocHJvdmlkZWQpID0+IChcbi8vIFx0XHRcdDxkaXZcbi8vIFx0XHRcdFx0ey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxuLy8gXHRcdFx0XHR7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuLy8gXHRcdFx0XHRyZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuLy8gXHRcdFx0XHRjbGFzc05hbWU9XCJwLTQgdy0zLzUgbXgtYXV0byBiZy1ncmF5LTIwMCByb3VuZGVkLXhsIGhvdmVyOmJnLWdyYXktMzAwIG15LTJcIlxuLy8gXHRcdFx0PlxuLy8gXHRcdFx0XHQ8cD57aXRlbS5uYW1lfTwvcD5cbi8vIFx0XHRcdDwvZGl2PlxuLy8gXHRcdCl9XG4vLyBcdDwvRHJhZ2dhYmxlPlxuLy8gKTtcblxuLy8gPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiPlxuLy8gXHR7KHByb3ZpZGVkKSA9PiAoXG4vLyBcdFx0PGRpdlxuLy8gXHRcdFx0ey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxuLy8gXHRcdFx0cmVmPXtwcm92aWRlZC5pbm5lclJlZn1cbi8vIFx0XHRcdGNsYXNzTmFtZT1cInctMy81IG14LWF1dG9cIlxuLy8gXHRcdD5cbi8vIFx0XHRcdHtzdGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4vLyBcdFx0XHRcdDxEcmFnQ29tcG9uZW50IGl0ZW09e2l0ZW19IGluZGV4PXtpbmRleH0gLz5cbi8vIFx0XHRcdCkpfVxuLy8gXHRcdFx0e3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuLy8gXHRcdDwvZGl2PlxuLy8gXHQpfVxuLy8gPC9Ecm9wcGFibGU+O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ })

})