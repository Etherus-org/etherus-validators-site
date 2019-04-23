(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Tooltip_Root__2mKQv","Tooltip":"Tooltip_Tooltip__3I5eR"};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Table_Root__1s8Ss","RootIsDisabled":"Table_RootIsDisabled__14x15","RootIsFavorite":"Table_RootIsFavorite__2WNWH"};

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isPrivateKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isUint; });
/* unused harmony export isUrl */
/* unused harmony export matches */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return required; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
var isHash=function isHash(){var length=arguments.length>0&&arguments[0]!==undefined?arguments[0]:40;var message=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'Must be like a hex (32 Bytes)';return function(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';return{message:message,isValid:new RegExp("^(0[xX]{1})?[a-fA-F\\d]{".concat(length,"}$")).test(value)};};};var isHost=function isHost(){var message=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'Incorrect value! Must be like host or IP!';return function(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';return{message:message,isValid:!value||new RegExp('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$').test(value)||new RegExp('^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$').test(value)};};};var isNumber=function isNumber(){var message=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'Must be a number!';return function(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';return{message:message,isValid:/^[0-9.]*$/.test(value)};};};var isPrivateKey=function isPrivateKey(){var message=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'Incorrect private key';return function(value){var isValid=false;try{var json=JSON.parse(value);if(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(json,'address')&&Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(json,'pub_key')&&Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(json,'priv_key')&&Buffer.from(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(json,'pub_key.value'),'base64').length===32&&Buffer.from(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(json,'priv_key.value'),'base64').length===64){isValid=true;}}catch(e){console.error(e);}return{isValid:isValid,message:message};};};var isUint=function isUint(){var bytes=arguments.length>0&&arguments[0]!==undefined?arguments[0]:8;var message=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'Must be like a uint';return function(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';return{message:"".concat(message).concat(bytes),isValid:value.toString().length<=bytes/4};};};var isUrl=function isUrl(){var message=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'Incorrect URL!';return function(value){return{message:message,isValid:value&&/^http:\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)*$/.test(value)};};};var matches=function matches(regex){var message=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'Incorrect value!';return function(value){return{message:message,isValid:value&&regex.test(value)};};};var max=function max(_max){var message=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'Max value: %d!';return function(value){return{message:message.replace('%d',_max),isValid:!value||parseFloat(value,10)<=_max};};};var min=function min(_min){var message=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'Min value: %d!';return function(value){return{message:message.replace('%d',_min),isValid:!value||parseFloat(value,10)>=_min};};};var required=function required(){var message=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'Field is required!';return function(value){return{message:message,isValid:typeof value==='number'||!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(value)};};};/* harmony default export */ __webpack_exports__["a"] = (function(fields){return function(values,props){var errors={};Object.keys(fields).forEach(function(key){[].concat(fields[key]).forEach(function(validator){var res=validator(values[key],props);if(res&&!errors[key]&&!res.isValid){errors[key]=res.message||true;}});});return errors;};});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14).Buffer))

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Actions":"Common_Actions__2KkrQ","ActionsConsole":"Common_ActionsConsole__1GIL4","Alert":"Common_Alert__1pTx6","Console":"Common_Console__OJFTq","Container":"Common_Container__qvWDW","ContainerConsole":"Common_ContainerConsole__283Nd","Error":"Common_Error__3qHWz","Loading":"Common_Loading__1S17p","MessageDate":"Common_MessageDate__3DVVg","MessagePub":"Common_MessagePub__2JLbi","MessageText":"Common_MessageText__3Ls9V","MessageTextIsFailure":"Common_MessageTextIsFailure__1W_5Y","MessageTextIsSuccess":"Common_MessageTextIsSuccess__1vnpD","NodeGroup":"Common_NodeGroup__2PFDq","Progress":"Common_Progress__2a3PJ","Retry":"Common_Retry__1ERiA"};

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Error":"Form_Error__FAKdL"};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"App_Root__3UUPN","Wrapper":"App_Wrapper__VY8Wp"};

/***/ }),

/***/ 152:
/***/ (function(module) {

module.exports = [{"constant":true,"inputs":[{"name":"vPub","type":"bytes32"}],"name":"getNodeAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"c_MIN_DEPOSIT_INCREMENT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCompactedValidators","outputs":[{"name":"ValidatorsCompacted","type":"bytes32[]"},{"name":"ValidatorsPubKeys","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"vPub","type":"bytes32"}],"name":"addDeposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"vPub","type":"bytes32"},{"name":"nodeAddr","type":"address"},{"name":"receiver","type":"address"}],"name":"addInitialDeposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"vPub","type":"bytes32"}],"name":"isPaused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"vPub","type":"bytes32"},{"name":"vFrom","type":"bytes32"},{"name":"cause","type":"uint8"},{"name":"punishValue","type":"uint96"}],"name":"pauseValidation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getActiveCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"vPub","type":"bytes32"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"vPub","type":"bytes32"}],"name":"hasDeposit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"vPub","type":"bytes32"}],"name":"resumeValidation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"vPub","type":"bytes32"}],"name":"getNodeReceiver","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getActiveCompactedValidators","outputs":[{"name":"ValidatorsCompacted","type":"bytes32[]"},{"name":"ValidatorsPubKeys","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"c_MIN_DEPOSIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"vPub","type":"bytes32"}],"name":"getValidator","outputs":[{"name":"nodeAddr","type":"address"},{"name":"deposit","type":"uint96"},{"name":"pauseBlockNumber","type":"uint48"},{"name":"pauseCause","type":"uint8"},{"name":"punishValue","type":"uint96"},{"name":"receiver","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"min_dep","type":"uint256"},{"name":"min_dep_inc","type":"uint256"}],"name":"setDepositBounds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"all","type":"bool"}],"name":"enablePunishers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"vPub","type":"bytes32"},{"indexed":false,"name":"deposit","type":"uint96"}],"name":"ValidatorUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"vPub","type":"bytes32"},{"indexed":false,"name":"cause","type":"uint8"}],"name":"ValidatorRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Stat_Root__15gql","Label":"Stat_Label__uc_VL","List":"Stat_List__YRpkl","ValueColorAlert":"Stat_ValueColorAlert__3wtqO","ValueColorDanger":"Stat_ValueColorDanger__mKuYu","ValueColorPrimary":"Stat_ValueColorPrimary__3JBI0","ValueColorSuccess":"Stat_ValueColorSuccess__3m4Ja"};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Field_Root__3biek","RootColorError":"Field_RootColorError__kzNqp","Text":"Field_Text__1LKbQ","RootColorSuccess":"Field_RootColorSuccess__2zARH","RootIsDisabled":"Field_RootIsDisabled__1_lJL","RootVariantHash":"Field_RootVariantHash__2j6A0","Copy":"Field_Copy__2P4So","Health":"Field_Health__2oWTf","HealthBar":"Field_HealthBar__UbQTT","HealthIndex":"Field_HealthIndex__ybrS9","Icon":"Field_Icon__3Bt6K","Word":"Field_Word__lQuHD","WordVariantGreen":"Field_WordVariantGreen__3A1ak","WordVariantLight":"Field_WordVariantLight__kVASF","WordVariantOrange":"Field_WordVariantOrange__3cvTv","WordVariantRed":"Field_WordVariantRed__1CsYh","WordVariantYellow":"Field_WordVariantYellow__NtGl3"};

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Table_Root__1Dcze"};

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Item_Root__3bpiM"};

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/step-1.acd03576.png";

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/step-2.a2a7d29d.png";

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Button_Root__3UoPz","RootColorDanger":"Button_RootColorDanger__2CsmL","Content":"Button_Content__b0cux","RootColorPrimary":"Button_RootColorPrimary__N7WI4","RootColorSecondary":"Button_RootColorSecondary__21qxs","RootColorSuccess":"Button_RootColorSuccess__1-3FA","RootColorGradientGreen":"Button_RootColorGradientGreen__3tRVS","RootColorGradientPurple":"Button_RootColorGradientPurple__GLulx","RootGradientGreen":"Button_RootGradientGreen__2cMLf","Icon":"Button_Icon__1PUvK","RootGradientOrange":"Button_RootGradientOrange__Yt9-J","RootGradientPurple":"Button_RootGradientPurple__2Oh2l","RootVariantFilled":"Button_RootVariantFilled__eYVK0","RootVariantFull":"Button_RootVariantFull__29XyY","RootVariantFullWidth":"Button_RootVariantFullWidth__3sPDP","RootVariantIcon":"Button_RootVariantIcon__1JnfL"};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Actions_Root__1JP0c","ButtonVariantDeposit":"Actions_ButtonVariantDeposit__mcHhb","Icon":"Actions_Icon__3JKX5","ButtonVariantPause":"Actions_ButtonVariantPause__185ha","ButtonVariantPlay":"Actions_ButtonVariantPlay__1Armj","ButtonVariantWithdraw":"Actions_ButtonVariantWithdraw__OZKsj"};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Select_Root__1wWeX","RootIsEmpty":"Select_RootIsEmpty__2_Dnc","Icon":"Select_Icon__2qACB","RootIsFocused":"Select_RootIsFocused__1Wotl","Container":"Select_Container__16YRY","RootIsMultiple":"Select_RootIsMultiple__2-6YR","Input":"Select_Input__1ld2F","Control":"Select_Control__2tUnw","Dropdown":"Select_Dropdown__3ADiy","List":"Select_List__3aZ5N","Option":"Select_Option__2qcmX","OptionDelete":"Select_OptionDelete__1tjHC","OptionIcon":"Select_OptionIcon__1bYAY"};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Typography_Root__1eH5O","RootColorAlert":"Typography_RootColorAlert__3hwLc","RootColorDanger":"Typography_RootColorDanger__1-dWT","RootColorDark":"Typography_RootColorDark__1k3L-","RootColorLight":"Typography_RootColorLight__1whT1","RootColorLighter":"Typography_RootColorLighter__1OKC1","RootColorMedium":"Typography_RootColorMedium__1tsxb","RootColorPrimary":"Typography_RootColorPrimary__3Al8c","RootColorSuccess":"Typography_RootColorSuccess__2hQZu","RootNowrap":"Typography_RootNowrap__1niL7","RootVariantH1":"Typography_RootVariantH1__3nKmJ","RootVariantH2":"Typography_RootVariantH2__3TTGW","RootVariantH3":"Typography_RootVariantH3__Ncurq","RootVariantH4":"Typography_RootVariantH4__a1vXQ","RootVariantH5":"Typography_RootVariantH5__5PMd5","RootVariantH6":"Typography_RootVariantH6__Afx3U","RootVariantBody1":"Typography_RootVariantBody1__2EEBU","RootVariantBody2":"Typography_RootVariantBody2__1LH3A","RootVariantButton":"Typography_RootVariantButton__2tMs_","RootVariantCaption":"Typography_RootVariantCaption__2SAZe","RootVariantOverline":"Typography_RootVariantOverline__1-kGP","RootVariantSubtitle1":"Typography_RootVariantSubtitle1__2WGE3","RootVariantSubtitle2":"Typography_RootVariantSubtitle2__3M96g"};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Progress_Root__1k5De","RootColorPrimary":"Progress_RootColorPrimary__2SH6-","Circle":"Progress_Circle__jf9fY","Line":"Progress_Line__aESni","RootColorSuccess":"Progress_RootColorSuccess__3N0OK","RootVariantLinear":"Progress_RootVariantLinear__Wtix5","Progress":"Progress_Progress__3mzis","RootVariantIndeterminate":"Progress_RootVariantIndeterminate__1EpjN","progressCircularDash":"Progress_progressCircularDash__3kNHE","RootVariantCircle":"Progress_RootVariantCircle__3jb_0","progressCircularRotate":"Progress_progressCircularRotate__RT2rm","progressLinear":"Progress_progressLinear__2IBfa"};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Validators_Root__1lOjo","RootIsConnected":"Validators_RootIsConnected__3c3eM","Status":"Validators_Status__3iCm1","RootIsOwner":"Validators_RootIsOwner__2jlQm","Connecting":"Validators_Connecting__3CWO0","Header":"Validators_Header__1-yDr","HeaderRight":"Validators_HeaderRight__1LqmW","Hint":"Validators_Hint__Hf5lS","List":"Validators_List__b5LW9","Progress":"Validators_Progress__HXOP_"};

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var color_namespaceObject = {};
__webpack_require__.r(color_namespaceObject);
__webpack_require__.d(color_namespaceObject, "ALERT", function() { return ALERT; });
__webpack_require__.d(color_namespaceObject, "DANGER", function() { return DANGER; });
__webpack_require__.d(color_namespaceObject, "PRIMARY", function() { return PRIMARY; });
__webpack_require__.d(color_namespaceObject, "SECONDARY", function() { return SECONDARY; });
__webpack_require__.d(color_namespaceObject, "SUCCESS", function() { return SUCCESS; });
__webpack_require__.d(color_namespaceObject, "WHITE", function() { return WHITE; });
var gradient_namespaceObject = {};
__webpack_require__.r(gradient_namespaceObject);
__webpack_require__.d(gradient_namespaceObject, "BLUE", function() { return BLUE; });
__webpack_require__.d(gradient_namespaceObject, "BLUE_PURPLE", function() { return BLUE_PURPLE; });
__webpack_require__.d(gradient_namespaceObject, "GREEN", function() { return GREEN; });
__webpack_require__.d(gradient_namespaceObject, "ORANGE", function() { return ORANGE; });
__webpack_require__.d(gradient_namespaceObject, "PURPLE", function() { return PURPLE; });
__webpack_require__.d(gradient_namespaceObject, "RED", function() { return RED; });
var schema_namespaceObject = {};
__webpack_require__.r(schema_namespaceObject);
__webpack_require__.d(schema_namespaceObject, "validator", function() { return schema_validator; });

// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 3 modules
var esm_history = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(44);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 15 modules
var es = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Router.js + 1 modules
var Router = __webpack_require__(566);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Route.js + 1 modules
var Route = __webpack_require__(568);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Switch.js + 1 modules
var Switch = __webpack_require__(567);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/recompose/dist/Recompose.esm.js
var Recompose_esm = __webpack_require__(4);

// CONCATENATED MODULE: ./src/api/config.js
var config={'development':{CONTRACT_ADDRESS:'0x93275283bf79d0f3a4521b006b6504768fc38d9a',MIN_DEPOSIT:0.25,MIN_DEPOSIT_INCREMENT:0.1,NETWORK_ID:'4',SYMBOL:'ETH',URL:'https://rinkeby.infura.io/v3/5915e2ed5f234c2aba3dfcb23b8f4337'},'production':{CONTRACT_ADDRESS:'0x0000000000000000000000000000000000000fff',MIN_DEPOSIT:2500,MIN_DEPOSIT_INCREMENT:10,NETWORK_ID:'32019',SYMBOL:'ETR',URL:'wss://rpc.etherus.org'}};var config_getConfig=function getConfig(){return Object(lodash["get"])(config,'production');};// process.env.NODE_ENV);
var config_getContractAddress=function getContractAddress(){return Object(lodash["get"])(config,"".concat("production",".CONTRACT_ADDRESS"));};var config_getNetworkId=function getNetworkId(){return Object(lodash["get"])(config,"".concat("production",".NETWORK_ID"));};var config_getUrl=function getUrl(){return Object(lodash["get"])(config,"".concat("production",".URL"));};/* harmony default export */ var api_config = (config_getConfig());
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(21);

// CONCATENATED MODULE: ./src/styles/color.js
var ALERT='alert';var DANGER='danger';var PRIMARY='primary';var SECONDARY='secondary';var SUCCESS='success';var WHITE='white';
// CONCATENATED MODULE: ./src/styles/gradient.js
var BLUE='gradientBlue';var BLUE_PURPLE='gradientBluePurple';var GREEN='gradientGreen';var ORANGE='gradientOrange';var PURPLE='gradientPurple';var RED='gradientRed';
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(107);

// CONCATENATED MODULE: ./src/styles/components/Typography/utils/generateHeadlineVariants.js
/* harmony default export */ var generateHeadlineVariants = (function(styles){var variants={};Object(toConsumableArray["a" /* default */])(new Array(6)).forEach(function(item,index){var variant=index+1;variants["H".concat(variant)]={className:styles["RootVariantH".concat(variant)],component:"h".concat(variant),toValue:function toValue(){return"h".concat(variant);}};});return variants;});
// EXTERNAL MODULE: ./src/styles/components/Typography/Typography.scss
var Typography_Typography = __webpack_require__(38);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_Typography);

