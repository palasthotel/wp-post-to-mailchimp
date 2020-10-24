!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){var r=n(18),i=n(19),c=n(14),a=n(20);e.exports=function(e,t){return r(e)||i(e,t)||c(e,t)||a()}},function(e,t,n){"use strict";n.r(t),n.d(t,"useIsRequesting",(function(){return C})),n.d(t,"useRecentCampaign",(function(){return T})),n.d(t,"useAudience",(function(){return x})),n.d(t,"useSegment",(function(){return I})),n.d(t,"useCampaigns",(function(){return D})),n.d(t,"useTestEmailAddresses",(function(){return R})),n.d(t,"useValidTestEmailAddresses",(function(){return M})),n.d(t,"useSendTestEmails",(function(){return k}));var r=n(1),i=n.n(r),c=n(3),a=n.n(c),o=n(9),u=n.n(o),s=n(7),l=n.n(s),p=n(11),f=n.n(p),m=n(5),d=n(8);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=localStorage.getItem("gutenberg-post-to-mailchimp__test_email_addresses")||"[]",j={isRequesting:!1,campaigns:[],testEmailAddresses:JSON.parse(O).filter(d.a)},v=function(e){return{type:"CAMPAIGNS_FETCH",path:"/post-to-mailchimp/v1/campaigns/".concat(e)}},y=function(e,t){return{type:"CAMPAIGN_TEST",path:"/post-to-mailchimp/v1/campaigns/".concat(e.post_id,"/campaign/").concat(e.id,"/test"),data:{email_addresses:t}}},h=function(e){return{type:"SET_IS_REQUESTING",isRequesting:e}},E={setIsRequesting:h,setCampaigns:function(e){return{type:"SET_CAMPAIGNS",campaigns:e}},setTestEmailAddresses:function(e){return{type:"SET_TEST_EMAIL_ADDRESSES",testEmailAddresses:e}},fetchCampaigns:l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(!0);case 2:return e.next=4,v(t);case 4:return n=e.sent,e.next=7,{type:"SET_CAMPAIGNS",campaigns:n};case 7:return e.abrupt("return",h(!1));case 8:case"end":return e.stop()}}),e)})),sendTestMail:l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(!0);case 2:return e.next=4,y(t,n);case 4:return e.sent,e.abrupt("return",h(!1));case 6:case"end":return e.stop()}}),e)})),sendCampaign:l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(!0);case 2:return e.next=4,n=void 0,{type:"CAMPAIGN_UPDATE",path:"/post-to-mailchimp/v1/campaigns/".concat(t,"/campaign/").concat(n,"/send"),data:{email_addresses:email_addresses}};case 4:return e.sent,e.abrupt("return",h(!1));case 6:case"end":return e.stop()}var n}),e)}))},S="post-to-mailchimp";Object(m.registerStore)(S,{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_REQUESTING":return g(g({},e),{},{isRequesting:t.isRequesting});case"SET_CAMPAIGNS":return g(g({},e),{},{campaigns:t.campaigns});case"SET_TEST_EMAIL_ADDRESSES":return localStorage.setItem("gutenberg-post-to-mailchimp__test_email_addresses",JSON.stringify(t.testEmailAddresses)),g(g({},e),{},{testEmailAddresses:t.testEmailAddresses})}return e},actions:E,selectors:{isRequesting:function(e){return e.isRequesting},getCampaigns:function(e,t){return e.campaigns},getTestEmailAddresses:function(e){return e.testEmailAddresses}},resolvers:{getCampaigns:l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==i()(t)){e.next=2;break}return e.abrupt("return",{type:"none"});case 2:return e.next=4,h(!0);case 4:return e.next=6,v(t);case 6:return n=e.sent,e.next=9,h(!1);case 9:return e.abrupt("return",E.setCampaigns(n));case 10:case"end":return e.stop()}}),e)}))},controls:{CAMPAIGNS_FETCH:function(e){return console.debug("action fetch",e),f()({path:e.path})},CAMPAIGN_TEST:function(e){return console.debug("action test",e),f()({path:e.path,data:e.data,method:"POST"})},CAMPAIGN_SEND:function(e){return console.debug("action send"),f()({path:e.path,method:"POST"})}}});var P=n(0),_=n(6);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(){return Object(m.useSelect)((function(e){return e(S).isRequesting()}),[])},T=function(){var e=Object(m.useSelect)((function(e){return e("core/editor").getEditedPostAttribute("recent_campaign")})),t=Object(m.useDispatch)("core/editor");return[e||{},function(n){t.editPost({recent_campaign:w(w({},e),n)})}]},x=function(){var e=T(),t=a()(e,2),n=t[0],r=t[1];return[n.audience_id,function(e){return r({audience_id:e})}]},I=function(){var e=x(),t=a()(e,1)[0],n=T(),r=a()(n,2),i=r[0],c=r[1],o=Object(_.d)(t),u=i.segment_id;return Object(P.useEffect)((function(){if(!o.find((function(e){return e.id+""==u+""}))){var e=setTimeout((function(){c({segment_id:""})}),600);return function(){return clearTimeout(e)}}}),[t]),[u,function(e){return c({segment_id:e})}]},D=function(){var e=Object(m.useSelect)((function(e){return e("core/editor").getCurrentPost()})).id,t=Object(m.useSelect)((function(t){return t(S).getCampaigns(e)})),n=Object(m.useDispatch)(S);return[t,function(){n.fetchCampaigns(e)}]},R=function(){var e=Object(m.useSelect)((function(e){return e(S).getTestEmailAddresses()})),t=Object(m.useDispatch)(S);return[e,function(e){t.setTestEmailAddresses(e)}]},M=function(){return Object(m.useSelect)((function(e){return e(S).getTestEmailAddresses()})).filter(d.a)},k=function(){var e=M(),t=T(),n=a()(t,1)[0],r=Object(m.useDispatch)(S);return function(){"undefined"!==i()(n)&&e.length>0&&r.sendTestMail(n,e)}}},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a}));var r=function(){return PostToMailchimp.lists},i=function(e){return PostToMailchimp.segments[e]||[]},c=function(){return PostToMailchimp.preview.html},a=function(){return PostToMailchimp.preview.plaintext}},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";n.r(t),n.d(t,"isCampaign",(function(){return c})),n.d(t,"campaignGetAudienceId",(function(){return a})),n.d(t,"campaignGetSegmentId",(function(){return o}));var r=n(1),i=n.n(r),c=function(e){return i()(e)===i()({})&&i()(e.id)===i()(1)},a=function(e){if(i()(e)===i()({})&&i()(e.recipients)===i()({})&&i()(e.recipients.list_id)===i()(""))return e.recipients.list_id},o=function(e){if(i()(e)===i()({})&&i()(e.recipients)===i()({})&&i()(e.recipients.segment_opts)===i()({})&&i()(e.recipients.segment_opts.saved_segment_id)===i()(1))return e.recipients.segment_opts.saved_segment_id}},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){!function(){e.exports=this.wp.date}()},function(e,t){!function(){e.exports=this.wp.editPost}()},function(e,t,n){var r=n(15);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t,n){var r=n(21),i=n(22),c=n(14),a=n(23);e.exports=function(e){return r(e)||i(e)||c(e)||a()}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,c=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw c}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){var r=n(15);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(16),c=n(13),a=n(2),o=n(6),u=n(1),s=n.n(u),l=n(3),p=n.n(l),f=n(4),m=n(10),d=n(8),b=function(){var e=Object(f.useIsRequesting)(),t=Object(f.useRecentCampaign)(),n=p()(t,2),i=n[0],c=n[1];return Object(m.isCampaign)(i)?Object(r.createElement)(a.Button,{disabled:e,isDestructive:!0,onClick:function(){return c({delete:!0})}},"Delete"):null},g=function(){var e=Object(f.useIsRequesting)(),t=Object(f.useRecentCampaign)(),n=p()(t,1)[0],i=Object(f.useTestEmailAddresses)(),c=p()(i,1)[0],o=Object(f.useSendTestEmails)();if(!Object(m.isCampaign)(n))return null;var u=c.filter(d.a),s=e||0==u.length;return Object(r.createElement)(a.Button,{disabled:s,isSecondary:!0,onClick:o},"Send test")},O=n(4).useRecentCampaign,j=n(10).isCampaign,v=function(){var e=O(),t=p()(e,1)[0];return j(t)?null:Object(r.createElement)("p",null,"You need to save the post to proceed to next steps.")},y=n(17),h=n.n(y),E=function(){var e=Object(o.a)(),t=Object(f.useRecentCampaign)(),n=p()(t,2),i=n[0],c=n[1],u=i.audience_id,s=void 0===u?"":u,l=function(e){c({audience_id:e})};if(Object(r.useEffect)((function(){if(1===e.length){var t=e[0].listId;s!=t&&l(t)}}),[e.length,s]),1===e.length){var m=e.find((function(e){return s===e.listId}));return Object(r.createElement)(a.TextControl,{label:"Audience",value:m?m.name:"",readOnly:!0})}var d=[{value:"",label:"- Choose audience -"}].concat(h()(e.map((function(e){return{value:e.listId,label:e.name}}))));return Object(r.createElement)(a.SelectControl,{label:"Audience",value:s||"",onChange:l,options:d})},S=function(){var e=Object(f.useTestEmailAddresses)(),t=p()(e,2),n=t[0],i=t[1];return Object(r.createElement)(a.PanelRow,null,Object(r.createElement)(a.FormTokenField,{label:"Email addresses",value:n.map((function(e){return Object(d.a)(e)?e:{value:e,status:"error"}})),onChange:function(e){i(e.map((function(e){return s()(e)===s()("")?e:e.value})))}}))},P=n(12),_=function(){var e=Object(f.useRecentCampaign)(),t=p()(e,2),n=t[0],i=t[1],c=n.schedule,o=void 0===c?(new Date).getTime():c,u=new Date(o),s=Object(P.__experimentalGetSettings)(),l=/a(?!\\)/i.test(s.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return Object(r.createElement)(a.DateTimePicker,{currentDate:u,onChange:function(e){i(e?{schedule:Date.parse(e)}:{schedule:(new Date).getTime()})},is12Hour:l})},A=function(){var e=Object(f.useRecentCampaign)(),t=p()(e,2),n=t[0],i=t[1],c=n.schedule,o=n.audience_id,u=n.segment_id,l=n.isReady,m=void 0!==l&&l,d="undefined"!==s()(c)&&null!==c;Object(r.useEffect)((function(){i({isReady:!1})}),[o,u,c]);var b={marginLeft:-16,marginRight:-16,marginBottom:-16,padding:16,paddingBottom:8,backgroundColor:m?"#AED581":"#ECEFF1"},g=Object(P.__experimentalGetSettings)(),O=c?Object(P.date)(g.formats.datetime,c):"";return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.ToggleControl,{checked:d,label:"Schedule campaign",onChange:function(e){i(e?{schedule:(new Date).getTime()}:{schedule:void 0})}}),d?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("hr",null),Object(r.createElement)(_,null)):null,Object(r.createElement)("div",{style:b},Object(r.createElement)(a.CheckboxControl,{checked:m,label:"I'm ready to start this campaign",onChange:function(e){i({isReady:e})}}),m?d?Object(r.createElement)("p",null,"As soon as you save this campaign will be scheduled to be started at ",O,"."):Object(r.createElement)("p",null,"As soon as you save this campaign will be started."):null))},w=function(e){var t=e.plaintext,n=void 0!==t&&t,i=e.children,c=Object(o.b)(),u=Object(o.c)();return Object(r.createElement)(a.PanelRow,null,Object(r.createElement)(a.Button,{isSecondary:!0,href:n?u:c,target:"_blank"},i))},C=n(9),T=n.n(C);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){T()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(){var e=Object(f.useRecentCampaign)(),t=p()(e,2),n=t[0],i=void 0===n?{}:n,c=t[1],u=i.audience_id,l=void 0===u?"":u,m=i.segment_id,d=void 0===m?"":m,b=Object(o.d)(l);if(s()(b)!==s()([])||0===b.length)return null;var g=b.filter((function(e){return"static"!==e.type})),O=b.filter((function(e){return"static"===e.type}));return Object(r.createElement)(a.BaseControl,{id:"mailchimp-segment",label:"Segment or tag"},Object(r.createElement)("select",{id:"mailchimp-segment",style:{width:"100%"},value:d||"",onChange:function(e){return t=parseInt(e.target.value),void c(I(I({},i),{},{segment_id:t}));var t}},Object(r.createElement)("option",{value:""},"-"),Object(r.createElement)("optgroup",{label:"Segments"},g.map((function(e){var t=e.id,n=e.name;return Object(r.createElement)("option",{key:t,value:t},n)}))),Object(r.createElement)("optgroup",{label:"Tags"},O.map((function(e){var t=e.id,n=e.name;return Object(r.createElement)("option",{key:t,value:t},n)})))))},R=function(){return Object(r.createElement)(a.PanelBody,{title:"Step 1: Configure",initialOpen:!0},Object(r.createElement)(E,null),Object(r.createElement)(D,null))},M=function(){var e=Object(f.useRecentCampaign)();return p()(e,1)[0].id?Object(r.createElement)(a.PanelBody,{title:"Step 2: Test",initialOpen:!1},Object(r.createElement)(w,null,"HTML Preview"),Object(r.createElement)(w,{plaintext:!0},"Plaintext Preview"),Object(r.createElement)("hr",null),Object(r.createElement)(S,null),Object(r.createElement)(g,null)):null},k=function(){var e=Object(f.useRecentCampaign)();return p()(e,1)[0].id?Object(r.createElement)(a.PanelBody,{title:"Step 3: Deliver",initialOpen:!1},Object(r.createElement)(A,null)):null},G=function(){return Object(o.a)().length<1?Object(r.createElement)(a.PanelBody,null,"Please make sure there is at least one Mailchimp.com audience available."):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(R,null),Object(r.createElement)(M,null),Object(r.createElement)(k,null),Object(r.createElement)(a.PanelBody,null,Object(r.createElement)(v,null),Object(r.createElement)(b,null)),Object(r.createElement)(a.PanelBody,{title:"History",initialOpen:!1},Object(r.createElement)("p",null,"Old campaigns")))};Object(i.registerPlugin)("post-to-mailchimp",{render:function(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(c.PluginSidebarMoreMenuItem,{target:"post-to-mailchimp",icon:"email"},"Post to Mailchimp"),Object(r.createElement)(c.PluginSidebar,{name:"post-to-mailchimp",icon:"email",title:"Post to Mailchimp"},Object(r.createElement)(G,null)))}})}]);