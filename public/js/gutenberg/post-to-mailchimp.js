!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){var r=n(14),i=n(15),c=n(10),a=n(16);e.exports=function(e,t){return r(e)||i(e,t)||c(e,t)||a()}},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){!function(){e.exports=this.wp.date}()},function(e,t){!function(){e.exports=this.wp.editPost}()},function(e,t,n){var r=n(11);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t,n){var r=n(17),i=n(18),c=n(10),a=n(19);e.exports=function(e){return r(e)||i(e)||c(e)||a()}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,c=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw c}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){var r=n(11);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n.r(t);var r=n(3),i=n.n(r),c=n(0),a=n(12),o=n(9),u=n(1),l=n.n(u),s=n(2),f=function(){return PostToMailchimp.lists},m=function(e){return PostToMailchimp.segments[e]||[]},p=function(e){return e&&"static"===e.type},d=function(e){return e&&"static"!==e.type},b=function(){var e=PostToMailchimp.defaultScheduleTime,t=new Date;if(""===e)return t;var n=e.split(":");if(2!==n.length)return t;var r=parseInt(n[0]),i=parseInt(n[1]);return r<0||r>23||i<0||i>60||(t.setDate(t.getDate()+1),t.setHours(r,i)),t},g=n(6),O=n.n(g),j=n(5),v=n.n(j),h=n(7),E=n.n(h),y=n(4),S=function(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=localStorage.getItem("gutenberg-post-to-mailchimp__test_email_addresses")||"[]",_={isRequesting:!1,campaigns:[],testEmailAddresses:JSON.parse(T).filter(S)},x=function(e){return{type:"CAMPAIGNS_FETCH",path:"/post-to-mailchimp/v1/campaigns/".concat(e)}},A=function(e,t){return{type:"CAMPAIGN_TEST",path:"/post-to-mailchimp/v1/campaigns/".concat(e.post_id,"/campaign/").concat(e.id,"/test"),data:{email_addresses:t}}},C=function(e){return{type:"SET_IS_REQUESTING",isRequesting:e}},D={setIsRequesting:C,setCampaigns:function(e){return{type:"SET_CAMPAIGNS",campaigns:e}},setTestEmailAddresses:function(e){return{type:"SET_TEST_EMAIL_ADDRESSES",testEmailAddresses:e}},fetchCampaigns:v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(!0);case 2:return e.next=4,x(t);case 4:return n=e.sent,e.next=7,{type:"SET_CAMPAIGNS",campaigns:n};case 7:return e.abrupt("return",C(!1));case 8:case"end":return e.stop()}}),e)})),sendTestMail:v.a.mark((function e(t,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(!0);case 2:return e.next=4,A(t,n);case 4:return e.sent,e.abrupt("return",C(!1));case 6:case"end":return e.stop()}}),e)})),sendCampaign:v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(!0);case 2:return e.next=4,n=void 0,{type:"CAMPAIGN_UPDATE",path:"/post-to-mailchimp/v1/campaigns/".concat(t,"/campaign/").concat(n,"/send"),data:{email_addresses:email_addresses}};case 4:return e.sent,e.abrupt("return",C(!1));case 6:case"end":return e.stop()}var n}),e)}))},M="post-to-mailchimp";Object(y.registerStore)(M,{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_REQUESTING":return w(w({},e),{},{isRequesting:t.isRequesting});case"SET_CAMPAIGNS":return w(w({},e),{},{campaigns:t.campaigns});case"SET_TEST_EMAIL_ADDRESSES":return localStorage.setItem("gutenberg-post-to-mailchimp__test_email_addresses",JSON.stringify(t.testEmailAddresses)),w(w({},e),{},{testEmailAddresses:t.testEmailAddresses})}return e},actions:D,selectors:{isRequesting:function(e){return e.isRequesting},getCampaigns:function(e,t){return e.campaigns},getTestEmailAddresses:function(e){return e.testEmailAddresses}},resolvers:{getCampaigns:v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==i()(t)){e.next=2;break}return e.abrupt("return",{type:"none"});case 2:return e.next=4,C(!0);case 4:return e.next=6,x(t);case 6:return n=e.sent,e.next=9,C(!1);case 9:return e.abrupt("return",D.setCampaigns(n));case 10:case"end":return e.stop()}}),e)}))},controls:{CAMPAIGNS_FETCH:function(e){return console.debug("action fetch",e),E()({path:e.path})},CAMPAIGN_TEST:function(e){return console.debug("action test",e),E()({path:e.path,data:e.data,method:"POST"})},CAMPAIGN_SEND:function(e){return console.debug("action send"),E()({path:e.path,method:"POST"})}}});var I=function(){return Object(y.useSelect)((function(e){return e("core/editor").isSavingPost()}))},R=function(){var e=Object(y.useSelect)((function(e){return e("core/editor").getEditedPostAttribute("date")})),t=Object(y.useDispatch)("core/editor");return[e,function(e){return t.editPost({date:e})}]};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(){return Object(y.useSelect)((function(e){return e(M).isRequesting()}),[])},G=function(){var e=Object(y.useSelect)((function(e){return e("core/editor").getEditedPostAttribute("recent_campaign")})),t=Object(y.useDispatch)("core/editor");return[e||{},function(n){t.editPost({recent_campaign:N(N({},e),n)})}]},F=function(){var e=Object(y.useSelect)((function(e){return e(M).getTestEmailAddresses()})),t=Object(y.useDispatch)(M);return[e,function(e){t.setTestEmailAddresses(e)}]},q=function(){var e=Object(y.useSelect)((function(e){return e(M).getTestEmailAddresses()})).filter(S),t=G(),n=l()(t,1)[0],r=Object(y.useDispatch)(M);return function(){"undefined"!==i()(n)&&e.length>0&&r.sendTestMail(n,e)}},H=function(e){return i()(e)===i()({})&&i()(e.id)===i()(1)&&e.id>0},U=function(e){return H(e)?e.attributes:{}},L=function(e){return U(e).status||""},z=function(e){return"schedule"===L(e)},Z=function(e){return"sending"===L(e)},$=function(e){return"sent"===L(e)},J=function(){var e=G(),t=l()(e,1)[0];return H(t)?null:Object(c.createElement)(s.PanelBody,null,Object(c.createElement)("p",null,"You need to save the post to proceed to next steps."))},Q=n(13),W=n.n(Q),Y=function(){var e=I(),t=f(),n=G(),r=l()(n,2),i=r[0],a=r[1],o=i.audience_id,u=void 0===o?"":o,m=function(e){a({audience_id:e})};if(Object(c.useEffect)((function(){if(1===t.length){var e=t[0].listId;u!=e&&m(e)}}),[t.length,u]),1===t.length){var p=t.find((function(e){return u===e.listId}));return Object(c.createElement)(s.TextControl,{label:"Audience",value:p?p.name:"",readOnly:!0})}var d=[{value:"",label:"- Choose audience -"}].concat(W()(t.map((function(e){return{value:e.listId,label:e.name}}))));return Object(c.createElement)(s.SelectControl,{label:"Audience",disabled:e,value:u||"",onChange:m,options:d})},K=function(){var e=I(),t=B(),n=G(),r=l()(n,1)[0],i=F(),a=l()(i,1)[0],o=q(),u=function(e){return H(e)&&"new"===e.state}(r),f=function(e){return H(e)&&"draft"===e.state}(r);if(!H(r))return null;var m=a.filter(S),p=u||f||0==m.length||t||e;return Object(c.createElement)(s.Button,{disabled:p,isSecondary:!0,onClick:o},"Send test")},V=function(){var e,t,n,r,i=(e=G(),t=l()(e,2),n=t[0],r=t[1],[n.custom||{},function(e){r({custom:N(N({},n.custom),e)})}]),a=l()(i,2),o=a[0],u=a[1];return Object(c.createElement)("div",null,(PostToMailchimp.customConfig||[]).map((function(e){var t=e.key,n=e.Element;return Object(c.createElement)(n,{key:t,value:o[t],onChange:function(e){u(O()({},t,e))}})})))},X=function(){var e=I(),t=F(),n=l()(t,2),r=n[0],a=n[1];return Object(c.createElement)(s.PanelRow,null,Object(c.createElement)(s.FormTokenField,{label:"Email addresses",disabled:e,value:r.map((function(e){return S(e)?e:{value:e,status:"error"}})),onChange:function(e){a(e.map((function(e){return i()(e)===i()("")?e:e.value})))}}))},ee=n(8),te=function(e){var t=Object(ee.__experimentalGetSettings)();return Object(ee.date)(t.formats.datetime,e)},ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)return!1;var n=Date.parse(e),r=new Date;return r.getTime()-1e3*t<n},re=function(e){var t=e/6e4;return 15*Math.ceil(t/15)*60*1e3},ie=function(e){var t=e/6e4;return 15*Math.floor(t/15)*60*1e3},ce=function(e){var t=e.timestamp;return Object(c.createElement)(c.Fragment,null,te(t))},ae=function(){var e=I(),t=G(),n=l()(t,2),r=n[0],i=n[1],a=R(),o=l()(a,1)[0],u=r.audience_id,f=r.segment_id,m=r.is_ready,p=void 0!==m&&m,d=o?Date.parse(o):null;Object(c.useEffect)((function(){i({is_ready:!1})}),[u,f,d]);var b={marginLeft:-16,marginRight:-16,marginBottom:-16,marginTop:16,padding:16,paddingBottom:8,backgroundColor:p?"#AED581":"#ECEFF1"};return Object(c.createElement)(c.Fragment,null,Object(c.createElement)("div",{style:b},Object(c.createElement)(s.CheckboxControl,{checked:p,disabled:e,label:"I'm ready to start this campaign",onChange:function(t){e||i({is_ready:t})}}),p?ne(o)?Object(c.createElement)("p",null,"As soon as you plan this campaign will be scheduled to be started at ",Object(c.createElement)(ce,{timestamp:d}),"."):Object(c.createElement)("p",null,"As soon as you publish this campaign will be started."):null))},oe=function(e){var t=e.plaintext,n=void 0!==t&&t,r=e.children,i=I(),a=PostToMailchimp.preview.html,o=PostToMailchimp.preview.plaintext;return Object(c.createElement)(s.PanelRow,null,Object(c.createElement)(s.Button,{disabled:i,isSecondary:!0,href:n?o:a,target:"_blank"},r))},ue=function(){var e=R(),t=l()(e,2),n=t[0],r=t[1];return[n,function(e){if(e){var t=ne(e);r(t?e:new Date(re(Date.now())).toISOString())}else r(e)}]},le=function(){var e=I(),t=ue(),n=l()(t,2),r=n[0],i=n[1];return Object(c.createElement)(s.PanelRow,{className:"edit-post-post-schedule"},Object(c.createElement)("span",null,"Schedule"),Object(c.createElement)(s.Dropdown,{position:"bottom left",renderToggle:function(e){e.isOpen;var t=e.onToggle;return Object(c.createElement)(s.Button,{isTertiary:!0,onClick:t},null!==r&&ne(r,60)?Object(c.createElement)(ce,{timestamp:Date.parse(r)}):"Immediately")},contentClassName:"edit-post-post-schedule__dialog",renderContent:function(){return Object(c.createElement)("div",null,Object(c.createElement)(s.DateTimePicker,{currentDate:r,onChange:function(t){e||i(t)},is12Hour:/a(?!\\)/i.test(Object(ee.__experimentalGetSettings)().formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join("")),isInvalidDate:function(t){return e||function(e){var t=new Date,n=60*t.getHours()*60*1e3,r=60*t.getMinutes()*1e3,i=1e3*t.getSeconds(),c=t.getTime()-(n+r+i),a=e.getTime()-c<=-3e5;return a}(t)}}))}}))};function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(){var e,t=I(),n=G(),r=l()(n,2),a=r[0],o=void 0===a?{}:a,u=r[1],f=o.audience_id,b=void 0===f?"":f,g=o.segment_id,O=void 0===g?"":g,j=m(b),v=(e=b,PostToMailchimp.audienceIdsWithEmptySegmentsAllowed.includes(e)),h=function(e){t||u(fe(fe({},o),{},{segment_id:e}))};if(Object(c.useEffect)((function(){if(1!==j.length||v)0===j.length&&""!==O&&h("");else{var e=j[0].id;O!=e&&h(e)}}),[j.length,O]),i()(j)!==i()([])||0===j.length)return null;if(1===j.length&&!v)return Object(c.createElement)(s.TextControl,{label:p(j[0])?"Tag":"Segment",value:j[0].name,readOnly:!0});var E=j.filter(d),y=j.filter(p);return Object(c.createElement)(s.BaseControl,{id:"mailchimp-segment",label:"Segment or tag"},Object(c.createElement)("select",{id:"mailchimp-segment",style:{width:"100%"},value:O||"",onChange:function(e){return h(parseInt(e.target.value))},disabled:t},v?Object(c.createElement)("option",{value:""},"-"):null,Object(c.createElement)("optgroup",{label:"Segments"},E.map((function(e){var t=e.id,n=e.name;return Object(c.createElement)("option",{key:t,value:t},n)}))),Object(c.createElement)("optgroup",{label:"Tags"},y.map((function(e){var t=e.id,n=e.name;return Object(c.createElement)("option",{key:t,value:t},n)})))))},pe=function(){return Object(c.createElement)(s.PanelBody,{title:"Step 1: Configuration",initialOpen:!0},Object(c.createElement)(Y,null),Object(c.createElement)(me,null),Object(c.createElement)(V,null))},de=function(){var e=G();return l()(e,1)[0].id?Object(c.createElement)(s.PanelBody,{title:"Step 2: Test",initialOpen:!1},Object(c.createElement)(oe,null,"HTML Preview"),Object(c.createElement)(oe,{plaintext:!0},"Plaintext Preview"),Object(c.createElement)("hr",null),Object(c.createElement)(X,null),Object(c.createElement)(K,null)):null},be=function(){var e=G();return l()(e,1)[0].id?Object(c.createElement)(s.PanelBody,{title:"Step 3: Deliver",initialOpen:!1},Object(c.createElement)(le,null),Object(c.createElement)(ae,null)):null},ge=function(){return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(pe,null),Object(c.createElement)(de,null),Object(c.createElement)(be,null),Object(c.createElement)(J,null))},Oe=function(e){Object(y.dispatch)("core/notices").createErrorNotice(e)},je=function(){var e,t=G(),n=l()(t,1)[0],r=(e=n.audience_id,f().find((function(t){return t.listId===e}))),i=null!==n.segment_id?function(e,t){return m(e).find((function(e){return e.id===t}))}(n.audience_id,n.segment_id):null;return Object(c.useEffect)((function(){r||Oe("Missing audience with id ".concat(n.audience_id))}),[r]),Object(c.useEffect)((function(){null===n.segment_id||i||Oe("Missing segment with id ".concat(n.segment_id))}),[r]),Object(c.createElement)(c.Fragment,null,Object(c.createElement)(s.TextControl,{label:"Audience",value:r?r.name:"<ERROR: missing audience>",readOnly:!0}),i?Object(c.createElement)(s.TextControl,{label:d(i)?"Segment":"Tag",value:i?i.name:"<ERROR: missing segment>",readOnly:!0}):null)},ve=function(){return Object(c.createElement)("p",null,"This campaign is being sent.")},he=function(){return Object(c.createElement)("p",null,"This campaign was completely delivered.")},Ee=function(e){var t=e.timestamp;return Object(c.createElement)("p",null,"This campaign is scheduled for ",Object(c.createElement)(ce,{timestamp:t}),".")},ye=function(){var e=G(),t=l()(e,2),n=t[0],r=(t[1],I()),i=function(){var e=Object(y.useDispatch)("core/editor"),t=G(),n=l()(t,2),r=(n[0],n[1]);return function(){e.editPost({status:"draft"}),r({unschedule:!0}),e.savePost()}}(),a=function(){var e=Object(y.useDispatch)("core/editor"),t=G(),n=l()(t,2),r=(n[0],n[1]);return function(){e.editPost({status:"draft"}),r({cancel:!0}),e.savePost()}}(),o=(n.cancel,n.schedule),u=Z(n),f=$(n),m=z(n);return Object(c.createElement)(s.PanelBody,null,Object(c.createElement)(je,null),Object(c.createElement)(s.PanelRow,null,u?Object(c.createElement)(ve,null):null,m?Object(c.createElement)(Ee,{timestamp:o}):null,f?Object(c.createElement)(he,null):null),u?Object(c.createElement)(s.Button,{disabled:r,onClick:a,isDestructive:!0},"Cancel campaign"):null,m?Object(c.createElement)(s.Button,{disabled:r,onClick:i,isDestructive:!0},"Unschedule"):null)},Se=function(){var e=f(),t=G(),n=l()(t,1)[0],r=H(n);return e.length<1?Object(c.createElement)(s.PanelBody,null,"Please make sure there is at least one Mailchimp.com audience available. ",Object(c.createElement)("a",{href:PostToMailchimp.settingsUrl},"Goto Settings")):r&&function(e){return z(e)||Z(e)||$(e)}(n)?Object(c.createElement)(ye,null):Object(c.createElement)(ge,null)},Pe=function(e){var t=(new Date).getTime();if(e<=t)return new Date(e);var n=re(t);return e<n?new Date(n):new Date(function(e){return e/6e4%15>7?re(e):ie(e)}(e))},we=function(e){return Object(y.dispatch)("core/editor").editPost({date:e})},Te=null,_e=!1;Object(y.subscribe)((function(){var e=Object(y.select)("core/editor").getEditedPostAttribute("date");if(e){if("auto-draft"===Object(y.select)("core/editor").getCurrentPost().status&&null===Te){var t=b().toISOString();return Te=t,void we(t)}if(Te!==e)if(Te=e,_e)_e=!1;else{var n=Date.parse(e);if(!function(e){var t=(new Date).getTime();return e<=t||e>=re(t)&&function(e){return e/6e4%15==0}(e)}(n)){var r,i=Pe(n),c=te(i.getTime());r="Date was changed to ".concat(c,"  because Mailchimp only supports 15 minutes exact time planning."),Object(y.dispatch)("core/notices").createInfoNotice(r),_e=!0,we(i.toISOString())}}}})),"undefined"===i()(window.PostToMailchimp)&&(window.PostToMailchimp={customConfig:[]}),"undefined"===i()(window.PostToMailchimp.customConfig)&&(window.PostToMailchimp.customConfig=[]);Object(a.registerPlugin)("post-to-mailchimp",{render:function(){return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(o.PluginSidebarMoreMenuItem,{target:"post-to-mailchimp",icon:"email"},"Post to Mailchimp"),Object(c.createElement)(o.PluginSidebar,{name:"post-to-mailchimp",icon:"email",title:"Post to Mailchimp"},Object(c.createElement)(Se,null)))}})}]);