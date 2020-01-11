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
      this.stillFrame = Math.floor(this.oldFrame % 9 / 3);
      this.srcX = this.curFrame * width + width;
      this.ctx.clearRect(this.x, this.y, width * 2, height * 2);
      this.level.updateScene(this.x, this.y, this.oldFrame);
      this.inAir = true;

      if (this.left && this.level.disabled === false && (this.x > -20 || this.level.room != 1 && this.level.room != 7)) {
        this.speedX = 15;
        this.x -= this.speedX;
      }

      if (this.right && this.level.disabled === false && (this.x < 620 || this.level.room != 7 && this.level.room != 6)) {
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

      if (this.x > 670 && this.level.room != 7 && this.level.room != 6) {
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

      if (this.level.disabled === true && this.level.princessDisabled === true) {
        this.srcX = this.stillFrame * width;
        this.srcY = 7 * height;
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
      if (e.key === "d" || e.keyCode === 39) {
        this.moveRight();
      } else if (e.key === "a" || e.keyCode === 37) {
        this.moveLeft();
      }

      if ((e.key === "w" || e.keyCode === 38) && e.repeat === false && (this.y === 310 || this.speedY === 0) && this.y <= 310) {
        this.jump();
      }

      if (e.key === "c" && this.level.room === 6 && this.x > 260 && this.x < 350 && e.repeat === false && this.foundKeys() === true) {
        this.enter();
      }

      if (e.key === "c" && this.level.room === 25 && e.repeat === false) {
        this.restart();
      }

      if (e.key === "c" && this.level.room === 0 && e.repeat === false) {
        this.start();
      }

      if (e.key === "p" && this.level.room === 1 && e.repeat === false) {
        this.superMode = !this.superMode;
      }
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(e) {
      if (e.key === "d" || e.keyCode === 39) {
        this.right = false;
        this.still = true;
      } else if (e.key === "a" || e.keyCode === 37) {
        this.left = false;
        this.still = true;
      }
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
      if (this.level.room !== 25 && this.level.room !== 0 && this.level.room !== 7) this.level.room += 1;
      this.clear();
      this.level.addScene();
    }
  }, {
    key: "scrollLeft",
    value: function scrollLeft() {
      if (this.level.room !== 25 && this.level.room !== 0 && this.level.room !== 7) this.level.room -= 1;
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
  var ctx = canvas.getContext("2d");
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
    this.secondScene = true;
    this.princessSwordCount = 0;
    this.knightDead = false;
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
    this.princessX = 500;
    this.goldKnight = new Image();
    this.goldKnight.src = "dist/images/GoldKnight.png";
    this.goldKnightX = 700;
    this.missile = new Image();
    this.missile.src = "dist/images/princess.png";
    this.fired = 0;
    this.princessDisabled = false;
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
        this.ctx.fillText("Use the left, right, up arrow keys or A and D to move left/right and W to jump. Note: There is no double jump.", 30, 190);
        this.ctx.font = '16pt Calibri';
        this.ctx.fillText('Press C to start.', 260, 215);
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
        this.ctx.fillText('Press C to try again.', 220, 150);
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
    key: "drawPlatforms",
    value: function drawPlatforms() {
      this.ctx.fillStyle = "black";

      for (var i = 0; i < this.platforms.length; i++) {
        this.ctx.drawImage(this.platformPic, 0, 0, 96, 96, this.platforms[i].x, this.platforms[i].y, this.platforms[i].width, this.platforms[i].height);
      }
    }
  }, {
    key: "drawItems",
    value: function drawItems(currentFrame) {
      for (var i = 0; i < this.items.length; i++) {
        this.ctx.drawImage(this.missile, 891, 82, 81, 82, this.items[i].x, 290, 100, 100);
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
      var princessCol;
      var princessRow = 2;
      var knightCol;
      var knightRow;

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
        this.drawPlatforms();

        if (this.foundKey1 === false) {
          this.draw_key1();
        }
      } else if (this.room === 3) {
        this.drawPlatforms();

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
        this.drawPlatforms();

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
        this.drawPlatforms();

        if (this.foundKey4 === false) {
          this.draw_key4();
        }
      } else if (this.room === 6) {
        this.drawPlatforms();

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
            this.ctx.fillText("Press C to enter the castle.", 270, 290);
          } else {
            this.ctx.clearRect(260, 270, 150, 25);
          }
        }
      } else if (this.room === 7) {
        this.ctx.clearRect(0, 300, 1000, 100);
        this.ctx.clearRect(this.goldKnightX, 300, 85, 85);

        if (this.firstScene === true) {
          princessCol = 7;

          if (currentFrame % 8 === 0) {
            princessCol = 8;
          }

          this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
        }

        if (x < 250 && this.firstScene === true) {
          this.drawTextBox(390, 290, 150, 40, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Please save me! The", 400, 310);
          this.ctx.fillText("evil knight is coming!", 400, 323);
        } else {
          this.ctx.clearRect(390, 290, 150, 40);
        }

        knightRow = 1;

        if (x > 260 || this.knightDead === true) {
          knightCol = currentFrame % 10;

          if (this.goldKnightX > 350) {
            this.goldKnightX -= 5;
            knightRow = 2;
          }

          this.disabled = true;
          this.ctx.scale(-1, 1);

          if (this.princessSwordCount > 1) {
            knightRow = 4;
          }

          if (knightRow === 4 && knightCol === 9) {
            this.knightDead = true;
          }

          if (this.knightDead === true) {
            knightCol = 9;
          }

          this.ctx.drawImage(this.goldKnight, 32 * knightCol, knightRow * 32, 32, 32, -this.goldKnightX - 85, 300, 85, 85);
          this.ctx.scale(-1, 1);
        }

        if (this.goldKnightX > 360 && this.goldKnightX < 600) {
          this.drawTextBox(130, 250, 180, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Hey you big dummy. You", 140, 272);
          this.ctx.fillText("better let the princess go!", 140, 285);
        }

        if (this.goldKnightX === 350 && this.princessX != 390 && this.knightDead === false) {
          this.firstScene = false;
          princessCol = currentFrame % 2;

          if (this.princessX > 390 && this.knightDead === false) {
            this.princessX -= 5;
          }

          this.ctx.clearRect(130, 250, 180, 55);
          this.drawTextBox(210, 230, 170, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Thank god you are here.", 220, 250);
          this.ctx.fillText("Everyone has it all wrong...", 220, 265);
          this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
        }

        if (this.princessX === 390) {
          this.ctx.clearRect(210, 230, 170, 80);

          if (this.secondScene === true) {
            princessCol = Math.floor(currentFrame % 17 / 4);
          } else {
            princessCol = Math.floor(currentFrame % 20 / 10);
          }

          if (princessCol === 4) {
            princessCol = 0;
            this.princessSwordCount += 1;
          }

          if (this.princessSwordCount === 2) {
            this.secondScene = false;
          }

          this.drawTextBox(460, 270, 180, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("How cute. You thought I was", 470, 290);
          this.ctx.fillText("the one that needed saving.", 470, 305);
          this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
        }

        if (this.knightDead === true && this.princessX < 650) {
          this.ctx.clearRect(460, 270, 180, 60);
          rand = Math.floor(Math.random() * 15);

          if (this.princessDisabled === true) {
            rand = 0;
          }

          princessCol = 9;

          if (rand % 2 === 0 && this.princessX < 600) {
            this.princessX += rand;
          } else {
            if (this.princessX > 0) {
              this.princessX -= rand;
            } else {
              this.princessX += rand;
            }
          }

          if (this.princessDisabled === true) {
            princessCol = Math.floor(currentFrame % 10 / 5);
          }

          rand2 = Math.random() * 100;

          if ((currentFrame % 50 === 0 || rand === 0) && this.princessDisabled === false) {
            this.fired += 1;
            princessCol = 10;
            this.items.push({
              name: "fireball",
              width: 85,
              height: 85,
              x: this.princessX,
              left: x < this.princessX
            });
          }

          if (x < this.princessX) {
            this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
          } else {
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, -this.princessX - 85, 300, 85, 85);
            this.ctx.scale(-1, 1);
          }

          for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].left === true) {
              this.items[i].x -= 10;
            } else {
              this.items[i].x += 10;
            }
          }

          if (this.items.length > 20) {
            this.items = this.items.slice(6, 25);
          }

          this.drawItems(currentFrame);
        }

        if (this.knightDead === true) {
          this.disabled = false;
        }
      }

      if (this.fired === 50) {
        this.princessDisabled = true;
        this.fired = 0;
      }

      if (this.princessDisabled === true && Math.abs(this.princessX - x) > 40) {
        this.drawTextBox(this.princessX + 50, 270, 180, 50, 5);
        this.ctx.font = 'bold 10pt Calibri';
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Looks like I will have to do", this.princessX + 60, 290);
        this.ctx.fillText("this the hard way", this.princessX + 60, 300);
      }

      if (this.princessDisabled === true && Math.abs(this.princessX - x) < 70) {
        this.disabled = true;
      }
    }
  }]);

  return Level;
}();

