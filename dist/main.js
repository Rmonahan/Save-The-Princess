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

  var level = new Level(0, ctx, canvas);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwic2Nyb2xsUmlnaHQiLCJzY3JvbGxMZWZ0IiwiaSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkNoZWNrIiwiY29sbGlzaW9uTmFtZSIsImZvdW5kS2V5MSIsImtleUNvdW50IiwiZm91bmRLZXkyIiwiZm91bmRLZXkzIiwiZm91bmRLZXk0IiwibGl2ZXMiLCJyZXNldCIsImdhbWVPdmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZm91bmRLZXlzIiwiZW50ZXIiLCJyZXN0YXJ0Iiwic3RhcnQiLCJwbGF0Zm9ybSIsInZlY3RvclgiLCJ2ZWN0b3JZIiwiY2VudGVyV2lkdGhzIiwiY2VudGVySGVpZ2h0cyIsImNvbGxpc2lvbkRpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJuYW1lIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjbGVhciIsIm5ld0xldmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIm51bWJlciIsInBsYXRmb3JtUGljIiwicGxhdGZvcm1XaWR0aCIsInBsYXRmb3JtSGVpZ2h0IiwiaGVhcnQiLCJmaXJzdFNjZW5lIiwia2V5MSIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleXMiLCJncmVlbktuaWdodCIsInByaW5jZXNzIiwiZ29sZEtuaWdodCIsImdvbGRLbmlnaHRYIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsInB1c2giLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiYmwiLCJjbG9zZVBhdGgiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VUZXh0IiwiY3VycmVudEZyYW1lIiwiY29sIiwiZHJhd0tleUNvdW50IiwiZHJhd0hlYXJ0IiwiZHJhd1RleHRCb3giLCJkcmF3X3BsYXRmb3JtcyIsImRyYXdfa2V5MSIsImRyYXdfa2V5MiIsImRyYXdfa2V5MyIsImRyYXdfa2V5NCIsInJvdyIsInByaW5jZXNzWCJdLCJtYXBwaW5ncyI6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QXBDO0FBQ0EsYUFBS3hJLEdBQUwsQ0FBU29ILElBQVQsR0FBZ0IsbUJBQWhCO0FBQ0EsYUFBS3BILEdBQUwsQ0FBU3FILFNBQVQsR0FBcUIsT0FBckI7QUFDQSxhQUFLckgsR0FBTCxDQUFTc0gsUUFBVCxDQUFrQixXQUFsQixFQUErQixHQUEvQixFQUFvQyxHQUFwQztBQUNBLGFBQUt0SCxHQUFMLENBQVNzSCxRQUFULENBQWtCLDhCQUFsQixFQUFrRCxHQUFsRCxFQUF1RCxHQUF2RDtBQUNEO0FBQ0o7Ozs7OztBQUdEdkIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEcsS0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuXG5jbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgsIGNhbnZhcywgYmFja2dyb3VuZEN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZEN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmZsaXBQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5zdXBlck1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgdGhpcy5sZXZlbC5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpe1xuICAgIHRoaXMuZHJhd01haW5DaGFyYWN0ZXIoKTtcbiAgICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIH1cblxuICBkcmF3TWFpbkNoYXJhY3RlcigpIHtcbiAgICBjb25zdCBzcHJpdGVXaWR0aCA9IDM1MDtcbiAgICBjb25zdCBzcHJpdGVIZWlnaHQgPSA0MDc7XG4gICAgY29uc3Qgcm93cyA9IDExO1xuICAgIGNvbnN0IGNvbHMgPSA3O1xuICAgIHRoaXMudHJhY2tSaWdodCA9IDE7XG4gICAgdGhpcy50cmFja0xlZnQgPSAxO1xuICAgIHRoaXMud2lkdGggPSBzcHJpdGVXaWR0aCAvIGNvbHM7XG4gICAgdGhpcy5oZWlnaHQgPSBzcHJpdGVIZWlnaHQgLyByb3dzO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMub2xkRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy54ID0gMjIwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNyY1g9IDA7XG4gICAgdGhpcy5zcmNZPSB0aGlzLnRyYWNrUmlnaHQgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgIHRoaXMuc3BlZWRZID0gMTU7XG4gICAgdGhpcy5jaGFyYWN0ZXIuc3JjID0gXCJkaXN0L2ltYWdlcy9hZHZlbnR1cmVyLVNoZWV0LnBuZ1wiO1xuICB9XG4gIG1haW5Mb29wKHRpbWUpe1xuICAgIHRoaXMudXBkYXRlRnJhbWUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuZnJhbWVDb3VudCwgdGhpcy50cmFja0xlZnQsIHRoaXMudHJhY2tSaWdodClcbiAgICBpZiAodGhpcy5mYWNpbmdMZWZ0ID09PSB0cnVlKXtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAoLXRoaXMueCAtICh0aGlzLndpZHRoICogMikpLCB0aGlzLnksIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpOyAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoKjIsIHRoaXMuaGVpZ2h0KjIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSl7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpXG4gICAgICB9LCAxMDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgICAgfSwgNDApXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRnJhbWUod2lkdGgsIGhlaWdodCwgZnJhbWVDb3VudCwgdHJhY2tMZWZ0LCB0cmFja1JpZ2h0KXtcbiAgICB0aGlzLm9sZEZyYW1lID0gdGhpcy5vbGRGcmFtZSArIDE7XG4gICAgXG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIGlmICh0aGlzLmN1ckZyYW1lID09PSAxKSB0aGlzLnN0aWxsRnJhbWUgPSAxO1xuICAgIGlmICh0aGlzLmN1ckZyYW1lID09PSAyKSB0aGlzLnN0aWxsRnJhbWUgPSAyO1xuICAgIGlmICh0aGlzLmN1ckZyYW1lID09PSAzKSB0aGlzLnN0aWxsRnJhbWUgPSAzO1xuICAgIGlmICh0aGlzLmN1ckZyYW1lID09PSA0KSB0aGlzLnN0aWxsRnJhbWUgPSAzO1xuICAgIGlmICh0aGlzLmN1ckZyYW1lID09PSA1KSB0aGlzLnN0aWxsRnJhbWUgPSAyO1xuICAgIGlmICh0aGlzLmN1ckZyYW1lID09PSA2KSB0aGlzLnN0aWxsRnJhbWUgPSAxO1xuICAgIHRoaXMuc3JjWCA9IHRoaXMuY3VyRnJhbWUgKiB3aWR0aCArIHdpZHRoO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGggKiAyLCBoZWlnaHQgKiAyKTtcbiAgICB0aGlzLmxldmVsLnVwZGF0ZVNjZW5lKHRoaXMueCwgdGhpcy55LCB0aGlzLm9sZEZyYW1lKTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxlZnQgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2UgJiYgKHRoaXMueCA+IC0yMCB8fCAodGhpcy5sZXZlbC5yb29tICE9MSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNykpKXtcbiAgICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZFg7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnJpZ2h0ICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IGZhbHNlKXtcbiAgICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKXtcbiAgICAgIHRoaXMuc3BlZWRZID0gMTVcbiAgICAgIGlmICgzMTAgLSB0aGlzLnkgPiB0aGlzLnNwZWVkWSB8fCAodGhpcy5sZXZlbC5yb29tICE9IDEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDI1ICYmIHRoaXMubGV2ZWwucm9vbSAhPSAwICYmIHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDY3MCl7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gLTIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQoKTtcbiAgICAgIHRoaXMueCA9IDY0MDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsLnBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLnBsYXRmb3Jtc1tpXSlcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgfHwgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJib3R0b21cIikge1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XG4gICAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sZXZlbC5pdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBjb2xsaXNpb25OYW1lID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLml0ZW1zW2ldKVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MVwiKXtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTEgPSB0cnVlO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNjAwLCAyNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MlwiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkyID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkzXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzg1LCAyNTAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTRcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjUsIDM0MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5NCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gNTAwICl7XG4gICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICB0aGlzLnkgPSAxMDtcbiAgICAgIHRoaXMueCA9IDIwO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxldmVsLmxpdmVzID09PSAwKXtcbiAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICB9XG5cblxuXG4gICAgaWYgKHRoaXMueSA9PT0gMzEwKSB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaW5BaXIgPT09IHRydWUpIHRoaXMuc3JjWSA9IGhlaWdodCAqIDI7XG4gICAgZWxzZSBpZiAodGhpcy5sZWZ0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja0xlZnQgKiBoZWlnaHQ7XG4gICAgZWxzZSBpZiAodGhpcy5yaWdodCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tSaWdodCAqIGhlaWdodDtcbiAgICBlbHNlIHt0aGlzLnNyY1ggPSAodGhpcy5zdGlsbEZyYW1lKSAqIHdpZHRoOyB0aGlzLnNyY1kgPSAwO31cbiAgfVxuICBcbiAgbW92ZUxlZnQoKXtcbiAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpe1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGp1bXAoKXtcbiAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRLZXlIYW5kbGVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKGUua2V5ID09PSBcIndcIiAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgKHRoaXMueSA9PT0gMzEwIHx8IHRoaXMuc3BlZWRZID09PSAwKSAmJiB0aGlzLnkgPD0gMzEwKSB7XG4gICAgdGhpcy5qdW1wKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiclwiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNiAmJiB0aGlzLnggPiAyNjAgJiYgdGhpcy54IDwgMzUwICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiB0aGlzLmZvdW5kS2V5cygpID09PSB0cnVlKXtcbiAgICB0aGlzLmVudGVyKCk7XG4gIH1cblxuICBpZiAoKGUua2V5ID09PSBcIiBcIiB8fCBlLmtleSA9PT0gXCJzcGFjZVwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDI1ICYmIGUucmVwZWF0ID09PSBmYWxzZSl7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICBpZiAoKGUua2V5ID09PSBcIiBcIiB8fCBlLmtleSA9PT0gXCJzcGFjZVwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDAgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgaWYgKChlLmtleSA9PT0gXCJwXCIpICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMSAmJiBlLnJlcGVhdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc3VwZXJNb2RlID0gIXRoaXMuc3VwZXJNb2RlO1xuICAgIH1cblxufVxuXG4ga2V5VXBIYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuXG4gIGVsc2UgaWYgKGUua2V5ID09PSBcIndcIikge1xuICB9XG59XG5cbmZvdW5kS2V5cygpe1xuICByZXR1cm4gdGhpcy5sZXZlbC5mb3VuZEtleTEgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTIgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTMgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTRcbn1cblxuY29sbGlzaW9uQ2hlY2socGxhdGZvcm0pe1xuICBjb25zdCB2ZWN0b3JYID0gKHRoaXMueCArICh0aGlzLndpZHRoKSkgLSAocGxhdGZvcm0ueCArIChwbGF0Zm9ybS53aWR0aCAvIDIpKTtcbiAgY29uc3QgdmVjdG9yWSA9ICh0aGlzLnkgKyAodGhpcy5oZWlnaHQpKSAtIChwbGF0Zm9ybS55ICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpKTtcblxuICBjb25zdCBjZW50ZXJXaWR0aHMgPSAodGhpcy53aWR0aC8yKSArIChwbGF0Zm9ybS53aWR0aCAvIDIpO1xuICBjb25zdCBjZW50ZXJIZWlnaHRzID0gKHRoaXMuaGVpZ2h0KSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKTtcblxuXG4gIGxldCBjb2xsaXNpb25EaXJlY3Rpb247XG5cbiAgaWYgKE1hdGguYWJzKHZlY3RvclgpIDwgY2VudGVyV2lkdGhzICYmIE1hdGguYWJzKHZlY3RvclkpIDwgY2VudGVySGVpZ2h0cykgXG4gIHtcblxuICAgIGlmIChwbGF0Zm9ybS5uYW1lKSByZXR1cm4gcGxhdGZvcm0ubmFtZTtcbiAgICBjb25zdCBvZmZzZXRYID0gY2VudGVyV2lkdGhzIC0gTWF0aC5hYnModmVjdG9yWCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGNlbnRlckhlaWdodHMgLSBNYXRoLmFicyh2ZWN0b3JZKTtcblxuICAgIGlmIChvZmZzZXRYIDwgb2Zmc2V0WSlcbiAgICAgICAgaWYgKHZlY3RvclggPiAwKXtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgICAgIHRoaXMueCArPSBvZmZzZXRYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgIHRoaXMueCAtPSBvZmZzZXRYO1xuICAgICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodmVjdG9yWSA+IDApe1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInRvcFwiO1xuICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMueSAtPSBvZmZzZXRZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb2xsaXNpb25EaXJlY3Rpb247XG59XG5cbnNjcm9sbFJpZ2h0KCl7XG4gIGlmICh0aGlzLmxldmVsLnJvb20gIT09IDI1ICYmICh0aGlzLmxldmVsLnJvb20gIT09IDApKSB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc2Nyb2xsTGVmdCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiAodGhpcy5sZXZlbC5yb29tICE9PSAwIHx8IHRoaXMubGV2ZWwucm9vbSAhPT0gNykpIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLnggPSAtMjA7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zdGFydCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIHRoaXMueCA9IDIyMDtcbiAgdGhpcy55ID0gMzEwO1xufVxuXG5yZXNldCgpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbmdhbWVPdmVyKCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5yb29tID0gMjVcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5yZXN0YXJ0KCl7XG4gIGxldCBuZXdMZXZlbCA9IG5ldyBMZXZlbCgwLCB0aGlzLmN0eCwgdGhpcy5jYW52YXMpO1xuICB0aGlzLmxldmVsID0gbmV3TGV2ZWw7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVZpZXc7IiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcbmNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vZ2FtZV92aWV3XCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAvLyBiYWNrZ3JvdW5kQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhczJcIik7XG4gIC8vIGJhY2tncm91bmRDdHggPSBiYWNrZ3JvdW5kQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiBcbiAgbGV0IGxldmVsID0gbmV3IExldmVsKDAsIGN0eCwgY2FudmFzKTtcbiAgbmV3IEdhbWVWaWV3KGxldmVsLCBjdHgsIGNhbnZhcyk7XG59KTsiLCJjbGFzcyBMZXZlbCB7XG4gIGNvbnN0cnVjdG9yKG51bWJlciwgY3R4LCBjYW52YXMpIHtcbiAgICB0aGlzLnJvb20gPSBudW1iZXI7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLnBsYXRmb3JtUGljID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wbGF0Zm9ybVBpYy5zcmMgPSBcImRpc3QvaW1hZ2VzL3BsYXRmb3JtLnBuZ1wiO1xuICAgIHRoaXMucGxhdGZvcm1XaWR0aCA9IDE1MDtcbiAgICB0aGlzLnBsYXRmb3JtSGVpZ2h0ID0gMjA7XG4gICAgdGhpcy5oZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaGVhcnQuc3JjID0gXCJkaXN0L2ltYWdlcy9oZWFydC5wbmdcIjtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTEgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MiA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkzID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTQgPSBmYWxzZTtcbiAgICB0aGlzLmZpcnN0U2NlbmUgPSB0cnVlO1xuICAgIHRoaXMua2V5MSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5MS5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5MiA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5Mi5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5MyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5My5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5NCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5NC5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5cyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5cy5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5Q291bnQgPSAwO1xuICAgIHRoaXMuZ3JlZW5LbmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmdyZWVuS25pZ2h0LnNyYyA9IFwiZGlzdC9pbWFnZXMvTWl0aGVyYWxLbmlnaHQucG5nXCI7XG4gICAgdGhpcy5wcmluY2VzcyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJpbmNlc3Muc3JjID0gXCJkaXN0L2ltYWdlcy9wcmluY2Vzcy5wbmdcIjtcbiAgICB0aGlzLmdvbGRLbmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmdvbGRLbmlnaHQuc3JjID0gXCJkaXN0L2ltYWdlcy9Hb2xkS25pZ2h0LnBuZ1wiXG4gICAgdGhpcy5nb2xkS25pZ2h0WCA9IDcwMDtcbiAgfVxuICBhZGRTY2VuZSgpIHtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiZGlzdC9pbWFnZXMvbGV2ZWwke3RoaXMucm9vbX0ucG5nXCJgXG4gICAgcGxhdGZvcm1zID0gdGhpcy5wbGF0Zm9ybXM7XG4gICAgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgcGxhdGZvcm1XaWR0aCA9IHRoaXMucGxhdGZvcm1XaWR0aDtcbiAgICBwbGF0Zm9ybUhlaWdodCA9IHRoaXMucGxhdGZvcm1IZWlnaHRcbiAgICBpZiAodGhpcy5yb29tID09PSAwKSB7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgY29udHJvbCBIZW5yeSB3aG8gaXMgYSBjb2FsIG1pbmVyIGZyb20gdGhlIGtpbmdkb20gb2YgVHJvbWlkZS5cIiwgMzAsIDUwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgaGFzIGFsd2F5cyBrZXB0IGEgbG93IHByb2ZpbGUsIGRldGVybWluZWQgdG8gZG8gaGlzIGpvYiBhbmQgdGhlbiBlbmpveSB0aGUgcGVhY2UgYW5kIHF1aWV0IG9mIGhpcyBob21lLlwiLCAzMCwgNzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBuZXZlciBtYWRlIGFuIGVmZm9ydCB0byBiZSBrbm93biBvciBtYWtlIGZyaWVuZHMuIE5vIG9uZSBrbmV3IGhpbSBwZXJzb25hbGx5IGFuZCBoZSBsaWtlZCBpdCB0aGF0IHdheS5cIiwgMzAsIDkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhlIHByaW5jZXNzIGhhcyBiZWVuIGtpZG5hcHBlZCBhbmQgYWxsIGVmZm9ydHMgdG8gc2F2ZSBoZXIgaGF2ZSBmYWlsZWQuIEFsdGhvdWdoIEhlbnJ5IGhhcyBoZWFyZCBvZiB0aGUgc2l0dWF0aW9uLFwiLCAzMCwgMTEwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiaXQgd2Fzbid0IHNvbWV0aGluZyBoZSB3YXMgaW50ZXJlc3RlZCBpbiBnZXR0aW5nIGludm9sdmVkIGluLiBBcyBoZSB3YXMgd2Fsa2luZyB0byB3b3JrIGhlIHNhdyBhIGZsaWVyIG9mZmVyaW5nXCIsIDMwLCAxMzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJhIG1ham9yIHJld2FyZCB0byBhbnlvbmUgdGhhdCBjYW4gaGVscCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhlIG9uZSB0aGluZyBIZW5yeSBkb2VzIGNhcmUgZm9yIGlzIG1vbmV5LlwiLCAzMCwgMTUwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmVlZHMgdG8gZmluZCB0aGUgNCBrZXlzIHRvIGdldCBpbnRvIHRoZSBlbmVteSBjYXN0bGUgYW5kIHNhdmUgdGhlIHByaW5jZXNzLiBUaGlzIGlzIHdoZXJlIGhpcyBzdG9yeSBiZWdpbnMuIFwiLCAzMCwgMTcwKTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFNwYWNlYmFyIHRvIHN0YXJ0LicsIDIzMCwgMjE1KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSkge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjExMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDgwMCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMjAsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNzAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMzAsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MVwiLFxuICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICB5OiAyNDAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAzKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxMDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MlwiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjYwLFxuICAgICAgICB5OiAxNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMTUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjUwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTMgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5M1wiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2MDAsXG4gICAgICAgIHk6IDc1LFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTUwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTMwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgNzAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNDc1LFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUzMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDU1MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXk0XCIsXG4gICAgICAgICAgeDogMjI1LFxuICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDYpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIxMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDYwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIyLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA3MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NzAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA3MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDcpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBmYWlsZWQgdG8gc2F2ZSB0aGUgUHJpbmNlc3MuXCIsIDE3MCwgMTAwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBTcGFjZWJhciB0byB0cnkgYWdhaW4uJywgMTgwLCAxNTApO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdUZXh0Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyl7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cy5ibCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd19wbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdChwbGF0Zm9ybXNbaV0ueCwgcGxhdGZvcm1zW2ldLnksIHBsYXRmb3Jtc1tpXS53aWR0aCwgcGxhdGZvcm1zW2ldLmhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wbGF0Zm9ybVBpYywgMCwgMCwgOTYsIDk2LCBwbGF0Zm9ybXNbaV0ueCwgcGxhdGZvcm1zW2ldLnksIHBsYXRmb3Jtc1tpXS53aWR0aCwgcGxhdGZvcm1zW2ldLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hlYXJ0KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaGVhcnQsIDAsIDAsIDEyNSwgMTI1LCA2NTAsIDEwLCAzMCwgMzApXG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMubGl2ZXMsIDYzMiwgMzIpO1xuICB9XG5cbiAgZHJhd0tleUNvdW50KCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDU2MCwgMTAsIDIwMCwgNTApXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5cywgMzIsIDAsIDMyLCAzMiwgNTkwLCAxMiwgMzAsIDMwKTtcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5rZXlDb3VudCwgNTcwLCAzMik7XG4gIH1cblxuICBkcmF3X2tleTEoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkxLCAwLCAwLCAzMiwgMzIsIDYwMCwgMjQwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkyKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MiwgMzIsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTMoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MywgNjQsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5NCwgOTYsIDAsIDMyLCAzMiwgMjI1LCAzNDAsIDMwLCAzMCk7XG4gIH1cblxuICB1cGRhdGVTY2VuZSh4LCB5LCBjdXJyZW50RnJhbWUpe1xuICAgIGxldCBjb2w7XG4gICAgaWYgKHRoaXMucm9vbSAhPSAwICYmIHRoaXMucm9vbSAhPSAyNSl7XG4gICAgdGhpcy5kcmF3S2V5Q291bnQoKTtcbiAgICB0aGlzLmRyYXdIZWFydCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpe1xuICAgICAgaWYgKHggPCA0MDAgJiYgeCA+IDIwMCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goOTAsIDI4MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdHb29kIGx1Y2sgSGVucnksJywgOTUsIDMwMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdJIGtub3cgeW91IGNhbicsIDk1LCAzMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnZG8gaXQhJywgOTUsIDMyMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg5MCwgMjgwLCAxMDAsIDUwKTtcbiAgICB9XG5cbiAgICAgIGlmICh4IDwgODAwICYmIHggPiA1MDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQwMCwgMjYwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgYXJlbid0IGdvaW5nXCIsIDQxMCwgMjgwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ3RvIGxhc3QgNSBtaW51dGVzJywgNDEwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIm91dCB0aGVyZS5cIiwgNDEwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDQwMCwgMjYwLCAxMDAsIDUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICAgIHRoaXMuZHJhd19rZXkxKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpIHtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSB0cnVlKXtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMzAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KSB7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTMgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZHJhd19rZXkzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSB0cnVlKXtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMwMCxcbiAgICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAzMDAsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA1KXtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLmRyYXdfa2V5NCgpO1xuICAgICAgfSAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA2KXtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTMgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIGNvbCA9IGN1cnJlbnRGcmFtZSAlIDEwXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzMjAsIDMxMCwgNjUsIDY1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ncmVlbktuaWdodCwgMzIgKiBjb2wsIDAsIDMyLCAzMiwgLTM4NSwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjIwLCAyNzAsIDEyMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBtdXN0IGhhdmUgYWxsIDRcIiwgMjMwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgna2V5cyB0byBlbnRlciB0aGUgY2FzdGxlLicsIDIzMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjAsIDI3MCwgMTIwLCA1MCk7XG4gICAgICAgIGlmICh4ID4gMjYwICYmIHggPCAzNTApe1xuICAgICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjYwLCAyNzAsIDE1MCwgMjUsIDUpO1xuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBSIHRvIGVudGVyIHRoZSBjYXN0bGUuXCIsIDI3MCwgMjkwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjYwLCAyNzAsIDE1MCwgMjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgICBjb2wgPSA3O1xuICAgICAgICBpZiAoY3VycmVudEZyYW1lICUgOCA9PT0gMCl7XG4gICAgICAgICBjb2wgPSA4O1xuICAgICAgICB9XG4gICAgICAgIHJvdyA9IDI7XG4gICAgICAgIGxldCBwcmluY2Vzc1ggPSA1MDA7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLmdvbGRLbmlnaHRYLCAzMDAsIDg1LCA4NSlcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBjb2wsIHJvdyAqIDgyLCA4MSwgODIsIHByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgXG4gICAgICBpZiAoeCA8IDI1MCAmJiB0aGlzLmZpcnN0U2NlbmUgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDM5MCwgMjkwLCAxNTAsIDQwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGxlYXNlIHNhdmUgbWUhXCIsIDQwMCAsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhlIGV2aWwga25pZ2h0IGlzIGNvbWluZyFcIiwgNDAwLCAzMjApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM5MCwgMjkwLCAxNTAsIDQwKTtcbiAgICAgIH1cbiAgICAgIGlmICh4ID4gMjYwICYmIHRoaXMuZmlyc3RTY2VuZSA9PT0gdHJ1ZSl7XG4gICAgICAgIGNvbCA9IChjdXJyZW50RnJhbWUpICUgMTA7XG4gICAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID4gMzUwKSB7XG4gICAgICAgICAgdGhpcy5nb2xkS25pZ2h0WCAtPSA1O1xuICAgICAgICAgIHJvdyA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICByb3cgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZ29sZEtuaWdodCwgMzIgKiBjb2wsIHJvdyAqIDMyLCAzMiwgMzIsIC10aGlzLmdvbGRLbmlnaHRYIC0gODUsIDMwMCwgODUsIDg1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA9PT0gMzUwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyNDAsIDIzMCwgMTUwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJPaCBtYW4gdGhhbmsgZ29kIHlvdVwiLCAyNTAsIDI1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYXJlIGhlcmUuIEV2ZXJ5b25lIGhhc1wiLCAyNTAsIDI2MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiaXQgYWxsIHdyb25nLlwiLCAyNjAsIDI3MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIGNvbCwgcm93ICogODIsIDgxLCA4MiwgcHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG5cblxuICAgIH1cblxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgICB0aGlzLmRyYXdUZXh0Qm94KDQwMCwgMjYwLCAxMDAsIDUwLCA1KVxuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR2FtZSBPdmVyXCIsIDQxMCwgMjgwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBTcGFjZWJhciB0byB0cnkgYWdhaW4uJywgNDEwLCAyOTApO1xuICAgIH1cbn1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZXZlbDtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9