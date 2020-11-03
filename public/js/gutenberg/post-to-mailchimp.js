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

/***/ "./src/script/components/AudiencesControl.js":
/*!***************************************************!*\
  !*** ./src/script/components/AudiencesControl.js ***!
  \***************************************************/
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








var AudiencesControl = function AudiencesControl() {
  var audiences = Object(_hooks_use_config__WEBPACK_IMPORTED_MODULE_4__["useAudiencesLists"])();

  var _useRecentCampaign = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign, 2),
      campaign = _useRecentCampaign2[0],
      setCampaign = _useRecentCampaign2[1];

  var _campaign$audience_id = campaign.audience_id,
      state = _campaign$audience_id === void 0 ? "" : _campaign$audience_id;

  var setState = function setState(_audience_id) {
    setCampaign({
      audience_id: _audience_id
    });
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (audiences.length === 1) {
      var id = audiences[0].listId;
      if (state != id) setState(id);
    }
  }, [audiences.length, state]);

  if (audiences.length === 1) {
    var audienceOption = audiences.find(function (a) {
      return state === a.listId;
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
      label: "Audience",
      value: audienceOption ? audienceOption.name : "",
      readOnly: true
    });
  }

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
    value: state || "",
    onChange: setState,
    options: options
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AudiencesControl);

/***/ }),

/***/ "./src/script/components/Buttons.js":
/*!******************************************!*\
  !*** ./src/script/components/Buttons.js ***!
  \******************************************/
/*! exports provided: DeleteButton, SendTestButton, SendButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButton", function() { return DeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendTestButton", function() { return SendTestButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendButton", function() { return SendButton; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_campaing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/campaing */ "./src/script/utils/campaing.js");
/* harmony import */ var _utils_email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/email */ "./src/script/utils/email.js");







var DeleteButton = function DeleteButton() {
  var isRequesting = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useIsRequesting"])();

  var _useRecentCampaign = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign, 2),
      campaign = _useRecentCampaign2[0],
      setCampaign = _useRecentCampaign2[1];

  if (!Object(_utils_campaing__WEBPACK_IMPORTED_MODULE_5__["isCampaign"])(campaign)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: isRequesting,
    isDestructive: true,
    onClick: function onClick() {
      return setCampaign({
        delete: true
      });
    }
  }, "Delete");
};
var SendTestButton = function SendTestButton() {
  var isRequesting = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useIsRequesting"])();

  var _useRecentCampaign3 = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useRecentCampaign"])(),
      _useRecentCampaign4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign3, 1),
      campaign = _useRecentCampaign4[0];

  var _useTestEmailAddresse = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useTestEmailAddresses"])(),
      _useTestEmailAddresse2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useTestEmailAddresse, 1),
      emails = _useTestEmailAddresse2[0];

  var sendTest = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useSendTestEmails"])();

  if (!Object(_utils_campaing__WEBPACK_IMPORTED_MODULE_5__["isCampaign"])(campaign)) {
    return null;
  }

  var validEmails = emails.filter(_utils_email__WEBPACK_IMPORTED_MODULE_6__["validateEmail"]);
  var disabled = isRequesting || validEmails.length == 0;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: disabled,
    isSecondary: true,
    onClick: sendTest
  }, "Send test");
};
var SendButton = function SendButton() {
  var isRequesting = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useIsRequesting"])();

  var _useRecentCampaign5 = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useRecentCampaign"])(),
      _useRecentCampaign6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign5, 1),
      campaign = _useRecentCampaign6[0];

  if (!Object(_utils_campaing__WEBPACK_IMPORTED_MODULE_5__["isCampaign"])(campaign)) {
    return null;
  }

  var disabled = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(campaign) === ( true ? "undefined" : undefined) || isRequesting;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: disabled,
    isPrimary: true,
    onClick: function onClick() {
      return console.log("send");
    }
  }, "Send!");
};

/***/ }),

/***/ "./src/script/components/EMailAddressesControl.js":
/*!********************************************************!*\
  !*** ./src/script/components/EMailAddressesControl.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/email */ "./src/script/utils/email.js");







