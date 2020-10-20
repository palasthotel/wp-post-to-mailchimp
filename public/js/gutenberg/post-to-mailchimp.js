/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/gutenberg.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/script/components/AudiencesListControl.js":
/*!*******************************************************!*\
  !*** ./src/script/components/AudiencesListControl.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-config */ "./src/script/hooks/use-config.js");
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");







var AudiencesListControl = function AudiencesListControl() {
  var _useAudience = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useAudience"])(),
      _useAudience2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useAudience, 2),
      state = _useAudience2[0],
      setState = _useAudience2[1];

  var audiences = Object(_hooks_use_config__WEBPACK_IMPORTED_MODULE_4__["useAudiencesLists"])();
  var options = [{
    value: "",
    label: '- Choose audience -'
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(audiences.map(function (_ref) {
    var listId = _ref.listId,
        name = _ref.name;
    return {
      value: listId,
      label: name
    };
  })));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: "Audience",
    value: state,
    onChange: setState,
    options: options
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AudiencesListControl);

/***/ }),

/***/ "./src/script/components/PluginComponent.js":
/*!**************************************************!*\
  !*** ./src/script/components/PluginComponent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AudiencesListControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudiencesListControl */ "./src/script/components/AudiencesListControl.js");
/* harmony import */ var _SegmentsListControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SegmentsListControl */ "./src/script/components/SegmentsListControl.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);








var PluginComponent = function PluginComponent() {
  var Post = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useSelect"])(function (select) {
    return select('core/editor').getCurrentPost();
  });
  console.log(Post);

  var _useAudience = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useAudience"])(),
      _useAudience2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useAudience, 2),
      audience = _useAudience2[0],
      setAudience = _useAudience2[1];

  var _useSegment = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useSegment"])(),
      _useSegment2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useSegment, 2),
      segment = _useSegment2[0],
      setSegment = _useSegment2[1];

  var _useCampaigns = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useCampaigns"])(Post.id),
      _useCampaigns2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useCampaigns, 3),
      campaigns = _useCampaigns2[0],
      updateCampaign = _useCampaigns2[1],
      addCampaign = _useCampaigns2[2];

  console.log("campaigns", campaigns);

  var handleCreateCampaign = function handleCreateCampaign() {
    console.log("create campaign with", audience, segment);
    addCampaign({
      post_id: Post.id,
      audience_id: audience,
      segment_id: segment
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: "#preview"
  }, "Preview")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_AudiencesListControl__WEBPACK_IMPORTED_MODULE_2__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_SegmentsListControl__WEBPACK_IMPORTED_MODULE_3__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isSecondary: true,
    onClick: handleCreateCampaign
  }, "Create Campaign"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Send Campaign"));
};

/* harmony default export */ __webpack_exports__["default"] = (PluginComponent);

/***/ }),

/***/ "./src/script/components/SegmentsListControl.js":
/*!******************************************************!*\
  !*** ./src/script/components/SegmentsListControl.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_use_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-config */ "./src/script/hooks/use-config.js");
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");








var SegmentsListControl = function SegmentsListControl() {
  var _useAudience = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_6__["useAudience"])(),
      _useAudience2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useAudience, 1),
      audience = _useAudience2[0];

  var segments = Object(_hooks_use_config__WEBPACK_IMPORTED_MODULE_5__["useSegments"])(audience);

  var _useSegment = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_6__["useSegment"])(),
      _useSegment2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useSegment, 2),
      state = _useSegment2[0],
      setState = _useSegment2[1];

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(segments) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()([]) || segments.length === 0) {
    return null;
  }

  var options = [{
    value: "",
    label: '- Choose segment (optional) -'
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(segments.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name;
    return {
      value: id,
      label: name
    };
  })));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: "Segments",
    value: state,
    onChange: setState,
    options: options
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SegmentsListControl);

/***/ }),

/***/ "./src/script/data/store.js":
/*!**********************************!*\
  !*** ./src/script/data/store.js ***!
  \**********************************/
