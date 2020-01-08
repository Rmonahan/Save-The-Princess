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
    this.facingLeft = false;
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
      this.curFrame = 0;
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

      if (this.facingLeft === true) {
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
      this.stillFrame = this.curFrame % 4;
      if (this.curFrame === 4) this.stillFrame = 3;
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
        this.srcX = this.stillFrame * width;
        this.srcY = 0;
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.left = true;
      this.right = false;
      this.still = false;
      this.facingLeft = true;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.left = false;
      this.still = false;
      this.right = true;
      this.facingLeft = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsInNwZWVkWCIsInNwZWVkWSIsInNyYyIsInRpbWUiLCJ1cGRhdGVGcmFtZSIsInNjYWxlIiwiZHJhd0ltYWdlIiwic2V0VGltZW91dCIsInN0aWxsRnJhbWUiLCJ1cGRhdGVTY2VuZSIsInJvb20iLCJzY3JvbGxSaWdodCIsInNjcm9sbExlZnQiLCJpIiwibGVuZ3RoIiwiZGlyZWN0aW9uIiwiY29sbGlzaW9uQ2hlY2siLCJjb2xsaXNpb25OYW1lIiwiZm91bmRLZXkxIiwiZm91bmRLZXkyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZW50ZXIiLCJwbGF0Zm9ybSIsInZlY3RvclgiLCJ2ZWN0b3JZIiwiY2VudGVyV2lkdGhzIiwiY2VudGVySGVpZ2h0cyIsImNvbGxpc2lvbkRpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJuYW1lIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjbGVhciIsIm1vZHVsZSIsImV4cG9ydHMiLCJMZXZlbCIsInJlcXVpcmUiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJudW1iZXIiLCJwbGF0Zm9ybVdpZHRoIiwicGxhdGZvcm1IZWlnaHQiLCJrZXkxIiwia2V5MiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImJhY2tncm91bmRQb3N0aW9uWCIsImJhY2tncm91bmRQb3NpdGlvblgiLCJwdXNoIiwicmFkaXVzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImJsIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImZpbGxSZWN0IiwiZHJhd1RleHRCb3giLCJmb250IiwiZmlsbFRleHQiLCJkcmF3X3BsYXRmb3JtcyIsImRyYXdfa2V5MSIsImRyYXdfa2V5MiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFB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QUVicEIsYUFBQyxFQUFFLEtBQUtoQixNQUFMLENBQVlxQyxNQUFaLEdBQXFCLEdBRlg7QUFHYkQsaUJBQUssRUFBRW9ELGFBQWEsR0FBRyxHQUhWO0FBSWJuRCxrQkFBTSxFQUFFb0Q7QUFKSyxXQUFmO0FBTUQ7QUFDRjtBQUNKOzs7Ozs7QUFHRFIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxLQUFqQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IobGV2ZWwsIGN0eCwgY2FudmFzLCBiYWNrZ3JvdW5kQ3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLmJhY2tncm91bmRDdHggPSBiYWNrZ3JvdW5kQ3R4O1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLmJpbmRLZXlIYW5kbGVycygpO1xuICAgIHRoaXMuZmxpcFBsYXllciA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAwO1xuICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMuc3JjWCA9IDA7XG4gICAgdGhpcy5zcmNZID0gMDtcbiAgICB0aGlzLnggPSAzMDA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3BlZWQgPSAxMjtcbiAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgdGhpcy5sZXZlbC5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpe1xuICAgIHRoaXMuZHJhd01haW5DaGFyYWN0ZXIoKTtcbiAgICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIH1cblxuICBkcmF3TWFpbkNoYXJhY3RlcigpIHtcbiAgICBjb25zdCBzcHJpdGVXaWR0aCA9IDM1MDtcbiAgICBjb25zdCBzcHJpdGVIZWlnaHQgPSA0MDc7XG4gICAgY29uc3Qgcm93cyA9IDExO1xuICAgIGNvbnN0IGNvbHMgPSA3O1xuICAgIHRoaXMudHJhY2tSaWdodCA9IDE7XG4gICAgdGhpcy50cmFja0xlZnQgPSAxO1xuICAgIHRoaXMud2lkdGggPSBzcHJpdGVXaWR0aCAvIGNvbHM7XG4gICAgdGhpcy5oZWlnaHQgPSBzcHJpdGVIZWlnaHQgLyByb3dzO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy54ID0gMjIwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNyY1g9IDA7XG4gICAgdGhpcy5zcmNZPSB0aGlzLnRyYWNrUmlnaHQgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgIHRoaXMuc3BlZWRZID0gMTU7XG4gICAgdGhpcy5jaGFyYWN0ZXIuc3JjID0gXCJpbWFnZXMvYWR2ZW50dXJlci1TaGVldC5wbmdcIjtcbiAgfVxuICBtYWluTG9vcCh0aW1lKXtcbiAgICB0aGlzLnVwZGF0ZUZyYW1lKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmZyYW1lQ291bnQsIHRoaXMudHJhY2tMZWZ0LCB0aGlzLnRyYWNrUmlnaHQpXG4gICAgaWYgKHRoaXMuZmFjaW5nTGVmdCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgKC10aGlzLnggLSAodGhpcy53aWR0aCAqIDIpKSwgdGhpcy55LCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTsgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCoyLCB0aGlzLmhlaWdodCoyKVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgIH0sIDEwMClcbiAgfVxuXG4gIHVwZGF0ZUZyYW1lKHdpZHRoLCBoZWlnaHQsIGZyYW1lQ291bnQsIHRyYWNrTGVmdCwgdHJhY2tSaWdodCl7XG5cbiAgICB0aGlzLnN0aWxsRnJhbWUgPSB0aGlzLmN1ckZyYW1lICUgNFxuICAgIGlmICh0aGlzLmN1ckZyYW1lID09PSA0KSB0aGlzLnN0aWxsRnJhbWUgPSAzXG4gICAgXG4gICAgXG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIHRoaXMuc3JjWCA9IHRoaXMuY3VyRnJhbWUgKiB3aWR0aCArIHdpZHRoO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGggKiAyLCBoZWlnaHQgKiAyKTtcbiAgICB0aGlzLmxldmVsLnVwZGF0ZVNjZW5lKHRoaXMueCwgdGhpcy55KTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxlZnQgJiYgKHRoaXMueCA+IC0yMCB8fCB0aGlzLmxldmVsLnJvb20gIT0xKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNwZWVkWSA9IDE1XG4gICAgICBpZiAoMzEwIC0gdGhpcy55ID4gdGhpcy5zcGVlZFkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDcwMCl7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gMjA7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPCAtMjAgJiYgdGhpcy5sZXZlbC5yb29tICE9IDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCgpO1xuICAgICAgdGhpcy54ID0gNjQwO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWwucGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwucGxhdGZvcm1zW2ldKVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIiB8fCBkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidG9wXCIgfHwgZGlyZWN0aW9uID09PSBcImJvdHRvbVwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMDtcbiAgICAgICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmxldmVsLml0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGNvbGxpc2lvbk5hbWUgPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwuaXRlbXNbaV0pXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkxXCIpe1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTJcIikge1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MiA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID09PSAzMTApIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gaGVpZ2h0ICogMjtcbiAgICBlbHNlIGlmICh0aGlzLmxlZnQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrTGVmdCAqIGhlaWdodDtcbiAgICBlbHNlIGlmICh0aGlzLnJpZ2h0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja1JpZ2h0ICogaGVpZ2h0O1xuICAgIGVsc2Uge3RoaXMuc3JjWCA9ICh0aGlzLnN0aWxsRnJhbWUpICogd2lkdGg7IHRoaXMuc3JjWSA9IDA7fVxuICB9XG4gIFxuICBtb3ZlTGVmdCgpe1xuICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSB0cnVlO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCl7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICB9XG5cbiAganVtcCgpe1xuICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICB9XG5cbiAgYmluZEtleUhhbmRsZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIpIHtcbiAgICB0aGlzLm1vdmVSaWdodCgpO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIikge1xuICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgfVxuICBpZiAoZS5rZXkgPT09IFwid1wiICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiAodGhpcy55ID09PSAzMTAgfHwgdGhpcy5zcGVlZFkgPT09IDApKSB7XG4gICAgdGhpcy5qdW1wKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiclwiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNCAmJiB0aGlzLnggPiAzMDAgJiYgdGhpcy54IDwgMzUwICYmIGUucmVwZWF0ID09PSBmYWxzZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG59XG5cbiBrZXlVcEhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIikge1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG5cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwid1wiKSB7XG4gIH1cbn1cblxuY29sbGlzaW9uQ2hlY2socGxhdGZvcm0pe1xuICBjb25zdCB2ZWN0b3JYID0gKHRoaXMueCArICh0aGlzLndpZHRoKSkgLSAocGxhdGZvcm0ueCArIChwbGF0Zm9ybS53aWR0aCAvIDIpKTtcbiAgY29uc3QgdmVjdG9yWSA9ICh0aGlzLnkgKyAodGhpcy5oZWlnaHQpKSAtIChwbGF0Zm9ybS55ICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpKTtcblxuICBjb25zdCBjZW50ZXJXaWR0aHMgPSAodGhpcy53aWR0aC8yKSArIChwbGF0Zm9ybS53aWR0aCAvIDIpO1xuICBjb25zdCBjZW50ZXJIZWlnaHRzID0gKHRoaXMuaGVpZ2h0KSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKTtcblxuXG4gIGxldCBjb2xsaXNpb25EaXJlY3Rpb247XG5cbiAgaWYgKE1hdGguYWJzKHZlY3RvclgpIDwgY2VudGVyV2lkdGhzICYmIE1hdGguYWJzKHZlY3RvclkpIDwgY2VudGVySGVpZ2h0cykgXG4gIHtcblxuICAgIGlmIChwbGF0Zm9ybS5uYW1lKSByZXR1cm4gcGxhdGZvcm0ubmFtZTtcbiAgICBjb25zdCBvZmZzZXRYID0gY2VudGVyV2lkdGhzIC0gTWF0aC5hYnModmVjdG9yWCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGNlbnRlckhlaWdodHMgLSBNYXRoLmFicyh2ZWN0b3JZKTtcblxuICAgIGlmIChvZmZzZXRYIDwgb2Zmc2V0WSlcbiAgICAgICAgaWYgKHZlY3RvclggPiAwKXtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgICAgIHRoaXMueCArPSBvZmZzZXRYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgIHRoaXMueCAtPSBvZmZzZXRYO1xuICAgICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodmVjdG9yWSA+IDApe1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInRvcFwiO1xuICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMueSAtPSBvZmZzZXRZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb2xsaXNpb25EaXJlY3Rpb247XG59XG5cbnNjcm9sbFJpZ2h0KCl7XG4gIHRoaXMubGV2ZWwucm9vbSArPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zY3JvbGxMZWZ0KCl7XG4gIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9nYW1lX3ZpZXdcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIGJhY2tncm91bmRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzMlwiKTtcbiAgLy8gYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuIFxuICBsZXQgbGV2ZWwgPSBuZXcgTGV2ZWwoMSwgY3R4LCBjYW52YXMpO1xuICBuZXcgR2FtZVZpZXcobGV2ZWwsIGN0eCwgY2FudmFzKTtcbn0pOyIsImNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vZ2FtZV92aWV3XCIpO1xuXG5cbmNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCBjdHgsIGNhbnZhcykge1xuICAgIHRoaXMucm9vbSA9IG51bWJlcjtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMucGxhdGZvcm1XaWR0aCA9IDE1MDtcbiAgICB0aGlzLnBsYXRmb3JtSGVpZ2h0ID0gMjA7XG4gICAgdGhpcy5mb3VuZEtleTEgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MiA9IGZhbHNlO1xuICAgIHRoaXMua2V5MSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5MS5zcmMgPSBcImltYWdlcy9LZXlJY29ucy5wbmdcIlxuICAgIHRoaXMua2V5MiA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5Mi5zcmMgPSBcImltYWdlcy9LZXlJY29ucy5wbmdcIlxuICB9XG4gIGFkZFNjZW5lKCkge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCJpbWFnZXMvbGV2ZWwke3RoaXMucm9vbX0ucG5nXCJgXG4gICAgcGxhdGZvcm1zID0gdGhpcy5wbGF0Zm9ybXM7XG4gICAgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgcGxhdGZvcm1XaWR0aCA9IHRoaXMucGxhdGZvcm1XaWR0aDtcbiAgICBwbGF0Zm9ybUhlaWdodCA9IHRoaXMucGxhdGZvcm1IZWlnaHRcbiAgICBpZiAodGhpcy5yb29tID09PSAxKSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItMjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc3Rpb25YID0gXCItMTAwcHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIxMTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA4MDAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzgwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICBuYW1lOiBcImtleTFcIixcbiAgICAgICAgeDogNjAwLFxuICAgICAgICB5OiAyNzAsXG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAzKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxMDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgIG5hbWU6IFwia2V5MlwiLFxuICAgICAgICB4OiAzODUsXG4gICAgICAgIHk6IDI1MCxcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjEwMHB4XCI7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCI0MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdUZXh0Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyl7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cy5ibCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd19wbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBsYXRmb3Jtc1tpXS54LCBwbGF0Zm9ybXNbaV0ueSwgcGxhdGZvcm1zW2ldLndpZHRoLCBwbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBkcmF3X2tleTEoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkxLCAwLCAwLCAzMiwgMzIsIDYwMCwgMjcwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkyKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MiwgMzIsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICB1cGRhdGVTY2VuZSh4LCB5KXtcbiAgICBpZiAodGhpcy5yb29tID09PSAxKXtcbiAgICAgIGlmICh4IDwgNDAwICYmIHggPiAyMDApe1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCg5MCwgMjgwLCAxMDAsIDUwLCA1KVxuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0dvb2QgbHVjayBIZW5yeSwnLCA5NSwgMzAwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdJIGtub3cgeW91IGNhbicsIDk1LCAzMTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2RvIGl0IScsIDk1LCAzMjApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgfVxuXG4gICAgICBpZiAoeCA8IDgwMCAmJiB4ID4gNTAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGFyZW4ndCBnb2luZ1wiLCA0MTAsIDI4MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCd0byBsYXN0IDUgbWludXRlcycsIDQxMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJvdXQgdGhlcmUuXCIsIDQxMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg0MDAsIDI2MCwgMTAwLCA1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgICB0aGlzLmRyYXdfa2V5MSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAzKSB7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZHJhd19rZXkyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbn1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZXZlbDtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9