// CONCATENATED MODULE: ./src/styles/components/Typography/Typography.js
// Utils
var COLOR={DANGER:'danger',DARK:'dark',LIGHT:'light',LIGHTER:'lighter',MEDIUM:'medium',PRIMARY:'primary',SUCCESS:'success',WARNING:'warning'};var VARIANT=Object(objectSpread["a" /* default */])({},generateHeadlineVariants(Typography_default.a),{BODY1:{className:Typography_default.a.RootVariantBody1,component:'div',toValue:function toValue(){return'body1';}},BODY2:{className:Typography_default.a.RootVariantBody2,component:'div',toValue:function toValue(){return'body2';}},BUTTON:{className:Typography_default.a.RootVariantButton,component:'div',toValue:function toValue(){return'button';}},CAPTION:{className:Typography_default.a.RootVariantCaption,component:'div',toValue:function toValue(){return'caption';}},OVERLINE:{className:Typography_default.a.RootVariantOverline,component:'div',toValue:function toValue(){return'overline';}},SUBTITLE1:{className:Typography_default.a.RootVariantSubtitle1,component:'div',toValue:function toValue(){return'subtitle1';}},SUBTITLE2:{className:Typography_default.a.RootVariantSubtitle2,component:'div',toValue:function toValue(){return'subtitle2';}}});var Typography_Typography_Typography=function Typography(_ref){var children=_ref.children,classNameProp=_ref.className,color=_ref.color,_ref$component=_ref.component,component=_ref$component===void 0?'div':_ref$component,_ref$noWrap=_ref.noWrap,noWrap=_ref$noWrap===void 0?false:_ref$noWrap,style=_ref.style,_ref$variant=_ref.variant,variant=_ref$variant===void 0?VARIANT.BODY1:_ref$variant,props=Object(objectWithoutProperties["a" /* default */])(_ref,["children","className","color","component","noWrap","style","variant"]);var className=classnames_default()(classNameProp,Typography_default.a.Root,variant.className,// styles[`RootColor${capitalize(color)}`],
Object(defineProperty["a" /* default */])({},Typography_default.a.RootNowrap,!!noWrap));var Component=component||Object(lodash["get"])(variant,'component');return react_default.a.createElement(Component,Object.assign({},props,{className:className,style:style}),children);};Typography_Typography_Typography.COLOR=COLOR;Typography_Typography_Typography.VARIANT=VARIANT;/* harmony default export */ var components_Typography_Typography = (Typography_Typography_Typography);
// CONCATENATED MODULE: ./src/styles/components/Typography/index.js

// CONCATENATED MODULE: ./src/styles/index.js

// EXTERNAL MODULE: ./src/components/Button.scss
var components_Button = __webpack_require__(27);
var Button_default = /*#__PURE__*/__webpack_require__.n(components_Button);

// CONCATENATED MODULE: ./src/components/Button.js
// Styles
var Button_Button=function Button(_ref){var _classNames,_classNames2;var children=_ref.children,className=_ref.className,_ref$classNames=_ref.classNames,rootClassName=_ref$classNames.root,contentClassName=_ref$classNames.content,iconClassName=_ref$classNames.icon,color=_ref.color,fullWidth=_ref.fullWidth,handleClick=_ref.handleClick,icon=_ref.icon,registerButton=_ref.registerButton,removeAutoBlur=_ref.removeAutoBlur,_ref$type=_ref.type,type=_ref$type===void 0?'button':_ref$type,props=Object(objectWithoutProperties["a" /* default */])(_ref,["children","className","classNames","color","fullWidth","handleClick","icon","registerButton","removeAutoBlur","type"]);var rootClassNames=classnames_default()(rootClassName||className,Button_default.a.Root,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,Button_default.a.RootColorAlert,color===color_namespaceObject.ALERT),Object(defineProperty["a" /* default */])(_classNames,Button_default.a.RootColorDanger,color===color_namespaceObject.DANGER),Object(defineProperty["a" /* default */])(_classNames,Button_default.a.RootColorPrimary,color===color_namespaceObject.PRIMARY),Object(defineProperty["a" /* default */])(_classNames,Button_default.a.RootColorSecondary,color===color_namespaceObject.SECONDARY),Object(defineProperty["a" /* default */])(_classNames,Button_default.a.RootColorSuccess,color===color_namespaceObject.SUCCESS),Object(defineProperty["a" /* default */])(_classNames,Button_default.a.RootGradientGreen,color===gradient_namespaceObject.GREEN),Object(defineProperty["a" /* default */])(_classNames,Button_default.a.RootGradientOrange,color===gradient_namespaceObject.ORANGE),Object(defineProperty["a" /* default */])(_classNames,Button_default.a.RootGradientPurple,color===gradient_namespaceObject.PURPLE),_classNames),(_classNames2={},Object(defineProperty["a" /* default */])(_classNames2,Button_default.a.RootVariantFilled,!!children),Object(defineProperty["a" /* default */])(_classNames2,Button_default.a.RootVariantIcon,icon&&!children),Object(defineProperty["a" /* default */])(_classNames2,Button_default.a.RootVariantFull,icon&&children),Object(defineProperty["a" /* default */])(_classNames2,Button_default.a.RootVariantFullWidth,!!fullWidth),_classNames2));var contentClassNames=classnames_default()(contentClassName,Button_default.a.Content);var iconClassNames=classnames_default()(iconClassName,Button_default.a.Icon,icon);return react_default.a.createElement("button",Object.assign({},props,{className:rootClassNames,onClick:handleClick,ref:registerButton,type:type}),icon&&react_default.a.createElement("i",{className:iconClassNames}),children&&react_default.a.createElement(components_Typography_Typography,{className:contentClassNames,variant:components_Typography_Typography.VARIANT.BUTTON},children));};Button_Button.defaultProps={classNames:{}};var ComposedButton=Object(Recompose_esm["a" /* compose */])(Object(Recompose_esm["d" /* withProps */])(function(_ref2){var removeAutoBlur=_ref2.removeAutoBlur;return{removeAutoBlur:removeAutoBlur!==undefined?removeAutoBlur:true};}),Object(Recompose_esm["c" /* withHandlers */])(function(){var buttonRef;return{handleClick:function handleClick(_ref3){var onClick=_ref3.onClick,removeAutoBlur=_ref3.removeAutoBlur;return function(event){removeAutoBlur&&buttonRef.blur();onClick&&onClick(event);};},registerButton:function registerButton(){return function(node){buttonRef=node;};}};}))(Button_Button);ComposedButton.COLOR={GRADIENT:{}};/* harmony default export */ var src_components_Button = (ComposedButton);
// EXTERNAL MODULE: ./src/components/Progress.scss
var components_Progress = __webpack_require__(39);
var Progress_default = /*#__PURE__*/__webpack_require__.n(components_Progress);

// CONCATENATED MODULE: ./src/components/Progress.js
// Styles
var Progress_VARIANT={CIRCLE:'circle',LINEAR:'linear'};var Progress_Progress=function Progress(_ref){var _classNames;var className=_ref.className,_ref$classNames=_ref.classNames;_ref$classNames=_ref$classNames===void 0?{}:_ref$classNames;var rootClassName=_ref$classNames.root,circleClassName=_ref$classNames.circle,lineClassName=_ref$classNames.line,progressClassName=_ref$classNames.progress,_ref$color=_ref.color,color=_ref$color===void 0?color_namespaceObject.PRIMARY:_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?40:_ref$size,value=_ref.value,_ref$variant=_ref.variant,variant=_ref$variant===void 0?Progress_VARIANT.CIRCLE:_ref$variant;var rootClassNames=classnames_default()(className,rootClassName,Progress_default.a.Root,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,Progress_default.a.RootColorPrimary,color===color_namespaceObject.PRIMARY),Object(defineProperty["a" /* default */])(_classNames,Progress_default.a.RootColorSuccess,color===color_namespaceObject.SUCCESS),Object(defineProperty["a" /* default */])(_classNames,Progress_default.a.RootVariantCircle,variant===Progress_VARIANT.CIRCLE),Object(defineProperty["a" /* default */])(_classNames,Progress_default.a.RootVariantLinear,variant===Progress_VARIANT.LINEAR),Object(defineProperty["a" /* default */])(_classNames,Progress_default.a.RootVariantIndeterminate,!value),_classNames));var circleClassNames=classnames_default()(circleClassName,Progress_default.a.Circle);var lineClassNames=classnames_default()(lineClassName,Progress_default.a.Line);var progressClassNames=classnames_default()(progressClassName,Progress_default.a.Progress);var displaySize=size+size/10;return react_default.a.createElement("div",{className:rootClassNames},react_default.a.createElement("div",{className:progressClassNames,style:variant===Progress_VARIANT.CIRCLE?{height:displaySize,width:displaySize}:null},variant===Progress_VARIANT.CIRCLE&&react_default.a.createElement("svg",{className:Progress_default.a.Svg,viewBox:"".concat(displaySize/2," ").concat(displaySize/2," ").concat(displaySize," ").concat(displaySize)},react_default.a.createElement("circle",{className:circleClassNames,cx:displaySize,cy:displaySize,fill:"none",r:size/2,strokeWidth:size/10})),variant===Progress_VARIANT.LINEAR&&react_default.a.createElement("div",{className:lineClassNames,style:{width:"".concat(Math.max(0,Math.min(100,value)),"%")}})));};Progress_Progress.VARIANT=Progress_VARIANT;/* harmony default export */ var src_components_Progress = (Progress_Progress);
// EXTERNAL MODULE: ./node_modules/react-table/es/index.js + 6 modules
var react_table_es = __webpack_require__(249);

// EXTERNAL MODULE: ./src/components/Table.scss
var components_Table = __webpack_require__(238);
var Table_default = /*#__PURE__*/__webpack_require__.n(components_Table);

// CONCATENATED MODULE: ./src/components/Table.js
// Styles
var Table_Table=function Table(_ref){var className=_ref.className,props=Object(objectWithoutProperties["a" /* default */])(_ref,["className"]);var rootClassNames=classnames_default()(className,Table_default.a.Root);return react_default.a.createElement("div",{className:rootClassNames},react_default.a.createElement(react_table_es["a" /* default */],props));};/* harmony default export */ var src_components_Table = (Table_Table);
// EXTERNAL MODULE: ./src/components/Tooltip.scss
var components_Tooltip = __webpack_require__(108);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(components_Tooltip);

// CONCATENATED MODULE: ./src/components/Tooltip.js
// Styles
var Tooltip_Tooltip=function Tooltip(_ref){var children=_ref.children,classNameProp=_ref.className,_ref$classNames=_ref.classNames,rootClassName=_ref$classNames.root,containerClassName=_ref$classNames.container,tooltipClassName=_ref$classNames.tooltip,_ref$component=_ref.component,Component=_ref$component===void 0?'div':_ref$component,title=_ref.title;var rootClassNames=classnames_default()(classNameProp||rootClassName,Tooltip_default.a.Root);var containerClassNames=classnames_default()(containerClassName,Tooltip_default.a.Container);var tooltipClassNames=classnames_default()(tooltipClassName,Tooltip_default.a.Tooltip);return react_default.a.createElement(Component,{className:rootClassNames},react_default.a.createElement(components_Typography_Typography,{className:tooltipClassNames,noWrap:true,variant:components_Typography_Typography.VARIANT.CAPTION},title),react_default.a.createElement("div",{className:containerClassNames},children));};Tooltip_Tooltip.defaultProps={classNames:{}};/* harmony default export */ var src_components_Tooltip = (Tooltip_Tooltip);
// CONCATENATED MODULE: ./src/entities/validators/constants.js
var PAUSE_NOT_PAUSED=0;var PAUSE_CAUSE_VOLUNTARILY=1;var PAUSE_CAUSE_UNTIL_BLOCK=2;var PAUSE_CAUSE_UNTIL_FINE=3;var PAUSE_CAUSE_PUNISHMENT=4;
// CONCATENATED MODULE: ./src/entities/validators/types.js
var CREATE_VALIDATOR_REQUEST='ENTITIES/VALIDATORS/CREATE_VALIDATOR_REQUEST';var CREATE_VALIDATOR_SUCCESS='ENTITIES/VALIDATORS/CREATE_VALIDATOR_SUCCESS';var CREATE_VALIDATOR_FAILURE='ENTITIES/VALIDATORS/CREATE_VALIDATOR_FAILURE';var DEPOSIT_VALIDATOR_REQUEST='ENTITIES/VALIDATORS/DEPOSIT_VALIDATOR_REQUEST';var DEPOSIT_VALIDATOR_SUCCESS='ENTITIES/VALIDATORS/DEPOSIT_VALIDATOR_SUCCESS';var DEPOSIT_VALIDATOR_FAILURE='ENTITIES/VALIDATORS/DEPOSIT_VALIDATOR_FAILURE';var FETCH_VALIDATOR_REQUEST='ENTITIES/VALIDATORS/FETCH_VALIDATOR_REQUEST';var FETCH_VALIDATOR_SUCCESS='ENTITIES/VALIDATORS/FETCH_VALIDATOR_SUCCESS';var FETCH_VALIDATOR_FAILURE='ENTITIES/VALIDATORS/FETCH_VALIDATOR_FAILURE';var FETCH_VALIDATORS_REQUEST='ENTITIES/VALIDATORS/FETCH_VALIDATORS_REQUEST';var FETCH_VALIDATORS_SUCCESS='ENTITIES/VALIDATORS/FETCH_VALIDATORS_SUCCESS';var FETCH_VALIDATORS_FAILURE='ENTITIES/VALIDATORS/FETCH_VALIDATORS_FAILURE';var PAUSE_VALIDATOR_REQUEST='ENTITIES/VALIDATORS/PAUSE_VALIDATOR_REQUEST';var PAUSE_VALIDATOR_SUCCESS='ENTITIES/VALIDATORS/PAUSE_VALIDATOR_SUCCESS';var PAUSE_VALIDATOR_FAILURE='ENTITIES/VALIDATORS/PAUSE_VALIDATOR_FAILURE';var START_VALIDATOR_REQUEST='ENTITIES/VALIDATORS/START_VALIDATOR_REQUEST';var START_VALIDATOR_SUCCESS='ENTITIES/VALIDATORS/START_VALIDATOR_SUCCESS';var START_VALIDATOR_FAILURE='ENTITIES/VALIDATORS/START_VALIDATOR_FAILURE';var UPDATE_VALIDATOR='ENTITIES/VALIDATORS/UPDATE_VALIDATOR';var WITHDRAW_VALIDATOR_REQUEST='ENTITIES/VALIDATORS/WITHDRAW_VALIDATOR_REQUEST';var WITHDRAW_VALIDATOR_SUCCESS='ENTITIES/VALIDATORS/WITHDRAW_VALIDATOR_SUCCESS';var WITHDRAW_VALIDATOR_FAILURE='ENTITIES/VALIDATORS/WITHDRAW_VALIDATOR_FAILURE';
// CONCATENATED MODULE: ./src/entities/validators/reducer.js
// Constants
// Types
/* harmony default export */ var reducer = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments.length>1?arguments[1]:undefined;var hash=Object(lodash["get"])(action,'hash');var validator=Object(lodash["get"])(state,hash);switch(action.type){// CREATE
case CREATE_VALIDATOR_SUCCESS:return Object(objectSpread["a" /* default */])({},state,Object(defineProperty["a" /* default */])({},hash,action.payload));// PAUSE && START
case DEPOSIT_VALIDATOR_REQUEST:case FETCH_VALIDATOR_REQUEST:case PAUSE_VALIDATOR_REQUEST:case START_VALIDATOR_REQUEST:case WITHDRAW_VALIDATOR_REQUEST:return Object(objectSpread["a" /* default */])({},state,Object(defineProperty["a" /* default */])({},hash,Object(objectSpread["a" /* default */])({},validator,{isFetching:true})));case DEPOSIT_VALIDATOR_FAILURE:case FETCH_VALIDATOR_FAILURE:case PAUSE_VALIDATOR_FAILURE:case START_VALIDATOR_FAILURE:case WITHDRAW_VALIDATOR_FAILURE:return Object(lodash["has"])(state,hash)?Object(objectSpread["a" /* default */])({},state,Object(defineProperty["a" /* default */])({},hash,Object(objectSpread["a" /* default */])({},validator,{error:action.error,isFetching:false}))):state;case DEPOSIT_VALIDATOR_SUCCESS:return Object(objectSpread["a" /* default */])({},state,Object(defineProperty["a" /* default */])({},hash,Object(objectSpread["a" /* default */])({},validator,{deposit:action.deposit,isFetching:false})));case FETCH_VALIDATOR_SUCCESS:return Object(objectSpread["a" /* default */])({},state,Object(defineProperty["a" /* default */])({},hash,Object(objectSpread["a" /* default */])({},validator,action.payload,{isFetching:false})));case PAUSE_VALIDATOR_SUCCESS:return Object(objectSpread["a" /* default */])({},state,Object(defineProperty["a" /* default */])({},hash,Object(objectSpread["a" /* default */])({},validator,{isFetching:false,pauseCause:PAUSE_CAUSE_VOLUNTARILY})));case START_VALIDATOR_SUCCESS:return Object(objectSpread["a" /* default */])({},state,Object(defineProperty["a" /* default */])({},hash,Object(objectSpread["a" /* default */])({},validator,{isFetching:false,pauseCause:PAUSE_NOT_PAUSED})));// UPDATE
case UPDATE_VALIDATOR:return Object(objectSpread["a" /* default */])({},state,Object(defineProperty["a" /* default */])({},hash,Object(objectSpread["a" /* default */])({},validator,action.payload)));case WITHDRAW_VALIDATOR_SUCCESS:return Object(lodash["omit"])(state,action.hash);default:return state;}});
// EXTERNAL MODULE: ./node_modules/normalizr/dist/normalizr.es.js
var normalizr_es = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/redux-form/es/SubmissionError.js + 1 modules
var SubmissionError = __webpack_require__(252);

