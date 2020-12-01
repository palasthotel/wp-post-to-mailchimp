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

/***/ "./src/script/auto/post-date.js":
/*!**************************************!*\
  !*** ./src/script/auto/post-date.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/config */ "./src/script/utils/config.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date */ "./src/script/utils/date.js");
/* harmony import */ var _utils_notice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/notice.js */ "./src/script/utils/notice.js");





var isValidDate = function isValidDate(timestamp) {
  var now = new Date();
  var nowTimestamp = now.getTime(); // if it is now or in the past

  if (timestamp <= nowTimestamp) return true; // if it is a 15 minutes step

  var minTimestamp = Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["ceil15Minutes"])(nowTimestamp);
  return timestamp >= minTimestamp && Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["is15MinutesStep"])(timestamp);
};

var buildValidDate = function buildValidDate(timestamp) {
  var now = new Date();
  var nowTimestamp = now.getTime(); // if it needs no schedule it is always valid

  if (timestamp <= nowTimestamp) return new Date(timestamp); // schedule is only valid in steps of 15 minutes

  var minTimestamp = Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["ceil15Minutes"])(nowTimestamp); // minimum schedule timestamp is next round 15 minutes

  if (timestamp < minTimestamp) return new Date(minTimestamp); // else round to nearest 15 minutes step

  return new Date(Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["round15Minutes"])(timestamp));
}; // --------------------------------------------
// getter and setter for date
// --------------------------------------------


var getDate = function getDate() {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/editor').getEditedPostAttribute('date');
};

var setDate = function setDate(dateISOString) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/editor').editPost({
    date: dateISOString
  });
};

var getPostStatus = function getPostStatus() {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])('core/editor').getCurrentPost().status;
}; // ----------------------------------------
// start watching
// ----------------------------------------


var last_date = null;
var self_action = false;
Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["subscribe"])(function () {
  var date = getDate();
  if (!date) return; // default date

  if (getPostStatus() === "auto-draft" && null === last_date) {
    var _date = Object(_utils_config__WEBPACK_IMPORTED_MODULE_1__["getDefaultScheduleNextDateTime"])();

    var iso = _date.toISOString();

    last_date = iso;
    setDate(iso);
    return;
  }

  if (last_date === date) return;
  last_date = date;

  if (self_action) {
    self_action = false;
    return;
  }

  var timestamp = Date.parse(date);
  if (isValidDate(timestamp)) return;
  var validDateObj = buildValidDate(timestamp);
  var format = Object(_utils_date__WEBPACK_IMPORTED_MODULE_2__["dateFormat"])(validDateObj.getTime());
  Object(_utils_notice_js__WEBPACK_IMPORTED_MODULE_3__["showNotice"])("Date was changed to ".concat(format, "  because Mailchimp only supports 15 minutes exact time planning."));
  self_action = true;
  setDate(validDateObj.toISOString());
});

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
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");









var AudiencesControl = function AudiencesControl() {
  var isSaving = Object(_hooks_use_post__WEBPACK_IMPORTED_MODULE_5__["useIsSavingPost"])();
  var audiences = Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_4__["getAudiencesLists"])();

  var _useRecentCampaign = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_6__["useRecentCampaign"])(),
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
    disabled: isSaving,
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
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_campaign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/campaign */ "./src/script/utils/campaign.js");
/* harmony import */ var _utils_email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/email */ "./src/script/utils/email.js");








var DeleteButton = function DeleteButton() {
  var isSaving = Object(_hooks_use_post__WEBPACK_IMPORTED_MODULE_4__["useIsSavingPost"])();
  var isRequesting = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useIsRequesting"])();

  var _useRecentCampaign = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign, 2),
      campaign = _useRecentCampaign2[0],
      setCampaign = _useRecentCampaign2[1];

  if (!Object(_utils_campaign__WEBPACK_IMPORTED_MODULE_6__["isCampaign"])(campaign)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: isRequesting || isSaving,
    isDestructive: true,
    onClick: function onClick() {
      return setCampaign({
        delete: true
      });
    }
  }, "Delete");
};
var SendTestButton = function SendTestButton() {
  var isSaving = Object(_hooks_use_post__WEBPACK_IMPORTED_MODULE_4__["useIsSavingPost"])();
  var isRequesting = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useIsRequesting"])();

  var _useRecentCampaign3 = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useRecentCampaign"])(),
      _useRecentCampaign4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign3, 1),
      campaign = _useRecentCampaign4[0];

  var _useTestEmailAddresse = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useTestEmailAddresses"])(),
      _useTestEmailAddresse2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useTestEmailAddresse, 1),
      emails = _useTestEmailAddresse2[0];

  var sendTest = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useSendTestEmails"])();
  var isCampaignNew = Object(_utils_campaign__WEBPACK_IMPORTED_MODULE_6__["campaignStateIsNew"])(campaign);
  var isCampaignDraft = Object(_utils_campaign__WEBPACK_IMPORTED_MODULE_6__["campaignStateIsDraft"])(campaign);

  if (!Object(_utils_campaign__WEBPACK_IMPORTED_MODULE_6__["isCampaign"])(campaign)) {
    return null;
  }

  var validEmails = emails.filter(_utils_email__WEBPACK_IMPORTED_MODULE_7__["validateEmail"]);
  var disabled = isCampaignNew || isCampaignDraft || validEmails.length == 0 || isRequesting || isSaving;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: disabled,
    isSecondary: true,
    onClick: sendTest
  }, "Send test");
};
var SendButton = function SendButton() {
  var isSaving = Object(_hooks_use_post__WEBPACK_IMPORTED_MODULE_4__["useIsSavingPost"])();
  var isRequesting = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useIsRequesting"])();

  var _useRecentCampaign5 = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useRecentCampaign"])(),
      _useRecentCampaign6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign5, 1),
      campaign = _useRecentCampaign6[0];

  if (!Object(_utils_campaign__WEBPACK_IMPORTED_MODULE_6__["isCampaign"])(campaign)) {
    return null;
  }

  var disabled = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(campaign) === ( true ? "undefined" : undefined) || isRequesting || isSaving;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: disabled,
    isPrimary: true,
    onClick: function onClick() {
      return console.log("send");
    }
  }, "Send!");
};

