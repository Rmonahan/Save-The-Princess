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
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Level = __webpack_require__(/*! ./level */ "./src/level.js");

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
    this.superMode = false;
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
      this.oldFrame = 0;
      this.frameCount = 6;
      this.x = 220;
      this.y = 310;
      this.srcX = 0;
      this.srcY = this.trackRight * this.height;
      this.speedX = 15;
      this.speedY = 15;
      this.character.src = "dist/images/adventurer-Sheet.png";
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

      if (this.superMode === false) {
        setTimeout(function () {
          window.requestAnimationFrame(_this.mainLoop.bind(_this));
        }, 100);
      } else {
        setTimeout(function () {
          window.requestAnimationFrame(_this.mainLoop.bind(_this));
        }, 40);
      }
    }
  }, {
    key: "updateFrame",
    value: function updateFrame(width, height, frameCount, trackLeft, trackRight) {
      this.oldFrame = this.oldFrame + 1;
      this.curFrame = (this.curFrame + 1) % frameCount;
      if (this.curFrame === 1) this.stillFrame = 1;
      if (this.curFrame === 2) this.stillFrame = 2;
      if (this.curFrame === 3) this.stillFrame = 3;
      if (this.curFrame === 4) this.stillFrame = 3;
      if (this.curFrame === 5) this.stillFrame = 2;
      if (this.curFrame === 6) this.stillFrame = 1;
      this.srcX = this.curFrame * width + width;
      this.ctx.clearRect(this.x, this.y, width * 2, height * 2);
      this.level.updateScene(this.x, this.y, this.oldFrame);
      this.inAir = true;

      if (this.left && this.level.disabled === false && (this.x > -20 || this.level.room != 1 && this.level.room != 7)) {
        this.speedX = 15;
        this.x -= this.speedX;
      }

      if (this.right && this.level.disabled === false) {
        this.speedX = 15;
        this.x += this.speedX;
      }

      if (this.inAir === true) {
        this.speedY = 15;

        if (310 - this.y > this.speedY || this.level.room != 1 && this.level.room != 7 && this.level.room != 25 && this.level.room != 0 && this.superMode === false) {
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

      if (this.x > 670) {
        this.scrollRight();
        this.x = -20;
      }

      if (this.x < -20 && this.level.room != 1 && this.level.room != 7) {
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
          this.ctx.clearRect(600, 240, 30, 30);
          this.level.keyCount += 1;
          this.level.items = [];
        }

        if (collisionName === "key2") {
          this.level.items = [];
          this.ctx.clearRect(385, 250, 30, 30);
          this.level.keyCount += 1;
          this.level.foundKey2 = true;
        }

        if (collisionName === "key3") {
          this.level.items = [];
          this.ctx.clearRect(385, 250, 30, 30);
          this.level.keyCount += 1;
          this.level.foundKey3 = true;
        }

        if (collisionName === "key4") {
          this.level.items = [];
          this.ctx.clearRect(225, 340, 30, 30);
          this.level.keyCount += 1;
          this.level.foundKey4 = true;
        }
      }

      if (this.y > 500) {
        this.level.lives -= 1;
        this.y = 10;
        this.x = 20;
        this.reset();
      }

      if (this.level.lives === 0) {
        this.gameOver();
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

      if (e.key === "w" && e.repeat === false && (this.y === 310 || this.speedY === 0) && this.y <= 310) {
        this.jump();
      }

      if (e.key === "r" && this.level.room === 6 && this.x > 260 && this.x < 350 && e.repeat === false && this.foundKeys() === true) {
        this.enter();
      }

      if ((e.key === " " || e.key === "space") && this.level.room === 25 && e.repeat === false) {
        this.restart();
      }

      if ((e.key === " " || e.key === "space") && this.level.room === 0 && e.repeat === false) {
        this.start();
      }

      if (e.key === "p" && this.level.room === 1 && e.repeat === false) {
        this.superMode = !this.superMode;
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
    key: "foundKeys",
    value: function foundKeys() {
      return this.level.foundKey1 && this.level.foundKey2 && this.level.foundKey3 && this.level.foundKey4;
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
      if (this.level.room !== 25 && this.level.room !== 0) this.level.room += 1;
      this.clear();
      this.level.addScene();
    }
  }, {
    key: "scrollLeft",
    value: function scrollLeft() {
      if (this.level.room !== 25 && (this.level.room !== 0 || this.level.room !== 7)) this.level.room -= 1;
      this.clear();
      this.level.addScene();
    }
  }, {
    key: "enter",
    value: function enter() {
      this.level.room += 1;
      this.clear();
      this.level.addScene();
    }
  }, {
    key: "start",
    value: function start() {
      this.level.room += 1;
      this.clear();
      this.level.addScene();
      this.x = 220;
      this.y = 310;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.clear();
      this.level.addScene();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.clear();
      this.level.room = 25;
      this.level.addScene();
    }
  }, {
    key: "restart",
    value: function restart() {
      var newLevel = new Level(0, this.ctx, this.canvas);
      this.level = newLevel;
      this.clear();
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

  var level = new Level(7, ctx, canvas);
  new GameView(level, ctx, canvas);
});

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    this.platformPic = new Image();
    this.platformPic.src = "dist/images/platform.png";
    this.platformWidth = 150;
    this.platformHeight = 20;
    this.heart = new Image();
    this.heart.src = "dist/images/heart.png";
    this.lives = 3;
    this.disabled = false;
    this.foundKey1 = false;
    this.foundKey2 = false;
    this.foundKey3 = false;
    this.foundKey4 = false;
    this.firstScene = true;
    this.key1 = new Image();
    this.key1.src = "dist/images/KeyIcons.png";
    this.key2 = new Image();
    this.key2.src = "dist/images/KeyIcons.png";
    this.key3 = new Image();
    this.key3.src = "dist/images/KeyIcons.png";
    this.key4 = new Image();
    this.key4.src = "dist/images/KeyIcons.png";
    this.keys = new Image();
    this.keys.src = "dist/images/KeyIcons.png";
    this.keyCount = 0;
    this.greenKnight = new Image();
    this.greenKnight.src = "dist/images/MitheralKnight.png";
    this.princess = new Image();
    this.princess.src = "dist/images/princess.png";
    this.goldKnight = new Image();
    this.goldKnight.src = "dist/images/GoldKnight.png";
    this.goldKnightX = 700;
  }

  _createClass(Level, [{
    key: "addScene",
    value: function addScene() {
      this.canvas.style.backgroundImage = "url(\"dist/images/level".concat(this.room, ".png\"");
      platforms = this.platforms;
      canvas = this.canvas;
      platformWidth = this.platformWidth;
      platformHeight = this.platformHeight;

      if (this.room === 0) {
        this.ctx.font = 'bold 10pt Calibri';
        this.ctx.fillStyle = "white";
        this.ctx.fillText("You control Henry who is a coal miner from the kingdom of Tromide.", 30, 50);
        this.ctx.fillText("He has always kept a low profile, determined to do his job and then enjoy the peace and quiet of his home.", 30, 70);
        this.ctx.fillText("He never made an effort to be known or make friends. No one knew him personally and he liked it that way.", 30, 90);
        this.ctx.fillText("The princess has been kidnapped and all efforts to save her have failed. Although Henry has heard of the situation,", 30, 110);
        this.ctx.fillText("it wasn't something he was interested in getting involved in. As he was walking to work he saw a flier offering", 30, 130);
        this.ctx.fillText("a major reward to anyone that can help save the princess. The one thing Henry does care for is money.", 30, 150);
        this.ctx.fillText("He needs to find the 4 keys to get into the enemy castle and save the princess. This is where his story begins. ", 30, 170);
        this.ctx.font = '16pt Calibri';
        this.ctx.fillStyle = "white";
        this.ctx.fillText('Press Spacebar to start.', 230, 215);
      }

      if (this.room === 1) {
        this.canvas.style.backgroundPositionY = "-20px";
        this.canvas.style.backgroundPositionX = "-100px";
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
          x: canvas.width - 390,
          y: canvas.height - 120,
          width: platformWidth,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 390,
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
        platforms.push({
          x: 0,
          y: this.canvas.height - 30,
          width: platformWidth + 200,
          height: platformHeight + 20
        });
        platforms.push({
          x: canvas.width - 170,
          y: this.canvas.height - 40,
          width: platformWidth + 20,
          height: platformHeight + 30
        });

        if (this.foundKey1 === false) {
          this.items.push({
            name: "key1",
            x: 600,
            y: 240,
            width: 30,
            height: 30
          });
        }
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
        if (this.foundKey2 === false) this.items.push({
          name: "key2",
          x: 385,
          y: 250,
          width: 30,
          height: 30
        });
      } else if (this.room === 4) {
        this.canvas.style.backgroundPositionY = "0px";
        this.canvas.style.backgroundPositionX = "0px";
        platforms.push({
          x: canvas.width - 660,
          y: 140,
          width: platformWidth - 100,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 700,
          y: this.canvas.height - 170,
          width: platformWidth,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 315,
          y: canvas.height - 120,
          width: platformWidth - 120,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 200,
          y: canvas.height - 170,
          width: platformWidth + 100,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 650,
          y: canvas.height - 440,
          width: platformWidth - 50,
          height: platformHeight
        });
        if (this.foundKey3 === false) this.items.push({
          name: "key3",
          x: 385,
          y: 250,
          width: 30,
          height: 30
        });
      } else if (this.room === 5) {
        this.canvas.style.backgroundPositionY = "0px";
        this.canvas.style.backgroundPositionX = "0px";
        platforms.push({
          x: canvas.width - 600,
          y: 75,
          width: platformWidth,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 700,
          y: this.canvas.height - 170,
          width: platformWidth,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 550,
          y: this.canvas.height - 240,
          width: platformWidth - 130,
          height: platformHeight + 70
        });
        platforms.push({
          x: canvas.width - 475,
          y: canvas.height - 30,
          width: platformWidth - 120,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 530,
          y: canvas.height - 240,
          width: platformWidth - 20,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 140,
          y: canvas.height - 170,
          width: platformWidth + 100,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 300,
          y: canvas.height - 550,
          width: platformWidth,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 700,
          y: canvas.height - 30,
          width: platformWidth - 50,
          height: platformHeight
        });

        if (this.foundKey4 === false) {
          this.items.push({
            name: "key4",
            x: 225,
            y: 340,
            width: 30,
            height: 30
          });
        }
      } else if (this.room === 6) {
        this.canvas.style.backgroundPositionY = "-50px";
        this.canvas.style.backgroundPositionX = "100px";
        platforms.push({
          x: canvas.width - 600,
          y: canvas.height - 22,
          width: platformWidth + 200,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 700,
          y: canvas.height - 170,
          width: platformWidth - 70,
          height: platformHeight
        });
        platforms.push({
          x: canvas.width - 670,
          y: canvas.height - 80,
          width: platformWidth - 70,
          height: platformHeight
        });
      } else if (this.room === 7) {
        this.canvas.style.backgroundPositionY = "0px";
        this.canvas.style.backgroundPositionX = "0";
      } else if (this.room === 25) {
        this.canvas.style.backgroundPositionY = "0px";
        this.canvas.style.backgroundPositionX = "-100px";
        this.ctx.font = 'bold 20pt Calibri';
        this.ctx.fillStyle = "white";
        this.ctx.fillText("You failed to save the Princess.", 170, 100);
        this.ctx.fillText('Press Spacebar to try again.', 180, 150);
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
        // this.ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
        this.ctx.drawImage(this.platformPic, 0, 0, 96, 96, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
      }
    }
  }, {
    key: "drawHeart",
    value: function drawHeart() {
      this.ctx.drawImage(this.heart, 0, 0, 125, 125, 650, 10, 30, 30);
      this.ctx.font = '16pt Times New Roman';
      this.ctx.strokeStyle = "white";
      this.ctx.strokeText(this.lives, 632, 32);
    }
  }, {
    key: "drawKeyCount",
    value: function drawKeyCount() {
      this.ctx.clearRect(560, 10, 200, 50);
      this.ctx.drawImage(this.keys, 32, 0, 32, 32, 590, 12, 30, 30);
      this.ctx.font = '16pt Times New Roman';
      this.ctx.strokeStyle = "white";
      this.ctx.strokeText(this.keyCount, 570, 32);
    }
  }, {
    key: "draw_key1",
    value: function draw_key1() {
      this.ctx.drawImage(this.key1, 0, 0, 32, 32, 600, 240, 30, 30);
    }
  }, {
    key: "draw_key2",
    value: function draw_key2() {
      this.ctx.drawImage(this.key2, 32, 0, 32, 32, 385, 250, 30, 30);
    }
  }, {
    key: "draw_key3",
    value: function draw_key3() {
      this.ctx.drawImage(this.key3, 64, 0, 32, 32, 385, 250, 30, 30);
    }
  }, {
    key: "draw_key4",
    value: function draw_key4() {
      this.ctx.drawImage(this.key4, 96, 0, 32, 32, 225, 340, 30, 30);
    }
  }, {
    key: "updateScene",
    value: function updateScene(x, y, currentFrame) {
      var col;

      if (this.room != 0 && this.room != 25) {
        this.drawKeyCount();
        this.drawHeart();
      }

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
      } else if (this.room === 4) {
        this.draw_platforms();

        if (this.foundKey3 === false) {
          this.draw_key3();
        } else {
          platforms.push({
            x: canvas.width - 500,
            y: this.canvas.height - 200,
            width: platformWidth,
            height: platformHeight
          });
        }

        if (this.foundKey4 === true) {
          platforms.push({
            x: canvas.width - 300,
            y: canvas.height - 30,
            width: platformWidth + 300,
            height: platformHeight
          });
        }
      } else if (this.room === 5) {
        this.draw_platforms();

        if (this.foundKey4 === false) {
          this.draw_key4();
        }
      } else if (this.room === 6) {
        this.draw_platforms();

        if (this.foundKey1 === false || this.foundKey2 === false || this.foundKey3 === false || this.foundKey4 === false) {
          col = currentFrame % 10;
          this.ctx.clearRect(320, 310, 65, 65);
          this.ctx.scale(-1, 1);
          this.ctx.drawImage(this.greenKnight, 32 * col, 0, 32, 32, -385, 310, 65, 65);
          this.ctx.scale(-1, 1);
          this.drawTextBox(220, 270, 120, 50, 5);
          this.ctx.font = 'bold 8pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("You must have all 4", 230, 290);
          this.ctx.fillText('keys to enter the castle.', 230, 300);
        } else {
          this.ctx.clearRect(220, 270, 120, 50);

          if (x > 260 && x < 350) {
            this.drawTextBox(260, 270, 150, 25, 5);
            this.ctx.font = 'bold 8pt Calibri';
            this.ctx.fillStyle = "black";
            this.ctx.fillText("Press R to enter the castle.", 270, 290);
          } else {
            this.ctx.clearRect(260, 270, 150, 25);
          }
        }
      } else if (this.room === 7) {
        col = 7;

        if (currentFrame % 8 === 0) {
          col = 8;
        }

        row = 2;
        var princessX = 500;
        this.ctx.clearRect(this.goldKnightX, 300, 85, 85);
        this.ctx.clearRect(princessX, 300, 85, 85);
        this.ctx.drawImage(this.princess, 81 * col, row * 82, 81, 82, princessX, 300, 85, 85);

        if (x < 250 && this.firstScene === true) {
          this.drawTextBox(390, 290, 150, 40, 5);
          this.ctx.font = 'bold 8pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Please save me!", 400, 310);
          this.ctx.fillText("The evil knight is coming!", 400, 320);
        } else {
          this.ctx.clearRect(390, 290, 150, 40);
        }

        if (x > 260 && this.firstScene === true) {
          col = currentFrame % 10;

          if (this.goldKnightX > 350) {
            this.goldKnightX -= 5;
            row = 2;
          } else {
            row = 1;
          }

          this.disabled = true;
          this.ctx.scale(-1, 1);
          this.ctx.drawImage(this.goldKnight, 32 * col, row * 32, 32, 32, -this.goldKnightX - 85, 300, 85, 85);
          this.ctx.scale(-1, 1);
        }

        if (this.goldKnightX === 350) {
          this.drawTextBox(240, 230, 150, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Oh man thank god you", 250, 250);
          this.ctx.fillText("are here. Everyone has", 250, 260);
          this.ctx.fillText("it all wrong.", 260, 270); // this.ctx.drawImage(this.princess, 81 * col, row * 82, 81, 82, princessX, 300, 85, 85);
        }
      } else if (this.room === 25) {
        this.drawTextBox(400, 260, 100, 50, 5);
        this.ctx.font = 'bold 20pt Calibri';
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Game Over", 410, 280);
        this.ctx.fillText('Press Spacebar to try again.', 410, 290);
      }
    }
  }]);

  return Level;
}();

module.exports = Level;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwic2Nyb2xsUmlnaHQiLCJzY3JvbGxMZWZ0IiwiaSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkNoZWNrIiwiY29sbGlzaW9uTmFtZSIsImZvdW5kS2V5MSIsImtleUNvdW50IiwiZm91bmRLZXkyIiwiZm91bmRLZXkzIiwiZm91bmRLZXk0IiwibGl2ZXMiLCJyZXNldCIsImdhbWVPdmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZm91bmRLZXlzIiwiZW50ZXIiLCJyZXN0YXJ0Iiwic3RhcnQiLCJwbGF0Zm9ybSIsInZlY3RvclgiLCJ2ZWN0b3JZIiwiY2VudGVyV2lkdGhzIiwiY2VudGVySGVpZ2h0cyIsImNvbGxpc2lvbkRpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJuYW1lIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjbGVhciIsIm5ld0xldmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIm51bWJlciIsInBsYXRmb3JtUGljIiwicGxhdGZvcm1XaWR0aCIsInBsYXRmb3JtSGVpZ2h0IiwiaGVhcnQiLCJmaXJzdFNjZW5lIiwia2V5MSIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleXMiLCJncmVlbktuaWdodCIsInByaW5jZXNzIiwiZ29sZEtuaWdodCIsImdvbGRLbmlnaHRYIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsInB1c2giLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiYmwiLCJjbG9zZVBhdGgiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VUZXh0IiwiY3VycmVudEZyYW1lIiwiY29sIiwiZHJhd0tleUNvdW50IiwiZHJhd0hlYXJ0IiwiZHJhd1RleHRCb3giLCJkcmF3X3BsYXRmb3JtcyIsImRyYXdfa2V5MSIsImRyYXdfa2V5MiIsImRyYXdfa2V5MyIsImRyYXdfa2V5NCIsInJvdyIsInByaW5jZXNzWCJdLCJtYXBwaW5ncyI6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LEdBQWdCLG1CQUFoQjtBQUNBLGFBQUtwSCxHQUFMLENBQVNxSCxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsYUFBS3JILEdBQUwsQ0FBU3NILFFBQVQsQ0FBa0IsV0FBbEIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEM7QUFDQSxhQUFLdEgsR0FBTCxDQUFTc0gsUUFBVCxDQUFrQiw4QkFBbEIsRUFBa0QsR0FBbEQsRUFBdUQsR0FBdkQ7QUFDRDtBQUNKOzs7Ozs7QUFHRHZCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBHLEtBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcblxuY2xhc3MgR2FtZVZpZXcge1xuICBjb25zdHJ1Y3RvcihsZXZlbCwgY3R4LCBjYW52YXMsIGJhY2tncm91bmRDdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMuYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDdHg7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMuYmluZEtleUhhbmRsZXJzKCk7XG4gICAgdGhpcy5mbGlwUGxheWVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuanVtcEhlaWdodCA9IDA7XG4gICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy5zcmNYID0gMDtcbiAgICB0aGlzLnNyY1kgPSAwO1xuICAgIHRoaXMueCA9IDMwMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcGVlZCA9IDEyO1xuICAgIHRoaXMuc3VwZXJNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgIHRoaXMubGV2ZWwucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlU2NlbmUoKXtcbiAgICB0aGlzLmRyYXdNYWluQ2hhcmFjdGVyKCk7XG4gICAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB9XG5cbiAgZHJhd01haW5DaGFyYWN0ZXIoKSB7XG4gICAgY29uc3Qgc3ByaXRlV2lkdGggPSAzNTA7XG4gICAgY29uc3Qgc3ByaXRlSGVpZ2h0ID0gNDA3O1xuICAgIGNvbnN0IHJvd3MgPSAxMTtcbiAgICBjb25zdCBjb2xzID0gNztcbiAgICB0aGlzLnRyYWNrUmlnaHQgPSAxO1xuICAgIHRoaXMudHJhY2tMZWZ0ID0gMTtcbiAgICB0aGlzLndpZHRoID0gc3ByaXRlV2lkdGggLyBjb2xzO1xuICAgIHRoaXMuaGVpZ2h0ID0gc3ByaXRlSGVpZ2h0IC8gcm93cztcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLm9sZEZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMueCA9IDIyMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcmNYPSAwO1xuICAgIHRoaXMuc3JjWT0gdGhpcy50cmFja1JpZ2h0ICogdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICB0aGlzLnNwZWVkWSA9IDE1O1xuICAgIHRoaXMuY2hhcmFjdGVyLnNyYyA9IFwiZGlzdC9pbWFnZXMvYWR2ZW50dXJlci1TaGVldC5wbmdcIjtcbiAgfVxuICBtYWluTG9vcCh0aW1lKXtcbiAgICB0aGlzLnVwZGF0ZUZyYW1lKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmZyYW1lQ291bnQsIHRoaXMudHJhY2tMZWZ0LCB0aGlzLnRyYWNrUmlnaHQpXG4gICAgaWYgKHRoaXMuZmFjaW5nTGVmdCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgKC10aGlzLnggLSAodGhpcy53aWR0aCAqIDIpKSwgdGhpcy55LCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTsgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCoyLCB0aGlzLmhlaWdodCoyKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN1cGVyTW9kZSA9PT0gZmFsc2Upe1xuICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgICAgfSwgMTAwKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICAgIH0sIDQwKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZyYW1lKHdpZHRoLCBoZWlnaHQsIGZyYW1lQ291bnQsIHRyYWNrTGVmdCwgdHJhY2tSaWdodCl7XG4gICAgdGhpcy5vbGRGcmFtZSA9IHRoaXMub2xkRnJhbWUgKyAxO1xuICAgIFxuICAgIHRoaXMuY3VyRnJhbWUgPSAodGhpcy5jdXJGcmFtZSArIDEpICUgZnJhbWVDb3VudDtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gMSkgdGhpcy5zdGlsbEZyYW1lID0gMTtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gMikgdGhpcy5zdGlsbEZyYW1lID0gMjtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gMykgdGhpcy5zdGlsbEZyYW1lID0gMztcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gNCkgdGhpcy5zdGlsbEZyYW1lID0gMztcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gNSkgdGhpcy5zdGlsbEZyYW1lID0gMjtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gNikgdGhpcy5zdGlsbEZyYW1lID0gMTtcbiAgICB0aGlzLnNyY1ggPSB0aGlzLmN1ckZyYW1lICogd2lkdGggKyB3aWR0aDtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoICogMiwgaGVpZ2h0ICogMik7XG4gICAgdGhpcy5sZXZlbC51cGRhdGVTY2VuZSh0aGlzLngsIHRoaXMueSwgdGhpcy5vbGRGcmFtZSk7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5sZWZ0ICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IGZhbHNlICYmICh0aGlzLnggPiAtMjAgfHwgKHRoaXMubGV2ZWwucm9vbSAhPTEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcpKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNwZWVkWSA9IDE1XG4gICAgICBpZiAoMzEwIC0gdGhpcy55ID4gdGhpcy5zcGVlZFkgfHwgKHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3ICYmIHRoaXMubGV2ZWwucm9vbSAhPSAyNSAmJiB0aGlzLmxldmVsLnJvb20gIT0gMCAmJiB0aGlzLnN1cGVyTW9kZSA9PT0gZmFsc2UpKXtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy55ICs9IDMxMCAtIHRoaXMueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5qdW1waW5nID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmp1bXBIZWlnaHQgKz0gMzBcbiAgICAgIHRoaXMueSAtPSAzMDtcbiAgICAgIGlmICh0aGlzLmp1bXBIZWlnaHQgPiAxMzApe1xuICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgIHRoaXMuanVtcEhlaWdodCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPiA2NzApeyBcbiAgICAgIHRoaXMuc2Nyb2xsUmlnaHQoKTtcbiAgICAgIHRoaXMueCA9IC0yMDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA8IC0yMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNykge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICB0aGlzLnggPSA2NDA7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbC5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5wbGF0Zm9ybXNbaV0pXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xuICAgICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubGV2ZWwuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgY29sbGlzaW9uTmFtZSA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5pdGVtc1tpXSlcbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTFcIil7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkxID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDYwMCwgMjQwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTJcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MiA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5M1wiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXk0XCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjI1LCAzNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueSA+IDUwMCApe1xuICAgICAgdGhpcy5sZXZlbC5saXZlcyAtPSAxO1xuICAgICAgdGhpcy55ID0gMTA7XG4gICAgICB0aGlzLnggPSAyMDtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZXZlbC5saXZlcyA9PT0gMCl7XG4gICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgfVxuXG5cblxuICAgIGlmICh0aGlzLnkgPT09IDMxMCkgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKSB0aGlzLnNyY1kgPSBoZWlnaHQgKiAyO1xuICAgIGVsc2UgaWYgKHRoaXMubGVmdCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tMZWZ0ICogaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMucmlnaHQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrUmlnaHQgKiBoZWlnaHQ7XG4gICAgZWxzZSB7dGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDsgdGhpcy5zcmNZID0gMDt9XG4gIH1cbiAgXG4gIG1vdmVMZWZ0KCl7XG4gICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IHRydWU7XG4gIH1cblxuICBtb3ZlUmlnaHQoKXtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gIH1cblxuICBqdW1wKCl7XG4gICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gIH1cblxuICBiaW5kS2V5SGFuZGxlcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiKSB7XG4gICAgdGhpcy5tb3ZlTGVmdCgpO1xuICB9XG4gIGlmIChlLmtleSA9PT0gXCJ3XCIgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmICh0aGlzLnkgPT09IDMxMCB8fCB0aGlzLnNwZWVkWSA9PT0gMCkgJiYgdGhpcy55IDw9IDMxMCkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcInJcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDYgJiYgdGhpcy54ID4gMjYwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5mb3VuZEtleXMoKSA9PT0gdHJ1ZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG5cbiAgaWYgKChlLmtleSA9PT0gXCIgXCIgfHwgZS5rZXkgPT09IFwic3BhY2VcIikgJiYgdGhpcy5sZXZlbC5yb29tID09PSAyNSAmJiBlLnJlcGVhdCA9PT0gZmFsc2Upe1xuICAgIHRoaXMucmVzdGFydCgpO1xuICB9XG5cbiAgaWYgKChlLmtleSA9PT0gXCIgXCIgfHwgZS5rZXkgPT09IFwic3BhY2VcIikgJiYgdGhpcy5sZXZlbC5yb29tID09PSAwICYmIGUucmVwZWF0ID09PSBmYWxzZSkge1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwicFwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDEgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnN1cGVyTW9kZSA9ICF0aGlzLnN1cGVyTW9kZTtcbiAgICB9XG5cbn1cblxuIGtleVVwSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIpIHtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiKSB7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cblxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJ3XCIpIHtcbiAgfVxufVxuXG5mb3VuZEtleXMoKXtcbiAgcmV0dXJuIHRoaXMubGV2ZWwuZm91bmRLZXkxICYmIHRoaXMubGV2ZWwuZm91bmRLZXkyICYmIHRoaXMubGV2ZWwuZm91bmRLZXkzICYmIHRoaXMubGV2ZWwuZm91bmRLZXk0XG59XG5cbmNvbGxpc2lvbkNoZWNrKHBsYXRmb3JtKXtcbiAgY29uc3QgdmVjdG9yWCA9ICh0aGlzLnggKyAodGhpcy53aWR0aCkpIC0gKHBsYXRmb3JtLnggKyAocGxhdGZvcm0ud2lkdGggLyAyKSk7XG4gIGNvbnN0IHZlY3RvclkgPSAodGhpcy55ICsgKHRoaXMuaGVpZ2h0KSkgLSAocGxhdGZvcm0ueSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKSk7XG5cbiAgY29uc3QgY2VudGVyV2lkdGhzID0gKHRoaXMud2lkdGgvMikgKyAocGxhdGZvcm0ud2lkdGggLyAyKTtcbiAgY29uc3QgY2VudGVySGVpZ2h0cyA9ICh0aGlzLmhlaWdodCkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMik7XG5cblxuICBsZXQgY29sbGlzaW9uRGlyZWN0aW9uO1xuXG4gIGlmIChNYXRoLmFicyh2ZWN0b3JYKSA8IGNlbnRlcldpZHRocyAmJiBNYXRoLmFicyh2ZWN0b3JZKSA8IGNlbnRlckhlaWdodHMpIFxuICB7XG5cbiAgICBpZiAocGxhdGZvcm0ubmFtZSkgcmV0dXJuIHBsYXRmb3JtLm5hbWU7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNlbnRlcldpZHRocyAtIE1hdGguYWJzKHZlY3RvclgpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBjZW50ZXJIZWlnaHRzIC0gTWF0aC5hYnModmVjdG9yWSk7XG5cbiAgICBpZiAob2Zmc2V0WCA8IG9mZnNldFkpXG4gICAgICAgIGlmICh2ZWN0b3JYID4gMCl7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgICAgICB0aGlzLnggKz0gb2Zmc2V0WDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgICAgICB0aGlzLnggLT0gb2Zmc2V0WDtcbiAgICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHZlY3RvclkgPiAwKXtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJ0b3BcIjtcbiAgICAgICAgdGhpcy55ICs9IG9mZnNldFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImJvdHRvbVwiO1xuICAgICAgICB0aGlzLnkgLT0gb2Zmc2V0WVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29sbGlzaW9uRGlyZWN0aW9uO1xufVxuXG5zY3JvbGxSaWdodCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiAodGhpcy5sZXZlbC5yb29tICE9PSAwKSkgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnNjcm9sbExlZnQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMCB8fCB0aGlzLmxldmVsLnJvb20gIT09IDcpKSB0aGlzLmxldmVsLnJvb20gLT0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuZW50ZXIoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnN0YXJ0KCl7XG4gIHRoaXMubGV2ZWwucm9vbSArPSAxO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbiAgdGhpcy54ID0gMjIwO1xuICB0aGlzLnkgPSAzMTA7XG59XG5cbnJlc2V0KCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuZ2FtZU92ZXIoKXtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLnJvb20gPSAyNVxuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnJlc3RhcnQoKXtcbiAgbGV0IG5ld0xldmVsID0gbmV3IExldmVsKDAsIHRoaXMuY3R4LCB0aGlzLmNhbnZhcyk7XG4gIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9nYW1lX3ZpZXdcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIGJhY2tncm91bmRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzMlwiKTtcbiAgLy8gYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuIFxuICBsZXQgbGV2ZWwgPSBuZXcgTGV2ZWwoNywgY3R4LCBjYW52YXMpO1xuICBuZXcgR2FtZVZpZXcobGV2ZWwsIGN0eCwgY2FudmFzKTtcbn0pOyIsImNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCBjdHgsIGNhbnZhcykge1xuICAgIHRoaXMucm9vbSA9IG51bWJlcjtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMucGxhdGZvcm1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBsYXRmb3JtUGljLnNyYyA9IFwiZGlzdC9pbWFnZXMvcGxhdGZvcm0ucG5nXCI7XG4gICAgdGhpcy5wbGF0Zm9ybVdpZHRoID0gMTUwO1xuICAgIHRoaXMucGxhdGZvcm1IZWlnaHQgPSAyMDtcbiAgICB0aGlzLmhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5oZWFydC5zcmMgPSBcImRpc3QvaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MSA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkyID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTMgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5NCA9IGZhbHNlO1xuICAgIHRoaXMuZmlyc3RTY2VuZSA9IHRydWU7XG4gICAgdGhpcy5rZXkxID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkxLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkyLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXk0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXk0LnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXlzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlDb3VudCA9IDA7XG4gICAgdGhpcy5ncmVlbktuaWdodCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZ3JlZW5LbmlnaHQuc3JjID0gXCJkaXN0L2ltYWdlcy9NaXRoZXJhbEtuaWdodC5wbmdcIjtcbiAgICB0aGlzLnByaW5jZXNzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmluY2Vzcy5zcmMgPSBcImRpc3QvaW1hZ2VzL3ByaW5jZXNzLnBuZ1wiO1xuICAgIHRoaXMuZ29sZEtuaWdodCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZ29sZEtuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL0dvbGRLbmlnaHQucG5nXCJcbiAgICB0aGlzLmdvbGRLbmlnaHRYID0gNzAwO1xuICB9XG4gIGFkZFNjZW5lKCkge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCJkaXN0L2ltYWdlcy9sZXZlbCR7dGhpcy5yb29tfS5wbmdcImBcbiAgICBwbGF0Zm9ybXMgPSB0aGlzLnBsYXRmb3JtcztcbiAgICBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBwbGF0Zm9ybVdpZHRoID0gdGhpcy5wbGF0Zm9ybVdpZHRoO1xuICAgIHBsYXRmb3JtSGVpZ2h0ID0gdGhpcy5wbGF0Zm9ybUhlaWdodFxuICAgIGlmICh0aGlzLnJvb20gPT09IDApIHtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBjb250cm9sIEhlbnJ5IHdobyBpcyBhIGNvYWwgbWluZXIgZnJvbSB0aGUga2luZ2RvbSBvZiBUcm9taWRlLlwiLCAzMCwgNTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBoYXMgYWx3YXlzIGtlcHQgYSBsb3cgcHJvZmlsZSwgZGV0ZXJtaW5lZCB0byBkbyBoaXMgam9iIGFuZCB0aGVuIGVuam95IHRoZSBwZWFjZSBhbmQgcXVpZXQgb2YgaGlzIGhvbWUuXCIsIDMwLCA3MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5ldmVyIG1hZGUgYW4gZWZmb3J0IHRvIGJlIGtub3duIG9yIG1ha2UgZnJpZW5kcy4gTm8gb25lIGtuZXcgaGltIHBlcnNvbmFsbHkgYW5kIGhlIGxpa2VkIGl0IHRoYXQgd2F5LlwiLCAzMCwgOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUaGUgcHJpbmNlc3MgaGFzIGJlZW4ga2lkbmFwcGVkIGFuZCBhbGwgZWZmb3J0cyB0byBzYXZlIGhlciBoYXZlIGZhaWxlZC4gQWx0aG91Z2ggSGVucnkgaGFzIGhlYXJkIG9mIHRoZSBzaXR1YXRpb24sXCIsIDMwLCAxMTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJpdCB3YXNuJ3Qgc29tZXRoaW5nIGhlIHdhcyBpbnRlcmVzdGVkIGluIGdldHRpbmcgaW52b2x2ZWQgaW4uIEFzIGhlIHdhcyB3YWxraW5nIHRvIHdvcmsgaGUgc2F3IGEgZmxpZXIgb2ZmZXJpbmdcIiwgMzAsIDEzMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcImEgbWFqb3IgcmV3YXJkIHRvIGFueW9uZSB0aGF0IGNhbiBoZWxwIHNhdmUgdGhlIHByaW5jZXNzLiBUaGUgb25lIHRoaW5nIEhlbnJ5IGRvZXMgY2FyZSBmb3IgaXMgbW9uZXkuXCIsIDMwLCAxNTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBuZWVkcyB0byBmaW5kIHRoZSA0IGtleXMgdG8gZ2V0IGludG8gdGhlIGVuZW15IGNhc3RsZSBhbmQgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoaXMgaXMgd2hlcmUgaGlzIHN0b3J5IGJlZ2lucy4gXCIsIDMwLCAxNzApO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgU3BhY2ViYXIgdG8gc3RhcnQuJywgMjMwLCAyMTUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yb29tID09PSAxKSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItMjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMTEwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgODAwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAyMCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE3MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAzMCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkxXCIsXG4gICAgICAgICAgeDogNjAwLFxuICAgICAgICAgIHk6IDI0MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDEwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM4MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI2MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkyXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NjAsXG4gICAgICAgIHk6IDE0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMxNSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0NDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkzXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDYwMCxcbiAgICAgICAgeTogNzUsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1NTAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA3MCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA0NzUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTMwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE0MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNTUwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA1MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTRcIixcbiAgICAgICAgICB4OiAyMjUsXG4gICAgICAgICAgeTogMzQwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNikge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjIsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDcwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY3MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDcwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGZhaWxlZCB0byBzYXZlIHRoZSBQcmluY2Vzcy5cIiwgMTcwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFNwYWNlYmFyIHRvIHRyeSBhZ2Fpbi4nLCAxODAsIDE1MCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1RleHRCb3goeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKXtcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLmJsLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3X3BsYXRmb3JtcygpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KHBsYXRmb3Jtc1tpXS54LCBwbGF0Zm9ybXNbaV0ueSwgcGxhdGZvcm1zW2ldLndpZHRoLCBwbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBsYXRmb3JtUGljLCAwLCAwLCA5NiwgOTYsIHBsYXRmb3Jtc1tpXS54LCBwbGF0Zm9ybXNbaV0ueSwgcGxhdGZvcm1zW2ldLndpZHRoLCBwbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBkcmF3SGVhcnQoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5oZWFydCwgMCwgMCwgMTI1LCAxMjUsIDY1MCwgMTAsIDMwLCAzMClcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5saXZlcywgNjMyLCAzMik7XG4gIH1cblxuICBkcmF3S2V5Q291bnQoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoNTYwLCAxMCwgMjAwLCA1MClcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXlzLCAzMiwgMCwgMzIsIDMyLCA1OTAsIDEyLCAzMCwgMzApO1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLmtleUNvdW50LCA1NzAsIDMyKTtcbiAgfVxuXG4gIGRyYXdfa2V5MSgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTEsIDAsIDAsIDMyLCAzMiwgNjAwLCAyNDAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTIoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkyLCAzMiwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5MygpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkzLCA2NCwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5NCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXk0LCA5NiwgMCwgMzIsIDMyLCAyMjUsIDM0MCwgMzAsIDMwKTtcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKHgsIHksIGN1cnJlbnRGcmFtZSl7XG4gICAgbGV0IGNvbDtcbiAgICBpZiAodGhpcy5yb29tICE9IDAgJiYgdGhpcy5yb29tICE9IDI1KXtcbiAgICB0aGlzLmRyYXdLZXlDb3VudCgpO1xuICAgIHRoaXMuZHJhd0hlYXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSl7XG4gICAgICBpZiAoeCA8IDQwMCAmJiB4ID4gMjAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg5MCwgMjgwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0dvb2QgbHVjayBIZW5yeSwnLCA5NSwgMzAwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0kga25vdyB5b3UgY2FuJywgOTUsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdkbyBpdCEnLCA5NSwgMzIwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDkwLCAyODAsIDEwMCwgNTApO1xuICAgIH1cblxuICAgICAgaWYgKHggPCA4MDAgJiYgeCA+IDUwMCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goNDAwLCAyNjAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBhcmVuJ3QgZ29pbmdcIiwgNDEwLCAyODApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgndG8gbGFzdCA1IG1pbnV0ZXMnLCA0MTAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwib3V0IHRoZXJlLlwiLCA0MTAsIDMwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNDAwLCAyNjAsIDEwMCwgNTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5kcmF3X2tleTEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMykge1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDEzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpIHtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1MDAsXG4gICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDMwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuZHJhd19rZXk0KCk7XG4gICAgICB9ICBcbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDYpe1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgY29sID0gY3VycmVudEZyYW1lICUgMTBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDMyMCwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmdyZWVuS25pZ2h0LCAzMiAqIGNvbCwgMCwgMzIsIDMyLCAtMzg1LCAzMTAsIDY1LCA2NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyMjAsIDI3MCwgMTIwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IG11c3QgaGF2ZSBhbGwgNFwiLCAyMzAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdrZXlzIHRvIGVudGVyIHRoZSBjYXN0bGUuJywgMjMwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDIyMCwgMjcwLCAxMjAsIDUwKTtcbiAgICAgICAgaWYgKHggPiAyNjAgJiYgeCA8IDM1MCl7XG4gICAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyNjAsIDI3MCwgMTUwLCAyNSwgNSk7XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIFIgdG8gZW50ZXIgdGhlIGNhc3RsZS5cIiwgMjcwLCAyOTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyNjAsIDI3MCwgMTUwLCAyNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDcpe1xuICAgICAgIGNvbCA9IDc7XG4gICAgICAgIGlmIChjdXJyZW50RnJhbWUgJSA4ID09PSAwKXtcbiAgICAgICAgIGNvbCA9IDg7XG4gICAgICAgIH1cbiAgICAgICAgcm93ID0gMjtcbiAgICAgICAgbGV0IHByaW5jZXNzWCA9IDUwMDtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMuZ29sZEtuaWdodFgsIDMwMCwgODUsIDg1KVxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QocHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIGNvbCwgcm93ICogODIsIDgxLCA4MiwgcHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICBcbiAgICAgIGlmICh4IDwgMjUwICYmIHRoaXMuZmlyc3RTY2VuZSA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMzkwLCAyOTAsIDE1MCwgNDAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQbGVhc2Ugc2F2ZSBtZSFcIiwgNDAwICwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUaGUgZXZpbCBrbmlnaHQgaXMgY29taW5nIVwiLCA0MDAsIDMyMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzkwLCAyOTAsIDE1MCwgNDApO1xuICAgICAgfVxuICAgICAgaWYgKHggPiAyNjAgJiYgdGhpcy5maXJzdFNjZW5lID09PSB0cnVlKXtcbiAgICAgICAgY29sID0gKGN1cnJlbnRGcmFtZSkgJSAxMDtcbiAgICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNTApIHtcbiAgICAgICAgICB0aGlzLmdvbGRLbmlnaHRYIC09IDU7XG4gICAgICAgICAgcm93ID0gMjtcbiAgICAgICAgfVxuICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJvdyA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5nb2xkS25pZ2h0LCAzMiAqIGNvbCwgcm93ICogMzIsIDMyLCAzMiwgLXRoaXMuZ29sZEtuaWdodFggLSA4NSwgMzAwLCA4NSwgODUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID09PSAzNTApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDI0MCwgMjMwLCAxNTAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk9oIG1hbiB0aGFuayBnb2QgeW91XCIsIDI1MCwgMjUwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJhcmUgaGVyZS4gRXZlcnlvbmUgaGFzXCIsIDI1MCwgMjYwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJpdCBhbGwgd3JvbmcuXCIsIDI2MCwgMjcwKTtcbiAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogY29sLCByb3cgKiA4MiwgODEsIDgyLCBwcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDI1KXtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3goNDAwLCAyNjAsIDEwMCwgNTAsIDUpXG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHYW1lIE92ZXJcIiwgNDEwLCAyODApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFNwYWNlYmFyIHRvIHRyeSBhZ2Fpbi4nLCA0MTAsIDI5MCk7XG4gICAgfVxufVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=