// CONCATENATED MODULE: ./src/entities/types.js
var UPDATE_ENTITIES='ENTITIES/UPDATE_ENTITIES';
// CONCATENATED MODULE: ./src/services/modals/types.js
var CLOSE_MODAL='SERVICES/MODALS/CLOSE_MODAL';var CLOSE_MODALS='SERVICES/MODALS/CLOSE_MODALS';var OPEN_MODAL='SERVICES/MODALS/OPEN_MODAL';
// CONCATENATED MODULE: ./src/services/modals/reducer.js
/* harmony default export */ var modals_reducer = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case CLOSE_MODAL:return Object(lodash["omit"])(state,action.id);case CLOSE_MODALS:return{};case OPEN_MODAL:return Object(objectSpread["a" /* default */])({},state,Object(defineProperty["a" /* default */])({},action.id,action.payload||true));default:return state;}});
// CONCATENATED MODULE: ./src/services/modals/actions.js
var actions_closeModal=function closeModal(id){return{type:CLOSE_MODAL,id:id};};var actions_closeModals=function closeModals(){return{type:CLOSE_MODALS};};var actions_openModal=function openModal(id,payload){return{type:OPEN_MODAL,id:id,payload:payload};};
// CONCATENATED MODULE: ./src/services/modals/index.js

// CONCATENATED MODULE: ./src/entities/validators/selector.js
var selector_getValidatorDeposit=function getValidatorDeposit(state,hash){return Object(lodash["get"])(state,"entities.validators.".concat(hash,".deposit"));};var selector_getValidatorList=function getValidatorList(state){return Object(lodash["values"])(Object(lodash["get"])(state,'entities.validators',{}));};var getValidatorListByAddress=function getValidatorListByAddress(state,address){return selector_getValidatorList(state).filter(function(_ref){var nodeAddress=_ref.address;return nodeAddress===address;});};
// CONCATENATED MODULE: ./src/utils/convert.js
var convertDeposit=function convertDeposit(amount){return Math.round(amount/Math.pow(2,32)*Math.pow(10,18));};
// CONCATENATED MODULE: ./src/utils/parse.js
// Entities
var parseCompactedValidator=function parseCompactedValidator(){var hash=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var formattedHash=hash.replace('0x','');return{address:"0x".concat(formattedHash.substr(24,64)),deposit:parseInt(formattedHash.substr(8,16),16),pauseCause:parseInt(formattedHash.substr(6,2),16)};};var parseDeposit=function parseDeposit(amount){return amount*Math.pow(2,32)/Math.pow(10,18);};var parse_parsePause=function parsePause(id){switch(id){case PAUSE_CAUSE_VOLUNTARILY:return'Остановлен';case PAUSE_CAUSE_UNTIL_BLOCK:return'Заблокирован';case PAUSE_CAUSE_UNTIL_FINE:return'Оштрафован';case PAUSE_CAUSE_PUNISHMENT:return'Наказание';case PAUSE_NOT_PAUSED:default:return'Включен';}};
// CONCATENATED MODULE: ./src/entities/validators/actions.js
// Entities
// Services
// Selector
// Types
// Views
// Utils
var actions_createValidator=function createValidator(_ref){var address=_ref.address,deposit=_ref.deposit,hash=_ref.hash,node=_ref.node;return function(dispatch,getState,_ref2){var account=_ref2.account,privateWeb3=_ref2.privateWeb3,web3=_ref2.web3;dispatch({type:CREATE_VALIDATOR_REQUEST});return new Promise(function(resolve,reject){var value=web3.utils.toWei(deposit,'ether');var formattedHash="0x".concat(hash.replace(/^(0[xX]{1})?/,''));var formattedNode="0x".concat(node.replace(/^(0[xX]{1})?/,''));var formattedAddress="0x".concat(address.replace(/^(0[xX]{1})?/,''));account.methods.addInitialDeposit(formattedHash,formattedNode,formattedAddress).send({value:value,from:window.ethereum.selectedAddress}).on('error',reject).on('transactionHash',function(txHash){resolve();dispatch({type:CREATE_VALIDATOR_SUCCESS,hash:formattedHash.toLowerCase(),payload:{address:formattedAddress,deposit:convertDeposit(deposit),hash:formattedHash.toLowerCase(),isFetching:true,node:formattedNode,pauseCause:1}});dispatch(actions_closeModal(VALIDATOR_CREATE_MODAL_ID));account.events.ValidatorUpdated({},function(opt,_ref3){var transactionHash=_ref3.transactionHash;if(txHash===transactionHash){dispatch(actions_updateValidator(hash,{isFetching:false}));}});document.getElementById(hash).scrollIntoView();});}).catch(function(error){// eslint-disable-next-line
console.error(error);dispatch({type:CREATE_VALIDATOR_FAILURE,error:Object(lodash["get"])(error,'message')});throw new SubmissionError["a" /* default */]({_error:Object(lodash["get"])(error,'message')});});};};var actions_depositValidator=function depositValidator(_ref4){var hash=_ref4.hash,deposit=_ref4.deposit;return function(dispatch,getState,_ref5){var account=_ref5.account,web3=_ref5.web3;dispatch({type:DEPOSIT_VALIDATOR_REQUEST,hash:hash});var state=getState();var value=web3.utils.toWei(deposit,'ether');var currentDeposit=selector_getValidatorDeposit(state,hash);var newDeposit=value/Math.pow(2,32);return new Promise(function(resolve,reject){account.methods.addDeposit(hash).send({value:value,from:window.ethereum.selectedAddress}).on('transactionHash',function(txHash){dispatch(actions_closeModal(VALIDATOR_DEPOSIT_MODAL_ID));account.events.ValidatorUpdated({},function(opt,_ref6){var transactionHash=_ref6.transactionHash;if(txHash===transactionHash){dispatch({type:DEPOSIT_VALIDATOR_SUCCESS,hash:hash,deposit:currentDeposit+newDeposit});}});}).on('error',reject);}).catch(function(error){return dispatch({type:DEPOSIT_VALIDATOR_FAILURE,hash:hash,error:Object(lodash["get"])(error,'message')});});};};var actions_fetchValidator=function fetchValidator(hash){return function(dispatch,getState,_ref7){var contract=_ref7.contract;dispatch({type:FETCH_VALIDATOR_REQUEST,hash:hash});return contract.methods.getValidator(hash).call(null,function(error,res){if(error){dispatch({type:FETCH_VALIDATOR_FAILURE,hash:hash,error:Object(lodash["get"])(error,'message')});}else{dispatch({type:FETCH_VALIDATOR_SUCCESS,hash:hash,payload:{pauseBlockNumber:Object(lodash["get"])(res,'pauseBlockNumber')}});}});};};var actions_fetchValidators=function fetchValidators(){return function(dispatch,getState,_ref8){var contract=_ref8.contract,schema=_ref8.schema,web3=_ref8.web3;dispatch({type:FETCH_VALIDATORS_REQUEST});return contract.methods.getCompactedValidators().call(null,function(error,res){if(error){dispatch({type:FETCH_VALIDATORS_FAILURE,error:Object(lodash["get"])(error,'message')});}else{var data=[];var validators=Object(lodash["get"])(res,'ValidatorsPubKeys',[]);validators.forEach(function(hash,index){var validator=parseCompactedValidator(Object(lodash["get"])(res,"ValidatorsCompacted.".concat(index)));data.push(Object(objectSpread["a" /* default */])({},validator,{hash:hash.toLowerCase()}));});var normalizedData=Object(normalizr_es["a" /* normalize */])(data,[schema.validator]);dispatch({type:UPDATE_ENTITIES,data:normalizedData,force:true});dispatch({type:FETCH_VALIDATORS_SUCCESS});}});};};var actions_pauseValidator=function pauseValidator(_ref9){var address=_ref9.address,hash=_ref9.hash,pauseCause=_ref9.pauseCause,punishValue=_ref9.punishValue;return function(dispatch,getState,_ref10){var account=_ref10.account,web3=_ref10.web3;dispatch({type:PAUSE_VALIDATOR_REQUEST,hash:hash});return new Promise(function(resolve,reject){account.methods.pauseValidation(hash,address||hash,pauseCause||1,punishValue||0).send({from:window.ethereum.selectedAddress}).on('transactionHash',function(txHash){dispatch(actions_closeModal(VALIDATOR_PAUSE_MODAL_ID));account.events.ValidatorUpdated({},function(opt,_ref11){var transactionHash=_ref11.transactionHash;if(txHash===transactionHash){dispatch({type:PAUSE_VALIDATOR_SUCCESS,hash:hash});}});}).on('error',reject);}).catch(function(error){return dispatch({type:PAUSE_VALIDATOR_FAILURE,hash:hash,error:Object(lodash["get"])(error,'message')});});};};var actions_startValidator=function startValidator(hash){return function(dispatch,getState,_ref12){var account=_ref12.account,web3=_ref12.web3;dispatch({type:START_VALIDATOR_REQUEST,hash:hash});return new Promise(function(resolve,reject){account.methods.resumeValidation(hash).send({from:window.ethereum.selectedAddress}).on('transactionHash',function(txHash){account.events.ValidatorUpdated({},function(opt,_ref13){var transactionHash=_ref13.transactionHash;if(txHash===transactionHash){dispatch({type:START_VALIDATOR_SUCCESS,hash:hash});}});}).on('error',reject);}).catch(function(error){return dispatch({type:START_VALIDATOR_FAILURE,hash:hash,error:Object(lodash["get"])(error,'message')});});};};var actions_updateValidator=function updateValidator(hash,payload){return{type:UPDATE_VALIDATOR,hash:hash,payload:payload};};var actions_withdrawValidator=function withdrawValidator(hash){return function(dispatch,getState,_ref14){var account=_ref14.account,contract=_ref14.contract,web3=_ref14.web3;dispatch({type:WITHDRAW_VALIDATOR_REQUEST,hash:hash});return new Promise(function(resolve,reject){account.methods.withdraw(hash).send({from:window.ethereum.selectedAddress}).on('receipt',function(){return dispatch({type:WITHDRAW_VALIDATOR_SUCCESS,hash:hash});}).on('error',reject);}).catch(function(error){return dispatch({type:WITHDRAW_VALIDATOR_FAILURE,hash:hash,error:Object(lodash["get"])(error,'message')});});};};
// CONCATENATED MODULE: ./src/entities/validators/index.js

// CONCATENATED MODULE: ./src/views/Validators/ducks/types.js
var SET_STATS='VIEWS/VALIDATORS/SET_STATS';
// CONCATENATED MODULE: ./src/views/Validators/ducks/reducer.js
// Entities
// Types
var initialState={isFetching:false,stats:{}};/* harmony default export */ var ducks_reducer = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case FETCH_VALIDATORS_REQUEST:return Object(objectSpread["a" /* default */])({},state,{isFetching:true});case FETCH_VALIDATORS_SUCCESS:case FETCH_VALIDATORS_FAILURE:return Object(objectSpread["a" /* default */])({},state,{error:action.error,isFetching:false});case SET_STATS:return Object(objectSpread["a" /* default */])({},state,{stats:action.payload});default:return state;}});
// CONCATENATED MODULE: ./src/views/Validators/ducks/actions.js
// Types
var actions_setStats=function setStats(payload){return{type:SET_STATS,payload:payload};};
// CONCATENATED MODULE: ./src/views/Validators/ducks/constants.js
var VALIDATOR_CONFIRM_MODAL_ID='validatorConfirmModal';var VALIDATOR_CONFIRM_ACCOUNT_MODAL_ID='validatorConfirmAccountModal';var VALIDATOR_CREATE_FORM_ID='validatorCreateForm';var VALIDATOR_CREATE_MODAL_ID='validatorCreateModal';var VALIDATOR_DEPOSIT_FORM_ID='validatorDepositForm';var VALIDATOR_DEPOSIT_MODAL_ID='validatorDepositModal';var VALIDATOR_GUIDE_MODAL_ID='validatorGuideModal';var VALIDATOR_NODE_FORM_ID='validatorNodeForm';var VALIDATOR_NODE_MODAL_ID='validatorNodeModal';var VALIDATOR_NODE_FROM_MODAL_ID='validatorNodeFromModal';var VALIDATOR_PAUSE_FORM_ID='validatorPauseForm';var VALIDATOR_PAUSE_MODAL_ID='validatorPauseModal';
// CONCATENATED MODULE: ./src/views/Validators/ducks/selector.js
var selector_getStatById=function getStatById(state,id){return Object(lodash["get"])(state,"views.validators.stats.".concat(id));};var selector_getValidatorsView=function getValidatorsView(state){return Object(lodash["get"])(state,'views.validators');};
// CONCATENATED MODULE: ./src/views/Validators/ducks/index.js

// CONCATENATED MODULE: ./src/services/session/types.js
var CONNECT_REQUEST='SERVICES/SESSION/CONNECT_REQUEST';var CONNECT_SUCCESS='SERVICES/SESSION/CONNECT_SUCCESS';var CONNECT_FAILURE='SERVICES/SESSION/CONNECT_FAILURE';var IS_OWNER_REQUEST='SERVICES/SESSION/IS_OWNER_REQUEST';var IS_OWNER_SUCCESS='SERVICES/SESSION/IS_OWNER_SUCCESS';var IS_OWNER_FAILURE='SERVICES/SESSION/IS_OWNER_FAILURE';var SET_CURRENT_BLOCK_NUMBER='SERVICES/SESSION/SET_CURRENT_BLOCK_NUMBER';var SET_HAS_ACCOUNT='SERVICES/SESSION/SET_HAS_ACCOUNT';var SET_NETWORK_ID='SERVICES/SESSION/SET_NETWORK_ID';var SET_SUPPORT='SERVICES/SESSION/SET_SUPPORT';
// CONCATENATED MODULE: ./src/services/session/reducer.js
// Types
var reducer_initialState={address:null,blockNumber:0,error:false,isConnected:false,isConnecting:true,isOwner:false,isSupported:false,hasAccount:false,networkId:0};/* harmony default export */ var session_reducer = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:reducer_initialState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case CONNECT_REQUEST:return Object(objectSpread["a" /* default */])({},state,{isConnecting:true});case CONNECT_SUCCESS:return Object(objectSpread["a" /* default */])({},state,{address:action.address,isChanged:action.isChanged,isConnected:true,isConnecting:false});case CONNECT_FAILURE:return Object(objectSpread["a" /* default */])({},state,{error:action.error,isConnected:false,isConnecting:false});case IS_OWNER_REQUEST:return Object(objectSpread["a" /* default */])({},state,{isConnecting:true});case IS_OWNER_SUCCESS:return Object(objectSpread["a" /* default */])({},state,{isConnecting:false,isOwner:action.isOwner});case SET_CURRENT_BLOCK_NUMBER:return Object(objectSpread["a" /* default */])({},state,{blockNumber:action.blockNumber,isConnecting:false});case SET_HAS_ACCOUNT:return Object(objectSpread["a" /* default */])({},state,{hasAccount:true});case SET_NETWORK_ID:return Object(objectSpread["a" /* default */])({},state,{networkId:action.networkId});case SET_SUPPORT:return Object(objectSpread["a" /* default */])({},state,{isSupported:action.isSupported});default:return state;}});
// CONCATENATED MODULE: ./src/services/session/actions.js
// Entities
// Types
var actions_checkOwnership=function checkOwnership(address){return function(dispatch,getState,_ref){var contract=_ref.contract;dispatch({type:IS_OWNER_REQUEST});return contract.methods.owner().call(null,function(error,ownerAddress){error?dispatch({type:IS_OWNER_FAILURE,error:Object(lodash["get"])(error,'message')}):dispatch({type:IS_OWNER_SUCCESS,isOwner:address.toLowerCase()===ownerAddress.toLowerCase()});});};};var actions_connectMetamask=function connectMetamask(){return function(dispatch,getState){var state=getState();dispatch({type:CONNECT_REQUEST});return window.ethereum.enable().then(function(data){getValidatorListByAddress(state,data[0]).filter(function(_ref2){var address=_ref2.address;return address===data[0];}).forEach(function(_ref3){var address=_ref3.address,hash=_ref3.hash;return dispatch(actions_fetchValidator(hash));});dispatch({type:CONNECT_SUCCESS,address:data[0]});dispatch(actions_checkOwnership(data[0]));window.ethereum.on('accountsChanged',function(data){dispatch({type:CONNECT_SUCCESS,address:data[0],isChanged:true});dispatch(actions_checkOwnership(data[0]));});}).catch(function(error){return dispatch({type:CONNECT_FAILURE,error:Object(lodash["get"])(error,'message')});});};};
// CONCATENATED MODULE: ./src/services/session/selector.js
var selector_getAddress=function getAddress(state){return Object(lodash["get"])(state,'services.session.address');};var selector_getBlockNumber=function getBlockNumber(state){return Object(lodash["get"])(state,'services.session.blockNumber');};var selector_getSession=function getSession(state){return Object(lodash["get"])(state,'services.session');};var selector_isChanged=function isChanged(state){return Object(lodash["get"])(state,'services.session.isChanged');};var selector_isConnected=function isConnected(state){return Object(lodash["get"])(state,'services.session.isConnected');};var selector_isConnecting=function isConnecting(state){return Object(lodash["get"])(state,'services.session.isConnecting');};var selector_isOwner=function isOwner(state){return Object(lodash["get"])(state,'services.session.isOwner');};var selector_isSupported=function isSupported(state){return Object(lodash["get"])(state,'services.session.isSupported');};var selector_isValidatorOwner=function isValidatorOwner(state,hash){return selector_getAddress(state)===hash;};
// CONCATENATED MODULE: ./src/services/session/index.js

