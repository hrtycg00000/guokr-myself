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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/api/index.js":
/*!**************************************!*\
  !*** ./src/javascripts/api/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//封装这个api是为了统一处理跨域路径还有对请求回来的数据处理\r\nconst api = {\r\n  request ({\r\n    url, data, methods, success\r\n  }) {\r\n    return $.ajax({\r\n      url: '/maoyan' + url,\r\n      data: data || {},\r\n      methods: methods || 'get',\r\n        success: (res) => {\r\n          return res\r\n      },\r\n      error: (error) => {\r\n        console.log('请求出错了', error)\r\n      }\r\n    })\r\n  }\r\n}\r\n\r\nmodule.exports = api\r\n\n\n//# sourceURL=webpack:///./src/javascripts/api/index.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-controller.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/controllers/app-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//整个应用程序的控制器，其中有一个任务就是将app应用的主体视图渲染到页面\r\nconst appMainController = __webpack_require__(/*! ./app-main-controller */ \"./src/javascripts/controllers/app-main-controller.js\")\r\nconst render = () => {\r\n  //0. 承载容器\r\n  let oapp = $('#app')\r\n  //1. 获取视图\r\n  let appHeaderView = __webpack_require__(/*! ../views/app-header.html */ \"./src/javascripts/views/app-header.html\")\r\n  let appFooterView = __webpack_require__(/*! ../views/app-footer.html */ \"./src/javascripts/views/app-footer.html\")\r\n  let appMainView = __webpack_require__(/*! ../views/app-main.html */ \"./src/javascripts/views/app-main.html\")\r\n  \r\n  //2. 渲染视图\r\n  $('#app #header').html(appHeaderView)\r\n  $('#app #footer').html(appFooterView)\r\n  appMainController.render()\r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-main-controller.js":
/*!************************************************************!*\
  !*** ./src/javascripts/controllers/app-main-controller.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//整个应用程序的控制器，其中有一个任务就是将app应用的主体视图渲染到页面\r\nconst {getFilmsList} = __webpack_require__(/*! ../models/app-main-model */ \"./src/javascripts/models/app-main-model.js\")\r\nconst render = async () => {\r\n  let appMainView = __webpack_require__(/*! ../views/app-main.html */ \"./src/javascripts/views/app-main.html\")\r\n  let filmsList = await getFilmsList()\r\n  let template = Handlebars.compile(appMainView)\r\n  for (const i of filmsList.movieList) {\r\n    i.img = 'https://p' + i.img.charAt(8) + '.meituan.net/128.180/movie/' + i.img.split('/')[5]\r\n  }\r\n  $('#app #main').html(template({films: filmsList.movieList}))\r\n  \r\n  \r\n  /* getFilmsList((data) => {\r\n    let template = Handlebars.compile(appMainView)\r\n    for (const i of data.movieList) {\r\n      i.img = 'https://p' + i.img.charAt(8) + '.meituan.net/128.180/movie/' + i.img.split('/')[5]\r\n    }\r\n    $('#app #main').html(template({films: data.movieList}))\r\n  }) */\r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-main-controller.js?");

/***/ }),

/***/ "./src/javascripts/index.js":
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appController = __webpack_require__(/*! ./controllers/app-controller */ \"./src/javascripts/controllers/app-controller.js\")\r\n\r\nappController.render()\n\n//# sourceURL=webpack:///./src/javascripts/index.js?");

/***/ }),

/***/ "./src/javascripts/models/app-main-model.js":
/*!**************************************************!*\
  !*** ./src/javascripts/models/app-main-model.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\");\r\nconst getFilmsList = (callback) => {\r\n  return api.request({url: '/ajax/movieOnInfoList?token='})\r\n  /* api.request({\r\n    url: '/ajax/movieOnInfoList?token=',\r\n    // url: '/science_api/channels',\r\n    success: (data) => {\r\n      callback(data)\r\n    }\r\n  }) */\r\n}\r\n\r\nmodule.exports = {\r\n  getFilmsList\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/models/app-main-model.js?");

/***/ }),

/***/ "./src/javascripts/views/app-footer.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-footer.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<footer id=\\\"app-footer\\\">    <nav>        <a href=\\\"\\\" class=\\\"active\\\"><i class=\\\"icon icon-dianying\\\"></i><span>电影</span></a>        <a href=\\\"\\\"><i class=\\\"icon icon-yingyuan\\\"></i><span>影院</span></a>        <a href=\\\"\\\"><i class=\\\"icon icon-wode-copy\\\"></i><span>我的</span></a>    </nav></footer>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-footer.html?");

/***/ }),

/***/ "./src/javascripts/views/app-header.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-header.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header id=\\\"app-header\\\">    猫眼电影</header>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-header.html?");

/***/ }),

/***/ "./src/javascripts/views/app-main.html":
/*!*********************************************!*\
  !*** ./src/javascripts/views/app-main.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!-- 内容区域顶部的控制 start --><div class=\\\"film-controls\\\">    <div class=\\\"film-controls__city\\\">北京</div>    <div class=\\\"film-controls__types\\\">        <div class=\\\"film-controls__type-item active\\\">正在热映</div>        <div class=\\\"film-controls__type-item\\\">即将上映</div>    </div>    <div class=\\\"film-controls__search\\\"><i class=\\\"icon icon-wode-copy\\\"></i></div></div><!-- 内容区域顶部的控制 end --><main id=\\\"app-container\\\">                <!-- 内容影片列表 start -->    <div class=\\\"film-list\\\">        {{#each films}}        <div class=\\\"film-list__item\\\">            <div class=\\\"film-list__item-img\\\">                <img width=\\\"100%\\\" height=\\\"100%\\\" src=\\\"{{img}}\\\" alt=\\\"\\\">            </div>            <div class=\\\"film-list__item-info\\\">                <div class=\\\"film-list__item-title\\\">                    <h1>{{nm}}</h1>                    {{#if version}}                    <span class=\\\"film-list__item-desc-img max\\\"></span>                    {{/if}}                </div>                <div class=\\\"film-list__item-grade\\\">{{#if globalReleased}}观众评 <span>{{sc}}</span>{{else}} <span>{{wish}}</span> 人想看{{/if}}</div>                <div class=\\\"film-list__item-actor\\\">主演: <span>{{star}}</span></div>                <div class=\\\"film-list__item-count\\\">{{showInfo}}</div>            </div>            <div class=\\\"film-list__item-btn\\\">                {{#if globalReleased}}                <button class=\\\"film-list__btn film-list__btn--buy\\\">购票</button>                {{else}}                <button class=\\\"film-list__btn film-list__btn--pre\\\">预售</button>                 {{/if}}            </div>        </div>        {{/each}}    </div>    <!-- 内容影片列表 end --></main>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-main.html?");

/***/ })

/******/ });