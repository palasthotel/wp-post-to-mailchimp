/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/auto/post-date.js":
/*!**************************************!*\
  !*** ./src/script/auto/post-date.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/config */ "./src/script/utils/config.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date */ "./src/script/utils/date.js");
/* harmony import */ var _utils_notice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/notice.js */ "./src/script/utils/notice.js");





const isValidDate = timestamp => {
  const now = new Date();
  const nowTimestamp = now.getTime(); // if it is now or in the past

  if (timestamp <= nowTimestamp) return true; // if it is a 15 minutes step

  const minTimestamp = (0,_utils_date__WEBPACK_IMPORTED_MODULE_2__.ceil15Minutes)(nowTimestamp);
  return timestamp >= minTimestamp && (0,_utils_date__WEBPACK_IMPORTED_MODULE_2__.is15MinutesStep)(timestamp);
};

const buildValidDate = timestamp => {
  const now = new Date();
  const nowTimestamp = now.getTime(); // if it needs no schedule it is always valid

  if (timestamp <= nowTimestamp) return new Date(timestamp); // schedule is only valid in steps of 15 minutes

  const minTimestamp = (0,_utils_date__WEBPACK_IMPORTED_MODULE_2__.ceil15Minutes)(nowTimestamp); // minimum schedule timestamp is next round 15 minutes

  if (timestamp < minTimestamp) return new Date(minTimestamp); // else round to nearest 15 minutes step

  return new Date((0,_utils_date__WEBPACK_IMPORTED_MODULE_2__.round15Minutes)(timestamp));
}; // --------------------------------------------
// getter and setter for date
// --------------------------------------------


const getDate = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor').getEditedPostAttribute('date');

const setDate = dateISOString => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/editor').editPost({
  date: dateISOString
});

const getPostStatus = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor').getCurrentPost().status; // ----------------------------------------
// start watching
// ----------------------------------------


let last_date = null;
let self_action = false;
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.subscribe)(() => {
  const date = getDate();
  if (!date) return; // default date

  if (getPostStatus() === "auto-draft" && null === last_date) {
    const date = (0,_utils_config__WEBPACK_IMPORTED_MODULE_1__.getDefaultScheduleNextDateTime)();
    const iso = date.toISOString();
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

  const timestamp = Date.parse(date);
  if (isValidDate(timestamp)) return;
  const validDateObj = buildValidDate(timestamp);
  const format = (0,_utils_date__WEBPACK_IMPORTED_MODULE_2__.dateFormat)(validDateObj.getTime());
  (0,_utils_notice_js__WEBPACK_IMPORTED_MODULE_3__.showNotice)(`Date was changed to ${format}  because Mailchimp only supports 15 minutes exact time planning.`);
  self_action = true;
  setDate(validDateObj.toISOString());
});

/***/ }),

/***/ "./src/script/components/AudiencesControl.js":
/*!***************************************************!*\
  !*** ./src/script/components/AudiencesControl.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");







const AudiencesControl = () => {
  const isSaving = (0,_hooks_use_post__WEBPACK_IMPORTED_MODULE_3__.useIsSavingPost)();
  const audiences = (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_2__.getAudiencesLists)();
  const [campaign, setCampaign] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__.useRecentCampaign)();
  const {
    audience_id: state = ""
  } = campaign;

  const setState = _audience_id => {
    setCampaign({
      audience_id: _audience_id
    });
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (audiences.length === 1) {
      const id = audiences[0].listId;
      if (state != id) setState(id);
    }
  }, [audiences.length, state]);

  if (audiences.length === 1) {
    const audienceOption = audiences.find(a => state === a.listId);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: "Audience",
      value: audienceOption ? audienceOption.name : "",
      readOnly: true
    });
  }

  const options = [{
    value: "",
    label: '- Choose audience -'
  }, ...audiences.map(({
    listId,
    name
  }) => ({
    value: listId,
    label: name
  }))];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteButton": function() { return /* binding */ DeleteButton; },
/* harmony export */   "SendTestButton": function() { return /* binding */ SendTestButton; },
/* harmony export */   "SendButton": function() { return /* binding */ SendButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/campaign */ "./src/script/utils/campaign.js");
/* harmony import */ var _utils_email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/email */ "./src/script/utils/email.js");






const DeleteButton = () => {
  const isSaving = (0,_hooks_use_post__WEBPACK_IMPORTED_MODULE_2__.useIsSavingPost)();
  const isRequesting = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useIsRequesting)();
  const [campaign, setCampaign] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useRecentCampaign)();

  if (!(0,_utils_campaign__WEBPACK_IMPORTED_MODULE_4__.isCampaign)(campaign)) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: isRequesting || isSaving,
    isDestructive: true,
    onClick: () => setCampaign({
      delete: true
    })
  }, "Delete");
};
const SendTestButton = () => {
  const isSaving = (0,_hooks_use_post__WEBPACK_IMPORTED_MODULE_2__.useIsSavingPost)();
  const isRequesting = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useIsRequesting)();
  const [campaign] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useRecentCampaign)();
  const [emails] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useTestEmailAddresses)();
  const sendTest = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useSendTestEmails)();
  const isCampaignNew = (0,_utils_campaign__WEBPACK_IMPORTED_MODULE_4__.campaignStateIsNew)(campaign);
  const isCampaignDraft = (0,_utils_campaign__WEBPACK_IMPORTED_MODULE_4__.campaignStateIsDraft)(campaign);

  if (!(0,_utils_campaign__WEBPACK_IMPORTED_MODULE_4__.isCampaign)(campaign)) {
    return null;
  }

  const validEmails = emails.filter(_utils_email__WEBPACK_IMPORTED_MODULE_5__.validateEmail);
  const disabled = isCampaignNew || isCampaignDraft || validEmails.length == 0 || isRequesting || isSaving;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: disabled,
    isSecondary: true,
    onClick: sendTest
  }, "Send test");
};
const SendButton = () => {
  const isSaving = (0,_hooks_use_post__WEBPACK_IMPORTED_MODULE_2__.useIsSavingPost)();
  const isRequesting = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useIsRequesting)();
  const [campaign] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useRecentCampaign)();

  if (!(0,_utils_campaign__WEBPACK_IMPORTED_MODULE_4__.isCampaign)(campaign)) {
    return null;
  }

  const disabled = typeof campaign === typeof undefined || isRequesting || isSaving;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: disabled,
    isPrimary: true,
    onClick: () => console.log("send")
  }, "Send!");
};