// EXTERNAL MODULE: ./src/views/Validators/components/Actions.scss
var Actions = __webpack_require__(30);
var Actions_default = /*#__PURE__*/__webpack_require__.n(Actions);

// CONCATENATED MODULE: ./src/views/Validators/components/Actions.js
// API
// Components
// Ducks
// Entities
// Services
// Utils
// Styles
var Actions_ValidatorsActions=function ValidatorsActions(_ref){var blockNumber=_ref.blockNumber,deposit=_ref.deposit,hash=_ref.hash,pauseBlockNumber=_ref.pauseBlockNumber,pauseCause=_ref.pauseCause,handleDeposit=_ref.handleDeposit,handlePause=_ref.handlePause,handleStart=_ref.handleStart,handleWithdraw=_ref.handleWithdraw,isConnected=_ref.isConnected,isFetching=_ref.isFetching,isDisabled=_ref.isDisabled,isOwner=_ref.isOwner,isValidatorOwner=_ref.isValidatorOwner,props=Object(objectWithoutProperties["a" /* default */])(_ref,["blockNumber","deposit","hash","pauseBlockNumber","pauseCause","handleDeposit","handlePause","handleStart","handleWithdraw","isConnected","isFetching","isDisabled","isOwner","isValidatorOwner"]);return isConnected&&(isOwner||isValidatorOwner)&&!isDisabled&&react_default.a.createElement(react["Fragment"],null,isFetching?react_default.a.createElement(src_components_Progress,{size:20}):react_default.a.createElement("div",{className:Actions_default.a.Root},pauseCause!==PAUSE_NOT_PAUSED?isValidatorOwner&&parseDeposit(deposit)>=api_config.MIN_DEPOSIT-2&&react_default.a.createElement(src_components_Tooltip,{title:"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"},react_default.a.createElement(src_components_Button,{classNames:{root:classnames_default()(Actions_default.a.Button,Actions_default.a.ButtonVariantPlay),icon:Actions_default.a.Icon},icon:"fas fa-play",onClick:handleStart})):react_default.a.createElement(src_components_Tooltip,{title:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"},react_default.a.createElement(src_components_Button,{classNames:{root:classnames_default()(Actions_default.a.Button,Actions_default.a.ButtonVariantPause),icon:Actions_default.a.Icon},icon:"fas fa-pause",onClick:handlePause})),isValidatorOwner&&react_default.a.createElement(src_components_Tooltip,{title:"\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C"},react_default.a.createElement(src_components_Button,{classNames:{root:classnames_default()(Actions_default.a.Button,Actions_default.a.ButtonVariantDeposit),icon:Actions_default.a.Icon},icon:"fas fa-usd-circle",onClick:handleDeposit})),isValidatorOwner&&pauseCause===PAUSE_CAUSE_VOLUNTARILY&&blockNumber-pauseBlockNumber>6000&&react_default.a.createElement(src_components_Tooltip,{title:"\u0417\u0430\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438"},react_default.a.createElement(src_components_Button,{classNames:{root:classnames_default()(Actions_default.a.Button,Actions_default.a.ButtonVariantWithdraw),icon:Actions_default.a.Icon},icon:"fas fa-hand-holding-usd",onClick:handleWithdraw}))));};var Actions_mapStateToProps=function mapStateToProps(state,_ref2){var address=_ref2.address;return{blockNumber:selector_getBlockNumber(state),isConnected:selector_isConnected(state),isOwner:selector_isOwner(state),isValidatorOwner:selector_isValidatorOwner(state,address)};};/* harmony default export */ var components_Actions = (Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(Actions_mapStateToProps,{openModal:actions_openModal,pauseValidator:actions_pauseValidator,withdrawValidator:actions_withdrawValidator}),Object(Recompose_esm["c" /* withHandlers */])({handleDeposit:function handleDeposit(_ref3){var hash=_ref3.hash,openModal=_ref3.openModal;return function(event){return openModal(VALIDATOR_DEPOSIT_MODAL_ID,{hash:hash});};},handlePause:function handlePause(_ref4){var hash=_ref4.hash,isValidatorOwner=_ref4.isValidatorOwner,openModal=_ref4.openModal,pauseValidator=_ref4.pauseValidator;return function(event){return isValidatorOwner?pauseValidator({hash:hash}):openModal(VALIDATOR_PAUSE_MODAL_ID,{hash:hash});};},handleStart:function handleStart(_ref5){var hash=_ref5.hash,openModal=_ref5.openModal;return function(event){return openModal(VALIDATOR_CONFIRM_MODAL_ID,{hash:hash});};},handleWithdraw:function handleWithdraw(_ref6){var hash=_ref6.hash,withdrawValidator=_ref6.withdrawValidator;return function(event){return withdrawValidator(hash);};}}))(Actions_ValidatorsActions));
// EXTERNAL MODULE: ./src/views/Validators/components/Field.scss
var Field = __webpack_require__(22);
var Field_default = /*#__PURE__*/__webpack_require__.n(Field);

// CONCATENATED MODULE: ./src/views/Validators/components/Field.js
// API
// Components
// Ducks
// Entities
// Services
// Utils
// Styles
var Field_VARIANT={DEFAULT:'default',DEPOSIT:'deposit',HASH:'hash',HEALTH:'health',PAUSE:'pause'};var Field_ValidatorsField=function ValidatorsField(_ref){var _ref2;var children=_ref.children,currentBlockNumber=_ref.currentBlockNumber,isDisabled=_ref.isDisabled,original=_ref.original,stat=_ref.stat,title=_ref.title,_ref$variant=_ref.variant,variant=_ref$variant===void 0?Field_VARIANT.DEFAULT:_ref$variant,handleCopy=_ref.handleCopy;var rootClassNames=classnames_default()(Field_default.a.Root,!isDisabled&&variant===Field_VARIANT.PAUSE&&(_ref2={},Object(defineProperty["a" /* default */])(_ref2,Field_default.a.RootColorError,!isDisabled&&title!==PAUSE_NOT_PAUSED),Object(defineProperty["a" /* default */])(_ref2,Field_default.a.RootColorSuccess,!isDisabled&&title===PAUSE_NOT_PAUSED),_ref2),Object(defineProperty["a" /* default */])({},Field_default.a.RootIsDisabled,isDisabled),Object(defineProperty["a" /* default */])({},Field_default.a.RootVariantHash,variant===Field_VARIANT.HASH));return react_default.a.createElement(components_Typography_Typography,{className:rootClassNames,variant:components_Typography_Typography.VARIANT.BODY2},variant===Field_VARIANT.HASH&&react_default.a.createElement(src_components_Tooltip,{title:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C"},react_default.a.createElement(src_components_Button,{classNames:{root:Field_default.a.Copy,icon:Field_default.a.Icon},icon:"fal fa-copy",onClick:handleCopy})),react_default.a.createElement("div",{className:Field_default.a.Text},variant===Field_VARIANT.DEPOSIT&&"".concat(parseDeposit(title).toFixed(4)," ").concat(api_config.SYMBOL),variant===Field_VARIANT.PAUSE&&parse_parsePause(title),variant===Field_VARIANT.HASH&&(title||children),variant===Field_VARIANT.DEFAULT&&(title||children),!isDisabled&&variant===Field_VARIANT.HEALTH&&react_default.a.createElement("div",{className:Field_default.a.Health},react_default.a.createElement("div",{className:Field_default.a.HealthBar},Object(lodash["get"])(stat,'voted64','').split('').map(function(word,index){var _classNames3;var wordClassName=classnames_default()(Field_default.a.Word,(_classNames3={},Object(defineProperty["a" /* default */])(_classNames3,Field_default.a.WordVariantRed,word==='R'),Object(defineProperty["a" /* default */])(_classNames3,Field_default.a.WordVariantOrange,word==='O'),Object(defineProperty["a" /* default */])(_classNames3,Field_default.a.WordVariantYellow,word==='Y'),Object(defineProperty["a" /* default */])(_classNames3,Field_default.a.WordVariantLight,word==='L'),Object(defineProperty["a" /* default */])(_classNames3,Field_default.a.WordVariantGreen,word==='G'),_classNames3));return react_default.a.createElement("span",{className:wordClassName,key:index});})),react_default.a.createElement("div",{className:Field_default.a.HealthIndex},stat?react_default.a.createElement("div",null,Object(lodash["get"])(stat,'responses64',0)>0?"".concat(Math.round(Object(lodash["get"])(stat,'responses64',0)*100),"%"):"\u041D\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 ".concat(currentBlockNumber-Object(lodash["get"])(stat,'blockLastVoted',0)," \u0431\u043B\u043E\u043A\u043E\u0432")):react_default.a.createElement("div",null,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430")))));};var Field_mapStateToProps=function mapStateToProps(state,_ref3){var original=_ref3.original;return{currentBlockNumber:selector_getBlockNumber(state),stat:selector_getStatById(state,Object(lodash["get"])(original,'hash'))};};/* harmony default export */ var components_Field = (Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(Field_mapStateToProps),Object(Recompose_esm["c" /* withHandlers */])({handleCopy:function handleCopy(_ref4){var title=_ref4.title;return function(event){var $el=document.createElement('textarea');$el.value=title;document.body.appendChild($el);$el.select();document.execCommand('copy');document.body.removeChild($el);};}}))(Field_ValidatorsField));
// EXTERNAL MODULE: ./src/views/Validators/components/Stat.scss
var Stat = __webpack_require__(18);
var Stat_default = /*#__PURE__*/__webpack_require__.n(Stat);

// CONCATENATED MODULE: ./src/views/Validators/components/Stat.js
// API
// Ducks
// Styles
var Stat_ValidatorsStat=function ValidatorsStat(_ref){var _classNames,_classNames2;var stat=_ref.stat;var responses=Math.round(Object(lodash["get"])(stat,'responses',0)*100);var responses64=Math.round(Object(lodash["get"])(stat,'responses64',0)*100);return react["createElement"]("div",{className:Stat_default.a.Root},react["createElement"]("div",{className:Stat_default.a.Receiver},react["createElement"](components_Typography_Typography,{className:Stat_default.a.Label,variant:components_Typography_Typography.VARIANT.SUBTITLE1},"\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C (receiver):"),react["createElement"](components_Typography_Typography,{className:classnames_default()(Stat_default.a.Value),variant:components_Typography_Typography.VARIANT.H5},"0x".concat(Object(lodash["get"])(stat,'receiver','').toLowerCase()))),react["createElement"]("div",{className:Stat_default.a.List},react["createElement"]("div",{className:Stat_default.a.Item},react["createElement"](components_Typography_Typography,{className:Stat_default.a.Label,variant:components_Typography_Typography.VARIANT.SUBTITLE1},"\u041A\u043E\u043B-\u0432\u043E \u043E\u0442\u0432\u0435\u0442\u043E\u0432:"),react["createElement"](components_Typography_Typography,{className:classnames_default()(Stat_default.a.Value,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,Stat_default.a.ValueColorAlert,responses>40&&responses<75),Object(defineProperty["a" /* default */])(_classNames,Stat_default.a.ValueColorDanger,responses<=40),Object(defineProperty["a" /* default */])(_classNames,Stat_default.a.ValueColorSuccess,responses>=75),_classNames)),variant:components_Typography_Typography.VARIANT.H3},"".concat(responses,"%"))),react["createElement"]("div",{className:Stat_default.a.Item},react["createElement"](components_Typography_Typography,{className:Stat_default.a.Label,variant:components_Typography_Typography.VARIANT.SUBTITLE1},"\u041A\u043E\u043B-\u0432\u043E \u043E\u0442\u0432\u0435\u0442\u043E\u0432 (\u0437\u0430 64 \u0431\u043B\u043E\u043A\u0430):"),react["createElement"](components_Typography_Typography,{className:classnames_default()(Stat_default.a.Value,(_classNames2={},Object(defineProperty["a" /* default */])(_classNames2,Stat_default.a.ValueColorAlert,responses64>40&&responses64<75),Object(defineProperty["a" /* default */])(_classNames2,Stat_default.a.ValueColorDanger,responses64<=40),Object(defineProperty["a" /* default */])(_classNames2,Stat_default.a.ValueColorSuccess,responses64>=75),_classNames2)),variant:components_Typography_Typography.VARIANT.H3},"".concat(responses64,"%"))),react["createElement"]("div",{className:Stat_default.a.Item},react["createElement"](components_Typography_Typography,{className:Stat_default.a.Label,variant:components_Typography_Typography.VARIANT.SUBTITLE1},"\u0411\u043B\u043E\u043A\u043E\u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u043E:"),react["createElement"](components_Typography_Typography,{className:classnames_default()(Stat_default.a.Value,Stat_default.a.ValueColorPrimary),variant:components_Typography_Typography.VARIANT.H3},Object(lodash["get"])(stat,'proposed',0))),react["createElement"]("div",{className:Stat_default.a.Item},react["createElement"](components_Typography_Typography,{className:Stat_default.a.Label,variant:components_Typography_Typography.VARIANT.SUBTITLE1},"\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E:"),react["createElement"](components_Typography_Typography,{className:Stat_default.a.Value,variant:components_Typography_Typography.VARIANT.H3},"".concat(Object(lodash["get"])(stat,'earned',0)/Math.pow(10,18)," ").concat(api_config.SYMBOL)))));};var Stat_mapStateToProps=function mapStateToProps(state,_ref2){var original=_ref2.original;return{stat:selector_getStatById(state,Object(lodash["get"])(original,'hash'))};};/* harmony default export */ var components_Stat = (Object(es["b" /* connect */])(Stat_mapStateToProps)(Stat_ValidatorsStat));
// EXTERNAL MODULE: ./src/views/Validators/components/Table.scss
var Validators_components_Table = __webpack_require__(109);
var components_Table_default = /*#__PURE__*/__webpack_require__.n(Validators_components_Table);