/*! exports provided: STORE_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_NAME", function() { return STORE_NAME; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // ---------------------------------------------
// default store state
// ---------------------------------------------

var DEFAULT_STATE = {
  audience: localStorage.getItem("gutenberg-post-to-mailchimp__audience") || "",
  segment: localStorage.getItem("gutenberg-post-to-mailchimp__segment") || "",
  campaigns: []
}; // ---------------------------------------------
// api actions
// ---------------------------------------------

var CAMPAIGNS_FETCH = function CAMPAIGNS_FETCH(post_id) {
  return {
    type: 'CAMPAIGNS_FETCH',
    path: "/post-to-mailchimp/v1/campaigns/".concat(post_id)
  };
};

var CAMPAIGN_ADD = function CAMPAIGN_ADD(campaign) {
  return {
    type: 'CAMPAIGN_ADD',
    path: "/post-to-mailchimp/v1/campaigns",
    data: campaign
  };
};

var CAMPAIGN_UPDATE = function CAMPAIGN_UPDATE(campaign) {
  return {
    type: 'CAMPAIGN_UPDATE',
    path: "/post-to-mailchimp/v1/campaigns",
    data: campaign
  };
}; // ---------------------------------------------
// local actions
// ---------------------------------------------


var actions = {
  setAudience: function setAudience(id) {
    return {
      type: 'SET_AUDIENCE',
      id: id
    };
  },
  setSegment: function setSegment(id) {
    return {
      type: 'SET_SEGMENT',
      id: id
    };
  },
  setCampaigns: function setCampaigns(campaigns) {
    return {
      type: 'SET_CAMPAIGNS',
      campaigns: campaigns
    };
  },
  addCampaign: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function addCampaign(campaign) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function addCampaign$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return CAMPAIGN_ADD(campaign);

          case 2:
            result = _context.sent;
            console.log(result);
            return _context.abrupt("return", {
              type: 'ADD_CAMPAIGN',
              campaign: result
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, addCampaign);
  }),
  updateCampaign: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function updateCampaign(campaign) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function updateCampaign$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return CAMPAIGN_UPDATE(campaign);

          case 2:
            result = _context2.sent;
            console.log(result);
            return _context2.abrupt("return", {
              type: 'UPDATE_CAMPAIGN',
              campaign: result
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, updateCampaign);
  }),
  reloadCampaigns: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function reloadCampaigns(post_id) {
    var campaigns;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function reloadCampaigns$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return CAMPAIGNS_FETCH(post_id);

          case 2:
            campaigns = _context3.sent;
            return _context3.abrupt("return", {
              type: 'SET_CAMPAIGNS',
              campaigns: campaigns
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, reloadCampaigns);
  })
}; // ------------------------------------------------------
// register our custom store
// ------------------------------------------------------

var STORE_NAME = 'post-to-mailchimp';
Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["registerStore"])(STORE_NAME, {
  // ------------------------------------------------------
  // reduce actions to new state
  // ------------------------------------------------------
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SET_AUDIENCE':
        localStorage.setItem("gutenberg-post-to-mailchimp__audience", action.id);
        return _objectSpread(_objectSpread({}, state), {}, {
          audience: action.id
        });

      case 'SET_SEGMENT':
        localStorage.setItem("gutenberg-post-to-mailchimp__segment", action.id);
        return _objectSpread(_objectSpread({}, state), {}, {
          segment: action.id
        });

      case 'SET_CAMPAIGNS':
        return _objectSpread(_objectSpread({}, state), {}, {
          campaigns: action.campaigns
        });

      case 'ADD_CAMPAIGN':
        return _objectSpread(_objectSpread({}, state), {}, {
          campaigns: [action.campaign].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state.campaigns))
        });

      case 'UPDATE_CAMPAIGN':
        return _objectSpread(_objectSpread({}, state), {}, {
          campaigns: state.campaigns.map(function (c) {
            return c.campaign_id === action.campaign.campaign_id ? action.campaign : c;
          })
        });
    }

    return state;
  },
  // ------------------------------------------------------
  // public actions that can be used with dispatch
  // ------------------------------------------------------
  actions: actions,
  // ------------------------------------------------------
  // selectors that can be used with select
  // ------------------------------------------------------
  selectors: {
    getAudience: function getAudience(state) {
      return state.audience;
    },
    getSegment: function getSegment(state) {
      return state.segment;
    },
    getCampaigns: function getCampaigns(state, post_id) {
      return state.campaigns;
    }
  },
  // ----------------------------------------------------------------
  //  helps resolving the equivalent selector function
  // ----------------------------------------------------------------
  resolvers: {
    getCampaigns: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function getCampaigns(post_id) {
      var campaigns;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function getCampaigns$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(post_id) === ( true ? "undefined" : undefined))) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", {
                type: "none"
              });

            case 2:
              _context4.next = 4;
              return CAMPAIGNS_FETCH(post_id);

            case 4:
              campaigns = _context4.sent;
              return _context4.abrupt("return", actions.setCampaigns(campaigns));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, getCampaigns);
    })
  },
  // ----------------------------------------------------------------
  //  controls will be executed as side effects of generator actions
  // ----------------------------------------------------------------
  controls: {
    CAMPAIGNS_FETCH: function CAMPAIGNS_FETCH(action) {
      console.log("action fetch", action);
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: action.path
      });
    },
    CAMPAIGN_ADD: function CAMPAIGN_ADD(action) {
      console.log("action add", action);
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: action.path,
        data: action.data,
        method: "POST"
      });
    },
    CAMPAIGN_UPDATE: function CAMPAIGN_UPDATE(action) {
      console.log("action update", action);
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: action.path,
        data: action.data,
        method: "PUT"
      });
    }
  }
});

/***/ }),