/***/ }),

/***/ "./src/script/components/CampaignEditor.js":
/*!*************************************************!*\
  !*** ./src/script/components/CampaignEditor.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NextStepsInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NextStepsInfo.js */ "./src/script/components/NextStepsInfo.js");
/* harmony import */ var _Steps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Steps.js */ "./src/script/components/Steps.js");





var CampaignEditor = function CampaignEditor() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Steps_js__WEBPACK_IMPORTED_MODULE_3__["Step1"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Steps_js__WEBPACK_IMPORTED_MODULE_3__["Step2"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Steps_js__WEBPACK_IMPORTED_MODULE_3__["Step3"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_NextStepsInfo_js__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (CampaignEditor);

/***/ }),

/***/ "./src/script/components/CampaignLocked.js":
/*!*************************************************!*\
  !*** ./src/script/components/CampaignLocked.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_post_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-post.js */ "./src/script/hooks/use-post.js");
/* harmony import */ var _hooks_use_schedule_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-schedule.js */ "./src/script/hooks/use-schedule.js");
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-store.js */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_campaign_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/campaign.js */ "./src/script/utils/campaign.js");
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _utils_notice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/notice.js */ "./src/script/utils/notice.js");
/* harmony import */ var _ReadableTimestamp_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReadableTimestamp.js */ "./src/script/components/ReadableTimestamp.js");












var CampaignAudienceInfo = function CampaignAudienceInfo() {
  var _useRecentCampaign = Object(_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_5__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useRecentCampaign, 1),
      campaign = _useRecentCampaign2[0];

  var audience = Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_7__["getAudience"])(campaign.audience_id);
  var segment = campaign.segment_id !== null ? Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_7__["getSegment"])(campaign.audience_id, campaign.segment_id) : null;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!audience) {
      Object(_utils_notice_js__WEBPACK_IMPORTED_MODULE_8__["showError"])("Missing audience with id ".concat(campaign.audience_id));
    }
  }, [audience]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (campaign.segment_id !== null && !segment) {
      Object(_utils_notice_js__WEBPACK_IMPORTED_MODULE_8__["showError"])("Missing segment with id ".concat(campaign.segment_id));
    }
  }, [audience]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: "Audience",
    value: audience ? audience.name : "<ERROR: missing audience>",
    readOnly: true
  }), segment ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_7__["isSegment"])(segment) ? "Segment" : "Tag",
    value: segment ? segment.name : "<ERROR: missing segment>",
    readOnly: true
  }) : null);
};

var SendingInfo = function SendingInfo() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "This campaign is being sent.");
};

var SentInfo = function SentInfo() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "This campaign was completely delivered.");
};

var ScheduleInfo = function ScheduleInfo(_ref) {
  var timestamp = _ref.timestamp;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "This campaign is scheduled for ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ReadableTimestamp_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    timestamp: timestamp
  }), ".");
};

var CampaignLocked = function CampaignLocked() {
  var _useRecentCampaign3 = Object(_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_5__["useRecentCampaign"])(),
      _useRecentCampaign4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useRecentCampaign3, 2),
      campaign = _useRecentCampaign4[0],
      changeCampaign = _useRecentCampaign4[1];

  var isSaving = Object(_hooks_use_post_js__WEBPACK_IMPORTED_MODULE_3__["useIsSavingPost"])();
  var executeUnschedule = Object(_hooks_use_schedule_js__WEBPACK_IMPORTED_MODULE_4__["useUnschedule"])();
  var executeCancelCampaign = Object(_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_5__["useCancelCampaign"])();
  var _campaign$cancel = campaign.cancel,
      cancel = _campaign$cancel === void 0 ? false : _campaign$cancel,
      schedule = campaign.schedule;
  var isSending = Object(_utils_campaign_js__WEBPACK_IMPORTED_MODULE_6__["campaignIsSending"])(campaign);
  var isSent = Object(_utils_campaign_js__WEBPACK_IMPORTED_MODULE_6__["campaignIsSent"])(campaign);
  var isScheduled = Object(_utils_campaign_js__WEBPACK_IMPORTED_MODULE_6__["campaignIsScheduled"])(campaign);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CampaignAudienceInfo, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], null, isSending ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SendingInfo, null) : null, isScheduled ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ScheduleInfo, {
    timestamp: schedule
  }) : null, isSent ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SentInfo, null) : null), isSending ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: isSaving,
    onClick: executeCancelCampaign,
    isDestructive: true
  }, "Cancel campaign") : null, isScheduled ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: isSaving,
    onClick: executeUnschedule,
    isDestructive: true
  }, "Unschedule") : null);
};