// CONCATENATED MODULE: ./src/views/Validators/components/Table.js
// Components
// Services
// Styles
var MAX_ROWS=128;var COLUMNS=[{accessor:'index',Cell:function Cell(_ref){var index=_ref.index,original=_ref.original;return react_default.a.createElement(components_Field,{isDisabled:index>=MAX_ROWS,title:Object(lodash["get"])(original,'pauseCause')===0?index+1:''});},Header:'#',sortable:false,width:64},{accessor:'hash',Cell:function Cell(_ref2){var index=_ref2.index,value=_ref2.value;return react_default.a.createElement(components_Field,{isDisabled:index>=MAX_ROWS,title:value,variant:Field_VARIANT.HASH});},Header:'vPub',minWidth:160,sortable:false},{accessor:'address',Cell:function Cell(_ref3){var index=_ref3.index,value=_ref3.value;return react_default.a.createElement(components_Field,{isDisabled:index>=MAX_ROWS,title:value,variant:Field_VARIANT.HASH});},Header:'Node Address',minWidth:160,sortable:false},{accessor:'voted64',Cell:function Cell(_ref4){var index=_ref4.index,original=_ref4.original,value=_ref4.value;return react_default.a.createElement(components_Field,{isDisabled:index>=MAX_ROWS||Object(lodash["get"])(original,'pauseCause')!==0,original:original,title:value,variant:Field_VARIANT.HEALTH});},Header:'Здоровье',sortable:false,width:240},{accessor:'deposit',Cell:function Cell(_ref5){var index=_ref5.index,value=_ref5.value;return react_default.a.createElement(components_Field,{isDisabled:index>=MAX_ROWS,title:value,variant:Field_VARIANT.DEPOSIT});},Header:'Депозит',sortable:false,width:160},{accessor:'pauseCause',Cell:function Cell(_ref6){var index=_ref6.index,value=_ref6.value;return react_default.a.createElement(components_Field,{isDisabled:index>=MAX_ROWS,title:value,variant:Field_VARIANT.PAUSE});},Header:'Состояние',sortable:false,width:120},{accessor:'actions',Cell:function Cell(_ref7){var index=_ref7.index,original=_ref7.original;return react_default.a.createElement(components_Actions,Object.assign({},original,{isDisabled:index>=MAX_ROWS}));},Header:'Действия',sortable:false,width:160}];var Table_ValidatorsTable=function ValidatorsTable(_ref8){var data=_ref8.data,ownerAddress=_ref8.ownerAddress;return react_default.a.createElement(src_components_Table,{columns:ownerAddress?COLUMNS:[].concat(COLUMNS).slice(0,-1),data:data,defaultPageSize:100000,freezeWhenExpanded:true,getTrGroupProps:function getTrGroupProps(state,_ref9){var _classNames;var index=_ref9.index,original=_ref9.original;return{className:classnames_default()(components_Table_default.a.Root,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,components_Table_default.a.RootIsFavorite,Object(lodash["get"])(original,'address')===ownerAddress),Object(defineProperty["a" /* default */])(_classNames,components_Table_default.a.RootIsDisabled,Object(lodash["get"])(original,'pauseCause')!==0||index>MAX_ROWS),_classNames)),id:Object(lodash["get"])(original,'hash')};},minRows:0,resizable:false,showPagination:false,SubComponent:function SubComponent(props){return react_default.a.createElement(components_Stat,props);}});};var Table_mapStateToProps=function mapStateToProps(state){return{ownerAddress:selector_getAddress(state)};};/* harmony default export */ var views_Validators_components_Table = (Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(Table_mapStateToProps))(Table_ValidatorsTable));
// EXTERNAL MODULE: ./node_modules/react-portal/es/PortalCompat.js + 3 modules
var PortalCompat = __webpack_require__(564);

// EXTERNAL MODULE: ./src/components/Modal.scss
var components_Modal = __webpack_require__(64);
var Modal_default = /*#__PURE__*/__webpack_require__.n(components_Modal);

// CONCATENATED MODULE: ./src/components/Modal.js
// Ducks
// Styles
var Modal_Modal=function Modal(_ref){var children=_ref.children,className=_ref.className,_ref$classNames=_ref.classNames;_ref$classNames=_ref$classNames===void 0?{}:_ref$classNames;var rootClassName=_ref$classNames.root,containerClassName=_ref$classNames.container,handleClose=_ref.handleClose,isOpened=_ref.isOpened,title=_ref.title,props=Object(objectWithoutProperties["a" /* default */])(_ref,["children","className","classNames","handleClose","isOpened","title"]);var rootClassNames=classnames_default()(className||rootClassName,Modal_default.a.Root);var containerClassNames=classnames_default()(containerClassName,Modal_default.a.Container);return isOpened&&react_default.a.createElement(PortalCompat["a" /* default */],null,react_default.a.createElement("div",{className:rootClassNames},react_default.a.createElement("div",{className:Modal_default.a.Backdrop,onClick:handleClose}),react_default.a.createElement("div",{className:containerClassNames},title&&react_default.a.createElement(components_Typography_Typography,{className:Modal_default.a.Title,variant:components_Typography_Typography.VARIANT.H6},title),react_default.a.createElement("div",{className:Modal_default.a.Content},typeof children==='function'?children(props):children))));};var Modal_mapStateToProps=function mapStateToProps(_ref2,_ref3){var services=_ref2.services;var id=_ref3.id,isOpened=_ref3.isOpened;var modal=Object(lodash["get"])(services,"modals.".concat(id));return Object(objectSpread["a" /* default */])({},modal,{isOpened:isOpened||!!modal});};/* harmony default export */ var src_components_Modal = (Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(Modal_mapStateToProps,{closeModal:actions_closeModal}),Object(Recompose_esm["c" /* withHandlers */])({handleClose:function handleClose(_ref4){var closeModal=_ref4.closeModal,id=_ref4.id;return function(){return closeModal(id);};}}))(Modal_Modal));
// EXTERNAL MODULE: ./src/views/Validators/containers/Common.scss
var Common = __webpack_require__(13);
var Common_default = /*#__PURE__*/__webpack_require__.n(Common);

// CONCATENATED MODULE: ./src/views/Validators/containers/Confirm.js
// Components
// Ducks
// Services
// Entities
// Styles
var Confirm_ValidatorsConfirm=function ValidatorsConfirm(_ref){var handleCancel=_ref.handleCancel,handleStart=_ref.handleStart;return react_default.a.createElement(src_components_Modal,{classNames:{container:Common_default.a.Container},id:VALIDATOR_CONFIRM_MODAL_ID,title:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!"},function(_ref2){var hash=_ref2.hash;return react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(components_Typography_Typography,{variant:components_Typography_Typography.VARIANT.BODY1},"\u041F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u043E\u043D \u0432\u043A\u043B\u044E\u0447\u0435\u043D,\xA0 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D \u0441 \u0441\u0435\u0442\u044C\u044E \u0438 \u0433\u043E\u0442\u043E\u0432 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u0432 \u0440\u0430\u0431\u043E\u0442\u0443.\xA0\u0412 \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u043E\u043C\xA0 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D \u0441\u043E\xA0 \u0448\u0442\u0440\u0430\u0444\u043E\u043C \u0438\u043B\u0438 \u043F\u043E\u043B\u043D\u044B\u043C \u0438\u0437\u044A\u044F\u0442\u0438\u0435\u043C \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430."),react_default.a.createElement("div",{className:Common_default.a.Actions},react_default.a.createElement(src_components_Button,{color:color_namespaceObject.SECONDARY,onClick:handleCancel},"\u041E\u0442\u043C\u0435\u043D\u0430"),react_default.a.createElement(src_components_Button,{color:color_namespaceObject.DANGER,onClick:function onClick(){return handleStart(hash);}},"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C")));});};/* harmony default export */ var Confirm = (Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(null,{closeModal:actions_closeModal,startValidator:actions_startValidator}),Object(Recompose_esm["c" /* withHandlers */])({handleCancel:function handleCancel(_ref3){var closeModal=_ref3.closeModal;return function(event){return closeModal(VALIDATOR_CONFIRM_MODAL_ID);};},handleStart:function handleStart(_ref4){var closeModal=_ref4.closeModal,startValidator=_ref4.startValidator;return function(hash){closeModal(VALIDATOR_CONFIRM_MODAL_ID);startValidator(hash);};}}))(Confirm_ValidatorsConfirm));
// CONCATENATED MODULE: ./src/views/Validators/containers/ConfirmAccount.js
// Components
// Ducks
// Styles
var ConfirmAccount_ValidatorsConfirmAccount=function ValidatorsConfirmAccount(){return react_default.a.createElement(src_components_Modal,{classNames:{container:Common_default.a.Container},id:VALIDATOR_CONFIRM_ACCOUNT_MODAL_ID,title:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!"},function(_ref){var onReject=_ref.onReject,onResolve=_ref.onResolve;return react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(components_Typography_Typography,{className:Common_default.a.Alert,variant:components_Typography_Typography.VARIANT.BODY1},"\u0412\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440 \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0439 \u043A \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0443, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u0432\u0430\u0448\u0438\u043C \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C Metamask.",react_default.a.createElement("br",null),react_default.a.createElement("br",null),"\u0425\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?"),react_default.a.createElement("div",{className:Common_default.a.Actions},react_default.a.createElement(src_components_Button,{color:color_namespaceObject.SECONDARY,onClick:onReject},"\u041E\u0442\u043C\u0435\u043D\u0430"),react_default.a.createElement(src_components_Button,{color:color_namespaceObject.DANGER,onClick:onResolve},"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C")));});};/* harmony default export */ var ConfirmAccount = (ConfirmAccount_ValidatorsConfirmAccount);
// EXTERNAL MODULE: ./node_modules/redux-form/es/reduxForm.js + 14 modules
var reduxForm = __webpack_require__(562);

// EXTERNAL MODULE: ./src/components/Form/Form.scss
var Form_Form = __webpack_require__(145);
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_Form);

// CONCATENATED MODULE: ./src/components/Form/Form.js
// Styles
var Form_Form_Form=function Form(_ref){var children=_ref.children,className=_ref.className,error=_ref.error,onSubmit=_ref.onSubmit;return react_default.a.createElement("form",{className:className,onSubmit:onSubmit},error&&react_default.a.createElement(components_Typography_Typography,{className:Form_default.a.Error},error),react_default.a.createElement("div",{className:Form_default.a.Container},children));};/* harmony default export */ var components_Form_Form = (Form_Form_Form);
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(253);

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(146);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);

// EXTERNAL MODULE: ./node_modules/redux-form/es/Field.js + 10 modules
var es_Field = __webpack_require__(563);

// CONCATENATED MODULE: ./src/components/Form/utils/reduxFieldAdapter.js
/* harmony default export */ var reduxFieldAdapter = (function(_ref){var children=_ref.children,input=_ref.input,_ref$meta=_ref.meta,error=_ref$meta.error,touched=_ref$meta.touched,props=Object(objectWithoutProperties["a" /* default */])(_ref,["children","input","meta"]);return children(Object(objectSpread["a" /* default */])({},input,props,{error:touched&&error}));});
// EXTERNAL MODULE: ./src/components/Form/components/Field.scss
var Form_components_Field = __webpack_require__(65);
var components_Field_default = /*#__PURE__*/__webpack_require__.n(Form_components_Field);

// CONCATENATED MODULE: ./src/components/Form/components/Field.js
// Utils
// Styles
var Field_FormField=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(FormField,_Component);function FormField(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,FormField);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(FormField)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={id:uniqueId_default()('field_')};return _this;}Object(createClass["a" /* default */])(FormField,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,type=_this$props.type,withoutLabel=_this$props.withoutLabel;var id=this.state.id;return react_default.a.createElement(es_Field["a" /* default */],Object.assign({},this.props,{component:reduxFieldAdapter,type:type}),function(_ref){var error=_ref.error,label=_ref.label,props=Object(objectWithoutProperties["a" /* default */])(_ref,["error","label"]);return react_default.a.createElement("div",{className:components_Field_default.a.Root},!withoutLabel&&label&&react_default.a.createElement("div",{className:components_Field_default.a.Header},react_default.a.createElement(components_Typography_Typography,{className:components_Field_default.a.Label,component:"label",htmlFor:id,variant:components_Typography_Typography.VARIANT.OVERLINE},label),error&&react_default.a.createElement(components_Typography_Typography,{className:components_Field_default.a.Error,variant:components_Typography_Typography.VARIANT.OVERLINE},error)),react_default.a.createElement("div",{className:components_Field_default.a.Control},typeof children==='function'?children(Object(objectSpread["a" /* default */])({},props,{id:id,label:label,type:type,isErred:!!error})):Object(react["cloneElement"])(children,Object(objectSpread["a" /* default */])({},props,{id:id,label:label,type:type,isErred:!!error}))));});}}]);return FormField;}(react["Component"]);/* harmony default export */ var components_Form_components_Field = (Object(Recompose_esm["a" /* compose */])(Object(Recompose_esm["e" /* withState */])('id','setId',uniqueId_default()('field_')))(Field_FormField));
// EXTERNAL MODULE: ./src/components/Form/components/Input.scss
var Input = __webpack_require__(66);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input);

// CONCATENATED MODULE: ./src/components/Form/components/Input.js
// Components
// Styles
var Input_FormInput=function FormInput(_ref){var _classNames;var id=_ref.id,error=_ref.error,name=_ref.name,onChange=_ref.onChange,placeholder=_ref.placeholder,readOnly=_ref.readOnly,_ref$type=_ref.type,type=_ref$type===void 0?'text':_ref$type,value=_ref.value,handleBlur=_ref.handleBlur,handleFocus=_ref.handleFocus,isErred=_ref.isErred,isFocused=_ref.isFocused;var rootClassNames=classnames_default()(Input_default.a.Root,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,Input_default.a.RootIsErred,isErred),Object(defineProperty["a" /* default */])(_classNames,Input_default.a.RootIsFocused,isFocused),Object(defineProperty["a" /* default */])(_classNames,Input_default.a.RootIsReadOnly,!!readOnly),_classNames));return react_default.a.createElement("div",{className:rootClassNames},react_default.a.createElement("input",{autoComplete:"off",className:Input_default.a.Input,id:id,name:name,onBlur:handleBlur,onChange:onChange,onFocus:handleFocus,placeholder:placeholder,readOnly:readOnly,type:type,value:value}));};var ComposedFormInput=Object(Recompose_esm["a" /* compose */])(Object(Recompose_esm["e" /* withState */])('isFocused','setFocus',false),Object(Recompose_esm["c" /* withHandlers */])({handleBlur:function handleBlur(_ref2){var onBlur=_ref2.onBlur,setFocus=_ref2.setFocus;return function(event){setFocus(false);onBlur&&onBlur(event);};},handleFocus:function handleFocus(_ref3){var onFocus=_ref3.onFocus,setFocus=_ref3.setFocus;return function(event){setFocus(true);onFocus&&onFocus(event);};}}))(Input_FormInput);/* harmony default export */ var components_Input = (function(props){return react_default.a.createElement(components_Form_components_Field,props,react_default.a.createElement(ComposedFormInput,null));});
// EXTERNAL MODULE: ./src/components/Form/components/Select/Select.scss
var Select = __webpack_require__(31);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select);

