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
    this.secondScene = true;
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
        this.ctx.clearRect(this.princessX, 300, 85, 85);
        this.ctx.clearRect(this.goldKnightX, 300, 85, 85);

        if (this.firstScene === true) {
          princessCol = 7;

          if (currentFrame % 8 === 0) {
            princessCol = 8;
          }

          this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
        }

        if (x < 250) {
          this.drawTextBox(390, 290, 150, 40, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Please save me! The", 400, 310);
          this.ctx.fillText("evil knight is coming!", 400, 323);
        } else {
          this.ctx.clearRect(390, 290, 150, 40);
        }

        knightRow = 1;

        if (x > 260) {
          knightCol = currentFrame % 10;

          if (this.goldKnightX > 350) {
            this.goldKnightX -= 5;
            knightRow = 2;
          }

          this.disabled = true;
          this.ctx.scale(-1, 1);
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

        if (this.goldKnightX === 350 && this.princessX != 390) {
          this.firstScene = false;
          princessCol = currentFrame % 2;

          if (this.princessX > 390) {
            this.princessX -= 5;
          }

          this.ctx.clearRect(130, 250, 180, 55);
          this.drawTextBox(210, 230, 170, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Thank god you are here.", 220, 250);
          this.ctx.fillText("Everyone has it all wrong", 220, 265);
          this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
        }

        if (this.princessX === 390) {
          this.ctx.clearRect(210, 230, 170, 80);
          this.drawTextBox(460, 270, 180, 50, 5);

          if (this.secondScene === true) {
            princessCol = Math.floor(currentFrame % 17 / 4);
          } else {
            princessCol = Math.floor(currentFrame % 20 / 10);
          }

          if (princessCol === 4) {
            this.secondScene = false;
          }

          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("How cute. You thought I was", 470, 290);
          this.ctx.fillText("the one that needed saving.", 470, 305);
          this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwic2Nyb2xsUmlnaHQiLCJzY3JvbGxMZWZ0IiwiaSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkNoZWNrIiwiY29sbGlzaW9uTmFtZSIsImZvdW5kS2V5MSIsImtleUNvdW50IiwiZm91bmRLZXkyIiwiZm91bmRLZXkzIiwiZm91bmRLZXk0IiwibGl2ZXMiLCJyZXNldCIsImdhbWVPdmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZm91bmRLZXlzIiwiZW50ZXIiLCJyZXN0YXJ0Iiwic3RhcnQiLCJwbGF0Zm9ybSIsInZlY3RvclgiLCJ2ZWN0b3JZIiwiY2VudGVyV2lkdGhzIiwiY2VudGVySGVpZ2h0cyIsImNvbGxpc2lvbkRpcmVjdGlvbiIsImFicyIsIm5hbWUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNsZWFyIiwibmV3TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibnVtYmVyIiwicGxhdGZvcm1QaWMiLCJwbGF0Zm9ybVdpZHRoIiwicGxhdGZvcm1IZWlnaHQiLCJoZWFydCIsImZpcnN0U2NlbmUiLCJzZWNvbmRTY2VuZSIsImtleTEiLCJrZXkyIiwia2V5MyIsImtleTQiLCJrZXlzIiwiZ3JlZW5LbmlnaHQiLCJwcmluY2VzcyIsInByaW5jZXNzWCIsImdvbGRLbmlnaHQiLCJnb2xkS25pZ2h0WCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImJhY2tncm91bmRQb3NpdGlvblgiLCJwdXNoIiwicmFkaXVzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImJsIiwiY2xvc2VQYXRoIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlVGV4dCIsImN1cnJlbnRGcmFtZSIsInByaW5jZXNzQ29sIiwicHJpbmNlc3NSb3ciLCJrbmlnaHRDb2wiLCJrbmlnaHRSb3ciLCJkcmF3S2V5Q291bnQiLCJkcmF3SGVhcnQiLCJkcmF3VGV4dEJveCIsImRyYXdfcGxhdGZvcm1z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LENBQVN1SCxJQUFULEdBQWdCLG1CQUFoQjtBQUNBLGVBQUt2SCxHQUFMLENBQVN3SCxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsZUFBS3hILEdBQUwsQ0FBU3lILFFBQVQsQ0FBa0IsNkJBQWxCLEVBQWlELEdBQWpELEVBQXNELEdBQXREO0FBQ0EsZUFBS3pILEdBQUwsQ0FBU3lILFFBQVQsQ0FBa0IsNkJBQWxCLEVBQWlELEdBQWpELEVBQXNELEdBQXREO0FBQ0EsZUFBS3pILEdBQUwsQ0FBUytDLFNBQVQsQ0FBbUIsS0FBS2tFLFFBQXhCLEVBQWtDLEtBQUt1QixXQUF2QyxFQUFvREMsV0FBVyxHQUFHLEVBQWxFLEVBQXNFLEVBQXRFLEVBQTBFLEVBQTFFLEVBQThFLEtBQUt2QixTQUFuRixFQUE4RixHQUE5RixFQUFtRyxFQUFuRyxFQUF1RyxFQUF2RztBQUNEO0FBR0YsT0E1RUksTUErRUEsSUFBSSxLQUFLNUQsSUFBTCxLQUFjLEVBQWxCLEVBQXFCO0FBQ3hCLGFBQUt3RixXQUFMLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEVBQWhDLEVBQW9DLENBQXBDO0FBQ0EsYUFBSzlJLEdBQUwsQ0FBU3VILElBQVQsR0FBZ0IsbUJBQWhCO0FBQ0EsYUFBS3ZILEdBQUwsQ0FBU3dILFNBQVQsR0FBcUIsT0FBckI7QUFDQSxhQUFLeEgsR0FBTCxDQUFTeUgsUUFBVCxDQUFrQixXQUFsQixFQUErQixHQUEvQixFQUFvQyxHQUFwQztBQUNBLGFBQUt6SCxHQUFMLENBQVN5SCxRQUFULENBQWtCLDhCQUFsQixFQUFrRCxHQUFsRCxFQUF1RCxHQUF2RDtBQUNEO0FBQ0o7Ozs7OztBQUdEekIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckcsS0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuXG5jbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgsIGNhbnZhcywgYmFja2dyb3VuZEN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZEN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmZsaXBQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5zdXBlck1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgdGhpcy5sZXZlbC5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpe1xuICAgIHRoaXMuZHJhd01haW5DaGFyYWN0ZXIoKTtcbiAgICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIH1cblxuICBkcmF3TWFpbkNoYXJhY3RlcigpIHtcbiAgICBjb25zdCBzcHJpdGVXaWR0aCA9IDM1MDtcbiAgICBjb25zdCBzcHJpdGVIZWlnaHQgPSA0MDc7XG4gICAgY29uc3Qgcm93cyA9IDExO1xuICAgIGNvbnN0IGNvbHMgPSA3O1xuICAgIHRoaXMudHJhY2tSaWdodCA9IDE7XG4gICAgdGhpcy50cmFja0xlZnQgPSAxO1xuICAgIHRoaXMud2lkdGggPSBzcHJpdGVXaWR0aCAvIGNvbHM7XG4gICAgdGhpcy5oZWlnaHQgPSBzcHJpdGVIZWlnaHQgLyByb3dzO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMub2xkRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy54ID0gMjIwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNyY1g9IDA7XG4gICAgdGhpcy5zcmNZPSB0aGlzLnRyYWNrUmlnaHQgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgIHRoaXMuc3BlZWRZID0gMTU7XG4gICAgdGhpcy5jaGFyYWN0ZXIuc3JjID0gXCJkaXN0L2ltYWdlcy9hZHZlbnR1cmVyLVNoZWV0LnBuZ1wiO1xuICB9XG4gIG1haW5Mb29wKHRpbWUpe1xuICAgIHRoaXMudXBkYXRlRnJhbWUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuZnJhbWVDb3VudCwgdGhpcy50cmFja0xlZnQsIHRoaXMudHJhY2tSaWdodClcbiAgICBpZiAodGhpcy5mYWNpbmdMZWZ0ID09PSB0cnVlKXtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAoLXRoaXMueCAtICh0aGlzLndpZHRoICogMikpLCB0aGlzLnksIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpOyAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoKjIsIHRoaXMuaGVpZ2h0KjIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSl7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpXG4gICAgICB9LCAxMDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgICAgfSwgNDApXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRnJhbWUod2lkdGgsIGhlaWdodCwgZnJhbWVDb3VudCwgdHJhY2tMZWZ0LCB0cmFja1JpZ2h0KXtcbiAgICB0aGlzLm9sZEZyYW1lID0gdGhpcy5vbGRGcmFtZSArIDE7XG4gICAgXG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIHRoaXMuc3RpbGxGcmFtZSA9IE1hdGguZmxvb3IoKHRoaXMub2xkRnJhbWUgJSA5KSAvIDMpXG4gICAgdGhpcy5zcmNYID0gdGhpcy5jdXJGcmFtZSAqIHdpZHRoICsgd2lkdGg7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueCwgdGhpcy55LCB3aWR0aCAqIDIsIGhlaWdodCAqIDIpO1xuICAgIHRoaXMubGV2ZWwudXBkYXRlU2NlbmUodGhpcy54LCB0aGlzLnksIHRoaXMub2xkRnJhbWUpO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMubGVmdCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSAmJiAodGhpcy54ID4gLTIwIHx8ICh0aGlzLmxldmVsLnJvb20gIT0xICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuaW5BaXIgPT09IHRydWUpe1xuICAgICAgdGhpcy5zcGVlZFkgPSAxNVxuICAgICAgaWYgKDMxMCAtIHRoaXMueSA+IHRoaXMuc3BlZWRZIHx8ICh0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gMjUgJiYgdGhpcy5sZXZlbC5yb29tICE9IDAgJiYgdGhpcy5zdXBlck1vZGUgPT09IGZhbHNlKSl7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMueSArPSAzMTAgLSB0aGlzLnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuanVtcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ICs9IDMwXG4gICAgICB0aGlzLnkgLT0gMzA7XG4gICAgICBpZiAodGhpcy5qdW1wSGVpZ2h0ID4gMTMwKXtcbiAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgICB0aGlzLmp1bXBIZWlnaHQgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54ID4gNjcwKXsgXG4gICAgICB0aGlzLnNjcm9sbFJpZ2h0KCk7XG4gICAgICB0aGlzLnggPSAtMjA7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPCAtMjAgJiYgdGhpcy5sZXZlbC5yb29tICE9IDEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCgpO1xuICAgICAgdGhpcy54ID0gNjQwO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWwucGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwucGxhdGZvcm1zW2ldKVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIiB8fCBkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidG9wXCIgfHwgZGlyZWN0aW9uID09PSBcImJvdHRvbVwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMDtcbiAgICAgICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmxldmVsLml0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGNvbGxpc2lvbk5hbWUgPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwuaXRlbXNbaV0pXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkxXCIpe1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg2MDAsIDI0MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkyXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzg1LCAyNTAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTIgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTNcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5NFwiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDIyNSwgMzQwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXk0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnkgPiA1MDAgKXtcbiAgICAgIHRoaXMubGV2ZWwubGl2ZXMgLT0gMTtcbiAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgdGhpcy54ID0gMjA7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGV2ZWwubGl2ZXMgPT09IDApe1xuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgIH1cblxuXG5cbiAgICBpZiAodGhpcy55ID09PSAzMTApIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gaGVpZ2h0ICogMjtcbiAgICBlbHNlIGlmICh0aGlzLmxlZnQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrTGVmdCAqIGhlaWdodDtcbiAgICBlbHNlIGlmICh0aGlzLnJpZ2h0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja1JpZ2h0ICogaGVpZ2h0O1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDsgXG4gICAgICB0aGlzLnNyY1kgPSAwO1xuICAgIH1cbiAgfVxuICBcbiAgbW92ZUxlZnQoKXtcbiAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpe1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGp1bXAoKXtcbiAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRLZXlIYW5kbGVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKGUua2V5ID09PSBcIndcIiAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgKHRoaXMueSA9PT0gMzEwIHx8IHRoaXMuc3BlZWRZID09PSAwKSAmJiB0aGlzLnkgPD0gMzEwKSB7XG4gICAgdGhpcy5qdW1wKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiclwiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNiAmJiB0aGlzLnggPiAyNjAgJiYgdGhpcy54IDwgMzUwICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiB0aGlzLmZvdW5kS2V5cygpID09PSB0cnVlKXtcbiAgICB0aGlzLmVudGVyKCk7XG4gIH1cblxuICBpZiAoKGUua2V5ID09PSBcIiBcIiB8fCBlLmtleSA9PT0gXCJzcGFjZVwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDI1ICYmIGUucmVwZWF0ID09PSBmYWxzZSl7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICBpZiAoKGUua2V5ID09PSBcIiBcIiB8fCBlLmtleSA9PT0gXCJzcGFjZVwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDAgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgaWYgKChlLmtleSA9PT0gXCJwXCIpICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMSAmJiBlLnJlcGVhdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc3VwZXJNb2RlID0gIXRoaXMuc3VwZXJNb2RlO1xuICAgIH1cblxufVxuXG4ga2V5VXBIYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuXG4gIGVsc2UgaWYgKGUua2V5ID09PSBcIndcIikge1xuICB9XG59XG5cbmZvdW5kS2V5cygpe1xuICByZXR1cm4gdGhpcy5sZXZlbC5mb3VuZEtleTEgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTIgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTMgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTRcbn1cblxuY29sbGlzaW9uQ2hlY2socGxhdGZvcm0pe1xuICBjb25zdCB2ZWN0b3JYID0gKHRoaXMueCArICh0aGlzLndpZHRoKSkgLSAocGxhdGZvcm0ueCArIChwbGF0Zm9ybS53aWR0aCAvIDIpKTtcbiAgY29uc3QgdmVjdG9yWSA9ICh0aGlzLnkgKyAodGhpcy5oZWlnaHQpKSAtIChwbGF0Zm9ybS55ICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpKTtcblxuICBjb25zdCBjZW50ZXJXaWR0aHMgPSAodGhpcy53aWR0aC8yKSArIChwbGF0Zm9ybS53aWR0aCAvIDIpO1xuICBjb25zdCBjZW50ZXJIZWlnaHRzID0gKHRoaXMuaGVpZ2h0KSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKTtcblxuXG4gIGxldCBjb2xsaXNpb25EaXJlY3Rpb247XG5cbiAgaWYgKE1hdGguYWJzKHZlY3RvclgpIDwgY2VudGVyV2lkdGhzICYmIE1hdGguYWJzKHZlY3RvclkpIDwgY2VudGVySGVpZ2h0cykgXG4gIHtcblxuICAgIGlmIChwbGF0Zm9ybS5uYW1lKSByZXR1cm4gcGxhdGZvcm0ubmFtZTtcbiAgICBjb25zdCBvZmZzZXRYID0gY2VudGVyV2lkdGhzIC0gTWF0aC5hYnModmVjdG9yWCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGNlbnRlckhlaWdodHMgLSBNYXRoLmFicyh2ZWN0b3JZKTtcblxuICAgIGlmIChvZmZzZXRYIDwgb2Zmc2V0WSlcbiAgICAgICAgaWYgKHZlY3RvclggPiAwKXtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgICAgIHRoaXMueCArPSBvZmZzZXRYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgIHRoaXMueCAtPSBvZmZzZXRYO1xuICAgICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodmVjdG9yWSA+IDApe1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInRvcFwiO1xuICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMueSAtPSBvZmZzZXRZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb2xsaXNpb25EaXJlY3Rpb247XG59XG5cbnNjcm9sbFJpZ2h0KCl7XG4gIGlmICh0aGlzLmxldmVsLnJvb20gIT09IDI1ICYmICh0aGlzLmxldmVsLnJvb20gIT09IDApKSB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc2Nyb2xsTGVmdCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiAodGhpcy5sZXZlbC5yb29tICE9PSAwIHx8IHRoaXMubGV2ZWwucm9vbSAhPT0gNykpIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLnggPSAtMjA7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zdGFydCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIHRoaXMueCA9IDIyMDtcbiAgdGhpcy55ID0gMzEwO1xufVxuXG5yZXNldCgpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbmdhbWVPdmVyKCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5yb29tID0gMjVcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5yZXN0YXJ0KCl7XG4gIGxldCBuZXdMZXZlbCA9IG5ldyBMZXZlbCgwLCB0aGlzLmN0eCwgdGhpcy5jYW52YXMpO1xuICB0aGlzLmxldmVsID0gbmV3TGV2ZWw7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVZpZXc7IiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcbmNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vZ2FtZV92aWV3XCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAvLyBiYWNrZ3JvdW5kQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhczJcIik7XG4gIC8vIGJhY2tncm91bmRDdHggPSBiYWNrZ3JvdW5kQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiBcbiAgbGV0IGxldmVsID0gbmV3IExldmVsKDAsIGN0eCwgY2FudmFzKTtcbiAgbmV3IEdhbWVWaWV3KGxldmVsLCBjdHgsIGNhbnZhcyk7XG59KTsiLCJjbGFzcyBMZXZlbCB7XG4gIGNvbnN0cnVjdG9yKG51bWJlciwgY3R4LCBjYW52YXMpIHtcbiAgICB0aGlzLnJvb20gPSBudW1iZXI7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLnBsYXRmb3JtUGljID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wbGF0Zm9ybVBpYy5zcmMgPSBcImRpc3QvaW1hZ2VzL3BsYXRmb3JtLnBuZ1wiO1xuICAgIHRoaXMucGxhdGZvcm1XaWR0aCA9IDE1MDtcbiAgICB0aGlzLnBsYXRmb3JtSGVpZ2h0ID0gMjA7XG4gICAgdGhpcy5oZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaGVhcnQuc3JjID0gXCJkaXN0L2ltYWdlcy9oZWFydC5wbmdcIjtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTEgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MiA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkzID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTQgPSBmYWxzZTtcbiAgICB0aGlzLmZpcnN0U2NlbmUgPSB0cnVlO1xuICAgIHRoaXMuc2Vjb25kU2NlbmUgPSB0cnVlO1xuICAgIHRoaXMua2V5MSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5MS5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5MiA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5Mi5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5MyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5My5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5NCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5NC5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5cyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5cy5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5Q291bnQgPSAwO1xuICAgIHRoaXMuZ3JlZW5LbmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmdyZWVuS25pZ2h0LnNyYyA9IFwiZGlzdC9pbWFnZXMvTWl0aGVyYWxLbmlnaHQucG5nXCI7XG4gICAgdGhpcy5wcmluY2VzcyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJpbmNlc3Muc3JjID0gXCJkaXN0L2ltYWdlcy9wcmluY2Vzcy5wbmdcIjtcbiAgICB0aGlzLnByaW5jZXNzWCA9IDUwMDtcbiAgICB0aGlzLmdvbGRLbmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmdvbGRLbmlnaHQuc3JjID0gXCJkaXN0L2ltYWdlcy9Hb2xkS25pZ2h0LnBuZ1wiXG4gICAgdGhpcy5nb2xkS25pZ2h0WCA9IDcwMDtcbiAgfVxuICBhZGRTY2VuZSgpIHtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiZGlzdC9pbWFnZXMvbGV2ZWwke3RoaXMucm9vbX0ucG5nXCJgXG4gICAgcGxhdGZvcm1zID0gdGhpcy5wbGF0Zm9ybXM7XG4gICAgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgcGxhdGZvcm1XaWR0aCA9IHRoaXMucGxhdGZvcm1XaWR0aDtcbiAgICBwbGF0Zm9ybUhlaWdodCA9IHRoaXMucGxhdGZvcm1IZWlnaHRcbiAgICBpZiAodGhpcy5yb29tID09PSAwKSB7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgY29udHJvbCBIZW5yeSB3aG8gaXMgYSBjb2FsIG1pbmVyIGZyb20gdGhlIGtpbmdkb20gb2YgVHJvbWlkZS5cIiwgMzAsIDUwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgaGFzIGFsd2F5cyBrZXB0IGEgbG93IHByb2ZpbGUsIGRldGVybWluZWQgdG8gZG8gaGlzIGpvYiBhbmQgdGhlbiBlbmpveSB0aGUgcGVhY2UgYW5kIHF1aWV0IG9mIGhpcyBob21lLlwiLCAzMCwgNzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBuZXZlciBtYWRlIGFuIGVmZm9ydCB0byBiZSBrbm93biBvciBtYWtlIGZyaWVuZHMuIE5vIG9uZSBrbmV3IGhpbSBwZXJzb25hbGx5IGFuZCBoZSBsaWtlZCBpdCB0aGF0IHdheS5cIiwgMzAsIDkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhlIHByaW5jZXNzIGhhcyBiZWVuIGtpZG5hcHBlZCBhbmQgYWxsIGVmZm9ydHMgdG8gc2F2ZSBoZXIgaGF2ZSBmYWlsZWQuIEFsdGhvdWdoIEhlbnJ5IGhhcyBoZWFyZCBvZiB0aGUgc2l0dWF0aW9uLFwiLCAzMCwgMTEwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiaXQgd2Fzbid0IHNvbWV0aGluZyBoZSB3YXMgaW50ZXJlc3RlZCBpbiBnZXR0aW5nIGludm9sdmVkIGluLiBBcyBoZSB3YXMgd2Fsa2luZyB0byB3b3JrIGhlIHNhdyBhIGZsaWVyIG9mZmVyaW5nXCIsIDMwLCAxMzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJhIG1ham9yIHJld2FyZCB0byBhbnlvbmUgdGhhdCBjYW4gaGVscCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhlIG9uZSB0aGluZyBIZW5yeSBkb2VzIGNhcmUgZm9yIGlzIG1vbmV5LlwiLCAzMCwgMTUwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmVlZHMgdG8gZmluZCB0aGUgNCBrZXlzIHRvIGdldCBpbnRvIHRoZSBlbmVteSBjYXN0bGUgYW5kIHNhdmUgdGhlIHByaW5jZXNzLiBUaGlzIGlzIHdoZXJlIGhpcyBzdG9yeSBiZWdpbnMuIFwiLCAzMCwgMTcwKTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFNwYWNlYmFyIHRvIHN0YXJ0LicsIDIzMCwgMjE1KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSkge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjExMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDgwMCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMjAsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNzAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMzAsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MVwiLFxuICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICB5OiAyNDAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAzKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxMDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MlwiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjYwLFxuICAgICAgICB5OiAxNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMTUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjUwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTMgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5M1wiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2MDAsXG4gICAgICAgIHk6IDc1LFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTUwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTMwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgNzAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNDc1LFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUzMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDU1MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXk0XCIsXG4gICAgICAgICAgeDogMjI1LFxuICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDYpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIxMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDYwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIyLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA3MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NzAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA3MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDcpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBmYWlsZWQgdG8gc2F2ZSB0aGUgUHJpbmNlc3MuXCIsIDE3MCwgMTAwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBTcGFjZWJhciB0byB0cnkgYWdhaW4uJywgMTgwLCAxNTApO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdUZXh0Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyl7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cy5ibCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd19wbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyB0aGlzLmN0eC5maWxsUmVjdChwbGF0Zm9ybXNbaV0ueCwgcGxhdGZvcm1zW2ldLnksIHBsYXRmb3Jtc1tpXS53aWR0aCwgcGxhdGZvcm1zW2ldLmhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wbGF0Zm9ybVBpYywgMCwgMCwgOTYsIDk2LCBwbGF0Zm9ybXNbaV0ueCwgcGxhdGZvcm1zW2ldLnksIHBsYXRmb3Jtc1tpXS53aWR0aCwgcGxhdGZvcm1zW2ldLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hlYXJ0KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaGVhcnQsIDAsIDAsIDEyNSwgMTI1LCA2NTAsIDEwLCAzMCwgMzApXG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMubGl2ZXMsIDYzMiwgMzIpO1xuICB9XG5cbiAgZHJhd0tleUNvdW50KCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDU2MCwgMTAsIDIwMCwgNTApXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5cywgMzIsIDAsIDMyLCAzMiwgNTkwLCAxMiwgMzAsIDMwKTtcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5rZXlDb3VudCwgNTcwLCAzMik7XG4gIH1cblxuICBkcmF3X2tleTEoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkxLCAwLCAwLCAzMiwgMzIsIDYwMCwgMjQwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkyKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MiwgMzIsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTMoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MywgNjQsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5NCwgOTYsIDAsIDMyLCAzMiwgMjI1LCAzNDAsIDMwLCAzMCk7XG4gIH1cblxuICB1cGRhdGVTY2VuZSh4LCB5LCBjdXJyZW50RnJhbWUpe1xuICAgIGxldCBwcmluY2Vzc0NvbDtcbiAgICBsZXQgcHJpbmNlc3NSb3cgPSAyO1xuICAgIGxldCBrbmlnaHRDb2w7XG4gICAgbGV0IGtuaWdodFJvdztcblxuICAgIGlmICh0aGlzLnJvb20gIT0gMCAmJiB0aGlzLnJvb20gIT0gMjUpe1xuICAgIHRoaXMuZHJhd0tleUNvdW50KCk7XG4gICAgdGhpcy5kcmF3SGVhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yb29tID09PSAxKXtcbiAgICAgIGlmICh4IDwgNDAwICYmIHggPiAyMDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDkwLCAyODAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnR29vZCBsdWNrIEhlbnJ5LCcsIDk1LCAzMDApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnSSBrbm93IHlvdSBjYW4nLCA5NSwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2RvIGl0IScsIDk1LCAzMjApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgfVxuXG4gICAgICBpZiAoeCA8IDgwMCAmJiB4ID4gNTAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGFyZW4ndCBnb2luZ1wiLCA0MTAsIDI4MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCd0byBsYXN0IDUgbWludXRlcycsIDQxMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJvdXQgdGhlcmUuXCIsIDQxMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg0MDAsIDI2MCwgMTAwLCA1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgICB0aGlzLmRyYXdfa2V5MSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAzKSB7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZHJhd19rZXkyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCkge1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMDAsXG4gICAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMzAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5kcmF3X2tleTQoKTtcbiAgICAgIH0gIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNil7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTIgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICBjb2wgPSBjdXJyZW50RnJhbWUgJSAxMFxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzIwLCAzMTAsIDY1LCA2NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZ3JlZW5LbmlnaHQsIDMyICogY29sLCAwLCAzMiwgMzIsIC0zODUsIDMxMCwgNjUsIDY1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDIyMCwgMjcwLCAxMjAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgbXVzdCBoYXZlIGFsbCA0XCIsIDIzMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2tleXMgdG8gZW50ZXIgdGhlIGNhc3RsZS4nLCAyMzAsIDMwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjIwLCAyNzAsIDEyMCwgNTApO1xuICAgICAgICBpZiAoeCA+IDI2MCAmJiB4IDwgMzUwKXtcbiAgICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDI2MCwgMjcwLCAxNTAsIDI1LCA1KTtcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgUiB0byBlbnRlciB0aGUgY2FzdGxlLlwiLCAyNzAsIDI5MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDI2MCwgMjcwLCAxNTAsIDI1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNyl7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLmdvbGRLbmlnaHRYLCAzMDAsIDg1LCA4NSlcbiAgICAgIGlmICh0aGlzLmZpcnN0U2NlbmUgPT09IHRydWUpe1xuICAgICAgIHByaW5jZXNzQ29sID0gNztcbiAgICAgICAgaWYgKGN1cnJlbnRGcmFtZSAlIDggPT09IDApe1xuICAgICAgICAgcHJpbmNlc3NDb2wgPSA4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICh4IDwgMjUwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgzOTAsIDI5MCwgMTUwLCA0MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQbGVhc2Ugc2F2ZSBtZSEgVGhlXCIsIDQwMCAsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiZXZpbCBrbmlnaHQgaXMgY29taW5nIVwiLCA0MDAsIDMyMyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzkwLCAyOTAsIDE1MCwgNDApO1xuICAgICAgfVxuICAgICAga25pZ2h0Um93ID0gMTtcbiAgICAgIGlmICh4ID4gMjYwKXtcbiAgICAgICAga25pZ2h0Q29sID0gKGN1cnJlbnRGcmFtZSkgJSAxMDtcbiAgICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNTApIHtcbiAgICAgICAgICB0aGlzLmdvbGRLbmlnaHRYIC09IDU7XG4gICAgICAgICAga25pZ2h0Um93ID0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5nb2xkS25pZ2h0LCAzMiAqIGtuaWdodENvbCwga25pZ2h0Um93ICogMzIsIDMyLCAzMiwgLXRoaXMuZ29sZEtuaWdodFggLSA4NSwgMzAwLCA4NSwgODUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID4gMzYwICYmIHRoaXMuZ29sZEtuaWdodFggPCA2MDApXG4gICAgICB7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMTMwLCAyNTAsIDE4MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGV5IHlvdSBiaWcgZHVtbXkuIFlvdVwiLCAxNDAsIDI3Mik7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYmV0dGVyIGxldCB0aGUgcHJpbmNlc3MgZ28hXCIsIDE0MCwgMjg1KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPT09IDM1MCAmJiB0aGlzLnByaW5jZXNzWCAhPSAzOTApe1xuICAgICAgICB0aGlzLmZpcnN0U2NlbmUgPSBmYWxzZTtcbiAgICAgICAgcHJpbmNlc3NDb2wgPSBjdXJyZW50RnJhbWUgJSAyO1xuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPiAzOTApe1xuICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSA1O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgxMzAsIDI1MCwgMTgwLCA1NSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjEwLCAyMzAsIDE3MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhhbmsgZ29kIHlvdSBhcmUgaGVyZS5cIiwgMjIwLCAyNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkV2ZXJ5b25lIGhhcyBpdCBhbGwgd3JvbmdcIiwgMjIwLCAyNjUpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPT09IDM5MCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMTAsIDIzMCwgMTcwLCA4MCk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goNDYwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgICBpZiAodGhpcy5zZWNvbmRTY2VuZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSBNYXRoLmZsb29yKChjdXJyZW50RnJhbWUgJSAxNykgLyA0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IE1hdGguZmxvb3IoKGN1cnJlbnRGcmFtZSAlIDIwKSAvIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpbmNlc3NDb2wgPT09IDQpe1xuICAgICAgICAgIHRoaXMuc2Vjb25kU2NlbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSG93IGN1dGUuIFlvdSB0aG91Z2h0IEkgd2FzXCIsIDQ3MCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGUgb25lIHRoYXQgbmVlZGVkIHNhdmluZy5cIiwgNDcwLCAzMDUpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuXG5cbiAgICB9XG5cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdhbWUgT3ZlclwiLCA0MTAsIDI4MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgU3BhY2ViYXIgdG8gdHJ5IGFnYWluLicsIDQxMCwgMjkwKTtcbiAgICB9XG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==