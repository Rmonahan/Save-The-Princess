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
      this.curFrame = (this.curFrame + 1) % frameCount;
      if (this.curFrame === 1) this.stillFrame = 1;
      if (this.curFrame === 2) this.stillFrame = 2;
      if (this.curFrame === 3) this.stillFrame = 3;
      if (this.curFrame === 4) this.stillFrame = 3;
      if (this.curFrame === 5) this.stillFrame = 2;
      if (this.curFrame === 6) this.stillFrame = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsInNwZWVkWCIsInNwZWVkWSIsInNyYyIsInRpbWUiLCJ1cGRhdGVGcmFtZSIsInNjYWxlIiwiZHJhd0ltYWdlIiwic2V0VGltZW91dCIsInN0aWxsRnJhbWUiLCJ1cGRhdGVTY2VuZSIsInJvb20iLCJzY3JvbGxSaWdodCIsInNjcm9sbExlZnQiLCJpIiwibGVuZ3RoIiwiZGlyZWN0aW9uIiwiY29sbGlzaW9uQ2hlY2siLCJjb2xsaXNpb25OYW1lIiwiZm91bmRLZXkxIiwia2V5Q291bnQiLCJmb3VuZEtleTIiLCJmb3VuZEtleTMiLCJsaXZlcyIsInJlc2V0IiwiZ2FtZU92ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInJlcGVhdCIsImp1bXAiLCJlbnRlciIsInJlc3RhcnQiLCJzdGFydCIsInBsYXRmb3JtIiwidmVjdG9yWCIsInZlY3RvclkiLCJjZW50ZXJXaWR0aHMiLCJjZW50ZXJIZWlnaHRzIiwiY29sbGlzaW9uRGlyZWN0aW9uIiwiTWF0aCIsImFicyIsIm5hbWUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNsZWFyIiwibmV3TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibnVtYmVyIiwicGxhdGZvcm1QaWMiLCJwbGF0Zm9ybVdpZHRoIiwicGxhdGZvcm1IZWlnaHQiLCJoZWFydCIsImtleTEiLCJrZXkyIiwia2V5MyIsImtleXMiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImJhY2tncm91bmRQb3NpdGlvblkiLCJiYWNrZ3JvdW5kUG9zaXRpb25YIiwicHVzaCIsInJhZGl1cyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJibCIsImNsb3NlUGF0aCIsImZpbGwiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlVGV4dCIsImRyYXdLZXlDb3VudCIsImRyYXdIZWFydCIsImRyYXdUZXh0Qm94IiwiZHJhd19wbGF0Zm9ybXMiLCJkcmF3X2tleTEiLCJkcmF3X2tleTIiLCJkcmF3X2tleTMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7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UUFBVCxDQUFrQiw4QkFBbEIsRUFBa0QsR0FBbEQsRUFBdUQsR0FBdkQ7QUFDRDtBQUNKOzs7Ozs7QUFHRGpCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9GLEtBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcblxuY2xhc3MgR2FtZVZpZXcge1xuICBjb25zdHJ1Y3RvcihsZXZlbCwgY3R4LCBjYW52YXMsIGJhY2tncm91bmRDdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMuYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDdHg7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMuYmluZEtleUhhbmRsZXJzKCk7XG4gICAgdGhpcy5mbGlwUGxheWVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuanVtcEhlaWdodCA9IDA7XG4gICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy5zcmNYID0gMDtcbiAgICB0aGlzLnNyY1kgPSAwO1xuICAgIHRoaXMueCA9IDMwMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcGVlZCA9IDEyO1xuICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDcwMCwgNDAwKTtcbiAgICB0aGlzLmxldmVsLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCl7XG4gICAgdGhpcy5kcmF3TWFpbkNoYXJhY3RlcigpO1xuICAgIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbiAgfVxuXG4gIGRyYXdNYWluQ2hhcmFjdGVyKCkge1xuICAgIGNvbnN0IHNwcml0ZVdpZHRoID0gMzUwO1xuICAgIGNvbnN0IHNwcml0ZUhlaWdodCA9IDQwNztcbiAgICBjb25zdCByb3dzID0gMTE7XG4gICAgY29uc3QgY29scyA9IDc7XG4gICAgdGhpcy50cmFja1JpZ2h0ID0gMTtcbiAgICB0aGlzLnRyYWNrTGVmdCA9IDE7XG4gICAgdGhpcy53aWR0aCA9IHNwcml0ZVdpZHRoIC8gY29scztcbiAgICB0aGlzLmhlaWdodCA9IHNwcml0ZUhlaWdodCAvIHJvd3M7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnggPSAyMjA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3JjWD0gMDtcbiAgICB0aGlzLnNyY1k9IHRoaXMudHJhY2tSaWdodCAqIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgdGhpcy5zcGVlZFkgPSAxNTtcbiAgICB0aGlzLmNoYXJhY3Rlci5zcmMgPSBcImRpc3QvaW1hZ2VzL2FkdmVudHVyZXItU2hlZXQucG5nXCI7XG4gIH1cbiAgbWFpbkxvb3AodGltZSl7XG4gICAgdGhpcy51cGRhdGVGcmFtZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5mcmFtZUNvdW50LCB0aGlzLnRyYWNrTGVmdCwgdGhpcy50cmFja1JpZ2h0KVxuICAgIGlmICh0aGlzLmZhY2luZ0xlZnQgPT09IHRydWUpe1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICgtdGhpcy54IC0gKHRoaXMud2lkdGggKiAyKSksIHRoaXMueSwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7ICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgqMiwgdGhpcy5oZWlnaHQqMilcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PntcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICB9LCAxMDApXG4gIH1cblxuICB1cGRhdGVGcmFtZSh3aWR0aCwgaGVpZ2h0LCBmcmFtZUNvdW50LCB0cmFja0xlZnQsIHRyYWNrUmlnaHQpe1xuICAgIFxuICAgIFxuICAgIHRoaXMuY3VyRnJhbWUgPSAodGhpcy5jdXJGcmFtZSArIDEpICUgZnJhbWVDb3VudDtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gMSkgdGhpcy5zdGlsbEZyYW1lID0gMTtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gMikgdGhpcy5zdGlsbEZyYW1lID0gMjtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gMykgdGhpcy5zdGlsbEZyYW1lID0gMztcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gNCkgdGhpcy5zdGlsbEZyYW1lID0gMztcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gNSkgdGhpcy5zdGlsbEZyYW1lID0gMjtcbiAgICBpZiAodGhpcy5jdXJGcmFtZSA9PT0gNikgdGhpcy5zdGlsbEZyYW1lID0gMTtcbiAgICB0aGlzLnNyY1ggPSB0aGlzLmN1ckZyYW1lICogd2lkdGggKyB3aWR0aDtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoICogMiwgaGVpZ2h0ICogMik7XG4gICAgdGhpcy5sZXZlbC51cGRhdGVTY2VuZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5sZWZ0ICYmICh0aGlzLnggPiAtMjAgfHwgdGhpcy5sZXZlbC5yb29tICE9MSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucmlnaHQpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuaW5BaXIgPT09IHRydWUpe1xuICAgICAgdGhpcy5zcGVlZFkgPSAxNVxuICAgICAgaWYgKDMxMCAtIHRoaXMueSA+IHRoaXMuc3BlZWRZIHx8ICh0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gMjUgJiYgdGhpcy5sZXZlbC5yb29tICE9IDApKXtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy55ICs9IDMxMCAtIHRoaXMueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5qdW1waW5nID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmp1bXBIZWlnaHQgKz0gMzBcbiAgICAgIHRoaXMueSAtPSAzMDtcbiAgICAgIGlmICh0aGlzLmp1bXBIZWlnaHQgPiAxMzApe1xuICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgIHRoaXMuanVtcEhlaWdodCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPiA2NzApeyBcbiAgICAgIHRoaXMuc2Nyb2xsUmlnaHQoKTtcbiAgICAgIHRoaXMueCA9IC0yMDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA8IC0yMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gMSkge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICB0aGlzLnggPSA2NDA7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbC5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5wbGF0Zm9ybXNbaV0pXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xuICAgICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubGV2ZWwuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgY29sbGlzaW9uTmFtZSA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5pdGVtc1tpXSlcbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTFcIil7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkxID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDYwMCwgMjcwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTJcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MiA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5M1wiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkzID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnkgPiA1MDAgKXtcbiAgICAgIHRoaXMubGV2ZWwubGl2ZXMgLT0gMTtcbiAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgdGhpcy54ID0gMjA7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGV2ZWwubGl2ZXMgPT09IDApe1xuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgIH1cblxuXG5cbiAgICBpZiAodGhpcy55ID09PSAzMTApIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gaGVpZ2h0ICogMjtcbiAgICBlbHNlIGlmICh0aGlzLmxlZnQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrTGVmdCAqIGhlaWdodDtcbiAgICBlbHNlIGlmICh0aGlzLnJpZ2h0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja1JpZ2h0ICogaGVpZ2h0O1xuICAgIGVsc2Uge3RoaXMuc3JjWCA9ICh0aGlzLnN0aWxsRnJhbWUpICogd2lkdGg7IHRoaXMuc3JjWSA9IDA7fVxuICB9XG4gIFxuICBtb3ZlTGVmdCgpe1xuICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSB0cnVlO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCl7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICB9XG5cbiAganVtcCgpe1xuICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICB9XG5cbiAgYmluZEtleUhhbmRsZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIpIHtcbiAgICB0aGlzLm1vdmVSaWdodCgpO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIikge1xuICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgfVxuICBpZiAoZS5rZXkgPT09IFwid1wiICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiAodGhpcy55ID09PSAzMTAgfHwgdGhpcy5zcGVlZFkgPT09IDApICYmIHRoaXMueSA8PSAzMTApIHtcbiAgICB0aGlzLmp1bXAoKTtcbiAgfVxuXG4gIGlmIChlLmtleSA9PT0gXCJyXCIgJiYgdGhpcy5sZXZlbC5yb29tID09PSA0ICYmIHRoaXMueCA+IDMwMCAmJiB0aGlzLnggPCAzNTAgJiYgZS5yZXBlYXQgPT09IGZhbHNlKXtcbiAgICB0aGlzLmVudGVyKCk7XG4gIH1cblxuICBpZiAoKGUua2V5ID09PSBcIiBcIiB8fCBlLmtleSA9PT0gXCJzcGFjZVwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDI1ICYmIGUucmVwZWF0ID09PSBmYWxzZSl7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICBpZiAoKGUua2V5ID09PSBcIiBcIiB8fCBlLmtleSA9PT0gXCJzcGFjZVwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDAgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbn1cblxuIGtleVVwSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIpIHtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiKSB7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cblxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJ3XCIpIHtcbiAgfVxufVxuXG5jb2xsaXNpb25DaGVjayhwbGF0Zm9ybSl7XG4gIGNvbnN0IHZlY3RvclggPSAodGhpcy54ICsgKHRoaXMud2lkdGgpKSAtIChwbGF0Zm9ybS54ICsgKHBsYXRmb3JtLndpZHRoIC8gMikpO1xuICBjb25zdCB2ZWN0b3JZID0gKHRoaXMueSArICh0aGlzLmhlaWdodCkpIC0gKHBsYXRmb3JtLnkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMikpO1xuXG4gIGNvbnN0IGNlbnRlcldpZHRocyA9ICh0aGlzLndpZHRoLzIpICsgKHBsYXRmb3JtLndpZHRoIC8gMik7XG4gIGNvbnN0IGNlbnRlckhlaWdodHMgPSAodGhpcy5oZWlnaHQpICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpO1xuXG5cbiAgbGV0IGNvbGxpc2lvbkRpcmVjdGlvbjtcblxuICBpZiAoTWF0aC5hYnModmVjdG9yWCkgPCBjZW50ZXJXaWR0aHMgJiYgTWF0aC5hYnModmVjdG9yWSkgPCBjZW50ZXJIZWlnaHRzKSBcbiAge1xuXG4gICAgaWYgKHBsYXRmb3JtLm5hbWUpIHJldHVybiBwbGF0Zm9ybS5uYW1lO1xuICAgIGNvbnN0IG9mZnNldFggPSBjZW50ZXJXaWR0aHMgLSBNYXRoLmFicyh2ZWN0b3JYKTtcbiAgICBjb25zdCBvZmZzZXRZID0gY2VudGVySGVpZ2h0cyAtIE1hdGguYWJzKHZlY3RvclkpO1xuXG4gICAgaWYgKG9mZnNldFggPCBvZmZzZXRZKVxuICAgICAgICBpZiAodmVjdG9yWCA+IDApe1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgICAgICAgdGhpcy54ICs9IG9mZnNldFg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgICAgICAgdGhpcy54IC09IG9mZnNldFg7XG4gICAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh2ZWN0b3JZID4gMCl7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwidG9wXCI7XG4gICAgICAgIHRoaXMueSArPSBvZmZzZXRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgdGhpcy55IC09IG9mZnNldFlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbGxpc2lvbkRpcmVjdGlvbjtcbn1cblxuc2Nyb2xsUmlnaHQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgdGhpcy5sZXZlbC5yb29tICE9PSAwKSB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc2Nyb2xsTGVmdCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiB0aGlzLmxldmVsLnJvb20gIT09IDApIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnN0YXJ0KCl7XG4gIHRoaXMubGV2ZWwucm9vbSArPSAxO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbiAgdGhpcy54ID0gMjIwO1xuICB0aGlzLnkgPSAzMTA7XG59XG5cbnJlc2V0KCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuZ2FtZU92ZXIoKXtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLnJvb20gPSAyNVxuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnJlc3RhcnQoKXtcbiAgbGV0IG5ld0xldmVsID0gbmV3IExldmVsKDAsIHRoaXMuY3R4LCB0aGlzLmNhbnZhcyk7XG4gIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9nYW1lX3ZpZXdcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIGJhY2tncm91bmRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzMlwiKTtcbiAgLy8gYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuIFxuICBsZXQgbGV2ZWwgPSBuZXcgTGV2ZWwoMCwgY3R4LCBjYW52YXMpO1xuICBuZXcgR2FtZVZpZXcobGV2ZWwsIGN0eCwgY2FudmFzKTtcbn0pOyIsImNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCBjdHgsIGNhbnZhcykge1xuICAgIHRoaXMucm9vbSA9IG51bWJlcjtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMucGxhdGZvcm1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBsYXRmb3JtUGljLnNyYyA9IFwiZGlzdC9pbWFnZXMvcGxhdGZvcm0ucG5nXCI7XG4gICAgdGhpcy5wbGF0Zm9ybVdpZHRoID0gMTUwO1xuICAgIHRoaXMucGxhdGZvcm1IZWlnaHQgPSAyMDtcbiAgICB0aGlzLmhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5oZWFydC5zcmMgPSBcImRpc3QvaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgIHRoaXMuZm91bmRLZXkxID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTIgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MyA9IGZhbHNlO1xuICAgIHRoaXMua2V5MSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5MS5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5MiA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5Mi5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5MyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5My5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5cyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5cy5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5Q291bnQgPSAwO1xuICB9XG4gIGFkZFNjZW5lKCkge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCJkaXN0L2ltYWdlcy9sZXZlbCR7dGhpcy5yb29tfS5wbmdcImBcbiAgICBwbGF0Zm9ybXMgPSB0aGlzLnBsYXRmb3JtcztcbiAgICBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBwbGF0Zm9ybVdpZHRoID0gdGhpcy5wbGF0Zm9ybVdpZHRoO1xuICAgIHBsYXRmb3JtSGVpZ2h0ID0gdGhpcy5wbGF0Zm9ybUhlaWdodFxuICAgIGlmICh0aGlzLnJvb20gPT09IDApIHtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBjb250cm9sIEhlbnJ5IHdobyBpcyBhIGNvYWwgbWluZXIgZnJvbSB0aGUga2luZ2RvbSBvZiBUcm9taWRlLlwiLCAzMCwgNTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBoYXMgYWx3YXlzIGtlcHQgYSBsb3cgcHJvZmlsZSwgZGV0ZXJtaW5lZCB0byBkbyBoaXMgam9iIGFuZCB0aGVuIGVuam95IHRoZSBwZWFjZSBhbmQgcXVpZXQgb2YgaGlzIGhvbWUuXCIsIDMwLCA3MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5ldmVyIG1hZGUgYW4gZWZmb3J0IHRvIGJlIGtub3duIG9yIG1ha2UgZnJpZW5kcy4gTm8gb25lIGtuZXcgaGltIHBlcnNvbmFsbHkgYW5kIGhlIGxpa2VkIGl0IHRoYXQgd2F5LlwiLCAzMCwgOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUaGUgcHJpbmNlc3MgaGFzIGJlZW4ga2lkbmFwcGVkIGFuZCBhbGwgZWZmb3J0cyB0byBzYXZlIGhlciBoYXZlIGZhaWxlZC4gQWx0aG91Z2ggSGVucnkgaGFzIGhlYXJkIG9mIHRoZSBzaXR1YXRpb24sXCIsIDMwLCAxMTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJpdCB3YXNuJ3Qgc29tZXRoaW5nIGhlIHdhcyBpbnRlcmVzdGVkIGluIGdldHRpbmcgaW52b2x2ZWQgaW4uIEFzIGhlIHdhcyB3YWxraW5nIHRvIHdvcmsgaGUgc2F3IGEgZmxpZXIgb2ZmZXJpbmdcIiwgMzAsIDEzMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcImEgbWFqb3IgcmV3YXJkIHRvIGFueW9uZSB0aGF0IGNhbiBoZWxwIHNhdmUgdGhlIHByaW5jZXNzLiBUaGUgb25lIHRoaW5nIEhlbnJ5IGRvZXMgY2FyZSBmb3IgaXMgbW9uZXkuXCIsIDMwLCAxNTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBuZWVkcyB0byBmaW5kIHRoZSA0IGtleXMgdG8gZ2V0IGludG8gdGhlIGVuZW15IGNhc3RsZSBhbmQgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoaXMgaXMgd2hlcmUgaGlzIHN0b3J5IGJlZ2lucy4gXCIsIDMwLCAxNzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJBcyB5b3UgcHJvZ3Jlc3MgdGhyb3VnaCB0aGUgZ2FtZSB5b3Ugd2lsbCBkaXNjb3ZlciBtb3JlIGFuZCBtb3JlIGFib3V0IEhlbnJ5LCB0aGUga2luZ2RvbSBhbmQgdGhlIGhpc3RvcnkuXCIsIDMwLCAxOTApO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgU3BhY2ViYXIgdG8gc3RhcnQuJywgMjMwLCAyMTUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yb29tID09PSAxKSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItMjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMTEwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgODAwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAyMCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE3MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MVwiLFxuICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICB5OiAyNzAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAzKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxMDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MlwiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjYwLFxuICAgICAgICB5OiAxNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMTUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjUwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5M1wiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA1KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjQwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDgpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjEwMHB4XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBmYWlsZWQgdG8gc2F2ZSB0aGUgUHJpbmNlc3MuXCIsIDE3MCwgMTAwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBTcGFjZWJhciB0byB0cnkgYWdhaW4uJywgMTgwLCAxNTApO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdUZXh0Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyl7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cy5ibCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd19wbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChwbGF0Zm9ybXNbaV0ueCwgcGxhdGZvcm1zW2ldLnksIHBsYXRmb3Jtc1tpXS53aWR0aCwgcGxhdGZvcm1zW2ldLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hlYXJ0KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaGVhcnQsIDAsIDAsIDEyNSwgMTI1LCA2NTAsIDEwLCAzMCwgMzApXG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMubGl2ZXMsIDYzMiwgMzIpO1xuICB9XG5cbiAgZHJhd0tleUNvdW50KCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDU2MCwgMTAsIDIwMCwgNTApXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5cywgMzIsIDAsIDMyLCAzMiwgNTkwLCAxMiwgMzAsIDMwKTtcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5rZXlDb3VudCwgNTcwLCAzMik7XG4gIH1cblxuICBkcmF3X2tleTEoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkxLCAwLCAwLCAzMiwgMzIsIDYwMCwgMjcwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkyKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MiwgMzIsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTMoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MywgNjQsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICB1cGRhdGVTY2VuZSh4LCB5KXtcbiAgICBpZiAodGhpcy5yb29tICE9IDAgJiYgdGhpcy5yb29tICE9IDI1KXtcbiAgICB0aGlzLmRyYXdLZXlDb3VudCgpO1xuICAgIHRoaXMuZHJhd0hlYXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSl7XG4gICAgICBpZiAoeCA8IDQwMCAmJiB4ID4gMjAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg5MCwgMjgwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0dvb2QgbHVjayBIZW5yeSwnLCA5NSwgMzAwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0kga25vdyB5b3UgY2FuJywgOTUsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdkbyBpdCEnLCA5NSwgMzIwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDkwLCAyODAsIDEwMCwgNTApO1xuICAgIH1cblxuICAgICAgaWYgKHggPCA4MDAgJiYgeCA+IDUwMCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goNDAwLCAyNjAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBhcmVuJ3QgZ29pbmdcIiwgNDEwLCAyODApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgndG8gbGFzdCA1IG1pbnV0ZXMnLCA0MTAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwib3V0IHRoZXJlLlwiLCA0MTAsIDMwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNDAwLCAyNjAsIDEwMCwgNTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5kcmF3X2tleTEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMykge1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDEzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpIHtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTMoKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdhbWUgT3ZlclwiLCA0MTAsIDI4MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgU3BhY2ViYXIgdG8gdHJ5IGFnYWluLicsIDQxMCwgMjkwKTtcbiAgICB9XG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==