// CONCATENATED MODULE: ./src/components/Form/components/Select/Select.js
// Components
// Styles
var Select_FormSelect=function FormSelect(_ref){var _classNames;var children=_ref.children,id=_ref.id,name=_ref.name,placeholder=_ref.placeholder,value=_ref.value,handleBlur=_ref.handleBlur,handleChange=_ref.handleChange,handleCreate=_ref.handleCreate,handleDelete=_ref.handleDelete,handleFocus=_ref.handleFocus,registerInput=_ref.registerInput,registerRoot=_ref.registerRoot,inputValue=_ref.inputValue,isFocused=_ref.isFocused,isMultiple=_ref.isMultiple;var rootClassNames=classnames_default()(Select_default.a.Root,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,Select_default.a.RootIsFocused,!!isFocused),Object(defineProperty["a" /* default */])(_classNames,Select_default.a.RootIsMultiple,!!isMultiple),Object(defineProperty["a" /* default */])(_classNames,Select_default.a.RootIsEmpty,!!Object(lodash["isEmpty"])(value)),_classNames));return react_default.a.createElement("div",{className:rootClassNames,onBlur:handleBlur,onFocus:handleFocus,ref:registerRoot,tabIndex:0},react_default.a.createElement("div",{className:Select_default.a.Container},react_default.a.createElement("div",{className:Select_default.a.Control},isMultiple&&value&&value.length>0&&value.map(function(_ref2){var label=_ref2.label,value=_ref2.value;return react_default.a.createElement("div",{className:Select_default.a.Option,key:value},react_default.a.createElement(components_Typography_Typography,{className:Select_default.a.OptionLabel,variant:components_Typography_Typography.VARIANT.BODY2},label),react_default.a.createElement("button",{className:Select_default.a.OptionDelete,onClick:function onClick(){return handleDelete(value);},type:"button"},react_default.a.createElement("i",{className:classnames_default()(Select_default.a.OptionIcon,'fas fa-times-circle')})));}),react_default.a.createElement("input",{autoComplete:"new-password",className:Select_default.a.Input,id:id,name:name,onChange:handleChange,onFocus:handleFocus,placeholder:Object(lodash["isEmpty"])(value)?placeholder:'',ref:registerInput,size:(inputValue.length||6)+2,type:"text",value:isFocused?inputValue:!isMultiple?Object(lodash["get"])(value,'label',''):''}))),children&&isFocused&&react_default.a.createElement("div",{className:Select_default.a.Dropdown},react_default.a.createElement("div",{className:Select_default.a.List},typeof children==='function'?children({value:value,inputValue:inputValue.toLowerCase(),onClick:handleCreate}):react["Children"].map(children,function(child){return child&&Object(react["cloneElement"])(child,{onClick:handleCreate});}))));};var ComposedFormSelect=Object(Recompose_esm["a" /* compose */])(Object(Recompose_esm["e" /* withState */])('isFocused','setFocus',false),Object(Recompose_esm["e" /* withState */])('inputValue','setInputValue',''),Object(Recompose_esm["c" /* withHandlers */])(function(){var $input;var $root;return{// Handlers
handleBlur:function handleBlur(_ref3){var setFocus=_ref3.setFocus,setInputValue=_ref3.setInputValue;return function(event){if(!$root.contains(event.relatedTarget)){$input.blur();setFocus(false);setInputValue('');}};},handleChange:function handleChange(_ref4){var setInputValue=_ref4.setInputValue;return function(event){return setInputValue(Object(lodash["get"])(event,'target.value',''));};},handleCreate:function handleCreate(_ref5){var isMultiple=_ref5.isMultiple,onChange=_ref5.onChange,setFocus=_ref5.setFocus,value=_ref5.value;return function(itemValue){if(!isMultiple){$input.blur();setFocus(false);}onChange&&onChange(isMultiple?[].concat(Object(toConsumableArray["a" /* default */])(value||[]),[itemValue]):itemValue);};},handleDelete:function handleDelete(_ref6){var onChange=_ref6.onChange,value=_ref6.value;return function(itemValue){return onChange&&onChange(value.filter(function(_ref7){var value=_ref7.value;return value!==itemValue;}));};},handleFocus:function handleFocus(_ref8){var setFocus=_ref8.setFocus;return function(){$input.focus();setFocus(true);};},// Registers
registerRoot:function registerRoot(){return function(node){$root=node;};},registerInput:function registerInput(){return function(node){$input=node;};}};}))(Select_FormSelect);/* harmony default export */ var Select_Select = (function(_ref9){var children=_ref9.children,props=Object(objectWithoutProperties["a" /* default */])(_ref9,["children"]);return react_default.a.createElement(components_Form_components_Field,props,react_default.a.createElement(ComposedFormSelect,null,children));});
// EXTERNAL MODULE: ./src/components/Form/components/Select/components/Item.scss
var Item = __webpack_require__(242);
var Item_default = /*#__PURE__*/__webpack_require__.n(Item);

// CONCATENATED MODULE: ./src/components/Form/components/Select/components/Item.js
// Styles
var Item_FormSelectItem=function FormSelectItem(_ref){var handleClick=_ref.handleClick,label=_ref.label,value=_ref.value;return react_default.a.createElement("button",{className:Item_default.a.Root,onClick:handleClick,type:"button"},react_default.a.createElement(components_Typography_Typography,{noWrap:true,variant:components_Typography_Typography.VARIANT.BODY2},label));};/* harmony default export */ var components_Item = (Object(Recompose_esm["a" /* compose */])(Object(Recompose_esm["c" /* withHandlers */])({handleClick:function handleClick(_ref2){var label=_ref2.label,onClick=_ref2.onClick,value=_ref2.value;return function(event){return onClick&&onClick({label:label,value:value},event);};}}))(Item_FormSelectItem));
// CONCATENATED MODULE: ./src/components/Form/components/Select/index.js

// CONCATENATED MODULE: ./src/components/Form/index.js
// Components

// EXTERNAL MODULE: ./node_modules/metamask-logo/index.js
var metamask_logo = __webpack_require__(243);
var metamask_logo_default = /*#__PURE__*/__webpack_require__.n(metamask_logo);

// EXTERNAL MODULE: ./src/components/Metamask.scss
var components_Metamask = __webpack_require__(67);
var Metamask_default = /*#__PURE__*/__webpack_require__.n(components_Metamask);

// CONCATENATED MODULE: ./src/components/Metamask.js
// Styles
var Metamask_Metamask=function Metamask(_ref){var registerLogo=_ref.registerLogo;return react_default.a.createElement("div",{className:Metamask_default.a.Root},react_default.a.createElement("div",{className:Metamask_default.a.Cover}),react_default.a.createElement("div",{className:Metamask_default.a.Container},react_default.a.createElement("div",{className:Metamask_default.a.Logo,ref:registerLogo}),react_default.a.createElement(components_Typography_Typography,{className:Metamask_default.a.Title,variant:components_Typography_Typography.VARIANT.H6},"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438...")));};/* harmony default export */ var src_components_Metamask = (Object(Recompose_esm["a" /* compose */])(Object(Recompose_esm["c" /* withHandlers */])(function(){var $logo=null;return{drawLogo:function drawLogo(){return function(){var viewer=metamask_logo_default()({followMouse:true,height:160,pxNotRatio:true,slowDrift:false,width:160});$logo.appendChild(viewer.container);};},registerLogo:function registerLogo(){return function(node){$logo=node;};}};}),Object(Recompose_esm["b" /* lifecycle */])({componentDidMount:function componentDidMount(){this.props.drawLogo();}}))(Metamask_Metamask));
// EXTERNAL MODULE: ./src/utils/validate.js
var validate = __webpack_require__(11);