/***/ }),

/***/ "./src/script/components/CampaignEditor.js":
/*!*************************************************!*\
  !*** ./src/script/components/CampaignEditor.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-store.js */ "./src/script/hooks/use-store.js");
/* harmony import */ var _ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage.js */ "./src/script/components/ErrorMessage.js");
/* harmony import */ var _NextStepsInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NextStepsInfo.js */ "./src/script/components/NextStepsInfo.js");
/* harmony import */ var _Steps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Steps.js */ "./src/script/components/Steps.js");







const CampaignEditor = () => {
  const errors = (0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_2__.useErrors)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, errors.length > 0 && errors.map((e, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: i
  }, e))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Steps_js__WEBPACK_IMPORTED_MODULE_5__.Step1, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Steps_js__WEBPACK_IMPORTED_MODULE_5__.Step2, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Steps_js__WEBPACK_IMPORTED_MODULE_5__.Step3, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_NextStepsInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (CampaignEditor);

/***/ }),

/***/ "./src/script/components/CampaignLocked.js":
/*!*************************************************!*\
  !*** ./src/script/components/CampaignLocked.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_post_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-post.js */ "./src/script/hooks/use-post.js");
/* harmony import */ var _hooks_use_schedule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-schedule.js */ "./src/script/hooks/use-schedule.js");
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-store.js */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_campaign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/campaign.js */ "./src/script/utils/campaign.js");
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _utils_notice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/notice.js */ "./src/script/utils/notice.js");
/* harmony import */ var _ReadableTimestamp_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReadableTimestamp.js */ "./src/script/components/ReadableTimestamp.js");











const CampaignAudienceInfo = () => {
  const [campaign] = (0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_4__.useRecentCampaign)();
  const audience = (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_6__.getAudience)(campaign.audience_id);
  const segment = campaign.segment_id !== null ? (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_6__.getSegment)(campaign.audience_id, campaign.segment_id) : null;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!audience) {
      (0,_utils_notice_js__WEBPACK_IMPORTED_MODULE_7__.showError)(`Missing audience with id ${campaign.audience_id}`);
    }
  }, [audience]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (campaign.segment_id !== null && !segment) {
      (0,_utils_notice_js__WEBPACK_IMPORTED_MODULE_7__.showError)(`Missing segment with id ${campaign.segment_id}`);
    }
  }, [audience]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Audience",
    value: audience ? audience.name : "<ERROR: missing audience>",
    readOnly: true
  }), segment ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_6__.isSegment)(segment) ? "Segment" : "Tag",
    value: segment ? segment.name : "<ERROR: missing segment>",
    readOnly: true
  }) : null);
};

const SendingInfo = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "This campaign is being sent.");
};

const SentInfo = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "This campaign was completely delivered.");
};

const ScheduleInfo = ({
  timestamp
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "This campaign is scheduled for ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ReadableTimestamp_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    timestamp: timestamp
  }), ".");
};

const CampaignLocked = () => {
  const [campaign, changeCampaign] = (0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_4__.useRecentCampaign)();
  const isSaving = (0,_hooks_use_post_js__WEBPACK_IMPORTED_MODULE_2__.useIsSavingPost)();
  const executeUnschedule = (0,_hooks_use_schedule_js__WEBPACK_IMPORTED_MODULE_3__.useUnschedule)();
  const executeCancelCampaign = (0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_4__.useCancelCampaign)();
  const {
    cancel = false,
    schedule
  } = campaign;
  const isSending = (0,_utils_campaign_js__WEBPACK_IMPORTED_MODULE_5__.campaignIsSending)(campaign);
  const isSent = (0,_utils_campaign_js__WEBPACK_IMPORTED_MODULE_5__.campaignIsSent)(campaign);
  const isScheduled = (0,_utils_campaign_js__WEBPACK_IMPORTED_MODULE_5__.campaignIsScheduled)(campaign);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CampaignAudienceInfo, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, isSending ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SendingInfo, null) : null, isScheduled ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ScheduleInfo, {
    timestamp: schedule
  }) : null, isSent ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SentInfo, null) : null), isSending ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: isSaving,
    onClick: executeCancelCampaign,
    isDestructive: true
  }, "Cancel campaign") : null, isScheduled ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config */ "./src/script/utils/config.js");




const CustomConfigControl = () => {
  const [custom, changeCustomAttribute] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_1__.useRecentCampaignCustomized)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_utils_config__WEBPACK_IMPORTED_MODULE_2__.getCustomConfig)().map(({
    key,
    Element
  }) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Element, {
      key: key,
      value: custom[key],
      onChange: value => {
        changeCustomAttribute({
          [key]: value
        });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/email */ "./src/script/utils/email.js");






const EMailAddressesControl = () => {
  const isSaving = (0,_hooks_use_post__WEBPACK_IMPORTED_MODULE_2__.useIsSavingPost)();
  const [emails, setEmails] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_3__.useTestEmailAddresses)();

  const handleChange = values => {
    setEmails(values.map(v => {
      return typeof v === typeof "" ? v : v.value;
    }));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    label: "Email addresses",
    disabled: isSaving,
    value: emails.map(e => {
      if ((0,_utils_email__WEBPACK_IMPORTED_MODULE_4__.validateEmail)(e)) {
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

/***/ "./src/script/components/ErrorMessage.js":
/*!***********************************************!*\
  !*** ./src/script/components/ErrorMessage.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorMessage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorMessage.scss */ "./src/script/components/ErrorMessage.scss");


const dataKeys = ["title", "detail"];

const ErrorMessage = ({
  message,
  code,
  data = null
}) => {
  let additional = null;

  if (data && Object.keys(data).length) {
    if (data.title && data.detail) {
      additional = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: Math.random() * 10000,
        className: "ptm-error__detail"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, data.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), data.detail);
    } else {
      additional = [];

      for (const key in data) {
        if (!dataKeys.includes(key)) continue;
        additional.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          key: key,
          className: "ptm-error__detail"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, key, ":"), " ", data[key]));
      }
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ptm-error"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ptm-error__message"
  }, message), additional);
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorMessage);

/***/ }),

