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
    this.jumpHeight = 0;
    this.inAir = false;
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
      this.ctx.clearRect(0, 0, 700, 400);
      this.level.platforms = [];
      this.level.items = [];
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
      this.x = 220;
      this.y = 310;
      this.srcX = 0;
      this.srcY = this.trackRight * this.height;
      this.speedX = 15;
      this.speedY = 15;
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
      this.level.updateScene(this.x, this.y);
      this.inAir = true;

      if (this.left && (this.x > -20 || this.level.room != 1)) {
        this.speedX = 15;
        this.x -= this.speedX;
      }

      if (this.right) {
        this.speedX = 15;
        this.x += this.speedX;
      }

      if (this.inAir === true) {
        this.speedY = 15;

        if (310 - this.y > this.speedY) {
          this.y += this.speedY;
        } else {
          this.y += 310 - this.y;
        }
      }

      if (this.jumping === true) {
        this.jumpHeight += 30;
        this.y -= 30;

        if (this.jumpHeight > 130) {
          this.jumping = false;
          this.still = true;
          this.jumpHeight = 0;
        }
      }

      if (this.x > 700) {
        this.scrollRight();
        this.x = 20;
      }

      if (this.x < -20 && this.level.room != 1) {
        this.scrollLeft();
        this.x = 640;
      }

      for (var i = 0; i < this.level.platforms.length; i++) {
        var direction = this.collisionCheck(this.level.platforms[i]);

        if (direction === "left" || direction === "right") {
          this.speedX = 0;
        } else if (direction === "top" || direction === "bottom") {
          this.speedY = 0;
          this.still = true;
          this.inAir = false;
        }
      }

      for (var _i = 0; _i < this.level.items.length; _i++) {
        var collisionName = this.collisionCheck(this.level.items[_i]);

        if (collisionName === "key1") {
          this.level.foundKey1 = true;
        }

        if (collisionName === "key2") {
          this.level.foundKey2 = true;
        }
      }

      if (this.y === 310) this.inAir = false;
      if (this.inAir === true) this.srcY = height * 2;else if (this.left === true) this.srcY = trackLeft * height;else if (this.right === true) this.srcY = trackRight * height;else {
        this.srcX = width;
        this.srcY = 0;
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
      this.inAir = true;
      this.still = false;
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

      if (e.key === "w" && e.repeat === false && (this.y === 310 || this.speedY === 0)) {
        this.jump();
      }

      if (e.key === "r" && this.level.room === 4 && this.x > 300 && this.x < 350 && e.repeat === false) {
        this.enter();
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
      } else if (e.key === "w") {}
    }
  }, {
    key: "collisionCheck",
    value: function collisionCheck(platform) {
      var vectorX = this.x + this.width - (platform.x + platform.width / 2);
      var vectorY = this.y + this.height - (platform.y + platform.height / 2);
      var centerWidths = this.width / 2 + platform.width / 2;
      var centerHeights = this.height + platform.height / 2;
      var collisionDirection;

      if (Math.abs(vectorX) < centerWidths && Math.abs(vectorY) < centerHeights) {
        if (platform.name) return platform.name;
        var offsetX = centerWidths - Math.abs(vectorX);
        var offsetY = centerHeights - Math.abs(vectorY);
        if (offsetX < offsetY) {
          if (vectorX > 0) {
            collisionDirection = "left";
            this.x += offsetX;
          } else {
            collisionDirection = "right";
            this.x -= offsetX;
          }
        } else {
          if (vectorY > 0) {
            collisionDirection = "top";
            this.y += offsetY;
          } else {
            collisionDirection = "bottom";
            this.y -= offsetY;
          }
        }
      }

      return collisionDirection;
    }
  }, {
    key: "scrollRight",
    value: function scrollRight() {
      this.level.room += 1;
      this.clear();
      this.level.addScene();
    }
  }, {
    key: "scrollLeft",
    value: function scrollLeft() {
      this.level.room -= 1;
      this.clear();
      this.level.addScene();
    }
  }, {
    key: "enter",
    value: function enter() {
      this.level.room += 1;
      this.level.addScene();
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

    this.room = number;
    this.ctx = ctx;
    this.items = [];
    this.canvas = canvas;
    this.platforms = [];
    this.platformWidth = 150;
    this.platformHeight = 20;
    this.foundKey1 = false;
    this.foundKey2 = false;
    this.key1 = new Image();
    this.key1.src = "images/KeyIcons.png";
    this.key2 = new Image();
    this.key2.src = "images/KeyIcons.png";
  }

  _createClass(Level, [{
    key: "addScene",
    value: function addScene() {
      this.canvas.style.backgroundImage = "url(\"images/level".concat(this.room, ".png\"");
      platforms = this.platforms;
      canvas = this.canvas;
      platformWidth = this.platformWidth;
      platformHeight = this.platformHeight;

      if (this.room === 1) {
        this.canvas.style.backgroundPositionY = "-20px";
        this.canvas.style.backgroundPostionX = "-100px";
      } else if (this.room === 2) {
        this.canvas.style.backgroundPositionY = "110px";
        this.canvas.style.backgroundPositionX = "-100px";
        platforms.push({
          x: canvas.width - 200,
          y: 70,
          width: platformWidth + 100,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 200,
          y: 70,
          width: platformWidth - 120,
          height: platformHeight + 800
        });
        platforms.push({
          x: canvas.width - 380,
          y: canvas.height - 120,
          width: platformWidth,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 380,
          y: canvas.height - 240,
          width: platformWidth,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 590,
          y: canvas.height - 180,
          width: platformWidth,
          height: platformHeight
        });
        this.items.push({
          name: "key1",
          x: 600,
          y: 270,
          width: 30,
          height: 30
        });
      } else if (this.room === 3) {
        this.canvas.style.backgroundPositionY = "-50px";
        this.canvas.style.backgroundPositionX = "-100px";
        platforms.push({
          x: canvas.width - 700,
          y: 70,
          width: platformWidth + 100,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 100,
          y: this.canvas.height - 170,
          width: platformWidth,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 340,
          y: canvas.height - 120,
          width: platformWidth - 100,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 380,
          y: canvas.height - 260,
          width: platformWidth,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 590,
          y: canvas.height - 200,
          width: platformWidth,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 700,
          y: canvas.height - 40,
          width: platformWidth,
          height: platformHeight
        });
        this.items.push({
          name: "key2",
          x: 385,
          y: 250,
          width: 30,
          height: 30
        });
      } else if (this.room === 4) {
        this.canvas.style.backgroundPositionY = "-50px";
        this.canvas.style.backgroundPositionX = "100px";
      } else if (this.room === 5) {
        this.canvas.style.backgroundPositionY = "40px";
        this.canvas.style.backgroundPostionX = "-100px";
      }
    }
  }, {
    key: "drawTextBox",
    value: function drawTextBox(x, y, width, height, radius) {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius.bl, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fillStyle = "white";
      ctx.fill();
    }
  }, {
    key: "draw_platforms",
    value: function draw_platforms() {
      this.ctx.fillStyle = "black";

      for (var i = 0; i < platforms.length; i++) {
        this.ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
      }
    }
  }, {
    key: "draw_key1",
    value: function draw_key1() {
      this.ctx.drawImage(this.key1, 0, 0, 32, 32, 600, 270, 30, 30);
    }
  }, {
    key: "draw_key2",
    value: function draw_key2() {
      this.ctx.drawImage(this.key2, 32, 0, 32, 32, 385, 250, 30, 30);
    }
  }, {
    key: "updateScene",
    value: function updateScene(x, y) {
      if (this.room === 1) {
        if (x < 400 && x > 200) {
          this.drawTextBox(90, 280, 100, 50, 5);
          this.ctx.font = 'bold 8pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText('Good luck Henry,', 95, 300);
          this.ctx.fillText('I know you can', 95, 310);
          this.ctx.fillText('do it!', 95, 320);
        } else {
          this.ctx.clearRect(90, 280, 100, 50);
        }

        if (x < 800 && x > 500) {
          this.drawTextBox(400, 260, 100, 50, 5);
          this.ctx.font = 'bold 8pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("You aren't going", 410, 280);
          this.ctx.fillText('to last 5 minutes', 410, 290);
          this.ctx.fillText("out there.", 410, 300);
        } else {
          this.ctx.clearRect(400, 260, 100, 50);
        }
      } else if (this.room === 2) {
        this.draw_platforms();

        if (this.foundKey1 === false) {
          this.draw_key1();
        }
      } else if (this.room === 3) {
        this.draw_platforms();

        if (this.foundKey2 === false) {
          this.draw_key2();
        }

        if (this.foundKey1 === true) {
          platforms.push({
            x: canvas.width - 700,
            y: this.canvas.height - 130,
            width: platformWidth - 100,
            height: platformHeight
          });
        }
      }
    }
  }]);

  return Level;
}();