/***/ "./src/script/gutenberg.js":
/*!*********************************!*\
  !*** ./src/script/gutenberg.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PluginComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PluginComponent */ "./src/script/components/PluginComponent.js");









(function () {
  var PLUGIN_NAME = "post-to-mailchimp";
  Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__["registerPlugin"])(PLUGIN_NAME, {
    render: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__["PluginSidebarMoreMenuItem"], {
        target: PLUGIN_NAME,
        icon: "email"
      }, "Post to Mailchimp"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__["PluginSidebar"], {
        name: PLUGIN_NAME,
        icon: "email",
        title: "Post to Mailchimp"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_PluginComponent__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
    }
  });
})();

/***/ }),

/***/ "./src/script/hooks/use-config.js":
/*!****************************************!*\
  !*** ./src/script/hooks/use-config.js ***!
  \****************************************/
/*! exports provided: useAudiencesLists, useSegments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAudiencesLists", function() { return useAudiencesLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSegments", function() { return useSegments; });
var useAudiencesLists = function useAudiencesLists() {
  return PostToMailchimp.lists;
};
var useSegments = function useSegments(listId) {
  return PostToMailchimp.segments[listId] || [];
};

/***/ }),

/***/ "./src/script/hooks/use-store.js":
/*!***************************************!*\
  !*** ./src/script/hooks/use-store.js ***!
  \***************************************/
/*! exports provided: useAudience, useSegment, useCampaigns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAudience", function() { return useAudience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSegment", function() { return useSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCampaigns", function() { return useCampaigns; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/store.js */ "./src/script/data/store.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-config */ "./src/script/hooks/use-config.js");






var useAudience = function useAudience() {
  var state = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select) {
    return select(_data_store_js__WEBPACK_IMPORTED_MODULE_1__["STORE_NAME"]).getAudience();
  }, []);
  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(_data_store_js__WEBPACK_IMPORTED_MODULE_1__["STORE_NAME"]);
  return [state, function (id) {
    dispatch.setAudience(id);
  }];
};
var useSegment = function useSegment() {
  var _useAudience = useAudience(),
      _useAudience2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useAudience, 1),
      audienceListId = _useAudience2[0];

  var segments = Object(_use_config__WEBPACK_IMPORTED_MODULE_4__["useSegments"])(audienceListId);
  var state = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select) {
    return select(_data_store_js__WEBPACK_IMPORTED_MODULE_1__["STORE_NAME"]).getSegment();
  }, []);
  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(_data_store_js__WEBPACK_IMPORTED_MODULE_1__["STORE_NAME"]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (segments.find(function (s) {
      return s.id + "" === state + "";
    })) return;
    var timeout = setTimeout(function () {
      dispatch.setSegment("");
    }, 600);
    return function () {
      return clearTimeout(timeout);
    };
  }, [audienceListId]);
  return [state, function (id) {
    dispatch.setSegment(id);
  }];
};
var useCampaigns = function useCampaigns(postId) {
  var campaigns = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select) {
    return select(_data_store_js__WEBPACK_IMPORTED_MODULE_1__["STORE_NAME"]).getCampaigns(postId);
  });
  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(_data_store_js__WEBPACK_IMPORTED_MODULE_1__["STORE_NAME"]);
  return [campaigns, function (campaign) {
    console.log("update campaign", campaign);
    dispatch.updateCampaign(campaign);
  }, function (campaign) {
    console.log("add campaign", campaign);
    dispatch.addCampaign(campaign);
  }];
};

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/edit-post":
/*!*******************************************!*\
  !*** external {"this":["wp","editPost"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!******************************************!*\
  !*** external {"this":["wp","plugins"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ })

/******/ });
//# sourceMappingURL=post-to-mailchimp.map