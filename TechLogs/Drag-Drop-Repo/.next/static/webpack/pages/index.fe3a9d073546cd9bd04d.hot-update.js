webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var handleDragDrop = function handleDragDrop() {};\n\n  var DragComponent = function DragComponent(_ref) {\n    var item = _ref.item,\n        index = _ref.index;\n    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"Draggable\"], {\n      key: item.id,\n      index: index,\n      draggableId: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 45\n      }\n    }, function (provided) {\n      return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        ref: provided.innerRef\n      }, provided.draggableProps, provided.dragHandleProps, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 7\n        }\n      }), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 9\n        }\n      }, item.name));\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 4\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__[\"Droppable\"], {\n    droppableId: \"droppable\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, function (provided) {\n    return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      ref: provided.innerRef\n    }, provided.droppableProps, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }\n    }), state.map(function (item, index) {\n      return __jsx(DragComponent, {\n        key: item.id,\n        item: item,\n        index: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }\n      });\n    }), provided.placeholder);\n  })));\n};\n\n_s(Home, \"BesDbRegePIGgoZFDSl1jbsE5cA=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // const [state, setState] = useState(data);\n// const handleDragDrop = (result) => {\n//   if (!result.destination) return;\n//   const items = Array.from(state);\n//   const [reorder] = items.splice(result.source.index, 1);\n//   items.splice(result.destination.index, 0, reorder);\n//   setState(items);\n// };\n// const DragComponent = ({ item, index }) => {\n//   return (\n//     <Draggable key={item.id} index={index} draggableId={item.id}>\n//       {(provided) => (\n//         <div\n//           ref={provided.innerRef}\n//           {...provided.draggableProps}\n//           {...provided.dragHandleProps}\n//           className=\"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\"\n//         >\n//           {item.name}\n//         </div>\n//       )}\n//     </Draggable>\n//   );\n// };\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeD9jM2FmIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlRHJhZ0Ryb3AiLCJEcmFnQ29tcG9uZW50IiwiaXRlbSIsImluZGV4IiwiaWQiLCJwcm92aWRlZCIsImlubmVyUmVmIiwiZHJhZ2dhYmxlUHJvcHMiLCJkcmFnSGFuZGxlUHJvcHMiLCJuYW1lIiwiZHJvcHBhYmxlUHJvcHMiLCJtYXAiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBQUE7O0VBRWpCLGdCQUEwQkMsc0RBQVEsQ0FBQ0MsNkNBQUQsQ0FBbEM7RUFBQSxJQUFPQyxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDRCxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU0sQ0FBRSxDQUEvQjs7RUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0lBQUEsSUFBR0MsSUFBSCxRQUFHQSxJQUFIO0lBQUEsSUFBU0MsS0FBVCxRQUFTQSxLQUFUO0lBQUEsT0FBcUIsTUFBQyw2REFBRDtNQUFXLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxFQUFyQjtNQUF5QixLQUFLLEVBQUVELEtBQWhDO01BQXVDLFdBQVcsRUFBRUQsSUFBSSxDQUFDRSxFQUF6RDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ3ZDLFVBQUNDLFFBQUQ7TUFBQSxPQUNDO1FBQUssR0FBRyxFQUFFQSxRQUFRLENBQUNDO01BQW5CLEdBQWlDRCxRQUFRLENBQUNFLGNBQTFDLEVBQThERixRQUFRLENBQUNHLGVBQXZFO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsSUFDRTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQUlOLElBQUksQ0FBQ08sSUFBVCxDQURGLENBREQ7SUFBQSxDQUR1QyxDQUFyQjtFQUFBLENBQXRCOztFQVFBLE9BQ0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNDO0lBQUcsU0FBUyxFQUFDLHNCQUFiO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsdUJBREQsRUFFQztJQUFJLFNBQVMsRUFBQyxVQUFkO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFGRCxFQUdDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFIRCxFQUlDLE1BQUMsbUVBQUQ7SUFBaUIsU0FBUyxFQUFFVCxjQUE1QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0MsTUFBQyw2REFBRDtJQUFXLFdBQVcsRUFBQyxXQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsVUFBQ0ssUUFBRDtJQUFBLE9BQ0E7TUFBSyxHQUFHLEVBQUVBLFFBQVEsQ0FBQ0M7SUFBbkIsR0FBaUNELFFBQVEsQ0FBQ0ssY0FBMUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxJQUNFWixLQUFLLENBQUNhLEdBQU4sQ0FBVSxVQUFDVCxJQUFELEVBQU9DLEtBQVA7TUFBQSxPQUNWLE1BQUMsYUFBRDtRQUFlLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxFQUF6QjtRQUE2QixJQUFJLEVBQUVGLElBQW5DO1FBQXlDLEtBQUssRUFBRUMsS0FBaEQ7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQURVO0lBQUEsQ0FBVixDQURGLEVBSVNFLFFBQVEsQ0FBQ08sV0FKbEIsQ0FEQTtFQUFBLENBREYsQ0FERCxDQUpELENBREQ7QUFtQkEsQ0FoQ0Q7O0dBQU1qQixJOztLQUFBQSxJO0FBaUNTQSxtRUFBZixFLENBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShkYXRhKTtcblx0Y29uc3QgaGFuZGxlRHJhZ0Ryb3AgPSAoKSA9PiB7fTtcblxuXHRjb25zdCBEcmFnQ29tcG9uZW50ID0gKHsgaXRlbSwgaW5kZXggfSkgPT4gPERyYWdnYWJsZSBrZXk9e2l0ZW0uaWR9IGluZGV4PXtpbmRleH0gZHJhZ2dhYmxlSWQ9e2l0ZW0uaWR9PlxuICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgIDxkaXYgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfSB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfT5cbiAgICAgICAgPHA+e2l0ZW0ubmFtZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8L0RyYWdnYWJsZT47XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIj5EcmFnIGRyb3AgZXhhbXBsZTwvcD5cblx0XHRcdDxociBjbGFzc05hbWU9XCJ3LXNjcmVlblwiIC8+XG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRHJvcH0+XG5cdFx0XHRcdDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIj5cblx0XHRcdFx0XHR7KHByb3ZpZGVkKSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30+XG5cdFx0XHRcdFx0XHRcdHtzdGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PERyYWdDb21wb25lbnQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSBpbmRleD17aW5kZXh9IC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0Ryb3BwYWJsZT5cblx0XHRcdDwvRHJhZ0Ryb3BDb250ZXh0PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbi8vIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZGF0YSk7XG5cbi8vIGNvbnN0IGhhbmRsZURyYWdEcm9wID0gKHJlc3VsdCkgPT4ge1xuLy8gICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xuLy8gICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oc3RhdGUpO1xuLy8gICBjb25zdCBbcmVvcmRlcl0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XG4vLyAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXIpO1xuLy8gICBzZXRTdGF0ZShpdGVtcyk7XG4vLyB9O1xuXG4vLyBjb25zdCBEcmFnQ29tcG9uZW50ID0gKHsgaXRlbSwgaW5kZXggfSkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxEcmFnZ2FibGUga2V5PXtpdGVtLmlkfSBpbmRleD17aW5kZXh9IGRyYWdnYWJsZUlkPXtpdGVtLmlkfT5cbi8vICAgICAgIHsocHJvdmlkZWQpID0+IChcbi8vICAgICAgICAgPGRpdlxuLy8gICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4vLyAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxuLy8gICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHctMy81IG14LWF1dG8gYmctZ3JheS0yMDAgcm91bmRlZC14bCBob3ZlcjpiZy1ncmF5LTMwMCBteS0yXCJcbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIHtpdGVtLm5hbWV9XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgKX1cbi8vICAgICA8L0RyYWdnYWJsZT5cbi8vICAgKTtcbi8vIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ })

})