/***/ "./src/script/components/FinishControl.js":
/*!************************************************!*\
  !*** ./src/script/components/FinishControl.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _ReadableTimestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReadableTimestamp */ "./src/script/components/ReadableTimestamp.js");
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/date */ "./src/script/utils/date.js");








const FinishControl = () => {
  const isSaving = (0,_hooks_use_post__WEBPACK_IMPORTED_MODULE_4__.useIsSavingPost)();
  const [campaign, changeCampaign] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_2__.useRecentCampaign)();
  const [postDate] = (0,_hooks_use_post__WEBPACK_IMPORTED_MODULE_4__.usePostDate)();
  const {
    audience_id,
    segment_id,
    is_ready = false
  } = campaign;
  const schedule = postDate ? Date.parse(postDate) : null;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // if something changed uncheck ready checkbox
    changeCampaign({
      is_ready: false
    });
  }, [audience_id, segment_id, schedule]);

  const handleStartCheckbox = isChecked => {
    if (isSaving) return;
    changeCampaign({
      is_ready: isChecked
    });
  };

  const style = {
    marginLeft: -16,
    marginRight: -16,
    marginBottom: -16,
    marginTop: 16,
    padding: 16,
    paddingBottom: 8,
    backgroundColor: is_ready ? "#AED581" : "#ECEFF1"
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: style
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    checked: is_ready,
    disabled: isSaving,
    label: "I'm ready to start this campaign",
    onChange: handleStartCheckbox
  }), is_ready ? (0,_utils_date__WEBPACK_IMPORTED_MODULE_5__.isFutureDate)(postDate) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "As soon as you plan this campaign will be scheduled to be started at ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ReadableTimestamp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    timestamp: schedule
  }), ".") : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "As soon as you publish this campaign will be started.") : null));
};

/* harmony default export */ __webpack_exports__["default"] = (FinishControl);

/***/ }),

/***/ "./src/script/components/NextStepsInfo.js":
/*!************************************************!*\
  !*** ./src/script/components/NextStepsInfo.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/campaign */ "./src/script/utils/campaign.js");





const NextStepsInfo = () => {
  const [campaign] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_2__.useRecentCampaign)();
  if ((0,_utils_campaign__WEBPACK_IMPORTED_MODULE_3__.isCampaign)(campaign)) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "You need to save the post to proceed to next steps."));
};

/* harmony default export */ __webpack_exports__["default"] = (NextStepsInfo);

/***/ }),

/***/ "./src/script/components/Plugin.js":
/*!*****************************************!*\
  !*** ./src/script/components/Plugin.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-store.js */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_campaign_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/campaign.js */ "./src/script/utils/campaign.js");
/* harmony import */ var _CampaignEditor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CampaignEditor.js */ "./src/script/components/CampaignEditor.js");
/* harmony import */ var _CampaignLocked_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CampaignLocked.js */ "./src/script/components/CampaignLocked.js");








const Plugin = () => {
  const audiences = (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_2__.getAudiencesLists)();
  const [campaign] = (0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_3__.useRecentCampaign)();
  const hasRecentCampaign = (0,_utils_campaign_js__WEBPACK_IMPORTED_MODULE_4__.isCampaign)(campaign);

  if (audiences.length < 1) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, "Please make sure there is at least one Mailchimp.com audience available. ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_2__.getSettingsUrl)()
    }, "Goto Settings"));
  }

  if (hasRecentCampaign && (0,_utils_campaign_js__WEBPACK_IMPORTED_MODULE_4__.campaignIsLocked)(campaign)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CampaignLocked_js__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CampaignEditor_js__WEBPACK_IMPORTED_MODULE_5__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Plugin);

/***/ }),

/***/ "./src/script/components/PreviewUrl.js":
/*!*********************************************!*\
  !*** ./src/script/components/PreviewUrl.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_post_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-post.js */ "./src/script/hooks/use-post.js");
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");





const PreviewUrl = ({
  plaintext = false,
  children
}) => {
  const isSaving = (0,_hooks_use_post_js__WEBPACK_IMPORTED_MODULE_2__.useIsSavingPost)();
  const htmlUrl = (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_3__.getHTMLPreviewUrl)();
  const plaintextUrl = (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_3__.getPlaintextPreviewUrl)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date */ "./src/script/utils/date.js");



const ReadableTimestamp = ({
  timestamp
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.dateFormat)(timestamp));
};

/* harmony default export */ __webpack_exports__["default"] = (ReadableTimestamp);

/***/ }),

/***/ "./src/script/components/ScheduleControl.js":
/*!**************************************************!*\
  !*** ./src/script/components/ScheduleControl.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReadableTimestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadableTimestamp */ "./src/script/components/ReadableTimestamp.js");
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/date */ "./src/script/utils/date.js");
/* harmony import */ var _hooks_use_schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-schedule */ "./src/script/hooks/use-schedule.js");







const ScheduleControl = () => {
  const isSaving = (0,_hooks_use_post__WEBPACK_IMPORTED_MODULE_3__.useIsSavingPost)();
  const [scheduleDate, setScheduleDate] = (0,_hooks_use_schedule__WEBPACK_IMPORTED_MODULE_5__.useSchedule)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "edit-post-post-schedule"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Schedule"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    position: "bottom left",
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isTertiary: true,
      onClick: onToggle
    }, null === scheduleDate || !(0,_utils_date__WEBPACK_IMPORTED_MODULE_4__.isFutureDate)(scheduleDate, 60) ? "Immediately" : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ReadableTimestamp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      timestamp: Date.parse(scheduleDate)
    })),
    contentClassName: "edit-post-post-schedule__dialog",
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DateTimePicker, {
      currentDate: scheduleDate,
      onChange: _date => {
        if (isSaving) return;
        setScheduleDate(_date);
      },
      is12Hour: (0,_utils_date__WEBPACK_IMPORTED_MODULE_4__.is12HourTime)(),
      isInvalidDate: date => isSaving || (0,_utils_date__WEBPACK_IMPORTED_MODULE_4__.isPastDay)(date)
    }))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ScheduleControl);

/***/ }),

/***/ "./src/script/components/SegmentsControl.js":
/*!**************************************************!*\
  !*** ./src/script/components/SegmentsControl.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-store.js */ "./src/script/hooks/use-store.js");