var EMailAddressesControl = function EMailAddressesControl() {
  var _useTestEmailAddresse = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__["useTestEmailAddresses"])(),
      _useTestEmailAddresse2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useTestEmailAddresse, 2),
      emails = _useTestEmailAddresse2[0],
      setEmails = _useTestEmailAddresse2[1];

  var handleChange = function handleChange(values) {
    setEmails(values.map(function (v) {
      return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(v) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()("") ? v : v.value;
    }));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["FormTokenField"], {
    label: "Email addresses",
    value: emails.map(function (e) {
      if (Object(_utils_email__WEBPACK_IMPORTED_MODULE_5__["validateEmail"])(e)) {
        return e;
      }

      return {
        value: e,
        status: 'error'
      };
    }),
    onChange: handleChange
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EMailAddressesControl);

/***/ }),

/***/ "./src/script/components/FinishControl.js":
/*!************************************************!*\
  !*** ./src/script/components/FinishControl.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _hooks_use_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-config */ "./src/script/hooks/use-config.js");









var Schedule = function Schedule() {
  var _useRecentCampaign = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign, 2),
      campaign = _useRecentCampaign2[0],
      changeCampaign = _useRecentCampaign2[1];

  var defaultNextDate = Object(_hooks_use_config__WEBPACK_IMPORTED_MODULE_6__["useDefaultScheduleNextDate"])();
  var schedule = campaign.schedule;
  var dateState = new Date(schedule ? defaultNextDate.getTime() : schedule);

  var setDate = function setDate(_date) {
    if (_date) {
      changeCampaign({
        schedule: Date.parse(_date)
      });
    } else {
      changeCampaign({
        schedule: new Date().getTime()
      });
    }
  };

  var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__["__experimentalGetSettings"])(); // To know if the current timezone is a 12 hour time with look for an "a" in the time format.
  // We also make sure this a is not escaped by a "/".


  var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
  .replace(/\\\\/g, '') // Replace "//" with empty strings
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
  );
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["DateTimePicker"], {
    currentDate: dateState,
    onChange: setDate,
    is12Hour: is12HourTime
  });
};

var FinishControl = function FinishControl() {
  var _useRecentCampaign3 = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useRecentCampaign"])(),
      _useRecentCampaign4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign3, 2),
      campaign = _useRecentCampaign4[0],
      changeCampaign = _useRecentCampaign4[1];

  var schedule = campaign.schedule,
      audience_id = campaign.audience_id,
      segment_id = campaign.segment_id,
      _campaign$is_ready = campaign.is_ready,
      is_ready = _campaign$is_ready === void 0 ? false : _campaign$is_ready;
  var isSchedule = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(schedule) !== ( true ? "undefined" : undefined) && null !== schedule;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // if something changed uncheck ready checkbox
    changeCampaign({
      is_ready: false
    });
  }, [audience_id, segment_id, schedule]);

  var handleScheduleCheckbox = function handleScheduleCheckbox(_isSchedule) {
    if (_isSchedule) {
      changeCampaign({
        schedule: new Date().getTime()
      });
    } else {
      changeCampaign({
        schedule: undefined
      });
    }
  };

  var handleStartCheckbox = function handleStartCheckbox(isChecked) {
    changeCampaign({
      is_ready: isChecked
    });
  };

  var style = {
    marginLeft: -16,
    marginRight: -16,
    marginBottom: -16,
    padding: 16,
    paddingBottom: 8,
    backgroundColor: is_ready ? "#AED581" : "#ECEFF1"
  };

  var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__["__experimentalGetSettings"])();

  var schedule_date_string = schedule ? Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__["date"])(settings.formats.datetime, schedule) : "";
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    checked: isSchedule,
    label: "Schedule campaign",
    onChange: handleScheduleCheckbox
  }), isSchedule ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Schedule, null)) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    style: style
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
    checked: is_ready,
    label: "I'm ready to start this campaign",
    onChange: handleStartCheckbox
  }), is_ready ? isSchedule ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, "As soon as you save this campaign will be scheduled to be started at ", schedule_date_string, ".") : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, "As soon as you save this campaign will be started.") : null));
};

/* harmony default export */ __webpack_exports__["default"] = (FinishControl);

/***/ }),