module.exports = Level;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsInJpZ2h0IiwianVtcGluZyIsImp1bXBIZWlnaHQiLCJpbkFpciIsImN1ckZyYW1lIiwiZnJhbWVDb3VudCIsInNyY1giLCJzcmNZIiwieCIsInkiLCJzcGVlZCIsImNoYXJhY3RlciIsIkltYWdlIiwiY3JlYXRlU2NlbmUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtYWluTG9vcCIsImJpbmQiLCJjbGVhclJlY3QiLCJwbGF0Zm9ybXMiLCJpdGVtcyIsImRyYXdNYWluQ2hhcmFjdGVyIiwiYWRkU2NlbmUiLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsInJvd3MiLCJjb2xzIiwidHJhY2tSaWdodCIsInRyYWNrTGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0IiwidXBkYXRlU2NlbmUiLCJyb29tIiwic2Nyb2xsUmlnaHQiLCJzY3JvbGxMZWZ0IiwiaSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkNoZWNrIiwiY29sbGlzaW9uTmFtZSIsImZvdW5kS2V5MSIsImZvdW5kS2V5MiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZSIsImtleSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwicmVwZWF0IiwianVtcCIsImVudGVyIiwicGxhdGZvcm0iLCJ2ZWN0b3JYIiwidmVjdG9yWSIsImNlbnRlcldpZHRocyIsImNlbnRlckhlaWdodHMiLCJjb2xsaXNpb25EaXJlY3Rpb24iLCJNYXRoIiwiYWJzIiwibmFtZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY2xlYXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiTGV2ZWwiLCJyZXF1aXJlIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibnVtYmVyIiwicGxhdGZvcm1XaWR0aCIsInBsYXRmb3JtSGVpZ2h0Iiwia2V5MSIsImtleTIiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvblkiLCJiYWNrZ3JvdW5kUG9zdGlvblgiLCJiYWNrZ3JvdW5kUG9zaXRpb25YIiwicHVzaCIsInJhZGl1cyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJibCIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJmaWxsUmVjdCIsImRyYXdUZXh0Qm94IiwiZm9udCIsImZpbGxUZXh0IiwiZHJhd19wbGF0Zm9ybXMiLCJkcmF3X2tleTEiLCJkcmF3X2tleTIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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LFFBQVQsQ0FBa0Isa0JBQWxCLEVBQXNDLEdBQXRDLEVBQTJDLEdBQTNDO0FBQ0EsZUFBSzdHLEdBQUwsQ0FBUzZHLFFBQVQsQ0FBa0IsbUJBQWxCLEVBQXVDLEdBQXZDLEVBQTRDLEdBQTVDO0FBQ0EsZUFBSzdHLEdBQUwsQ0FBUzZHLFFBQVQsQ0FBa0IsWUFBbEIsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckM7QUFDRCxTQVBELE1BT087QUFDTCxlQUFLN0csR0FBTCxDQUFTeUIsU0FBVCxDQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixHQUE3QixFQUFrQyxFQUFsQztBQUNEO0FBQ0YsT0F0QkQsTUF3QkssSUFBSSxLQUFLc0IsSUFBTCxLQUFjLENBQWxCLEVBQW9CO0FBQ3JCLGFBQUsrRCxjQUFMOztBQUNBLFlBQUksS0FBS3ZELFNBQUwsS0FBbUIsS0FBdkIsRUFBNkI7QUFDM0IsZUFBS3dELFNBQUw7QUFDRDtBQUNKLE9BTEksTUFPQSxJQUFJLEtBQUtoRSxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDeEIsYUFBSytELGNBQUw7O0FBQ0EsWUFBSSxLQUFLdEQsU0FBTCxLQUFtQixLQUF2QixFQUE4QjtBQUM1QixlQUFLd0QsU0FBTDtBQUNEOztBQUVELFlBQUksS0FBS3pELFNBQUwsS0FBbUIsSUFBdkIsRUFBNEI7QUFDMUI3QixtQkFBUyxDQUFDc0UsSUFBVixDQUFlO0FBQ2JqRixhQUFDLEVBQUVkLE1BQU0sQ0FBQ21DLEtBQVAsR0FBZSxHQURMO0FBRWJwQixhQUFDLEVBQUUsS0FBS2YsTUFBTCxDQUFZb0MsTUFBWixHQUFxQixHQUZYO0FBR2JELGlCQUFLLEVBQUVtRCxhQUFhLEdBQUcsR0FIVjtBQUlibEQsa0JBQU0sRUFBRW1EO0FBSkssV0FBZjtBQU1EO0FBQ0Y7QUFDSjs7Ozs7O0FBR0RSLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsS0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgsIGNhbnZhcywgYmFja2dyb3VuZEN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZEN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmZsaXBQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgIHRoaXMubGV2ZWwucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlU2NlbmUoKXtcbiAgICB0aGlzLmRyYXdNYWluQ2hhcmFjdGVyKCk7XG4gICAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB9XG5cbiAgZHJhd01haW5DaGFyYWN0ZXIoKSB7XG4gICAgY29uc3Qgc3ByaXRlV2lkdGggPSAzNTA7XG4gICAgY29uc3Qgc3ByaXRlSGVpZ2h0ID0gNDA3O1xuICAgIGNvbnN0IHJvd3MgPSAxMTtcbiAgICBjb25zdCBjb2xzID0gNztcbiAgICB0aGlzLnRyYWNrUmlnaHQgPSAxO1xuICAgIHRoaXMudHJhY2tMZWZ0ID0gMTtcbiAgICB0aGlzLndpZHRoID0gc3ByaXRlV2lkdGggLyBjb2xzO1xuICAgIHRoaXMuaGVpZ2h0ID0gc3ByaXRlSGVpZ2h0IC8gcm93cztcbiAgICB0aGlzLmN1ckZyYW1lID0gMTtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMueCA9IDIyMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcmNYPSAwO1xuICAgIHRoaXMuc3JjWT0gdGhpcy50cmFja1JpZ2h0ICogdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICB0aGlzLnNwZWVkWSA9IDE1O1xuICAgIHRoaXMuY2hhcmFjdGVyLnNyYyA9IFwiaW1hZ2VzL2FkdmVudHVyZXItU2hlZXQucG5nXCI7XG4gIH1cbiAgbWFpbkxvb3AodGltZSl7XG4gICAgdGhpcy51cGRhdGVGcmFtZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5mcmFtZUNvdW50LCB0aGlzLnRyYWNrTGVmdCwgdGhpcy50cmFja1JpZ2h0KVxuICAgIGlmICh0aGlzLmxlZnQgPT09IHRydWUpe1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICgtdGhpcy54IC0gKHRoaXMud2lkdGggKiAyKSksIHRoaXMueSwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7ICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgqMiwgdGhpcy5oZWlnaHQqMilcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PntcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICB9LCAxMDApXG4gIH1cblxuICB1cGRhdGVGcmFtZSh3aWR0aCwgaGVpZ2h0LCBmcmFtZUNvdW50LCB0cmFja0xlZnQsIHRyYWNrUmlnaHQpe1xuICAgIHRoaXMuY3VyRnJhbWUgPSAodGhpcy5jdXJGcmFtZSArIDEpICUgZnJhbWVDb3VudDtcbiAgICB0aGlzLnNyY1ggPSB0aGlzLmN1ckZyYW1lICogd2lkdGggKyB3aWR0aDtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoICogMiwgaGVpZ2h0ICogMik7XG4gICAgdGhpcy5sZXZlbC51cGRhdGVTY2VuZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5sZWZ0ICYmICh0aGlzLnggPiAtMjAgfHwgdGhpcy5sZXZlbC5yb29tICE9MSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucmlnaHQpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuaW5BaXIgPT09IHRydWUpe1xuICAgICAgdGhpcy5zcGVlZFkgPSAxNVxuICAgICAgaWYgKDMxMCAtIHRoaXMueSA+IHRoaXMuc3BlZWRZKXtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy55ICs9IDMxMCAtIHRoaXMueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5qdW1waW5nID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmp1bXBIZWlnaHQgKz0gMzBcbiAgICAgIHRoaXMueSAtPSAzMDtcbiAgICAgIGlmICh0aGlzLmp1bXBIZWlnaHQgPiAxMzApe1xuICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgIHRoaXMuanVtcEhlaWdodCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPiA3MDApeyBcbiAgICAgIHRoaXMuc2Nyb2xsUmlnaHQoKTtcbiAgICAgIHRoaXMueCA9IDIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMubGV2ZWwucm9vbSAhPSAxKSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQoKTtcbiAgICAgIHRoaXMueCA9IDY0MDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsLnBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLnBsYXRmb3Jtc1tpXSlcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgfHwgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJib3R0b21cIikge1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XG4gICAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sZXZlbC5pdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBjb2xsaXNpb25OYW1lID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLml0ZW1zW2ldKVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MVwiKXtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTEgPSB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkyXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTIgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueSA9PT0gMzEwKSB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaW5BaXIgPT09IHRydWUpIHRoaXMuc3JjWSA9IGhlaWdodCAqIDI7XG4gICAgZWxzZSBpZiAodGhpcy5sZWZ0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja0xlZnQgKiBoZWlnaHQ7XG4gICAgZWxzZSBpZiAodGhpcy5yaWdodCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tSaWdodCAqIGhlaWdodDtcbiAgICBlbHNlIHt0aGlzLnNyY1ggPSB3aWR0aDsgdGhpcy5zcmNZID0gMDt9XG4gIH1cbiAgXG4gIG1vdmVMZWZ0KCl7XG4gICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCl7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICB9XG5cbiAganVtcCgpe1xuICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICB9XG5cbiAgYmluZEtleUhhbmRsZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIpIHtcbiAgICB0aGlzLm1vdmVSaWdodCgpO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIikge1xuICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgfVxuICBpZiAoZS5rZXkgPT09IFwid1wiICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiAodGhpcy55ID09PSAzMTAgfHwgdGhpcy5zcGVlZFkgPT09IDApKSB7XG4gICAgdGhpcy5qdW1wKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiclwiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNCAmJiB0aGlzLnggPiAzMDAgJiYgdGhpcy54IDwgMzUwICYmIGUucmVwZWF0ID09PSBmYWxzZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG59XG5cbiBrZXlVcEhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIikge1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG5cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwid1wiKSB7XG4gIH1cbn1cblxuY29sbGlzaW9uQ2hlY2socGxhdGZvcm0pe1xuICBjb25zdCB2ZWN0b3JYID0gKHRoaXMueCArICh0aGlzLndpZHRoKSkgLSAocGxhdGZvcm0ueCArIChwbGF0Zm9ybS53aWR0aCAvIDIpKTtcbiAgY29uc3QgdmVjdG9yWSA9ICh0aGlzLnkgKyAodGhpcy5oZWlnaHQpKSAtIChwbGF0Zm9ybS55ICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpKTtcblxuICBjb25zdCBjZW50ZXJXaWR0aHMgPSAodGhpcy53aWR0aC8yKSArIChwbGF0Zm9ybS53aWR0aCAvIDIpO1xuICBjb25zdCBjZW50ZXJIZWlnaHRzID0gKHRoaXMuaGVpZ2h0KSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKTtcblxuXG4gIGxldCBjb2xsaXNpb25EaXJlY3Rpb247XG5cbiAgaWYgKE1hdGguYWJzKHZlY3RvclgpIDwgY2VudGVyV2lkdGhzICYmIE1hdGguYWJzKHZlY3RvclkpIDwgY2VudGVySGVpZ2h0cykgXG4gIHtcblxuICAgIGlmIChwbGF0Zm9ybS5uYW1lKSByZXR1cm4gcGxhdGZvcm0ubmFtZTtcbiAgICBjb25zdCBvZmZzZXRYID0gY2VudGVyV2lkdGhzIC0gTWF0aC5hYnModmVjdG9yWCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGNlbnRlckhlaWdodHMgLSBNYXRoLmFicyh2ZWN0b3JZKTtcblxuICAgIGlmIChvZmZzZXRYIDwgb2Zmc2V0WSlcbiAgICAgICAgaWYgKHZlY3RvclggPiAwKXtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgICAgIHRoaXMueCArPSBvZmZzZXRYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgIHRoaXMueCAtPSBvZmZzZXRYO1xuICAgICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodmVjdG9yWSA+IDApe1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInRvcFwiO1xuICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMueSAtPSBvZmZzZXRZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb2xsaXNpb25EaXJlY3Rpb247XG59XG5cbnNjcm9sbFJpZ2h0KCl7XG4gIHRoaXMubGV2ZWwucm9vbSArPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zY3JvbGxMZWZ0KCl7XG4gIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9nYW1lX3ZpZXdcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIGJhY2tncm91bmRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzMlwiKTtcbiAgLy8gYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuIFxuICBsZXQgbGV2ZWwgPSBuZXcgTGV2ZWwoMSwgY3R4LCBjYW52YXMpO1xuICBuZXcgR2FtZVZpZXcobGV2ZWwsIGN0eCwgY2FudmFzKTtcbn0pOyIsImNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vZ2FtZV92aWV3XCIpO1xuXG5cbmNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCBjdHgsIGNhbnZhcykge1xuICAgIHRoaXMucm9vbSA9IG51bWJlcjtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMucGxhdGZvcm1XaWR0aCA9IDE1MDtcbiAgICB0aGlzLnBsYXRmb3JtSGVpZ2h0ID0gMjA7XG4gICAgdGhpcy5mb3VuZEtleTEgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MiA9IGZhbHNlO1xuICAgIHRoaXMua2V5MSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5MS5zcmMgPSBcImltYWdlcy9LZXlJY29ucy5wbmdcIlxuICAgIHRoaXMua2V5MiA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5Mi5zcmMgPSBcImltYWdlcy9LZXlJY29ucy5wbmdcIlxuICB9XG4gIGFkZFNjZW5lKCkge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCJpbWFnZXMvbGV2ZWwke3RoaXMucm9vbX0ucG5nXCJgXG4gICAgcGxhdGZvcm1zID0gdGhpcy5wbGF0Zm9ybXM7XG4gICAgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgcGxhdGZvcm1XaWR0aCA9IHRoaXMucGxhdGZvcm1XaWR0aDtcbiAgICBwbGF0Zm9ybUhlaWdodCA9IHRoaXMucGxhdGZvcm1IZWlnaHRcbiAgICBpZiAodGhpcy5yb29tID09PSAxKSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItMjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc3Rpb25YID0gXCItMTAwcHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIxMTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA4MDAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzgwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICBuYW1lOiBcImtleTFcIixcbiAgICAgICAgeDogNjAwLFxuICAgICAgICB5OiAyNzAsXG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAzKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxMDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgIG5hbWU6IFwia2V5MlwiLFxuICAgICAgICB4OiAzODUsXG4gICAgICAgIHk6IDI1MCxcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjEwMHB4XCI7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCI0MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdUZXh0Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyl7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cy5ibCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd19wbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBsYXRmb3Jtc1tpXS54LCBwbGF0Zm9ybXNbaV0ueSwgcGxhdGZvcm1zW2ldLndpZHRoLCBwbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBkcmF3X2tleTEoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkxLCAwLCAwLCAzMiwgMzIsIDYwMCwgMjcwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkyKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MiwgMzIsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICB1cGRhdGVTY2VuZSh4LCB5KXtcbiAgICBpZiAodGhpcy5yb29tID09PSAxKXtcbiAgICAgIGlmICh4IDwgNDAwICYmIHggPiAyMDApe1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCg5MCwgMjgwLCAxMDAsIDUwLCA1KVxuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0dvb2QgbHVjayBIZW5yeSwnLCA5NSwgMzAwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdJIGtub3cgeW91IGNhbicsIDk1LCAzMTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2RvIGl0IScsIDk1LCAzMjApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgfVxuXG4gICAgICBpZiAoeCA8IDgwMCAmJiB4ID4gNTAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGFyZW4ndCBnb2luZ1wiLCA0MTAsIDI4MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCd0byBsYXN0IDUgbWludXRlcycsIDQxMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJvdXQgdGhlcmUuXCIsIDQxMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg0MDAsIDI2MCwgMTAwLCA1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgICB0aGlzLmRyYXdfa2V5MSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAzKSB7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZHJhd19rZXkyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbn1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZXZlbDtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9