// CONCATENATED MODULE: ./src/views/Validators/containers/Create.js
// API
// Components
// Ducks
// Entities
// Services
// Utils
// Styles
var Create_ValidatorsCreate=function ValidatorsCreate(_ref){var error=_ref.error,handleCancel=_ref.handleCancel,handleSubmit=_ref.handleSubmit,submitting=_ref.submitting;return react_default.a.createElement(components_Form_Form,{error:error,onSubmit:handleSubmit},submitting&&react_default.a.createElement(src_components_Metamask,null),react_default.a.createElement(components_Input,{label:"\u0414\u0435\u043F\u043E\u0437\u0438\u0442",name:"deposit",placeholder:"ETR"}),react_default.a.createElement(components_Input,{label:"vPub",name:"hash",placeholder:"32 Bytes"}),react_default.a.createElement(components_Input,{label:"Node Addr",name:"node",placeholder:"Address",readOnly:true}),react_default.a.createElement(components_Input,{label:"Receiver",name:"address",placeholder:"Address"}),react_default.a.createElement("div",{className:Common_default.a.Actions},react_default.a.createElement(src_components_Button,{color:color_namespaceObject.SECONDARY,onClick:handleCancel},"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),react_default.a.createElement(src_components_Button,{color:color_namespaceObject.PRIMARY,type:"submit"},"\u0421\u043E\u0437\u0434\u0430\u0442\u044C")));};var Create_mapStateToProps=function mapStateToProps(state,_ref2){var deposit=_ref2.deposit,vPub=_ref2.vPub;var address=selector_getAddress(state);return{initialValues:{address:address,deposit:deposit,hash:vPub,node:address}};};var ComposedValidatorsCreate=Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(Create_mapStateToProps,{closeModal:actions_closeModal}),Object(reduxForm["a" /* default */])({form:VALIDATOR_CREATE_FORM_ID,validate:Object(validate["a" /* default */])({address:[Object(validate["i" /* required */])(),Object(validate["b" /* isHash */])(40)],deposit:[Object(validate["i" /* required */])(),Object(validate["d" /* isNumber */])(),Object(validate["h" /* min */])(api_config.MIN_DEPOSIT_INCREMENT,"Must be more than ".concat(api_config.MIN_DEPOSIT_INCREMENT," ").concat(api_config.SYMBOL))],hash:[Object(validate["i" /* required */])(),Object(validate["b" /* isHash */])(64)],node:[Object(validate["i" /* required */])(),Object(validate["b" /* isHash */])(40)]})}),Object(Recompose_esm["e" /* withState */])('isThirdParty','setThirdParty',false),Object(Recompose_esm["c" /* withHandlers */])({handleCancel:function handleCancel(_ref3){var closeModal=_ref3.closeModal;return function(event){return closeModal(VALIDATOR_CREATE_MODAL_ID);};}}))(Create_ValidatorsCreate);var Create_ValidatorsCreateModal=function ValidatorsCreateModal(_ref4){var handleSubmit=_ref4.handleSubmit;return react_default.a.createElement(src_components_Modal,{classNames:{container:Common_default.a.Container},id:VALIDATOR_CREATE_MODAL_ID,title:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440"},function(_ref5){var deposit=_ref5.deposit,vPub=_ref5.vPub;return react_default.a.createElement(ComposedValidatorsCreate,{deposit:deposit,onSubmit:handleSubmit,vPub:vPub});});};/* harmony default export */ var Create = (Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(function(state){return{address:selector_getAddress(state)};},{closeModal:actions_closeModal,createValidator:actions_createValidator,openModal:actions_openModal}),Object(Recompose_esm["c" /* withHandlers */])({handleSubmit:function handleSubmit(_ref6){var address=_ref6.address,createValidator=_ref6.createValidator,closeModal=_ref6.closeModal,openModal=_ref6.openModal;return(// eslint-disable-next-line
function(values){if(address.toLowerCase()!==Object(lodash["get"])(values,'node','').toLowerCase()){closeModal(VALIDATOR_CREATE_MODAL_ID);openModal(VALIDATOR_CONFIRM_ACCOUNT_MODAL_ID,{onReject:function onReject(){closeModal(VALIDATOR_CONFIRM_ACCOUNT_MODAL_ID);openModal(VALIDATOR_CREATE_MODAL_ID,{deposit:Object(lodash["get"])(values,'deposit'),vPub:Object(lodash["get"])(values,'hash')});},onResolve:function onResolve(){closeModal(VALIDATOR_CONFIRM_ACCOUNT_MODAL_ID);createValidator(values);}});}else{return createValidator(values);}});}}))(Create_ValidatorsCreateModal));
// CONCATENATED MODULE: ./src/views/Validators/containers/Deposit.js
// API
// Components
// Ducks
// Entities
// Services
// Utils
// Styles
var Deposit_ValidatorsDeposit=function ValidatorsDeposit(_ref){var handleCancel=_ref.handleCancel,handleSubmit=_ref.handleSubmit,submitting=_ref.submitting;return react_default.a.createElement(components_Form_Form,{onSubmit:handleSubmit},submitting&&react_default.a.createElement(src_components_Metamask,null),react_default.a.createElement(components_Input,{label:"\u0414\u0435\u043F\u043E\u0437\u0438\u0442",name:"deposit",placeholder:"ETR"}),react_default.a.createElement("div",{className:Common_default.a.Actions},react_default.a.createElement(src_components_Button,{color:color_namespaceObject.SECONDARY,onClick:handleCancel},"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),react_default.a.createElement(src_components_Button,{color:color_namespaceObject.PRIMARY,type:"submit"},"\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C")));};var ComposedValidatorsDeposit=Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(null,{closeModal:actions_closeModal}),Object(reduxForm["a" /* default */])({form:VALIDATOR_DEPOSIT_FORM_ID,validate:Object(validate["a" /* default */])({deposit:[Object(validate["i" /* required */])(),Object(validate["d" /* isNumber */])(),Object(validate["h" /* min */])(api_config.MIN_DEPOSIT_INCREMENT,"Must be more than ".concat(api_config.MIN_DEPOSIT_INCREMENT," ").concat(api_config.SYMBOL))]})}),Object(Recompose_esm["c" /* withHandlers */])({handleCancel:function handleCancel(_ref2){var closeModal=_ref2.closeModal;return function(event){return closeModal(VALIDATOR_DEPOSIT_MODAL_ID);};}}))(Deposit_ValidatorsDeposit);var Deposit_ValidatorsDepositModal=function ValidatorsDepositModal(_ref3){var handleSubmit=_ref3.handleSubmit;return react_default.a.createElement(src_components_Modal,{classNames:{container:Common_default.a.Container},id:VALIDATOR_DEPOSIT_MODAL_ID,title:"\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C"},function(_ref4){var hash=_ref4.hash;return react_default.a.createElement(ComposedValidatorsDeposit,{initialValues:{hash:hash},onSubmit:handleSubmit});});};/* harmony default export */ var Deposit = (Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(null,{depositValidator:actions_depositValidator}),Object(Recompose_esm["c" /* withHandlers */])({handleSubmit:function handleSubmit(_ref5){var depositValidator=_ref5.depositValidator;return function(values){return depositValidator(values);};}}))(Deposit_ValidatorsDepositModal));
// EXTERNAL MODULE: ./src/views/Validators/components/Determine.scss
var Determine = __webpack_require__(82);
var Determine_default = /*#__PURE__*/__webpack_require__.n(Determine);

// CONCATENATED MODULE: ./src/views/Validators/components/Determine.js
// Styles
var Determine_ValidatorsDetermine=function ValidatorsDetermine(_ref){var children=_ref.children,isSelected=_ref.isSelected,title=_ref.title;var rootClassNames=classnames_default()(Determine_default.a.Root,Object(defineProperty["a" /* default */])({},Determine_default.a.RootIsSelected,!!isSelected));return react_default.a.createElement("div",{className:rootClassNames},react_default.a.createElement(components_Typography_Typography,{className:Determine_default.a.Title,variant:components_Typography_Typography.VARIANT.H6},title),react_default.a.createElement(components_Typography_Typography,{className:Determine_default.a.Content,variant:components_Typography_Typography.VARIANT.BODY1},children));};/* harmony default export */ var components_Determine = (Determine_ValidatorsDetermine);
// EXTERNAL MODULE: ./src/assets/guide/step-1.png
var step_1 = __webpack_require__(244);
var step_1_default = /*#__PURE__*/__webpack_require__.n(step_1);

// EXTERNAL MODULE: ./src/assets/guide/step-2.png
var step_2 = __webpack_require__(245);
var step_2_default = /*#__PURE__*/__webpack_require__.n(step_2);

// EXTERNAL MODULE: ./src/views/Validators/containers/Guide.scss
var Guide = __webpack_require__(83);
var Guide_default = /*#__PURE__*/__webpack_require__.n(Guide);

// CONCATENATED MODULE: ./src/views/Validators/containers/Guide.js
// Components
// Ducks
// Styles
var Guide_ValidatorsGuide=function ValidatorsGuide(){return react_default.a.createElement(src_components_Modal,{classNames:{container:Guide_default.a.Container},id:VALIDATOR_GUIDE_MODAL_ID,title:"\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 Metamask"},function(_ref){var sectionId=_ref.sectionId;return react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(components_Determine,{isSelected:sectionId===1,title:"1. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 Metamask"},"\u0414\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u0441\u0435\u0442\u0438 Etherus \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C Metamask. \u042D\u0442\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0438 \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443:\xA0",react_default.a.createElement("a",{className:Guide_default.a.Link,href:"https://metamask.io",rel:"noopener noreferrer",target:"_blank"},"https://metamask.io")),react_default.a.createElement(components_Determine,{isSelected:sectionId===2,title:"2. \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435/\u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0430\u0448 \u043A\u043E\u0448\u0435\u043B\u0451\u043A"},"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 Metamask \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0438\u043B\u0438 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043A\u043E\u0448\u0435\u043B\u0451\u043A. \u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C, \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0432 \u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u0439 \u0440\u043E\u043B\u0438\u043A:",react_default.a.createElement("div",{className:Guide_default.a.Frame},react_default.a.createElement("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:true,frameBorder:"0",height:"340",src:"https://www.youtube.com/embed/ZIGUC9JAAw8",title:"Tutorial video",width:"632"}))),react_default.a.createElement(components_Determine,{isSelected:sectionId===3,title:"3. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 Metamask \u043A \u0441\u0435\u0442\u0438 Etherus"},"\u041E\u0442\u043A\u0440\u044B\u0432 Metamask, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u0441 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C\u0438 \u0441\u0435\u0442\u044F\u043C\u0438 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \xAB\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 RPC\xBB. \u041F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 New Network \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F:",react_default.a.createElement("div",{className:Guide_default.a.Steps},react_default.a.createElement("img",{alt:"\u0428\u0430\u0433 \u21161",src:step_1_default.a}),react_default.a.createElement("img",{alt:"\u0428\u0430\u0433 \u21162",src:step_2_default.a}))),react_default.a.createElement(components_Determine,{title:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F"},react_default.a.createElement("strong",null,"RPC URL"),": https://rpc.etherus.org; ",react_default.a.createElement("br",null),react_default.a.createElement("strong",null,"ChainID"),": 32019; ",react_default.a.createElement("br",null),react_default.a.createElement("strong",null,"Symbol"),": ETR; ",react_default.a.createElement("br",null),react_default.a.createElement("strong",null,"Nickname"),": Etherus Mainnet."));});};/* harmony default export */ var containers_Guide = (Guide_ValidatorsGuide);
// EXTERNAL MODULE: ./node_modules/luxon/build/cjs-browser/luxon.js
var luxon = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/ansi-to-react/lib/index.js
var lib = __webpack_require__(246);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/views/Validators/containers/Node.js
// Components
// Ducks
// Services
// Styles
// Utils
var Node_ValidatorsNodeForm=function ValidatorsNodeForm(_ref){var error=_ref.error,handleSubmit=_ref.handleSubmit,isFrom=_ref.isFrom,onCancel=_ref.onCancel,onTrigger=_ref.onTrigger,submittin=_ref.submittin;return react_default.a.createElement(components_Form_Form,{error:error,onSubmit:handleSubmit},react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(components_Input,{label:"\u0425\u043E\u0441\u0442",name:"host",placeholder:"localhost"}),react_default.a.createElement(components_Input,{label:"\u041F\u043E\u0440\u0442",name:"port",placeholder:"22"}),react_default.a.createElement(components_Input,{label:"\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",name:"username",placeholder:"root"}),react_default.a.createElement(components_Input,{label:"\u041F\u0430\u0440\u043E\u043B\u044C",name:"password",type:"password"})),react_default.a.createElement("div",{className:Common_default.a.Actions},react_default.a.createElement(src_components_Button,{color:color_namespaceObject.SECONDARY,onClick:onCancel},"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),isFrom&&react_default.a.createElement(src_components_Button,{color:color_namespaceObject.DANGER,onClick:onTrigger},"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u043B\u044E\u0447"),react_default.a.createElement(src_components_Button,{color:isFrom?gradient_namespaceObject.GREEN:gradient_namespaceObject.PURPLE,type:"submit"},isFrom?'Далее':'Развернуть')));};var ComposedValidatorsNodeForm=Object(Recompose_esm["a" /* compose */])(Object(reduxForm["a" /* default */])({form:VALIDATOR_NODE_FORM_ID,validate:Object(validate["a" /* default */])({host:[Object(validate["c" /* isHost */])()],port:[Object(validate["d" /* isNumber */])(),Object(validate["g" /* max */])(65535),Object(validate["h" /* min */])(0)],password:[Object(validate["i" /* required */])()]})}))(Node_ValidatorsNodeForm);var Node_ValidatorsNodeFormPrivate=function ValidatorsNodeFormPrivate(_ref2){var error=_ref2.error,handleClose=_ref2.handleClose,handleSubmit=_ref2.handleSubmit,onCancel=_ref2.onCancel,onTrigger=_ref2.onTrigger;return react_default.a.createElement(components_Form_Form,{error:error,onSubmit:handleSubmit},react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(components_Input,{label:"\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u0439 \u043A\u043B\u044E\u0447",name:"privateKey"})),react_default.a.createElement("div",{className:Common_default.a.Actions},react_default.a.createElement(src_components_Button,{color:color_namespaceObject.SECONDARY,onClick:onCancel},"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),react_default.a.createElement(src_components_Button,{color:color_namespaceObject.DANGER,onClick:onTrigger},"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0443"),react_default.a.createElement(src_components_Button,{color:gradient_namespaceObject.GREEN,type:"submit"},"\u0414\u0430\u043B\u0435\u0435")));};var ComposedValidatorsNodeFormPrivate=Object(Recompose_esm["a" /* compose */])(Object(reduxForm["a" /* default */])({form:'privateForm',validate:Object(validate["a" /* default */])({privateKey:[Object(validate["i" /* required */])(),Object(validate["e" /* isPrivateKey */])()]})}))(Node_ValidatorsNodeFormPrivate);var Node_ValidatorsNodeFrom=function ValidatorsNodeFrom(_ref3){var handleCancel=_ref3.handleCancel,handleSubmit=_ref3.handleSubmit,handleTrigger=_ref3.handleTrigger,isPrivate=_ref3.isPrivate;return react_default.a.createElement(src_components_Modal,{classNames:{container:Common_default.a.Container},id:VALIDATOR_NODE_FROM_MODAL_ID,title:"\u041E\u0442\u043A\u0443\u0434\u0430 \u043D\u0443\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u043D\u043E\u0434\u0443?"},function(_ref4){var from=_ref4.from,privateKey=_ref4.privateKey;return isPrivate?react_default.a.createElement(ComposedValidatorsNodeFormPrivate,{initialValues:{privateKey:privateKey},onCancel:handleCancel,onSubmit:handleSubmit,onTrigger:handleTrigger}):react_default.a.createElement(ComposedValidatorsNodeForm,{initialValues:{from:from},isFrom:true,onCancel:handleCancel,onSubmit:handleSubmit,onTrigger:handleTrigger});});};var NodeFrom=Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(null,{closeModal:actions_closeModal,openModal:actions_openModal}),Object(Recompose_esm["e" /* withState */])('isPrivate','setPrivate',false),Object(Recompose_esm["c" /* withHandlers */])({handleCancel:function handleCancel(_ref5){var closeModal=_ref5.closeModal,handleReset=_ref5.handleReset;return function(event){closeModal(VALIDATOR_NODE_FROM_MODAL_ID);};},handleSubmit:function handleSubmit(_ref6){var closeModal=_ref6.closeModal,openModal=_ref6.openModal,isPrivate=_ref6.isPrivate;return function(values){closeModal(VALIDATOR_NODE_FROM_MODAL_ID);openModal(VALIDATOR_NODE_MODAL_ID,isPrivate?{privateKey:Object(lodash["get"])(values,'privateKey')}:{from:{host:Object(lodash["get"])(values,'host','localhost'),port:Object(lodash["get"])(values,'port',22),username:Object(lodash["get"])(values,'username','root'),password:Object(lodash["get"])(values,'password')}});};},handleTrigger:function handleTrigger(_ref7){var isPrivate=_ref7.isPrivate,setPrivate=_ref7.setPrivate;return function(){return setPrivate(!isPrivate);};}}))(Node_ValidatorsNodeFrom);var Node_ValidatorsNode=function ValidatorsNode(_ref8){var error=_ref8.error,messages=_ref8.messages,progress=_ref8.progress,retry=_ref8.retry,token=_ref8.token,vPub=_ref8.vPub,handleCancel=_ref8.handleCancel,handleCreateValidator=_ref8.handleCreateValidator,handleReset=_ref8.handleReset,handleSubmit=_ref8.handleSubmit,isLoading=_ref8.isLoading,isProcessing=_ref8.isProcessing,isSuccess=_ref8.isSuccess;return react_default.a.createElement(src_components_Modal,{classNames:{container:classnames_default()(Common_default.a.Container,Object(defineProperty["a" /* default */])({},Common_default.a.ContainerConsole,isProcessing))},id:VALIDATOR_NODE_MODAL_ID,title:isSuccess?"\u0423\u0437\u0435\u043B \u0440\u0430\u0437\u0432\u0451\u0440\u043D\u0443\u0442! ".concat(token):isProcessing?"\u0423\u0437\u0435\u043B \u0440\u0430\u0437\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F: ".concat(token):'Развернуть узел'},function(_ref9){var from=_ref9.from,privateKey=_ref9.privateKey;return isProcessing?react_default.a.createElement(react["Fragment"],null,react_default.a.createElement("div",{className:Common_default.a.Console,id:"console"},react_default.a.createElement("div",{id:"wrapper"},messages.map(function(_ref10,index){var _classNames2;var date=_ref10.date,msg=_ref10.msg,result=_ref10.result;return react_default.a.createElement("div",{className:Common_default.a.Message,key:index},react_default.a.createElement("span",{className:Common_default.a.MessageDate},"[",date.toLocaleString({hour:'2-digit',minute:'2-digit',second:'2-digit'}),"]:\xA0"),index===messages.length-1&&retry?react_default.a.createElement(react["Fragment"],null,react_default.a.createElement("span",{className:Common_default.a.Retry},"[".concat(Object(lodash["get"])(retry,'1',0)-Object(lodash["get"])(retry,'0',0),"/").concat(Object(lodash["get"])(retry,'1',0),"]")),progress&&react_default.a.createElement("span",{className:Common_default.a.Progress},"[".concat(Object(lodash["get"])(progress,'0',0),"/").concat(Object(lodash["get"])(progress,'1',0),"]"))):null,react_default.a.createElement(lib_default.a,{className:classnames_default()(Common_default.a.MessageText,(_classNames2={},Object(defineProperty["a" /* default */])(_classNames2,Common_default.a.MessageTextIsFailure,result==='failure'),Object(defineProperty["a" /* default */])(_classNames2,Common_default.a.MessageTextIsSuccess,result==='success'),_classNames2))},msg));}),error&&react_default.a.createElement("div",{className:Common_default.a.Error},"[Error]: ",error),vPub&&react_default.a.createElement("div",{className:Common_default.a.MessagePub},"############################## vPub READY! ###############################",react_default.a.createElement("br",null),"### ",vPub," ###",react_default.a.createElement("br",null),"##########################################################################"))),!isLoading&&react_default.a.createElement("div",{className:classnames_default()(Common_default.a.Actions,Common_default.a.ActionsConsole)},react_default.a.createElement(src_components_Button,{color:color_namespaceObject.DANGER,onClick:handleCancel},"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"),isSuccess?react_default.a.createElement(src_components_Button,{color:color_namespaceObject.PRIMARY,onClick:handleCreateValidator},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440"):react_default.a.createElement(src_components_Button,{color:gradient_namespaceObject.PURPLE,onClick:handleReset({from:from,privateKey:privateKey})},"\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437"))):react_default.a.createElement(ComposedValidatorsNodeForm,{onCancel:handleCancel,onSubmit:function onSubmit(values){return handleSubmit(Object(objectSpread["a" /* default */])({},values,{from:from,privateKey:privateKey}));}});});};/* harmony default export */ var Node = (Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(null,{closeModal:actions_closeModal,openModal:actions_openModal}),Object(Recompose_esm["e" /* withState */])('error','setError',false),Object(Recompose_esm["e" /* withState */])('isLoading','setLoad',false),Object(Recompose_esm["e" /* withState */])('isProcessing','setProcess',false),Object(Recompose_esm["e" /* withState */])('isSuccess','setSuccess',false),Object(Recompose_esm["e" /* withState */])('messages','setMessages',[]),Object(Recompose_esm["e" /* withState */])('progress','setProgress',null),Object(Recompose_esm["e" /* withState */])('retry','setRetry',null),Object(Recompose_esm["e" /* withState */])('token','setToken',null),Object(Recompose_esm["e" /* withState */])('vPub','setVPub',null),Object(Recompose_esm["c" /* withHandlers */])({handleReset:function handleReset(_ref11){var closeModal=_ref11.closeModal,openModal=_ref11.openModal,setError=_ref11.setError,setLoad=_ref11.setLoad,setMessages=_ref11.setMessages,setProcess=_ref11.setProcess,setProgress=_ref11.setProgress,setRetry=_ref11.setRetry,setSuccess=_ref11.setSuccess,setVPub=_ref11.setVPub;return function(_ref12){var from=_ref12.from,privateKey=_ref12.privateKey;return function(event){setError(false);setLoad(false);setMessages([]);setProcess(false);setProgress(null);setRetry(null);setSuccess(false);setVPub(null);if(from||privateKey){closeModal(VALIDATOR_NODE_MODAL_ID);openModal(VALIDATOR_NODE_FROM_MODAL_ID,{from:from,privateKey:privateKey});}};};}}),Object(Recompose_esm["c" /* withHandlers */])({handleCancel:function handleCancel(_ref13){var closeModal=_ref13.closeModal,handleReset=_ref13.handleReset;return function(event){closeModal(VALIDATOR_NODE_MODAL_ID);handleReset();};},handleCreateValidator:function handleCreateValidator(_ref14){var closeModal=_ref14.closeModal,handleReset=_ref14.handleReset,openModal=_ref14.openModal,vPub=_ref14.vPub;return function(event){closeModal(VALIDATOR_NODE_MODAL_ID);openModal(VALIDATOR_CREATE_MODAL_ID,{vPub:vPub});handleReset();};},handleSubmit:function handleSubmit(_ref15){var setError=_ref15.setError,setLoad=_ref15.setLoad,setMessages=_ref15.setMessages,setProcess=_ref15.setProcess,setProgress=_ref15.setProgress,setRetry=_ref15.setRetry,setSuccess=_ref15.setSuccess,setToken=_ref15.setToken,setVPub=_ref15.setVPub;return function(_ref16){var from=_ref16.from,privateKey=_ref16.privateKey,values=Object(objectWithoutProperties["a" /* default */])(_ref16,["from","privateKey"]);return new Promise(function(resolve,reject){setProcess(true);var messages=[];var socket=new WebSocket('wss://api.etherus.org/nd');socket.onerror=function(error){reject(error);setLoad(false);socket.close();};socket.onmessage=function(event){try{var _JSON$parse=JSON.parse(Object(lodash["get"])(event,'data')),data=_JSON$parse.data,msg=_JSON$parse.msg,result=_JSON$parse.result;if(Object(lodash["has"])(data,'execution.token')){setToken(Object(lodash["get"])(data,'execution.token'));}if(result){setLoad(false);socket.close();messages.push({msg:msg,date:luxon["DateTime"].local(),result:result});if(result==='success'){resolve();setSuccess(true);setVPub(Object(lodash["get"])(data,'vPub'));}else{var error=Object(lodash["get"])(data,'err');setError(typeof error==='string'?error:'Unknown error!');reject(msg);}}else{setProgress(Object(lodash["get"])(data,'progress',null));setRetry(Object(lodash["get"])(data,'retry',null));if(Object(lodash["has"])(data,'retry')){var retry=Object(lodash["get"])(data,'retry.1')-Object(lodash["get"])(data,'retry.0');if(retry===0){messages.push({msg:msg,date:luxon["DateTime"].local(),result:result});}else{var lastMessage=Object(lodash["last"])(messages);messages[messages.length-1]=Object(objectSpread["a" /* default */])({},lastMessage,{date:luxon["DateTime"].local()});}}else{messages.push({msg:msg,date:luxon["DateTime"].local(),result:result});}}setMessages(messages);}catch(error){reject(error);setLoad(false);setProcess(false);socket.close();}var $console=document.getElementById('console');var $wrapper=document.getElementById('wrapper');if($console&&$wrapper){$console.scrollTop=$wrapper.clientHeight;}};socket.onopen=function(){setLoad(true);var to={host:Object(lodash["get"])(values,'host','localhost'),port:Object(lodash["get"])(values,'port',22),username:Object(lodash["get"])(values,'username','root'),password:Object(lodash["get"])(values,'password')};socket.send(JSON.stringify({command:from||privateKey?'migrate':'install',data:from||privateKey?{from:from,key:privateKey,to:to}:to}));};}).catch(function(error){throw new SubmissionError["a" /* default */]({_error:error});});};}}))(Node_ValidatorsNode));
// CONCATENATED MODULE: ./src/views/Validators/components/From.js
// Components
// Entities
// Services
var From_ValidatorsFrom=function ValidatorsFrom(_ref){var label=_ref.label,name=_ref.name,validators=_ref.validators,value=_ref.value;return react_default.a.createElement(Select_Select,{format:function format(hash){return hash&&{label:hash,value:hash};},label:label,name:name,parse:function parse(validator){return Object(lodash["get"])(validator,'value');},placeholder:"32 Bytes"},function(_ref2){var inputValue=_ref2.inputValue,onClick=_ref2.onClick,value=_ref2.value;return validators.filter(function(_ref3){var hash=_ref3.hash;return hash.toLowerCase().indexOf(inputValue)>-1;}).map(function(_ref4){var hash=_ref4.hash;return react_default.a.createElement(components_Item,{key:hash,label:hash,onClick:onClick,value:hash});});});};var From_mapStateToProps=function mapStateToProps(state,_ref5){var value=_ref5.value;return{validators:getValidatorListByAddress(state,selector_getAddress(state))};};/* harmony default export */ var From = (Object(es["b" /* connect */])(From_mapStateToProps)(From_ValidatorsFrom));
// CONCATENATED MODULE: ./src/views/Validators/containers/Pause.js
// Components
// Ducks
// Entities
// Services
// Utils
// Styles
var Pause_ValidatorsPause=function ValidatorsPause(_ref){var handleCancel=_ref.handleCancel,handleSubmit=_ref.handleSubmit,submitting=_ref.submitting,isOwner=_ref.isOwner;return react_default.a.createElement(components_Form_Form,{onSubmit:handleSubmit},submitting&&react_default.a.createElement(src_components_Metamask,null),react_default.a.createElement(From,{label:"vFrom",name:"address"}),isOwner&&react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(Select_Select,{format:function format(id){return{label:parse_parsePause(id),value:id};},label:"\u0422\u0438\u043F \u043F\u0430\u0443\u0437\u044B",name:"pauseCause",parse:function parse(item){return Object(lodash["get"])(item,'value');}},[PAUSE_CAUSE_VOLUNTARILY,PAUSE_CAUSE_UNTIL_BLOCK,PAUSE_CAUSE_UNTIL_FINE,PAUSE_CAUSE_PUNISHMENT].map(function(id){return react_default.a.createElement(components_Item,{key:id,label:parse_parsePause(id),value:id});})),react_default.a.createElement(components_Input,{label:"PUNISH VALUE",name:"punishValue"})),react_default.a.createElement("div",{className:Common_default.a.Actions},react_default.a.createElement(src_components_Button,{color:color_namespaceObject.SECONDARY,onClick:handleCancel},"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),react_default.a.createElement(src_components_Button,{color:color_namespaceObject.DANGER,type:"submit"},"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C")));};var Pause_mapStateToProps=function mapStateToProps(state){return{isOwner:selector_isOwner(state)};};var ComposedValidatorsPause=Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(Pause_mapStateToProps,{closeModal:actions_closeModal}),Object(reduxForm["a" /* default */])({form:VALIDATOR_PAUSE_FORM_ID,validate:Object(validate["a" /* default */])({address:[Object(validate["i" /* required */])(),Object(validate["b" /* isHash */])()],pauseCause:[Object(validate["i" /* required */])(),Object(validate["d" /* isNumber */])(),Object(validate["f" /* isUint */])(8)],punishValue:[Object(validate["i" /* required */])(),Object(validate["d" /* isNumber */])(),Object(validate["f" /* isUint */])(96)]})}),Object(Recompose_esm["c" /* withHandlers */])({handleCancel:function handleCancel(_ref2){var closeModal=_ref2.closeModal;return function(event){return closeModal(VALIDATOR_PAUSE_MODAL_ID);};}}))(Pause_ValidatorsPause);var Pause_ValidatorsPauseModal=function ValidatorsPauseModal(_ref3){var handleSubmit=_ref3.handleSubmit;return react_default.a.createElement(src_components_Modal,{classNames:{container:Common_default.a.Container},id:VALIDATOR_PAUSE_MODAL_ID,title:"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"},function(_ref4){var hash=_ref4.hash;return react_default.a.createElement(ComposedValidatorsPause,{initialValues:{hash:hash,pauseCause:PAUSE_CAUSE_VOLUNTARILY,punishValue:0},onSubmit:handleSubmit});});};/* harmony default export */ var Pause = (Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(null,{pauseValidator:actions_pauseValidator}),Object(Recompose_esm["c" /* withHandlers */])({handleSubmit:function handleSubmit(_ref5){var pauseValidator=_ref5.pauseValidator;return function(values){return pauseValidator(values);};}}))(Pause_ValidatorsPauseModal));
// EXTERNAL MODULE: ./src/views/Validators/Validators.scss
var Validators_Validators = __webpack_require__(40);
var Validators_default = /*#__PURE__*/__webpack_require__.n(Validators_Validators);

// CONCATENATED MODULE: ./src/views/Validators/Validators.js
// API
// Components
// Containers
// Ducks
// Entities
// Services
// Styles
var Validators_Validators_Validators=function Validators(_ref){var _classNames;var address=_ref.address,networkId=_ref.networkId,stats=_ref.stats,validators=_ref.validators,handleConnect=_ref.handleConnect,handleCreate=_ref.handleCreate,handleGuide=_ref.handleGuide,handleInstall=_ref.handleInstall,handleMove=_ref.handleMove,isConnected=_ref.isConnected,isConnecting=_ref.isConnecting,isFetching=_ref.isFetching,isOwner=_ref.isOwner,isSupported=_ref.isSupported,hasAccount=_ref.hasAccount;var rootClassNames=classnames_default()(Validators_default.a.Root,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,Validators_default.a.RootIsConnected,isConnected),Object(defineProperty["a" /* default */])(_classNames,Validators_default.a.RootIsOwner,isOwner),_classNames));return react_default.a.createElement("div",{className:rootClassNames},react_default.a.createElement("div",{className:Validators_default.a.Header},react_default.a.createElement("div",{className:Validators_default.a.HeaderLeft},react_default.a.createElement(components_Typography_Typography,{variant:components_Typography_Typography.VARIANT.H6},"\u0412\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440\u044B"),react_default.a.createElement(components_Typography_Typography,{className:Validators_default.a.Status,variant:components_Typography_Typography.VARIANT.CAPTION},isConnected?isOwner?"OWNER":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E: ".concat(address):'Для редактирования нужна авторизация')),react_default.a.createElement("div",{className:Validators_default.a.HeaderRight},isConnecting?react_default.a.createElement("div",{className:Validators_default.a.Connecting},react_default.a.createElement(src_components_Progress,{size:20})):!isConnected?isSupported&&networkId===api_config.NETWORK_ID&&hasAccount?react_default.a.createElement(src_components_Button,{color:gradient_namespaceObject.GREEN,onClick:handleConnect},"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C Metamask"):react_default.a.createElement(src_components_Button,{color:gradient_namespaceObject.ORANGE,onClick:handleGuide},!isSupported&&'Как подключить Metamask?',isSupported&&!hasAccount&&'Как добавить аккаунт в Metamask?',isSupported&&hasAccount&&networkId!==api_config.NETWORK_ID&&'Как добавить сеть Etherus?'):react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(src_components_Button,{color:gradient_namespaceObject.GREEN,onClick:handleMove},"\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0443\u0437\u0435\u043B"),react_default.a.createElement(src_components_Button,{color:gradient_namespaceObject.PURPLE,onClick:handleInstall},"\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0443\u0437\u0435\u043B"),react_default.a.createElement(src_components_Button,{color:color_namespaceObject.PRIMARY,onClick:handleCreate},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440")))),isFetching&&react_default.a.createElement("div",{className:Validators_default.a.Progress},react_default.a.createElement(src_components_Progress,null)),validators&&validators.length>0&&react_default.a.createElement("div",{className:Validators_default.a.List},react_default.a.createElement(views_Validators_components_Table,{data:validators,stats:stats})),react_default.a.createElement(containers_Guide,null),react_default.a.createElement(Node,null),react_default.a.createElement(NodeFrom,null),isConnected&&react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(Confirm,null),react_default.a.createElement(ConfirmAccount,null),react_default.a.createElement(Create,null),react_default.a.createElement(Deposit,null),react_default.a.createElement(Pause,null)));};var Validators_mapStateToProps=function mapStateToProps(state){return Object(objectSpread["a" /* default */])({},selector_getValidatorsView(state),selector_getSession(state),{validators:selector_getValidatorList(state).sort(function(_ref2,_ref3){var deposit=_ref2.deposit,pauseCause=_ref2.pauseCause;var depositB=_ref3.deposit,pauseCauseB=_ref3.pauseCause;return pauseCause>pauseCauseB?1:pauseCause<pauseCauseB?-1:deposit<depositB?1:deposit>depositB?-1:0;})});};/* harmony default export */ var views_Validators_Validators = (Object(Recompose_esm["a" /* compose */])(Object(es["b" /* connect */])(Validators_mapStateToProps,{connectMetamask:actions_connectMetamask,fetchValidators:actions_fetchValidators,openModal:actions_openModal,setStats:actions_setStats}),Object(Recompose_esm["c" /* withHandlers */])({// Fetch
fetchStats:function fetchStats(_ref4){var setStats=_ref4.setStats;return function(){return fetch('https://api.etherus.org/vl/stats').then(function(res){return res.json();}).then(function(res){var stats=Object(lodash["get"])(res,'stats');var normalizedData={};stats.forEach(function(item){normalizedData["0x".concat(Object(lodash["get"])(item,'vPub'))]=item;});setStats(normalizedData);});};},// handlers
handleConnect:function handleConnect(_ref5){var connectMetamask=_ref5.connectMetamask;return function(event){return connectMetamask();};},handleCreate:function handleCreate(_ref6){var openModal=_ref6.openModal;return function(event){return openModal(VALIDATOR_CREATE_MODAL_ID);};},handleGuide:function handleGuide(_ref7){var hasAccount=_ref7.hasAccount,isSupported=_ref7.isSupported,networkId=_ref7.networkId,openModal=_ref7.openModal;return function(event){return openModal(VALIDATOR_GUIDE_MODAL_ID,{sectionId:!isSupported?1:isSupported&&!hasAccount?2:3});};},handleInstall:function handleInstall(_ref8){var openModal=_ref8.openModal;return function(event){return openModal(VALIDATOR_NODE_MODAL_ID);};},handleMove:function handleMove(_ref9){var openModal=_ref9.openModal;return function(event){return openModal(VALIDATOR_NODE_FROM_MODAL_ID);};}}),Object(Recompose_esm["b" /* lifecycle */])({componentDidMount:function componentDidMount(){var _this$props=this.props,fetchStats=_this$props.fetchStats,fetchValidators=_this$props.fetchValidators;fetchStats();fetchValidators();setInterval(fetchStats,15000);}}))(Validators_Validators_Validators));
// CONCATENATED MODULE: ./src/views/Validators/index.js
// Ducks

// EXTERNAL MODULE: ./src/App.scss
var src_App = __webpack_require__(150);
var App_default = /*#__PURE__*/__webpack_require__.n(src_App);

// EXTERNAL MODULE: ./node_modules/react-table/react-table.css
var react_table = __webpack_require__(372);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-pro/css/all.min.css
var all_min = __webpack_require__(373);

// CONCATENATED MODULE: ./src/App.js
// Views
// Styles
var App_App=function App(_ref){var match=_ref.match;return react_default.a.createElement("div",{className:App_default.a.Root},react_default.a.createElement("div",{className:App_default.a.Wrapper},react_default.a.createElement(Switch["a" /* default */],null,react_default.a.createElement(Route["a" /* default */],{path:"".concat(match.path,"/"),component:views_Validators_Validators}))));};/* harmony default export */ var src_App_0 = (App_App);
// CONCATENATED MODULE: ./src/utils/serviceWorker.js
/* eslint-disable */ // This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(config){if( true&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("",window.location.href);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="".concat("","/service-worker.js");if(isLocalhost){// This is running on localhost. Let's check if a service worker still exists or not.
checkValidServiceWorker(swUrl,config);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://bit.ly/CRA-PWA');});}else{// Is not localhost. Just register service worker
registerValidSW(swUrl,config);}});}}function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;if(installingWorker==null){return;}installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the updated precached content has been fetched,
// but the previous service worker will still serve the older
// content until all client tabs are closed.
console.log('New content is available and will be used when all '+'tabs for this page are closed. See https://bit.ly/CRA-PWA.');// Execute callback
if(config&&config.onUpdate){config.onUpdate(registration);}}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');// Execute callback
if(config&&config.onSuccess){config.onSuccess(registration);}}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl,config){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
var contentType=response.headers.get('content-type');if(response.status===404||contentType!=null&&contentType.indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl,config);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/web3/src/index.js
var src = __webpack_require__(151);
var src_default = /*#__PURE__*/__webpack_require__.n(src);

// CONCATENATED MODULE: ./src/api/schema.js
var schema_validator=new normalizr_es["b" /* schema */].Entity('validators',{},{idAttribute:'hash'});
// EXTERNAL MODULE: ./src/assets/contract.json
var assets_contract = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/redux-form/es/reducer.js + 2 modules
var es_reducer = __webpack_require__(565);

// CONCATENATED MODULE: ./src/entities/reducer.js
// Models
// Types
var modelsReducer=Object(redux["c" /* combineReducers */])({validators:reducer});/* harmony default export */ var entities_reducer = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case UPDATE_ENTITIES:return action.force?Object(objectSpread["a" /* default */])({},state,action.data.entities):Object(lodash["merge"])({},state,action.data.entities);default:return modelsReducer(state,action);}});
// CONCATENATED MODULE: ./src/services/reducer.js
// Reducers
var servicesReducer=Object(redux["c" /* combineReducers */])({modals:modals_reducer,session:session_reducer});/* harmony default export */ var services_reducer = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments.length>1?arguments[1]:undefined;switch(action.type){default:return servicesReducer(state,action);}});
// CONCATENATED MODULE: ./src/views/reducer.js
// Reducers
var viewsReducer=Object(redux["c" /* combineReducers */])({validators:ducks_reducer});/* harmony default export */ var views_reducer = (function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments.length>1?arguments[1]:undefined;switch(action.type){default:return viewsReducer(state,action);}});
// CONCATENATED MODULE: ./src/store.js
/* eslint-disable */// API
// Assets
// Middleware
// Reducers
// Services
var store_reducer=Object(redux["c" /* combineReducers */])({entities:entities_reducer,form:es_reducer["a" /* default */],services:services_reducer,views:views_reducer});var composeEnhancers=typeof window==='object'&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):redux["d" /* compose */];/* harmony default export */ var src_store = (function(history){var isSupported=false;var privateWeb3;var web3=new src_default.a(api_config.URL);if(window.ethereum||window.web3){isSupported=true;privateWeb3=new src_default.a(window.ethereum);}var store=Object(redux["e" /* createStore */])(store_reducer,composeEnhancers(Object(redux["a" /* applyMiddleware */])(redux_thunk_es["a" /* default */].withExtraArgument({history:history,schema:schema_namespaceObject,privateWeb3:privateWeb3,web3:web3,account:privateWeb3&&new privateWeb3.eth.Contract(assets_contract,api_config.CONTRACT_ADDRESS,{from:window.ethereum.selectedAddress}),contract:new web3.eth.Contract(assets_contract,api_config.CONTRACT_ADDRESS)}))));if(isSupported){store.dispatch({type:SET_SUPPORT,isSupported:true});}web3.eth.getBlockNumber().then(function(blockNumber){Object(lodash["has"])(window,'ethereum.networkVersion')&&store.dispatch({type:SET_NETWORK_ID,networkId:Object(lodash["get"])(window,'ethereum.networkVersion')});Object(lodash["has"])(window,'ethereum.selectedAddress')&&store.dispatch({type:SET_HAS_ACCOUNT});store.dispatch({type:SET_CURRENT_BLOCK_NUMBER,blockNumber:blockNumber});web3.eth.subscribe('newBlockHeaders',function(error,result){if(!error){store.dispatch({type:SET_CURRENT_BLOCK_NUMBER,blockNumber:Object(lodash["get"])(result,'number')});}});});return store;});
// CONCATENATED MODULE: ./src/index.js
// App
// Utils
var src_history=Object(esm_history["a" /* createBrowserHistory */])();var src_store_0=src_store(src_history);react_dom_default.a.render(react_default.a.createElement(es["a" /* Provider */],{store:src_store_0},react_default.a.createElement(Router["a" /* default */],{history:src_history},react_default.a.createElement(Route["a" /* default */],{path:"/",component:src_App_0}))),document.getElementById('root'));// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Modal_Root__3q3lT","Backdrop":"Modal_Backdrop__C2Mqp","Container":"Modal_Container__3Q55l","modalInit":"Modal_modalInit__3LUxY","Title":"Modal_Title__XbkfL"};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Field_Root__3MB3-","Error":"Field_Error__3CFo8","Header":"Field_Header__3Hfs5","Label":"Field_Label__1iFfw"};

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Input_Root__3VpEi","RootIsErred":"Input_RootIsErred__3eeWg","RootIsFocused":"Input_RootIsFocused__2RQe7","RootIsReadOnly":"Input_RootIsReadOnly__1Myl8","Input":"Input_Input__3rMjF"};

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Metamask_Root__zrno2","Cover":"Metamask_Cover__I9E_H","Container":"Metamask_Container__1FZOa","Logo":"Metamask_Logo__Ray6S","Title":"Metamask_Title__2HArS"};

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Root":"Determine_Root__3B6cr","RootIsSelected":"Determine_RootIsSelected__2zSNW","Content":"Determine_Content__jXH7T"};

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Container":"Guide_Container__3FIps","Frame":"Guide_Frame__2_1V0","Link":"Guide_Link__1rgrz","Steps":"Guide_Steps__YblhS"};

/***/ })

},[[255,1,2]]]);
//# sourceMappingURL=main.de104671.chunk.js.map