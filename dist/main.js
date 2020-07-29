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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// CONTACT TAB COMPONENT\n\nconst contact =(() => {\n    const main = document.createElement('main');\n    main.classList.add('contact-container');\n\n    const header = document.createElement('header');\n    const generateHeaderContents = (() => {\n        const h2 = document.createElement('h2');\n        h2.innerText = 'dolores';\n\n        const para = document.createElement('p');\n        para.innerText = '~ The home of Nigerian Delicacies'\n\n        const append =((...args) => {\n            args.forEach(arg => header.appendChild(arg));\n        })(h2, para);\n    })();\n\n    const article = document.createElement('article');\n    const generateArticleContents = (() => {\n        const setAtributes = (elem, atrrs) => {\n            for (const key in atrrs) {\n                elem.setAttribute(key, atrrs[key]);\n            }\n        }\n\n        const img = document.createElement('img');\n        setAtributes(img, {'src': '../img/location.png', 'width': '300', 'height': '250'});\n\n        const para = document.createElement('p');\n        para.innerHTML = 'We are located at Port-Harcourt Mall, No. 1 Azikiwe Road.<br />Call us on +234-000-000-000 or +234-111-111-111';\n\n        const append =((...args) => {\n            args.forEach(arg => article.appendChild(arg));\n        })(img, para);\n    })()\n\n    const appendToMain = ((...args) => {\n        args.forEach(arg => main.appendChild(arg));\n    })(header, article)\n\n    return {\n        main\n    }\n})()\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// PROJECT'S FOOTER PAGE\n\nconst authorDetails = (() => {\n    const footer = document.createElement('footer');\n    footer.classList.add('footer');\n\n    const generateFooterContents = ((...args) => {\n        args = Array.from(args)\n\n        const setAtributes = (elem, atrrs) => {\n            for (const key in atrrs) {\n                elem.setAttribute(key, atrrs[key]);\n            }\n        }\n\n        const anchors = args.map(arg => {\n            const a = document.createElement('a');\n            setAtributes(a, {'href': arg[0], 'target': '_blank'});\n            a.textContent = arg[1];\n            return a;\n        });\n\n        const para = document.createElement('p');\n        para.innerText = 'created by victor orlunda'\n\n        const para1 = document.createElement('p');\n        para1.innerText = 'github: ';\n        para1.insertAdjacentElement('beforeend', anchors[0])\n\n        const para2 = document.createElement('p');\n        para2.innerText = 'twitter: ';\n        para2.insertAdjacentElement('beforeend', anchors[1])\n\n        const appendToFooter = ((...args) => {\n            args.forEach(arg => {\n                footer.appendChild(arg)\n            })\n        })(para, para1, para2)\n\n    })(['https://github.com/dev-opus', 'dev-opus'], ['https://twitter.com/hiatus_01', 'hiatus_01']);\n\n    return {\n        footer\n    }\n})()\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authorDetails);\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// HOME TAB COMPONENT\n\nconst welcomePage = (() => {\n    const main = document.createElement('main');\n    main.classList.add('home-container');\n\n    const header = document.createElement('header');\n    header.classList.add('home-header');\n\n    const generateHeaderContents = (() => {\n        const h2 = document.createElement('h2')\n        h2.innerText = 'Welcome to Dolores'\n\n        const p = document.createElement('p');\n        p.innerText = '~ The home of Nigerian Delicacies'\n\n        const append = ((...args) => {\n            args.forEach(arg => header.appendChild(arg));\n        })(h2, p);\n    })()\n\n    const article = document.createElement('article');\n    article.classList.add('home-text')\n\n    const generateArticleContents = (() => {\n        const setAtributes = (elem, atrrs) => {\n            for (const key in atrrs) {\n                elem.setAttribute(key, atrrs[key]);\n            }\n        }\n\n        const img = document.createElement('img');\n        setAtributes(img, {'src': '../img/jollof-rice-2.jpg', 'width': '300', 'height': '250'})\n\n        const div = document.createElement('div');\n        div.classList.add('img-container');\n        div.appendChild(img);\n\n        const para = document.createElement('p');\n        para.innerText = 'Dolores offers the best mouth-watering and satisfying nigerian dishes. Our cousines ranges from a variety of rice dishes, to soups. click on the other tabs to find out more.'\n\n        const append =((...args) => {\n            args.forEach(arg => article.appendChild(arg))\n        })(div, para)\n    })()\n\n    const appendToMain = ((...args) => {\n        args.forEach(arg => main.appendChild(arg))\n    })(header, article)\n\n    return {\n        main\n    }\n})()\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (welcomePage);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n\nconst referenceElement = document.getElementById('content');\nreferenceElement.insertAdjacentElement('beforebegin', _navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header)\nreferenceElement.insertAdjacentElement('afterend', _footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer)\n\nconst homeTab = document.querySelector('.home')\nconst menuTab = document.querySelector('.menu')\nconst contTab = document.querySelector('.contact')\n\nhomeTab.addEventListener('click', () => {\n    homeTab.classList.add('active')\n    referenceElement.innerHTML = '';\n    referenceElement.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main)\n\n    menuTab.classList.remove('active')\n    contTab.classList.remove('active')\n});\n\nmenuTab.addEventListener('click', () => {\n    menuTab.classList.add('active')\n    referenceElement.innerHTML = '';\n    referenceElement.appendChild(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main)\n\n    homeTab.classList.remove('active')\n    contTab.classList.remove('active')\n})\n\ncontTab.addEventListener('click', () => {\n    contTab.classList.add('active')\n    referenceElement.innerHTML = '';\n    referenceElement.appendChild(_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"].main)\n\n    homeTab.classList.remove('active')\n    menuTab.classList.remove('active')\n})\n\nconst onLoad = (() => {\n    homeTab.classList.add('active')\n    referenceElement.innerHTML = '';\n    referenceElement.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main)\n\n    menuTab.classList.remove('active')\n    contTab.classList.remove('active')\n})()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// MENU COMONENT TAB\nconst menu =(() => {\n    const main = document.createElement('main');\n    main.classList.add('menu-container');\n\n    const header = document.createElement('header');\n    header.classList.add('menu-header');\n\n    const generateHeaderContents = (() => {\n        const h2 = document.createElement('h2');\n        h2.innerText = 'dolores'\n\n        const para = document.createElement('p');\n        para.innerText = '~ The home of Nigerian Delicacies';\n\n        const append =((...args) => {\n            args.forEach(arg => header.appendChild(arg));\n        })(h2, para);\n    })()\n\n    const article = document.createElement('article');\n    article.classList.add('menu-text');\n\n    const para = document.createElement('p');\n    para.innerText = 'Browse through our list of mouth-watering dishes original to the Nigerian people'\n\n    const grid = document.createElement('div');\n    grid.classList.add('menu-grid');\n\n    const generateGridContents =(() => {\n        const setAtributes = (elem, atrrs) => {\n            for (const key in atrrs) {\n                elem.setAttribute(key, atrrs[key]);\n            }\n        }\n\n        const generateImages =((...args) => {\n            const texts = ['coconut rice', 'oha soup', 'jollof rice and chicken', 'goatmeat pepersoup', 'ogbono soup', 'afang soup']\n            args.forEach(arg => {\n                const img = document.createElement('img');\n                setAtributes(img, arg)\n\n                const cell = document.createElement('div');\n                cell.classList.add('menu-item');\n\n                cell.appendChild(img);\n                cell.insertAdjacentText('beforeend', texts[texts.length - 1]);\n                texts.pop();\n\n                grid.appendChild(cell)\n            })\n        })({'src': '../img/afang.jpg'}, {'src':'../img/ogbono.jpg', 'width': '320'}, {'src': '../img/goatmeat.jpg'}, {'src': '../img/jollof.jpg'}, {'src': '../img/oha-soup.jpg', 'width': '320'}, {'src': '../img/coconut.jpg'});\n    })()\n\n    const appendToArticle = ((...args) => {\n        args.forEach(arg => article.appendChild(arg))\n    })(para, grid);\n\n    const appendToMain = ((...args) => {\n        args.forEach(arg => main.appendChild(arg))\n    })(header, article);\n\n    return {\n        main\n    }\n})()\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// PROJECT'S NAVIGATION BAR\n\nconst navBar = (() => {\n    const header = document.createElement('header');\n    header.classList.add('main-header');\n\n    const logo = document.createElement('div');\n    logo.classList.add('logo');\n    logo.innerText = 'dolores'\n\n    const tabs = document.createElement('div');\n    tabs.classList.add('nav-bar');\n    \n    const generateTabcontents = ((...args) => {\n        const texts = ['contact', 'menu', 'home']\n        args = Array.from(args)\n        const elems1 = args.map(arg => {\n            const a = document.createElement('a');\n            a.setAttribute('href', '#');\n            a.innerText = arg;\n            a.classList.add(texts[texts.length -1])\n            texts.pop()\n            return a;\n        });\n\n        const elems2 = elems1.map(node => {\n            const li = document.createElement('li');\n            li.appendChild(node);\n            return li;\n        })\n\n        const elems3 = elems2.map(node => {\n            const ul = document.createElement('ul');\n            ul.appendChild(node);\n            return ul;\n        })\n\n        elems3.forEach(node => {\n            tabs.appendChild(node);\n        })\n    })('home', 'menu', 'contact');\n\n\n    const appendToHeader = ((...args) => {\n        args.forEach(arg => header.appendChild(arg))\n    })(logo, tabs)\n\n    return {\n        header\n    }\n})()\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navBar);\n\n//# sourceURL=webpack:///./src/navigation.js?");

/***/ })

/******/ });