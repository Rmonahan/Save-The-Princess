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
        this.x = 10;
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
        this.ctx.fillText("Introduction:", 30, 30);
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
      } else if (this.room === 5) {
        this.canvas.style.backgroundPositionY = "40px";
        this.canvas.style.backgroundPositionX = "-100px";
      } else if (this.room === 8) {
        this.canvas.style.backgroundPositionY = "-50px";
        this.canvas.style.backgroundPositionX = "100px";
      } else if (this.room === 25) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsInNwZWVkWCIsInNwZWVkWSIsInNyYyIsInRpbWUiLCJ1cGRhdGVGcmFtZSIsInNjYWxlIiwiZHJhd0ltYWdlIiwic2V0VGltZW91dCIsInN0aWxsRnJhbWUiLCJ1cGRhdGVTY2VuZSIsInJvb20iLCJzY3JvbGxSaWdodCIsInNjcm9sbExlZnQiLCJpIiwibGVuZ3RoIiwiZGlyZWN0aW9uIiwiY29sbGlzaW9uQ2hlY2siLCJjb2xsaXNpb25OYW1lIiwiZm91bmRLZXkxIiwia2V5Q291bnQiLCJmb3VuZEtleTIiLCJsaXZlcyIsInJlc2V0IiwiZ2FtZU92ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInJlcGVhdCIsImp1bXAiLCJlbnRlciIsInJlc3RhcnQiLCJzdGFydCIsInBsYXRmb3JtIiwidmVjdG9yWCIsInZlY3RvclkiLCJjZW50ZXJXaWR0aHMiLCJjZW50ZXJIZWlnaHRzIiwiY29sbGlzaW9uRGlyZWN0aW9uIiwiTWF0aCIsImFicyIsIm5hbWUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNsZWFyIiwibmV3TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibnVtYmVyIiwicGxhdGZvcm1XaWR0aCIsInBsYXRmb3JtSGVpZ2h0IiwiaGVhcnQiLCJmb3VuZEtleTMiLCJrZXkxIiwia2V5MiIsImtleTMiLCJrZXlzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsInB1c2giLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiYmwiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZVRleHQiLCJkcmF3S2V5Q291bnQiLCJkcmF3SGVhcnQiLCJkcmF3VGV4dEJveCIsImRyYXdfcGxhdGZvcm1zIiwiZHJhd19rZXkxIiwiZHJhd19rZXkyIiwiZHJhd19rZXkzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtCQUFELENBQXJCOztJQUVNQyxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQkMsR0FBbkIsRUFBd0JDLE1BQXhCLEVBQWdDQyxhQUFoQyxFQUErQztBQUFBOztBQUM3QyxTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtJLGVBQUw7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJQyxLQUFKLEVBQWpCO0FBQ0EsU0FBS0MsV0FBTDtBQUNBQyxVQUFNLENBQUNDLHFCQUFQLENBQTZCLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUE3QjtBQUNEOzs7OzRCQUVNO0FBQ0wsV0FBS3pCLEdBQUwsQ0FBUzBCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUI7QUFDQSxXQUFLM0IsS0FBTCxDQUFXNEIsU0FBWCxHQUF1QixFQUF2QjtBQUNBLFdBQUs1QixLQUFMLENBQVc2QixLQUFYLEdBQW1CLEVBQW5CO0FBQ0Q7OztrQ0FFWTtBQUNYLFdBQUtDLGlCQUFMO0FBQ0EsV0FBSzlCLEtBQUwsQ0FBVytCLFFBQVg7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxXQUFXLEdBQUcsR0FBcEI7QUFDQSxVQUFNQyxZQUFZLEdBQUcsR0FBckI7QUFDQSxVQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUNBLFVBQU1DLElBQUksR0FBRyxDQUFiO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFdBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxXQUFLQyxLQUFMLEdBQWFOLFdBQVcsR0FBR0csSUFBM0I7QUFDQSxXQUFLSSxNQUFMLEdBQWNOLFlBQVksR0FBR0MsSUFBN0I7QUFDQSxXQUFLckIsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFdBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxXQUFLRyxDQUFMLEdBQVMsR0FBVDtBQUNBLFdBQUtDLENBQUwsR0FBUyxHQUFUO0FBQ0EsV0FBS0gsSUFBTCxHQUFXLENBQVg7QUFDQSxXQUFLQyxJQUFMLEdBQVcsS0FBS29CLFVBQUwsR0FBa0IsS0FBS0csTUFBbEM7QUFDQSxXQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsV0FBS3JCLFNBQUwsQ0FBZXNCLEdBQWYsR0FBcUIsa0NBQXJCO0FBQ0Q7Ozs2QkFDUUMsSSxFQUFLO0FBQUE7O0FBQ1osV0FBS0MsV0FBTCxDQUFpQixLQUFLTixLQUF0QixFQUE2QixLQUFLQyxNQUFsQyxFQUEwQyxLQUFLekIsVUFBL0MsRUFBMkQsS0FBS3VCLFNBQWhFLEVBQTJFLEtBQUtELFVBQWhGOztBQUNBLFVBQUksS0FBSzVCLFVBQUwsS0FBb0IsSUFBeEIsRUFBNkI7QUFDM0IsYUFBS1AsR0FBTCxDQUFTNEMsS0FBVCxDQUFlLENBQUMsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQSxhQUFLNUMsR0FBTCxDQUFTNkMsU0FBVCxDQUFtQixLQUFLMUIsU0FBeEIsRUFBbUMsS0FBS0wsSUFBeEMsRUFBOEMsS0FBS0MsSUFBbkQsRUFBeUQsS0FBS3NCLEtBQTlELEVBQXFFLEtBQUtDLE1BQTFFLEVBQW1GLENBQUMsS0FBS3RCLENBQU4sR0FBVyxLQUFLcUIsS0FBTCxHQUFhLENBQTNHLEVBQWdILEtBQUtwQixDQUFySCxFQUF3SCxLQUFLb0IsS0FBTCxHQUFhLENBQXJJLEVBQXdJLEtBQUtDLE1BQUwsR0FBYyxDQUF0SjtBQUNBLGFBQUt0QyxHQUFMLENBQVM0QyxLQUFULENBQWUsQ0FBQyxDQUFoQixFQUFtQixDQUFuQjtBQUNELE9BSkQsTUFLSztBQUNMLGFBQUs1QyxHQUFMLENBQVM2QyxTQUFULENBQW1CLEtBQUsxQixTQUF4QixFQUFtQyxLQUFLTCxJQUF4QyxFQUE4QyxLQUFLQyxJQUFuRCxFQUF5RCxLQUFLc0IsS0FBOUQsRUFBcUUsS0FBS0MsTUFBMUUsRUFBa0YsS0FBS3RCLENBQXZGLEVBQTBGLEtBQUtDLENBQS9GLEVBQWtHLEtBQUtvQixLQUFMLEdBQVcsQ0FBN0csRUFBZ0gsS0FBS0MsTUFBTCxHQUFZLENBQTVIO0FBQ0M7O0FBQ0RRLGdCQUFVLENBQUMsWUFBSztBQUNoQnhCLGNBQU0sQ0FBQ0MscUJBQVAsQ0FBNkIsS0FBSSxDQUFDQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsS0FBbkIsQ0FBN0I7QUFDQyxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0Q7OztnQ0FFV1ksSyxFQUFPQyxNLEVBQVF6QixVLEVBQVl1QixTLEVBQVdELFUsRUFBVztBQUUzRCxXQUFLWSxVQUFMLEdBQWtCLEtBQUtuQyxRQUFMLEdBQWdCLENBQWxDO0FBQ0EsVUFBSSxLQUFLQSxRQUFMLEtBQWtCLENBQXRCLEVBQXlCLEtBQUttQyxVQUFMLEdBQWtCLENBQWxCO0FBR3pCLFdBQUtuQyxRQUFMLEdBQWdCLENBQUMsS0FBS0EsUUFBTCxHQUFnQixDQUFqQixJQUFzQkMsVUFBdEM7QUFDQSxXQUFLQyxJQUFMLEdBQVksS0FBS0YsUUFBTCxHQUFnQnlCLEtBQWhCLEdBQXdCQSxLQUFwQztBQUNBLFdBQUtyQyxHQUFMLENBQVMwQixTQUFULENBQW1CLEtBQUtWLENBQXhCLEVBQTJCLEtBQUtDLENBQWhDLEVBQW1Db0IsS0FBSyxHQUFHLENBQTNDLEVBQThDQyxNQUFNLEdBQUcsQ0FBdkQ7QUFDQSxXQUFLdkMsS0FBTCxDQUFXaUQsV0FBWCxDQUF1QixLQUFLaEMsQ0FBNUIsRUFBK0IsS0FBS0MsQ0FBcEM7QUFDQSxXQUFLTixLQUFMLEdBQWEsSUFBYjs7QUFFQSxVQUFJLEtBQUtMLElBQUwsS0FBYyxLQUFLVSxDQUFMLEdBQVMsQ0FBQyxFQUFWLElBQWdCLEtBQUtqQixLQUFMLENBQVdrRCxJQUFYLElBQWtCLENBQWhELENBQUosRUFBdUQ7QUFDckQsYUFBS1YsTUFBTCxHQUFjLEVBQWQ7QUFDQSxhQUFLdkIsQ0FBTCxJQUFVLEtBQUt1QixNQUFmO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLL0IsS0FBVCxFQUFlO0FBQ2IsYUFBSytCLE1BQUwsR0FBYyxFQUFkO0FBQ0EsYUFBS3ZCLENBQUwsSUFBVSxLQUFLdUIsTUFBZjtBQUNEOztBQUVELFVBQUksS0FBSzVCLEtBQUwsS0FBZSxJQUFuQixFQUF3QjtBQUN0QixhQUFLNkIsTUFBTCxHQUFjLEVBQWQ7O0FBQ0EsWUFBSSxNQUFNLEtBQUt2QixDQUFYLEdBQWUsS0FBS3VCLE1BQXBCLElBQStCLEtBQUt6QyxLQUFMLENBQVdrRCxJQUFYLElBQW1CLENBQW5CLElBQXdCLEtBQUtsRCxLQUFMLENBQVdrRCxJQUFYLElBQW1CLEVBQTNDLElBQWlELEtBQUtsRCxLQUFMLENBQVdrRCxJQUFYLElBQW1CLENBQXZHLEVBQTBHO0FBQ3hHLGVBQUtoQyxDQUFMLElBQVUsS0FBS3VCLE1BQWY7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLdkIsQ0FBTCxJQUFVLE1BQU0sS0FBS0EsQ0FBckI7QUFDRDtBQUNGOztBQUVELFVBQUksS0FBS1IsT0FBTCxLQUFpQixJQUFyQixFQUEyQjtBQUN6QixhQUFLQyxVQUFMLElBQW1CLEVBQW5CO0FBQ0EsYUFBS08sQ0FBTCxJQUFVLEVBQVY7O0FBQ0EsWUFBSSxLQUFLUCxVQUFMLEdBQWtCLEdBQXRCLEVBQTBCO0FBQzFCLGVBQUtELE9BQUwsR0FBZSxLQUFmO0FBQ0EsZUFBS0osS0FBTCxHQUFhLElBQWI7QUFDQSxlQUFLSyxVQUFMLEdBQWtCLENBQWxCO0FBQ0M7QUFDRjs7QUFFRCxVQUFJLEtBQUtNLENBQUwsR0FBUyxHQUFiLEVBQWlCO0FBQ2YsYUFBS2tDLFdBQUw7QUFDQSxhQUFLbEMsQ0FBTCxHQUFTLEVBQVQ7QUFDRDs7QUFFRCxVQUFJLEtBQUtBLENBQUwsR0FBUyxDQUFDLEVBQVYsSUFBZ0IsS0FBS2pCLEtBQUwsQ0FBV2tELElBQVgsSUFBbUIsQ0FBdkMsRUFBMEM7QUFDeEMsYUFBS0UsVUFBTDtBQUNBLGFBQUtuQyxDQUFMLEdBQVMsR0FBVDtBQUNEOztBQUNELFdBQUssSUFBSW9DLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3JELEtBQUwsQ0FBVzRCLFNBQVgsQ0FBcUIwQixNQUF6QyxFQUFpREQsQ0FBQyxFQUFsRCxFQUFzRDtBQUNwRCxZQUFNRSxTQUFTLEdBQUcsS0FBS0MsY0FBTCxDQUFvQixLQUFLeEQsS0FBTCxDQUFXNEIsU0FBWCxDQUFxQnlCLENBQXJCLENBQXBCLENBQWxCOztBQUVBLFlBQUlFLFNBQVMsS0FBSyxNQUFkLElBQXdCQSxTQUFTLEtBQUssT0FBMUMsRUFBbUQ7QUFDakQsZUFBS2YsTUFBTCxHQUFjLENBQWQ7QUFDRCxTQUZELE1BR0ssSUFBSWUsU0FBUyxLQUFLLEtBQWQsSUFBdUJBLFNBQVMsS0FBSyxRQUF6QyxFQUFtRDtBQUN0RCxlQUFLZCxNQUFMLEdBQWMsQ0FBZDtBQUNBLGVBQUtuQyxLQUFMLEdBQWEsSUFBYjtBQUNBLGVBQUtNLEtBQUwsR0FBYSxLQUFiO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLLElBQUl5QyxFQUFDLEdBQUMsQ0FBWCxFQUFjQSxFQUFDLEdBQUcsS0FBS3JELEtBQUwsQ0FBVzZCLEtBQVgsQ0FBaUJ5QixNQUFuQyxFQUEyQ0QsRUFBQyxFQUE1QyxFQUErQztBQUM3QyxZQUFNSSxhQUFhLEdBQUcsS0FBS0QsY0FBTCxDQUFvQixLQUFLeEQsS0FBTCxDQUFXNkIsS0FBWCxDQUFpQndCLEVBQWpCLENBQXBCLENBQXRCOztBQUNBLFlBQUlJLGFBQWEsS0FBSyxNQUF0QixFQUE2QjtBQUMzQixlQUFLekQsS0FBTCxDQUFXMEQsU0FBWCxHQUF1QixJQUF2QjtBQUNBLGVBQUt6RCxHQUFMLENBQVMwQixTQUFULENBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDO0FBQ0EsZUFBSzNCLEtBQUwsQ0FBVzJELFFBQVgsSUFBdUIsQ0FBdkI7QUFDQSxlQUFLM0QsS0FBTCxDQUFXNkIsS0FBWCxHQUFtQixFQUFuQjtBQUNEOztBQUNELFlBQUk0QixhQUFhLEtBQUssTUFBdEIsRUFBOEI7QUFDNUIsZUFBS3pELEtBQUwsQ0FBVzZCLEtBQVgsR0FBbUIsRUFBbkI7QUFDQSxlQUFLNUIsR0FBTCxDQUFTMEIsU0FBVCxDQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixFQUE3QixFQUFpQyxFQUFqQztBQUNBLGVBQUszQixLQUFMLENBQVcyRCxRQUFYLElBQXVCLENBQXZCO0FBQ0EsZUFBSzNELEtBQUwsQ0FBVzRELFNBQVgsR0FBdUIsSUFBdkI7QUFDRDtBQUNGOztBQUVELFVBQUksS0FBSzFDLENBQUwsR0FBUyxHQUFiLEVBQWtCO0FBQ2hCLGFBQUtsQixLQUFMLENBQVc2RCxLQUFYLElBQW9CLENBQXBCO0FBQ0EsYUFBSzNDLENBQUwsR0FBUyxFQUFUO0FBQ0EsYUFBS0QsQ0FBTCxHQUFTLEVBQVQ7QUFDQSxhQUFLNkMsS0FBTDtBQUNEOztBQUVELFVBQUksS0FBSzlELEtBQUwsQ0FBVzZELEtBQVgsS0FBcUIsQ0FBekIsRUFBMkI7QUFDekIsYUFBS0UsUUFBTDtBQUNEOztBQUlELFVBQUksS0FBSzdDLENBQUwsS0FBVyxHQUFmLEVBQW9CLEtBQUtOLEtBQUwsR0FBYSxLQUFiO0FBQ3BCLFVBQUksS0FBS0EsS0FBTCxLQUFlLElBQW5CLEVBQXlCLEtBQUtJLElBQUwsR0FBWXVCLE1BQU0sR0FBRyxDQUFyQixDQUF6QixLQUNLLElBQUksS0FBS2hDLElBQUwsS0FBYyxJQUFsQixFQUF3QixLQUFLUyxJQUFMLEdBQVlxQixTQUFTLEdBQUdFLE1BQXhCLENBQXhCLEtBQ0EsSUFBSSxLQUFLOUIsS0FBTCxLQUFlLElBQW5CLEVBQXlCLEtBQUtPLElBQUwsR0FBWW9CLFVBQVUsR0FBR0csTUFBekIsQ0FBekIsS0FDQTtBQUFDLGFBQUt4QixJQUFMLEdBQWEsS0FBS2lDLFVBQU4sR0FBb0JWLEtBQWhDO0FBQXVDLGFBQUt0QixJQUFMLEdBQVksQ0FBWjtBQUFlO0FBQzdEOzs7K0JBRVM7QUFDUixXQUFLVCxJQUFMLEdBQVksSUFBWjtBQUNBLFdBQUtFLEtBQUwsR0FBYSxLQUFiO0FBQ0EsV0FBS0gsS0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLRSxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7OztnQ0FFVTtBQUNULFdBQUtELElBQUwsR0FBWSxLQUFaO0FBQ0EsV0FBS0QsS0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLRyxLQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUtELFVBQUwsR0FBa0IsS0FBbEI7QUFDRDs7OzJCQUVLO0FBQ0osV0FBS0UsT0FBTCxHQUFlLElBQWY7QUFDQSxXQUFLRSxLQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUtOLEtBQUwsR0FBYSxLQUFiO0FBQ0Q7OztzQ0FFaUI7QUFDaEIwRCxjQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtDLGNBQUwsQ0FBb0J4QyxJQUFwQixDQUF5QixJQUF6QixDQUFyQyxFQUFxRSxLQUFyRTtBQUNBc0MsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLRSxZQUFMLENBQWtCekMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbkMsRUFBaUUsS0FBakU7QUFDRDs7O21DQUVjMEMsQyxFQUFHO0FBQ2xCLFVBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLEdBQWQsRUFBbUI7QUFDakIsYUFBS0MsU0FBTDtBQUNELE9BRkQsTUFHSyxJQUFJRixDQUFDLENBQUNDLEdBQUYsS0FBVSxHQUFkLEVBQW1CO0FBQ3RCLGFBQUtFLFFBQUw7QUFDRDs7QUFDRCxVQUFJSCxDQUFDLENBQUNDLEdBQUYsS0FBVSxHQUFWLElBQWlCRCxDQUFDLENBQUNJLE1BQUYsS0FBYSxLQUE5QixLQUF3QyxLQUFLdEQsQ0FBTCxLQUFXLEdBQVgsSUFBa0IsS0FBS3VCLE1BQUwsS0FBZ0IsQ0FBMUUsS0FBZ0YsS0FBS3ZCLENBQUwsSUFBVSxHQUE5RixFQUFtRztBQUNqRyxhQUFLdUQsSUFBTDtBQUNEOztBQUVELFVBQUlMLENBQUMsQ0FBQ0MsR0FBRixLQUFVLEdBQVYsSUFBaUIsS0FBS3JFLEtBQUwsQ0FBV2tELElBQVgsS0FBb0IsQ0FBckMsSUFBMEMsS0FBS2pDLENBQUwsR0FBUyxHQUFuRCxJQUEwRCxLQUFLQSxDQUFMLEdBQVMsR0FBbkUsSUFBMEVtRCxDQUFDLENBQUNJLE1BQUYsS0FBYSxLQUEzRixFQUFpRztBQUMvRixhQUFLRSxLQUFMO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDTixDQUFDLENBQUNDLEdBQUYsS0FBVSxHQUFWLElBQWlCRCxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUE1QixLQUF3QyxLQUFLckUsS0FBTCxDQUFXa0QsSUFBWCxLQUFvQixFQUE1RCxJQUFrRWtCLENBQUMsQ0FBQ0ksTUFBRixLQUFhLEtBQW5GLEVBQXlGO0FBQ3ZGLGFBQUtHLE9BQUw7QUFDRDs7QUFFRCxVQUFJLENBQUNQLENBQUMsQ0FBQ0MsR0FBRixLQUFVLEdBQVYsSUFBaUJELENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQTVCLEtBQXdDLEtBQUtyRSxLQUFMLENBQVdrRCxJQUFYLEtBQW9CLENBQTVELElBQWlFa0IsQ0FBQyxDQUFDSSxNQUFGLEtBQWEsS0FBbEYsRUFBeUY7QUFDdkYsYUFBS0ksS0FBTDtBQUNEO0FBRUY7OztpQ0FFYVIsQyxFQUFHO0FBQ2YsVUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBZCxFQUFtQjtBQUNqQixhQUFLNUQsS0FBTCxHQUFhLEtBQWI7QUFDQSxhQUFLSCxLQUFMLEdBQWEsSUFBYjtBQUNELE9BSEQsTUFJSyxJQUFJOEQsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBZCxFQUFtQjtBQUN0QixhQUFLOUQsSUFBTCxHQUFZLEtBQVo7QUFDQSxhQUFLRCxLQUFMLEdBQWEsSUFBYjtBQUNELE9BSEksTUFLQSxJQUFJOEQsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBZCxFQUFtQixDQUN2QjtBQUNGOzs7bUNBRWNRLFEsRUFBUztBQUN0QixVQUFNQyxPQUFPLEdBQUksS0FBSzdELENBQUwsR0FBVSxLQUFLcUIsS0FBaEIsSUFBMkJ1QyxRQUFRLENBQUM1RCxDQUFULEdBQWM0RCxRQUFRLENBQUN2QyxLQUFULEdBQWlCLENBQTFELENBQWhCO0FBQ0EsVUFBTXlDLE9BQU8sR0FBSSxLQUFLN0QsQ0FBTCxHQUFVLEtBQUtxQixNQUFoQixJQUE0QnNDLFFBQVEsQ0FBQzNELENBQVQsR0FBYzJELFFBQVEsQ0FBQ3RDLE1BQVQsR0FBa0IsQ0FBNUQsQ0FBaEI7QUFFQSxVQUFNeUMsWUFBWSxHQUFJLEtBQUsxQyxLQUFMLEdBQVcsQ0FBWixHQUFrQnVDLFFBQVEsQ0FBQ3ZDLEtBQVQsR0FBaUIsQ0FBeEQ7QUFDQSxVQUFNMkMsYUFBYSxHQUFJLEtBQUsxQyxNQUFOLEdBQWlCc0MsUUFBUSxDQUFDdEMsTUFBVCxHQUFrQixDQUF6RDtBQUdBLFVBQUkyQyxrQkFBSjs7QUFFQSxVQUFJQyxJQUFJLENBQUNDLEdBQUwsQ0FBU04sT0FBVCxJQUFvQkUsWUFBcEIsSUFBb0NHLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxPQUFULElBQW9CRSxhQUE1RCxFQUNBO0FBRUUsWUFBSUosUUFBUSxDQUFDUSxJQUFiLEVBQW1CLE9BQU9SLFFBQVEsQ0FBQ1EsSUFBaEI7QUFDbkIsWUFBTUMsT0FBTyxHQUFHTixZQUFZLEdBQUdHLElBQUksQ0FBQ0MsR0FBTCxDQUFTTixPQUFULENBQS9CO0FBQ0EsWUFBTVMsT0FBTyxHQUFHTixhQUFhLEdBQUdFLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxPQUFULENBQWhDO0FBRUEsWUFBSU8sT0FBTyxHQUFHQyxPQUFkO0FBQ0ksY0FBSVQsT0FBTyxHQUFHLENBQWQsRUFBZ0I7QUFDZEksOEJBQWtCLEdBQUcsTUFBckI7QUFDQSxpQkFBS2pFLENBQUwsSUFBVXFFLE9BQVY7QUFDRCxXQUhELE1BR087QUFDTEosOEJBQWtCLEdBQUcsT0FBckI7QUFDQSxpQkFBS2pFLENBQUwsSUFBVXFFLE9BQVY7QUFDRDtBQVBMLGVBUUs7QUFDSCxjQUFJUCxPQUFPLEdBQUcsQ0FBZCxFQUFnQjtBQUNkRyw4QkFBa0IsR0FBRyxLQUFyQjtBQUNBLGlCQUFLaEUsQ0FBTCxJQUFVcUUsT0FBVjtBQUNELFdBSEQsTUFHTztBQUNMTCw4QkFBa0IsR0FBRyxRQUFyQjtBQUNBLGlCQUFLaEUsQ0FBTCxJQUFVcUUsT0FBVjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxhQUFPTCxrQkFBUDtBQUNEOzs7a0NBRVk7QUFDWCxVQUFJLEtBQUtsRixLQUFMLENBQVdrRCxJQUFYLEtBQW9CLEVBQXBCLElBQTBCLEtBQUtsRCxLQUFMLENBQVdrRCxJQUFYLEtBQW9CLENBQWxELEVBQXFELEtBQUtsRCxLQUFMLENBQVdrRCxJQUFYLElBQW1CLENBQW5CO0FBQ3JELFdBQUtzQyxLQUFMO0FBQ0EsV0FBS3hGLEtBQUwsQ0FBVytCLFFBQVg7QUFDRDs7O2lDQUVXO0FBQ1YsVUFBSSxLQUFLL0IsS0FBTCxDQUFXa0QsSUFBWCxLQUFvQixFQUFwQixJQUEwQixLQUFLbEQsS0FBTCxDQUFXa0QsSUFBWCxLQUFvQixDQUFsRCxFQUFxRCxLQUFLbEQsS0FBTCxDQUFXa0QsSUFBWCxJQUFtQixDQUFuQjtBQUNyRCxXQUFLc0MsS0FBTDtBQUNBLFdBQUt4RixLQUFMLENBQVcrQixRQUFYO0FBQ0Q7Ozs0QkFFTTtBQUNMLFdBQUsvQixLQUFMLENBQVdrRCxJQUFYLElBQW1CLENBQW5CO0FBQ0EsV0FBS2xELEtBQUwsQ0FBVytCLFFBQVg7QUFDRDs7OzRCQUVNO0FBQ0wsV0FBSy9CLEtBQUwsQ0FBV2tELElBQVgsSUFBbUIsQ0FBbkI7QUFDQSxXQUFLc0MsS0FBTDtBQUNBLFdBQUt4RixLQUFMLENBQVcrQixRQUFYO0FBQ0EsV0FBS2QsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxXQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNEOzs7NEJBRU07QUFDTCxXQUFLc0UsS0FBTDtBQUNBLFdBQUt4RixLQUFMLENBQVcrQixRQUFYO0FBQ0Q7OzsrQkFDUztBQUNSLFdBQUt5RCxLQUFMO0FBQ0EsV0FBS3hGLEtBQUwsQ0FBV2tELElBQVgsR0FBa0IsRUFBbEI7QUFDQSxXQUFLbEQsS0FBTCxDQUFXK0IsUUFBWDtBQUNEOzs7OEJBRVE7QUFDUCxVQUFJMEQsUUFBUSxHQUFHLElBQUk1RixLQUFKLENBQVUsQ0FBVixFQUFhLEtBQUtJLEdBQWxCLEVBQXVCLEtBQUtDLE1BQTVCLENBQWY7QUFDQSxXQUFLRixLQUFMLEdBQWF5RixRQUFiO0FBQ0EsV0FBS0QsS0FBTDtBQUNBLFdBQUt4RixLQUFMLENBQVcrQixRQUFYO0FBQ0Q7Ozs7OztBQUlEMkQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNUYsUUFBakIsQzs7Ozs7Ozs7Ozs7QUMvVEEsSUFBTUYsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtCQUFELENBQXJCOztBQUNBLElBQU1DLFFBQVEsR0FBR0QsbUJBQU8sQ0FBQyx1Q0FBRCxDQUF4Qjs7QUFFQWtFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQsTUFBSS9ELE1BQU0sR0FBRzhELFFBQVEsQ0FBQzRCLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjtBQUNBLE1BQUkzRixHQUFHLEdBQUdDLE1BQU0sQ0FBQzJGLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVixDQUZ3RCxDQUl4RDtBQUNBOztBQUVBLE1BQUk3RixLQUFLLEdBQUcsSUFBSUgsS0FBSixDQUFVLENBQVYsRUFBYUksR0FBYixFQUFrQkMsTUFBbEIsQ0FBWjtBQUNBLE1BQUlILFFBQUosQ0FBYUMsS0FBYixFQUFvQkMsR0FBcEIsRUFBeUJDLE1BQXpCO0FBQ0QsQ0FURCxFOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0hNTCxLOzs7QUFDSixpQkFBWWlHLE1BQVosRUFBb0I3RixHQUFwQixFQUF5QkMsTUFBekIsRUFBaUM7QUFBQTs7QUFDL0IsU0FBS2dELElBQUwsR0FBWTRDLE1BQVo7QUFDQSxTQUFLN0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBSzRCLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBSzNCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUswQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS21FLGFBQUwsR0FBcUIsR0FBckI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQUk1RSxLQUFKLEVBQWI7QUFDQSxTQUFLNEUsS0FBTCxDQUFXdkQsR0FBWCxHQUFpQix1QkFBakI7QUFDQSxTQUFLbUIsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLSCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBS0UsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFNBQUtzQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQUk5RSxLQUFKLEVBQVo7QUFDQSxTQUFLOEUsSUFBTCxDQUFVekQsR0FBVixHQUFnQiwwQkFBaEI7QUFDQSxTQUFLMEQsSUFBTCxHQUFZLElBQUkvRSxLQUFKLEVBQVo7QUFDQSxTQUFLK0UsSUFBTCxDQUFVMUQsR0FBVixHQUFnQiwwQkFBaEI7QUFDQSxTQUFLMkQsSUFBTCxHQUFZLElBQUloRixLQUFKLEVBQVo7QUFDQSxTQUFLZ0YsSUFBTCxDQUFVM0QsR0FBVixHQUFnQiwwQkFBaEI7QUFDQSxTQUFLNEQsSUFBTCxHQUFZLElBQUlqRixLQUFKLEVBQVo7QUFDQSxTQUFLaUYsSUFBTCxDQUFVNUQsR0FBVixHQUFnQiwwQkFBaEI7QUFDQSxTQUFLaUIsUUFBTCxHQUFnQixDQUFoQjtBQUNEOzs7OytCQUNVO0FBQ1QsV0FBS3pELE1BQUwsQ0FBWXFHLEtBQVosQ0FBa0JDLGVBQWxCLG9DQUE2RCxLQUFLdEQsSUFBbEU7QUFDQXRCLGVBQVMsR0FBRyxLQUFLQSxTQUFqQjtBQUNBMUIsWUFBTSxHQUFHLEtBQUtBLE1BQWQ7QUFDQTZGLG1CQUFhLEdBQUcsS0FBS0EsYUFBckI7QUFDQUMsb0JBQWMsR0FBRyxLQUFLQSxjQUF0Qjs7QUFDQSxVQUFJLEtBQUs5QyxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsYUFBS2pELEdBQUwsQ0FBU3dHLElBQVQsR0FBZ0IsbUJBQWhCO0FBQ0EsYUFBS3hHLEdBQUwsQ0FBU3lHLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxhQUFLekcsR0FBTCxDQUFTMEcsUUFBVCxDQUFrQixlQUFsQixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUNBLGFBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLG9FQUFsQixFQUF3RixFQUF4RixFQUE0RixFQUE1RjtBQUNBLGFBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLDRHQUFsQixFQUFnSSxFQUFoSSxFQUFvSSxFQUFwSTtBQUNBLGFBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLDJHQUFsQixFQUErSCxFQUEvSCxFQUFtSSxFQUFuSTtBQUNBLGFBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLHFIQUFsQixFQUF5SSxFQUF6SSxFQUE2SSxHQUE3STtBQUNBLGFBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLGlIQUFsQixFQUFxSSxFQUFySSxFQUF5SSxHQUF6STtBQUNBLGFBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLHVHQUFsQixFQUEySCxFQUEzSCxFQUErSCxHQUEvSDtBQUNBLGFBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLGtIQUFsQixFQUFzSSxFQUF0SSxFQUEwSSxHQUExSTtBQUNBLGFBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLDRHQUFsQixFQUFnSSxFQUFoSSxFQUFvSSxHQUFwSTtBQUNBLGFBQUsxRyxHQUFMLENBQVN3RyxJQUFULEdBQWdCLGNBQWhCO0FBQ0EsYUFBS3hHLEdBQUwsQ0FBU3lHLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxhQUFLekcsR0FBTCxDQUFTMEcsUUFBVCxDQUFrQiwwQkFBbEIsRUFBOEMsR0FBOUMsRUFBbUQsR0FBbkQ7QUFDRDs7QUFDRCxVQUFJLEtBQUt6RCxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsYUFBS2hELE1BQUwsQ0FBWXFHLEtBQVosQ0FBa0JLLG1CQUFsQixHQUF3QyxPQUF4QztBQUNBLGFBQUsxRyxNQUFMLENBQVlxRyxLQUFaLENBQWtCTSxtQkFBbEIsR0FBd0MsUUFBeEM7QUFDRCxPQUhELE1BR08sSUFBSSxLQUFLM0QsSUFBTCxLQUFjLENBQWxCLEVBQW9CO0FBQ3pCLGFBQUtoRCxNQUFMLENBQVlxRyxLQUFaLENBQWtCSyxtQkFBbEIsR0FBd0MsT0FBeEM7QUFDQSxhQUFLMUcsTUFBTCxDQUFZcUcsS0FBWixDQUFrQk0sbUJBQWxCLEdBQXdDLFFBQXhDO0FBRUFqRixpQkFBUyxDQUFDa0YsSUFBVixDQUFlO0FBQ2I3RixXQUFDLEVBQUVmLE1BQU0sQ0FBQ29DLEtBQVAsR0FBZSxHQURMO0FBRWJwQixXQUFDLEVBQUUsRUFGVTtBQUdib0IsZUFBSyxFQUFFeUQsYUFBYSxHQUFHLEdBSFY7QUFJYnhELGdCQUFNLEVBQUV5RDtBQUpLLFNBQWY7QUFNQXBFLGlCQUFTLENBQUNrRixJQUFWLENBQWU7QUFDYjdGLFdBQUMsRUFBRWYsTUFBTSxDQUFDb0MsS0FBUCxHQUFlLEdBREw7QUFFYnBCLFdBQUMsRUFBRSxFQUZVO0FBR2JvQixlQUFLLEVBQUV5RCxhQUFhLEdBQUcsR0FIVjtBQUlieEQsZ0JBQU0sRUFBRXlELGNBQWMsR0FBRztBQUpaLFNBQWY7QUFNQXBFLGlCQUFTLENBQUNrRixJQUFWLENBQWU7QUFDYjdGLFdBQUMsRUFBRWYsTUFBTSxDQUFDb0MsS0FBUCxHQUFlLEdBREw7QUFFYnBCLFdBQUMsRUFBRWhCLE1BQU0sQ0FBQ3FDLE1BQVAsR0FBZ0IsR0FGTjtBQUdiRCxlQUFLLEVBQUV5RCxhQUhNO0FBSWJ4RCxnQkFBTSxFQUFFeUQ7QUFKSyxTQUFmO0FBTUFwRSxpQkFBUyxDQUFDa0YsSUFBVixDQUFlO0FBQ2I3RixXQUFDLEVBQUVmLE1BQU0sQ0FBQ29DLEtBQVAsR0FBZSxHQURMO0FBRWJwQixXQUFDLEVBQUVoQixNQUFNLENBQUNxQyxNQUFQLEdBQWdCLEdBRk47QUFHYkQsZUFBSyxFQUFFeUQsYUFITTtBQUlieEQsZ0JBQU0sRUFBRXlEO0FBSkssU0FBZjtBQU9BcEUsaUJBQVMsQ0FBQ2tGLElBQVYsQ0FBZTtBQUNiN0YsV0FBQyxFQUFFZixNQUFNLENBQUNvQyxLQUFQLEdBQWUsR0FETDtBQUVicEIsV0FBQyxFQUFFaEIsTUFBTSxDQUFDcUMsTUFBUCxHQUFnQixHQUZOO0FBR2JELGVBQUssRUFBRXlELGFBSE07QUFJYnhELGdCQUFNLEVBQUV5RDtBQUpLLFNBQWY7QUFPQXBFLGlCQUFTLENBQUNrRixJQUFWLENBQWU7QUFDYjdGLFdBQUMsRUFBRSxDQURVO0FBRWJDLFdBQUMsRUFBRSxLQUFLaEIsTUFBTCxDQUFZcUMsTUFBWixHQUFxQixFQUZYO0FBR2JELGVBQUssRUFBRXlELGFBQWEsR0FBRyxHQUhWO0FBSWJ4RCxnQkFBTSxFQUFFeUQsY0FBYyxHQUFHO0FBSlosU0FBZjtBQU9BcEUsaUJBQVMsQ0FBQ2tGLElBQVYsQ0FBZTtBQUNiN0YsV0FBQyxFQUFFZixNQUFNLENBQUNvQyxLQUFQLEdBQWUsR0FETDtBQUVicEIsV0FBQyxFQUFFLEtBQUtoQixNQUFMLENBQVlxQyxNQUFaLEdBQXFCLEVBRlg7QUFHYkQsZUFBSyxFQUFFeUQsYUFBYSxHQUFHLEVBSFY7QUFJYnhELGdCQUFNLEVBQUV5RDtBQUpLLFNBQWY7O0FBTUEsWUFBSSxLQUFLdEMsU0FBTCxLQUFtQixLQUF2QixFQUE2QjtBQUMzQixlQUFLN0IsS0FBTCxDQUFXaUYsSUFBWCxDQUFnQjtBQUNkekIsZ0JBQUksRUFBRSxNQURRO0FBRWRwRSxhQUFDLEVBQUUsR0FGVztBQUdkQyxhQUFDLEVBQUUsR0FIVztBQUlkb0IsaUJBQUssRUFBRSxFQUpPO0FBS2RDLGtCQUFNLEVBQUU7QUFMTSxXQUFoQjtBQU9EO0FBRUYsT0EzRE0sTUEyREEsSUFBSSxLQUFLVyxJQUFMLEtBQWMsQ0FBbEIsRUFBb0I7QUFDekIsYUFBS2hELE1BQUwsQ0FBWXFHLEtBQVosQ0FBa0JLLG1CQUFsQixHQUF3QyxPQUF4QztBQUNBLGFBQUsxRyxNQUFMLENBQVlxRyxLQUFaLENBQWtCTSxtQkFBbEIsR0FBd0MsUUFBeEM7QUFFQWpGLGlCQUFTLENBQUNrRixJQUFWLENBQWU7QUFDYjdGLFdBQUMsRUFBRWYsTUFBTSxDQUFDb0MsS0FBUCxHQUFlLEdBREw7QUFFYnBCLFdBQUMsRUFBRSxFQUZVO0FBR2JvQixlQUFLLEVBQUV5RCxhQUFhLEdBQUcsR0FIVjtBQUlieEQsZ0JBQU0sRUFBRXlEO0FBSkssU0FBZjtBQU1BcEUsaUJBQVMsQ0FBQ2tGLElBQVYsQ0FBZTtBQUNiN0YsV0FBQyxFQUFFZixNQUFNLENBQUNvQyxLQUFQLEdBQWUsR0FETDtBQUVicEIsV0FBQyxFQUFFLEtBQUtoQixNQUFMLENBQVlxQyxNQUFaLEdBQXFCLEdBRlg7QUFHYkQsZUFBSyxFQUFFeUQsYUFITTtBQUlieEQsZ0JBQU0sRUFBRXlEO0FBSkssU0FBZjtBQU1BcEUsaUJBQVMsQ0FBQ2tGLElBQVYsQ0FBZTtBQUNiN0YsV0FBQyxFQUFFZixNQUFNLENBQUNvQyxLQUFQLEdBQWUsR0FETDtBQUVicEIsV0FBQyxFQUFFaEIsTUFBTSxDQUFDcUMsTUFBUCxHQUFnQixHQUZOO0FBR2JELGVBQUssRUFBRXlELGFBQWEsR0FBRyxHQUhWO0FBSWJ4RCxnQkFBTSxFQUFFeUQ7QUFKSyxTQUFmO0FBTUFwRSxpQkFBUyxDQUFDa0YsSUFBVixDQUFlO0FBQ2I3RixXQUFDLEVBQUVmLE1BQU0sQ0FBQ29DLEtBQVAsR0FBZSxHQURMO0FBRWJwQixXQUFDLEVBQUVoQixNQUFNLENBQUNxQyxNQUFQLEdBQWdCLEdBRk47QUFHYkQsZUFBSyxFQUFFeUQsYUFITTtBQUlieEQsZ0JBQU0sRUFBRXlEO0FBSkssU0FBZjtBQU1BcEUsaUJBQVMsQ0FBQ2tGLElBQVYsQ0FBZTtBQUNiN0YsV0FBQyxFQUFFZixNQUFNLENBQUNvQyxLQUFQLEdBQWUsR0FETDtBQUVicEIsV0FBQyxFQUFFaEIsTUFBTSxDQUFDcUMsTUFBUCxHQUFnQixHQUZOO0FBR2JELGVBQUssRUFBRXlELGFBSE07QUFJYnhELGdCQUFNLEVBQUV5RDtBQUpLLFNBQWY7QUFNQXBFLGlCQUFTLENBQUNrRixJQUFWLENBQWU7QUFDYjdGLFdBQUMsRUFBRWYsTUFBTSxDQUFDb0MsS0FBUCxHQUFlLEdBREw7QUFFYnBCLFdBQUMsRUFBRWhCLE1BQU0sQ0FBQ3FDLE1BQVAsR0FBZ0IsRUFGTjtBQUdiRCxlQUFLLEVBQUV5RCxhQUhNO0FBSWJ4RCxnQkFBTSxFQUFFeUQ7QUFKSyxTQUFmO0FBTUEsWUFBSSxLQUFLcEMsU0FBTCxLQUFtQixLQUF2QixFQUNFLEtBQUsvQixLQUFMLENBQVdpRixJQUFYLENBQWdCO0FBQ2R6QixjQUFJLEVBQUUsTUFEUTtBQUVkcEUsV0FBQyxFQUFFLEdBRlc7QUFHZEMsV0FBQyxFQUFFLEdBSFc7QUFJZG9CLGVBQUssRUFBRSxFQUpPO0FBS2RDLGdCQUFNLEVBQUU7QUFMTSxTQUFoQjtBQU9ILE9BaERNLE1Ba0RGLElBQUksS0FBS1csSUFBTCxLQUFjLENBQWxCLEVBQW9CO0FBQ3ZCLGFBQUtoRCxNQUFMLENBQVlxRyxLQUFaLENBQWtCSyxtQkFBbEIsR0FBd0MsS0FBeEM7QUFDQSxhQUFLMUcsTUFBTCxDQUFZcUcsS0FBWixDQUFrQk0sbUJBQWxCLEdBQXdDLEtBQXhDO0FBRUFqRixpQkFBUyxDQUFDa0YsSUFBVixDQUFlO0FBQ2I3RixXQUFDLEVBQUVmLE1BQU0sQ0FBQ29DLEtBQVAsR0FBZSxHQURMO0FBRWJwQixXQUFDLEVBQUUsRUFGVTtBQUdib0IsZUFBSyxFQUFFeUQsYUFBYSxHQUFHLEdBSFY7QUFJYnhELGdCQUFNLEVBQUV5RDtBQUpLLFNBQWY7QUFNQXBFLGlCQUFTLENBQUNrRixJQUFWLENBQWU7QUFDYjdGLFdBQUMsRUFBRWYsTUFBTSxDQUFDb0MsS0FBUCxHQUFlLEdBREw7QUFFYnBCLFdBQUMsRUFBRSxLQUFLaEIsTUFBTCxDQUFZcUMsTUFBWixHQUFxQixHQUZYO0FBR2JELGVBQUssRUFBRXlELGFBSE07QUFJYnhELGdCQUFNLEVBQUV5RDtBQUpLLFNBQWY7QUFNQXBFLGlCQUFTLENBQUNrRixJQUFWLENBQWU7QUFDYjdGLFdBQUMsRUFBRWYsTUFBTSxDQUFDb0MsS0FBUCxHQUFlLEdBREw7QUFFYnBCLFdBQUMsRUFBRWhCLE1BQU0sQ0FBQ3FDLE1BQVAsR0FBZ0IsR0FGTjtBQUdiRCxlQUFLLEVBQUV5RCxhQUFhLEdBQUcsR0FIVjtBQUlieEQsZ0JBQU0sRUFBRXlEO0FBSkssU0FBZjtBQU1BcEUsaUJBQVMsQ0FBQ2tGLElBQVYsQ0FBZTtBQUNiN0YsV0FBQyxFQUFFZixNQUFNLENBQUNvQyxLQUFQLEdBQWUsR0FETDtBQUVicEIsV0FBQyxFQUFFaEIsTUFBTSxDQUFDcUMsTUFBUCxHQUFnQixHQUZOO0FBR2JELGVBQUssRUFBRXlELGFBSE07QUFJYnhELGdCQUFNLEVBQUV5RDtBQUpLLFNBQWY7QUFNQXBFLGlCQUFTLENBQUNrRixJQUFWLENBQWU7QUFDYjdGLFdBQUMsRUFBRWYsTUFBTSxDQUFDb0MsS0FBUCxHQUFlLEdBREw7QUFFYnBCLFdBQUMsRUFBRWhCLE1BQU0sQ0FBQ3FDLE1BQVAsR0FBZ0IsR0FGTjtBQUdiRCxlQUFLLEVBQUV5RCxhQUhNO0FBSWJ4RCxnQkFBTSxFQUFFeUQ7QUFKSyxTQUFmO0FBTUFwRSxpQkFBUyxDQUFDa0YsSUFBVixDQUFlO0FBQ2I3RixXQUFDLEVBQUVmLE1BQU0sQ0FBQ29DLEtBQVAsR0FBZSxHQURMO0FBRWJwQixXQUFDLEVBQUVoQixNQUFNLENBQUNxQyxNQUFQLEdBQWdCLEVBRk47QUFHYkQsZUFBSyxFQUFFeUQsYUFITTtBQUlieEQsZ0JBQU0sRUFBRXlEO0FBSkssU0FBZjtBQU1BLFlBQUksS0FBS3BDLFNBQUwsS0FBbUIsS0FBdkIsRUFDRSxLQUFLL0IsS0FBTCxDQUFXaUYsSUFBWCxDQUFnQjtBQUNkekIsY0FBSSxFQUFFLE1BRFE7QUFFZHBFLFdBQUMsRUFBRSxHQUZXO0FBR2RDLFdBQUMsRUFBRSxHQUhXO0FBSWRvQixlQUFLLEVBQUUsRUFKTztBQUtkQyxnQkFBTSxFQUFFO0FBTE0sU0FBaEI7QUFPSCxPQWhESSxNQWtEQSxJQUFJLEtBQUtXLElBQUwsS0FBYyxDQUFsQixFQUFvQjtBQUN2QixhQUFLaEQsTUFBTCxDQUFZcUcsS0FBWixDQUFrQkssbUJBQWxCLEdBQXdDLE1BQXhDO0FBQ0EsYUFBSzFHLE1BQUwsQ0FBWXFHLEtBQVosQ0FBa0JNLG1CQUFsQixHQUF3QyxRQUF4QztBQUNELE9BSEksTUFLQSxJQUFJLEtBQUszRCxJQUFMLEtBQWMsQ0FBbEIsRUFBb0I7QUFDdkIsYUFBS2hELE1BQUwsQ0FBWXFHLEtBQVosQ0FBa0JLLG1CQUFsQixHQUF3QyxPQUF4QztBQUNBLGFBQUsxRyxNQUFMLENBQVlxRyxLQUFaLENBQWtCTSxtQkFBbEIsR0FBd0MsT0FBeEM7QUFDRCxPQUhJLE1BSUEsSUFBSSxLQUFLM0QsSUFBTCxLQUFjLEVBQWxCLEVBQXFCO0FBQ3hCLGFBQUtqRCxHQUFMLENBQVN3RyxJQUFULEdBQWdCLG1CQUFoQjtBQUNBLGFBQUt4RyxHQUFMLENBQVN5RyxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsYUFBS3pHLEdBQUwsQ0FBUzBHLFFBQVQsQ0FBa0Isa0NBQWxCLEVBQXNELEdBQXRELEVBQTJELEdBQTNEO0FBQ0EsYUFBSzFHLEdBQUwsQ0FBUzBHLFFBQVQsQ0FBa0IsOEJBQWxCLEVBQWtELEdBQWxELEVBQXVELEdBQXZEO0FBQ0Q7QUFDRjs7O2dDQUVXMUYsQyxFQUFHQyxDLEVBQUdvQixLLEVBQU9DLE0sRUFBUXdFLE0sRUFBTztBQUN0QyxVQUFNOUcsR0FBRyxHQUFHLEtBQUtBLEdBQWpCO0FBQ0FBLFNBQUcsQ0FBQytHLFNBQUo7QUFDQS9HLFNBQUcsQ0FBQ2dILE1BQUosQ0FBV2hHLENBQUMsR0FBRzhGLE1BQWYsRUFBdUI3RixDQUF2QjtBQUNBakIsU0FBRyxDQUFDaUgsTUFBSixDQUFXakcsQ0FBQyxHQUFHcUIsS0FBSixHQUFZeUUsTUFBdkIsRUFBK0I3RixDQUEvQjtBQUNBakIsU0FBRyxDQUFDa0gsZ0JBQUosQ0FBcUJsRyxDQUFDLEdBQUdxQixLQUF6QixFQUFnQ3BCLENBQWhDLEVBQW1DRCxDQUFDLEdBQUdxQixLQUF2QyxFQUE4Q3BCLENBQUMsR0FBRzZGLE1BQWxEO0FBQ0E5RyxTQUFHLENBQUNpSCxNQUFKLENBQVdqRyxDQUFDLEdBQUdxQixLQUFmLEVBQXNCcEIsQ0FBQyxHQUFHcUIsTUFBSixHQUFhd0UsTUFBbkM7QUFDQTlHLFNBQUcsQ0FBQ2tILGdCQUFKLENBQXFCbEcsQ0FBQyxHQUFHcUIsS0FBekIsRUFBZ0NwQixDQUFDLEdBQUdxQixNQUFwQyxFQUE0Q3RCLENBQUMsR0FBR3FCLEtBQUosR0FBWXlFLE1BQXhELEVBQWdFN0YsQ0FBQyxHQUFHcUIsTUFBcEU7QUFDQXRDLFNBQUcsQ0FBQ2lILE1BQUosQ0FBV2pHLENBQUMsR0FBRzhGLE1BQU0sQ0FBQ0ssRUFBdEIsRUFBMEJsRyxDQUFDLEdBQUdxQixNQUE5QjtBQUNBdEMsU0FBRyxDQUFDa0gsZ0JBQUosQ0FBcUJsRyxDQUFyQixFQUF3QkMsQ0FBQyxHQUFHcUIsTUFBNUIsRUFBb0N0QixDQUFwQyxFQUF1Q0MsQ0FBQyxHQUFHcUIsTUFBSixHQUFhd0UsTUFBcEQ7QUFDQTlHLFNBQUcsQ0FBQ2lILE1BQUosQ0FBV2pHLENBQVgsRUFBY0MsQ0FBQyxHQUFHNkYsTUFBbEI7QUFDQTlHLFNBQUcsQ0FBQ2tILGdCQUFKLENBQXFCbEcsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCRCxDQUFDLEdBQUc4RixNQUEvQixFQUF1QzdGLENBQXZDO0FBQ0FqQixTQUFHLENBQUNvSCxTQUFKO0FBQ0FwSCxTQUFHLENBQUN5RyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0F6RyxTQUFHLENBQUNxSCxJQUFKO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLckgsR0FBTCxDQUFTeUcsU0FBVCxHQUFxQixPQUFyQjs7QUFDQSxXQUFLLElBQUlyRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHekIsU0FBUyxDQUFDMEIsTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMsYUFBS3BELEdBQUwsQ0FBU3NILFFBQVQsQ0FBa0IzRixTQUFTLENBQUN5QixDQUFELENBQVQsQ0FBYXBDLENBQS9CLEVBQWtDVyxTQUFTLENBQUN5QixDQUFELENBQVQsQ0FBYW5DLENBQS9DLEVBQWtEVSxTQUFTLENBQUN5QixDQUFELENBQVQsQ0FBYWYsS0FBL0QsRUFBc0VWLFNBQVMsQ0FBQ3lCLENBQUQsQ0FBVCxDQUFhZCxNQUFuRjtBQUNEO0FBQ0Y7OztnQ0FFVTtBQUNULFdBQUt0QyxHQUFMLENBQVM2QyxTQUFULENBQW1CLEtBQUttRCxLQUF4QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxFQUErQyxHQUEvQyxFQUFvRCxFQUFwRCxFQUF3RCxFQUF4RCxFQUE0RCxFQUE1RDtBQUNBLFdBQUtoRyxHQUFMLENBQVN3RyxJQUFULEdBQWdCLHNCQUFoQjtBQUNBLFdBQUt4RyxHQUFMLENBQVN1SCxXQUFULEdBQXVCLE9BQXZCO0FBQ0EsV0FBS3ZILEdBQUwsQ0FBU3dILFVBQVQsQ0FBb0IsS0FBSzVELEtBQXpCLEVBQWdDLEdBQWhDLEVBQXFDLEVBQXJDO0FBQ0Q7OzttQ0FFYTtBQUNaLFdBQUs1RCxHQUFMLENBQVMwQixTQUFULENBQW1CLEdBQW5CLEVBQXdCLEVBQXhCLEVBQTRCLEdBQTVCLEVBQWlDLEVBQWpDO0FBQ0EsV0FBSzFCLEdBQUwsQ0FBUzZDLFNBQVQsQ0FBbUIsS0FBS3dELElBQXhCLEVBQThCLEVBQTlCLEVBQWtDLENBQWxDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEdBQTdDLEVBQWtELEVBQWxELEVBQXNELEVBQXRELEVBQTBELEVBQTFEO0FBQ0EsV0FBS3JHLEdBQUwsQ0FBU3dHLElBQVQsR0FBZ0Isc0JBQWhCO0FBQ0EsV0FBS3hHLEdBQUwsQ0FBU3VILFdBQVQsR0FBdUIsT0FBdkI7QUFDQSxXQUFLdkgsR0FBTCxDQUFTd0gsVUFBVCxDQUFvQixLQUFLOUQsUUFBekIsRUFBbUMsR0FBbkMsRUFBd0MsRUFBeEM7QUFDRDs7O2dDQUVVO0FBQ1QsV0FBSzFELEdBQUwsQ0FBUzZDLFNBQVQsQ0FBbUIsS0FBS3FELElBQXhCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLEVBQTRDLEdBQTVDLEVBQWlELEdBQWpELEVBQXNELEVBQXRELEVBQTBELEVBQTFEO0FBQ0Q7OztnQ0FFVTtBQUNULFdBQUtsRyxHQUFMLENBQVM2QyxTQUFULENBQW1CLEtBQUtzRCxJQUF4QixFQUE4QixFQUE5QixFQUFrQyxDQUFsQyxFQUFxQyxFQUFyQyxFQUF5QyxFQUF6QyxFQUE2QyxHQUE3QyxFQUFrRCxHQUFsRCxFQUF1RCxFQUF2RCxFQUEyRCxFQUEzRDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLbkcsR0FBTCxDQUFTNkMsU0FBVCxDQUFtQixLQUFLdUQsSUFBeEIsRUFBOEIsRUFBOUIsRUFBa0MsQ0FBbEMsRUFBcUMsRUFBckMsRUFBeUMsRUFBekMsRUFBNkMsR0FBN0MsRUFBa0QsR0FBbEQsRUFBdUQsRUFBdkQsRUFBMkQsRUFBM0Q7QUFDRDs7O2dDQUVXcEYsQyxFQUFHQyxDLEVBQUU7QUFDZixVQUFJLEtBQUtnQyxJQUFMLElBQWEsQ0FBYixJQUFrQixLQUFLQSxJQUFMLElBQWEsRUFBbkMsRUFBc0M7QUFDdEMsYUFBS3dFLFlBQUw7QUFDQSxhQUFLQyxTQUFMO0FBQ0M7O0FBRUQsVUFBSSxLQUFLekUsSUFBTCxLQUFjLENBQWxCLEVBQW9CO0FBQ2xCLFlBQUlqQyxDQUFDLEdBQUcsR0FBSixJQUFXQSxDQUFDLEdBQUcsR0FBbkIsRUFBdUI7QUFDckIsZUFBSzJHLFdBQUwsQ0FBaUIsRUFBakIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsRUFBL0IsRUFBbUMsQ0FBbkM7QUFDQSxlQUFLM0gsR0FBTCxDQUFTd0csSUFBVCxHQUFnQixrQkFBaEI7QUFDQSxlQUFLeEcsR0FBTCxDQUFTeUcsU0FBVCxHQUFxQixPQUFyQjtBQUNBLGVBQUt6RyxHQUFMLENBQVMwRyxRQUFULENBQWtCLGtCQUFsQixFQUFzQyxFQUF0QyxFQUEwQyxHQUExQztBQUNBLGVBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLGdCQUFsQixFQUFvQyxFQUFwQyxFQUF3QyxHQUF4QztBQUNBLGVBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLFFBQWxCLEVBQTRCLEVBQTVCLEVBQWdDLEdBQWhDO0FBQ0gsU0FQQyxNQU9LO0FBQ0YsZUFBSzFHLEdBQUwsQ0FBUzBCLFNBQVQsQ0FBbUIsRUFBbkIsRUFBdUIsR0FBdkIsRUFBNEIsR0FBNUIsRUFBaUMsRUFBakM7QUFDSjs7QUFFQyxZQUFJVixDQUFDLEdBQUcsR0FBSixJQUFXQSxDQUFDLEdBQUcsR0FBbkIsRUFBdUI7QUFDckIsZUFBSzJHLFdBQUwsQ0FBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsRUFBaEMsRUFBb0MsQ0FBcEM7QUFDQSxlQUFLM0gsR0FBTCxDQUFTd0csSUFBVCxHQUFnQixrQkFBaEI7QUFDQSxlQUFLeEcsR0FBTCxDQUFTeUcsU0FBVCxHQUFxQixPQUFyQjtBQUNBLGVBQUt6RyxHQUFMLENBQVMwRyxRQUFULENBQWtCLGtCQUFsQixFQUFzQyxHQUF0QyxFQUEyQyxHQUEzQztBQUNBLGVBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLG1CQUFsQixFQUF1QyxHQUF2QyxFQUE0QyxHQUE1QztBQUNBLGVBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLFlBQWxCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDO0FBQ0QsU0FQRCxNQU9PO0FBQ0wsZUFBSzFHLEdBQUwsQ0FBUzBCLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0MsRUFBbEM7QUFDRDtBQUNGLE9BdEJELE1Bd0JLLElBQUksS0FBS3VCLElBQUwsS0FBYyxDQUFsQixFQUFvQjtBQUNyQixhQUFLMkUsY0FBTDs7QUFDQSxZQUFJLEtBQUtuRSxTQUFMLEtBQW1CLEtBQXZCLEVBQTZCO0FBQzNCLGVBQUtvRSxTQUFMO0FBQ0Q7QUFDSixPQUxJLE1BT0EsSUFBSSxLQUFLNUUsSUFBTCxLQUFjLENBQWxCLEVBQXFCO0FBQ3hCLGFBQUsyRSxjQUFMOztBQUNBLFlBQUksS0FBS2pFLFNBQUwsS0FBbUIsS0FBdkIsRUFBOEI7QUFDNUIsZUFBS21FLFNBQUw7QUFDRDs7QUFFRCxZQUFJLEtBQUtyRSxTQUFMLEtBQW1CLElBQXZCLEVBQTRCO0FBQzFCOUIsbUJBQVMsQ0FBQ2tGLElBQVYsQ0FBZTtBQUNiN0YsYUFBQyxFQUFFZixNQUFNLENBQUNvQyxLQUFQLEdBQWUsR0FETDtBQUVicEIsYUFBQyxFQUFFLEtBQUtoQixNQUFMLENBQVlxQyxNQUFaLEdBQXFCLEdBRlg7QUFHYkQsaUJBQUssRUFBRXlELGFBQWEsR0FBRyxHQUhWO0FBSWJ4RCxrQkFBTSxFQUFFeUQ7QUFKSyxXQUFmO0FBTUQ7QUFDRixPQWRJLE1BZ0JBLElBQUksS0FBSzlDLElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUN4QixhQUFLMkUsY0FBTDs7QUFDQSxZQUFJLEtBQUszQixTQUFMLEtBQW1CLEtBQXZCLEVBQThCO0FBQzVCLGVBQUs4QixTQUFMO0FBQ0Q7QUFDRixPQUxJLE1BUUEsSUFBSSxLQUFLOUUsSUFBTCxLQUFjLEVBQWxCLEVBQXFCO0FBQ3hCLGFBQUswRSxXQUFMLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEVBQWhDLEVBQW9DLENBQXBDO0FBQ0EsYUFBSzNILEdBQUwsQ0FBU3dHLElBQVQsR0FBZ0IsbUJBQWhCO0FBQ0EsYUFBS3hHLEdBQUwsQ0FBU3lHLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxhQUFLekcsR0FBTCxDQUFTMEcsUUFBVCxDQUFrQixXQUFsQixFQUErQixHQUEvQixFQUFvQyxHQUFwQztBQUNBLGFBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLDhCQUFsQixFQUFrRCxHQUFsRCxFQUF1RCxHQUF2RDtBQUNEO0FBQ0o7Ozs7OztBQUdEakIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCOUYsS0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuXG5jbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgsIGNhbnZhcywgYmFja2dyb3VuZEN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZEN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmZsaXBQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgIHRoaXMubGV2ZWwucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlU2NlbmUoKXtcbiAgICB0aGlzLmRyYXdNYWluQ2hhcmFjdGVyKCk7XG4gICAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB9XG5cbiAgZHJhd01haW5DaGFyYWN0ZXIoKSB7XG4gICAgY29uc3Qgc3ByaXRlV2lkdGggPSAzNTA7XG4gICAgY29uc3Qgc3ByaXRlSGVpZ2h0ID0gNDA3O1xuICAgIGNvbnN0IHJvd3MgPSAxMTtcbiAgICBjb25zdCBjb2xzID0gNztcbiAgICB0aGlzLnRyYWNrUmlnaHQgPSAxO1xuICAgIHRoaXMudHJhY2tMZWZ0ID0gMTtcbiAgICB0aGlzLndpZHRoID0gc3ByaXRlV2lkdGggLyBjb2xzO1xuICAgIHRoaXMuaGVpZ2h0ID0gc3ByaXRlSGVpZ2h0IC8gcm93cztcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMueCA9IDIyMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcmNYPSAwO1xuICAgIHRoaXMuc3JjWT0gdGhpcy50cmFja1JpZ2h0ICogdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICB0aGlzLnNwZWVkWSA9IDE1O1xuICAgIHRoaXMuY2hhcmFjdGVyLnNyYyA9IFwiZGlzdC9pbWFnZXMvYWR2ZW50dXJlci1TaGVldC5wbmdcIjtcbiAgfVxuICBtYWluTG9vcCh0aW1lKXtcbiAgICB0aGlzLnVwZGF0ZUZyYW1lKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmZyYW1lQ291bnQsIHRoaXMudHJhY2tMZWZ0LCB0aGlzLnRyYWNrUmlnaHQpXG4gICAgaWYgKHRoaXMuZmFjaW5nTGVmdCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgKC10aGlzLnggLSAodGhpcy53aWR0aCAqIDIpKSwgdGhpcy55LCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTsgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCoyLCB0aGlzLmhlaWdodCoyKVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgIH0sIDEwMClcbiAgfVxuXG4gIHVwZGF0ZUZyYW1lKHdpZHRoLCBoZWlnaHQsIGZyYW1lQ291bnQsIHRyYWNrTGVmdCwgdHJhY2tSaWdodCl7XG5cbiAgICB0aGlzLnN0aWxsRnJhbWUgPSB0aGlzLmN1ckZyYW1lICUgNFxuICAgIGlmICh0aGlzLmN1ckZyYW1lID09PSA0KSB0aGlzLnN0aWxsRnJhbWUgPSAzXG4gICAgXG4gICAgXG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIHRoaXMuc3JjWCA9IHRoaXMuY3VyRnJhbWUgKiB3aWR0aCArIHdpZHRoO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGggKiAyLCBoZWlnaHQgKiAyKTtcbiAgICB0aGlzLmxldmVsLnVwZGF0ZVNjZW5lKHRoaXMueCwgdGhpcy55KTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxlZnQgJiYgKHRoaXMueCA+IC0yMCB8fCB0aGlzLmxldmVsLnJvb20gIT0xKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNwZWVkWSA9IDE1XG4gICAgICBpZiAoMzEwIC0gdGhpcy55ID4gdGhpcy5zcGVlZFkgfHwgKHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSAyNSAmJiB0aGlzLmxldmVsLnJvb20gIT0gMCkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDY3MCl7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gMTA7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPCAtMjAgJiYgdGhpcy5sZXZlbC5yb29tICE9IDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCgpO1xuICAgICAgdGhpcy54ID0gNjQwO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWwucGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwucGxhdGZvcm1zW2ldKVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIiB8fCBkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidG9wXCIgfHwgZGlyZWN0aW9uID09PSBcImJvdHRvbVwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMDtcbiAgICAgICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmxldmVsLml0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGNvbGxpc2lvbk5hbWUgPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwuaXRlbXNbaV0pXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkxXCIpe1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg2MDAsIDI3MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkyXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzg1LCAyNTAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTIgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueSA+IDUwMCApe1xuICAgICAgdGhpcy5sZXZlbC5saXZlcyAtPSAxO1xuICAgICAgdGhpcy55ID0gMTA7XG4gICAgICB0aGlzLnggPSAyMDtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZXZlbC5saXZlcyA9PT0gMCl7XG4gICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgfVxuXG5cblxuICAgIGlmICh0aGlzLnkgPT09IDMxMCkgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKSB0aGlzLnNyY1kgPSBoZWlnaHQgKiAyO1xuICAgIGVsc2UgaWYgKHRoaXMubGVmdCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tMZWZ0ICogaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMucmlnaHQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrUmlnaHQgKiBoZWlnaHQ7XG4gICAgZWxzZSB7dGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDsgdGhpcy5zcmNZID0gMDt9XG4gIH1cbiAgXG4gIG1vdmVMZWZ0KCl7XG4gICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IHRydWU7XG4gIH1cblxuICBtb3ZlUmlnaHQoKXtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gIH1cblxuICBqdW1wKCl7XG4gICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gIH1cblxuICBiaW5kS2V5SGFuZGxlcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiKSB7XG4gICAgdGhpcy5tb3ZlTGVmdCgpO1xuICB9XG4gIGlmIChlLmtleSA9PT0gXCJ3XCIgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmICh0aGlzLnkgPT09IDMxMCB8fCB0aGlzLnNwZWVkWSA9PT0gMCkgJiYgdGhpcy55IDw9IDMxMCkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcInJcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDQgJiYgdGhpcy54ID4gMzAwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2Upe1xuICAgIHRoaXMuZW50ZXIoKTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwiIFwiIHx8IGUua2V5ID09PSBcInNwYWNlXCIpICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgZS5yZXBlYXQgPT09IGZhbHNlKXtcbiAgICB0aGlzLnJlc3RhcnQoKTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwiIFwiIHx8IGUua2V5ID09PSBcInNwYWNlXCIpICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxufVxuXG4ga2V5VXBIYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09PSBcImRcIikge1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuXG4gIGVsc2UgaWYgKGUua2V5ID09PSBcIndcIikge1xuICB9XG59XG5cbmNvbGxpc2lvbkNoZWNrKHBsYXRmb3JtKXtcbiAgY29uc3QgdmVjdG9yWCA9ICh0aGlzLnggKyAodGhpcy53aWR0aCkpIC0gKHBsYXRmb3JtLnggKyAocGxhdGZvcm0ud2lkdGggLyAyKSk7XG4gIGNvbnN0IHZlY3RvclkgPSAodGhpcy55ICsgKHRoaXMuaGVpZ2h0KSkgLSAocGxhdGZvcm0ueSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKSk7XG5cbiAgY29uc3QgY2VudGVyV2lkdGhzID0gKHRoaXMud2lkdGgvMikgKyAocGxhdGZvcm0ud2lkdGggLyAyKTtcbiAgY29uc3QgY2VudGVySGVpZ2h0cyA9ICh0aGlzLmhlaWdodCkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMik7XG5cblxuICBsZXQgY29sbGlzaW9uRGlyZWN0aW9uO1xuXG4gIGlmIChNYXRoLmFicyh2ZWN0b3JYKSA8IGNlbnRlcldpZHRocyAmJiBNYXRoLmFicyh2ZWN0b3JZKSA8IGNlbnRlckhlaWdodHMpIFxuICB7XG5cbiAgICBpZiAocGxhdGZvcm0ubmFtZSkgcmV0dXJuIHBsYXRmb3JtLm5hbWU7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNlbnRlcldpZHRocyAtIE1hdGguYWJzKHZlY3RvclgpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBjZW50ZXJIZWlnaHRzIC0gTWF0aC5hYnModmVjdG9yWSk7XG5cbiAgICBpZiAob2Zmc2V0WCA8IG9mZnNldFkpXG4gICAgICAgIGlmICh2ZWN0b3JYID4gMCl7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgICAgICB0aGlzLnggKz0gb2Zmc2V0WDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgICAgICB0aGlzLnggLT0gb2Zmc2V0WDtcbiAgICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHZlY3RvclkgPiAwKXtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJ0b3BcIjtcbiAgICAgICAgdGhpcy55ICs9IG9mZnNldFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImJvdHRvbVwiO1xuICAgICAgICB0aGlzLnkgLT0gb2Zmc2V0WVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29sbGlzaW9uRGlyZWN0aW9uO1xufVxuXG5zY3JvbGxSaWdodCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiB0aGlzLmxldmVsLnJvb20gIT09IDApIHRoaXMubGV2ZWwucm9vbSArPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zY3JvbGxMZWZ0KCl7XG4gIGlmICh0aGlzLmxldmVsLnJvb20gIT09IDI1ICYmIHRoaXMubGV2ZWwucm9vbSAhPT0gMCkgdGhpcy5sZXZlbC5yb29tIC09IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbmVudGVyKCl7XG4gIHRoaXMubGV2ZWwucm9vbSArPSAxXG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc3RhcnQoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDE7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB0aGlzLnggPSAyMjA7XG4gIHRoaXMueSA9IDMxMDtcbn1cblxucmVzZXQoKXtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5nYW1lT3Zlcigpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwucm9vbSA9IDI1XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxucmVzdGFydCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoMCwgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5jb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL2dhbWVfdmlld1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgLy8gYmFja2dyb3VuZENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXMyXCIpO1xuICAvLyBiYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gXG4gIGxldCBsZXZlbCA9IG5ldyBMZXZlbCgwLCBjdHgsIGNhbnZhcyk7XG4gIG5ldyBHYW1lVmlldyhsZXZlbCwgY3R4LCBjYW52YXMpO1xufSk7IiwiY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIGN0eCwgY2FudmFzKSB7XG4gICAgdGhpcy5yb29tID0gbnVtYmVyO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5wbGF0Zm9ybVdpZHRoID0gMTUwO1xuICAgIHRoaXMucGxhdGZvcm1IZWlnaHQgPSAyMDtcbiAgICB0aGlzLmhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5oZWFydC5zcmMgPSBcImRpc3QvaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgIHRoaXMuZm91bmRLZXkxID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTIgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MyA9IGZhbHNlO1xuICAgIHRoaXMua2V5MSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5MS5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5MiA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5Mi5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5MyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5My5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5cyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5cy5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5Q291bnQgPSAwO1xuICB9XG4gIGFkZFNjZW5lKCkge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCJkaXN0L2ltYWdlcy9sZXZlbCR7dGhpcy5yb29tfS5wbmdcImBcbiAgICBwbGF0Zm9ybXMgPSB0aGlzLnBsYXRmb3JtcztcbiAgICBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBwbGF0Zm9ybVdpZHRoID0gdGhpcy5wbGF0Zm9ybVdpZHRoO1xuICAgIHBsYXRmb3JtSGVpZ2h0ID0gdGhpcy5wbGF0Zm9ybUhlaWdodFxuICAgIGlmICh0aGlzLnJvb20gPT09IDApIHtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkludHJvZHVjdGlvbjpcIiwgMzAsIDMwKVxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgY29udHJvbCBIZW5yeSB3aG8gaXMgYSBjb2FsIG1pbmVyIGZyb20gdGhlIGtpbmdkb20gb2YgVHJvbWlkZS5cIiwgMzAsIDUwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgaGFzIGFsd2F5cyBrZXB0IGEgbG93IHByb2ZpbGUsIGRldGVybWluZWQgdG8gZG8gaGlzIGpvYiBhbmQgdGhlbiBlbmpveSB0aGUgcGVhY2UgYW5kIHF1aWV0IG9mIGhpcyBob21lLlwiLCAzMCwgNzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBuZXZlciBtYWRlIGFuIGVmZm9ydCB0byBiZSBrbm93biBvciBtYWtlIGZyaWVuZHMuIE5vIG9uZSBrbmV3IGhpbSBwZXJzb25hbGx5IGFuZCBoZSBsaWtlZCBpdCB0aGF0IHdheS5cIiwgMzAsIDkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhlIHByaW5jZXNzIGhhcyBiZWVuIGtpZG5hcHBlZCBhbmQgYWxsIGVmZm9ydHMgdG8gc2F2ZSBoZXIgaGF2ZSBmYWlsZWQuIEFsdGhvdWdoIEhlbnJ5IGhhcyBoZWFyZCBvZiB0aGUgc2l0dWF0aW9uLFwiLCAzMCwgMTEwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiaXQgd2Fzbid0IHNvbWV0aGluZyBoZSB3YXMgaW50ZXJlc3RlZCBpbiBnZXR0aW5nIGludm9sdmVkIGluLiBBcyBoZSB3YXMgd2Fsa2luZyB0byB3b3JrIGhlIHNhdyBhIGZsaWVyIG9mZmVyaW5nXCIsIDMwLCAxMzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJhIG1ham9yIHJld2FyZCB0byBhbnlvbmUgdGhhdCBjYW4gaGVscCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhlIG9uZSB0aGluZyBIZW5yeSBkb2VzIGNhcmUgZm9yIGlzIG1vbmV5LlwiLCAzMCwgMTUwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmVlZHMgdG8gZmluZCB0aGUgNCBrZXlzIHRvIGdldCBpbnRvIHRoZSBlbmVteSBjYXN0bGUgYW5kIHNhdmUgdGhlIHByaW5jZXNzLiBUaGlzIGlzIHdoZXJlIGhpcyBzdG9yeSBiZWdpbnMuIFwiLCAzMCwgMTcwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiQXMgeW91IHByb2dyZXNzIHRocm91Z2ggdGhlIGdhbWUgeW91IHdpbGwgZGlzY292ZXIgbW9yZSBhbmQgbW9yZSBhYm91dCBIZW5yeSwgdGhlIGtpbmdkb20gYW5kIHRoZSBoaXN0b3J5LlwiLCAzMCwgMTkwKTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFNwYWNlYmFyIHRvIHN0YXJ0LicsIDIzMCwgMjE1KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSkge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjExMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDgwMCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMjAsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNzAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTFcIixcbiAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgeTogMjcwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM0MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzgwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjYwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSlcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTJcIixcbiAgICAgICAgICB4OiAzODUsXG4gICAgICAgICAgeTogMjUwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDEwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM4MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI2MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkyXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiNDBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gOCl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMTAwcHhcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgZmFpbGVkIHRvIHNhdmUgdGhlIFByaW5jZXNzLlwiLCAxNzAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgU3BhY2ViYXIgdG8gdHJ5IGFnYWluLicsIDE4MCwgMTUwKTtcbiAgICB9XG4gIH1cblxuICBkcmF3VGV4dEJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpe1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpdXMuYmwsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdfcGxhdGZvcm1zKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QocGxhdGZvcm1zW2ldLngsIHBsYXRmb3Jtc1tpXS55LCBwbGF0Zm9ybXNbaV0ud2lkdGgsIHBsYXRmb3Jtc1tpXS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdIZWFydCgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmhlYXJ0LCAwLCAwLCAxMjUsIDEyNSwgNjUwLCAxMCwgMzAsIDMwKVxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLmxpdmVzLCA2MzIsIDMyKTtcbiAgfVxuXG4gIGRyYXdLZXlDb3VudCgpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg1NjAsIDEwLCAyMDAsIDUwKVxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleXMsIDMyLCAwLCAzMiwgMzIsIDU5MCwgMTIsIDMwLCAzMCk7XG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMua2V5Q291bnQsIDU3MCwgMzIpO1xuICB9XG5cbiAgZHJhd19rZXkxKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MSwgMCwgMCwgMzIsIDMyLCA2MDAsIDI3MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5Migpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTIsIDMyLCAwLCAzMiwgMzIsIDM4NSwgMjUwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkzKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTMsIDY0LCAwLCAzMiwgMzIsIDM4NSwgMjUwLCAzMCwgMzApO1xuICB9XG5cbiAgdXBkYXRlU2NlbmUoeCwgeSl7XG4gICAgaWYgKHRoaXMucm9vbSAhPSAwICYmIHRoaXMucm9vbSAhPSAyNSl7XG4gICAgdGhpcy5kcmF3S2V5Q291bnQoKTtcbiAgICB0aGlzLmRyYXdIZWFydCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpe1xuICAgICAgaWYgKHggPCA0MDAgJiYgeCA+IDIwMCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goOTAsIDI4MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdHb29kIGx1Y2sgSGVucnksJywgOTUsIDMwMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdJIGtub3cgeW91IGNhbicsIDk1LCAzMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnZG8gaXQhJywgOTUsIDMyMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg5MCwgMjgwLCAxMDAsIDUwKTtcbiAgICB9XG5cbiAgICAgIGlmICh4IDwgODAwICYmIHggPiA1MDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQwMCwgMjYwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgYXJlbid0IGdvaW5nXCIsIDQxMCwgMjgwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ3RvIGxhc3QgNSBtaW51dGVzJywgNDEwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIm91dCB0aGVyZS5cIiwgNDEwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDQwMCwgMjYwLCAxMDAsIDUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICAgIHRoaXMuZHJhd19rZXkxKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpIHtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSB0cnVlKXtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMzAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KSB7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTMgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZHJhd19rZXkzKCk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDI1KXtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3goNDAwLCAyNjAsIDEwMCwgNTAsIDUpXG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHYW1lIE92ZXJcIiwgNDEwLCAyODApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFNwYWNlYmFyIHRvIHRyeSBhZ2Fpbi4nLCA0MTAsIDI5MCk7XG4gICAgfVxufVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=