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

        if (collisionName === "key") {
          debugger;
          this.level.foundKey = true;
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
    this.foundKey = false;
    this.key = new Image();
    this.key.src = "images/KeyIcons.png";
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
          name: "key",
          x: 600,
          y: 270,
          width: 30,
          height: 30
        });
      } else if (this.room === 3) {
        this.canvas.style.backgroundPositionY = "-50px";
        this.canvas.style.backgroundPositionX = "-100px";
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
      this.ctx.strokeStyle = "red";

      for (var i = 0; i < platforms.length; i++) {
        this.ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
      }
    }
  }, {
    key: "draw_key",
    value: function draw_key() {
      this.ctx.drawImage(this.key, 0, 0, 32, 32, 600, 270, 30, 30);
    }
  }, {
    key: "updateScene",
    value: function updateScene(x, y) {
      if (this.room === 1) {
        if (x < 400 && x > 200) {
          this.drawTextBox(90, 280, 100, 50, 5);
          this.ctx.font = 'bold 6pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText('Good luck Henry, I know', 93, 300);
          this.ctx.fillText('you can do it!', 93, 310);
        } else {
          this.ctx.clearRect(90, 280, 100, 50);
        }

        if (x < 800 && x > 500) {
          this.drawTextBox(400, 260, 100, 50, 5);
          this.ctx.font = 'bold 6pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("You aren't going to last", 410, 280);
          this.ctx.fillText('5 minutes out there.', 410, 290);
        } else {
          this.ctx.clearRect(400, 260, 100, 50);
        }
      } else if (this.room === 2) {
        this.draw_platforms();

        if (this.foundKey === false) {
          this.draw_key();
        }
      }
    }
  }]);

  return Level;
}();

