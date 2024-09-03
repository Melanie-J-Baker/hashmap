/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hashmap.js":
/*!************************!*\
  !*** ./src/hashmap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Node(obj, next) {\n  return {\n    obj,\n    next,\n  };\n}\n\nfunction HashMap() {\n  let hashMap = [];\n  let dataLength = 0;\n  const LOAD_FACTOR = 0.75;\n\n  function createBuckets() {\n    for (let n = 0; n < 16; n++) hashMap.push(Node());\n  }\n  createBuckets();\n\n  function doubleBuckets() {\n    dataLength = 0;\n    dataLength++;\n    const OLD_LENGTH = hashMap.length;\n    let oldHashMap = entries();\n    console.log(oldHashMap);\n    hashMap = [];\n    for (let n = 0; n < OLD_LENGTH * 2; n++) hashMap.push(Node());\n    for (let node of oldHashMap) set(node[0], node[1]);\n  }\n\n  function hash(key) {\n    let hashCode = 0;\n\n    const PRIME_NUMBER = 31;\n    for (let i = 0; i < key.length; i++) {\n      hashCode = PRIME_NUMBER * hashCode + key.charCodeAt(i);\n      hashCode = hashCode % hashMap.length;\n    }\n\n    return hashCode;\n  }\n  function set(key, value) {\n    const HASHED_KEY = hash(key);\n    let oldNode = hashMap[HASHED_KEY].next;\n    while (oldNode) {\n      if (oldNode.obj[key]) {\n        oldNode.obj[key] = value;\n        return;\n      }\n      oldNode = oldNode.next;\n    }\n    dataLength++;\n    if (dataLength > hashMap.length * LOAD_FACTOR) doubleBuckets();\n    const obj = {};\n    obj[key] = value;\n    const node = Node(obj, hashMap[HASHED_KEY].next);\n    hashMap[HASHED_KEY].next = node;\n  }\n  function entries() {\n    let allEntries = [];\n    for (let bucket of hashMap) {\n      let node = bucket.next;\n      while (node) {\n        allEntries.push([...Object.keys(node.obj), ...Object.value(node.obj)]);\n        node = node.next;\n      }\n    }\n    return allEntries;\n  }\n  return {\n    getHashMap: () => hashMap,\n    set,\n    entries,\n    get: (key) => {\n      const HASHED_KEY = hash(key);\n      let node = hashMap[HASHED_KEY].next;\n      while (node) {\n        if (node.obj[key] !== undefined) return node.obj[key];\n        node = node.next;\n      }\n      return null;\n    },\n    has: (key) => {\n      const HASHED_KEY = hash(key);\n      let node = hashMap[HASHED_KEY].next;\n      while (node) {\n        if (node.obj[key] !== undefined) return true;\n        node = node.next;\n      }\n      return false;\n    },\n    remove: (key) => {\n      const HASHED_KEY = hash(key);\n      let node = hashMap[HASHED_KEY];\n      while (node.next) {\n        if (node.next.obj[key]) {\n          node.next = node.next.next;\n          dataLength--;\n          return true;\n        }\n        node = node.next;\n      }\n      return false;\n    },\n    length: () => {\n      return dataLength;\n    },\n    clear: () => {\n      hashMap = [];\n      dataLength = 0;\n      createBuckets();\n    },\n    keys: () => {\n      let allKeys = [];\n      for (let bucket of hashMap) {\n        let node = bucket.next;\n        while (node) {\n          allKeys.push(...Object.keys(node.obj));\n          node = node.next;\n        }\n      }\n      return allKeys;\n    },\n    values: () => {\n      let allValues = [];\n      for (let bucket of hashMap) {\n        let node = bucket.next;\n        while (node) {\n          allValues.push(...Object.values(node.obj));\n          node = node.next;\n        }\n      }\n      return allValues;\n    },\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HashMap);\n\n\n//# sourceURL=webpack://hashmap/./src/hashmap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hashmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashmap */ \"./src/hashmap.js\");\n\n\nconst test = (0,_hashmap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\ntest.set(\"apple\", \"red\");\ntest.set(\"banana\", \"yellow\");\ntest.set(\"carrot\", \"orange\");\ntest.set(\"dog\", \"brown\");\ntest.set(\"elephant\", \"gray\");\ntest.set(\"frog\", \"green\");\ntest.set(\"grape\", \"purple\");\ntest.set(\"hat\", \"black\");\ntest.set(\"ice cream\", \"white\");\ntest.set(\"jacket\", \"blue\");\ntest.set(\"kite\", \"pink\");\ntest.set(\"lion\", \"golden\");\n\n\n//# sourceURL=webpack://hashmap/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;