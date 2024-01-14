webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = useState(_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  var handleDragDrop = function handleDragDrop(result) {\n    if (!result.destination) return;\n    var items = Array.from(state);\n\n    var _items$splice = items.splice(result.source.index, 1),\n        _items$splice2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_items$splice, 1),\n        reorder = _items$splice2[0];\n\n    items.splice(result.destination.index, reorder);\n    setState(items);\n  };\n\n  var DragComponent = function DragComponent(_ref) {\n    var item = _ref.item,\n        index = _ref.index;\n    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__[\"Draggable\"], {\n      index: index,\n      draggableId: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }\n    }, function (provided) {\n      return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        ref: provided.innerRef\n      }, provided.draggableProps, provided.dragHandleProps, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }\n      }), item.name);\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__[\"Droppable\"], {\n    droppableId: \"droppable\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, function (provided) {\n    return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      ref: provided.innerRef\n    }, provided.droppableProps, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }\n    }), state.map(function (item) {\n      return __jsx(DragComponent, {\n        item: item,\n        index: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }\n      });\n    }));\n  })));\n};\n\n_s(Home, \"BesDbRegePIGgoZFDSl1jbsE5cA=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // <DragDropContext onDragEnd={handleDragDrop}>\n// \t<Droppable droppableId=\"droppable\">\n// \t\t{(provided) => (\n// \t\t\t<div ref={provided.innerRef} {...provided.droppableProps}>\n// \t\t\t\t{data.map((item, index) => (\n// \t\t\t\t\t<DragComponent item={item} index={index} />\n// \t\t\t\t))}\n// \t\t\t</div>\n// \t\t)}\n// \t</Droppable>\n// </DragDropContext>;\n// const DragComponent = ({ item, index }) => (\n// \t<Draggable key={item.id} index={index} draggableId={item.id}>\n// \t\t{(provided) => (\n// \t\t\t<div\n// \t\t\t\t{...provided.draggableProps}\n// \t\t\t\t{...provided.dragHandleProps}\n// \t\t\t\tref={provided.innerRef}\n// \t\t\t\tclassName=\"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\"\n// \t\t\t>\n// \t\t\t\t<p>{item.name}</p>\n// \t\t\t</div>\n// \t\t)}\n// \t</Draggable>\n// );\n// <Droppable droppableId=\"droppable\">\n// \t{(provided) => (\n// \t\t<div\n// \t\t\t{...provided.droppableProps}\n// \t\t\tref={provided.innerRef}\n// \t\t\tclassName=\"w-3/5 mx-auto\"\n// \t\t>\n// \t\t\t{state.map((item, index) => (\n// \t\t\t\t<DragComponent item={item} index={index} />\n// \t\t\t))}\n// \t\t\t{provided.placeholder}\n// \t\t</div>\n// \t)}\n// </Droppable>;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeD9jM2FmIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlRHJhZ0Ryb3AiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJyZW9yZGVyIiwiRHJhZ0NvbXBvbmVudCIsIml0ZW0iLCJpZCIsInByb3ZpZGVkIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsIm5hbWUiLCJkcm9wcGFibGVQcm9wcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07RUFBQTs7RUFFakIsZ0JBQTBCQyxRQUFRLENBQUNDLDZDQUFELENBQWxDO0VBQUE7RUFBQSxJQUFPQyxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE1BQUQsRUFBWTtJQUNqQyxJQUFHLENBQUNBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtJQUN4QixJQUFNQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXUCxLQUFYLENBQWQ7O0lBQ0Esb0JBQW1CSyxLQUFLLENBQUNHLE1BQU4sQ0FBYUwsTUFBTSxDQUFDTSxNQUFQLENBQWNDLEtBQTNCLEVBQWtDLENBQWxDLENBQW5CO0lBQUE7SUFBQSxJQUFPQyxPQUFQOztJQUNBTixLQUFLLENBQUNHLE1BQU4sQ0FBYUwsTUFBTSxDQUFDQyxXQUFQLENBQW1CTSxLQUFoQyxFQUF1Q0MsT0FBdkM7SUFDQVYsUUFBUSxDQUFDSSxLQUFELENBQVI7RUFDRCxDQU5EOztFQVNBLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBcUI7SUFBQSxJQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0lBQUEsSUFBWkgsS0FBWSxRQUFaQSxLQUFZO0lBQ3pDLE9BQ0UsTUFBQyw2REFBRDtNQUFXLEtBQUssRUFBRUEsS0FBbEI7TUFBeUIsV0FBVyxFQUFFRyxJQUFJLENBQUNDLEVBQTNDO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDRyxVQUFDQyxRQUFEO01BQUEsT0FDQztRQUFLLEdBQUcsRUFBRUEsUUFBUSxDQUFDQztNQUFuQixHQUFpQ0QsUUFBUSxDQUFDRSxjQUExQyxFQUE4REYsUUFBUSxDQUFDRyxlQUF2RTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLElBQ0dMLElBQUksQ0FBQ00sSUFEUixDQUREO0lBQUEsQ0FESCxDQURGO0VBU0QsQ0FWRDs7RUFXRCxPQUNDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQztJQUFHLFNBQVMsRUFBQyxzQkFBYjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHVCQURELEVBRUM7SUFBSSxTQUFTLEVBQUMsVUFBZDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRkQsRUFHQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBSEQsRUFJQyxNQUFDLG1FQUFEO0lBQWlCLFNBQVMsRUFBRWpCLGNBQTVCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQyxNQUFDLDZEQUFEO0lBQVcsV0FBVyxFQUFDLFdBQXZCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxVQUFDYSxRQUFEO0lBQUEsT0FDQTtNQUFLLEdBQUcsRUFBRUEsUUFBUSxDQUFDQztJQUFuQixHQUFpQ0QsUUFBUSxDQUFDSyxjQUExQztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLElBQ0VwQixLQUFLLENBQUNxQixHQUFOLENBQVUsVUFBQ1IsSUFBRDtNQUFBLE9BQ1YsTUFBQyxhQUFEO1FBQWUsSUFBSSxFQUFFQSxJQUFyQjtRQUEyQixLQUFLLEVBQUVILEtBQWxDO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFEVTtJQUFBLENBQVYsQ0FERixDQURBO0VBQUEsQ0FERixDQURELENBSkQsQ0FERDtBQWtCQSxDQTFDRDs7R0FBTWIsSTs7S0FBQUEsSTtBQTJDU0EsbUVBQWYsRSxDQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShkYXRhKTtcbiAgXG4gIGNvbnN0IGhhbmRsZURyYWdEcm9wID0gKHJlc3VsdCkgPT4ge1xuICAgIGlmKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVyblxuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShzdGF0ZSk7XG4gICAgY29uc3QgW3Jlb3JkZXIgXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCByZW9yZGVyKTtcbiAgICBzZXRTdGF0ZShpdGVtcyk7XG4gIH07XG4gIFxuXG4gIGNvbnN0IERyYWdDb21wb25lbnQgPSAoeyBpdGVtLCBpbmRleCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmFnZ2FibGUgaW5kZXg9e2luZGV4fSBkcmFnZ2FibGVJZD17aXRlbS5pZH0+XG4gICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICA8ZGl2IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30gey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30+XG4gICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgKVxuICB9XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtY2VudGVyXCI+RHJhZyBkcm9wIGV4YW1wbGU8L3A+XG5cdFx0XHQ8aHIgY2xhc3NOYW1lPVwidy1zY3JlZW5cIiAvPlxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0Ryb3B9PlxuXHRcdFx0XHQ8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCI+XG5cdFx0XHRcdFx0eyhwcm92aWRlZCkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9PlxuXHRcdFx0XHRcdFx0XHR7c3RhdGUubWFwKChpdGVtKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PERyYWdDb21wb25lbnQgaXRlbT17aXRlbX0gaW5kZXg9e2luZGV4fSAvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvRHJvcHBhYmxlPlxuXHRcdFx0PC9EcmFnRHJvcENvbnRleHQ+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdEcm9wfT5cbi8vIFx0PERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiPlxuLy8gXHRcdHsocHJvdmlkZWQpID0+IChcbi8vIFx0XHRcdDxkaXYgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfT5cbi8vIFx0XHRcdFx0e2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuLy8gXHRcdFx0XHRcdDxEcmFnQ29tcG9uZW50IGl0ZW09e2l0ZW19IGluZGV4PXtpbmRleH0gLz5cbi8vIFx0XHRcdFx0KSl9XG4vLyBcdFx0XHQ8L2Rpdj5cbi8vIFx0XHQpfVxuLy8gXHQ8L0Ryb3BwYWJsZT5cbi8vIDwvRHJhZ0Ryb3BDb250ZXh0PjtcblxuXG4vLyBjb25zdCBEcmFnQ29tcG9uZW50ID0gKHsgaXRlbSwgaW5kZXggfSkgPT4gKFxuLy8gXHQ8RHJhZ2dhYmxlIGtleT17aXRlbS5pZH0gaW5kZXg9e2luZGV4fSBkcmFnZ2FibGVJZD17aXRlbS5pZH0+XG4vLyBcdFx0eyhwcm92aWRlZCkgPT4gKFxuLy8gXHRcdFx0PGRpdlxuLy8gXHRcdFx0XHR7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4vLyBcdFx0XHRcdHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4vLyBcdFx0XHRcdHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4vLyBcdFx0XHRcdGNsYXNzTmFtZT1cInAtNCB3LTMvNSBteC1hdXRvIGJnLWdyYXktMjAwIHJvdW5kZWQteGwgaG92ZXI6YmctZ3JheS0zMDAgbXktMlwiXG4vLyBcdFx0XHQ+XG4vLyBcdFx0XHRcdDxwPntpdGVtLm5hbWV9PC9wPlxuLy8gXHRcdFx0PC9kaXY+XG4vLyBcdFx0KX1cbi8vIFx0PC9EcmFnZ2FibGU+XG4vLyApO1xuXG4vLyA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCI+XG4vLyBcdHsocHJvdmlkZWQpID0+IChcbi8vIFx0XHQ8ZGl2XG4vLyBcdFx0XHR7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XG4vLyBcdFx0XHRyZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuLy8gXHRcdFx0Y2xhc3NOYW1lPVwidy0zLzUgbXgtYXV0b1wiXG4vLyBcdFx0PlxuLy8gXHRcdFx0e3N0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbi8vIFx0XHRcdFx0PERyYWdDb21wb25lbnQgaXRlbT17aXRlbX0gaW5kZXg9e2luZGV4fSAvPlxuLy8gXHRcdFx0KSl9XG4vLyBcdFx0XHR7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4vLyBcdFx0PC9kaXY+XG4vLyBcdCl9XG4vLyA8L0Ryb3BwYWJsZT47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ })

})