module.exports = Level;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwic2Nyb2xsUmlnaHQiLCJzY3JvbGxMZWZ0IiwiaSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkNoZWNrIiwiY29sbGlzaW9uTmFtZSIsImZvdW5kS2V5MSIsImtleUNvdW50IiwiZm91bmRLZXkyIiwiZm91bmRLZXkzIiwiZm91bmRLZXk0IiwibGl2ZXMiLCJyZXNldCIsImdhbWVPdmVyIiwicHJpbmNlc3NEaXNhYmxlZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZSIsImtleSIsImtleUNvZGUiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInJlcGVhdCIsImp1bXAiLCJmb3VuZEtleXMiLCJlbnRlciIsInJlc3RhcnQiLCJzdGFydCIsInBsYXRmb3JtIiwidmVjdG9yWCIsInZlY3RvclkiLCJjZW50ZXJXaWR0aHMiLCJjZW50ZXJIZWlnaHRzIiwiY29sbGlzaW9uRGlyZWN0aW9uIiwiYWJzIiwibmFtZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY2xlYXIiLCJuZXdMZXZlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJudW1iZXIiLCJwbGF0Zm9ybVBpYyIsInBsYXRmb3JtV2lkdGgiLCJwbGF0Zm9ybUhlaWdodCIsImhlYXJ0IiwiZmlyc3RTY2VuZSIsInNlY29uZFNjZW5lIiwicHJpbmNlc3NTd29yZENvdW50Iiwia25pZ2h0RGVhZCIsImtleTEiLCJrZXkyIiwia2V5MyIsImtleTQiLCJrZXlzIiwiZ3JlZW5LbmlnaHQiLCJwcmluY2VzcyIsInByaW5jZXNzWCIsImdvbGRLbmlnaHQiLCJnb2xkS25pZ2h0WCIsIm1pc3NpbGUiLCJmaXJlZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImJhY2tncm91bmRQb3NpdGlvblgiLCJwdXNoIiwicmFkaXVzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImJsIiwiY2xvc2VQYXRoIiwiZmlsbCIsImN1cnJlbnRGcmFtZSIsInN0cm9rZVN0eWxlIiwic3Ryb2tlVGV4dCIsInByaW5jZXNzQ29sIiwicHJpbmNlc3NSb3ciLCJrbmlnaHRDb2wiLCJrbmlnaHRSb3ciLCJkcmF3S2V5Q291bnQiLCJkcmF3SGVhcnQiLCJkcmF3VGV4dEJveCIsImRyYXdQbGF0Zm9ybXMiLCJkcmF3X2tleTEiLCJkcmF3X2tleTIiLCJkcmF3X2tleTMiLCJkcmF3X2tleTQiLCJjb2wiLCJyYW5kIiwicmFuZG9tIiwicmFuZDIiLCJzbGljZSIsImRyYXdJdGVtcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQywrQkFBRCxDQUFyQjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUJDLEdBQW5CLEVBQXdCQyxNQUF4QixFQUFnQ0MsYUFBaEMsRUFBK0M7QUFBQTs7QUFDN0MsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFD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QUFsQixFQUFrRCxLQUFLVCxTQUFMLEdBQWlCLEVBQW5FLEVBQXVFLEdBQXZFO0FBQ0EsYUFBS3RILEdBQUwsQ0FBUytILFFBQVQsQ0FBa0IsbUJBQWxCLEVBQXVDLEtBQUtULFNBQUwsR0FBaUIsRUFBeEQsRUFBNEQsR0FBNUQ7QUFDRDs7QUFFRCxVQUFJLEtBQUtoRCxnQkFBTCxLQUEwQixJQUExQixJQUFrQ3BCLElBQUksQ0FBQzBDLEdBQUwsQ0FBUyxLQUFLMEIsU0FBTCxHQUFpQnRHLENBQTFCLElBQStCLEVBQXJFLEVBQXdFO0FBQ3RFLGFBQUtxQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7QUFHSjs7Ozs7O0FBR0Q2QyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2RyxLQUFqQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5cbmNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IobGV2ZWwsIGN0eCwgY2FudmFzLCBiYWNrZ3JvdW5kQ3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLmJhY2tncm91bmRDdHggPSBiYWNrZ3JvdW5kQ3R4O1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLmJpbmRLZXlIYW5kbGVycygpO1xuICAgIHRoaXMuZmxpcFBsYXllciA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAwO1xuICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMuc3JjWCA9IDA7XG4gICAgdGhpcy5zcmNZID0gMDtcbiAgICB0aGlzLnggPSAzMDA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3BlZWQgPSAxMjtcbiAgICB0aGlzLnN1cGVyTW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDcwMCwgNDAwKTtcbiAgICB0aGlzLmxldmVsLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCl7XG4gICAgdGhpcy5kcmF3TWFpbkNoYXJhY3RlcigpO1xuICAgIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbiAgfVxuXG4gIGRyYXdNYWluQ2hhcmFjdGVyKCkge1xuICAgIGNvbnN0IHNwcml0ZVdpZHRoID0gMzUwO1xuICAgIGNvbnN0IHNwcml0ZUhlaWdodCA9IDQwNztcbiAgICBjb25zdCByb3dzID0gMTE7XG4gICAgY29uc3QgY29scyA9IDc7XG4gICAgdGhpcy50cmFja1JpZ2h0ID0gMTtcbiAgICB0aGlzLnRyYWNrTGVmdCA9IDE7XG4gICAgdGhpcy53aWR0aCA9IHNwcml0ZVdpZHRoIC8gY29scztcbiAgICB0aGlzLmhlaWdodCA9IHNwcml0ZUhlaWdodCAvIHJvd3M7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5vbGRGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnggPSAyMjA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3JjWD0gMDtcbiAgICB0aGlzLnNyY1k9IHRoaXMudHJhY2tSaWdodCAqIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgdGhpcy5zcGVlZFkgPSAxNTtcbiAgICB0aGlzLmNoYXJhY3Rlci5zcmMgPSBcImRpc3QvaW1hZ2VzL2FkdmVudHVyZXItU2hlZXQucG5nXCI7XG4gIH1cbiAgbWFpbkxvb3AodGltZSl7XG4gICAgdGhpcy51cGRhdGVGcmFtZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5mcmFtZUNvdW50LCB0aGlzLnRyYWNrTGVmdCwgdGhpcy50cmFja1JpZ2h0KVxuICAgIGlmICh0aGlzLmZhY2luZ0xlZnQgPT09IHRydWUpe1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICgtdGhpcy54IC0gKHRoaXMud2lkdGggKiAyKSksIHRoaXMueSwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7ICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgqMiwgdGhpcy5oZWlnaHQqMilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdXBlck1vZGUgPT09IGZhbHNlKXtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICAgIH0sIDEwMClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpXG4gICAgICB9LCA0MClcbiAgICB9XG4gIH1cblxuICB1cGRhdGVGcmFtZSh3aWR0aCwgaGVpZ2h0LCBmcmFtZUNvdW50LCB0cmFja0xlZnQsIHRyYWNrUmlnaHQpe1xuICAgIHRoaXMub2xkRnJhbWUgPSB0aGlzLm9sZEZyYW1lICsgMTtcbiAgICBcbiAgICB0aGlzLmN1ckZyYW1lID0gKHRoaXMuY3VyRnJhbWUgKyAxKSAlIGZyYW1lQ291bnQ7XG4gICAgdGhpcy5zdGlsbEZyYW1lID0gTWF0aC5mbG9vcigodGhpcy5vbGRGcmFtZSAlIDkpIC8gMylcbiAgICB0aGlzLnNyY1ggPSB0aGlzLmN1ckZyYW1lICogd2lkdGggKyB3aWR0aDtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoICogMiwgaGVpZ2h0ICogMik7XG4gICAgdGhpcy5sZXZlbC51cGRhdGVTY2VuZSh0aGlzLngsIHRoaXMueSwgdGhpcy5vbGRGcmFtZSk7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5sZWZ0ICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IGZhbHNlICYmICh0aGlzLnggPiAtMjAgfHwgKHRoaXMubGV2ZWwucm9vbSAhPTEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcpKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSAmJiAodGhpcy54IDwgNjIwIHx8ICh0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gNikpKXtcbiAgICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKXtcbiAgICAgIHRoaXMuc3BlZWRZID0gMTVcbiAgICAgIGlmICgzMTAgLSB0aGlzLnkgPiB0aGlzLnNwZWVkWSB8fCAodGhpcy5sZXZlbC5yb29tICE9IDEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDI1ICYmIHRoaXMubGV2ZWwucm9vbSAhPSAwICYmIHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDY3MCAmJiB0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gNil7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gLTIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQoKTtcbiAgICAgIHRoaXMueCA9IDY0MDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsLnBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLnBsYXRmb3Jtc1tpXSlcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgfHwgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJib3R0b21cIikge1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XG4gICAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sZXZlbC5pdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBjb2xsaXNpb25OYW1lID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLml0ZW1zW2ldKVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MVwiKXtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTEgPSB0cnVlO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNjAwLCAyNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MlwiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkyID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkzXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzg1LCAyNTAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTRcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjUsIDM0MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5NCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gNTAwICl7XG4gICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICB0aGlzLnkgPSAxMDtcbiAgICAgIHRoaXMueCA9IDIwO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxldmVsLmxpdmVzID09PSAwKXtcbiAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICB9XG5cblxuXG4gICAgaWYgKHRoaXMueSA9PT0gMzEwKSB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaW5BaXIgPT09IHRydWUpIHRoaXMuc3JjWSA9IGhlaWdodCAqIDI7XG4gICAgZWxzZSBpZiAodGhpcy5sZWZ0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja0xlZnQgKiBoZWlnaHQ7XG4gICAgZWxzZSBpZiAodGhpcy5yaWdodCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tSaWdodCAqIGhlaWdodDtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3JjWCA9ICh0aGlzLnN0aWxsRnJhbWUpICogd2lkdGg7IFxuICAgICAgdGhpcy5zcmNZID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlKXtcbiAgICAgIHRoaXMuc3JjWCA9ICh0aGlzLnN0aWxsRnJhbWUpICogd2lkdGhcbiAgICAgIHRoaXMuc3JjWSA9IDcgKiBoZWlnaHRcbiAgICB9XG4gIH1cbiAgXG4gIG1vdmVMZWZ0KCl7XG4gICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IHRydWU7XG4gIH1cblxuICBtb3ZlUmlnaHQoKXtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gIH1cblxuICBqdW1wKCl7XG4gICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gIH1cblxuICBiaW5kS2V5SGFuZGxlcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIiB8fCBlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIgfHwgZS5rZXlDb2RlID09PSAzNykge1xuICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgfVxuICBpZiAoKGUua2V5ID09PSBcIndcIiB8fCBlLmtleUNvZGUgPT09IDM4KSAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgKHRoaXMueSA9PT0gMzEwIHx8IHRoaXMuc3BlZWRZID09PSAwKSAmJiB0aGlzLnkgPD0gMzEwKSB7XG4gICAgdGhpcy5qdW1wKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNiAmJiB0aGlzLnggPiAyNjAgJiYgdGhpcy54IDwgMzUwICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiB0aGlzLmZvdW5kS2V5cygpID09PSB0cnVlKXtcbiAgICB0aGlzLmVudGVyKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgZS5yZXBlYXQgPT09IGZhbHNlKXtcbiAgICB0aGlzLnJlc3RhcnQoKTtcbiAgfVxuXG4gIGlmIChlLmtleSA9PT0gXCJjXCIgJiYgdGhpcy5sZXZlbC5yb29tID09PSAwICYmIGUucmVwZWF0ID09PSBmYWxzZSkge1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwicFwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDEgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnN1cGVyTW9kZSA9ICF0aGlzLnN1cGVyTW9kZTtcbiAgICB9XG5cbn1cblxuIGtleVVwSGFuZGxlcihlKSB7XG4gICBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbiAgIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIiB8fCBlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbn1cblxuZm91bmRLZXlzKCl7XG4gIHJldHVybiB0aGlzLmxldmVsLmZvdW5kS2V5MSAmJiB0aGlzLmxldmVsLmZvdW5kS2V5MiAmJiB0aGlzLmxldmVsLmZvdW5kS2V5MyAmJiB0aGlzLmxldmVsLmZvdW5kS2V5NFxufVxuXG5jb2xsaXNpb25DaGVjayhwbGF0Zm9ybSl7XG4gIGNvbnN0IHZlY3RvclggPSAodGhpcy54ICsgKHRoaXMud2lkdGgpKSAtIChwbGF0Zm9ybS54ICsgKHBsYXRmb3JtLndpZHRoIC8gMikpO1xuICBjb25zdCB2ZWN0b3JZID0gKHRoaXMueSArICh0aGlzLmhlaWdodCkpIC0gKHBsYXRmb3JtLnkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMikpO1xuXG4gIGNvbnN0IGNlbnRlcldpZHRocyA9ICh0aGlzLndpZHRoLzIpICsgKHBsYXRmb3JtLndpZHRoIC8gMik7XG4gIGNvbnN0IGNlbnRlckhlaWdodHMgPSAodGhpcy5oZWlnaHQpICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpO1xuXG5cbiAgbGV0IGNvbGxpc2lvbkRpcmVjdGlvbjtcblxuICBpZiAoTWF0aC5hYnModmVjdG9yWCkgPCBjZW50ZXJXaWR0aHMgJiYgTWF0aC5hYnModmVjdG9yWSkgPCBjZW50ZXJIZWlnaHRzKSBcbiAge1xuXG4gICAgaWYgKHBsYXRmb3JtLm5hbWUpIHJldHVybiBwbGF0Zm9ybS5uYW1lO1xuICAgIGNvbnN0IG9mZnNldFggPSBjZW50ZXJXaWR0aHMgLSBNYXRoLmFicyh2ZWN0b3JYKTtcbiAgICBjb25zdCBvZmZzZXRZID0gY2VudGVySGVpZ2h0cyAtIE1hdGguYWJzKHZlY3RvclkpO1xuXG4gICAgaWYgKG9mZnNldFggPCBvZmZzZXRZKVxuICAgICAgICBpZiAodmVjdG9yWCA+IDApe1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgICAgICAgdGhpcy54ICs9IG9mZnNldFg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgICAgICAgdGhpcy54IC09IG9mZnNldFg7XG4gICAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh2ZWN0b3JZID4gMCl7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwidG9wXCI7XG4gICAgICAgIHRoaXMueSArPSBvZmZzZXRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgdGhpcy55IC09IG9mZnNldFlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbGxpc2lvbkRpcmVjdGlvbjtcbn1cblxuc2Nyb2xsUmlnaHQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMCAmJiB0aGlzLmxldmVsLnJvb20gIT09IDcpKSB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc2Nyb2xsTGVmdCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiAodGhpcy5sZXZlbC5yb29tICE9PSAwICYmIHRoaXMubGV2ZWwucm9vbSAhPT0gNykpIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLnggPSAtMjA7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zdGFydCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIHRoaXMueCA9IDIyMDtcbiAgdGhpcy55ID0gMzEwO1xufVxuXG5yZXNldCgpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbmdhbWVPdmVyKCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5yb29tID0gMjVcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5yZXN0YXJ0KCl7XG4gIGxldCBuZXdMZXZlbCA9IG5ldyBMZXZlbCgwLCB0aGlzLmN0eCwgdGhpcy5jYW52YXMpO1xuICB0aGlzLmxldmVsID0gbmV3TGV2ZWw7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVZpZXc7IiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcbmNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vZ2FtZV92aWV3XCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiBcbiAgbGV0IGxldmVsID0gbmV3IExldmVsKDAsIGN0eCwgY2FudmFzKTtcbiAgbmV3IEdhbWVWaWV3KGxldmVsLCBjdHgsIGNhbnZhcyk7XG59KTsiLCJjbGFzcyBMZXZlbCB7XG4gIGNvbnN0cnVjdG9yKG51bWJlciwgY3R4LCBjYW52YXMpIHtcbiAgICB0aGlzLnJvb20gPSBudW1iZXI7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLnBsYXRmb3JtUGljID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wbGF0Zm9ybVBpYy5zcmMgPSBcImRpc3QvaW1hZ2VzL3BsYXRmb3JtLnBuZ1wiO1xuICAgIHRoaXMucGxhdGZvcm1XaWR0aCA9IDE1MDtcbiAgICB0aGlzLnBsYXRmb3JtSGVpZ2h0ID0gMjA7XG4gICAgdGhpcy5oZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaGVhcnQuc3JjID0gXCJkaXN0L2ltYWdlcy9oZWFydC5wbmdcIjtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTEgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MiA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkzID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTQgPSBmYWxzZTtcbiAgICB0aGlzLmZpcnN0U2NlbmUgPSB0cnVlO1xuICAgIHRoaXMuc2Vjb25kU2NlbmUgPSB0cnVlO1xuICAgIHRoaXMucHJpbmNlc3NTd29yZENvdW50ID0gMDtcbiAgICB0aGlzLmtuaWdodERlYWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleTEgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTEuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTIuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTQuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleXMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleXMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleUNvdW50ID0gMDtcbiAgICB0aGlzLmdyZWVuS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5ncmVlbktuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL01pdGhlcmFsS25pZ2h0LnBuZ1wiO1xuICAgIHRoaXMucHJpbmNlc3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByaW5jZXNzLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5wcmluY2Vzc1ggPSA1MDA7XG4gICAgdGhpcy5nb2xkS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5nb2xkS25pZ2h0LnNyYyA9IFwiZGlzdC9pbWFnZXMvR29sZEtuaWdodC5wbmdcIlxuICAgIHRoaXMuZ29sZEtuaWdodFggPSA3MDA7XG4gICAgdGhpcy5taXNzaWxlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5taXNzaWxlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5maXJlZCA9IDA7XG4gICAgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImRpc3QvaW1hZ2VzL2xldmVsJHt0aGlzLnJvb219LnBuZ1wiYFxuICAgIHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHBsYXRmb3JtV2lkdGggPSB0aGlzLnBsYXRmb3JtV2lkdGg7XG4gICAgcGxhdGZvcm1IZWlnaHQgPSB0aGlzLnBsYXRmb3JtSGVpZ2h0XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCkge1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGNvbnRyb2wgSGVucnkgd2hvIGlzIGEgY29hbCBtaW5lciBmcm9tIHRoZSBraW5nZG9tIG9mIFRyb21pZGUuXCIsIDMwLCA1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIGhhcyBhbHdheXMga2VwdCBhIGxvdyBwcm9maWxlLCBkZXRlcm1pbmVkIHRvIGRvIGhpcyBqb2IgYW5kIHRoZW4gZW5qb3kgdGhlIHBlYWNlIGFuZCBxdWlldCBvZiBoaXMgaG9tZS5cIiwgMzAsIDcwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmV2ZXIgbWFkZSBhbiBlZmZvcnQgdG8gYmUga25vd24gb3IgbWFrZSBmcmllbmRzLiBObyBvbmUga25ldyBoaW0gcGVyc29uYWxseSBhbmQgaGUgbGlrZWQgaXQgdGhhdCB3YXkuXCIsIDMwLCA5MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRoZSBwcmluY2VzcyBoYXMgYmVlbiBraWRuYXBwZWQgYW5kIGFsbCBlZmZvcnRzIHRvIHNhdmUgaGVyIGhhdmUgZmFpbGVkLiBBbHRob3VnaCBIZW5yeSBoYXMgaGVhcmQgb2YgdGhlIHNpdHVhdGlvbixcIiwgMzAsIDExMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIml0IHdhc24ndCBzb21ldGhpbmcgaGUgd2FzIGludGVyZXN0ZWQgaW4gZ2V0dGluZyBpbnZvbHZlZCBpbi4gQXMgaGUgd2FzIHdhbGtpbmcgdG8gd29yayBoZSBzYXcgYSBmbGllciBvZmZlcmluZ1wiLCAzMCwgMTMwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYSBtYWpvciByZXdhcmQgdG8gYW55b25lIHRoYXQgY2FuIGhlbHAgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoZSBvbmUgdGhpbmcgSGVucnkgZG9lcyBjYXJlIGZvciBpcyBtb25leS5cIiwgMzAsIDE1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5lZWRzIHRvIGZpbmQgdGhlIDQga2V5cyB0byBnZXQgaW50byB0aGUgZW5lbXkgY2FzdGxlIGFuZCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhpcyBpcyB3aGVyZSBoaXMgc3RvcnkgYmVnaW5zLiBcIiwgMzAsIDE3MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFycm93IGtleXMgb3IgQSBhbmQgRCB0byBtb3ZlIGxlZnQvcmlnaHQgYW5kIFcgdG8ganVtcC4gTm90ZTogVGhlcmUgaXMgbm8gZG91YmxlIGp1bXAuXCIsIDMwLCAxOTAgKVxuICAgICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQuJywgMjYwLCAyMTUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yb29tID09PSAxKSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItMjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMTEwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgODAwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAyMCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE3MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAzMCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkxXCIsXG4gICAgICAgICAgeDogNjAwLFxuICAgICAgICAgIHk6IDI0MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDEwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM4MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI2MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkyXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NjAsXG4gICAgICAgIHk6IDE0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMxNSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0NDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkzXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDYwMCxcbiAgICAgICAgeTogNzUsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1NTAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA3MCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA0NzUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTMwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE0MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNTUwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA1MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTRcIixcbiAgICAgICAgICB4OiAyMjUsXG4gICAgICAgICAgeTogMzQwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNikge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjIsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDcwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY3MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDcwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGZhaWxlZCB0byBzYXZlIHRoZSBQcmluY2Vzcy5cIiwgMTcwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gdHJ5IGFnYWluLicsIDIyMCwgMTUwKTtcbiAgICB9XG4gIH1cblxuICBkcmF3VGV4dEJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpe1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpdXMuYmwsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdQbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBsYXRmb3JtUGljLCAwLCAwLCA5NiwgOTYsIHRoaXMucGxhdGZvcm1zW2ldLngsIHRoaXMucGxhdGZvcm1zW2ldLnksIHRoaXMucGxhdGZvcm1zW2ldLndpZHRoLCB0aGlzLnBsYXRmb3Jtc1tpXS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdJdGVtcyhjdXJyZW50RnJhbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLm1pc3NpbGUsIDg5MSAsIDgyLCA4MSwgODIsIHRoaXMuaXRlbXNbaV0ueCwgMjkwLCAxMDAsIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hlYXJ0KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaGVhcnQsIDAsIDAsIDEyNSwgMTI1LCA2NTAsIDEwLCAzMCwgMzApXG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMubGl2ZXMsIDYzMiwgMzIpO1xuICB9XG5cbiAgZHJhd0tleUNvdW50KCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDU2MCwgMTAsIDIwMCwgNTApXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5cywgMzIsIDAsIDMyLCAzMiwgNTkwLCAxMiwgMzAsIDMwKTtcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5rZXlDb3VudCwgNTcwLCAzMik7XG4gIH1cblxuICBkcmF3X2tleTEoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkxLCAwLCAwLCAzMiwgMzIsIDYwMCwgMjQwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkyKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MiwgMzIsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTMoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MywgNjQsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5NCwgOTYsIDAsIDMyLCAzMiwgMjI1LCAzNDAsIDMwLCAzMCk7XG4gIH1cblxuICB1cGRhdGVTY2VuZSh4LCB5LCBjdXJyZW50RnJhbWUpe1xuICAgIGxldCBwcmluY2Vzc0NvbDtcbiAgICBsZXQgcHJpbmNlc3NSb3cgPSAyO1xuICAgIGxldCBrbmlnaHRDb2w7XG4gICAgbGV0IGtuaWdodFJvdztcblxuICAgIGlmICh0aGlzLnJvb20gIT0gMCAmJiB0aGlzLnJvb20gIT0gMjUpe1xuICAgIHRoaXMuZHJhd0tleUNvdW50KCk7XG4gICAgdGhpcy5kcmF3SGVhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yb29tID09PSAxKXtcbiAgICAgIGlmICh4IDwgNDAwICYmIHggPiAyMDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDkwLCAyODAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnR29vZCBsdWNrIEhlbnJ5LCcsIDk1LCAzMDApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnSSBrbm93IHlvdSBjYW4nLCA5NSwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2RvIGl0IScsIDk1LCAzMjApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgfVxuXG4gICAgICBpZiAoeCA8IDgwMCAmJiB4ID4gNTAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGFyZW4ndCBnb2luZ1wiLCA0MTAsIDI4MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCd0byBsYXN0IDUgbWludXRlcycsIDQxMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJvdXQgdGhlcmUuXCIsIDQxMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg0MDAsIDI2MCwgMTAwLCA1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICAgIHRoaXMuZHJhd19rZXkxKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpIHtcbiAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDEzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpIHtcbiAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMDAsXG4gICAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMzAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLmRyYXdfa2V5NCgpO1xuICAgICAgfSAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA2KXtcbiAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgY29sID0gY3VycmVudEZyYW1lICUgMTBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDMyMCwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmdyZWVuS25pZ2h0LCAzMiAqIGNvbCwgMCwgMzIsIDMyLCAtMzg1LCAzMTAsIDY1LCA2NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyMjAsIDI3MCwgMTIwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IG11c3QgaGF2ZSBhbGwgNFwiLCAyMzAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdrZXlzIHRvIGVudGVyIHRoZSBjYXN0bGUuJywgMjMwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDIyMCwgMjcwLCAxMjAsIDUwKTtcbiAgICAgICAgaWYgKHggPiAyNjAgJiYgeCA8IDM1MCl7XG4gICAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyNjAsIDI3MCwgMTUwLCAyNSwgNSk7XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIEMgdG8gZW50ZXIgdGhlIGNhc3RsZS5cIiwgMjcwLCAyOTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyNjAsIDI3MCwgMTUwLCAyNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDcpe1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDMwMCwgMTAwMCwgMTAwKTtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLmdvbGRLbmlnaHRYLCAzMDAsIDg1LCA4NSlcbiAgICAgIGlmICh0aGlzLmZpcnN0U2NlbmUgPT09IHRydWUpe1xuICAgICAgIHByaW5jZXNzQ29sID0gNztcbiAgICAgICAgaWYgKGN1cnJlbnRGcmFtZSAlIDggPT09IDApe1xuICAgICAgICAgcHJpbmNlc3NDb2wgPSA4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICh4IDwgMjUwICYmIHRoaXMuZmlyc3RTY2VuZSA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMzkwLCAyOTAsIDE1MCwgNDAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGxlYXNlIHNhdmUgbWUhIFRoZVwiLCA0MDAgLCAzMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImV2aWwga25pZ2h0IGlzIGNvbWluZyFcIiwgNDAwLCAzMjMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM5MCwgMjkwLCAxNTAsIDQwKTtcbiAgICAgIH1cbiAgICAgIGtuaWdodFJvdyA9IDE7XG4gICAgICBpZiAoeCA+IDI2MCB8fCB0aGlzLmtuaWdodERlYWQgPT09IHRydWUpe1xuICAgICAgICBrbmlnaHRDb2wgPSAoY3VycmVudEZyYW1lKSAlIDEwO1xuICAgICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA+IDM1MCkge1xuICAgICAgICAgIHRoaXMuZ29sZEtuaWdodFggLT0gNTtcbiAgICAgICAgICBrbmlnaHRSb3cgPSAyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzU3dvcmRDb3VudCA+IDEpIHtcbiAgICAgICAgICBrbmlnaHRSb3cgPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtuaWdodFJvdyA9PT0gNCAmJiBrbmlnaHRDb2wgPT09IDkpe1xuICAgICAgICAgIHRoaXMua25pZ2h0RGVhZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5rbmlnaHREZWFkID09PSB0cnVlKXtcbiAgICAgICAgICBrbmlnaHRDb2wgPSA5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZ29sZEtuaWdodCwgMzIgKiBrbmlnaHRDb2wsIGtuaWdodFJvdyAqIDMyLCAzMiwgMzIsIC10aGlzLmdvbGRLbmlnaHRYIC0gODUsIDMwMCwgODUsIDg1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA+IDM2MCAmJiB0aGlzLmdvbGRLbmlnaHRYIDwgNjAwKVxuICAgICAge1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDEzMCwgMjUwLCAxODAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhleSB5b3UgYmlnIGR1bW15LiBZb3VcIiwgMTQwLCAyNzIpO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImJldHRlciBsZXQgdGhlIHByaW5jZXNzIGdvIVwiLCAxNDAsIDI4NSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID09PSAzNTAgJiYgdGhpcy5wcmluY2Vzc1ggIT0gMzkwICYmIHRoaXMua25pZ2h0RGVhZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLmZpcnN0U2NlbmUgPSBmYWxzZTtcbiAgICAgICAgcHJpbmNlc3NDb2wgPSBjdXJyZW50RnJhbWUgJSAyO1xuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPiAzOTAgJiYgdGhpcy5rbmlnaHREZWFkID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMucHJpbmNlc3NYIC09IDU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDEzMCwgMjUwLCAxODAsIDU1KTtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyMTAsIDIzMCwgMTcwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUaGFuayBnb2QgeW91IGFyZSBoZXJlLlwiLCAyMjAsIDI1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiRXZlcnlvbmUgaGFzIGl0IGFsbCB3cm9uZy4uLlwiLCAyMjAsIDI2NSk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByaW5jZXNzWCA9PT0gMzkwKXtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDIxMCwgMjMwLCAxNzAsIDgwKTtcbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kU2NlbmUgPT09IHRydWUpe1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMTcpIC8gNCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSBNYXRoLmZsb29yKChjdXJyZW50RnJhbWUgJSAyMCkgLyAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW5jZXNzQ29sID09PSA0KXtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IDA7XG4gICAgICAgICAgdGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzU3dvcmRDb3VudCA9PT0gMil7XG4gICAgICAgICAgdGhpcy5zZWNvbmRTY2VuZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goNDYwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSG93IGN1dGUuIFlvdSB0aG91Z2h0IEkgd2FzXCIsIDQ3MCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGUgb25lIHRoYXQgbmVlZGVkIHNhdmluZy5cIiwgNDcwLCAzMDUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSAmJiB0aGlzLnByaW5jZXNzWCA8IDY1MCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg0NjAsIDI3MCwgMTgwLCA2MClcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNSlcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgcmFuZCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcHJpbmNlc3NDb2wgPSA5XG4gICAgICAgIGlmIChyYW5kJTIgPT09IDAgJiYgdGhpcy5wcmluY2Vzc1ggPCA2MDApe1xuICAgICAgICB0aGlzLnByaW5jZXNzWCArPSByYW5kO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnByaW5jZXNzWCA+IDApe1xuICAgICAgICAgICAgIHRoaXMucHJpbmNlc3NYIC09IHJhbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmluY2Vzc1ggKz0gcmFuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSBNYXRoLmZsb29yKChjdXJyZW50RnJhbWUgJSAxMCkvNSk7XG4gICAgICAgIH1cbiAgICAgICAgcmFuZDIgPSBNYXRoLnJhbmRvbSgpKjEwMDtcbiAgICAgICAgaWYgKChjdXJyZW50RnJhbWUgJSA1MCA9PT0gMCB8fCByYW5kID09PSAwKSAmJiB0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IGZhbHNlKXtcbiAgICAgICAgICB0aGlzLmZpcmVkICs9IDE7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAxMFxuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBcImZpcmViYWxsXCIsXG4gICAgICAgICAgICB3aWR0aDogODUsXG4gICAgICAgICAgICBoZWlnaHQ6IDg1LFxuICAgICAgICAgICAgeDogdGhpcy5wcmluY2Vzc1gsXG4gICAgICAgICAgICBsZWZ0OiAoeCA8IHRoaXMucHJpbmNlc3NYKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPCB0aGlzLnByaW5jZXNzWCl7XG4gICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCAtdGhpcy5wcmluY2Vzc1ggLSA4NSwgMzAwLCA4NSwgODUpO1xuICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmxlZnQgPT09IHRydWUpe1xuICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnggLT0gMTA7XG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgdGhpcy5pdGVtc1tpXS54ICs9IDEwO1xuICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID4gMjApIHtcbiAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5zbGljZSg2LCAyNSlcbiAgICAgICAgfVxuICAgICAgIHRoaXMuZHJhd0l0ZW1zKGN1cnJlbnRGcmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlyZWQgPT09IDUwKXtcbiAgICAgIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmZpcmVkID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiBNYXRoLmFicyh0aGlzLnByaW5jZXNzWCAtIHgpID4gNDApe1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh0aGlzLnByaW5jZXNzWCArIDUwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTG9va3MgbGlrZSBJIHdpbGwgaGF2ZSB0byBkb1wiLCB0aGlzLnByaW5jZXNzWCArIDYwLCAyOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGlzIHRoZSBoYXJkIHdheVwiLCB0aGlzLnByaW5jZXNzWCArIDYwLCAzMDApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgTWF0aC5hYnModGhpcy5wcmluY2Vzc1ggLSB4KSA8IDcwKXtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuXG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==