/***/ "./src/script/components/NextStepsInfo.js":
/*!************************************************!*\
  !*** ./src/script/components/NextStepsInfo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



var _require = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js"),
    useRecentCampaign = _require.useRecentCampaign;

var _require2 = __webpack_require__(/*! ../utils/campaing */ "./src/script/utils/campaing.js"),
    isCampaign = _require2.isCampaign;

var NextStepsInfo = function NextStepsInfo() {
  var _useRecentCampaign = useRecentCampaign(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useRecentCampaign, 1),
      campaign = _useRecentCampaign2[0];

  if (isCampaign(campaign)) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "You need to save the post to proceed to next steps.");
};

/* harmony default export */ __webpack_exports__["default"] = (NextStepsInfo);

/***/ }),

/***/ "./src/script/components/Plugin.js":
/*!*****************************************!*\
  !*** ./src/script/components/Plugin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-config.js */ "./src/script/hooks/use-config.js");
/* harmony import */ var _Buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buttons.js */ "./src/script/components/Buttons.js");
/* harmony import */ var _NextStepsInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NextStepsInfo.js */ "./src/script/components/NextStepsInfo.js");
/* harmony import */ var _Steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Steps.js */ "./src/script/components/Steps.js");







var Plugin = function Plugin() {
  var audiences = Object(_hooks_use_config_js__WEBPACK_IMPORTED_MODULE_2__["useAudiencesLists"])();

  if (audiences.length < 1) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, "Please make sure there is at least one Mailchimp.com audience available.");
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Steps_js__WEBPACK_IMPORTED_MODULE_5__["Step1"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Steps_js__WEBPACK_IMPORTED_MODULE_5__["Step2"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Steps_js__WEBPACK_IMPORTED_MODULE_5__["Step3"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_NextStepsInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Buttons_js__WEBPACK_IMPORTED_MODULE_3__["DeleteButton"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "History",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "TODO: list of all campaigns")));
};

/* harmony default export */ __webpack_exports__["default"] = (Plugin);

/***/ }),

/***/ "./src/script/components/PreviewUrl.js":
/*!*********************************************!*\
  !*** ./src/script/components/PreviewUrl.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-config */ "./src/script/hooks/use-config.js");




var PreviewUrl = function PreviewUrl(_ref) {
  var _ref$plaintext = _ref.plaintext,
      plaintext = _ref$plaintext === void 0 ? false : _ref$plaintext,
      children = _ref.children;
  var htmlUrl = Object(_hooks_use_config__WEBPACK_IMPORTED_MODULE_2__["useHTMLPreviewUrl"])();
  var plaintextUrl = Object(_hooks_use_config__WEBPACK_IMPORTED_MODULE_2__["usePlaintextPreviewUrl"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isSecondary: true,
    href: plaintext ? plaintextUrl : htmlUrl,
    target: "_blank"
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (PreviewUrl);

/***/ }),

/***/ "./src/script/components/SegmentsControl.js":
/*!**************************************************!*\
  !*** ./src/script/components/SegmentsControl.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_use_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-config */ "./src/script/hooks/use-config.js");
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var SegmentsControl = function SegmentsControl() {
  var _useRecentCampaign = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_6__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useRecentCampaign, 2),
      _useRecentCampaign2$ = _useRecentCampaign2[0],
      campaign = _useRecentCampaign2$ === void 0 ? {} : _useRecentCampaign2$,
      setCampaign = _useRecentCampaign2[1];

  var _campaign$audience_id = campaign.audience_id,
      audience = _campaign$audience_id === void 0 ? "" : _campaign$audience_id,
      _campaign$segment_id = campaign.segment_id,
      state = _campaign$segment_id === void 0 ? "" : _campaign$segment_id;
  var segments = Object(_hooks_use_config__WEBPACK_IMPORTED_MODULE_5__["useSegments"])(audience);

  var setState = function setState(_segment_id) {
    setCampaign(_objectSpread(_objectSpread({}, campaign), {}, {
      segment_id: _segment_id
    }));
  };

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(segments) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()([]) || segments.length === 0) {
    return null;
  }

  var _segments = segments.filter(function (_ref) {
    var type = _ref.type;
    return type !== "static";
  });

  var _tags = segments.filter(function (_ref2) {
    var type = _ref2.type;
    return type === "static";
  });

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
    id: "mailchimp-segment",
    label: "Segment or tag"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("select", {
    id: "mailchimp-segment",
    style: {
      width: '100%'
    },
    value: state || "",
    onChange: function onChange(e) {
      return setState(parseInt(e.target.value));
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", {
    value: ""
  }, "-"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("optgroup", {
    label: "Segments"
  }, _segments.map(function (_ref3) {
    var id = _ref3.id,
        name = _ref3.name;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", {
      key: id,
      value: id
    }, name);
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("optgroup", {
    label: "Tags"
  }, _tags.map(function (_ref4) {
    var id = _ref4.id,
        name = _ref4.name;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", {
      key: id,
      value: id
    }, name);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SegmentsControl);

/***/ }),

/***/ "./src/script/components/Steps.js":
/*!****************************************!*\
  !*** ./src/script/components/Steps.js ***!
  \****************************************/
/*! exports provided: Step1, Step2, Step3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1", function() { return Step1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2", function() { return Step2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3", function() { return Step3; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _AudiencesControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudiencesControl */ "./src/script/components/AudiencesControl.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Buttons */ "./src/script/components/Buttons.js");
/* harmony import */ var _EMailAddressesControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EMailAddressesControl */ "./src/script/components/EMailAddressesControl.js");
/* harmony import */ var _FinishControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FinishControl */ "./src/script/components/FinishControl.js");
/* harmony import */ var _PreviewUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PreviewUrl */ "./src/script/components/PreviewUrl.js");
/* harmony import */ var _SegmentsControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SegmentsControl */ "./src/script/components/SegmentsControl.js");