/* harmony import */ var _hooks_use_post_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-post.js */ "./src/script/hooks/use-post.js");







const SegmentsControl = () => {
  const isSaving = (0,_hooks_use_post_js__WEBPACK_IMPORTED_MODULE_4__.useIsSavingPost)();
  const [campaign = {}, setCampaign] = (0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_3__.useRecentCampaign)();
  const {
    audience_id: audience = "",
    segment_id: state = ""
  } = campaign;
  const segments = (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_2__.getSegments)(audience);
  const isEmptySegmentAllowed = (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_2__.getIsEmptySegmentAllowed)(audience);

  const setState = _segment_id => {
    if (isSaving) return;
    setCampaign({ ...campaign,
      segment_id: _segment_id
    });
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (segments.length === 1 && !isEmptySegmentAllowed) {
      const id = segments[0].id;
      if (state != id) setState(id);
    } else if (segments.length === 0) {
      if (state !== "") setState("");
    }
  }, [segments.length, state]);

  if (typeof segments !== typeof [] || segments.length === 0) {
    return null;
  }

  if (segments.length === 1 && !isEmptySegmentAllowed) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_2__.isTag)(segments[0]) ? "Tag" : "Segment",
      value: segments[0].name,
      readOnly: true
    });
  }

  const _segments = segments.filter(_utils_config_js__WEBPACK_IMPORTED_MODULE_2__.isSegment);

  const _tags = segments.filter(_utils_config_js__WEBPACK_IMPORTED_MODULE_2__.isTag);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    id: "mailchimp-segment",
    label: "Segment or tag"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "mailchimp-segment",
    style: {
      width: '100%'
    },
    value: state || "",
    onChange: e => setState(parseInt(e.target.value)),
    disabled: isSaving
  }, isEmptySegmentAllowed ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "-") : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
    label: "Segments"
  }, _segments.map(({
    id,
    name
  }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: id,
    value: id
  }, name))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
    label: "Tags"
  }, _tags.map(({
    id,
    name
  }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: id,
    value: id
  }, name)))));
};

/* harmony default export */ __webpack_exports__["default"] = (SegmentsControl);

/***/ }),

/***/ "./src/script/components/Steps.js":
/*!****************************************!*\
  !*** ./src/script/components/Steps.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Step1": function() { return /* binding */ Step1; },
/* harmony export */   "Step2": function() { return /* binding */ Step2; },
/* harmony export */   "Step3": function() { return /* binding */ Step3; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/campaign */ "./src/script/utils/campaign.js");
/* harmony import */ var _AudiencesControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudiencesControl */ "./src/script/components/AudiencesControl.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Buttons */ "./src/script/components/Buttons.js");
/* harmony import */ var _CustomConfigControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomConfigControl */ "./src/script/components/CustomConfigControl.js");
/* harmony import */ var _EMailAddressesControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EMailAddressesControl */ "./src/script/components/EMailAddressesControl.js");
/* harmony import */ var _FinishControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FinishControl */ "./src/script/components/FinishControl.js");
/* harmony import */ var _PreviewUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PreviewUrl */ "./src/script/components/PreviewUrl.js");
/* harmony import */ var _ScheduleControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ScheduleControl */ "./src/script/components/ScheduleControl.js");
/* harmony import */ var _SegmentsControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SegmentsControl */ "./src/script/components/SegmentsControl.js");
/* harmony import */ var _hooks_use_post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/use-post */ "./src/script/hooks/use-post.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ErrorMessage */ "./src/script/components/ErrorMessage.js");














const Step1 = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Step 1: Configuration",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AudiencesControl__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SegmentsControl__WEBPACK_IMPORTED_MODULE_11__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CustomConfigControl__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};
const Step2 = () => {
  const [campaign] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_2__.useRecentCampaign)();
  if (!campaign.id) return null;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Step 2: Test",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PreviewUrl__WEBPACK_IMPORTED_MODULE_9__["default"], null, "HTML Preview"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PreviewUrl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    plaintext: true
  }, "Plaintext Preview"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EMailAddressesControl__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Buttons__WEBPACK_IMPORTED_MODULE_5__.SendTestButton, null));
};
const Step3 = () => {
  const post = (0,_hooks_use_post__WEBPACK_IMPORTED_MODULE_12__.usePost)();
  const postEdits = (0,_hooks_use_post__WEBPACK_IMPORTED_MODULE_12__.usePostEdits)();
  const [campaign] = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_2__.useRecentCampaign)();
  if (!campaign.id) return null;
  const isReadyResponse = window.PostToMailchimp.isReadyToSendOrSchedule(post, postEdits, campaign);
  const isReady = typeof isReadyResponse === typeof true;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Step 3: Deliver",
    initialOpen: false
  }, !isReady && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, isReadyResponse), isReady && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ScheduleControl__WEBPACK_IMPORTED_MODULE_10__["default"], null), isReady && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FinishControl__WEBPACK_IMPORTED_MODULE_8__["default"], null));
};

/***/ }),

/***/ "./src/script/data/store.js":
/*!**********************************!*\
  !*** ./src/script/data/store.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/email */ "./src/script/utils/email.js");


 // ---------------------------------------------
// default store state
// ---------------------------------------------

const testEmailAddressesCache = localStorage.getItem("gutenberg-post-to-mailchimp__test_email_addresses") || "[]";
const DEFAULT_STATE = {
  isRequesting: false,
  campaigns: [],
  testEmailAddresses: JSON.parse(testEmailAddressesCache).filter(_utils_email__WEBPACK_IMPORTED_MODULE_2__.validateEmail),
  errors: []
}; // ---------------------------------------------
// api actions
// ---------------------------------------------

const CAMPAIGNS_FETCH = post_id => ({
  type: 'CAMPAIGNS_FETCH',
  path: `/post-to-mailchimp/v1/campaigns/${post_id}`
});

const CAMPAIGN_TEST = (campaign, email_addresses) => ({
  type: 'CAMPAIGN_TEST',
  path: `/post-to-mailchimp/v1/campaigns/${campaign.post_id}/campaign/${campaign.id}/test`,
  data: {
    email_addresses: email_addresses
  }
});

