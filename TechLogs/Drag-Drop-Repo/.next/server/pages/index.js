module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/home/data.js":
/*!*********************************!*\
  !*** ./components/home/data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  id: \"item-1\",\n  name: \"John\"\n}, {\n  id: \"item-2\",\n  name: \"Doe\"\n}, {\n  id: \"item-3\",\n  name: \"Hammerd\"\n}, {\n  id: \"item-4\",\n  name: \"Rahim\"\n}, {\n  id: \"item-5\",\n  name: \"Stones\"\n}]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvZGF0YS5qcz82OTk1Il0sIm5hbWVzIjpbImlkIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxnRUFDZDtFQUNDQSxFQUFFLEVBQUUsUUFETDtFQUVDQyxJQUFJLEVBQUU7QUFGUCxDQURjLEVBS2Q7RUFDQ0QsRUFBRSxFQUFFLFFBREw7RUFFQ0MsSUFBSSxFQUFFO0FBRlAsQ0FMYyxFQVNkO0VBQ0NELEVBQUUsRUFBRSxRQURMO0VBRUNDLElBQUksRUFBRTtBQUZQLENBVGMsRUFhZDtFQUNDRCxFQUFFLEVBQUUsUUFETDtFQUVDQyxJQUFJLEVBQUU7QUFGUCxDQWJjLEVBaUJkO0VBQ0NELEVBQUUsRUFBRSxRQURMO0VBRUNDLElBQUksRUFBRTtBQUZQLENBakJjLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFtcblx0e1xuXHRcdGlkOiBcIml0ZW0tMVwiLFxuXHRcdG5hbWU6IFwiSm9oblwiLFxuXHR9LFxuXHR7XG5cdFx0aWQ6IFwiaXRlbS0yXCIsXG5cdFx0bmFtZTogXCJEb2VcIixcblx0fSxcblx0e1xuXHRcdGlkOiBcIml0ZW0tM1wiLFxuXHRcdG5hbWU6IFwiSGFtbWVyZFwiLFxuXHR9LFxuXHR7XG5cdFx0aWQ6IFwiaXRlbS00XCIsXG5cdFx0bmFtZTogXCJSYWhpbVwiLFxuXHR9LFxuXHR7XG5cdFx0aWQ6IFwiaXRlbS01XCIsXG5cdFx0bmFtZTogXCJTdG9uZXNcIixcblx0fSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/data.js\n");

/***/ }),