var Step1 = function Step1() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Step 1: Configure",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_AudiencesControl__WEBPACK_IMPORTED_MODULE_4__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_SegmentsControl__WEBPACK_IMPORTED_MODULE_9__["default"], null));
};
var Step2 = function Step2() {
  var _useRecentCampaign = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useRecentCampaign, 1),
      campaign = _useRecentCampaign2[0];

  if (!campaign.id) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Step 2: Test",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_PreviewUrl__WEBPACK_IMPORTED_MODULE_8__["default"], null, "HTML Preview"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_PreviewUrl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    plaintext: true
  }, "Plaintext Preview"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_EMailAddressesControl__WEBPACK_IMPORTED_MODULE_6__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Buttons__WEBPACK_IMPORTED_MODULE_5__["SendTestButton"], null));
};
var Step3 = function Step3() {
  var _useRecentCampaign3 = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__["useRecentCampaign"])(),
      _useRecentCampaign4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useRecentCampaign3, 1),
      campaign = _useRecentCampaign4[0];

  if (!campaign.id) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Step 3: Deliver",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_FinishControl__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/email */ "./src/script/utils/email.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // ---------------------------------------------
// default store state
// ---------------------------------------------
// TODO: collect default from settings?

var testEmailAddressesCache = localStorage.getItem("gutenberg-post-to-mailchimp__test_email_addresses") || "[]";
var DEFAULT_STATE = {
  isRequesting: false,
  campaigns: [],
  testEmailAddresses: JSON.parse(testEmailAddressesCache).filter(_utils_email__WEBPACK_IMPORTED_MODULE_5__["validateEmail"])
}; // ---------------------------------------------
// api actions
// ---------------------------------------------

var CAMPAIGNS_FETCH = function CAMPAIGNS_FETCH(post_id) {
  return {
    type: 'CAMPAIGNS_FETCH',
    path: "/post-to-mailchimp/v1/campaigns/".concat(post_id)
  };
};

var CAMPAIGN_TEST = function CAMPAIGN_TEST(campaign, email_addresses) {
  return {
    type: 'CAMPAIGN_TEST',
    path: "/post-to-mailchimp/v1/campaigns/".concat(campaign.post_id, "/campaign/").concat(campaign.id, "/test"),
    data: {
      email_addresses: email_addresses
    }
  };
};

var CAMPAIGN_SEND = function CAMPAIGN_SEND(post_id, campaign_id) {
  return {
    type: 'CAMPAIGN_UPDATE',
    path: "/post-to-mailchimp/v1/campaigns/".concat(post_id, "/campaign/").concat(campaign_id, "/send"),
    data: {
      email_addresses: email_addresses
    }
  };
}; // ---------------------------------------------
// action generators
// ---------------------------------------------