const CAMPAIGN_SEND = (post_id, campaign_id) => ({
  type: 'CAMPAIGN_UPDATE',
  path: `/post-to-mailchimp/v1/campaigns/${post_id}/campaign/${campaign_id}/send`
}); // ---------------------------------------------
// action generators
// ---------------------------------------------


const actionNone = () => ({
  type: 'none'
});

const actionIsRequesting = isRequesting => ({
  type: 'SET_IS_REQUESTING',
  isRequesting
});

const actionAddError = error => ({
  type: 'ADD_ERROR',
  error
}); // ---------------------------------------------
// public actions that can be used with dispatch
// ---------------------------------------------


const actions = {
  // ---------------------------------------------
  // local state
  // ---------------------------------------------
  setIsRequesting: actionIsRequesting,
  setCampaigns: campaigns => ({
    type: 'SET_CAMPAIGNS',
    campaigns
  }),
  setTestEmailAddresses: testEmailAddresses => ({
    type: 'SET_TEST_EMAIL_ADDRESSES',
    testEmailAddresses
  }),

  // ---------------------------------------------
  // ajax state
  // ---------------------------------------------
  *fetchCampaigns(post_id) {
    yield actionIsRequesting(true);
    const campaigns = yield CAMPAIGNS_FETCH(post_id);
    yield {
      type: 'SET_CAMPAIGNS',
      campaigns
    };
    return actionIsRequesting(false);
  },

  *sendTestMail(campaign, emailAddresses) {
    yield actionIsRequesting(true);
    let result = null;

    try {
      result = yield CAMPAIGN_TEST(campaign, emailAddresses);
    } catch (e) {
      result = e;
      console.error(e);
    }

    if (typeof result === typeof {} && typeof result.code === typeof "") {
      yield actionAddError(result);
    } else if (typeof result === typeof [] && result.length > 0) {
      for (const item of result) {
        if (typeof item === typeof {} && typeof item.code === typeof "") {
          yield actionAddError(item);
        }
      }
    }

    return actionIsRequesting(false);
  },

  *sendCampaign(campaign) {
    yield actionIsRequesting(true);
    const result = yield CAMPAIGN_SEND(campaign);
    return actionIsRequesting(false);
  }

}; // ------------------------------------------------------
// register our custom store
// ------------------------------------------------------

const STORE_NAME = 'post-to-mailchimp';
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.registerStore)(STORE_NAME, {
  // ------------------------------------------------------
  // reduce actions to new state
  // ------------------------------------------------------
  reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case 'SET_IS_REQUESTING':
        return { ...state,
          isRequesting: action.isRequesting
        };

      case 'SET_CAMPAIGNS':
        return { ...state,
          campaigns: action.campaigns
        };

      case 'SET_TEST_EMAIL_ADDRESSES':
        localStorage.setItem("gutenberg-post-to-mailchimp__test_email_addresses", JSON.stringify(action.testEmailAddresses));
        return { ...state,
          testEmailAddresses: action.testEmailAddresses
        };

      case 'ADD_ERROR':
        return { ...state,
          errors: [...state.errors, action.error]
        };
    }

    return state;
  },

  // ------------------------------------------------------
  // public actions that can be used with dispatch
  // ------------------------------------------------------
  actions,
  // ------------------------------------------------------
  // selectors that can be used with select
  // ------------------------------------------------------
  selectors: {
    isRequesting(state) {
      return state.isRequesting;
    },

    getCampaigns(state, post_id) {
      return state.campaigns;
    },

    getTestEmailAddresses(state) {
      return state.testEmailAddresses;
    },

    getErrors(state) {
      return state.errors;
    }

  },
  // ----------------------------------------------------------------
  //  helps resolving the equivalent selector function
  // ----------------------------------------------------------------
  resolvers: {
    *getCampaigns(post_id) {
      if (typeof post_id === typeof undefined) return actionNone();
      yield actionIsRequesting(true);
      const campaigns = yield CAMPAIGNS_FETCH(post_id);
      yield actionIsRequesting(false);
      return actions.setCampaigns(campaigns);
    }

  },
  // ----------------------------------------------------------------
  //  controls will be executed as side effects of generator actions
  // ----------------------------------------------------------------
  controls: {
    CAMPAIGNS_FETCH(action) {
      console.debug("action fetch", action);
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: action.path
      });
    },

    CAMPAIGN_TEST(action) {
      console.debug("action test", action);
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: action.path,
        data: action.data,
        method: "POST"
      });
    },

    CAMPAIGN_SEND(action) {
      console.debug("action send");
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: action.path,
        method: "POST"
      });
    }

  }
});

/***/ }),

/***/ "./src/script/hooks/use-post.js":
/*!**************************************!*\
  !*** ./src/script/hooks/use-post.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePost": function() { return /* binding */ usePost; },
/* harmony export */   "usePostEdits": function() { return /* binding */ usePostEdits; },
/* harmony export */   "useIsSavingPost": function() { return /* binding */ useIsSavingPost; },
/* harmony export */   "usePostDate": function() { return /* binding */ usePostDate; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const usePost = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select('core/editor').getCurrentPost());
const usePostEdits = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select('core/editor').getPostEdits());
const useIsSavingPost = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select('core/editor').isSavingPost());
const usePostDate = () => {
  const state = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select('core/editor').getEditedPostAttribute('date'));
  const dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('core/editor');
  return [state, date => dispatch.editPost({
    date
  })];
};

/***/ }),

/***/ "./src/script/hooks/use-schedule.js":
/*!******************************************!*\
  !*** ./src/script/hooks/use-schedule.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUnschedule": function() { return /* binding */ useUnschedule; },
/* harmony export */   "useSchedule": function() { return /* binding */ useSchedule; }
/* harmony export */ });
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _use_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-store.js */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date.js */ "./src/script/utils/date.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _use_post_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-post.js */ "./src/script/hooks/use-post.js");






