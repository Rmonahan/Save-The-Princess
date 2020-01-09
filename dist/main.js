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
          x: canvas.width - 330,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsInNwZWVkWCIsInNwZWVkWSIsInNyYyIsInRpbWUiLCJ1cGRhdGVGcmFtZSIsInNjYWxlIiwiZHJhd0ltYWdlIiwic2V0VGltZW91dCIsInN0aWxsRnJhbWUiLCJ1cGRhdGVTY2VuZSIsInJvb20iLCJzY3JvbGxSaWdodCIsInNjcm9sbExlZnQiLCJpIiwibGVuZ3RoIiwiZGlyZWN0aW9uIiwiY29sbGlzaW9uQ2hlY2siLCJjb2xsaXNpb25OYW1lIiwiZm91bmRLZXkxIiwia2V5Q291bnQiLCJmb3VuZEtleTIiLCJmb3VuZEtleTMiLCJsaXZlcyIsInJlc2V0IiwiZ2FtZU92ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInJlcGVhdCIsImp1bXAiLCJlbnRlciIsInJlc3RhcnQiLCJzdGFydCIsInBsYXRmb3JtIiwidmVjdG9yWCIsInZlY3RvclkiLCJjZW50ZXJXaWR0aHMiLCJjZW50ZXJIZWlnaHRzIiwiY29sbGlzaW9uRGlyZWN0aW9uIiwiTWF0aCIsImFicyIsIm5hbWUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNsZWFyIiwibmV3TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibnVtYmVyIiwicGxhdGZvcm1XaWR0aCIsInBsYXRmb3JtSGVpZ2h0IiwiaGVhcnQiLCJrZXkxIiwia2V5MiIsImtleTMiLCJrZXlzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsInB1c2giLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiYmwiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsInN0cm9rZVRleHQiLCJkcmF3S2V5Q291bnQiLCJkcmF3SGVhcnQiLCJkcmF3VGV4dEJveCIsImRyYXdfcGxhdGZvcm1zIiwiZHJhd19rZXkxIiwiZHJhd19rZXkyIiwiZHJhd19rZXkzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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ZixNQUFNLENBQUNvQyxLQUFQLEdBQWUsR0FETDtBQUVicEIsYUFBQyxFQUFFLEtBQUtoQixNQUFMLENBQVlxQyxNQUFaLEdBQXFCLEdBRlg7QUFHYkQsaUJBQUssRUFBRTBELGFBQWEsR0FBRyxHQUhWO0FBSWJ6RCxrQkFBTSxFQUFFMEQ7QUFKSyxXQUFmO0FBTUQ7QUFDRixPQWRJLE1BZ0JBLElBQUksS0FBSy9DLElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUN4QixhQUFLMkUsY0FBTDs7QUFDQSxZQUFJLEtBQUtoRSxTQUFMLEtBQW1CLEtBQXZCLEVBQThCO0FBQzVCLGVBQUttRSxTQUFMO0FBQ0Q7QUFDRixPQUxJLE1BUUEsSUFBSSxLQUFLOUUsSUFBTCxLQUFjLEVBQWxCLEVBQXFCO0FBQ3hCLGFBQUswRSxXQUFMLENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEVBQWhDLEVBQW9DLENBQXBDO0FBQ0EsYUFBSzNILEdBQUwsQ0FBU3dHLElBQVQsR0FBZ0IsbUJBQWhCO0FBQ0EsYUFBS3hHLEdBQUwsQ0FBU3lHLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxhQUFLekcsR0FBTCxDQUFTMEcsUUFBVCxDQUFrQixXQUFsQixFQUErQixHQUEvQixFQUFvQyxHQUFwQztBQUNBLGFBQUsxRyxHQUFMLENBQVMwRyxRQUFULENBQWtCLDhCQUFsQixFQUFrRCxHQUFsRCxFQUF1RCxHQUF2RDtBQUNEO0FBQ0o7Ozs7OztBQUdEaEIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0YsS0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuXG5jbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgsIGNhbnZhcywgYmFja2dyb3VuZEN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZEN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmZsaXBQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgIHRoaXMubGV2ZWwucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlU2NlbmUoKXtcbiAgICB0aGlzLmRyYXdNYWluQ2hhcmFjdGVyKCk7XG4gICAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB9XG5cbiAgZHJhd01haW5DaGFyYWN0ZXIoKSB7XG4gICAgY29uc3Qgc3ByaXRlV2lkdGggPSAzNTA7XG4gICAgY29uc3Qgc3ByaXRlSGVpZ2h0ID0gNDA3O1xuICAgIGNvbnN0IHJvd3MgPSAxMTtcbiAgICBjb25zdCBjb2xzID0gNztcbiAgICB0aGlzLnRyYWNrUmlnaHQgPSAxO1xuICAgIHRoaXMudHJhY2tMZWZ0ID0gMTtcbiAgICB0aGlzLndpZHRoID0gc3ByaXRlV2lkdGggLyBjb2xzO1xuICAgIHRoaXMuaGVpZ2h0ID0gc3ByaXRlSGVpZ2h0IC8gcm93cztcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMueCA9IDIyMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcmNYPSAwO1xuICAgIHRoaXMuc3JjWT0gdGhpcy50cmFja1JpZ2h0ICogdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICB0aGlzLnNwZWVkWSA9IDE1O1xuICAgIHRoaXMuY2hhcmFjdGVyLnNyYyA9IFwiZGlzdC9pbWFnZXMvYWR2ZW50dXJlci1TaGVldC5wbmdcIjtcbiAgfVxuICBtYWluTG9vcCh0aW1lKXtcbiAgICB0aGlzLnVwZGF0ZUZyYW1lKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmZyYW1lQ291bnQsIHRoaXMudHJhY2tMZWZ0LCB0aGlzLnRyYWNrUmlnaHQpXG4gICAgaWYgKHRoaXMuZmFjaW5nTGVmdCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgKC10aGlzLnggLSAodGhpcy53aWR0aCAqIDIpKSwgdGhpcy55LCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTsgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCoyLCB0aGlzLmhlaWdodCoyKVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgIH0sIDEwMClcbiAgfVxuXG4gIHVwZGF0ZUZyYW1lKHdpZHRoLCBoZWlnaHQsIGZyYW1lQ291bnQsIHRyYWNrTGVmdCwgdHJhY2tSaWdodCl7XG5cbiAgICB0aGlzLnN0aWxsRnJhbWUgPSB0aGlzLmN1ckZyYW1lICUgNFxuICAgIGlmICh0aGlzLmN1ckZyYW1lID09PSA0KSB0aGlzLnN0aWxsRnJhbWUgPSAzXG4gICAgXG4gICAgXG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIHRoaXMuc3JjWCA9IHRoaXMuY3VyRnJhbWUgKiB3aWR0aCArIHdpZHRoO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGggKiAyLCBoZWlnaHQgKiAyKTtcbiAgICB0aGlzLmxldmVsLnVwZGF0ZVNjZW5lKHRoaXMueCwgdGhpcy55KTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxlZnQgJiYgKHRoaXMueCA+IC0yMCB8fCB0aGlzLmxldmVsLnJvb20gIT0xKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNwZWVkWSA9IDE1XG4gICAgICBpZiAoMzEwIC0gdGhpcy55ID4gdGhpcy5zcGVlZFkgfHwgKHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSAyNSAmJiB0aGlzLmxldmVsLnJvb20gIT0gMCkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDY3MCl7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gMTA7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPCAtMjAgJiYgdGhpcy5sZXZlbC5yb29tICE9IDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCgpO1xuICAgICAgdGhpcy54ID0gNjQwO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWwucGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwucGxhdGZvcm1zW2ldKVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIiB8fCBkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidG9wXCIgfHwgZGlyZWN0aW9uID09PSBcImJvdHRvbVwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMDtcbiAgICAgICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmxldmVsLml0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGNvbGxpc2lvbk5hbWUgPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwuaXRlbXNbaV0pXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkxXCIpe1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg2MDAsIDI3MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkyXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzg1LCAyNTAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTIgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTNcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MyA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gNTAwICl7XG4gICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICB0aGlzLnkgPSAxMDtcbiAgICAgIHRoaXMueCA9IDIwO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxldmVsLmxpdmVzID09PSAwKXtcbiAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICB9XG5cblxuXG4gICAgaWYgKHRoaXMueSA9PT0gMzEwKSB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaW5BaXIgPT09IHRydWUpIHRoaXMuc3JjWSA9IGhlaWdodCAqIDI7XG4gICAgZWxzZSBpZiAodGhpcy5sZWZ0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja0xlZnQgKiBoZWlnaHQ7XG4gICAgZWxzZSBpZiAodGhpcy5yaWdodCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tSaWdodCAqIGhlaWdodDtcbiAgICBlbHNlIHt0aGlzLnNyY1ggPSAodGhpcy5zdGlsbEZyYW1lKSAqIHdpZHRoOyB0aGlzLnNyY1kgPSAwO31cbiAgfVxuICBcbiAgbW92ZUxlZnQoKXtcbiAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpe1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGp1bXAoKXtcbiAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRLZXlIYW5kbGVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKGUua2V5ID09PSBcIndcIiAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgKHRoaXMueSA9PT0gMzEwIHx8IHRoaXMuc3BlZWRZID09PSAwKSAmJiB0aGlzLnkgPD0gMzEwKSB7XG4gICAgdGhpcy5qdW1wKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiclwiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNCAmJiB0aGlzLnggPiAzMDAgJiYgdGhpcy54IDwgMzUwICYmIGUucmVwZWF0ID09PSBmYWxzZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG5cbiAgaWYgKChlLmtleSA9PT0gXCIgXCIgfHwgZS5rZXkgPT09IFwic3BhY2VcIikgJiYgdGhpcy5sZXZlbC5yb29tID09PSAyNSAmJiBlLnJlcGVhdCA9PT0gZmFsc2Upe1xuICAgIHRoaXMucmVzdGFydCgpO1xuICB9XG5cbiAgaWYgKChlLmtleSA9PT0gXCIgXCIgfHwgZS5rZXkgPT09IFwic3BhY2VcIikgJiYgdGhpcy5sZXZlbC5yb29tID09PSAwICYmIGUucmVwZWF0ID09PSBmYWxzZSkge1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG59XG5cbiBrZXlVcEhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIikge1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG5cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwid1wiKSB7XG4gIH1cbn1cblxuY29sbGlzaW9uQ2hlY2socGxhdGZvcm0pe1xuICBjb25zdCB2ZWN0b3JYID0gKHRoaXMueCArICh0aGlzLndpZHRoKSkgLSAocGxhdGZvcm0ueCArIChwbGF0Zm9ybS53aWR0aCAvIDIpKTtcbiAgY29uc3QgdmVjdG9yWSA9ICh0aGlzLnkgKyAodGhpcy5oZWlnaHQpKSAtIChwbGF0Zm9ybS55ICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpKTtcblxuICBjb25zdCBjZW50ZXJXaWR0aHMgPSAodGhpcy53aWR0aC8yKSArIChwbGF0Zm9ybS53aWR0aCAvIDIpO1xuICBjb25zdCBjZW50ZXJIZWlnaHRzID0gKHRoaXMuaGVpZ2h0KSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKTtcblxuXG4gIGxldCBjb2xsaXNpb25EaXJlY3Rpb247XG5cbiAgaWYgKE1hdGguYWJzKHZlY3RvclgpIDwgY2VudGVyV2lkdGhzICYmIE1hdGguYWJzKHZlY3RvclkpIDwgY2VudGVySGVpZ2h0cykgXG4gIHtcblxuICAgIGlmIChwbGF0Zm9ybS5uYW1lKSByZXR1cm4gcGxhdGZvcm0ubmFtZTtcbiAgICBjb25zdCBvZmZzZXRYID0gY2VudGVyV2lkdGhzIC0gTWF0aC5hYnModmVjdG9yWCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGNlbnRlckhlaWdodHMgLSBNYXRoLmFicyh2ZWN0b3JZKTtcblxuICAgIGlmIChvZmZzZXRYIDwgb2Zmc2V0WSlcbiAgICAgICAgaWYgKHZlY3RvclggPiAwKXtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgICAgIHRoaXMueCArPSBvZmZzZXRYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgIHRoaXMueCAtPSBvZmZzZXRYO1xuICAgICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodmVjdG9yWSA+IDApe1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInRvcFwiO1xuICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMueSAtPSBvZmZzZXRZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb2xsaXNpb25EaXJlY3Rpb247XG59XG5cbnNjcm9sbFJpZ2h0KCl7XG4gIGlmICh0aGlzLmxldmVsLnJvb20gIT09IDI1ICYmIHRoaXMubGV2ZWwucm9vbSAhPT0gMCkgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnNjcm9sbExlZnQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgdGhpcy5sZXZlbC5yb29tICE9PSAwKSB0aGlzLmxldmVsLnJvb20gLT0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuZW50ZXIoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zdGFydCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIHRoaXMueCA9IDIyMDtcbiAgdGhpcy55ID0gMzEwO1xufVxuXG5yZXNldCgpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbmdhbWVPdmVyKCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5yb29tID0gMjVcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5yZXN0YXJ0KCl7XG4gIGxldCBuZXdMZXZlbCA9IG5ldyBMZXZlbCgwLCB0aGlzLmN0eCwgdGhpcy5jYW52YXMpO1xuICB0aGlzLmxldmVsID0gbmV3TGV2ZWw7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVZpZXc7IiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcbmNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vZ2FtZV92aWV3XCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAvLyBiYWNrZ3JvdW5kQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhczJcIik7XG4gIC8vIGJhY2tncm91bmRDdHggPSBiYWNrZ3JvdW5kQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiBcbiAgbGV0IGxldmVsID0gbmV3IExldmVsKDAsIGN0eCwgY2FudmFzKTtcbiAgbmV3IEdhbWVWaWV3KGxldmVsLCBjdHgsIGNhbnZhcyk7XG59KTsiLCJjbGFzcyBMZXZlbCB7XG4gIGNvbnN0cnVjdG9yKG51bWJlciwgY3R4LCBjYW52YXMpIHtcbiAgICB0aGlzLnJvb20gPSBudW1iZXI7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLnBsYXRmb3JtV2lkdGggPSAxNTA7XG4gICAgdGhpcy5wbGF0Zm9ybUhlaWdodCA9IDIwO1xuICAgIHRoaXMuaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmhlYXJ0LnNyYyA9IFwiZGlzdC9pbWFnZXMvaGVhcnQucG5nXCI7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5mb3VuZEtleTEgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MiA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkzID0gZmFsc2U7XG4gICAgdGhpcy5rZXkxID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkxLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkyLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXlzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlDb3VudCA9IDA7XG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImRpc3QvaW1hZ2VzL2xldmVsJHt0aGlzLnJvb219LnBuZ1wiYFxuICAgIHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHBsYXRmb3JtV2lkdGggPSB0aGlzLnBsYXRmb3JtV2lkdGg7XG4gICAgcGxhdGZvcm1IZWlnaHQgPSB0aGlzLnBsYXRmb3JtSGVpZ2h0XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCkge1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSW50cm9kdWN0aW9uOlwiLCAzMCwgMzApXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBjb250cm9sIEhlbnJ5IHdobyBpcyBhIGNvYWwgbWluZXIgZnJvbSB0aGUga2luZ2RvbSBvZiBUcm9taWRlLlwiLCAzMCwgNTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBoYXMgYWx3YXlzIGtlcHQgYSBsb3cgcHJvZmlsZSwgZGV0ZXJtaW5lZCB0byBkbyBoaXMgam9iIGFuZCB0aGVuIGVuam95IHRoZSBwZWFjZSBhbmQgcXVpZXQgb2YgaGlzIGhvbWUuXCIsIDMwLCA3MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5ldmVyIG1hZGUgYW4gZWZmb3J0IHRvIGJlIGtub3duIG9yIG1ha2UgZnJpZW5kcy4gTm8gb25lIGtuZXcgaGltIHBlcnNvbmFsbHkgYW5kIGhlIGxpa2VkIGl0IHRoYXQgd2F5LlwiLCAzMCwgOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUaGUgcHJpbmNlc3MgaGFzIGJlZW4ga2lkbmFwcGVkIGFuZCBhbGwgZWZmb3J0cyB0byBzYXZlIGhlciBoYXZlIGZhaWxlZC4gQWx0aG91Z2ggSGVucnkgaGFzIGhlYXJkIG9mIHRoZSBzaXR1YXRpb24sXCIsIDMwLCAxMTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJpdCB3YXNuJ3Qgc29tZXRoaW5nIGhlIHdhcyBpbnRlcmVzdGVkIGluIGdldHRpbmcgaW52b2x2ZWQgaW4uIEFzIGhlIHdhcyB3YWxraW5nIHRvIHdvcmsgaGUgc2F3IGEgZmxpZXIgb2ZmZXJpbmdcIiwgMzAsIDEzMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcImEgbWFqb3IgcmV3YXJkIHRvIGFueW9uZSB0aGF0IGNhbiBoZWxwIHNhdmUgdGhlIHByaW5jZXNzLiBUaGUgb25lIHRoaW5nIEhlbnJ5IGRvZXMgY2FyZSBmb3IgaXMgbW9uZXkuXCIsIDMwLCAxNTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBuZWVkcyB0byBmaW5kIHRoZSA0IGtleXMgdG8gZ2V0IGludG8gdGhlIGVuZW15IGNhc3RsZSBhbmQgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoaXMgaXMgd2hlcmUgaGlzIHN0b3J5IGJlZ2lucy4gXCIsIDMwLCAxNzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJBcyB5b3UgcHJvZ3Jlc3MgdGhyb3VnaCB0aGUgZ2FtZSB5b3Ugd2lsbCBkaXNjb3ZlciBtb3JlIGFuZCBtb3JlIGFib3V0IEhlbnJ5LCB0aGUga2luZ2RvbSBhbmQgdGhlIGhpc3RvcnkuXCIsIDMwLCAxOTApO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgU3BhY2ViYXIgdG8gc3RhcnQuJywgMjMwLCAyMTUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yb29tID09PSAxKSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItMjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMTEwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgODAwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAyMCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE3MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MVwiLFxuICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICB5OiAyNzAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAzKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxMDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MlwiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjYwLFxuICAgICAgICB5OiAxNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMzAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjUwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5M1wiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA1KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjQwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDgpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjEwMHB4XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBmYWlsZWQgdG8gc2F2ZSB0aGUgUHJpbmNlc3MuXCIsIDE3MCwgMTAwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBTcGFjZWJhciB0byB0cnkgYWdhaW4uJywgMTgwLCAxNTApO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdUZXh0Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyl7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cy5ibCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd19wbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChwbGF0Zm9ybXNbaV0ueCwgcGxhdGZvcm1zW2ldLnksIHBsYXRmb3Jtc1tpXS53aWR0aCwgcGxhdGZvcm1zW2ldLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hlYXJ0KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaGVhcnQsIDAsIDAsIDEyNSwgMTI1LCA2NTAsIDEwLCAzMCwgMzApXG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMubGl2ZXMsIDYzMiwgMzIpO1xuICB9XG5cbiAgZHJhd0tleUNvdW50KCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDU2MCwgMTAsIDIwMCwgNTApXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5cywgMzIsIDAsIDMyLCAzMiwgNTkwLCAxMiwgMzAsIDMwKTtcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5rZXlDb3VudCwgNTcwLCAzMik7XG4gIH1cblxuICBkcmF3X2tleTEoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkxLCAwLCAwLCAzMiwgMzIsIDYwMCwgMjcwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkyKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MiwgMzIsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTMoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MywgNjQsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICB1cGRhdGVTY2VuZSh4LCB5KXtcbiAgICBpZiAodGhpcy5yb29tICE9IDAgJiYgdGhpcy5yb29tICE9IDI1KXtcbiAgICB0aGlzLmRyYXdLZXlDb3VudCgpO1xuICAgIHRoaXMuZHJhd0hlYXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSl7XG4gICAgICBpZiAoeCA8IDQwMCAmJiB4ID4gMjAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg5MCwgMjgwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0dvb2QgbHVjayBIZW5yeSwnLCA5NSwgMzAwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0kga25vdyB5b3UgY2FuJywgOTUsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdkbyBpdCEnLCA5NSwgMzIwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDkwLCAyODAsIDEwMCwgNTApO1xuICAgIH1cblxuICAgICAgaWYgKHggPCA4MDAgJiYgeCA+IDUwMCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goNDAwLCAyNjAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBhcmVuJ3QgZ29pbmdcIiwgNDEwLCAyODApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgndG8gbGFzdCA1IG1pbnV0ZXMnLCA0MTAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwib3V0IHRoZXJlLlwiLCA0MTAsIDMwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNDAwLCAyNjAsIDEwMCwgNTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5kcmF3X2tleTEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMykge1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDEzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpIHtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTMoKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdhbWUgT3ZlclwiLCA0MTAsIDI4MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgU3BhY2ViYXIgdG8gdHJ5IGFnYWluLicsIDQxMCwgMjkwKTtcbiAgICB9XG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==