/* harmony default export */ __webpack_exports__["default"] = (CampaignLocked);

/***/ }),

/***/ "./src/script/components/CustomConfigControl.js":
/*!******************************************************!*\
  !*** ./src/script/components/CustomConfigControl.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/config */ "./src/script/utils/config.js");






var CustomConfigControl = function CustomConfigControl() {
  var _useRecentCampaignCus = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__["useRecentCampaignCustomized"])(),
      _useRecentCampaignCus2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaignCus, 2),
      custom = _useRecentCampaignCus2[0],
      changeCustomAttribute = _useRecentCampaignCus2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__["getCustomConfig"])().map(function (_ref) {
    var key = _ref.key,
        Element = _ref.Element;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Element, {
      key: key,
      value: custom[key],
      onChange: function onChange(value) {
        changeCustomAttribute(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomConfigControl);

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
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/email */ "./src/script/utils/email.js");








var EMailAddressesControl = function EMailAddressesControl() {
  var isSaving = Object(_hooks_use_post__WEBPACK_IMPORTED_MODULE_4__["useIsSavingPost"])();

  var _useTestEmailAddresse = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__["useTestEmailAddresses"])(),
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
    disabled: isSaving,
    value: emails.map(function (e) {
      if (Object(_utils_email__WEBPACK_IMPORTED_MODULE_6__["validateEmail"])(e)) {
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _ReadableTimestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReadableTimestamp */ "./src/script/components/ReadableTimestamp.js");
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/date */ "./src/script/utils/date.js");









var FinishControl = function FinishControl() {
  var isSaving = Object(_hooks_use_post__WEBPACK_IMPORTED_MODULE_5__["useIsSavingPost"])();

  var _useRecentCampaign = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useRecentCampaign, 2),
      campaign = _useRecentCampaign2[0],
      changeCampaign = _useRecentCampaign2[1];

  var _usePostDate = Object(_hooks_use_post__WEBPACK_IMPORTED_MODULE_5__["usePostDate"])(),
      _usePostDate2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_usePostDate, 1),
      postDate = _usePostDate2[0];

  var audience_id = campaign.audience_id,
      segment_id = campaign.segment_id,
      _campaign$is_ready = campaign.is_ready,
      is_ready = _campaign$is_ready === void 0 ? false : _campaign$is_ready;
  var schedule = postDate ? Date.parse(postDate) : null;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // if something changed uncheck ready checkbox
    changeCampaign({
      is_ready: false
    });
  }, [audience_id, segment_id, schedule]);

  var handleStartCheckbox = function handleStartCheckbox(isChecked) {
    if (isSaving) return;
    changeCampaign({
      is_ready: isChecked
    });
  };

  var style = {
    marginLeft: -16,
    marginRight: -16,
    marginBottom: -16,
    marginTop: 16,
    padding: 16,
    paddingBottom: 8,
    backgroundColor: is_ready ? "#AED581" : "#ECEFF1"
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    style: style
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
    checked: is_ready,
    disabled: isSaving,
    label: "I'm ready to start this campaign",
    onChange: handleStartCheckbox
  }), is_ready ? Object(_utils_date__WEBPACK_IMPORTED_MODULE_6__["isFutureDate"])(postDate) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "As soon as you plan this campaign will be scheduled to be started at ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ReadableTimestamp__WEBPACK_IMPORTED_MODULE_4__["default"], {
    timestamp: schedule
  }), ".") : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "As soon as you publish this campaign will be started.") : null));
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/campaign */ "./src/script/utils/campaign.js");






var NextStepsInfo = function NextStepsInfo() {
  var _useRecentCampaign = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useRecentCampaign, 1),
      campaign = _useRecentCampaign2[0];

  if (Object(_utils_campaign__WEBPACK_IMPORTED_MODULE_4__["isCampaign"])(campaign)) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "You need to save the post to proceed to next steps."));
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-store.js */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_campaign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/campaign.js */ "./src/script/utils/campaign.js");
/* harmony import */ var _CampaignEditor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CampaignEditor.js */ "./src/script/components/CampaignEditor.js");
/* harmony import */ var _CampaignLocked_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CampaignLocked.js */ "./src/script/components/CampaignLocked.js");









var Plugin = function Plugin() {
  var audiences = Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_3__["getAudiencesLists"])();

  var _useRecentCampaign = Object(_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_4__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useRecentCampaign, 1),
      campaign = _useRecentCampaign2[0];

  var hasRecentCampaign = Object(_utils_campaign_js__WEBPACK_IMPORTED_MODULE_5__["isCampaign"])(campaign);

  if (audiences.length < 1) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, "Please make sure there is at least one Mailchimp.com audience available. ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_3__["getSettingsUrl"])()
    }, "Goto Settings"));
  }

  if (hasRecentCampaign && Object(_utils_campaign_js__WEBPACK_IMPORTED_MODULE_5__["campaignIsLocked"])(campaign)) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_CampaignLocked_js__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_CampaignEditor_js__WEBPACK_IMPORTED_MODULE_6__["default"], null);
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
/* harmony import */ var _hooks_use_post_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-post.js */ "./src/script/hooks/use-post.js");
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");