var actionNone = function actionNone() {
  return {
    type: 'none'
  };
};

var actionIsRequesting = function actionIsRequesting(isRequesting) {
  return {
    type: 'SET_IS_REQUESTING',
    isRequesting: isRequesting
  };
}; // ---------------------------------------------
// public actions that can be used with dispatch
// ---------------------------------------------


var actions = {
  // ---------------------------------------------
  // local state
  // ---------------------------------------------
  setIsRequesting: actionIsRequesting,
  setCampaigns: function setCampaigns(campaigns) {
    return {
      type: 'SET_CAMPAIGNS',
      campaigns: campaigns
    };
  },
  setTestEmailAddresses: function setTestEmailAddresses(testEmailAddresses) {
    return {
      type: 'SET_TEST_EMAIL_ADDRESSES',
      testEmailAddresses: testEmailAddresses
    };
  },
  // ---------------------------------------------
  // ajax state
  // ---------------------------------------------
  fetchCampaigns: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function fetchCampaigns(post_id) {
    var campaigns;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function fetchCampaigns$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return actionIsRequesting(true);

          case 2:
            _context.next = 4;
            return CAMPAIGNS_FETCH(post_id);

          case 4:
            campaigns = _context.sent;
            _context.next = 7;
            return {
              type: 'SET_CAMPAIGNS',
              campaigns: campaigns
            };

          case 7:
            return _context.abrupt("return", actionIsRequesting(false));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, fetchCampaigns);
  }),
  sendTestMail: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function sendTestMail(campaign, emailAddresses) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function sendTestMail$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return actionIsRequesting(true);

          case 2:
            _context2.next = 4;
            return CAMPAIGN_TEST(campaign, emailAddresses);

          case 4:
            result = _context2.sent;
            return _context2.abrupt("return", actionIsRequesting(false));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, sendTestMail);
  }),
  sendCampaign: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function sendCampaign(campaign) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function sendCampaign$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return actionIsRequesting(true);

          case 2:
            _context3.next = 4;
            return CAMPAIGN_SEND(campaign);

          case 4:
            result = _context3.sent;
            return _context3.abrupt("return", actionIsRequesting(false));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, sendCampaign);
  })
}; // ------------------------------------------------------
// register our custom store
// ------------------------------------------------------

var STORE_NAME = 'post-to-mailchimp';
Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["registerStore"])(STORE_NAME, {
  // ------------------------------------------------------
  // reduce actions to new state
  // ------------------------------------------------------
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SET_IS_REQUESTING':
        return _objectSpread(_objectSpread({}, state), {}, {
          isRequesting: action.isRequesting
        });

      case 'SET_CAMPAIGNS':
        return _objectSpread(_objectSpread({}, state), {}, {
          campaigns: action.campaigns
        });

      case 'SET_TEST_EMAIL_ADDRESSES':
        localStorage.setItem("gutenberg-post-to-mailchimp__test_email_addresses", JSON.stringify(action.testEmailAddresses));
        return _objectSpread(_objectSpread({}, state), {}, {
          testEmailAddresses: action.testEmailAddresses
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
    isRequesting: function isRequesting(state) {
      return state.isRequesting;
    },
    getCampaigns: function getCampaigns(state, post_id) {
      return state.campaigns;
    },
    getTestEmailAddresses: function getTestEmailAddresses(state) {
      return state.testEmailAddresses;
    }
  },
  // ----------------------------------------------------------------
  //  helps resolving the equivalent selector function
  // ----------------------------------------------------------------
  resolvers: {
    getCampaigns: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function getCampaigns(post_id) {
      var campaigns;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getCampaigns$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(post_id) === ( true ? "undefined" : undefined))) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", actionNone());

            case 2:
              _context4.next = 4;
              return actionIsRequesting(true);

            case 4:
              _context4.next = 6;
              return CAMPAIGNS_FETCH(post_id);

            case 6:
              campaigns = _context4.sent;
              _context4.next = 9;
              return actionIsRequesting(false);

            case 9:
              return _context4.abrupt("return", actions.setCampaigns(campaigns));

            case 10:
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
      console.debug("action fetch", action);
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        path: action.path
      });
    },
    CAMPAIGN_TEST: function CAMPAIGN_TEST(action) {
      console.debug("action test", action);
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        path: action.path,
        data: action.data,
        method: "POST"
      });
    },
    CAMPAIGN_SEND: function CAMPAIGN_SEND(action) {
      console.debug("action send");
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        path: action.path,
        method: "POST"
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
/* harmony import */ var _components_Plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Plugin */ "./src/script/components/Plugin.js");







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
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Plugin__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
    }
  });
})();

