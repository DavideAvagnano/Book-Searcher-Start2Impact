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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ------------------------------ */\r\n/* General */\r\n/* ------------------------------ */\r\n\r\n:root {\r\n  --text-color: #fff;\r\n  --text-light-color: #9ca3af;\r\n  --bg-color: #1f2937;\r\n  --button-color: #2562eb;\r\n  --button-hover-color: #2152c5;\r\n  --error: #d93025;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  padding: 40px;\r\n  background-color: #ddd;\r\n}\r\n\r\nh1 {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* ------------------------------ */\r\n/* Form */\r\n/* ------------------------------ */\r\n\r\nform {\r\n  max-width: 450px;\r\n  margin: 0 auto 40px;\r\n  position: relative;\r\n}\r\n\r\nform .svg-container {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 12px;\r\n  pointer-events: none;\r\n}\r\n\r\nform .svg-container svg {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  color: var(--text-light-color);\r\n}\r\n\r\n#search-bar {\r\n  outline: none;\r\n  border: 2px solid transparent;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  padding-left: 2.5rem;\r\n  font-size: 0.875rem;\r\n  color: var(--text-color);\r\n  border-radius: 0.5rem;\r\n  background-color: var(--bg-color);\r\n}\r\n\r\n#search-bar::placeholder {\r\n  color: var(--text-light-color);\r\n}\r\n\r\n#search-bar:focus {\r\n  border: 2px solid var(--button-color);\r\n}\r\n\r\n#search-bar.error {\r\n  border: 2px solid var(--error);\r\n}\r\n\r\n#search-button {\r\n  position: absolute;\r\n  right: 0.625rem;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  background-color: var(--button-color);\r\n  padding: 0.5rem 1rem;\r\n  color: var(--text-color);\r\n  font-size: 0.875rem;\r\n  font-weight: 500;\r\n  border-radius: 0.5rem;\r\n  border: 3px solid transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n#search-button:hover {\r\n  background-color: var(--button-hover-color);\r\n}\r\n\r\n#search-button:active {\r\n  border: 3px solid var(--button-color);\r\n}\r\n\r\n/* ------------------------------ */\r\n/* Cards */\r\n/* ------------------------------ */\r\n\r\n#results-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n}\r\n\r\n.cards-container {\r\n  height: 200px;\r\n  width: auto;\r\n  background-color: var(--bg-color);\r\n  border-radius: 0.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.cards-container img {\r\n  height: 100%;\r\n  border-top-left-radius: 0.5rem;\r\n  border-bottom-left-radius: 0.5rem;\r\n}\r\n\r\n.cards-container div {\r\n  padding: 20px;\r\n}\r\n\r\n.cards-container div h5 {\r\n  margin-bottom: 5px;\r\n  color: var(--text-color);\r\n  font-size: 16px;\r\n}\r\n\r\n.cards-container div p {\r\n  font-size: 13px;\r\n  color: var(--text-light-color);\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.description-btn {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 14px;\r\n  color: var(--text-color);\r\n  background-color: var(--button-color);\r\n  font-size: 0.875rem;\r\n  font-weight: 500;\r\n  border-radius: 0.5rem;\r\n  border: 3px solid transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.description-btn:hover {\r\n  background-color: var(--button-hover-color);\r\n}\r\n\r\n.description-btn:active {\r\n  border: 3px solid var(--button-color);\r\n}\r\n\r\n#arrow-icon {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 14px;\r\n  height: 14px;\r\n  margin-left: 8px;\r\n  color: var(--text-color);\r\n}\r\n\r\n/* ------------------------------ */\r\n/* Modal Description */\r\n/* ------------------------------ */\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.modal-content {\r\n  background-color: white;\r\n  width: 50%;\r\n  padding: 30px;\r\n  border-radius: 0.5rem;\r\n  color: var(--bg-color);\r\n  font-size: 15px;\r\n  position: absolute;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  color: var(--bg-color);\r\n}\r\n\r\n/* ------------------------------ */\r\n/* Loading Spinner */\r\n/* ------------------------------ */\r\n\r\n#spinner {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#spinner svg {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n#spinner-container {\r\n  display: none;\r\n}\r\n\r\n#spinner-container.show {\r\n  display: block;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://book-searcher/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://book-searcher/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://book-searcher/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://book-searcher/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://book-searcher/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://book-searcher/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://book-searcher/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://book-searcher/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://book-searcher/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://book-searcher/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nclass BookSearch {\r\n  constructor() {\r\n    this.form = document.querySelector(\"form\");\r\n    this.input = document.getElementById(\"search-bar\");\r\n    this.submitButton = document.getElementById(\"search-button\");\r\n    this.resultsContainer = document.getElementById(\"results-container\");\r\n    this.spinner = document.getElementById(\"spinner-container\");\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    let showError = false;\r\n    this.form.addEventListener(\"submit\", async (e) => {\r\n      e.preventDefault();\r\n      const searchTopic = this.input.value.trim();\r\n      if (searchTopic.indexOf(\" \") !== -1) {\r\n        console.error(\"Topic must be one word\");\r\n\r\n        if (!showError) {\r\n          this.clearResultsContainer();\r\n          this.input.classList.add(\"error\");\r\n          const errorMessage = document.createElement(\"p\");\r\n          errorMessage.textContent = \"⛔ Enter a single topic\";\r\n          errorMessage.style.color = \"var(--error)\";\r\n          errorMessage.style.fontWeight = \"500\";\r\n          this.resultsContainer.appendChild(errorMessage);\r\n          showError = true;\r\n          this.input.value = \"\";\r\n        }\r\n        return;\r\n      }\r\n\r\n      try {\r\n        showError = false;\r\n        this.input.classList.remove(\"error\");\r\n        const bookList = await this.getBookList(searchTopic);\r\n        if (bookList.length === 0) {\r\n          console.warn(\"No results found\");\r\n\r\n          const emptyList = document.createElement(\"p\");\r\n          emptyList.textContent = \"Empty List...\";\r\n          emptyList.style.color = \"var(--bg-color)\";\r\n          emptyList.style.fontWeight = \"500\";\r\n          this.resultsContainer.appendChild(emptyList);\r\n          this.input.value = \"\";\r\n          return;\r\n        }\r\n        this.generateCards(bookList);\r\n        this.input.value = \"\";\r\n      } catch (error) {\r\n        this.hideLoader();\r\n        console.error(\"Error while fetching books\", error);\r\n        const errorMessage = document.createElement(\"p\");\r\n        errorMessage.textContent = \"Loading Failed\";\r\n        errorMessage.style.color = \"var(--error)\";\r\n        errorMessage.style.fontWeight = \"500\";\r\n        this.resultsContainer.appendChild(errorMessage);\r\n      }\r\n    });\r\n  }\r\n\r\n  async getBookList(topic) {\r\n    this.clearResultsContainer();\r\n    this.showLoader();\r\n    const response = await fetch(\r\n      `https://openlibrary.org/subjects/${topic.toLowerCase()}.json`\r\n    );\r\n    if (!response.ok) {\r\n      throw new Error(\"Impossible getting book's data\");\r\n    }\r\n    const data = await response.json();\r\n    this.hideLoader();\r\n    return data.works ?? [];\r\n  }\r\n\r\n  generateCards(bookList) {\r\n    this.clearResultsContainer();\r\n    bookList.forEach((book) => {\r\n      const cardContainer = this.createCard(book);\r\n      this.resultsContainer.appendChild(cardContainer);\r\n    });\r\n  }\r\n\r\n  clearResultsContainer() {\r\n    while (this.resultsContainer.firstChild) {\r\n      this.resultsContainer.removeChild(this.resultsContainer.firstChild);\r\n    }\r\n  }\r\n\r\n  createCard(book) {\r\n    const cardContainer = document.createElement(\"div\");\r\n    cardContainer.className = \"cards-container\";\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = `https://covers.openlibrary.org/b/id/${book.cover_id}.jpg`;\r\n    img.alt = \"Copertina\";\r\n\r\n    const div = document.createElement(\"div\");\r\n\r\n    const titleTag = document.createElement(\"h5\");\r\n    titleTag.textContent = \"Title:\";\r\n    const title = document.createElement(\"p\");\r\n    title.textContent = book.title;\r\n\r\n    const authorTag = document.createElement(\"h5\");\r\n    authorTag.textContent = \"Author:\";\r\n    const author = document.createElement(\"p\");\r\n    author.textContent = book.authors.map((author) => author.name).join(\", \");\r\n\r\n    const buttonDescription = document.createElement(\"button\");\r\n    buttonDescription.textContent = \"Description\";\r\n    buttonDescription.className = \"description-btn\";\r\n\r\n    const span = document.createElement(\"span\");\r\n    span.innerHTML = `\r\n            <svg\r\n              id=\"arrow-icon\"\r\n              aria-hidden=\"true\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              fill=\"none\"\r\n              viewBox=\"0 0 14 10\"\r\n            >\r\n              <path\r\n                stroke=\"currentColor\"\r\n                stroke-linecap=\"round\"\r\n                stroke-linejoin=\"round\"\r\n                stroke-width=\"2\"\r\n                d=\"M1 5h12m0 0L9 1m4 4L9 9\"\r\n              />\r\n            </svg>`;\r\n\r\n    buttonDescription.appendChild(span);\r\n    div.appendChild(titleTag);\r\n    div.appendChild(title);\r\n    div.appendChild(authorTag);\r\n    div.appendChild(author);\r\n    div.appendChild(buttonDescription);\r\n    cardContainer.appendChild(img);\r\n    cardContainer.appendChild(div);\r\n\r\n    buttonDescription.addEventListener(\"click\", () => {\r\n      this.getDescription(book.key, cardContainer);\r\n    });\r\n\r\n    return cardContainer;\r\n  }\r\n\r\n  getDescription(key) {\r\n    fetch(`https://openlibrary.org${key}.json`)\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        let description;\r\n        if (typeof data.description === \"string\")\r\n          description = data.description;\r\n        else if (typeof data.description === \"object\" && data.description.value)\r\n          description = data.description.value;\r\n        else description = null;\r\n        this.createModal(description);\r\n      })\r\n      .catch((error) => {\r\n        console.error(\"An error occurred while fetching data\", error);\r\n      });\r\n  }\r\n\r\n  createModal(description) {\r\n    const modal = document.createElement(\"div\");\r\n    modal.className = \"modal\";\r\n\r\n    const modalContent = document.createElement(\"div\");\r\n    modalContent.className = \"modal-content\";\r\n\r\n    const closeButton = document.createElement(\"button\");\r\n    closeButton.textContent = \"x\";\r\n    closeButton.className = \"close-btn\";\r\n    closeButton.addEventListener(\"click\", () => {\r\n      this.closeModal(modal);\r\n    });\r\n\r\n    const descriptionParagraph = document.createElement(\"p\");\r\n    descriptionParagraph.textContent = description\r\n      ? description\r\n      : \"No description\";\r\n\r\n    modalContent.appendChild(closeButton);\r\n    modalContent.appendChild(descriptionParagraph);\r\n    modal.appendChild(modalContent);\r\n\r\n    document.body.appendChild(modal);\r\n  }\r\n\r\n  closeModal(modal) {\r\n    document.body.removeChild(modal);\r\n  }\r\n\r\n  showLoader() {\r\n    this.spinner.classList.add(\"show\");\r\n  }\r\n\r\n  hideLoader() {\r\n    this.spinner.classList.remove(\"show\");\r\n  }\r\n}\r\n\r\nconst bookSearch = new BookSearch();\r\n\n\n//# sourceURL=webpack://book-searcher/./src/script.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;