var PreviewUrl = function PreviewUrl(_ref) {
  var _ref$plaintext = _ref.plaintext,
      plaintext = _ref$plaintext === void 0 ? false : _ref$plaintext,
      children = _ref.children;
  var isSaving = Object(_hooks_use_post_js__WEBPACK_IMPORTED_MODULE_2__["useIsSavingPost"])();
  var htmlUrl = Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_3__["getHTMLPreviewUrl"])();
  var plaintextUrl = Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_3__["getPlaintextPreviewUrl"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    disabled: isSaving,
    isSecondary: true,
    href: plaintext ? plaintextUrl : htmlUrl,
    target: "_blank"
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (PreviewUrl);

/***/ }),

/***/ "./src/script/components/ReadableTimestamp.js":
/*!****************************************************!*\
  !*** ./src/script/components/ReadableTimestamp.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date */ "./src/script/utils/date.js");



var ReadableTimestamp = function ReadableTimestamp(_ref) {
  var timestamp = _ref.timestamp;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_utils_date__WEBPACK_IMPORTED_MODULE_1__["dateFormat"])(timestamp));
};

/* harmony default export */ __webpack_exports__["default"] = (ReadableTimestamp);

/***/ }),

/***/ "./src/script/components/ScheduleControl.js":
/*!**************************************************!*\
  !*** ./src/script/components/ScheduleControl.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ReadableTimestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReadableTimestamp */ "./src/script/components/ReadableTimestamp.js");
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/date */ "./src/script/utils/date.js");
/* harmony import */ var _hooks_use_schedule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-schedule */ "./src/script/hooks/use-schedule.js");








var ScheduleControl = function ScheduleControl() {
  var isSaving = Object(_hooks_use_post__WEBPACK_IMPORTED_MODULE_4__["useIsSavingPost"])();

  var _useSchedule = Object(_hooks_use_schedule__WEBPACK_IMPORTED_MODULE_6__["useSchedule"])(),
      _useSchedule2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useSchedule, 2),
      scheduleDate = _useSchedule2[0],
      setScheduleDate = _useSchedule2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], {
    className: "edit-post-post-schedule"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, "Schedule"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    position: "bottom left",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        isTertiary: true,
        onClick: onToggle
      }, null === scheduleDate || !Object(_utils_date__WEBPACK_IMPORTED_MODULE_5__["isFutureDate"])(scheduleDate, 60) ? "Immediately" : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ReadableTimestamp__WEBPACK_IMPORTED_MODULE_3__["default"], {
        timestamp: Date.parse(scheduleDate)
      }));
    },
    contentClassName: "edit-post-post-schedule__dialog",
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["DateTimePicker"], {
        currentDate: scheduleDate,
        onChange: function onChange(_date) {
          if (isSaving) return;
          setScheduleDate(_date);
        },
        is12Hour: Object(_utils_date__WEBPACK_IMPORTED_MODULE_5__["is12HourTime"])(),
        isInvalidDate: function isInvalidDate(date) {
          return isSaving || Object(_utils_date__WEBPACK_IMPORTED_MODULE_5__["isPastDay"])(date);
        }
      }));
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ScheduleControl);

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
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-store.js */ "./src/script/hooks/use-store.js");
/* harmony import */ var _hooks_use_post_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-post.js */ "./src/script/hooks/use-post.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var SegmentsControl = function SegmentsControl() {
  var isSaving = Object(_hooks_use_post_js__WEBPACK_IMPORTED_MODULE_7__["useIsSavingPost"])();

  var _useRecentCampaign = Object(_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_6__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useRecentCampaign, 2),
      _useRecentCampaign2$ = _useRecentCampaign2[0],
      campaign = _useRecentCampaign2$ === void 0 ? {} : _useRecentCampaign2$,
      setCampaign = _useRecentCampaign2[1];

  var _campaign$audience_id = campaign.audience_id,
      audience = _campaign$audience_id === void 0 ? "" : _campaign$audience_id,
      _campaign$segment_id = campaign.segment_id,
      state = _campaign$segment_id === void 0 ? "" : _campaign$segment_id;
  var segments = Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_5__["getSegments"])(audience);
  var isEmptySegmentAllowed = Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_5__["getIsEmptySegmentAllowed"])(audience);

  var setState = function setState(_segment_id) {
    if (isSaving) return;
    setCampaign(_objectSpread(_objectSpread({}, campaign), {}, {
      segment_id: _segment_id
    }));
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (segments.length === 1 && !isEmptySegmentAllowed) {
      var id = segments[0].id;
      if (state != id) setState(id);
    } else if (segments.length === 0) {
      if (state !== "") setState("");
    }
  }, [segments.length, state]);

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(segments) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()([]) || segments.length === 0) {
    return null;
  }

  if (segments.length === 1 && !isEmptySegmentAllowed) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      label: Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_5__["isTag"])(segments[0]) ? "Tag" : "Segment",
      value: segments[0].name,
      readOnly: true
    });
  }

  var _segments = segments.filter(_utils_config_js__WEBPACK_IMPORTED_MODULE_5__["isSegment"]);

  var _tags = segments.filter(_utils_config_js__WEBPACK_IMPORTED_MODULE_5__["isTag"]);

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
    },
    disabled: isSaving
  }, isEmptySegmentAllowed ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", {
    value: ""
  }, "-") : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("optgroup", {
    label: "Segments"
  }, _segments.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", {
      key: id,
      value: id
    }, name);
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("optgroup", {
    label: "Tags"
  }, _tags.map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name;
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
/* harmony import */ var _utils_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/campaign */ "./src/script/utils/campaign.js");
/* harmony import */ var _AudiencesControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudiencesControl */ "./src/script/components/AudiencesControl.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Buttons */ "./src/script/components/Buttons.js");
/* harmony import */ var _CustomConfigControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomConfigControl */ "./src/script/components/CustomConfigControl.js");
/* harmony import */ var _EMailAddressesControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EMailAddressesControl */ "./src/script/components/EMailAddressesControl.js");
/* harmony import */ var _FinishControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FinishControl */ "./src/script/components/FinishControl.js");
/* harmony import */ var _PreviewUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PreviewUrl */ "./src/script/components/PreviewUrl.js");
/* harmony import */ var _ScheduleControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ScheduleControl */ "./src/script/components/ScheduleControl.js");
/* harmony import */ var _SegmentsControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SegmentsControl */ "./src/script/components/SegmentsControl.js");













