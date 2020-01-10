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
      this.x = -20;
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
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Please save me! The", 400, 310);
          this.ctx.fillText("evil knight is coming!", 400, 320);
        } else {
          this.ctx.clearRect(390, 290, 150, 40);
        }

        row = 1;

        if (x > 260 && this.firstScene === true) {
          col = currentFrame % 10;

          if (this.goldKnightX > 350) {
            this.goldKnightX -= 5;
            row = 2;
          }

          this.disabled = true;
          this.ctx.scale(-1, 1);
          this.ctx.drawImage(this.goldKnight, 32 * col, row * 32, 32, 32, -this.goldKnightX - 85, 300, 85, 85);
          this.ctx.scale(-1, 1);
        }

        if (this.goldKnightX > 360 && this.goldKnightX < 600) {
          this.drawTextBox(100, 230, 180, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Hey you big dummy, that", 110, 252);
          this.ctx.fillText("is walking weird. You", 110, 262);
          this.ctx.fillText("better let the princess go!", 110, 272);
        }

        if (this.goldKnightX === 350) {
          this.ctx.clearRect(100, 230, 220, 50);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwic2Nyb2xsUmlnaHQiLCJzY3JvbGxMZWZ0IiwiaSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkNoZWNrIiwiY29sbGlzaW9uTmFtZSIsImZvdW5kS2V5MSIsImtleUNvdW50IiwiZm91bmRLZXkyIiwiZm91bmRLZXkzIiwiZm91bmRLZXk0IiwibGl2ZXMiLCJyZXNldCIsImdhbWVPdmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZm91bmRLZXlzIiwiZW50ZXIiLCJyZXN0YXJ0Iiwic3RhcnQiLCJwbGF0Zm9ybSIsInZlY3RvclgiLCJ2ZWN0b3JZIiwiY2VudGVyV2lkdGhzIiwiY2VudGVySGVpZ2h0cyIsImNvbGxpc2lvbkRpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJuYW1lIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjbGVhciIsIm5ld0xldmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIm51bWJlciIsInBsYXRmb3JtUGljIiwicGxhdGZvcm1XaWR0aCIsInBsYXRmb3JtSGVpZ2h0IiwiaGVhcnQiLCJmaXJzdFNjZW5lIiwia2V5MSIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleXMiLCJncmVlbktuaWdodCIsInByaW5jZXNzIiwiZ29sZEtuaWdodCIsImdvbGRLbmlnaHRYIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsInB1c2giLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiYmwiLCJjbG9zZVBhdGgiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VUZXh0IiwiY3VycmVudEZyYW1lIiwiY29sIiwiZHJhd0tleUNvdW50IiwiZHJhd0hlYXJ0IiwiZHJhd1RleHRCb3giLCJkcmF3X3BsYXRmb3JtcyIsImRyYXdfa2V5MSIsImRyYXdfa2V5MiIsImRyYXdfa2V5MyIsImRyYXdfa2V5NCIsInJvdyIsInByaW5jZXNzWCJdLCJtYXBwaW5ncyI6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QSxlQUFLNkcsV0FBTCxDQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxFQUFoQyxFQUFvQyxDQUFwQztBQUNBLGVBQUt4SSxHQUFMLENBQVNvSCxJQUFULEdBQWdCLG1CQUFoQjtBQUNBLGVBQUtwSCxHQUFMLENBQVNxSCxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsZUFBS3JILEdBQUwsQ0FBU3NILFFBQVQsQ0FBa0Isc0JBQWxCLEVBQTBDLEdBQTFDLEVBQStDLEdBQS9DO0FBQ0EsZUFBS3RILEdBQUwsQ0FBU3NILFFBQVQsQ0FBa0Isd0JBQWxCLEVBQTRDLEdBQTVDLEVBQWlELEdBQWpEO0FBQ0EsZUFBS3RILEdBQUwsQ0FBU3NILFFBQVQsQ0FBa0IsZUFBbEIsRUFBbUMsR0FBbkMsRUFBd0MsR0FBeEMsRUFQMkIsQ0FTM0I7QUFDRDtBQUdGLE9BeERJLE1BMkRBLElBQUksS0FBS2xFLElBQUwsS0FBYyxFQUFsQixFQUFxQjtBQUN4QixhQUFLb0YsV0FBTCxDQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixHQUEzQixFQUFnQyxFQUFoQyxFQUFvQyxDQUFwQztBQUNBLGFBQUt4SSxHQUFMLENBQVNvSCxJQUFULEdBQWdCLG1CQUFoQjtBQUNBLGFBQUtwSCxHQUFMLENBQVNxSCxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsYUFBS3JILEdBQUwsQ0FBU3NILFFBQVQsQ0FBa0IsV0FBbEIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEM7QUFDQSxhQUFLdEgsR0FBTCxDQUFTc0gsUUFBVCxDQUFrQiw4QkFBbEIsRUFBa0QsR0FBbEQsRUFBdUQsR0FBdkQ7QUFDRDtBQUNKOzs7Ozs7QUFHRHZCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBHLEtBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcblxuY2xhc3MgR2FtZVZpZXcge1xuICBjb25zdHJ1Y3RvcihsZXZlbCwgY3R4LCBjYW52YXMsIGJhY2tncm91bmRDdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMuYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDdHg7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMuYmluZEtleUhhbmRsZXJzKCk7XG4gICAgdGhpcy5mbGlwUGxheWVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuanVtcEhlaWdodCA9IDA7XG4gICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy5zcmNYID0gMDtcbiAgICB0aGlzLnNyY1kgPSAwO1xuICAgIHRoaXMueCA9IDMwMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcGVlZCA9IDEyO1xuICAgIHRoaXMuc3VwZXJNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgIHRoaXMubGV2ZWwucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlU2NlbmUoKXtcbiAgICB0aGlzLmRyYXdNYWluQ2hhcmFjdGVyKCk7XG4gICAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB9XG5cbiAgZHJhd01haW5DaGFyYWN0ZXIoKSB7XG4gICAgY29uc3Qgc3ByaXRlV2lkdGggPSAzNTA7XG4gICAgY29uc3Qgc3ByaXRlSGVpZ2h0ID0gNDA3O1xuICAgIGNvbnN0IHJvd3MgPSAxMTtcbiAgICBjb25zdCBjb2xzID0gNztcbiAgICB0aGlzLnRyYWNrUmlnaHQgPSAxO1xuICAgIHRoaXMudHJhY2tMZWZ0ID0gMTtcbiAgICB0aGlzLndpZHRoID0gc3ByaXRlV2lkdGggLyBjb2xzO1xuICAgIHRoaXMuaGVpZ2h0ID0gc3ByaXRlSGVpZ2h0IC8gcm93cztcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLm9sZEZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMueCA9IDIyMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcmNYPSAwO1xuICAgIHRoaXMuc3JjWT0gdGhpcy50cmFja1JpZ2h0ICogdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICB0aGlzLnNwZWVkWSA9IDE1O1xuICAgIHRoaXMuY2hhcmFjdGVyLnNyYyA9IFwiZGlzdC9pbWFnZXMvYWR2ZW50dXJlci1TaGVldC5wbmdcIjtcbiAgfVxuICBtYWluTG9vcCh0aW1lKXtcbiAgICB0aGlzLnVwZGF0ZUZyYW1lKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmZyYW1lQ291bnQsIHRoaXMudHJhY2tMZWZ0LCB0aGlzLnRyYWNrUmlnaHQpXG4gICAgaWYgKHRoaXMuZmFjaW5nTGVmdCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgKC10aGlzLnggLSAodGhpcy53aWR0aCAqIDIpKSwgdGhpcy55LCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTsgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCoyLCB0aGlzLmhlaWdodCoyKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN1cGVyTW9kZSA9PT0gZmFsc2Upe1xuICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgICAgfSwgMTAwKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICAgIH0sIDQwKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZyYW1lKHdpZHRoLCBoZWlnaHQsIGZyYW1lQ291bnQsIHRyYWNrTGVmdCwgdHJhY2tSaWdodCl7XG4gICAgdGhpcy5vbGRGcmFtZSA9IHRoaXMub2xkRnJhbWUgKyAxO1xuICAgIFxuICAgIHRoaXMuY3VyRnJhbWUgPSAodGhpcy5jdXJGcmFtZSArIDEpICUgZnJhbWVDb3VudDtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gMSkgdGhpcy5zdGlsbEZyYW1lID0gMTtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gMikgdGhpcy5zdGlsbEZyYW1lID0gMjtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gMykgdGhpcy5zdGlsbEZyYW1lID0gMztcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gNCkgdGhpcy5zdGlsbEZyYW1lID0gMztcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gNSkgdGhpcy5zdGlsbEZyYW1lID0gMjtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gNikgdGhpcy5zdGlsbEZyYW1lID0gMTtcbiAgICB0aGlzLnNyY1ggPSB0aGlzLmN1ckZyYW1lICogd2lkdGggKyB3aWR0aDtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoICogMiwgaGVpZ2h0ICogMik7XG4gICAgdGhpcy5sZXZlbC51cGRhdGVTY2VuZSh0aGlzLngsIHRoaXMueSwgdGhpcy5vbGRGcmFtZSk7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5sZWZ0ICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IGZhbHNlICYmICh0aGlzLnggPiAtMjAgfHwgKHRoaXMubGV2ZWwucm9vbSAhPTEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcpKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNwZWVkWSA9IDE1XG4gICAgICBpZiAoMzEwIC0gdGhpcy55ID4gdGhpcy5zcGVlZFkgfHwgKHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3ICYmIHRoaXMubGV2ZWwucm9vbSAhPSAyNSAmJiB0aGlzLmxldmVsLnJvb20gIT0gMCAmJiB0aGlzLnN1cGVyTW9kZSA9PT0gZmFsc2UpKXtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy55ICs9IDMxMCAtIHRoaXMueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5qdW1waW5nID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmp1bXBIZWlnaHQgKz0gMzBcbiAgICAgIHRoaXMueSAtPSAzMDtcbiAgICAgIGlmICh0aGlzLmp1bXBIZWlnaHQgPiAxMzApe1xuICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgIHRoaXMuanVtcEhlaWdodCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPiA2NzApeyBcbiAgICAgIHRoaXMuc2Nyb2xsUmlnaHQoKTtcbiAgICAgIHRoaXMueCA9IC0yMDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA8IC0yMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNykge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICB0aGlzLnggPSA2NDA7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbC5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5wbGF0Zm9ybXNbaV0pXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xuICAgICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubGV2ZWwuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgY29sbGlzaW9uTmFtZSA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5pdGVtc1tpXSlcbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTFcIil7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkxID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDYwMCwgMjQwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTJcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MiA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5M1wiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXk0XCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjI1LCAzNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueSA+IDUwMCApe1xuICAgICAgdGhpcy5sZXZlbC5saXZlcyAtPSAxO1xuICAgICAgdGhpcy55ID0gMTA7XG4gICAgICB0aGlzLnggPSAyMDtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZXZlbC5saXZlcyA9PT0gMCl7XG4gICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgfVxuXG5cblxuICAgIGlmICh0aGlzLnkgPT09IDMxMCkgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKSB0aGlzLnNyY1kgPSBoZWlnaHQgKiAyO1xuICAgIGVsc2UgaWYgKHRoaXMubGVmdCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tMZWZ0ICogaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMucmlnaHQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrUmlnaHQgKiBoZWlnaHQ7XG4gICAgZWxzZSB7dGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDsgdGhpcy5zcmNZID0gMDt9XG4gIH1cbiAgXG4gIG1vdmVMZWZ0KCl7XG4gICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IHRydWU7XG4gIH1cblxuICBtb3ZlUmlnaHQoKXtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gIH1cblxuICBqdW1wKCl7XG4gICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gIH1cblxuICBiaW5kS2V5SGFuZGxlcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiKSB7XG4gICAgdGhpcy5tb3ZlTGVmdCgpO1xuICB9XG4gIGlmIChlLmtleSA9PT0gXCJ3XCIgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmICh0aGlzLnkgPT09IDMxMCB8fCB0aGlzLnNwZWVkWSA9PT0gMCkgJiYgdGhpcy55IDw9IDMxMCkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcInJcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDYgJiYgdGhpcy54ID4gMjYwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5mb3VuZEtleXMoKSA9PT0gdHJ1ZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG5cbiAgaWYgKChlLmtleSA9PT0gXCIgXCIgfHwgZS5rZXkgPT09IFwic3BhY2VcIikgJiYgdGhpcy5sZXZlbC5yb29tID09PSAyNSAmJiBlLnJlcGVhdCA9PT0gZmFsc2Upe1xuICAgIHRoaXMucmVzdGFydCgpO1xuICB9XG5cbiAgaWYgKChlLmtleSA9PT0gXCIgXCIgfHwgZS5rZXkgPT09IFwic3BhY2VcIikgJiYgdGhpcy5sZXZlbC5yb29tID09PSAwICYmIGUucmVwZWF0ID09PSBmYWxzZSkge1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwicFwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDEgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnN1cGVyTW9kZSA9ICF0aGlzLnN1cGVyTW9kZTtcbiAgICB9XG5cbn1cblxuIGtleVVwSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIpIHtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiKSB7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cblxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJ3XCIpIHtcbiAgfVxufVxuXG5mb3VuZEtleXMoKXtcbiAgcmV0dXJuIHRoaXMubGV2ZWwuZm91bmRLZXkxICYmIHRoaXMubGV2ZWwuZm91bmRLZXkyICYmIHRoaXMubGV2ZWwuZm91bmRLZXkzICYmIHRoaXMubGV2ZWwuZm91bmRLZXk0XG59XG5cbmNvbGxpc2lvbkNoZWNrKHBsYXRmb3JtKXtcbiAgY29uc3QgdmVjdG9yWCA9ICh0aGlzLnggKyAodGhpcy53aWR0aCkpIC0gKHBsYXRmb3JtLnggKyAocGxhdGZvcm0ud2lkdGggLyAyKSk7XG4gIGNvbnN0IHZlY3RvclkgPSAodGhpcy55ICsgKHRoaXMuaGVpZ2h0KSkgLSAocGxhdGZvcm0ueSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKSk7XG5cbiAgY29uc3QgY2VudGVyV2lkdGhzID0gKHRoaXMud2lkdGgvMikgKyAocGxhdGZvcm0ud2lkdGggLyAyKTtcbiAgY29uc3QgY2VudGVySGVpZ2h0cyA9ICh0aGlzLmhlaWdodCkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMik7XG5cblxuICBsZXQgY29sbGlzaW9uRGlyZWN0aW9uO1xuXG4gIGlmIChNYXRoLmFicyh2ZWN0b3JYKSA8IGNlbnRlcldpZHRocyAmJiBNYXRoLmFicyh2ZWN0b3JZKSA8IGNlbnRlckhlaWdodHMpIFxuICB7XG5cbiAgICBpZiAocGxhdGZvcm0ubmFtZSkgcmV0dXJuIHBsYXRmb3JtLm5hbWU7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNlbnRlcldpZHRocyAtIE1hdGguYWJzKHZlY3RvclgpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBjZW50ZXJIZWlnaHRzIC0gTWF0aC5hYnModmVjdG9yWSk7XG5cbiAgICBpZiAob2Zmc2V0WCA8IG9mZnNldFkpXG4gICAgICAgIGlmICh2ZWN0b3JYID4gMCl7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgICAgICB0aGlzLnggKz0gb2Zmc2V0WDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgICAgICB0aGlzLnggLT0gb2Zmc2V0WDtcbiAgICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHZlY3RvclkgPiAwKXtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJ0b3BcIjtcbiAgICAgICAgdGhpcy55ICs9IG9mZnNldFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImJvdHRvbVwiO1xuICAgICAgICB0aGlzLnkgLT0gb2Zmc2V0WVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29sbGlzaW9uRGlyZWN0aW9uO1xufVxuXG5zY3JvbGxSaWdodCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiAodGhpcy5sZXZlbC5yb29tICE9PSAwKSkgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnNjcm9sbExlZnQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMCB8fCB0aGlzLmxldmVsLnJvb20gIT09IDcpKSB0aGlzLmxldmVsLnJvb20gLT0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuZW50ZXIoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy54ID0gLTIwO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc3RhcnQoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDE7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB0aGlzLnggPSAyMjA7XG4gIHRoaXMueSA9IDMxMDtcbn1cblxucmVzZXQoKXtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5nYW1lT3Zlcigpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwucm9vbSA9IDI1XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxucmVzdGFydCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoMCwgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5jb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL2dhbWVfdmlld1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgLy8gYmFja2dyb3VuZENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXMyXCIpO1xuICAvLyBiYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gXG4gIGxldCBsZXZlbCA9IG5ldyBMZXZlbCg3LCBjdHgsIGNhbnZhcyk7XG4gIG5ldyBHYW1lVmlldyhsZXZlbCwgY3R4LCBjYW52YXMpO1xufSk7IiwiY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIGN0eCwgY2FudmFzKSB7XG4gICAgdGhpcy5yb29tID0gbnVtYmVyO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5wbGF0Zm9ybVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucGxhdGZvcm1QaWMuc3JjID0gXCJkaXN0L2ltYWdlcy9wbGF0Zm9ybS5wbmdcIjtcbiAgICB0aGlzLnBsYXRmb3JtV2lkdGggPSAxNTA7XG4gICAgdGhpcy5wbGF0Zm9ybUhlaWdodCA9IDIwO1xuICAgIHRoaXMuaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmhlYXJ0LnNyYyA9IFwiZGlzdC9pbWFnZXMvaGVhcnQucG5nXCI7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkxID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTIgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MyA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXk0ID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLmtleTEgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTEuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTIuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTQuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleXMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleXMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleUNvdW50ID0gMDtcbiAgICB0aGlzLmdyZWVuS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5ncmVlbktuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL01pdGhlcmFsS25pZ2h0LnBuZ1wiO1xuICAgIHRoaXMucHJpbmNlc3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByaW5jZXNzLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5nb2xkS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5nb2xkS25pZ2h0LnNyYyA9IFwiZGlzdC9pbWFnZXMvR29sZEtuaWdodC5wbmdcIlxuICAgIHRoaXMuZ29sZEtuaWdodFggPSA3MDA7XG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImRpc3QvaW1hZ2VzL2xldmVsJHt0aGlzLnJvb219LnBuZ1wiYFxuICAgIHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHBsYXRmb3JtV2lkdGggPSB0aGlzLnBsYXRmb3JtV2lkdGg7XG4gICAgcGxhdGZvcm1IZWlnaHQgPSB0aGlzLnBsYXRmb3JtSGVpZ2h0XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCkge1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGNvbnRyb2wgSGVucnkgd2hvIGlzIGEgY29hbCBtaW5lciBmcm9tIHRoZSBraW5nZG9tIG9mIFRyb21pZGUuXCIsIDMwLCA1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIGhhcyBhbHdheXMga2VwdCBhIGxvdyBwcm9maWxlLCBkZXRlcm1pbmVkIHRvIGRvIGhpcyBqb2IgYW5kIHRoZW4gZW5qb3kgdGhlIHBlYWNlIGFuZCBxdWlldCBvZiBoaXMgaG9tZS5cIiwgMzAsIDcwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmV2ZXIgbWFkZSBhbiBlZmZvcnQgdG8gYmUga25vd24gb3IgbWFrZSBmcmllbmRzLiBObyBvbmUga25ldyBoaW0gcGVyc29uYWxseSBhbmQgaGUgbGlrZWQgaXQgdGhhdCB3YXkuXCIsIDMwLCA5MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRoZSBwcmluY2VzcyBoYXMgYmVlbiBraWRuYXBwZWQgYW5kIGFsbCBlZmZvcnRzIHRvIHNhdmUgaGVyIGhhdmUgZmFpbGVkLiBBbHRob3VnaCBIZW5yeSBoYXMgaGVhcmQgb2YgdGhlIHNpdHVhdGlvbixcIiwgMzAsIDExMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIml0IHdhc24ndCBzb21ldGhpbmcgaGUgd2FzIGludGVyZXN0ZWQgaW4gZ2V0dGluZyBpbnZvbHZlZCBpbi4gQXMgaGUgd2FzIHdhbGtpbmcgdG8gd29yayBoZSBzYXcgYSBmbGllciBvZmZlcmluZ1wiLCAzMCwgMTMwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYSBtYWpvciByZXdhcmQgdG8gYW55b25lIHRoYXQgY2FuIGhlbHAgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoZSBvbmUgdGhpbmcgSGVucnkgZG9lcyBjYXJlIGZvciBpcyBtb25leS5cIiwgMzAsIDE1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5lZWRzIHRvIGZpbmQgdGhlIDQga2V5cyB0byBnZXQgaW50byB0aGUgZW5lbXkgY2FzdGxlIGFuZCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhpcyBpcyB3aGVyZSBoaXMgc3RvcnkgYmVnaW5zLiBcIiwgMzAsIDE3MCk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBTcGFjZWJhciB0byBzdGFydC4nLCAyMzAsIDIxNSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi0yMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIxMTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA4MDAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDIwLFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTcwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDMwLFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTFcIixcbiAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgeTogMjQwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM0MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzgwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjYwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSlcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTJcIixcbiAgICAgICAgICB4OiAzODUsXG4gICAgICAgICAgeTogMjUwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY2MCxcbiAgICAgICAgeTogMTQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzE1LFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY1MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDQ0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA1MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSlcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTNcIixcbiAgICAgICAgICB4OiAzODUsXG4gICAgICAgICAgeTogMjUwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA1KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjAwLFxuICAgICAgICB5OiA3NSxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU1MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEzMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDcwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDQ3NSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1MzAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA1NTAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5NFwiLFxuICAgICAgICAgIHg6IDIyNSxcbiAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA2KSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyMixcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjcwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMFwiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDI1KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgZmFpbGVkIHRvIHNhdmUgdGhlIFByaW5jZXNzLlwiLCAxNzAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgU3BhY2ViYXIgdG8gdHJ5IGFnYWluLicsIDE4MCwgMTUwKTtcbiAgICB9XG4gIH1cblxuICBkcmF3VGV4dEJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpe1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpdXMuYmwsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdfcGxhdGZvcm1zKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QocGxhdGZvcm1zW2ldLngsIHBsYXRmb3Jtc1tpXS55LCBwbGF0Zm9ybXNbaV0ud2lkdGgsIHBsYXRmb3Jtc1tpXS5oZWlnaHQpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucGxhdGZvcm1QaWMsIDAsIDAsIDk2LCA5NiwgcGxhdGZvcm1zW2ldLngsIHBsYXRmb3Jtc1tpXS55LCBwbGF0Zm9ybXNbaV0ud2lkdGgsIHBsYXRmb3Jtc1tpXS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdIZWFydCgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmhlYXJ0LCAwLCAwLCAxMjUsIDEyNSwgNjUwLCAxMCwgMzAsIDMwKVxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLmxpdmVzLCA2MzIsIDMyKTtcbiAgfVxuXG4gIGRyYXdLZXlDb3VudCgpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg1NjAsIDEwLCAyMDAsIDUwKVxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleXMsIDMyLCAwLCAzMiwgMzIsIDU5MCwgMTIsIDMwLCAzMCk7XG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMua2V5Q291bnQsIDU3MCwgMzIpO1xuICB9XG5cbiAgZHJhd19rZXkxKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MSwgMCwgMCwgMzIsIDMyLCA2MDAsIDI0MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5Migpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTIsIDMyLCAwLCAzMiwgMzIsIDM4NSwgMjUwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkzKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTMsIDY0LCAwLCAzMiwgMzIsIDM4NSwgMjUwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXk0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTQsIDk2LCAwLCAzMiwgMzIsIDIyNSwgMzQwLCAzMCwgMzApO1xuICB9XG5cbiAgdXBkYXRlU2NlbmUoeCwgeSwgY3VycmVudEZyYW1lKXtcbiAgICBsZXQgY29sO1xuICAgIGlmICh0aGlzLnJvb20gIT0gMCAmJiB0aGlzLnJvb20gIT0gMjUpe1xuICAgIHRoaXMuZHJhd0tleUNvdW50KCk7XG4gICAgdGhpcy5kcmF3SGVhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yb29tID09PSAxKXtcbiAgICAgIGlmICh4IDwgNDAwICYmIHggPiAyMDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDkwLCAyODAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnR29vZCBsdWNrIEhlbnJ5LCcsIDk1LCAzMDApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnSSBrbm93IHlvdSBjYW4nLCA5NSwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2RvIGl0IScsIDk1LCAzMjApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgfVxuXG4gICAgICBpZiAoeCA8IDgwMCAmJiB4ID4gNTAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGFyZW4ndCBnb2luZ1wiLCA0MTAsIDI4MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCd0byBsYXN0IDUgbWludXRlcycsIDQxMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJvdXQgdGhlcmUuXCIsIDQxMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg0MDAsIDI2MCwgMTAwLCA1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgICB0aGlzLmRyYXdfa2V5MSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAzKSB7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZHJhd19rZXkyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCkge1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMDAsXG4gICAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMzAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5kcmF3X2tleTQoKTtcbiAgICAgIH0gIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNil7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTIgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICBjb2wgPSBjdXJyZW50RnJhbWUgJSAxMFxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzIwLCAzMTAsIDY1LCA2NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZ3JlZW5LbmlnaHQsIDMyICogY29sLCAwLCAzMiwgMzIsIC0zODUsIDMxMCwgNjUsIDY1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDIyMCwgMjcwLCAxMjAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgbXVzdCBoYXZlIGFsbCA0XCIsIDIzMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2tleXMgdG8gZW50ZXIgdGhlIGNhc3RsZS4nLCAyMzAsIDMwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjIwLCAyNzAsIDEyMCwgNTApO1xuICAgICAgICBpZiAoeCA+IDI2MCAmJiB4IDwgMzUwKXtcbiAgICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDI2MCwgMjcwLCAxNTAsIDI1LCA1KTtcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgUiB0byBlbnRlciB0aGUgY2FzdGxlLlwiLCAyNzAsIDI5MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDI2MCwgMjcwLCAxNTAsIDI1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNyl7XG4gICAgICAgY29sID0gNztcbiAgICAgICAgaWYgKGN1cnJlbnRGcmFtZSAlIDggPT09IDApe1xuICAgICAgICAgY29sID0gODtcbiAgICAgICAgfVxuICAgICAgICByb3cgPSAyO1xuICAgICAgICBsZXQgcHJpbmNlc3NYID0gNTAwO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5nb2xkS25pZ2h0WCwgMzAwLCA4NSwgODUpXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdChwcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogY29sLCByb3cgKiA4MiwgODEsIDgyLCBwcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIFxuICAgICAgaWYgKHggPCAyNTAgJiYgdGhpcy5maXJzdFNjZW5lID09PSB0cnVlKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgzOTAsIDI5MCwgMTUwLCA0MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQbGVhc2Ugc2F2ZSBtZSEgVGhlXCIsIDQwMCAsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiZXZpbCBrbmlnaHQgaXMgY29taW5nIVwiLCA0MDAsIDMyMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzkwLCAyOTAsIDE1MCwgNDApO1xuICAgICAgfVxuICAgICAgcm93ID0gMTtcbiAgICAgIGlmICh4ID4gMjYwICYmIHRoaXMuZmlyc3RTY2VuZSA9PT0gdHJ1ZSl7XG4gICAgICAgIGNvbCA9IChjdXJyZW50RnJhbWUpICUgMTA7XG4gICAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID4gMzUwKSB7XG4gICAgICAgICAgdGhpcy5nb2xkS25pZ2h0WCAtPSA1O1xuICAgICAgICAgIHJvdyA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZ29sZEtuaWdodCwgMzIgKiBjb2wsIHJvdyAqIDMyLCAzMiwgMzIsIC10aGlzLmdvbGRLbmlnaHRYIC0gODUsIDMwMCwgODUsIDg1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA+IDM2MCAmJiB0aGlzLmdvbGRLbmlnaHRYIDwgNjAwKVxuICAgICAge1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDEwMCwgMjMwLCAxODAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhleSB5b3UgYmlnIGR1bW15LCB0aGF0XCIsIDExMCwgMjUyKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJpcyB3YWxraW5nIHdlaXJkLiBZb3VcIiwgMTEwLCAyNjIpO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImJldHRlciBsZXQgdGhlIHByaW5jZXNzIGdvIVwiLCAxMTAsIDI3Mik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID09PSAzNTApe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMTAwLCAyMzAsIDIyMCwgNTApO1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDI0MCwgMjMwLCAxNTAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIk9oIG1hbiB0aGFuayBnb2QgeW91XCIsIDI1MCwgMjUwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJhcmUgaGVyZS4gRXZlcnlvbmUgaGFzXCIsIDI1MCwgMjYwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJpdCBhbGwgd3JvbmcuXCIsIDI2MCwgMjcwKTtcblxuICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBjb2wsIHJvdyAqIDgyLCA4MSwgODIsIHByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuXG5cbiAgICB9XG5cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdhbWUgT3ZlclwiLCA0MTAsIDI4MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgU3BhY2ViYXIgdG8gdHJ5IGFnYWluLicsIDQxMCwgMjkwKTtcbiAgICB9XG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==