const useUnschedule = () => {
  const dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/editor');
  const [_, changeCampaign] = (0,_use_store_js__WEBPACK_IMPORTED_MODULE_1__.useRecentCampaign)();
  return () => {
    dispatch.editPost({
      status: "draft"
    });
    changeCampaign({
      unschedule: true
    });
    dispatch.savePost();
  };
};
const useSchedule = () => {
  const [value, setValue] = (0,_use_post_js__WEBPACK_IMPORTED_MODULE_5__.usePostDate)();
  return [value, date => {
    if (!date) {
      // null is used for NOW
      setValue(date);
      return;
    }

    const isFuture = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_2__.isFutureDate)(date);

    if (!isFuture) {
      // schedule can min be set to now
      setValue(new Date((0,_utils_date_js__WEBPACK_IMPORTED_MODULE_2__.ceil15Minutes)(Date.now())).toISOString());
      return;
    }

    setValue(date);
  }];
  const [campaign] = (0,_use_store_js__WEBPACK_IMPORTED_MODULE_1__.useRecentCampaign)();
  const [postDate, setPostDate] = (0,_use_post_js__WEBPACK_IMPORTED_MODULE_5__.usePostDate)();
  const nextScheduleTimestamp = (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultScheduleNextTimestamp)();
  const {
    schedule
  } = campaign;
  const dateState = new Date(schedule);

  const setTimestamp = timestsamp => {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/editor').editPost({
      date: new Date(timestsamp).toISOString(),
      status: "future"
    });
  };

  const setSchedule = _date => {
    if (_date) {
      const minTimestamp = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_2__.ceil15Minutes)(new Date().getTime() + 1000 * 60 * 30);
      const timestamp = Date.parse(_date);
      const newSchedule = schedule < timestamp ? (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_2__.ceil15Minutes)(timestamp) : (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_2__.floor15Minutes)(timestamp);

      if (timestamp > minTimestamp) {
        setTimestamp(newSchedule);
      } else {
        setTimestamp(minTimestamp);
      }

      return;
    }

    setTimestamp(nextScheduleTimestamp);
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (typeof schedule === typeof undefined || schedule < nextScheduleTimestamp) {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsRequesting": function() { return /* binding */ useIsRequesting; },
/* harmony export */   "useCancelCampaign": function() { return /* binding */ useCancelCampaign; },
/* harmony export */   "useRecentCampaign": function() { return /* binding */ useRecentCampaign; },
/* harmony export */   "useRecentCampaignCustomized": function() { return /* binding */ useRecentCampaignCustomized; },
/* harmony export */   "useAudience": function() { return /* binding */ useAudience; },
/* harmony export */   "useSegment": function() { return /* binding */ useSegment; },
/* harmony export */   "useCampaigns": function() { return /* binding */ useCampaigns; },
/* harmony export */   "useTestEmailAddresses": function() { return /* binding */ useTestEmailAddresses; },
/* harmony export */   "useValidTestEmailAddresses": function() { return /* binding */ useValidTestEmailAddresses; },
/* harmony export */   "useSendTestEmails": function() { return /* binding */ useSendTestEmails; },
/* harmony export */   "useErrors": function() { return /* binding */ useErrors; }
/* harmony export */ });
/* harmony import */ var _data_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/store.js */ "./src/script/data/store.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/config.js */ "./src/script/utils/config.js");
/* harmony import */ var _use_post_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-post.js */ "./src/script/hooks/use-post.js");
/* harmony import */ var _utils_email_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/email.js */ "./src/script/utils/email.js");







const useIsRequesting = () => {
  const state = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_data_store_js__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME).isRequesting(), []);
  return state;
};
const useCancelCampaign = () => {
  const dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('core/editor');
  const [_, changeCampaign] = useRecentCampaign();
  return () => {
    dispatch.editPost({
      status: "draft"
    });
    changeCampaign({
      cancel: true
    });
    dispatch.savePost();
  };
};
const useRecentCampaign = () => {
  const value = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select('core/editor').getEditedPostAttribute("recent_campaign"));
  const dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('core/editor');
  return [value || {}, changeSet => {
    dispatch.editPost({
      recent_campaign: { ...value,
        ...changeSet
      }
    });
  }];
};
const useRecentCampaignCustomized = () => {
  const [campaign, changeCampaign] = useRecentCampaign();
  return [campaign.custom || {}, changeSet => {
    changeCampaign({
      custom: { ...campaign.custom,
        ...changeSet
      }
    });
  }];
};
const useAudience = () => {
  const [campaign, setValue] = useRecentCampaign();
  return [campaign.audience_id, id => setValue({
    audience_id: id
  })];
};
const useSegment = () => {
  const [audience_id] = useAudience();
  const [campaign, setValue] = useRecentCampaign();
  const segments = (0,_utils_config_js__WEBPACK_IMPORTED_MODULE_3__.getSegments)(audience_id);
  const state = campaign.segment_id;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (segments.find(s => s.id + "" === state + "")) return;
    const timeout = setTimeout(() => {
      setValue({
        segment_id: ""
      });
    }, 600);
    return () => clearTimeout(timeout);
  }, [audience_id]);
  return [state, id => setValue({
    segment_id: id
  })];
};
const useCampaigns = () => {
  const {
    id
  } = (0,_use_post_js__WEBPACK_IMPORTED_MODULE_4__.usePost)();
  const campaigns = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_data_store_js__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME).getCampaigns(id));
  const dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_data_store_js__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME);
  return [campaigns, () => {
    dispatch.fetchCampaigns(id);
  }];
};
const useTestEmailAddresses = () => {
  const emails = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_data_store_js__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME).getTestEmailAddresses());
  const dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_data_store_js__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME);
  return [emails, _emails => {
    dispatch.setTestEmailAddresses(_emails);
  }];
};
const useValidTestEmailAddresses = () => {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_data_store_js__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME).getTestEmailAddresses()).filter(_utils_email_js__WEBPACK_IMPORTED_MODULE_5__.validateEmail);
};
const useSendTestEmails = () => {
  const emails = useValidTestEmailAddresses();
  const [campaign] = useRecentCampaign();
  const dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_data_store_js__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME);
  return () => {
    if (typeof campaign !== typeof undefined && emails.length > 0) {
      dispatch.sendTestMail(campaign, emails);
    }
  };
};
const useErrors = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_data_store_js__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME).getErrors());

/***/ }),

/***/ "./src/script/utils/campaign.js":
/*!**************************************!*\
  !*** ./src/script/utils/campaign.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCampaign": function() { return /* binding */ isCampaign; },