var Step1 = function Step1() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Step 1: Configuration",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_AudiencesControl__WEBPACK_IMPORTED_MODULE_5__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_SegmentsControl__WEBPACK_IMPORTED_MODULE_12__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_CustomConfigControl__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
var Step2 = function Step2() {
  var _useRecentCampaign = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useRecentCampaign, 1),
      campaign = _useRecentCampaign2[0];

  if (!campaign.id) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Step 2: Test",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_PreviewUrl__WEBPACK_IMPORTED_MODULE_10__["default"], null, "HTML Preview"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_PreviewUrl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    plaintext: true
  }, "Plaintext Preview"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_EMailAddressesControl__WEBPACK_IMPORTED_MODULE_8__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Buttons__WEBPACK_IMPORTED_MODULE_6__["SendTestButton"], null));
};
var Step3 = function Step3() {
  var _useRecentCampaign3 = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__["useRecentCampaign"])(),
      _useRecentCampaign4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useRecentCampaign3, 1),
      campaign = _useRecentCampaign4[0];

  if (!campaign.id) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Step 3: Deliver",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ScheduleControl__WEBPACK_IMPORTED_MODULE_11__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_FinishControl__WEBPACK_IMPORTED_MODULE_9__["default"], null));
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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Plugin */ "./src/script/components/Plugin.js");
/* harmony import */ var _auto_post_date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto/post-date.js */ "./src/script/auto/post-date.js");






 // ---------------------------------------
// validate post date selection
// ---------------------------------------



if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window.PostToMailchimp) === ( true ? "undefined" : undefined)) {
  window.PostToMailchimp = {
    customConfig: []
  };
}

if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window.PostToMailchimp.customConfig) === ( true ? "undefined" : undefined)) {
  window.PostToMailchimp.customConfig = [];
} // ---------------------------------------
// UI
// ---------------------------------------


var PLUGIN_NAME = "post-to-mailchimp";
Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__["registerPlugin"])(PLUGIN_NAME, {
  render: function render() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__["PluginSidebarMoreMenuItem"], {
      target: PLUGIN_NAME,
      icon: "email"
    }, "Post to Mailchimp"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__["PluginSidebar"], {
      name: PLUGIN_NAME,
      icon: "email",
      title: "Post to Mailchimp"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_Plugin__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
  }
});

/***/ }),

/***/ "./src/script/hooks/use-post.js":
/*!**************************************!*\
  !*** ./src/script/hooks/use-post.js ***!
  \**************************************/
/*! exports provided: usePost, useIsSavingPost, usePostDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePost", function() { return usePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsSavingPost", function() { return useIsSavingPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostDate", function() { return usePostDate; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

var usePost = function usePost() {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    return select('core/editor').getCurrentPost();
  });
};
var useIsSavingPost = function useIsSavingPost() {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    return select('core/editor').isSavingPost();
  });
};
var usePostDate = function usePostDate() {
  var state = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    return select('core/editor').getEditedPostAttribute('date');
  });
  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])('core/editor');
  return [state, function (date) {
    return dispatch.editPost({
      date: date
    });
  }];
};

/***/ }),

/***/ "./src/script/hooks/use-schedule.js":
/*!******************************************!*\
  !*** ./src/script/hooks/use-schedule.js ***!
  \******************************************/
/*! exports provided: useUnschedule, useSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUnschedule", function() { return useUnschedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSchedule", function() { return useSchedule; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _use_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-store.js */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/date.js */ "./src/script/utils/date.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _use_post_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-post.js */ "./src/script/hooks/use-post.js");