/***/ "./components/home/index.jsx":
/*!***********************************!*\
  !*** ./components/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ \"react-beautiful-dnd\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./components/home/data.js\");\nvar _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/components/home/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst Home = () => {\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  const handleDragDrop = result => {\n    if (!result.destination) return;\n    const items = Array.from(state);\n    const [reorder] = items.splice(result.source.index, 1);\n    items.splice(result.destination.index, 0, reorder);\n    setState(items);\n  };\n\n  const DragComponent = ({\n    item,\n    index\n  }) => __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__[\"Draggable\"], {\n    key: item.id,\n    index: index,\n    draggableId: item.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  }, provided => __jsx(\"div\", _extends({\n    ref: provided.innerRef\n  }, provided.draggableProps, provided.dragHandleProps, {\n    className: \"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 6\n    }\n  }, item.name)));\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 3\n    }\n  }, __jsx(\"p\", {\n    className: \"text-3xl text-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 4\n    }\n  }, \"Drag drop example\"), __jsx(\"hr\", {\n    className: \"w-screen\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }\n  }), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }\n  }), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__[\"DragDropContext\"], {\n    onDragEnd: handleDragDrop,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }\n  }, __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__[\"Droppable\"], {\n    droppableId: \"droppable\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, provided => __jsx(\"div\", _extends({\n    ref: provided.innerRef\n  }, provided.droppableProps, {\n    className: \"w-3/5 mx-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), state.map((item, index) => __jsx(DragComponent, {\n    key: item.id,\n    item: item,\n    index: index,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  })), provided.placeholder))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // const [state, setState] = useState(data);\n// const handleDragDrop = (result) => {\n//   if (!result.destination) return;\n//   const items = Array.from(state);\n//   const [reorder] = items.splice(result.source.index, 1);\n//   items.splice(result.destination.index, 0, reorder);\n//   setState(items);\n// };\n// const DragComponent = ({ item, index }) => {\n//   return (\n//     <Draggable key={item.id} index={index} draggableId={item.id}>\n//       {(provided) => (\n//         <div\n//           ref={provided.innerRef}\n//           {...provided.draggableProps}\n//           {...provided.dragHandleProps}\n//           className=\"p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2\"\n//         >\n//           {item.name}\n//         </div>\n//       )}\n//     </Draggable>\n//   );\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvaW5kZXguanN4P2MzYWYiXSwibmFtZXMiOlsiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJoYW5kbGVEcmFnRHJvcCIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJyZW9yZGVyIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJEcmFnQ29tcG9uZW50IiwiaXRlbSIsImlkIiwicHJvdmlkZWQiLCJpbm5lclJlZiIsImRyYWdnYWJsZVByb3BzIiwiZHJhZ0hhbmRsZVByb3BzIiwibmFtZSIsImRyb3BwYWJsZVByb3BzIiwibWFwIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0VBQ2xCLE1BQU07SUFBQSxHQUFDQyxLQUFEO0lBQUEsR0FBUUM7RUFBUixJQUFvQkMsc0RBQVEsQ0FBQ0MsNkNBQUQsQ0FBbEM7O0VBRUEsTUFBTUMsY0FBYyxHQUFJQyxNQUFELElBQVk7SUFDbEMsSUFBSSxDQUFDQSxNQUFNLENBQUNDLFdBQVosRUFBeUI7SUFDekIsTUFBTUMsS0FBSyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV1QsS0FBWCxDQUFkO0lBQ0EsTUFBTSxDQUFDVSxPQUFELElBQVlILEtBQUssQ0FBQ0ksTUFBTixDQUFhTixNQUFNLENBQUNPLE1BQVAsQ0FBY0MsS0FBM0IsRUFBa0MsQ0FBbEMsQ0FBbEI7SUFDQU4sS0FBSyxDQUFDSSxNQUFOLENBQWFOLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQk8sS0FBaEMsRUFBdUMsQ0FBdkMsRUFBMENILE9BQTFDO0lBQ0FULFFBQVEsQ0FBQ00sS0FBRCxDQUFSO0VBQ0EsQ0FORDs7RUFRQSxNQUFNTyxhQUFhLEdBQUcsQ0FBQztJQUFFQyxJQUFGO0lBQVFGO0VBQVIsQ0FBRCxLQUNyQixNQUFDLDZEQUFEO0lBQVcsR0FBRyxFQUFFRSxJQUFJLENBQUNDLEVBQXJCO0lBQXlCLEtBQUssRUFBRUgsS0FBaEM7SUFBdUMsV0FBVyxFQUFFRSxJQUFJLENBQUNDLEVBQXpEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDR0MsUUFBRCxJQUNBO0lBQ0MsR0FBRyxFQUFFQSxRQUFRLENBQUNDO0VBRGYsR0FFS0QsUUFBUSxDQUFDRSxjQUZkLEVBR0tGLFFBQVEsQ0FBQ0csZUFIZDtJQUlDLFNBQVMsRUFBQyxpRUFKWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLElBTUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFJTCxJQUFJLENBQUNNLElBQVQsQ0FORCxDQUZGLENBREQ7O0VBZUEsT0FDQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0M7SUFBRyxTQUFTLEVBQUMsc0JBQWI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx1QkFERCxFQUVDO0lBQUksU0FBUyxFQUFDLFVBQWQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZELEVBR0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUhELEVBSUMsTUFBQyxtRUFBRDtJQUFpQixTQUFTLEVBQUVqQixjQUE1QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0MsTUFBQyw2REFBRDtJQUFXLFdBQVcsRUFBQyxXQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dhLFFBQUQsSUFDQTtJQUNDLEdBQUcsRUFBRUEsUUFBUSxDQUFDQztFQURmLEdBRUtELFFBQVEsQ0FBQ0ssY0FGZDtJQUdDLFNBQVMsRUFBQyxlQUhYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsSUFLRXRCLEtBQUssQ0FBQ3VCLEdBQU4sQ0FBVSxDQUFDUixJQUFELEVBQU9GLEtBQVAsS0FDVixNQUFDLGFBQUQ7SUFBZSxHQUFHLEVBQUVFLElBQUksQ0FBQ0MsRUFBekI7SUFBNkIsSUFBSSxFQUFFRCxJQUFuQztJQUF5QyxLQUFLLEVBQUVGLEtBQWhEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFEQSxDQUxGLEVBUUVJLFFBQVEsQ0FBQ08sV0FSWCxDQUZGLENBREQsQ0FKRCxDQUREO0FBdUJBLENBakREOztBQWtEZXpCLG1FQUFmLEUsQ0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGFcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShkYXRhKTtcblxuXHRjb25zdCBoYW5kbGVEcmFnRHJvcCA9IChyZXN1bHQpID0+IHtcblx0XHRpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xuXHRcdGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShzdGF0ZSk7XG5cdFx0Y29uc3QgW3Jlb3JkZXJdID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xuXHRcdGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXIpO1xuXHRcdHNldFN0YXRlKGl0ZW1zKTtcblx0fTtcblxuXHRjb25zdCBEcmFnQ29tcG9uZW50ID0gKHsgaXRlbSwgaW5kZXggfSkgPT4gKFxuXHRcdDxEcmFnZ2FibGUga2V5PXtpdGVtLmlkfSBpbmRleD17aW5kZXh9IGRyYWdnYWJsZUlkPXtpdGVtLmlkfT5cblx0XHRcdHsocHJvdmlkZWQpID0+IChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG5cdFx0XHRcdFx0ey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxuXHRcdFx0XHRcdHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicC00IHctMy81IG14LWF1dG8gYmctZ3JheS0yMDAgcm91bmRlZC14bCBob3ZlcjpiZy1ncmF5LTMwMCBteS0yXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxwPntpdGVtLm5hbWV9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC9EcmFnZ2FibGU+XG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIj5EcmFnIGRyb3AgZXhhbXBsZTwvcD5cblx0XHRcdDxociBjbGFzc05hbWU9XCJ3LXNjcmVlblwiIC8+XG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRHJvcH0+XG5cdFx0XHRcdDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIj5cblx0XHRcdFx0XHR7KHByb3ZpZGVkKSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG5cdFx0XHRcdFx0XHRcdHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy0zLzUgbXgtYXV0b1wiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtzdGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PERyYWdDb21wb25lbnQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSBpbmRleD17aW5kZXh9IC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHR7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0Ryb3BwYWJsZT5cblx0XHRcdDwvRHJhZ0Ryb3BDb250ZXh0PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbi8vIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZGF0YSk7XG5cbi8vIGNvbnN0IGhhbmRsZURyYWdEcm9wID0gKHJlc3VsdCkgPT4ge1xuLy8gICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xuLy8gICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oc3RhdGUpO1xuLy8gICBjb25zdCBbcmVvcmRlcl0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XG4vLyAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXIpO1xuLy8gICBzZXRTdGF0ZShpdGVtcyk7XG4vLyB9O1xuXG4vLyBjb25zdCBEcmFnQ29tcG9uZW50ID0gKHsgaXRlbSwgaW5kZXggfSkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxEcmFnZ2FibGUga2V5PXtpdGVtLmlkfSBpbmRleD17aW5kZXh9IGRyYWdnYWJsZUlkPXtpdGVtLmlkfT5cbi8vICAgICAgIHsocHJvdmlkZWQpID0+IChcbi8vICAgICAgICAgPGRpdlxuLy8gICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4vLyAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxuLy8gICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHctMy81IG14LWF1dG8gYmctZ3JheS0yMDAgcm91bmRlZC14bCBob3ZlcjpiZy1ncmF5LTMwMCBteS0yXCJcbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIHtpdGVtLm5hbWV9XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgKX1cbi8vICAgICA8L0RyYWdnYWJsZT5cbi8vICAgKTtcbi8vIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/index.jsx\n");

/***/ }),

/***/ "./components/index.jsx":
/*!******************************!*\
  !*** ./components/index.jsx ***!
  \******************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./components/home/index.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzeD82ZGNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIEhvbWUgfSBmcm9tICcuL2hvbWUnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/index.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ \"./components/index.jsx\");\nvar _jsxFileName = \"/Users/shreyvijayvargiya/Desktop/Drag-Drop-Repo/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst App = () => {\n  return __jsx(\"div\", {\n    className: \"w-full flex justify-center items-start p-10\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Home\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsTUFBTTtFQUNqQixPQUFPO0lBQUssU0FBUyxFQUFDLDZDQUFmO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQSxNQUFDLGdEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFEQSxDQUFQO0FBR0EsQ0FKRDs7QUFNZUEsa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHAtMTBcIj5cbiAgICAgICAgPEhvbWUgLz5cbiAgICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-beautiful-dnd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI/MGQ2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1iZWF1dGlmdWwtZG5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-beautiful-dnd\n");

/***/ })

/******/ });