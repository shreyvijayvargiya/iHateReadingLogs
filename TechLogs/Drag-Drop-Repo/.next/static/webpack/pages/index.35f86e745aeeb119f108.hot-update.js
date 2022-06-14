webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var handleDragDrop = function handleDragDrop(result) {\n    if (!result.destination) return;\n    var items = Array.from(state);\n\n    var _items$splice = items.splice(result.source.index, 1),\n        _items$splice2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_items$splice, 1),\n        reorder = _items$splice2[0];\n\n    items.splice(result.destination.index, 0, reorder);\n    setState(items);\n  };\n\n  var DragComponent = function DragComponent(_ref) {\n    var item = _ref.item,\n        index = _ref.index;\n    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__[\"Draggable\"], {\n      key: item.id,\n      index: index,\n      draggableId: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 3\n      }\n    }, function (provided) {\n      return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        ref: provided.innerRef\n      }, provided.draggableProps, provided.dragHandleProps, {\n        className: \"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 5\n        }\n      }), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 6\n        }\n      }, item.name));\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__[\"Droppable\"], {\n    droppableId: \"droppable\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, function (provided) {\n    return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      ref: provided.innerRef\n    }, provided.droppableProps, {\n      className: \"w-3/5 mx-auto\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }\n    }), state.map(function (item, index) {\n      return __jsx(DragComponent, {\n        key: item.id,\n        item: item,\n        index: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }\n      });\n    }), provided.placeholder);\n  })));\n};\n\n_s(Home, \"BesDbRegePIGgoZFDSl1jbsE5cA=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // const [state, setState] = useState(data);\n// const handleDragDrop = (result) => {\n//   if (!result.destination) return;\n//   const items = Array.from(state);\n//   const [reorder] = items.splice(result.source.index, 1);\n//   items.splice(result.destination.index, 0, reorder);\n//   setState(items);\n// };\n// const DragComponent = ({ item, index }) => {\n//   return (\n//     <Draggable key={item.id} index={index} draggableId={item.id}>\n//       {(provided) => (\n//         <div\n//           ref={provided.innerRef}\n//           {...provided.draggableProps}\n//           {...provided.dragHandleProps}\n//           className=\"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\"\n//         >\n//           {item.name}\n//         </div>\n//       )}\n//     </Draggable>\n//   );\n// };\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeD9jM2FmIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlRHJhZ0Ryb3AiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJyZW9yZGVyIiwiRHJhZ0NvbXBvbmVudCIsIml0ZW0iLCJpZCIsInByb3ZpZGVkIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsIm5hbWUiLCJkcm9wcGFibGVQcm9wcyIsIm1hcCIsInBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtFQUFBOztFQUNsQixnQkFBMEJDLHNEQUFRLENBQUNDLDZDQUFELENBQWxDO0VBQUEsSUFBT0MsS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxNQUFELEVBQVk7SUFDbEMsSUFBSSxDQUFDQSxNQUFNLENBQUNDLFdBQVosRUFBeUI7SUFDekIsSUFBTUMsS0FBSyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV1AsS0FBWCxDQUFkOztJQUNBLG9CQUFrQkssS0FBSyxDQUFDRyxNQUFOLENBQWFMLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyxLQUEzQixFQUFrQyxDQUFsQyxDQUFsQjtJQUFBO0lBQUEsSUFBT0MsT0FBUDs7SUFDQU4sS0FBSyxDQUFDRyxNQUFOLENBQWFMLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQk0sS0FBaEMsRUFBdUMsQ0FBdkMsRUFBMENDLE9BQTFDO0lBQ0FWLFFBQVEsQ0FBQ0ksS0FBRCxDQUFSO0VBQ0EsQ0FORDs7RUFRQSxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0lBQUEsSUFBR0MsSUFBSCxRQUFHQSxJQUFIO0lBQUEsSUFBU0gsS0FBVCxRQUFTQSxLQUFUO0lBQUEsT0FDckIsTUFBQyw2REFBRDtNQUFXLEdBQUcsRUFBRUcsSUFBSSxDQUFDQyxFQUFyQjtNQUF5QixLQUFLLEVBQUVKLEtBQWhDO01BQXVDLFdBQVcsRUFBRUcsSUFBSSxDQUFDQyxFQUF6RDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0UsVUFBQ0MsUUFBRDtNQUFBLE9BQ0E7UUFDQyxHQUFHLEVBQUVBLFFBQVEsQ0FBQ0M7TUFEZixHQUVLRCxRQUFRLENBQUNFLGNBRmQsRUFHS0YsUUFBUSxDQUFDRyxlQUhkO1FBSUMsU0FBUyxFQUFDLGlFQUpYO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsSUFNQztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUlMLElBQUksQ0FBQ00sSUFBVCxDQU5ELENBREE7SUFBQSxDQURGLENBRHFCO0VBQUEsQ0FBdEI7O0VBZUEsT0FDQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0M7SUFBRyxTQUFTLEVBQUMsc0JBQWI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx1QkFERCxFQUVDO0lBQUksU0FBUyxFQUFDLFVBQWQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZELEVBR0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUhELEVBSUMsTUFBQyxtRUFBRDtJQUFpQixTQUFTLEVBQUVqQixjQUE1QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0MsTUFBQyw2REFBRDtJQUFXLFdBQVcsRUFBQyxXQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsVUFBQ2EsUUFBRDtJQUFBLE9BQ0E7TUFDQyxHQUFHLEVBQUVBLFFBQVEsQ0FBQ0M7SUFEZixHQUVLRCxRQUFRLENBQUNLLGNBRmQ7TUFHQyxTQUFTLEVBQUMsZUFIWDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLElBS0VwQixLQUFLLENBQUNxQixHQUFOLENBQVUsVUFBQ1IsSUFBRCxFQUFPSCxLQUFQO01BQUEsT0FDVixNQUFDLGFBQUQ7UUFBZSxHQUFHLEVBQUVHLElBQUksQ0FBQ0MsRUFBekI7UUFBNkIsSUFBSSxFQUFFRCxJQUFuQztRQUF5QyxLQUFLLEVBQUVILEtBQWhEO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFEVTtJQUFBLENBQVYsQ0FMRixFQVFFSyxRQUFRLENBQUNPLFdBUlgsQ0FEQTtFQUFBLENBREYsQ0FERCxDQUpELENBREQ7QUF1QkEsQ0FqREQ7O0dBQU16QixJOztLQUFBQSxJO0FBa0RTQSxtRUFBZixFLENBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZGF0YSk7XG5cblx0Y29uc3QgaGFuZGxlRHJhZ0Ryb3AgPSAocmVzdWx0KSA9PiB7XG5cdFx0aWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcblx0XHRjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oc3RhdGUpO1xuXHRcdGNvbnN0IFtyZW9yZGVyXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcblx0XHRpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyKTtcblx0XHRzZXRTdGF0ZShpdGVtcyk7XG5cdH07XG5cblx0Y29uc3QgRHJhZ0NvbXBvbmVudCA9ICh7IGl0ZW0sIGluZGV4IH0pID0+IChcblx0XHQ8RHJhZ2dhYmxlIGtleT17aXRlbS5pZH0gaW5kZXg9e2luZGV4fSBkcmFnZ2FibGVJZD17aXRlbS5pZH0+XG5cdFx0XHR7KHByb3ZpZGVkKSA9PiAoXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRyZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuXHRcdFx0XHRcdHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cblx0XHRcdFx0XHR7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInAtNCB3LTMvNSBteC1hdXRvIGJnLWdyYXktMjAwIHJvdW5kZWQteGwgaG92ZXI6YmctZ3JheS0zMDAgbXktMlwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8cD57aXRlbS5uYW1lfTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvRHJhZ2dhYmxlPlxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtY2VudGVyXCI+RHJhZyBkcm9wIGV4YW1wbGU8L3A+XG5cdFx0XHQ8aHIgY2xhc3NOYW1lPVwidy1zY3JlZW5cIiAvPlxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0Ryb3B9PlxuXHRcdFx0XHQ8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCI+XG5cdFx0XHRcdFx0eyhwcm92aWRlZCkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRyZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuXHRcdFx0XHRcdFx0XHR7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctMy81IG14LWF1dG9cIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7c3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxEcmFnQ29tcG9uZW50IGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gaW5kZXg9e2luZGV4fSAvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0e3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9Ecm9wcGFibGU+XG5cdFx0XHQ8L0RyYWdEcm9wQ29udGV4dD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG4vLyBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRhdGEpO1xuXG4vLyBjb25zdCBoYW5kbGVEcmFnRHJvcCA9IChyZXN1bHQpID0+IHtcbi8vICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcbi8vICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHN0YXRlKTtcbi8vICAgY29uc3QgW3Jlb3JkZXJdID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xuLy8gICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyKTtcbi8vICAgc2V0U3RhdGUoaXRlbXMpO1xuLy8gfTtcblxuLy8gY29uc3QgRHJhZ0NvbXBvbmVudCA9ICh7IGl0ZW0sIGluZGV4IH0pID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8RHJhZ2dhYmxlIGtleT17aXRlbS5pZH0gaW5kZXg9e2luZGV4fSBkcmFnZ2FibGVJZD17aXRlbS5pZH0+XG4vLyAgICAgICB7KHByb3ZpZGVkKSA9PiAoXG4vLyAgICAgICAgIDxkaXZcbi8vICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuLy8gICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbi8vICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCB3LTMvNSBteC1hdXRvIGJnLWdyYXktMjAwIHJvdW5kZWQteGwgaG92ZXI6YmctZ3JheS0zMDAgbXktMlwiXG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICB7aXRlbS5uYW1lfVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICl9XG4vLyAgICAgPC9EcmFnZ2FibGU+XG4vLyAgICk7XG4vLyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ })

})