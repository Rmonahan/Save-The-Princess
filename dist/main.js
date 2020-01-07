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
  function GameView(level, ctx, canvas, backgroundCtx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.canvas = canvas;
    this.backgroundCtx = backgroundCtx;
    this.level = level;
    this.bindKeyHandlers();
    this.flipPlayer = false;
    this.still = true;
    this.left = false;
    this.right = false;
    this.jumping = false;
    this.curFrame = 0;
    this.frameCount = 6;
    this.srcX = 0;
    this.srcY = 0;
    this.x = 300;
    this.y = 310;
    this.speed = 12;
    this.character = new Image();
    this.createScene();
    window.requestAnimationFrame(this.mainLoop.bind(this));
  }

  _createClass(GameView, [{
    key: "clear",
    value: function clear() {
      this.canvas.remove();
    }
  }, {
    key: "createScene",
    value: function createScene() {
      this.drawMainCharacter();
      this.level.addScene();
    }
  }, {
    key: "drawMainCharacter",
    value: function drawMainCharacter() {
      var spriteWidth = 350;
      var spriteHeight = 407;
      var rows = 11;
      var cols = 7;
      this.trackRight = 1;
      this.trackLeft = 1;
      this.width = spriteWidth / cols;
      this.height = spriteHeight / rows;
      this.curFrame = 1;
      this.frameCount = 6;
      this.x = 300;
      this.y = 310;
      this.srcX = 0;
      this.srcY = this.trackRight * this.height;
      this.speed = 15;
      this.character.src = "images/adventurer-Sheet.png";
    }
  }, {
    key: "mainLoop",
    value: function mainLoop(time) {
      var _this = this;

      this.updateFrame(this.width, this.height, this.frameCount, this.trackLeft, this.trackRight);

      if (this.left === true) {
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(this.character, this.srcX, this.srcY, this.width, this.height, -this.x - this.width * 2, this.y, this.width * 2, this.height * 2);
        this.ctx.scale(-1, 1);
      } else {
        this.ctx.drawImage(this.character, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width * 2, this.height * 2);
      }

      setTimeout(function () {
        window.requestAnimationFrame(_this.mainLoop.bind(_this));
      }, 100);
    }
  }, {
    key: "updateFrame",
    value: function updateFrame(width, height, frameCount, trackLeft, trackRight) {
      this.curFrame = (this.curFrame + 1) % frameCount;
      this.srcX = this.curFrame * width + width;
      this.ctx.clearRect(this.x, this.y, width * 2, height * 2);

      if (this.left && (this.x > -20 || this.level.room != 1)) {
        this.srcY = trackLeft * height;
        this.x -= this.speed;
      }

      if (this.right) {
        this.srcY = trackRight * height;
        this.x += this.speed;
      }

      if (this.still === true) {
        this.srcX = width;
        this.srcY = 0;
      }

      if (this.y < 310) {
        if (310 - this.y > this.speed) {
          this.y += this.speed;
        } else {
          this.y += 310 - this.y;
        }

        this.srcY = height * 2;
      }

      if (this.jumping === true) {
        this.y -= 155;
        this.jumping = false;
      }

      if (this.x > 700) {
        this.scrollRight();
        this.x = 20;
      }

      if (this.x < -20 && this.level.room != 1) {
        this.scrollLeft();
        this.x = 640;
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.left = true;
      this.right = false;
      this.still = false;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.left = false;
      this.still = false;
      this.right = true;
    }
  }, {
    key: "jump",
    value: function jump() {
      this.jumping = true;
    }
  }, {
    key: "bindKeyHandlers",
    value: function bindKeyHandlers() {
      document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
      document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(e) {
      if (e.key === "d") {
        this.moveRight();
      } else if (e.key === "a") {
        this.moveLeft();
      }

      if (e.key === "w" && this.y === 310) {
        this.jump();
      }
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(e) {
      if (e.key === "d") {
        this.right = false;
        this.still = true;
      } else if (e.key === "a") {
        this.left = false;
        this.still = true;
      } else if (e.key === "w") {
        this.jumping = false;
      }
    }
  }, {
    key: "scrollRight",
    value: function scrollRight() {
      this.level.room += 1;
      this.canvas.style.backgroundImage = "url(\"images/level".concat(this.level.room, ".png\"");

      if (this.level.room === 3) {
        this.canvas.style.backgroundPositionY = "110px";
      } else {
        this.canvas.style.backgroundPositionY = "-50px";
      }
    }
  }, {
    key: "scrollLeft",
    value: function scrollLeft() {
      this.level.room -= 1;
      this.canvas.style.backgroundImage = "url(\"images/level".concat(this.level.room, ".png\"");

      if (this.level.room === 3) {
        this.canvas.style.backgroundPositionY = "110px";
      } else {
        this.canvas.style.backgroundPositionY = "-50px";
      }
    }
  }]);

  return GameView;
}();

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
  var ctx = canvas.getContext("2d"); // backgroundCanvas = document.getElementById("myCanvas2");
  // backgroundCtx = backgroundCanvas.getContext("2d");

  var level = new Level(1, ctx, canvas);
  new GameView(level, ctx, canvas);
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
  function Level(number, ctx, canvas) {
    _classCallCheck(this, Level);

    this.items = [];
    this.room = number; // this.backgroundCanvas = document.getElementById("myCanvas2");
    // this.backgroundCtx = this.backgroundCanvas.getContext("2d");

    this.canvas = canvas;
  }

  _createClass(Level, [{
    key: "addScene",
    value: function addScene() {
      // this.backgroundCtx.drawImage(this.canvas, 0, 0);
      if (this.room === 1) {// this.drawCastle();
      }
    }
  }, {
    key: "drawCastle",
    value: function drawCastle() {
      var img = new Image();

      img.onload = function () {// this.backgroundCtx.drawImage(img, 100, 50, 800, 800, 0, 0, 800, 800);
      };

      img.src = "images/castleScene.png";
    }
  }]);

  return Level;
}();

module.exports = Level;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsInJpZ2h0IiwianVtcGluZyIsImN1ckZyYW1lIiwiZnJhbWVDb3VudCIsInNyY1giLCJzcmNZIiwieCIsInkiLCJzcGVlZCIsImNoYXJhY3RlciIsIkltYWdlIiwiY3JlYXRlU2NlbmUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtYWluTG9vcCIsImJpbmQiLCJyZW1vdmUiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInRpbWUiLCJ1cGRhdGVGcmFtZSIsInNjYWxlIiwiZHJhd0ltYWdlIiwic2V0VGltZW91dCIsImNsZWFyUmVjdCIsInJvb20iLCJzY3JvbGxSaWdodCIsInNjcm9sbExlZnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsImp1bXAiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvblkiLCJtb2R1bGUiLCJleHBvcnRzIiwiTGV2ZWwiLCJyZXF1aXJlIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibnVtYmVyIiwiaXRlbXMiLCJpbWciLCJvbmxvYWQiXSwibWFwcGluZ3MiOiI7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QUFHLElBQUkvQyxLQUFKLEVBQVo7O0FBQ0ErQyxTQUFHLENBQUNDLE1BQUosR0FBYSxZQUFNLENBQ25CO0FBQ0MsT0FGRDs7QUFHQUQsU0FBRyxDQUFDOUIsR0FBSixHQUFVLHdCQUFWO0FBRUQ7Ozs7OztBQUlIc0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxLQUFqQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IobGV2ZWwsIGN0eCwgY2FudmFzLCBiYWNrZ3JvdW5kQ3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLmJhY2tncm91bmRDdHggPSBiYWNrZ3JvdW5kQ3R4O1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLmJpbmRLZXlIYW5kbGVycygpO1xuICAgIHRoaXMuZmxpcFBsYXllciA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMuc3JjWCA9IDA7XG4gICAgdGhpcy5zcmNZID0gMDtcbiAgICB0aGlzLnggPSAzMDA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3BlZWQgPSAxMjtcbiAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlU2NlbmUoKXtcbiAgICB0aGlzLmRyYXdNYWluQ2hhcmFjdGVyKCk7XG4gICAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB9XG5cbiAgZHJhd01haW5DaGFyYWN0ZXIoKSB7XG4gICAgY29uc3Qgc3ByaXRlV2lkdGggPSAzNTA7XG4gICAgY29uc3Qgc3ByaXRlSGVpZ2h0ID0gNDA3O1xuICAgIGNvbnN0IHJvd3MgPSAxMTtcbiAgICBjb25zdCBjb2xzID0gNztcbiAgICB0aGlzLnRyYWNrUmlnaHQgPSAxO1xuICAgIHRoaXMudHJhY2tMZWZ0ID0gMTtcbiAgICB0aGlzLndpZHRoID0gc3ByaXRlV2lkdGggLyBjb2xzO1xuICAgIHRoaXMuaGVpZ2h0ID0gc3ByaXRlSGVpZ2h0IC8gcm93cztcbiAgICB0aGlzLmN1ckZyYW1lID0gMTtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMueCA9IDMwMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcmNYPSAwO1xuICAgIHRoaXMuc3JjWT0gdGhpcy50cmFja1JpZ2h0ICogdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcGVlZCA9IDE1O1xuICAgIHRoaXMuY2hhcmFjdGVyLnNyYyA9IFwiaW1hZ2VzL2FkdmVudHVyZXItU2hlZXQucG5nXCI7XG4gIH1cbiAgbWFpbkxvb3AodGltZSl7XG4gICAgdGhpcy51cGRhdGVGcmFtZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5mcmFtZUNvdW50LCB0aGlzLnRyYWNrTGVmdCwgdGhpcy50cmFja1JpZ2h0KVxuICAgIGlmICh0aGlzLmxlZnQgPT09IHRydWUpe1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICgtdGhpcy54IC0gKHRoaXMud2lkdGggKiAyKSksIHRoaXMueSwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7ICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgqMiwgdGhpcy5oZWlnaHQqMilcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PntcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICB9LCAxMDApXG4gIH1cblxuICB1cGRhdGVGcmFtZSh3aWR0aCwgaGVpZ2h0LCBmcmFtZUNvdW50LCB0cmFja0xlZnQsIHRyYWNrUmlnaHQpe1xuICAgIHRoaXMuY3VyRnJhbWUgPSAodGhpcy5jdXJGcmFtZSArIDEpICUgZnJhbWVDb3VudDtcbiAgICB0aGlzLnNyY1ggPSB0aGlzLmN1ckZyYW1lICogd2lkdGggKyB3aWR0aDtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoICogMiwgaGVpZ2h0ICogMik7XG5cbiAgICBpZiAodGhpcy5sZWZ0ICYmICh0aGlzLnggPiAtMjAgfHwgdGhpcy5sZXZlbC5yb29tICE9MSkpe1xuICAgICAgdGhpcy5zcmNZID0gdHJhY2tMZWZ0ICogaGVpZ2h0O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmlnaHQpe1xuICAgICAgdGhpcy5zcmNZID0gdHJhY2tSaWdodCAqIGhlaWdodDtcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0aWxsID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNyY1ggPSB3aWR0aDtcbiAgICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueSA8IDMxMCl7XG4gICAgICBpZiAoMzEwIC0gdGhpcy55ID4gdGhpcy5zcGVlZCl7XG4gICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMueSArPSAzMTAgLSB0aGlzLnk7XG4gICAgICB9XG4gICAgICB0aGlzLnNyY1kgPSBoZWlnaHQgKiAyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMueSAtPSAxNTU7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy54ID4gNzAwKXsgXG4gICAgICB0aGlzLnNjcm9sbFJpZ2h0KCk7XG4gICAgICB0aGlzLnggPSAyMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMubGV2ZWwucm9vbSAhPSAxKSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQoKTtcbiAgICAgIHRoaXMueCA9IDY0MDtcbiAgICB9XG4gICAgfVxuXG4gIG1vdmVMZWZ0KCl7XG4gICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCl7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICB9XG5cbiAganVtcCgpe1xuICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gIH1cblxuICBiaW5kS2V5SGFuZGxlcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiKSB7XG4gICAgdGhpcy5tb3ZlTGVmdCgpO1xuICB9XG4gIGlmIChlLmtleSA9PT0gXCJ3XCIgJiYgdGhpcy55ID09PSAzMTApIHtcbiAgICB0aGlzLmp1bXAoKTtcbiAgfVxufVxuXG4ga2V5VXBIYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuXG4gIGVsc2UgaWYgKGUua2V5ID09PSBcIndcIikge1xuICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgfVxufVxuXG5zY3JvbGxSaWdodCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiaW1hZ2VzL2xldmVsJHt0aGlzLmxldmVsLnJvb219LnBuZ1wiYFxuICBpZiAodGhpcy5sZXZlbC5yb29tID09PSAzKXtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIxMTBweFwiO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gIH1cbn1cblxuc2Nyb2xsTGVmdCgpe1xuICB0aGlzLmxldmVsLnJvb20gLT0gMVxuICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiaW1hZ2VzL2xldmVsJHt0aGlzLmxldmVsLnJvb219LnBuZ1wiYFxuICBpZiAodGhpcy5sZXZlbC5yb29tID09PSAzKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMTEwcHhcIjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICB9XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9nYW1lX3ZpZXdcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIGJhY2tncm91bmRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzMlwiKTtcbiAgLy8gYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuIFxuICBsZXQgbGV2ZWwgPSBuZXcgTGV2ZWwoMSwgY3R4LCBjYW52YXMpO1xuICBuZXcgR2FtZVZpZXcobGV2ZWwsIGN0eCwgY2FudmFzKTtcbn0pOyIsImNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vZ2FtZV92aWV3XCIpO1xuXG5cbmNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCBjdHgsIGNhbnZhcykge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnJvb20gPSBudW1iZXI7XG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhczJcIik7XG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gdGhpcy5iYWNrZ3JvdW5kQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICB9XG4gIGFkZFNjZW5lKCkge1xuICAgIC8vIHRoaXMuYmFja2dyb3VuZEN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDApO1xuICAgIGlmICh0aGlzLnJvb20gPT09IDEpIHtcbiAgICAgIC8vIHRoaXMuZHJhd0Nhc3RsZSgpO1xuICAgIH1cbiAgfVxuICBkcmF3Q2FzdGxlKCkge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kQ3R4LmRyYXdJbWFnZShpbWcsIDEwMCwgNTAsIDgwMCwgODAwLCAwLCAwLCA4MDAsIDgwMCk7XG4gICAgfTtcbiAgICBpbWcuc3JjID0gXCJpbWFnZXMvY2FzdGxlU2NlbmUucG5nXCI7XG5cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==