/***/ }),

/***/ "./src/script/hooks/use-config.js":
/*!****************************************!*\
  !*** ./src/script/hooks/use-config.js ***!
  \****************************************/
/*! exports provided: useAudiencesLists, useSegments, useHTMLPreviewUrl, usePlaintextPreviewUrl, useDefaultScheduleTime, useDefaultScheduleNextDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAudiencesLists", function() { return useAudiencesLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSegments", function() { return useSegments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHTMLPreviewUrl", function() { return useHTMLPreviewUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePlaintextPreviewUrl", function() { return usePlaintextPreviewUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDefaultScheduleTime", function() { return useDefaultScheduleTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDefaultScheduleNextDate", function() { return useDefaultScheduleNextDate; });
var useAudiencesLists = function useAudiencesLists() {
  return PostToMailchimp.lists;
};
var useSegments = function useSegments(listId) {
  return PostToMailchimp.segments[listId] || [];
};
var useHTMLPreviewUrl = function useHTMLPreviewUrl() {
  return PostToMailchimp.preview.html;
};
var usePlaintextPreviewUrl = function usePlaintextPreviewUrl() {
  return PostToMailchimp.preview.plaintext;
};
var useDefaultScheduleTime = function useDefaultScheduleTime() {
  return PostToMailchimp.defaultScheduleTime;
};
var useDefaultScheduleNextDate = function useDefaultScheduleNextDate() {
  var time = useDefaultScheduleTime();
  var date = new Date();
  if (time === "") return date;
  var parts = time.split(":");
  if (parts.length !== 2) return date;
  var hours = parseInt(parts[0]);
  var minutes = parseInt(parts[1]);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 60) return date;
  date.setDate(date.getDate() + 1);
  date.setHours(hours, minutes);
  return date;
};

/***/ }),

/***/ "./src/script/hooks/use-post.js":
/*!**************************************!*\
  !*** ./src/script/hooks/use-post.js ***!
  \**************************************/
/*! exports provided: usePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePost", function() { return usePost; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

var usePost = function usePost() {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    return select('core/editor').getCurrentPost();
  });
};

/***/ }),

/***/ "./src/script/hooks/use-store.js":
/*!***************************************!*\
  !*** ./src/script/hooks/use-store.js ***!
  \***************************************/
