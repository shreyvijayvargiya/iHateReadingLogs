webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var handleDragDrop = function handleDragDrop(result) {\n    if (!result.destination) return;\n    var items = Array.from(state);\n\n    var _items$splice = items.splice(result.source.index, 1),\n        _items$splice2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_items$splice, 1),\n        reorderedItem = _items$splice2[0];\n\n    items.splice(result.destination.index, 0, reorderedItem);\n    setState(items);\n  };\n\n  var DragComponent = function DragComponent() {\n    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__[\"Draggable\"], {\n      key: item.id,\n      index: index,\n      draggableId: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 3\n      }\n    }, function (provided) {\n      return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, provided.draggableProps, provided.dragHandleProps, {\n        ref: provided.innerRef,\n        className: \"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 5\n        }\n      }), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 6\n        }\n      }, item.name));\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__[\"Droppable\"], {\n    droppableId: \"droppable\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, function (provided) {\n    return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, provided.droppableProps, {\n      ref: provided.innerRef,\n      className: \"w-3/5 mx-auto\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }\n    }), state.map(function (item, index) {\n      return __jsx(DragComponent, {\n        item: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 10\n        }\n      });\n    }), provided.placeholder);\n  })));\n};\n\n_s(Home, \"BesDbRegePIGgoZFDSl1jbsE5cA=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeD9jM2FmIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlRHJhZ0Ryb3AiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJyZW9yZGVyZWRJdGVtIiwiRHJhZ0NvbXBvbmVudCIsIml0ZW0iLCJpZCIsInByb3ZpZGVkIiwiZHJhZ2dhYmxlUHJvcHMiLCJkcmFnSGFuZGxlUHJvcHMiLCJpbm5lclJlZiIsIm5hbWUiLCJkcm9wcGFibGVQcm9wcyIsIm1hcCIsInBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtFQUFBOztFQUNsQixnQkFBMEJDLHNEQUFRLENBQUNDLDZDQUFELENBQWxDO0VBQUEsSUFBT0MsS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxNQUFELEVBQVk7SUFDbEMsSUFBSSxDQUFDQSxNQUFNLENBQUNDLFdBQVosRUFBeUI7SUFDekIsSUFBTUMsS0FBSyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV1AsS0FBWCxDQUFkOztJQUNBLG9CQUF3QkssS0FBSyxDQUFDRyxNQUFOLENBQWFMLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyxLQUEzQixFQUFrQyxDQUFsQyxDQUF4QjtJQUFBO0lBQUEsSUFBT0MsYUFBUDs7SUFDQU4sS0FBSyxDQUFDRyxNQUFOLENBQWFMLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQk0sS0FBaEMsRUFBc0MsQ0FBdEMsRUFBMENDLGFBQTFDO0lBQ0FWLFFBQVEsQ0FBQ0ksS0FBRCxDQUFSO0VBQ0EsQ0FORDs7RUFRQyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0lBQUEsT0FDdEIsTUFBQyw2REFBRDtNQUFXLEdBQUcsRUFBRUMsSUFBSSxDQUFDQyxFQUFyQjtNQUF5QixLQUFLLEVBQUVKLEtBQWhDO01BQXVDLFdBQVcsRUFBRUcsSUFBSSxDQUFDQyxFQUF6RDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0UsVUFBQ0MsUUFBRDtNQUFBLE9BQ0Esb0dBQ0tBLFFBQVEsQ0FBQ0MsY0FEZCxFQUVLRCxRQUFRLENBQUNFLGVBRmQ7UUFHQyxHQUFHLEVBQUVGLFFBQVEsQ0FBQ0csUUFIZjtRQUlDLFNBQVMsRUFBQyxpRUFKWDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLElBTUM7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUFJTCxJQUFJLENBQUNNLElBQVQsQ0FORCxDQURBO0lBQUEsQ0FERixDQURzQjtFQUFBLENBQXRCOztFQWVELE9BQ0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNDO0lBQUcsU0FBUyxFQUFDLHNCQUFiO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsdUJBREQsRUFFQztJQUFJLFNBQVMsRUFBQyxVQUFkO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFGRCxFQUdDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFIRCxFQUlDLE1BQUMsbUVBQUQ7SUFBaUIsU0FBUyxFQUFFakIsY0FBNUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNDLE1BQUMsNkRBQUQ7SUFBVyxXQUFXLEVBQUMsV0FBdkI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLFVBQUNhLFFBQUQ7SUFBQSxPQUNBLG9HQUNLQSxRQUFRLENBQUNLLGNBRGQ7TUFFQyxHQUFHLEVBQUVMLFFBQVEsQ0FBQ0csUUFGZjtNQUdDLFNBQVMsRUFBQyxlQUhYO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsSUFLRWxCLEtBQUssQ0FBQ3FCLEdBQU4sQ0FBVSxVQUFDUixJQUFELEVBQU9ILEtBQVA7TUFBQSxPQUNULE1BQUMsYUFBRDtRQUFlLElBQUksRUFBRUcsSUFBckI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQURTO0lBQUEsQ0FBVixDQUxGLEVBUUVFLFFBQVEsQ0FBQ08sV0FSWCxDQURBO0VBQUEsQ0FERixDQURELENBSkQsQ0FERDtBQXVCQSxDQWpERDs7R0FBTXpCLEk7O0tBQUFBLEk7QUFrRFNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlLCByZXNldFNlcnZlckNvbnRleHQgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRhdGEpO1xuXG5cdGNvbnN0IGhhbmRsZURyYWdEcm9wID0gKHJlc3VsdCkgPT4ge1xuXHRcdGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XG5cdFx0Y29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHN0YXRlKTtcblx0XHRjb25zdCBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XG5cdFx0aXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwwICwgcmVvcmRlcmVkSXRlbSk7XG5cdFx0c2V0U3RhdGUoaXRlbXMpO1xuXHR9O1xuXG4gIGNvbnN0IERyYWdDb21wb25lbnQgPSAoKSA9PiAoXG5cdFx0PERyYWdnYWJsZSBrZXk9e2l0ZW0uaWR9IGluZGV4PXtpbmRleH0gZHJhZ2dhYmxlSWQ9e2l0ZW0uaWR9PlxuXHRcdFx0eyhwcm92aWRlZCkgPT4gKFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0ey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxuXHRcdFx0XHRcdHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG5cdFx0XHRcdFx0cmVmPXtwcm92aWRlZC5pbm5lclJlZn1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJwLTQgdy0zLzUgbXgtYXV0byBiZy1ncmF5LTIwMCByb3VuZGVkLXhsIGhvdmVyOmJnLWdyYXktMzAwIG15LTJcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHA+e2l0ZW0ubmFtZX08L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L0RyYWdnYWJsZT5cblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPkRyYWcgZHJvcCBleGFtcGxlPC9wPlxuXHRcdFx0PGhyIGNsYXNzTmFtZT1cInctc2NyZWVuXCIgLz5cblx0XHRcdDxiciAvPlxuXHRcdFx0PERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdEcm9wfT5cblx0XHRcdFx0PERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiPlxuXHRcdFx0XHRcdHsocHJvdmlkZWQpID0+IChcblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0ey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxuXHRcdFx0XHRcdFx0XHRyZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTMvNSBteC1hdXRvXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3N0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0ICA8RHJhZ0NvbXBvbmVudCBpdGVtPXtpdGVtfSAvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0e3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9Ecm9wcGFibGU+XG5cdFx0XHQ8L0RyYWdEcm9wQ29udGV4dD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ })

})