module.exports = Level;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsInJpZ2h0IiwianVtcGluZyIsImp1bXBIZWlnaHQiLCJpbkFpciIsImN1ckZyYW1lIiwiZnJhbWVDb3VudCIsInNyY1giLCJzcmNZIiwieCIsInkiLCJzcGVlZCIsImNoYXJhY3RlciIsIkltYWdlIiwiY3JlYXRlU2NlbmUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtYWluTG9vcCIsImJpbmQiLCJjbGVhclJlY3QiLCJwbGF0Zm9ybXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsInNwZWVkWCIsInNwZWVkWSIsInNyYyIsInRpbWUiLCJ1cGRhdGVGcmFtZSIsInNjYWxlIiwiZHJhd0ltYWdlIiwic2V0VGltZW91dCIsInVwZGF0ZVNjZW5lIiwicm9vbSIsInNjcm9sbFJpZ2h0Iiwic2Nyb2xsTGVmdCIsImkiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJjb2xsaXNpb25DaGVjayIsIml0ZW1zIiwiY29sbGlzaW9uTmFtZSIsImZvdW5kS2V5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZW50ZXIiLCJwbGF0Zm9ybSIsInZlY3RvclgiLCJ2ZWN0b3JZIiwiY2VudGVyV2lkdGhzIiwiY2VudGVySGVpZ2h0cyIsImNvbGxpc2lvbkRpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJuYW1lIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjbGVhciIsIm1vZHVsZSIsImV4cG9ydHMiLCJMZXZlbCIsInJlcXVpcmUiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJudW1iZXIiLCJwbGF0Zm9ybVdpZHRoIiwicGxhdGZvcm1IZWlnaHQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvblkiLCJiYWNrZ3JvdW5kUG9zdGlvblgiLCJiYWNrZ3JvdW5kUG9zaXRpb25YIiwicHVzaCIsInJhZGl1cyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJibCIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2VTdHlsZSIsImZpbGxSZWN0IiwiZHJhd1RleHRCb3giLCJmb250IiwiZmlsbFRleHQiLCJkcmF3X3BsYXRmb3JtcyIsImRyYXdfa2V5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEy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QUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxFQUFoQyxFQUFvQyxDQUFwQztBQUNBLGVBQUt6RyxHQUFMLENBQVMwRyxJQUFULEdBQWdCLGtCQUFoQjtBQUNBLGVBQUsxRyxHQUFMLENBQVNxRyxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsZUFBS3JHLEdBQUwsQ0FBUzJHLFFBQVQsQ0FBa0IsMEJBQWxCLEVBQThDLEdBQTlDLEVBQW1ELEdBQW5EO0FBQ0EsZUFBSzNHLEdBQUwsQ0FBUzJHLFFBQVQsQ0FBa0Isc0JBQWxCLEVBQTBDLEdBQTFDLEVBQStDLEdBQS9DO0FBQ0QsU0FORCxNQU1PO0FBQ0wsZUFBSzNHLEdBQUwsQ0FBU3lCLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0MsRUFBbEM7QUFDRDtBQUNGLE9BcEJELE1Bc0JLLElBQUksS0FBS3FCLElBQUwsS0FBYyxDQUFsQixFQUFvQjtBQUNyQixhQUFLOEQsY0FBTDs7QUFDQSxZQUFJLEtBQUtyRCxRQUFMLEtBQWtCLEtBQXRCLEVBQTRCO0FBQzFCLGVBQUtzRCxRQUFMO0FBQ0Q7QUFDSjtBQUNKOzs7Ozs7QUFHRDlCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsS0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgsIGNhbnZhcywgYmFja2dyb3VuZEN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZEN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmZsaXBQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgIHRoaXMubGV2ZWwucGxhdGZvcm1zID0gW107XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpe1xuICAgIHRoaXMuZHJhd01haW5DaGFyYWN0ZXIoKTtcbiAgICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIH1cblxuICBkcmF3TWFpbkNoYXJhY3RlcigpIHtcbiAgICBjb25zdCBzcHJpdGVXaWR0aCA9IDM1MDtcbiAgICBjb25zdCBzcHJpdGVIZWlnaHQgPSA0MDc7XG4gICAgY29uc3Qgcm93cyA9IDExO1xuICAgIGNvbnN0IGNvbHMgPSA3O1xuICAgIHRoaXMudHJhY2tSaWdodCA9IDE7XG4gICAgdGhpcy50cmFja0xlZnQgPSAxO1xuICAgIHRoaXMud2lkdGggPSBzcHJpdGVXaWR0aCAvIGNvbHM7XG4gICAgdGhpcy5oZWlnaHQgPSBzcHJpdGVIZWlnaHQgLyByb3dzO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAxO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy54ID0gMjIwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNyY1g9IDA7XG4gICAgdGhpcy5zcmNZPSB0aGlzLnRyYWNrUmlnaHQgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgIHRoaXMuc3BlZWRZID0gMTU7XG4gICAgdGhpcy5jaGFyYWN0ZXIuc3JjID0gXCJpbWFnZXMvYWR2ZW50dXJlci1TaGVldC5wbmdcIjtcbiAgfVxuICBtYWluTG9vcCh0aW1lKXtcbiAgICB0aGlzLnVwZGF0ZUZyYW1lKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmZyYW1lQ291bnQsIHRoaXMudHJhY2tMZWZ0LCB0aGlzLnRyYWNrUmlnaHQpXG4gICAgaWYgKHRoaXMubGVmdCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgKC10aGlzLnggLSAodGhpcy53aWR0aCAqIDIpKSwgdGhpcy55LCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTsgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCoyLCB0aGlzLmhlaWdodCoyKVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgIH0sIDEwMClcbiAgfVxuXG4gIHVwZGF0ZUZyYW1lKHdpZHRoLCBoZWlnaHQsIGZyYW1lQ291bnQsIHRyYWNrTGVmdCwgdHJhY2tSaWdodCl7XG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIHRoaXMuc3JjWCA9IHRoaXMuY3VyRnJhbWUgKiB3aWR0aCArIHdpZHRoO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGggKiAyLCBoZWlnaHQgKiAyKTtcbiAgICB0aGlzLmxldmVsLnVwZGF0ZVNjZW5lKHRoaXMueCwgdGhpcy55KTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxlZnQgJiYgKHRoaXMueCA+IC0yMCB8fCB0aGlzLmxldmVsLnJvb20gIT0xKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNwZWVkWSA9IDE1XG4gICAgICBpZiAoMzEwIC0gdGhpcy55ID4gdGhpcy5zcGVlZFkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDcwMCl7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gMjA7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPCAtMjAgJiYgdGhpcy5sZXZlbC5yb29tICE9IDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCgpO1xuICAgICAgdGhpcy54ID0gNjQwO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWwucGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwucGxhdGZvcm1zW2ldKVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIiB8fCBkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidG9wXCIgfHwgZGlyZWN0aW9uID09PSBcImJvdHRvbVwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMDtcbiAgICAgICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmxldmVsLml0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGNvbGxpc2lvbk5hbWUgPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwuaXRlbXNbaV0pXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXlcIil7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5ID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnkgPT09IDMxMCkgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKSB0aGlzLnNyY1kgPSBoZWlnaHQgKiAyO1xuICAgIGVsc2UgaWYgKHRoaXMubGVmdCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tMZWZ0ICogaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMucmlnaHQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrUmlnaHQgKiBoZWlnaHQ7XG4gICAgZWxzZSB7dGhpcy5zcmNYID0gd2lkdGg7IHRoaXMuc3JjWSA9IDA7fVxuICB9XG4gIFxuICBtb3ZlTGVmdCgpe1xuICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpe1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgfVxuXG4gIGp1bXAoKXtcbiAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRLZXlIYW5kbGVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKGUua2V5ID09PSBcIndcIiAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgKHRoaXMueSA9PT0gMzEwIHx8IHRoaXMuc3BlZWRZID09PSAwKSkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcInJcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDQgJiYgdGhpcy54ID4gMzAwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2Upe1xuICAgIHRoaXMuZW50ZXIoKTtcbiAgfVxufVxuXG4ga2V5VXBIYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuXG4gIGVsc2UgaWYgKGUua2V5ID09PSBcIndcIikge1xuICB9XG59XG5cbmNvbGxpc2lvbkNoZWNrKHBsYXRmb3JtKXtcbiAgY29uc3QgdmVjdG9yWCA9ICh0aGlzLnggKyAodGhpcy53aWR0aCkpIC0gKHBsYXRmb3JtLnggKyAocGxhdGZvcm0ud2lkdGggLyAyKSk7XG4gIGNvbnN0IHZlY3RvclkgPSAodGhpcy55ICsgKHRoaXMuaGVpZ2h0KSkgLSAocGxhdGZvcm0ueSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKSk7XG5cbiAgY29uc3QgY2VudGVyV2lkdGhzID0gKHRoaXMud2lkdGgvMikgKyAocGxhdGZvcm0ud2lkdGggLyAyKTtcbiAgY29uc3QgY2VudGVySGVpZ2h0cyA9ICh0aGlzLmhlaWdodCkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMik7XG5cblxuICBsZXQgY29sbGlzaW9uRGlyZWN0aW9uO1xuXG4gIGlmIChNYXRoLmFicyh2ZWN0b3JYKSA8IGNlbnRlcldpZHRocyAmJiBNYXRoLmFicyh2ZWN0b3JZKSA8IGNlbnRlckhlaWdodHMpIFxuICB7XG5cbiAgICBpZiAocGxhdGZvcm0ubmFtZSkgcmV0dXJuIHBsYXRmb3JtLm5hbWU7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNlbnRlcldpZHRocyAtIE1hdGguYWJzKHZlY3RvclgpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBjZW50ZXJIZWlnaHRzIC0gTWF0aC5hYnModmVjdG9yWSk7XG5cbiAgICBpZiAob2Zmc2V0WCA8IG9mZnNldFkpXG4gICAgICAgIGlmICh2ZWN0b3JYID4gMCl7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgICAgICB0aGlzLnggKz0gb2Zmc2V0WDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgICAgICB0aGlzLnggLT0gb2Zmc2V0WDtcbiAgICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHZlY3RvclkgPiAwKXtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJ0b3BcIjtcbiAgICAgICAgdGhpcy55ICs9IG9mZnNldFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImJvdHRvbVwiO1xuICAgICAgICB0aGlzLnkgLT0gb2Zmc2V0WVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29sbGlzaW9uRGlyZWN0aW9uO1xufVxuXG5zY3JvbGxSaWdodCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc2Nyb2xsTGVmdCgpe1xuICB0aGlzLmxldmVsLnJvb20gLT0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuZW50ZXIoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVZpZXc7IiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcbmNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vZ2FtZV92aWV3XCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAvLyBiYWNrZ3JvdW5kQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhczJcIik7XG4gIC8vIGJhY2tncm91bmRDdHggPSBiYWNrZ3JvdW5kQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiBcbiAgbGV0IGxldmVsID0gbmV3IExldmVsKDEsIGN0eCwgY2FudmFzKTtcbiAgbmV3IEdhbWVWaWV3KGxldmVsLCBjdHgsIGNhbnZhcyk7XG59KTsiLCJjb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL2dhbWVfdmlld1wiKTtcblxuXG5jbGFzcyBMZXZlbCB7XG4gIGNvbnN0cnVjdG9yKG51bWJlciwgY3R4LCBjYW52YXMpIHtcbiAgICB0aGlzLnJvb20gPSBudW1iZXI7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLnBsYXRmb3JtV2lkdGggPSAxNTA7XG4gICAgdGhpcy5wbGF0Zm9ybUhlaWdodCA9IDIwO1xuICAgIHRoaXMuZm91bmRLZXkgPSBmYWxzZTtcbiAgICB0aGlzLmtleSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5LnNyYyA9IFwiaW1hZ2VzL0tleUljb25zLnBuZ1wiXG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImltYWdlcy9sZXZlbCR7dGhpcy5yb29tfS5wbmdcImBcbiAgICBwbGF0Zm9ybXMgPSB0aGlzLnBsYXRmb3JtcztcbiAgICBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBwbGF0Zm9ybVdpZHRoID0gdGhpcy5wbGF0Zm9ybVdpZHRoO1xuICAgIHBsYXRmb3JtSGVpZ2h0ID0gdGhpcy5wbGF0Zm9ybUhlaWdodFxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi0yMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjExMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDgwMCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM4MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgIG5hbWU6IFwia2V5XCIsXG4gICAgICAgIHg6IDYwMCxcbiAgICAgICAgeTogMjcwLFxuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGhlaWdodDogMzBcbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMTAwcHhcIjtcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA1KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjQwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3N0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfVxuICB9XG5cbiAgZHJhd1RleHRCb3goeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKXtcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLmJsLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3X3BsYXRmb3JtcygpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBsYXRmb3Jtc1tpXS54LCBwbGF0Zm9ybXNbaV0ueSwgcGxhdGZvcm1zW2ldLndpZHRoLCBwbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBkcmF3X2tleSgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleSwgMCwgMCwgMzIsIDMyLCA2MDAsIDI3MCwgMzAsIDMwKTtcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKHgsIHkpe1xuICAgIGlmICh0aGlzLnJvb20gPT09IDEpe1xuICAgICAgaWYgKHggPCA0MDAgJiYgeCA+IDIwMCl7XG4gICAgICB0aGlzLmRyYXdUZXh0Qm94KDkwLCAyODAsIDEwMCwgNTAsIDUpXG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgNnB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnR29vZCBsdWNrIEhlbnJ5LCBJIGtub3cnLCA5MywgMzAwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCd5b3UgY2FuIGRvIGl0IScsIDkzLCAzMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgfVxuXG4gICAgICBpZiAoeCA8IDgwMCAmJiB4ID4gNTAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDZwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGFyZW4ndCBnb2luZyB0byBsYXN0XCIsIDQxMCwgMjgwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJzUgbWludXRlcyBvdXQgdGhlcmUuJywgNDEwLCAyOTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDQwMCwgMjYwLCAxMDAsIDUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kS2V5ID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5kcmF3X2tleSgpO1xuICAgICAgICB9XG4gICAgfVxufVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=