var useUnschedule = function useUnschedule() {
  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])('core/editor');

  var _useRecentCampaign = Object(_use_store_js__WEBPACK_IMPORTED_MODULE_3__["useRecentCampaign"])(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign, 2),
      _ = _useRecentCampaign2[0],
      changeCampaign = _useRecentCampaign2[1];

  return function () {
    dispatch.editPost({
      status: "draft"
    });
    changeCampaign({
      unschedule: true
    });
    dispatch.savePost();
  };
};
var useSchedule = function useSchedule() {
  var _usePostDate = Object(_use_post_js__WEBPACK_IMPORTED_MODULE_7__["usePostDate"])(),
      _usePostDate2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_usePostDate, 2),
      value = _usePostDate2[0],
      setValue = _usePostDate2[1];

  return [value, function (date) {
    if (!date) {
      // null is used for NOW
      setValue(date);
      return;
    }

    var isFuture = Object(_utils_date_js__WEBPACK_IMPORTED_MODULE_4__["isFutureDate"])(date);

    if (!isFuture) {
      // schedule can min be set to now
      setValue(new Date(Object(_utils_date_js__WEBPACK_IMPORTED_MODULE_4__["ceil15Minutes"])(Date.now())).toISOString());
      return;
    }

    setValue(date);
  }];

  var _useRecentCampaign3 = Object(_use_store_js__WEBPACK_IMPORTED_MODULE_3__["useRecentCampaign"])(),
      _useRecentCampaign4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useRecentCampaign3, 1),
      campaign = _useRecentCampaign4[0];

  var _usePostDate3 = Object(_use_post_js__WEBPACK_IMPORTED_MODULE_7__["usePostDate"])(),
      _usePostDate4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_usePostDate3, 2),
      postDate = _usePostDate4[0],
      setPostDate = _usePostDate4[1];

  var nextScheduleTimestamp = Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_2__["getDefaultScheduleNextTimestamp"])();
  var schedule = campaign.schedule;
  var dateState = new Date(schedule);

  var setTimestamp = function setTimestamp(timestsamp) {
    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["dispatch"])('core/editor').editPost({
      date: new Date(timestsamp).toISOString(),
      status: "future"
    });
  };

  var setSchedule = function setSchedule(_date) {
    if (_date) {
      var minTimestamp = Object(_utils_date_js__WEBPACK_IMPORTED_MODULE_4__["ceil15Minutes"])(new Date().getTime() + 1000 * 60 * 30);
      var timestamp = Date.parse(_date);
      var newSchedule = schedule < timestamp ? Object(_utils_date_js__WEBPACK_IMPORTED_MODULE_4__["ceil15Minutes"])(timestamp) : Object(_utils_date_js__WEBPACK_IMPORTED_MODULE_4__["floor15Minutes"])(timestamp);

      if (timestamp > minTimestamp) {
        setTimestamp(newSchedule);
      } else {
        setTimestamp(minTimestamp);
      }

      return;
    }

    setTimestamp(nextScheduleTimestamp);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(schedule) === ( true ? "undefined" : undefined) || schedule < nextScheduleTimestamp) {
      setSchedule();
    }
  }, [schedule]);
  return [dateState, setSchedule];
};

/***/ }),

/***/ "./src/script/hooks/use-store.js":
/*!***************************************!*\
  !*** ./src/script/hooks/use-store.js ***!
  \***************************************/
/*! exports provided: useIsRequesting, useCancelCampaign, useRecentCampaign, useRecentCampaignCustomized, useAudience, useSegment, useCampaigns, useTestEmailAddresses, useValidTestEmailAddresses, useSendTestEmails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsRequesting", function() { return useIsRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCancelCampaign", function() { return useCancelCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecentCampaign", function() { return useRecentCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecentCampaignCustomized", function() { return useRecentCampaignCustomized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAudience", function() { return useAudience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSegment", function() { return useSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCampaigns", function() { return useCampaigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTestEmailAddresses", function() { return useTestEmailAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useValidTestEmailAddresses", function() { return useValidTestEmailAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSendTestEmails", function() { return useSendTestEmails; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/store.js */ "./src/script/data/store.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _use_post_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-post.js */ "./src/script/hooks/use-post.js");
/* harmony import */ var _utils_email_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/email.js */ "./src/script/utils/email.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var useIsRequesting = function useIsRequesting() {
  var state = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select(_data_store_js__WEBPACK_IMPORTED_MODULE_3__["STORE_NAME"]).isRequesting();
  }, []);
  return state;
};
var useCancelCampaign = function useCancelCampaign() {
  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])('core/editor');

  var _useRecentCampaign = useRecentCampaign(),
      _useRecentCampaign2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useRecentCampaign, 2),
      _ = _useRecentCampaign2[0],
      changeCampaign = _useRecentCampaign2[1];

  return function () {
    dispatch.editPost({
      status: "draft"
    });
    changeCampaign({
      cancel: true
    });
    dispatch.savePost();
  };
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
var useRecentCampaignCustomized = function useRecentCampaignCustomized() {
  var _useRecentCampaign3 = useRecentCampaign(),
      _useRecentCampaign4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useRecentCampaign3, 2),
      campaign = _useRecentCampaign4[0],
      changeCampaign = _useRecentCampaign4[1];

  return [campaign.custom || {}, function (changeSet) {
    changeCampaign({
      custom: _objectSpread(_objectSpread({}, campaign.custom), changeSet)
    });
  }];
};
var useAudience = function useAudience() {
  var _useRecentCampaign5 = useRecentCampaign(),
      _useRecentCampaign6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useRecentCampaign5, 2),
      campaign = _useRecentCampaign6[0],
      setValue = _useRecentCampaign6[1];

  return [campaign.audience_id, function (id) {
    return setValue({
      audience_id: id
    });
  }];
};
var useSegment = function useSegment() {
  var _useAudience = useAudience(),
      _useAudience2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useAudience, 1),
      audience_id = _useAudience2[0];

  var _useRecentCampaign7 = useRecentCampaign(),
      _useRecentCampaign8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useRecentCampaign7, 2),
      campaign = _useRecentCampaign8[0],
      setValue = _useRecentCampaign8[1];

  var segments = Object(_utils_config_js__WEBPACK_IMPORTED_MODULE_6__["getSegments"])(audience_id);
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

  var _useRecentCampaign9 = useRecentCampaign(),
      _useRecentCampaign10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useRecentCampaign9, 1),
      campaign = _useRecentCampaign10[0];

  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_data_store_js__WEBPACK_IMPORTED_MODULE_3__["STORE_NAME"]);
  return function () {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(campaign) !== ( true ? "undefined" : undefined) && emails.length > 0) {
      dispatch.sendTestMail(campaign, emails);
    }
  };
};

