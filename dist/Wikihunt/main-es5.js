function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGameGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-screen container mx-auto\">    \r\n  <span>\r\n    <h1 class=\"text-4xl germania text-center\">{{this.title}}</h1>\r\n    <h4 class=\"text-1 germania text-center\"><span>Cazando a </span> {{this.name}}</h4>\r\n    <p class=\"text-4xl germania text-center\">{{cont}}</p>\r\n    <hr>\r\n  </span>\r\n\r\n  <!-- Gif de carga  -->\r\n  <img *ngIf=\"loading\" id=\"carga\" class=\"flex justify-center\" src=\"https://rempe.com.co/images/cargandoImagen.gif\">\r\n\r\n  <!-- Mensaje de error -->\r\n  <div *ngIf=\"alert\" class=\"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative\" role=\"alert\">\r\n      <strong class=\"font-bold\">Rayos!</strong>\r\n      <span class=\"block sm:inline\"> Parece que tenemos problemas con esa palabra, por favor escoge otra para continuar.</span>\r\n      <span class=\"absolute top-0 bottom-0 right-0 px-4 py-3\" (click)=\"alert=false\">\r\n        <svg class=\"fill-current h-6 w-6 text-red-500\" role=\"button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><title>Close</title><path d=\"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z\"/></svg>\r\n      </span>\r\n    </div>\r\n  \r\n  <!-- Conceptos  -->  \r\n  <span *ngIf=\"!loading\" class=\"flex flex-wrap\">    \r\n      <span *ngFor=\"let nombre of this.nombres; let indice=index\" class=\" w-full sm:w-1/2 md:w-1/3\">\r\n          <li class=\"list-none h-15 p-5 text-2xl cursor-pointer hover:text-red-600\">\r\n              <a name=\"{{links[indice]}}\" (click)=\"getPage(nombre, this.name, links[indice])\">{{nombre}}</a>        \r\n          </li>\r\n      </span>\r\n  </span>\r\n  \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-instructions></app-instructions> -->\r\n\r\n<!-- Display Container (not part of component) START -->\r\n<div class=\"h-full mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200\">\r\n    \r\n    <!-- Carousel Body -->\r\n    <div class=\"relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl\" style=\"height: 20rem;\">\r\n\r\n      <div class=\"relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg\" style=\"height: 20rem;\">\r\n\r\n        <img class=\"absolute inset-0 w-full h-full object-cover object-top\" src=\"{{this.img}}\" alt=\"{{this.name}}\">\r\n\r\n        <div class=\"absolute inset-0 w-full h-full bg-indigo-900 opacity-75\"></div>\r\n        \r\n      </div>\r\n\r\n      <div class=\"w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg\">\r\n        <div class=\"p-12 md:pr-24 md:pl-16 md:py-12\">\r\n          <p class=\"text-gray-600\"><span class=\"text-gray-900\"><b>{{this.name}}</b></span> <span class=\"hidden sm:block\">{{this.description}}</span> </p>  \r\n\r\n          <button routerLink=\"/instructions/{{this.name}}\" class=\"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center mr-2\">\r\n            <i class=\"fas fa-gamepad\"></i>\r\n            <span class=\"ml-2\">Jugar</span>\r\n          </button>\r\n\r\n          <a href=\"{{this.wiki}}\" target=\"_blank\" class=\"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center\">\r\n            <i class=\"fab fa-wikipedia-w\"></i>\r\n            <span class=\"ml-2\">Saber mas</span>\r\n          </a>\r\n\r\n        </div>\r\n        <svg class=\"hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\r\n          <polygon points=\"50,0 100,0 50,100 0,100\" />\r\n        </svg>\r\n      </div>\r\n\r\n      <button (click)=\"back()\" class=\"absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline\">\r\n        <i class=\"fas fa-long-arrow-alt-left\"></i>\r\n      </button>\r\n\r\n      <button (click)=\"next()\" class=\"absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline\">\r\n        <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n      </button>\r\n\r\n    </div>\r\n    \r\n    \r\n  </div>\r\n  <!-- Display Container (not part of component) END -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/instructions/instructions.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/instructions/instructions.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsInstructionsInstructionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  \r\n<div class=\"flex flex-wrap container m-auto h-full\" style=\"height: 50vh\">\r\n  <div class=\"h-full w-2/2 md:w-1/2\" style=\"background: url(https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80);\">    \r\n  </div>\r\n  <div class=\" w-2/2 md:w-1/2 md:pl-5 text-black bg-fixed mx-auto h-full container mx-auto pl-5\">\r\n    <nav class=\"mx-auto container text-black font-bold my-8\" aria-label=\"Breadcrumb\">\r\n      <ol class=\"list-none p-0 inline-flex\">\r\n        <li class=\"flex items-center\">\r\n          <a routerLink=\"/home\">Wiki Hunt</a>\r\n          <svg class=\"fill-current w-3 h-3 mx-3\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z\"/></svg>\r\n        </li>\r\n        <li class=\"flex items-center\">\r\n          <a class=\"\">{{this.name}}</a>        \r\n        </li>\r\n      </ol>\r\n    </nav>\r\n    <h1 class=\"text-2xl\">Jugar a Wiki Hunt es muy sencillo</h1>    \r\n    <p>Elijes un <b>personaje</b>, y tienes que encontrarlo en el <b>menor numero de pasos posibles</b></p>\r\n    <p>El juego te invita encontrar <b>relaciones curiosas entre las cosas</b></p>\r\n    <p>¿A cuantos pasos estara una <b>patata frita</b> de <b>{{this.name}}</b>?</p>\r\n\r\n    <hr class=\"my-5\">\r\n\r\n    <p>El proceso sera el siguiente:</p>\r\n    <ol class=\"list-decimal pl-5\">        \r\n        <li>Seras lanzado a una <b>pagina al azar</b> de wikipedia</li>        \r\n        <li>Tendras que <b>navegar por los enlaces internos</b> y llegar a {{this.name}}</li>        \r\n        <li>Hazlo en el <b>menor numero de pasos posibles!</b></li>\r\n        <li><b>Diviertete!!</b></li>\r\n    </ol>\r\n\r\n    <button routerLink=\"/game/{{this.name}}\" class=\"mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center\">\r\n        <i class=\"fas fa-gamepad\"></i>\r\n        <span class=\"ml-2\">Jugar</span>\r\n      </button>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>footer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"w-full text-center\"> \r\n  <a routerLink=\"/home\" class=\"germania text-5xl text-center\">Wiki Hunt</a>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/win/win/win.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/win/win/win.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWinWinWinComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"flex flex-wrap h-screen w-screen container m-auto mt-12 \">\n    <div class=\"w-2/2 md:w-1/2\">\n        <a href=\"https://es.wikipedia.org/wiki/Victoria_alada_de_Samotracia\" target=\"_blank\"><img src=\"https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/02/24/Recortada/img_jmarting_20200224-122824_imagenes_lv_terceros_victoria_samotracia-kMrE-U473738721956N0H-992x558@LaVanguardia-Web.jpg\" alt=\"\"></a>\n        <p><small>Victoria alada de Samotracia</small></p>\n    </div>\n    <div class=\"w-2/2 md:w-1/2 p-5 md:pl-5\">\n        <h1 class=\"text-4xl\">🤘 Felicidades has encontrado a <b>{{this.name}}</b> en solo <b>{{this.pasos}}</b> pasos!</h1>\n        <h2 class=\"text-3xl\">¿Seguro que puedes mejorar esta marca 😏?</h2>\n        <h2 class=\"text-2xl\">Si te ha gustado ayudanos y compartelo con tus amigos</h2>\n\n        <!-- Redes sociales -->\n        <span class=\"flex flex-wrap social\">\n        <a class=\"mr-2 mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https://wikihunt.es\">\n            <i class=\"fab fa-facebook-square mr-2\"></i> Facebook\n        </a>\n        <a class=\"mr-2 mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center\" target=\"_blank\" href=\"https://twitter.com/intent/tweet?text=Podrás%20encontrar%20a%20los%20personajes%20mas%20famosos%20de%20la%20historia?%20https://wikihunt.es&hashtags=wikihunt\">\n            <i class=\"fab fa-twitter-square mr-2\"></i> Twitter\n        </a>\n\n        <a class=\"mr-2 mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center\" target=\"_blank\" href=\"https://api.whatsapp.com/send?text=Podrás%20encontrar%20a%20los%20personajes%20mas%20famosos%20de%20la%20historia?%20https://wikihunt.es\">\n            <i class=\"fab fa-whatsapp-square mr-2\"></i> Whatsapp\n        </a>\n        <a class=\"mr-2 mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center\" target=\"_blank\" href=\"https://www.linkedin.com/sharing/share-offsite/?url=https://wikihunt.es\">\n            <i class=\"fab fa-linkedin mr-2\"></i> Linkedin\n        </a>\n    </span>\n\n    <script async src=\"https://static.addtoany.com/menu/page.js\"></script>\n\n        <button routerLink=\"/home\" class=\"mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center\">\n            <i class=\"fas fa-gamepad\"></i>\n            <span class=\"ml-2\">Volver a jugar</span>            \n          </button>\n    </div>\n</span>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/instructions/instructions.component */
    "./src/app/components/instructions/instructions.component.ts");
    /* harmony import */


    var _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/game/game.component */
    "./src/app/components/game/game.component.ts");
    /* harmony import */


    var _components_win_win_win_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/win/win/win.component */
    "./src/app/components/win/win/win.component.ts");

    var routes = [{
      path: 'game/:name',
      component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"]
    }, {
      path: 'instructions/:name',
      component: _components_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_4__["InstructionsComponent"]
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'win/:name/:cont',
      component: _components_win_win_win_component__WEBPACK_IMPORTED_MODULE_6__["WinComponent"]
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }, {
      path: '**',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Wikihunt';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _components_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/instructions/instructions.component */
    "./src/app/components/instructions/instructions.component.ts");
    /* harmony import */


    var _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/game/game.component */
    "./src/app/components/game/game.component.ts");
    /* harmony import */


    var _components_win_win_win_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/win/win/win.component */
    "./src/app/components/win/win/win.component.ts");
    /* harmony import */


    var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_instructions_instructions_component__WEBPACK_IMPORTED_MODULE_8__["InstructionsComponent"], _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"], _components_win_win_win_component__WEBPACK_IMPORTED_MODULE_10__["WinComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/game/game.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/game/game.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGameGameComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".germania{\r\n    font-family: 'Germania One', cursive;\r\n}\r\n\r\nimg#carga {\r\n    margin: 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlcm1hbmlhe1xyXG4gICAgZm9udC1mYW1pbHk6ICdHZXJtYW5pYSBPbmUnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5pbWcjY2FyZ2Ege1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/game/game.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/game/game.component.ts ***!
    \***************************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppComponentsGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_hunting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/hunting.service */
    "./src/app/services/hunting.service.ts");

    var GameComponent =
    /*#__PURE__*/
    function () {
      function GameComponent(route, huntingService, router) {
        var _this = this;

        _classCallCheck(this, GameComponent);

        this.route = route;
        this.huntingService = huntingService;
        this.router = router;
        this.links = [];
        this.nombres = [];
        this.index = 0;
        this.cont = 0;
        this.route.params.subscribe(function (params) {
          _this.name = params.name;
        });
        this.alert = false;
        this.loading = true;
        /* Al cargar la pagina se busca una pagina aleatoria */

        this.huntingService.getRandom(this.name).subscribe(function (data) {
          console.log(data);
          _this.nombres = data[0];
          _this.links = data[1];
          _this.title = data[2];
          _this.loading = false;
        });
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPage",
        value: function getPage(link, name, enlace) {
          var _this2 = this;

          this.loading = true;
          /* Buscamos una pagina concreta */

          this.huntingService.getPage(link, name, enlace).subscribe(function (data) {
            console.log(data);
            _this2.nombres = data[0];
            _this2.links = data[1];
            _this2.title = data[2];
            _this2.loading = false;
            _this2.alert = false;
            _this2.cont = _this2.cont + 1; //Sumamos uno al contador general
          }, function (error) {
            if (error.status == 200) {
              if (error.error.text == "WIN") {
                console.log(" Has ganado ! ");

                _this2.router.navigate(['win/' + _this2.name + "/" + _this2.cont]);
              }
            } else {
              console.error('There was an error!', error);
              _this2.loading = false;
              _this2.alert = true;
            }
          });
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_hunting_service__WEBPACK_IMPORTED_MODULE_3__["HuntingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game.component.css */
      "./src/app/components/game/game.component.css")).default]
    })], GameComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".germania{\r\n    font-family: 'Germania One', cursive;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VybWFuaWF7XHJcbiAgICBmb250LWZhbWlseTogJ0dlcm1hbmlhIE9uZScsIGN1cnNpdmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/people.service */
    "./src/app/services/people.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(_personajesService) {
        _classCallCheck(this, HomeComponent);

        this._personajesService = _personajesService;
        this.slide = 0;
        this.personaje = this._personajesService.getPersonajes();
        console.log("Personajes: ", this.personaje);
        this.length = this.personaje.length;
        console.log("Largo: ", this.length);
        this.actualPJ();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "actualPJ",
        value: function actualPJ() {
          this.name = this.personaje[this.slide].name;
          this.description = this.personaje[this.slide].desciption.slice(0, 200) + "...";
          this.img = this.personaje[this.slide].img;
          this.wiki = this.personaje[this.slide].wiki;
        }
      }, {
        key: "next",
        value: function next() {
          console.log("next");

          if (this.slide < this.length - 1) {
            this.slide = this.slide + 1;
            this.actualPJ();
            console.log(this.name);
            console.log("Nombre: ", this.name, " Slide: ", this.slide);
          } else {
            this.slide = 0;
            this.actualPJ();
            console.log(this.name);
            console.log("Nombre: ", this.name, " Slide: ", this.slide);
          }
        }
      }, {
        key: "back",
        value: function back() {
          console.log("back");

          if (this.slide > 0) {
            this.slide = this.slide - 1;
            this.actualPJ();
            console.log(this.name);
            console.log("Nombre: ", this.name, " Slide: ", this.slide);
          } else {
            this.slide = this.length - 1;
            this.actualPJ();
            console.log("Nombre: ", this.name, " Slide: ", this.slide);
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_people_service__WEBPACK_IMPORTED_MODULE_2__["PersonajesService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      providers: [_services_people_service__WEBPACK_IMPORTED_MODULE_2__["PersonajesService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/instructions/instructions.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/instructions/instructions.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsInstructionsInstructionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fondo{\r\n    background-color: #fefdff;\r\nbackground-image: url(\"data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82.42 180h-1.415L0 98.995v-2.827L6.167 90 0 83.833V81.004L81.005 0h2.827L90 6.167 96.167 0H98.996L180 81.005v2.827L173.833 90 180 96.167V98.996L98.995 180h-2.827L90 173.833 83.833 180H82.42zm0-1.414L1.413 97.58 8.994 90l-7.58-7.58L82.42 1.413 90 8.994l7.58-7.58 81.006 81.005-7.58 7.58 7.58 7.58-81.005 81.006-7.58-7.58-7.58 7.58zM175.196 0h-25.832c1.033 2.924 2.616 5.59 4.625 7.868C152.145 9.682 151 12.208 151 15c0 5.523 4.477 10 10 10 1.657 0 3 1.343 3 3v4h16V0h-4.803c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.093.292-2.117.803-3h10.394-13.685C161.18.938 161 1.948 161 3v4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.76 0 5 2.24 5 5v2h4v-4h2v4h4v-4h2v4h2V0h-4.803zm-15.783 0c-.27.954-.414 1.96-.414 3v2.2c-1.25.254-2.414.74-3.447 1.412-1.716-1.93-3.098-4.164-4.054-6.612h7.914zM180 17h-3l2.143-10H180v10zm-30.635 163c-.884-2.502-1.365-5.195-1.365-8 0-13.255 10.748-24 23.99-24H180v32h-30.635zm12.147 0c.5-1.416 1.345-2.67 2.434-3.66l-1.345-1.48c-1.498 1.364-2.62 3.136-3.186 5.14H151.5c-.97-2.48-1.5-5.177-1.5-8 0-12.15 9.84-22 22-22h8v30h-18.488zm13.685 0c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 148h8.01C21.26 148 32 158.742 32 172c0 2.805-.48 5.498-1.366 8H0v-32zm0 2h8c12.15 0 22 9.847 22 22 0 2.822-.53 5.52-1.5 8h-7.914c-.567-2.004-1.688-3.776-3.187-5.14l-1.346 1.48c1.09.99 1.933 2.244 2.434 3.66H0v-30zm15.197 30c-1.037-1.793-2.976-3-5.197-3-2.22 0-4.16 1.207-5.197 3h10.394zM0 32h16v-4c0-1.657 1.343-3 3-3 5.523 0 10-4.477 10-10 0-2.794-1.145-5.32-2.992-7.134C28.018 5.586 29.6 2.924 30.634 0H0v32zm0-2h2v-4h2v4h4v-4h2v4h4v-2c0-2.76 2.24-5 5-5 4.418 0 8-3.582 8-8s-3.582-8-8-8V3c0-1.052-.18-2.062-.512-3H0v30zM28.5 0c-.954 2.448-2.335 4.683-4.05 6.613-1.035-.672-2.2-1.16-3.45-1.413V3c0-1.04-.144-2.046-.414-3H28.5zM0 17h3L.857 7H0v10zM15.197 0c.51.883.803 1.907.803 3 0 3.314-2.686 6-6 6S4 6.314 4 3c0-1.093.292-2.117.803-3h10.394zM109 115c-1.657 0-3 1.343-3 3v4H74v-4c0-1.657-1.343-3-3-3-5.523 0-10-4.477-10-10 0-2.793 1.145-5.318 2.99-7.132C60.262 93.638 58 88.084 58 82c0-13.255 10.748-24 23.99-24h16.02C111.26 58 122 68.742 122 82c0 6.082-2.263 11.636-5.992 15.866C117.855 99.68 119 102.206 119 105c0 5.523-4.477 10-10 10zm0-2c-2.76 0-5 2.24-5 5v2h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-4h-2v4h-4v-2c0-2.76-2.24-5-5-5-4.418 0-8-3.582-8-8s3.582-8 8-8v-4c0-2.64 1.136-5.013 2.946-6.66L72.6 84.86C70.39 86.874 69 89.775 69 93v2.2c-1.25.254-2.414.74-3.447 1.412C62.098 92.727 60 87.61 60 82c0-12.15 9.84-22 22-22h16c12.15 0 22 9.847 22 22 0 5.61-2.097 10.728-5.55 14.613-1.035-.672-2.2-1.16-3.45-1.413V93c0-3.226-1.39-6.127-3.6-8.14l-1.346 1.48C107.864 87.987 109 90.36 109 93v4c4.418 0 8 3.582 8 8s-3.582 8-8 8zM90.857 97L93 107h-6l2.143-10h1.714zM80 99c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm20 0c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\");\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IsaStGQUFpK0Y7QUFDaitGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvaW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGZmO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxODAnIGhlaWdodD0nMTgwJyB2aWV3Qm94PScwIDAgMTgwIDE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTgyLjQyIDE4MGgtMS40MTVMMCA5OC45OTV2LTIuODI3TDYuMTY3IDkwIDAgODMuODMzVjgxLjAwNEw4MS4wMDUgMGgyLjgyN0w5MCA2LjE2NyA5Ni4xNjcgMEg5OC45OTZMMTgwIDgxLjAwNXYyLjgyN0wxNzMuODMzIDkwIDE4MCA5Ni4xNjdWOTguOTk2TDk4Ljk5NSAxODBoLTIuODI3TDkwIDE3My44MzMgODMuODMzIDE4MEg4Mi40MnptMC0xLjQxNEwxLjQxMyA5Ny41OCA4Ljk5NCA5MGwtNy41OC03LjU4TDgyLjQyIDEuNDEzIDkwIDguOTk0bDcuNTgtNy41OCA4MS4wMDYgODEuMDA1LTcuNTggNy41OCA3LjU4IDcuNTgtODEuMDA1IDgxLjAwNi03LjU4LTcuNTgtNy41OCA3LjU4ek0xNzUuMTk2IDBoLTI1LjgzMmMxLjAzMyAyLjkyNCAyLjYxNiA1LjU5IDQuNjI1IDcuODY4QzE1Mi4xNDUgOS42ODIgMTUxIDEyLjIwOCAxNTEgMTVjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMCAxLjY1NyAwIDMgMS4zNDMgMyAzdjRoMTZWMGgtNC44MDNjLjUxLjg4My44MDMgMS45MDcuODAzIDMgMCAzLjMxNC0yLjY4NiA2LTYgNnMtNi0yLjY4Ni02LTZjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0LTEzLjY4NUMxNjEuMTguOTM4IDE2MSAxLjk0OCAxNjEgM3Y0Yy00LjQxOCAwLTggMy41ODItOCA4czMuNTgyIDggOCA4YzIuNzYgMCA1IDIuMjQgNSA1djJoNHYtNGgydjRoNHYtNGgydjRoMlYwaC00LjgwM3ptLTE1Ljc4MyAwYy0uMjcuOTU0LS40MTQgMS45Ni0uNDE0IDN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMi0xLjcxNi0xLjkzLTMuMDk4LTQuMTY0LTQuMDU0LTYuNjEyaDcuOTE0ek0xODAgMTdoLTNsMi4xNDMtMTBIMTgwdjEwem0tMzAuNjM1IDE2M2MtLjg4NC0yLjUwMi0xLjM2NS01LjE5NS0xLjM2NS04IDAtMTMuMjU1IDEwLjc0OC0yNCAyMy45OS0yNEgxODB2MzJoLTMwLjYzNXptMTIuMTQ3IDBjLjUtMS40MTYgMS4zNDUtMi42NyAyLjQzNC0zLjY2bC0xLjM0NS0xLjQ4Yy0xLjQ5OCAxLjM2NC0yLjYyIDMuMTM2LTMuMTg2IDUuMTRIMTUxLjVjLS45Ny0yLjQ4LTEuNS01LjE3Ny0xLjUtOCAwLTEyLjE1IDkuODQtMjIgMjItMjJoOHYzMGgtMTguNDg4em0xMy42ODUgMGMtMS4wMzctMS43OTMtMi45NzYtMy01LjE5Ny0zLTIuMjIgMC00LjE2IDEuMjA3LTUuMTk3IDNoMTAuMzk0ek0wIDE0OGg4LjAxQzIxLjI2IDE0OCAzMiAxNTguNzQyIDMyIDE3MmMwIDIuODA1LS40OCA1LjQ5OC0xLjM2NiA4SDB2LTMyem0wIDJoOGMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgMi44MjItLjUzIDUuNTItMS41IDhoLTcuOTE0Yy0uNTY3LTIuMDA0LTEuNjg4LTMuNzc2LTMuMTg3LTUuMTRsLTEuMzQ2IDEuNDhjMS4wOS45OSAxLjkzMyAyLjI0NCAyLjQzNCAzLjY2SDB2LTMwem0xNS4xOTcgMzBjLTEuMDM3LTEuNzkzLTIuOTc2LTMtNS4xOTctMy0yLjIyIDAtNC4xNiAxLjIwNy01LjE5NyAzaDEwLjM5NHpNMCAzMmgxNnYtNGMwLTEuNjU3IDEuMzQzLTMgMy0zIDUuNTIzIDAgMTAtNC40NzcgMTAtMTAgMC0yLjc5NC0xLjE0NS01LjMyLTIuOTkyLTcuMTM0QzI4LjAxOCA1LjU4NiAyOS42IDIuOTI0IDMwLjYzNCAwSDB2MzJ6bTAtMmgydi00aDJ2NGg0di00aDJ2NGg0di0yYzAtMi43NiAyLjI0LTUgNS01IDQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04VjNjMC0xLjA1Mi0uMTgtMi4wNjItLjUxMi0zSDB2MzB6TTI4LjUgMGMtLjk1NCAyLjQ0OC0yLjMzNSA0LjY4My00LjA1IDYuNjEzLTEuMDM1LS42NzItMi4yLTEuMTYtMy40NS0xLjQxM1YzYzAtMS4wNC0uMTQ0LTIuMDQ2LS40MTQtM0gyOC41ek0wIDE3aDNMLjg1NyA3SDB2MTB6TTE1LjE5NyAwYy41MS44ODMuODAzIDEuOTA3LjgwMyAzIDAgMy4zMTQtMi42ODYgNi02IDZTNCA2LjMxNCA0IDNjMC0xLjA5My4yOTItMi4xMTcuODAzLTNoMTAuMzk0ek0xMDkgMTE1Yy0xLjY1NyAwLTMgMS4zNDMtMyAzdjRINzR2LTRjMC0xLjY1Ny0xLjM0My0zLTMtMy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwIDAtMi43OTMgMS4xNDUtNS4zMTggMi45OS03LjEzMkM2MC4yNjIgOTMuNjM4IDU4IDg4LjA4NCA1OCA4MmMwLTEzLjI1NSAxMC43NDgtMjQgMjMuOTktMjRoMTYuMDJDMTExLjI2IDU4IDEyMiA2OC43NDIgMTIyIDgyYzAgNi4wODItMi4yNjMgMTEuNjM2LTUuOTkyIDE1Ljg2NkMxMTcuODU1IDk5LjY4IDExOSAxMDIuMjA2IDExOSAxMDVjMCA1LjUyMy00LjQ3NyAxMC0xMCAxMHptMC0yYy0yLjc2IDAtNSAyLjI0LTUgNXYyaC00di00aC0ydjRoLTR2LTRoLTJ2NGgtNHYtNGgtMnY0aC00di00aC0ydjRoLTR2LTJjMC0yLjc2LTIuMjQtNS01LTUtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOHYtNGMwLTIuNjQgMS4xMzYtNS4wMTMgMi45NDYtNi42Nkw3Mi42IDg0Ljg2QzcwLjM5IDg2Ljg3NCA2OSA4OS43NzUgNjkgOTN2Mi4yYy0xLjI1LjI1NC0yLjQxNC43NC0zLjQ0NyAxLjQxMkM2Mi4wOTggOTIuNzI3IDYwIDg3LjYxIDYwIDgyYzAtMTIuMTUgOS44NC0yMiAyMi0yMmgxNmMxMi4xNSAwIDIyIDkuODQ3IDIyIDIyIDAgNS42MS0yLjA5NyAxMC43MjgtNS41NSAxNC42MTMtMS4wMzUtLjY3Mi0yLjItMS4xNi0zLjQ1LTEuNDEzVjkzYzAtMy4yMjYtMS4zOS02LjEyNy0zLjYtOC4xNGwtMS4zNDYgMS40OEMxMDcuODY0IDg3Ljk4NyAxMDkgOTAuMzYgMTA5IDkzdjRjNC40MTggMCA4IDMuNTgyIDggOHMtMy41ODIgOC04IDh6TTkwLjg1NyA5N0w5MyAxMDdoLTZsMi4xNDMtMTBoMS43MTR6TTgwIDk5YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0yMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eicgZmlsbD0nJTIzMDAwMDAwJyBmaWxsLW9wYWNpdHk9JzAuNCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/instructions/instructions.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/instructions/instructions.component.ts ***!
    \*******************************************************************/

  /*! exports provided: InstructionsComponent */

  /***/
  function srcAppComponentsInstructionsInstructionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function () {
      return InstructionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var InstructionsComponent =
    /*#__PURE__*/
    function () {
      function InstructionsComponent(route) {
        var _this3 = this;

        _classCallCheck(this, InstructionsComponent);

        this.route = route;
        this.route.params.subscribe(function (params) {
          _this3.name = params.name;
        });
      }

      _createClass(InstructionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InstructionsComponent;
    }();

    InstructionsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    InstructionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-instructions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./instructions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/instructions/instructions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./instructions.component.css */
      "./src/app/components/instructions/instructions.component.css")).default]
    })], InstructionsComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/shared/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".germania{\r\n    font-family: 'Germania One', cursive;\r\n}\r\n\r\n.bg-blue{\r\n    background-color: #0070cd;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlcm1hbmlhe1xyXG4gICAgZm9udC1mYW1pbHk6ICdHZXJtYW5pYSBPbmUnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uYmctYmx1ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcwY2Q7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/shared/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/win/win/win.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/win/win/win.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWinWinWinComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2luL3dpbi93aW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/win/win/win.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/win/win/win.component.ts ***!
    \*****************************************************/

  /*! exports provided: WinComponent */

  /***/
  function srcAppComponentsWinWinWinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WinComponent", function () {
      return WinComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var WinComponent =
    /*#__PURE__*/
    function () {
      function WinComponent(router, route) {
        var _this4 = this;

        _classCallCheck(this, WinComponent);

        this.router = router;
        this.route = route;
        this.route.params.subscribe(function (params) {
          _this4.name = params.name;
          _this4.pasos = params.cont;
        });
      }

      _createClass(WinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WinComponent;
    }();

    WinComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    WinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-win',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./win.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/win/win/win.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./win.component.css */
      "./src/app/components/win/win/win.component.css")).default]
    })], WinComponent);
    /***/
  },

  /***/
  "./src/app/services/hunting.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/hunting.service.ts ***!
    \*********************************************/

  /*! exports provided: HuntingService */

  /***/
  function srcAppServicesHuntingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HuntingService", function () {
      return HuntingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HuntingService =
    /*#__PURE__*/
    function () {
      function HuntingService(http) {
        _classCallCheck(this, HuntingService);

        this.http = http;
        console.log(" Servidor de scraping listo ! ");
      }

      _createClass(HuntingService, [{
        key: "getRandom",
        value: function getRandom(name) {
          console.log("Funcion que busca una pagina aleatoria de wikipedia");
          var data = "/wiki/Especial:Aleatoria";
          var leng = "es";
          var winer = name;
          var url = "https://hitler-s-hunt.herokuapp.com/peticion/?data=".concat(data, "&&leng=").concat(leng, "&&winer=").concat(winer);
          return this.http.get(url);
        }
      }, {
        key: "getPage",
        value: function getPage(link, name, enlace) {
          console.log("Funcion que busca una pagina concreta de wikipedia");
          console.log("Link: ", link);

          var removeAccents = function removeAccents(str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          };

          var link = removeAccents("/wiki/" + link);
          var data = link;
          var leng = "es";
          var winer = name;
          var url = "https://hitler-s-hunt.herokuapp.com/peticion/?data=".concat(data, "&&leng=").concat(leng, "&&winer=").concat(winer);
          return this.http.get(url);
        }
      }]);

      return HuntingService;
    }();

    HuntingService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HuntingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HuntingService);
    /***/
  },

  /***/
  "./src/app/services/people.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/people.service.ts ***!
    \********************************************/

  /*! exports provided: PersonajesService */

  /***/
  function srcAppServicesPeopleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonajesService", function () {
      return PersonajesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PersonajesService =
    /*#__PURE__*/
    function () {
      function PersonajesService() {
        _classCallCheck(this, PersonajesService);

        this.personaje = [{
          name: "Isaac Newton",
          desciption: "Fue un físico, teólogo, inventor, alquimista y matemático inglés. Es autor de los Philosophiæ naturalis principia mathematica, más conocidos como los Principia, donde describe la ley de la gravitación universal y estableció las bases de la mecánica clásica mediante las leyes que llevan su nombre. Entre sus otros descubrimientos científicos destacan los trabajos sobre la naturaleza de la luz y la óptica (que se presentan principalmente en su obra Opticks), y en matemáticas, el desarrollo del cálculo infinitesimal.",
          img: "https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/03/conocer-historia-isaac-newton-xlsemanal-2-1024x672.jpg",
          wiki: "https://es.wikipedia.org/wiki/Isaac_Newton"
        }, {
          name: "Jesús de Nazaret",
          desciption: "fue un predicador y líder religioso judío del siglo i. Es la figura central del cristianismo y una de las más influyentes de la historia.",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%C3%9Altima_Cena_-_Juan_de_Juanes.jpg/1280px-%C3%9Altima_Cena_-_Juan_de_Juanes.jpg",
          wiki: "https://es.wikipedia.org/wiki/Cristo"
        }, {
          name: "Buda Gautama",
          desciption: "Fue un asceta, yogui, mendicante, filósofo y sabio en cuyas enseñanzas se fundó el budismo. Enseñó principalmente en el noroeste del subcontinente Indio por unos cuarenta años.​ Su enseñanza se basa en una visión del sufrimiento y el fin del sufrimiento nirvaṇa.",
          img: "https://i.pinimg.com/originals/4a/77/dc/4a77dc38ec7dde0b01d82f2b63349d57.jpg",
          wiki: "https://es.wikipedia.org/wiki/Buda_Gautama"
        }, {
          name: "Confucio",
          desciption: "Fue un reconocido pensador chino cuya doctrina recibe el nombre de confucianismo.​ Procedente de una familia noble arruinada, a lo largo de su vida alternó periodos en los que ejerció como maestro con otros durante los cuales fue funcionario del pequeño estado de Lu, trabajó de carpintero en el noreste de China, durante la época de fragmentación del poder bajo la dinastía Zhou o período de los Reinos Combatientes.",
          img: "https://datosdefamosos.com/wp-content/uploads/2019/08/confucio-biografia.jpg",
          wiki: "https://es.wikipedia.org/wiki/Confucio"
        }, {
          name: "Albert Einstein",
          desciption: "Fue un físico alemán de origen judío, nacionalizado después suizo, austriaco y estadounidense. Se le considera el científico más importante, conocido y popular del siglo XX.",
          img: "https://media.metrolatam.com/2018/01/23/alberteinstein-1200x800.jpg",
          wiki: "https://es.wikipedia.org/wiki/Albert_Einstein"
        }, {
          name: "Adolf Hitler",
          desciption: "Fue un político, militar y dictador alemán de origen austrohúngaro. Fue canciller imperial desde 1933 y Führer de Alemania desde 1934 hasta su muerte. Llevó al poder al Partido Nacionalsocialista Obrero Alemán o Partido Nazi,b​ estableciendo un régimen totalitario durante el período conocido como Tercer Reich o Alemania nazi.​ Inició la Segunda Guerra Mundial al invadir Polonia el 1 de septiembre de 1939 y es una figura clave en la perpetración del Holocausto.",
          img: "https://static1.abc.es/media/historia/2018/08/04/hitler1-kqfG--620x349@abc.jpg",
          wiki: "https://es.wikipedia.org/wiki/Adolf_Hitler"
        }, {
          name: "Friedrich Nietzsche",
          desciption: "Fue un filósofo, poeta, músico y filólogo alemán del siglo XIX, considerado uno de los filósofos más importantes de la filosofía occidental, cuya obra ha ejercido una profunda influencia tanto en la historia como en la cultura occidental.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKH7XTpOOlwTMsjLS_ZbiG9kaU1evOaxjjfjz8H7c60DMyYDEo&usqp=CAU",
          wiki: "https://es.wikipedia.org/wiki/Friedrich_Nietzsche"
        }];
        console.log("Servicio listo para utilizar !");
      }
      /* Escribir todos los personaje*/


      _createClass(PersonajesService, [{
        key: "getPersonajes",
        value: function getPersonajes() {
          return this.personaje;
        }
        /* Escribir solo un heroe */

      }, {
        key: "getPersonaje",
        value: function getPersonaje(idx) {
          return this.personaje[idx];
        }
      }, {
        key: "buscarPersonajes",
        value: function buscarPersonajes(termino) {
          var personajeArr = [];
          termino = termino.toLowerCase();

          for (var i = 0; i < this.personaje.length; i++) {
            var heroe = this.personaje[i];
            var name = heroe.name.toLowerCase();

            if (name.indexOf(termino) >= 0) {
              heroe.idx = i;
              personajeArr.push(heroe);
            }
          }

          return personajeArr;
        }
      }]);

      return PersonajesService;
    }();

    PersonajesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PersonajesService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\juan-\OneDrive\Documentos\GitHub\Wikihunt-Angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map