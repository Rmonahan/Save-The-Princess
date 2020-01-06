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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameView =
/*#__PURE__*/
function () {
  function GameView(level, ctx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.level = level;
    this.mainCharacter = this.createMainCharacter();
    this.bindKeyHandlers();
  }

  _createClass(GameView, [{
    key: "bindKeyHandlers",
    value: function bindKeyHandlers() {
      document.addEventListener("keydown", keyDownHandler, false);
      document.addEventListener("keyup", keyUpHandler, false);
    }
  }, {
    key: "createMainCharacter",
    value: function createMainCharacter() {
      var _this = this;

      var img = new Image();

      img.onload = function () {
        _this.ctx.drawImage(img, 100, 100);
      };

      img.src = "images/MainCharacterImages/adventurer-attack1-00.png";
    }
  }]);

  return GameView;
}();

function keyDownHandler(e) {
  if (e.key == "d") {
    rightPressed = true;
  } else if (e.key == "a") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "d") {
    rightPressed = true;
  } else if (e.key == "a") {
    leftPressed = true;
  }
}

module.exports = GameView;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Level = __webpack_require__(/*! ./level */ "./src/level.js");

var GameView = __webpack_require__(/*! ./game_view */ "./src/game_view.js");

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var level = new Level(1, ctx);
  new GameView(level, ctx);
});

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameView = __webpack_require__(/*! ./game_view */ "./src/game_view.js");

var Level =
/*#__PURE__*/
function () {
  function Level(number, ctx) {
    _classCallCheck(this, Level);

    this.items = [];
    this.room = number;
    this.ctx = ctx;
    this.addScene();
  }

  _createClass(Level, [{
    key: "addScene",
    value: function addScene() {
      if (this.room === 1) {
        this.drawCastle();
      }
    }
  }, {
    key: "drawCastle",
    value: function drawCastle() {
      var _this = this;

      var img = new Image();

      img.onload = function () {
        _this.ctx.drawImage(img, 100, 50, 800, 800, 0, 0, 800, 800);
      };

      img.src = "images/castleScene.png";
    }
  }]);

  return Level;
}();

module.exports = Level;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJtYWluQ2hhcmFjdGVyIiwiY3JlYXRlTWFpbkNoYXJhY3RlciIsImJpbmRLZXlIYW5kbGVycyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJzcmMiLCJlIiwia2V5IiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiTGV2ZWwiLCJyZXF1aXJlIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibnVtYmVyIiwiaXRlbXMiLCJyb29tIiwiYWRkU2NlbmUiLCJkcmF3Q2FzdGxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFB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QUFDbkIsYUFBSSxDQUFDVixHQUFMLENBQVNXLFNBQVQsQ0FBbUJILEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLEVBQTdCLEVBQWlDLEdBQWpDLEVBQXNDLEdBQXRDLEVBQTJDLENBQTNDLEVBQThDLENBQTlDLEVBQWlELEdBQWpELEVBQXNELEdBQXREO0FBQ0MsT0FGRDs7QUFHQUEsU0FBRyxDQUFDSSxHQUFKLEdBQVUsd0JBQVY7QUFFRDs7Ozs7O0FBR0hLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsS0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5tYWluQ2hhcmFjdGVyID0gdGhpcy5jcmVhdGVNYWluQ2hhcmFjdGVyKCk7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgfVxuICBiaW5kS2V5SGFuZGxlcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG4gIH1cbiAgY3JlYXRlTWFpbkNoYXJhY3RlcigpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgMTAwLCAxMDApO1xuICAgIH07XG4gICAgaW1nLnNyYyA9IFwiaW1hZ2VzL01haW5DaGFyYWN0ZXJJbWFnZXMvYWR2ZW50dXJlci1hdHRhY2sxLTAwLnBuZ1wiXG4gIH1cbn1cblxuZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT0gXCJkXCIpIHtcbiAgICByaWdodFByZXNzZWQgPSB0cnVlO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09IFwiYVwiKSB7XG4gICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PSBcImRcIikge1xuICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT0gXCJhXCIpIHtcbiAgICBsZWZ0UHJlc3NlZCA9IHRydWU7XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5jb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL2dhbWVfdmlld1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gXG4gIGxldCBsZXZlbCA9IG5ldyBMZXZlbCgxLCBjdHgpO1xuICBuZXcgR2FtZVZpZXcobGV2ZWwsY3R4KTtcbn0pOyIsImNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vZ2FtZV92aWV3XCIpO1xuXG5cbmNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCBjdHgpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5yb29tID0gbnVtYmVyO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuYWRkU2NlbmUoKTtcbiAgfVxuICBhZGRTY2VuZSgpIHtcbiAgICBpZiAodGhpcy5yb29tID09PSAxKSB7XG4gICAgICB0aGlzLmRyYXdDYXN0bGUoKTtcbiAgICB9XG4gIH1cbiAgZHJhd0Nhc3RsZSgpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIDEwMCwgNTAsIDgwMCwgODAwLCAwLCAwLCA4MDAsIDgwMCk7XG4gICAgfTtcbiAgICBpbWcuc3JjID0gXCJpbWFnZXMvY2FzdGxlU2NlbmUucG5nXCI7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=