/*! exports provided: useIsRequesting, useRecentCampaign, useAudience, useSegment, useCampaigns, useTestEmailAddresses, useValidTestEmailAddresses, useSendTestEmails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsRequesting", function() { return useIsRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecentCampaign", function() { return useRecentCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAudience", function() { return useAudience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSegment", function() { return useSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCampaigns", function() { return useCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTestEmailAddresses", function() { return useTestEmailAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useValidTestEmailAddresses", function() { return useValidTestEmailAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSendTestEmails", function() { return useSendTestEmails; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/store.js */ "./src/script/data/store.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _use_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-config */ "./src/script/hooks/use-config.js");
/* harmony import */ var _use_post_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-post.js */ "./src/script/hooks/use-post.js");
/* harmony import */ var _utils_email_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/email.js */ "./src/script/utils/email.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var useIsRequesting = function useIsRequesting() {
  var state = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select(_data_store_js__WEBPACK_IMPORTED_MODULE_3__["STORE_NAME"]).isRequesting();
  }, []);
  return state;
};
var useRecentCampaign = function useRecentCampaign() {
  var value = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select('core/editor').getEditedPostAttribute("recent_campaign");
  });
  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])('core/editor');
  return [value || {}, function (changeSet) {
    dispatch.editPost({
      recent_campaign: _objectSpread(_objectSpread({}, value), changeSet)
    });
  }];
};
var useAudience = function useAudience() {
  var _useRecentCampaign = useRecentCampaign(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign, 2),
      campaign = _useRecentCampaign2[0],
      setValue = _useRecentCampaign2[1];

  return [campaign.audience_id, function (id) {
    return setValue({
      audience_id: id
    });
  }];
};
var useSegment = function useSegment() {
  var _useAudience = useAudience(),
      _useAudience2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useAudience, 1),
      audience_id = _useAudience2[0];

  var _useRecentCampaign3 = useRecentCampaign(),
      _useRecentCampaign4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign3, 2),
      campaign = _useRecentCampaign4[0],
      setValue = _useRecentCampaign4[1];

  var segments = Object(_use_config__WEBPACK_IMPORTED_MODULE_6__["useSegments"])(audience_id);
  var state = campaign.segment_id;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (segments.find(function (s) {
      return s.id + "" === state + "";
    })) return;
    var timeout = setTimeout(function () {
      setValue({
        segment_id: ""
      });
    }, 600);
    return function () {
      return clearTimeout(timeout);
    };
  }, [audience_id]);
  return [state, function (id) {
    return setValue({
      segment_id: id
    });
  }];
};
var useCampaigns = function useCampaigns() {
  var _usePost = Object(_use_post_js__WEBPACK_IMPORTED_MODULE_7__["usePost"])(),
      id = _usePost.id;

  var campaigns = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select(_data_store_js__WEBPACK_IMPORTED_MODULE_3__["STORE_NAME"]).getCampaigns(id);
  });
  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_data_store_js__WEBPACK_IMPORTED_MODULE_3__["STORE_NAME"]);
  return [campaigns, function () {
    dispatch.fetchCampaigns(id);
  }];
};
var useTestEmailAddresses = function useTestEmailAddresses() {
  var emails = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select(_data_store_js__WEBPACK_IMPORTED_MODULE_3__["STORE_NAME"]).getTestEmailAddresses();
  });
  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_data_store_js__WEBPACK_IMPORTED_MODULE_3__["STORE_NAME"]);
  return [emails, function (_emails) {
    dispatch.setTestEmailAddresses(_emails);
  }];
};
var useValidTestEmailAddresses = function useValidTestEmailAddresses() {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select(_data_store_js__WEBPACK_IMPORTED_MODULE_3__["STORE_NAME"]).getTestEmailAddresses();
  }).filter(_utils_email_js__WEBPACK_IMPORTED_MODULE_8__["validateEmail"]);
};
var useSendTestEmails = function useSendTestEmails() {
  var emails = useValidTestEmailAddresses();

  var _useRecentCampaign5 = useRecentCampaign(),
      _useRecentCampaign6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign5, 1),
      campaign = _useRecentCampaign6[0];

  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_data_store_js__WEBPACK_IMPORTED_MODULE_3__["STORE_NAME"]);
  return function () {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(campaign) !== ( true ? "undefined" : undefined) && emails.length > 0) {
      dispatch.sendTestMail(campaign, emails);
    }
  };
};

/***/ }),

/***/ "./src/script/utils/campaing.js":
/*!**************************************!*\
  !*** ./src/script/utils/campaing.js ***!
  \**************************************/
/*! exports provided: isCampaign, campaignGetAudienceId, campaignGetSegmentId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCampaign", function() { return isCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignGetAudienceId", function() { return campaignGetAudienceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignGetSegmentId", function() { return campaignGetSegmentId; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var isCampaign = function isCampaign(campaign) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(campaign) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(campaign.id) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(1);
};
var campaignGetAudienceId = function campaignGetAudienceId(attributes) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes.recipients) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes.recipients.list_id) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()("")) return undefined;
  return attributes.recipients.list_id;
};
var campaignGetSegmentId = function campaignGetSegmentId(attributes) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes.recipients) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes.recipients.segment_opts) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes.recipients.segment_opts.saved_segment_id) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(1)) return undefined;
  return attributes.recipients.segment_opts.saved_segment_id;
};

/***/ }),

/***/ "./src/script/utils/email.js":
/*!***********************************!*\
  !*** ./src/script/utils/email.js ***!
  \***********************************/
/*! exports provided: validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
var validateEmail = function validateEmail(mail) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
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

/***/ "@wordpress/date":
/*!***************************************!*\
  !*** external {"this":["wp","date"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["date"]; }());

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