/* harmony export */   "campaignGetState": function() { return /* binding */ campaignGetState; },
/* harmony export */   "campaignIsSaved": function() { return /* binding */ campaignIsSaved; },
/* harmony export */   "campaignIsPaused": function() { return /* binding */ campaignIsPaused; },
/* harmony export */   "campaignIsScheduled": function() { return /* binding */ campaignIsScheduled; },
/* harmony export */   "campaignIsSending": function() { return /* binding */ campaignIsSending; },
/* harmony export */   "campaignIsSent": function() { return /* binding */ campaignIsSent; },
/* harmony export */   "campaignIsLocked": function() { return /* binding */ campaignIsLocked; },
/* harmony export */   "campaignStateIsNew": function() { return /* binding */ campaignStateIsNew; },
/* harmony export */   "campaignStateIsDraft": function() { return /* binding */ campaignStateIsDraft; },
/* harmony export */   "campaignStateIsReady": function() { return /* binding */ campaignStateIsReady; },
/* harmony export */   "campaignStateIsDone": function() { return /* binding */ campaignStateIsDone; },
/* harmony export */   "campaignGetAudienceId": function() { return /* binding */ campaignGetAudienceId; },
/* harmony export */   "campaignGetSegmentId": function() { return /* binding */ campaignGetSegmentId; }
/* harmony export */ });
const isCampaign = campaign => typeof campaign === typeof {} && typeof campaign.id === typeof 1 && campaign.id > 0;

const getAttributes = campaign => isCampaign(campaign) ? campaign.attributes : {};

const campaignGetState = campaign => {
  const attributes = getAttributes(campaign);
  return (attributes === null || attributes === void 0 ? void 0 : attributes.status) || "";
}; // mailchimp campaign status

const campaignIsSaved = campaign => campaignGetState(campaign) === "saved";
const campaignIsPaused = campaign => campaignGetState(campaign) === "paused";
const campaignIsScheduled = campaign => campaignGetState(campaign) === "schedule";
const campaignIsSending = campaign => campaignGetState(campaign) === "sending";
const campaignIsSent = campaign => campaignGetState(campaign) === "sent"; // internal state

const campaignIsLocked = campaign => campaignIsScheduled(campaign) || campaignIsSending(campaign) || campaignIsSent(campaign);
const campaignStateIsNew = campaign => isCampaign(campaign) && campaign.state === "new";
const campaignStateIsDraft = campaign => isCampaign(campaign) && campaign.state === "draft";
const campaignStateIsReady = campaign => isCampaign(campaign) && campaign.state === "ready";
const campaignStateIsDone = campaign => isCampaign(campaign) && campaign.state === "done";
const campaignGetAudienceId = campaign => {
  const attributes = getAttributes(campaign);
  if (typeof attributes !== typeof {} || typeof attributes.recipients !== typeof {} || typeof attributes.recipients.list_id !== typeof "") return undefined;
  return attributes.recipients.list_id;
};
const campaignGetSegmentId = campaign => {
  const attributes = getAttributes(campaign);
  if (typeof attributes !== typeof {} || typeof attributes.recipients !== typeof {} || typeof attributes.recipients.segment_opts !== typeof {} || typeof attributes.recipients.segment_opts.saved_segment_id !== typeof 1) return undefined;
  return attributes.recipients.segment_opts.saved_segment_id;
};

/***/ }),

/***/ "./src/script/utils/config.js":
/*!************************************!*\
  !*** ./src/script/utils/config.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettingsUrl": function() { return /* binding */ getSettingsUrl; },
/* harmony export */   "getAudiencesLists": function() { return /* binding */ getAudiencesLists; },
/* harmony export */   "getAudience": function() { return /* binding */ getAudience; },
/* harmony export */   "getSegments": function() { return /* binding */ getSegments; },
/* harmony export */   "getSegment": function() { return /* binding */ getSegment; },
/* harmony export */   "isTag": function() { return /* binding */ isTag; },
/* harmony export */   "isSegment": function() { return /* binding */ isSegment; },
/* harmony export */   "getIsEmptySegmentAllowed": function() { return /* binding */ getIsEmptySegmentAllowed; },
/* harmony export */   "getHTMLPreviewUrl": function() { return /* binding */ getHTMLPreviewUrl; },
/* harmony export */   "getPlaintextPreviewUrl": function() { return /* binding */ getPlaintextPreviewUrl; },
/* harmony export */   "getDefaultScheduleTime": function() { return /* binding */ getDefaultScheduleTime; },
/* harmony export */   "getDefaultScheduleNextDateTime": function() { return /* binding */ getDefaultScheduleNextDateTime; },
/* harmony export */   "getDefaultScheduleNextTimestamp": function() { return /* binding */ getDefaultScheduleNextTimestamp; },
/* harmony export */   "getCustomConfig": function() { return /* binding */ getCustomConfig; }
/* harmony export */ });
const getSettingsUrl = () => PostToMailchimp.settingsUrl; //------------------------------------------------------------
// audience and segments
//------------------------------------------------------------

const getAudiencesLists = () => PostToMailchimp.lists;
const getAudience = audienceId => getAudiencesLists().find(({
  listId
}) => listId === audienceId);
const getSegments = listId => PostToMailchimp.segments[listId] || [];
const getSegment = (audienceId, segmentId) => getSegments(audienceId).find(({
  id
}) => id === segmentId);
const isTag = segment => segment && segment.type === "static";
const isSegment = segment => segment && segment.type !== "static";
const getIsEmptySegmentAllowed = listId => PostToMailchimp.audienceIdsWithEmptySegmentsAllowed.includes(listId); //------------------------------------------------------------
// preview
//------------------------------------------------------------

const getHTMLPreviewUrl = () => PostToMailchimp.preview.html;
const getPlaintextPreviewUrl = () => PostToMailchimp.preview.plaintext; //------------------------------------------------------------
// schedule
//------------------------------------------------------------

const getDefaultScheduleTime = () => PostToMailchimp.defaultScheduleTime;
const getDefaultScheduleNextDateTime = () => {
  const time = getDefaultScheduleTime();
  const date = new Date();
  if (time === "") return date;
  const parts = time.split(":");
  if (parts.length !== 2) return date;
  const hours = parseInt(parts[0]);
  const minutes = parseInt(parts[1]);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 60) return date;
  date.setDate(date.getDate() + 1);
  date.setHours(hours, minutes);
  return date;
};
const getDefaultScheduleNextTimestamp = () => getDefaultScheduleNextDateTime().getTime(); //------------------------------------------------------------
// custom config controls
//------------------------------------------------------------

