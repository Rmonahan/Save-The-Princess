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

        if (310 - this.y > this.speedY || this.level.room != 1 && this.level.room != 25 && this.level.room != 0) {
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
          this.ctx.clearRect(600, 270, 30, 30);
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

      if (e.key === "r" && this.level.room === 4 && this.x > 300 && this.x < 350 && e.repeat === false) {
        this.enter();
      }

      if ((e.key === " " || e.key === "space") && this.level.room === 25 && e.repeat === false) {
        this.restart();
      }

      if ((e.key === " " || e.key === "space") && this.level.room === 0 && e.repeat === false) {
        this.start();
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
      if (this.level.room !== 25 && this.level.room !== 0) this.level.room += 1;
      this.clear();
      this.level.addScene();
    }
  }, {
    key: "scrollLeft",
    value: function scrollLeft() {
      if (this.level.room !== 25 && this.level.room !== 0) this.level.room -= 1;
      this.clear();
      this.level.addScene();
    }
  }, {
    key: "enter",
    value: function enter() {
      this.level.room += 1;
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
    this.foundKey1 = false;
    this.foundKey2 = false;
    this.foundKey3 = false;
    this.key1 = new Image();
    this.key1.src = "dist/images/KeyIcons.png";
    this.key2 = new Image();
    this.key2.src = "dist/images/KeyIcons.png";
    this.key3 = new Image();
    this.key3.src = "dist/images/KeyIcons.png";
    this.keys = new Image();
    this.keys.src = "dist/images/KeyIcons.png";
    this.keyCount = 0;
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
        this.ctx.fillText("As you progress through the game you will discover more and more about Henry, the kingdom and the history.", 30, 190);
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
          height: platformHeight
        });

        if (this.foundKey1 === false) {
          this.items.push({
            name: "key1",
            x: 600,
            y: 270,
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
        if (this.foundKey2 === false) this.items.push({
          name: "key3",
          x: 385,
          y: 250,
          width: 30,
          height: 30
        });
      } else if (this.room === 5) {
        this.canvas.style.backgroundPositionY = "40px";
        this.canvas.style.backgroundPositionX = "-100px";
      } else if (this.room === 8) {
        this.canvas.style.backgroundPositionY = "-50px";
        this.canvas.style.backgroundPositionX = "100px";
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
        this.ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
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
      this.ctx.drawImage(this.key1, 0, 0, 32, 32, 600, 270, 30, 30);
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
    key: "updateScene",
    value: function updateScene(x, y) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsInNwZWVkWCIsInNwZWVkWSIsInNyYyIsInRpbWUiLCJ1cGRhdGVGcmFtZSIsInNjYWxlIiwiZHJhd0ltYWdlIiwic2V0VGltZW91dCIsInN0aWxsRnJhbWUiLCJ1cGRhdGVTY2VuZSIsInJvb20iLCJzY3JvbGxSaWdodCIsInNjcm9sbExlZnQiLCJpIiwibGVuZ3RoIiwiZGlyZWN0aW9uIiwiY29sbGlzaW9uQ2hlY2siLCJjb2xsaXNpb25OYW1lIiwiZm91bmRLZXkxIiwia2V5Q291bnQiLCJmb3VuZEtleTIiLCJmb3VuZEtleTMiLCJsaXZlcyIsInJlc2V0IiwiZ2FtZU92ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInJlcGVhdCIsImp1bXAiLCJlbnRlciIsInJlc3RhcnQiLCJzdGFydCIsInBsYXRmb3JtIiwidmVjdG9yWCIsInZlY3RvclkiLCJjZW50ZXJXaWR0aHMiLCJjZW50ZXJIZWlnaHRzIiwiY29sbGlzaW9uRGlyZWN0aW9uIiwiTWF0aCIsImFicyIsIm5hbWUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNsZWFyIiwibmV3TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibnVtYmVyIiwicGxhdGZvcm1QaWMiLCJwbGF0Zm9ybVdpZHRoIiwicGxhdGZvcm1IZWlnaHQiLCJoZWFydCIsImtleTEiLCJrZXkyIiwia2V5MyIsImtleXMiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImJhY2tncm91bmRQb3NpdGlvblkiLCJiYWNrZ3JvdW5kUG9zaXRpb25YIiwicHVzaCIsInJhZGl1cyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJibCIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlVGV4dCIsImRyYXdLZXlDb3VudCIsImRyYXdIZWFydCIsImRyYXdUZXh0Qm94IiwiZHJhd19wbGF0Zm9ybXMiLCJkcmF3X2tleTEiLCJkcmF3X2tleTIiLCJkcmF3X2tleTMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7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bUJBQVMsQ0FBQ21GLElBQVYsQ0FBZTtBQUNiOUYsYUFBQyxFQUFFZixNQUFNLENBQUNvQyxLQUFQLEdBQWUsR0FETDtBQUVicEIsYUFBQyxFQUFFLEtBQUtoQixNQUFMLENBQVlxQyxNQUFaLEdBQXFCLEdBRlg7QUFHYkQsaUJBQUssRUFBRTJELGFBQWEsR0FBRyxHQUhWO0FBSWIxRCxrQkFBTSxFQUFFMkQ7QUFKSyxXQUFmO0FBTUQ7QUFDRixPQWRJLE1BZ0JBLElBQUksS0FBS2hELElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUN4QixhQUFLNEUsY0FBTDs7QUFDQSxZQUFJLEtBQUtqRSxTQUFMLEtBQW1CLEtBQXZCLEVBQThCO0FBQzVCLGVBQUtvRSxTQUFMO0FBQ0Q7QUFDRixPQUxJLE1BUUEsSUFBSSxLQUFLL0UsSUFBTCxLQUFjLEVBQWxCLEVBQXFCO0FBQ3hCLGFBQUsyRSxXQUFMLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEVBQWhDLEVBQW9DLENBQXBDO0FBQ0EsYUFBSzVILEdBQUwsQ0FBU3lHLElBQVQsR0FBZ0IsbUJBQWhCO0FBQ0EsYUFBS3pHLEdBQUwsQ0FBUzBHLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxhQUFLMUcsR0FBTCxDQUFTMkcsUUFBVCxDQUFrQixXQUFsQixFQUErQixHQUEvQixFQUFvQyxHQUFwQztBQUNBLGFBQUszRyxHQUFMLENBQVMyRyxRQUFULENBQWtCLDhCQUFsQixFQUFrRCxHQUFsRCxFQUF1RCxHQUF2RDtBQUNEO0FBQ0o7Ozs7OztBQUdEakIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0YsS0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuXG5jbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgsIGNhbnZhcywgYmFja2dyb3VuZEN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZEN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmZsaXBQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgIHRoaXMubGV2ZWwucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlU2NlbmUoKXtcbiAgICB0aGlzLmRyYXdNYWluQ2hhcmFjdGVyKCk7XG4gICAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB9XG5cbiAgZHJhd01haW5DaGFyYWN0ZXIoKSB7XG4gICAgY29uc3Qgc3ByaXRlV2lkdGggPSAzNTA7XG4gICAgY29uc3Qgc3ByaXRlSGVpZ2h0ID0gNDA3O1xuICAgIGNvbnN0IHJvd3MgPSAxMTtcbiAgICBjb25zdCBjb2xzID0gNztcbiAgICB0aGlzLnRyYWNrUmlnaHQgPSAxO1xuICAgIHRoaXMudHJhY2tMZWZ0ID0gMTtcbiAgICB0aGlzLndpZHRoID0gc3ByaXRlV2lkdGggLyBjb2xzO1xuICAgIHRoaXMuaGVpZ2h0ID0gc3ByaXRlSGVpZ2h0IC8gcm93cztcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMueCA9IDIyMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcmNYPSAwO1xuICAgIHRoaXMuc3JjWT0gdGhpcy50cmFja1JpZ2h0ICogdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICB0aGlzLnNwZWVkWSA9IDE1O1xuICAgIHRoaXMuY2hhcmFjdGVyLnNyYyA9IFwiZGlzdC9pbWFnZXMvYWR2ZW50dXJlci1TaGVldC5wbmdcIjtcbiAgfVxuICBtYWluTG9vcCh0aW1lKXtcbiAgICB0aGlzLnVwZGF0ZUZyYW1lKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmZyYW1lQ291bnQsIHRoaXMudHJhY2tMZWZ0LCB0aGlzLnRyYWNrUmlnaHQpXG4gICAgaWYgKHRoaXMuZmFjaW5nTGVmdCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgKC10aGlzLnggLSAodGhpcy53aWR0aCAqIDIpKSwgdGhpcy55LCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTsgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCoyLCB0aGlzLmhlaWdodCoyKVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgIH0sIDEwMClcbiAgfVxuXG4gIHVwZGF0ZUZyYW1lKHdpZHRoLCBoZWlnaHQsIGZyYW1lQ291bnQsIHRyYWNrTGVmdCwgdHJhY2tSaWdodCl7XG5cbiAgICB0aGlzLnN0aWxsRnJhbWUgPSB0aGlzLmN1ckZyYW1lICUgNFxuICAgIGlmICh0aGlzLmN1ckZyYW1lID09PSA0KSB0aGlzLnN0aWxsRnJhbWUgPSAzXG4gICAgXG4gICAgXG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIHRoaXMuc3JjWCA9IHRoaXMuY3VyRnJhbWUgKiB3aWR0aCArIHdpZHRoO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGggKiAyLCBoZWlnaHQgKiAyKTtcbiAgICB0aGlzLmxldmVsLnVwZGF0ZVNjZW5lKHRoaXMueCwgdGhpcy55KTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxlZnQgJiYgKHRoaXMueCA+IC0yMCB8fCB0aGlzLmxldmVsLnJvb20gIT0xKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNwZWVkWSA9IDE1XG4gICAgICBpZiAoMzEwIC0gdGhpcy55ID4gdGhpcy5zcGVlZFkgfHwgKHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSAyNSAmJiB0aGlzLmxldmVsLnJvb20gIT0gMCkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDY3MCl7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gLTIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMubGV2ZWwucm9vbSAhPSAxKSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQoKTtcbiAgICAgIHRoaXMueCA9IDY0MDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsLnBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLnBsYXRmb3Jtc1tpXSlcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgfHwgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJib3R0b21cIikge1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XG4gICAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sZXZlbC5pdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBjb2xsaXNpb25OYW1lID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLml0ZW1zW2ldKVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MVwiKXtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTEgPSB0cnVlO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNjAwLCAyNzAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MlwiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkyID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkzXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzg1LCAyNTAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTMgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueSA+IDUwMCApe1xuICAgICAgdGhpcy5sZXZlbC5saXZlcyAtPSAxO1xuICAgICAgdGhpcy55ID0gMTA7XG4gICAgICB0aGlzLnggPSAyMDtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZXZlbC5saXZlcyA9PT0gMCl7XG4gICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgfVxuXG5cblxuICAgIGlmICh0aGlzLnkgPT09IDMxMCkgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKSB0aGlzLnNyY1kgPSBoZWlnaHQgKiAyO1xuICAgIGVsc2UgaWYgKHRoaXMubGVmdCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tMZWZ0ICogaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMucmlnaHQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrUmlnaHQgKiBoZWlnaHQ7XG4gICAgZWxzZSB7dGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDsgdGhpcy5zcmNZID0gMDt9XG4gIH1cbiAgXG4gIG1vdmVMZWZ0KCl7XG4gICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IHRydWU7XG4gIH1cblxuICBtb3ZlUmlnaHQoKXtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gIH1cblxuICBqdW1wKCl7XG4gICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gIH1cblxuICBiaW5kS2V5SGFuZGxlcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiKSB7XG4gICAgdGhpcy5tb3ZlTGVmdCgpO1xuICB9XG4gIGlmIChlLmtleSA9PT0gXCJ3XCIgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmICh0aGlzLnkgPT09IDMxMCB8fCB0aGlzLnNwZWVkWSA9PT0gMCkgJiYgdGhpcy55IDw9IDMxMCkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcInJcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDQgJiYgdGhpcy54ID4gMzAwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2Upe1xuICAgIHRoaXMuZW50ZXIoKTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwiIFwiIHx8IGUua2V5ID09PSBcInNwYWNlXCIpICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgZS5yZXBlYXQgPT09IGZhbHNlKXtcbiAgICB0aGlzLnJlc3RhcnQoKTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwiIFwiIHx8IGUua2V5ID09PSBcInNwYWNlXCIpICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxufVxuXG4ga2V5VXBIYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuXG4gIGVsc2UgaWYgKGUua2V5ID09PSBcIndcIikge1xuICB9XG59XG5cbmNvbGxpc2lvbkNoZWNrKHBsYXRmb3JtKXtcbiAgY29uc3QgdmVjdG9yWCA9ICh0aGlzLnggKyAodGhpcy53aWR0aCkpIC0gKHBsYXRmb3JtLnggKyAocGxhdGZvcm0ud2lkdGggLyAyKSk7XG4gIGNvbnN0IHZlY3RvclkgPSAodGhpcy55ICsgKHRoaXMuaGVpZ2h0KSkgLSAocGxhdGZvcm0ueSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKSk7XG5cbiAgY29uc3QgY2VudGVyV2lkdGhzID0gKHRoaXMud2lkdGgvMikgKyAocGxhdGZvcm0ud2lkdGggLyAyKTtcbiAgY29uc3QgY2VudGVySGVpZ2h0cyA9ICh0aGlzLmhlaWdodCkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMik7XG5cblxuICBsZXQgY29sbGlzaW9uRGlyZWN0aW9uO1xuXG4gIGlmIChNYXRoLmFicyh2ZWN0b3JYKSA8IGNlbnRlcldpZHRocyAmJiBNYXRoLmFicyh2ZWN0b3JZKSA8IGNlbnRlckhlaWdodHMpIFxuICB7XG5cbiAgICBpZiAocGxhdGZvcm0ubmFtZSkgcmV0dXJuIHBsYXRmb3JtLm5hbWU7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNlbnRlcldpZHRocyAtIE1hdGguYWJzKHZlY3RvclgpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBjZW50ZXJIZWlnaHRzIC0gTWF0aC5hYnModmVjdG9yWSk7XG5cbiAgICBpZiAob2Zmc2V0WCA8IG9mZnNldFkpXG4gICAgICAgIGlmICh2ZWN0b3JYID4gMCl7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgICAgICB0aGlzLnggKz0gb2Zmc2V0WDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgICAgICB0aGlzLnggLT0gb2Zmc2V0WDtcbiAgICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHZlY3RvclkgPiAwKXtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJ0b3BcIjtcbiAgICAgICAgdGhpcy55ICs9IG9mZnNldFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImJvdHRvbVwiO1xuICAgICAgICB0aGlzLnkgLT0gb2Zmc2V0WVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29sbGlzaW9uRGlyZWN0aW9uO1xufVxuXG5zY3JvbGxSaWdodCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiB0aGlzLmxldmVsLnJvb20gIT09IDApIHRoaXMubGV2ZWwucm9vbSArPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zY3JvbGxMZWZ0KCl7XG4gIGlmICh0aGlzLmxldmVsLnJvb20gIT09IDI1ICYmIHRoaXMubGV2ZWwucm9vbSAhPT0gMCkgdGhpcy5sZXZlbC5yb29tIC09IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbmVudGVyKCl7XG4gIHRoaXMubGV2ZWwucm9vbSArPSAxXG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc3RhcnQoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDE7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB0aGlzLnggPSAyMjA7XG4gIHRoaXMueSA9IDMxMDtcbn1cblxucmVzZXQoKXtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5nYW1lT3Zlcigpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwucm9vbSA9IDI1XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxucmVzdGFydCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoMCwgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5jb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL2dhbWVfdmlld1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgLy8gYmFja2dyb3VuZENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXMyXCIpO1xuICAvLyBiYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gXG4gIGxldCBsZXZlbCA9IG5ldyBMZXZlbCgwLCBjdHgsIGNhbnZhcyk7XG4gIG5ldyBHYW1lVmlldyhsZXZlbCwgY3R4LCBjYW52YXMpO1xufSk7IiwiY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIGN0eCwgY2FudmFzKSB7XG4gICAgdGhpcy5yb29tID0gbnVtYmVyO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5wbGF0Zm9ybVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucGxhdGZvcm1QaWMuc3JjID0gXCJkaXN0L2ltYWdlcy9wbGF0Zm9ybS5wbmdcIjtcbiAgICB0aGlzLnBsYXRmb3JtV2lkdGggPSAxNTA7XG4gICAgdGhpcy5wbGF0Zm9ybUhlaWdodCA9IDIwO1xuICAgIHRoaXMuaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmhlYXJ0LnNyYyA9IFwiZGlzdC9pbWFnZXMvaGVhcnQucG5nXCI7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5mb3VuZEtleTEgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MiA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkzID0gZmFsc2U7XG4gICAgdGhpcy5rZXkxID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkxLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkyLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXlzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlDb3VudCA9IDA7XG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImRpc3QvaW1hZ2VzL2xldmVsJHt0aGlzLnJvb219LnBuZ1wiYFxuICAgIHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHBsYXRmb3JtV2lkdGggPSB0aGlzLnBsYXRmb3JtV2lkdGg7XG4gICAgcGxhdGZvcm1IZWlnaHQgPSB0aGlzLnBsYXRmb3JtSGVpZ2h0XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCkge1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGNvbnRyb2wgSGVucnkgd2hvIGlzIGEgY29hbCBtaW5lciBmcm9tIHRoZSBraW5nZG9tIG9mIFRyb21pZGUuXCIsIDMwLCA1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIGhhcyBhbHdheXMga2VwdCBhIGxvdyBwcm9maWxlLCBkZXRlcm1pbmVkIHRvIGRvIGhpcyBqb2IgYW5kIHRoZW4gZW5qb3kgdGhlIHBlYWNlIGFuZCBxdWlldCBvZiBoaXMgaG9tZS5cIiwgMzAsIDcwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmV2ZXIgbWFkZSBhbiBlZmZvcnQgdG8gYmUga25vd24gb3IgbWFrZSBmcmllbmRzLiBObyBvbmUga25ldyBoaW0gcGVyc29uYWxseSBhbmQgaGUgbGlrZWQgaXQgdGhhdCB3YXkuXCIsIDMwLCA5MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRoZSBwcmluY2VzcyBoYXMgYmVlbiBraWRuYXBwZWQgYW5kIGFsbCBlZmZvcnRzIHRvIHNhdmUgaGVyIGhhdmUgZmFpbGVkLiBBbHRob3VnaCBIZW5yeSBoYXMgaGVhcmQgb2YgdGhlIHNpdHVhdGlvbixcIiwgMzAsIDExMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIml0IHdhc24ndCBzb21ldGhpbmcgaGUgd2FzIGludGVyZXN0ZWQgaW4gZ2V0dGluZyBpbnZvbHZlZCBpbi4gQXMgaGUgd2FzIHdhbGtpbmcgdG8gd29yayBoZSBzYXcgYSBmbGllciBvZmZlcmluZ1wiLCAzMCwgMTMwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYSBtYWpvciByZXdhcmQgdG8gYW55b25lIHRoYXQgY2FuIGhlbHAgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoZSBvbmUgdGhpbmcgSGVucnkgZG9lcyBjYXJlIGZvciBpcyBtb25leS5cIiwgMzAsIDE1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5lZWRzIHRvIGZpbmQgdGhlIDQga2V5cyB0byBnZXQgaW50byB0aGUgZW5lbXkgY2FzdGxlIGFuZCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhpcyBpcyB3aGVyZSBoaXMgc3RvcnkgYmVnaW5zLiBcIiwgMzAsIDE3MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkFzIHlvdSBwcm9ncmVzcyB0aHJvdWdoIHRoZSBnYW1lIHlvdSB3aWxsIGRpc2NvdmVyIG1vcmUgYW5kIG1vcmUgYWJvdXQgSGVucnksIHRoZSBraW5nZG9tIGFuZCB0aGUgaGlzdG9yeS5cIiwgMzAsIDE5MCk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBTcGFjZWJhciB0byBzdGFydC4nLCAyMzAsIDIxNSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi0yMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIxMTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA4MDAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDIwLFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTcwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkxXCIsXG4gICAgICAgICAgeDogNjAwLFxuICAgICAgICAgIHk6IDI3MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDEwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM4MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI2MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkyXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NjAsXG4gICAgICAgIHk6IDE0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMxNSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0NDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkzXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiNDBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gOCl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMTAwcHhcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGZhaWxlZCB0byBzYXZlIHRoZSBQcmluY2Vzcy5cIiwgMTcwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFNwYWNlYmFyIHRvIHRyeSBhZ2Fpbi4nLCAxODAsIDE1MCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1RleHRCb3goeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKXtcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLmJsLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3X3BsYXRmb3JtcygpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHBsYXRmb3Jtc1tpXS54LCBwbGF0Zm9ybXNbaV0ueSwgcGxhdGZvcm1zW2ldLndpZHRoLCBwbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBkcmF3SGVhcnQoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5oZWFydCwgMCwgMCwgMTI1LCAxMjUsIDY1MCwgMTAsIDMwLCAzMClcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5saXZlcywgNjMyLCAzMik7XG4gIH1cblxuICBkcmF3S2V5Q291bnQoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoNTYwLCAxMCwgMjAwLCA1MClcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXlzLCAzMiwgMCwgMzIsIDMyLCA1OTAsIDEyLCAzMCwgMzApO1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLmtleUNvdW50LCA1NzAsIDMyKTtcbiAgfVxuXG4gIGRyYXdfa2V5MSgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTEsIDAsIDAsIDMyLCAzMiwgNjAwLCAyNzAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTIoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkyLCAzMiwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5MygpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkzLCA2NCwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKHgsIHkpe1xuICAgIGlmICh0aGlzLnJvb20gIT0gMCAmJiB0aGlzLnJvb20gIT0gMjUpe1xuICAgIHRoaXMuZHJhd0tleUNvdW50KCk7XG4gICAgdGhpcy5kcmF3SGVhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yb29tID09PSAxKXtcbiAgICAgIGlmICh4IDwgNDAwICYmIHggPiAyMDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDkwLCAyODAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnR29vZCBsdWNrIEhlbnJ5LCcsIDk1LCAzMDApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnSSBrbm93IHlvdSBjYW4nLCA5NSwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2RvIGl0IScsIDk1LCAzMjApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgfVxuXG4gICAgICBpZiAoeCA8IDgwMCAmJiB4ID4gNTAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGFyZW4ndCBnb2luZ1wiLCA0MTAsIDI4MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCd0byBsYXN0IDUgbWludXRlcycsIDQxMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJvdXQgdGhlcmUuXCIsIDQxMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg0MDAsIDI2MCwgMTAwLCA1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgICB0aGlzLmRyYXdfa2V5MSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAzKSB7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZHJhd19rZXkyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCkge1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MygpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgICB0aGlzLmRyYXdUZXh0Qm94KDQwMCwgMjYwLCAxMDAsIDUwLCA1KVxuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR2FtZSBPdmVyXCIsIDQxMCwgMjgwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBTcGFjZWJhciB0byB0cnkgYWdhaW4uJywgNDEwLCAyOTApO1xuICAgIH1cbn1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZXZlbDtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9