/***/ }),

/***/ "./src/script/utils/campaign.js":
/*!**************************************!*\
  !*** ./src/script/utils/campaign.js ***!
  \**************************************/
/*! exports provided: isCampaign, campaignGetState, campaignIsSaved, campaignIsPaused, campaignIsScheduled, campaignIsSending, campaignIsSent, campaignIsLocked, campaignStateIsNew, campaignStateIsDraft, campaignStateIsReady, campaignStateIsDone, campaignGetAudienceId, campaignGetSegmentId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCampaign", function() { return isCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignGetState", function() { return campaignGetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignIsSaved", function() { return campaignIsSaved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignIsPaused", function() { return campaignIsPaused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignIsScheduled", function() { return campaignIsScheduled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignIsSending", function() { return campaignIsSending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignIsSent", function() { return campaignIsSent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignIsLocked", function() { return campaignIsLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignStateIsNew", function() { return campaignStateIsNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignStateIsDraft", function() { return campaignStateIsDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignStateIsReady", function() { return campaignStateIsReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignStateIsDone", function() { return campaignStateIsDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignGetAudienceId", function() { return campaignGetAudienceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "campaignGetSegmentId", function() { return campaignGetSegmentId; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var isCampaign = function isCampaign(campaign) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(campaign) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(campaign.id) === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(1) && campaign.id > 0;
};

var getAttributes = function getAttributes(campaign) {
  return isCampaign(campaign) ? campaign.attributes : {};
};

var campaignGetState = function campaignGetState(campaign) {
  var attributes = getAttributes(campaign);
  return attributes.status || "";
}; // mailchimp campaign status

var campaignIsSaved = function campaignIsSaved(campaign) {
  return campaignGetState(campaign) === "saved";
};
var campaignIsPaused = function campaignIsPaused(campaign) {
  return campaignGetState(campaign) === "paused";
};
var campaignIsScheduled = function campaignIsScheduled(campaign) {
  return campaignGetState(campaign) === "schedule";
};
var campaignIsSending = function campaignIsSending(campaign) {
  return campaignGetState(campaign) === "sending";
};
var campaignIsSent = function campaignIsSent(campaign) {
  return campaignGetState(campaign) === "sent";
}; // internal state

var campaignIsLocked = function campaignIsLocked(campaign) {
  return campaignIsScheduled(campaign) || campaignIsSending(campaign) || campaignIsSent(campaign);
};
var campaignStateIsNew = function campaignStateIsNew(campaign) {
  return isCampaign(campaign) && campaign.state === "new";
};
var campaignStateIsDraft = function campaignStateIsDraft(campaign) {
  return isCampaign(campaign) && campaign.state === "draft";
};
var campaignStateIsReady = function campaignStateIsReady(campaign) {
  return isCampaign(campaign) && campaign.state === "ready";
};
var campaignStateIsDone = function campaignStateIsDone(campaign) {
  return isCampaign(campaign) && campaign.state === "done";
};
var campaignGetAudienceId = function campaignGetAudienceId(campaign) {
  var attributes = getAttributes(campaign);
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes.recipients) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes.recipients.list_id) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()("")) return undefined;
  return attributes.recipients.list_id;
};
var campaignGetSegmentId = function campaignGetSegmentId(campaign) {
  var attributes = getAttributes(campaign);
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes.recipients) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes.recipients.segment_opts) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()({}) || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attributes.recipients.segment_opts.saved_segment_id) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(1)) return undefined;
  return attributes.recipients.segment_opts.saved_segment_id;
};

/***/ }),

/***/ "./src/script/utils/config.js":
/*!************************************!*\
  !*** ./src/script/utils/config.js ***!
  \************************************/