const getCustomConfig = () => {
  return PostToMailchimp.customConfig || [];
};

/***/ }),

/***/ "./src/script/utils/date.js":
/*!**********************************!*\
  !*** ./src/script/utils/date.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "is12HourTime": function() { return /* binding */ is12HourTime; },
/* harmony export */   "dateFormat": function() { return /* binding */ dateFormat; },
/* harmony export */   "isToday": function() { return /* binding */ isToday; },
/* harmony export */   "isPastDay": function() { return /* binding */ isPastDay; },
/* harmony export */   "isFutureDate": function() { return /* binding */ isFutureDate; },
/* harmony export */   "is15MinutesStep": function() { return /* binding */ is15MinutesStep; },
/* harmony export */   "ceil15Minutes": function() { return /* binding */ ceil15Minutes; },
/* harmony export */   "floor15Minutes": function() { return /* binding */ floor15Minutes; },
/* harmony export */   "round15Minutes": function() { return /* binding */ round15Minutes; }
/* harmony export */ });
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__);
 // To know if the current timezone is a 12 hour time with look for an "a" in the time format.
// We also make sure this a is not escaped by a "/".

const is12HourTime = () => /a(?!\\)/i.test((0,_wordpress_date__WEBPACK_IMPORTED_MODULE_0__.__experimentalGetSettings)().formats.time.toLowerCase() // Test only the lower case a
.replace(/\\\\/g, '') // Replace "//" with empty strings
.split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
);
const dateFormat = timestamp => {
  const settings = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_0__.__experimentalGetSettings)();

  return (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_0__.date)(settings.formats.datetime, timestamp);
};
const isToday = date => {
  const today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};
const isPastDay = date => {
  const today = new Date();
  const hoursPastInSeconds = today.getHours() * 60 * 60 * 1000;
  const minutesPastInSeconds = today.getMinutes() * 60 * 1000;
  const secondsPast = today.getSeconds() * 1000;
  const startOfDay = today.getTime() - (hoursPastInSeconds + minutesPastInSeconds + secondsPast);
  const isPastDay = date.getTime() - startOfDay <= -1 * (1000 * 5 * 60); // offset of 5 minutes because of calculation problems

  return isPastDay;
};
const isFutureDate = (date_string, tolerance_in_seconds = 0) => {
  if (!date_string) return false;
  const timestamp = Date.parse(date_string);
  const now = new Date();
  return now.getTime() - tolerance_in_seconds * 1000 < timestamp;
};
const is15MinutesStep = timestamp => {
  return timestamp / (1000 * 60) % 15 === 0;
};
const ceil15Minutes = timestamp => {
  const minutes = timestamp / (1000 * 60);
  return Math.ceil(minutes / 15) * 15 * 60 * 1000;
};
const floor15Minutes = timestamp => {
  const minutes = timestamp / (1000 * 60);
  return Math.floor(minutes / 15) * 15 * 60 * 1000;
};
const round15Minutes = timestamp => {
  const minutes = timestamp / (1000 * 60);
  return minutes % 15 > 7 ? ceil15Minutes(timestamp) : floor15Minutes(timestamp);
};

/***/ }),

/***/ "./src/script/utils/email.js":
/*!***********************************!*\
  !*** ./src/script/utils/email.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateEmail": function() { return /* binding */ validateEmail; }
/* harmony export */ });
const validateEmail = mail => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
};

/***/ }),

/***/ "./src/script/utils/notice.js":
/*!************************************!*\
  !*** ./src/script/utils/notice.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showNotice": function() { return /* binding */ showNotice; },
/* harmony export */   "showWarning": function() { return /* binding */ showWarning; },
/* harmony export */   "showError": function() { return /* binding */ showError; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const showNotice = message => {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createInfoNotice(message);
};
const showWarning = message => {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createWarningNotice(message);
};
const showError = message => {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(message);
};

/***/ }),

/***/ "./src/script/components/ErrorMessage.scss":
/*!*************************************************!*\
  !*** ./src/script/components/ErrorMessage.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./src/script/gutenberg.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Plugin */ "./src/script/components/Plugin.js");
/* harmony import */ var _auto_post_date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auto/post-date.js */ "./src/script/auto/post-date.js");
/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/use-store */ "./src/script/hooks/use-store.js");
/* harmony import */ var _utils_notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/notice */ "./src/script/utils/notice.js");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ErrorMessage */ "./src/script/components/ErrorMessage.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);






 // ---------------------------------------
// validate post date selection
// ---------------------------------------






;

if (typeof window.PostToMailchimp === typeof undefined) {
  window.PostToMailchimp = {
    customConfig: []
  };
}

if (typeof window.PostToMailchimp.customConfig === typeof undefined) {
  window.PostToMailchimp.customConfig = [];
}

if (typeof window.PostToMailchimp.isReadyToSendOrSchedule === typeof undefined) {
  window.PostToMailchimp.isReadyToSendOrSchedule = (post, postEdits, campaign) => {
    if (post.title.length > 0 && typeof postEdits.title === typeof undefined) {
      return true;
    }

    if (typeof postEdits.title === typeof "" && postEdits.title.length > 0) {
      return true;
    }

    return "Add a post title which will be used as the email subject and save the post.";
  };
} // ---------------------------------------
// UI
// ---------------------------------------


const PLUGIN_NAME = "post-to-mailchimp";
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)(PLUGIN_NAME, {
  render: () => {
    const errors = (0,_hooks_use_store__WEBPACK_IMPORTED_MODULE_5__.useErrors)();
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (errors.length > 0) {
        const error = errors[errors.length - 1];
        (0,_utils_notice__WEBPACK_IMPORTED_MODULE_6__.showError)(error.message);

        if (typeof error.additional_errors === typeof []) {
          for (const e of error.additional_errors) {
            (0,_utils_notice__WEBPACK_IMPORTED_MODULE_6__.showError)(e.message);
          }
        }
      }
    }, [errors.length]);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebarMoreMenuItem, {
      target: PLUGIN_NAME,
      icon: "email"
    }, "Post to Mailchimp"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
      name: PLUGIN_NAME,
      icon: "email",
      title: "Post to Mailchimp"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Plugin__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=post-to-mailchimp.js.map