/*! exports provided: getSettingsUrl, getAudiencesLists, getAudience, getSegments, getSegment, isTag, isSegment, getIsEmptySegmentAllowed, getHTMLPreviewUrl, getPlaintextPreviewUrl, getDefaultScheduleTime, getDefaultScheduleNextDateTime, getDefaultScheduleNextTimestamp, getCustomConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingsUrl", function() { return getSettingsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudiencesLists", function() { return getAudiencesLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudience", function() { return getAudience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSegments", function() { return getSegments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSegment", function() { return getSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTag", function() { return isTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSegment", function() { return isSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsEmptySegmentAllowed", function() { return getIsEmptySegmentAllowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHTMLPreviewUrl", function() { return getHTMLPreviewUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaintextPreviewUrl", function() { return getPlaintextPreviewUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultScheduleTime", function() { return getDefaultScheduleTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultScheduleNextDateTime", function() { return getDefaultScheduleNextDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultScheduleNextTimestamp", function() { return getDefaultScheduleNextTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomConfig", function() { return getCustomConfig; });
var getSettingsUrl = function getSettingsUrl() {
  return PostToMailchimp.settingsUrl;
}; //------------------------------------------------------------
// audience and segments
//------------------------------------------------------------

var getAudiencesLists = function getAudiencesLists() {
  return PostToMailchimp.lists;
};
var getAudience = function getAudience(audienceId) {
  return getAudiencesLists().find(function (_ref) {
    var listId = _ref.listId;
    return listId === audienceId;
  });
};
var getSegments = function getSegments(listId) {
  return PostToMailchimp.segments[listId] || [];
};
var getSegment = function getSegment(audienceId, segmentId) {
  return getSegments(audienceId).find(function (_ref2) {
    var id = _ref2.id;
    return id === segmentId;
  });
};
var isTag = function isTag(segment) {
  return segment && segment.type === "static";
};
var isSegment = function isSegment(segment) {
  return segment && segment.type !== "static";
};
var getIsEmptySegmentAllowed = function getIsEmptySegmentAllowed(listId) {
  return PostToMailchimp.audienceIdsWithEmptySegmentsAllowed.includes(listId);
}; //------------------------------------------------------------
// preview
//------------------------------------------------------------

var getHTMLPreviewUrl = function getHTMLPreviewUrl() {
  return PostToMailchimp.preview.html;
};
var getPlaintextPreviewUrl = function getPlaintextPreviewUrl() {
  return PostToMailchimp.preview.plaintext;
}; //------------------------------------------------------------
// schedule
//------------------------------------------------------------

var getDefaultScheduleTime = function getDefaultScheduleTime() {
  return PostToMailchimp.defaultScheduleTime;
};
var getDefaultScheduleNextDateTime = function getDefaultScheduleNextDateTime() {
  var time = getDefaultScheduleTime();
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
var getDefaultScheduleNextTimestamp = function getDefaultScheduleNextTimestamp() {
  return getDefaultScheduleNextDateTime().getTime();
}; //------------------------------------------------------------
// custom config controls
//------------------------------------------------------------

var getCustomConfig = function getCustomConfig() {
  return PostToMailchimp.customConfig || [];
};

/***/ }),

/***/ "./src/script/utils/date.js":
/*!**********************************!*\
  !*** ./src/script/utils/date.js ***!
  \**********************************/
/*! exports provided: is12HourTime, dateFormat, isToday, isPastDay, isFutureDate, is15MinutesStep, ceil15Minutes, floor15Minutes, round15Minutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is12HourTime", function() { return is12HourTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPastDay", function() { return isPastDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFutureDate", function() { return isFutureDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is15MinutesStep", function() { return is15MinutesStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil15Minutes", function() { return ceil15Minutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor15Minutes", function() { return floor15Minutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round15Minutes", function() { return round15Minutes; });
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__);
 // To know if the current timezone is a 12 hour time with look for an "a" in the time format.
// We also make sure this a is not escaped by a "/".

var is12HourTime = function is12HourTime() {
  return /a(?!\\)/i.test(Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__["__experimentalGetSettings"])().formats.time.toLowerCase() // Test only the lower case a
  .replace(/\\\\/g, '') // Replace "//" with empty strings
  .split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
  );
};
var dateFormat = function dateFormat(timestamp) {
  var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__["__experimentalGetSettings"])();

  return Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__["date"])(settings.formats.datetime, timestamp);
};
var isToday = function isToday(date) {
  var today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};
var isPastDay = function isPastDay(date) {
  var today = new Date();
  var hoursPastInSeconds = today.getHours() * 60 * 60 * 1000;
  var minutesPastInSeconds = today.getMinutes() * 60 * 1000;
  var secondsPast = today.getSeconds() * 1000;
  var startOfDay = today.getTime() - (hoursPastInSeconds + minutesPastInSeconds + secondsPast);
  var isPastDay = date.getTime() - startOfDay <= -1 * (1000 * 5 * 60); // offset of 5 minutes because of calculation problems

  return isPastDay;
};
var isFutureDate = function isFutureDate(date_string) {
  var tolerance_in_seconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!date_string) return false;
  var timestamp = Date.parse(date_string);
  var now = new Date();
  return now.getTime() - tolerance_in_seconds * 1000 < timestamp;
};
var is15MinutesStep = function is15MinutesStep(timestamp) {
  return timestamp / (1000 * 60) % 15 === 0;
};
var ceil15Minutes = function ceil15Minutes(timestamp) {
  var minutes = timestamp / (1000 * 60);
  return Math.ceil(minutes / 15) * 15 * 60 * 1000;
};
var floor15Minutes = function floor15Minutes(timestamp) {
  var minutes = timestamp / (1000 * 60);
  return Math.floor(minutes / 15) * 15 * 60 * 1000;
};
var round15Minutes = function round15Minutes(timestamp) {
  var minutes = timestamp / (1000 * 60);
  return minutes % 15 > 7 ? ceil15Minutes(timestamp) : floor15Minutes(timestamp);
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

/***/ "./src/script/utils/notice.js":
/*!************************************!*\
  !*** ./src/script/utils/notice.js ***!
  \************************************/
/*! exports provided: showNotice, showWarning, showError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNotice", function() { return showNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showWarning", function() { return showWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

var showNotice = function showNotice(message) {
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices').createInfoNotice(message);
};
var showWarning = function showWarning(message) {
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices').createWarningNotice(message);
};
var showError = function showError(message) {
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices').createErrorNotice(message);
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