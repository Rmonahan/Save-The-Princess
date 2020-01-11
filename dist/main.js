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
    this.knightDead === false;
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
            this.ctx.fillText("Press C to enter the castle.", 270, 290);
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

          if (this.secondScene === true) {
            princessCol = Math.floor(currentFrame % 13 / 3);
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

          if (this.princessSwordCount > 1) {
            this.drawTextBox(460, 270, 180, 50, 5);
            this.ctx.font = 'bold 10pt Calibri';
            this.ctx.fillStyle = "black";
            this.ctx.fillText("How cute. You thought I was", 470, 290);
            this.ctx.fillText("the one that needed saving.", 470, 305);
          }

          this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
        }
      } // else if (this.room === 25){
      //   this.drawTextBox(400, 260, 100, 50, 5)
      //   this.ctx.font = 'bold 20pt Calibri';
      //   this.ctx.fillStyle = "white"
      //   this.ctx.fillText("Game Over", 410, 280);
      //   this.ctx.fillText('Press C to try again.', 410, 290);
      // }

    }
  }]);

  return Level;
}();

module.exports = Level;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwic2Nyb2xsUmlnaHQiLCJzY3JvbGxMZWZ0IiwiaSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkNoZWNrIiwiY29sbGlzaW9uTmFtZSIsImZvdW5kS2V5MSIsImtleUNvdW50IiwiZm91bmRLZXkyIiwiZm91bmRLZXkzIiwiZm91bmRLZXk0IiwibGl2ZXMiLCJyZXNldCIsImdhbWVPdmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5Iiwia2V5Q29kZSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwicmVwZWF0IiwianVtcCIsImZvdW5kS2V5cyIsImVudGVyIiwicmVzdGFydCIsInN0YXJ0IiwicGxhdGZvcm0iLCJ2ZWN0b3JYIiwidmVjdG9yWSIsImNlbnRlcldpZHRocyIsImNlbnRlckhlaWdodHMiLCJjb2xsaXNpb25EaXJlY3Rpb24iLCJhYnMiLCJuYW1lIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjbGVhciIsIm5ld0xldmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIm51bWJlciIsInBsYXRmb3JtUGljIiwicGxhdGZvcm1XaWR0aCIsInBsYXRmb3JtSGVpZ2h0IiwiaGVhcnQiLCJmaXJzdFNjZW5lIiwic2Vjb25kU2NlbmUiLCJwcmluY2Vzc1N3b3JkQ291bnQiLCJrbmlnaHREZWFkIiwia2V5MSIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleXMiLCJncmVlbktuaWdodCIsInByaW5jZXNzIiwicHJpbmNlc3NYIiwiZ29sZEtuaWdodCIsImdvbGRLbmlnaHRYIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsInB1c2giLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiYmwiLCJjbG9zZVBhdGgiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2VUZXh0IiwiY3VycmVudEZyYW1lIiwicHJpbmNlc3NDb2wiLCJwcmluY2Vzc1JvdyIsImtuaWdodENvbCIsImtuaWdodFJvdyIsImRyYXdLZXlDb3VudCIsImRyYXdIZWFydCIsImRyYXdUZXh0Qm94IiwiZHJhd19wbGF0Zm9ybXMiLCJkcmF3X2tleTEiLCJkcmF3X2tleTIiLCJkcmF3X2tleTMiLCJkcmF3X2tleTQiLCJjb2wiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsK0JBQUQsQ0FBckI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CQyxHQUFuQixFQUF3QkMsTUFBeEIsRUFBZ0NDLGFBQWhDLEVBQStDO0FBQUE7O0FBQzdDLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0ksZUFBTDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxL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RixFQUE4RixHQUE5RixFQUFtRyxFQUFuRyxFQUF1RyxFQUF2RztBQUNEO0FBR0YsT0FsTjRCLENBcU43QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSDs7Ozs7O0FBR0RwQixNQUFNLENBQUNDLE9BQVAsR0FBaUJ0RyxLQUFqQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5cbmNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IobGV2ZWwsIGN0eCwgY2FudmFzLCBiYWNrZ3JvdW5kQ3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLmJhY2tncm91bmRDdHggPSBiYWNrZ3JvdW5kQ3R4O1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLmJpbmRLZXlIYW5kbGVycygpO1xuICAgIHRoaXMuZmxpcFBsYXllciA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAwO1xuICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMuc3JjWCA9IDA7XG4gICAgdGhpcy5zcmNZID0gMDtcbiAgICB0aGlzLnggPSAzMDA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3BlZWQgPSAxMjtcbiAgICB0aGlzLnN1cGVyTW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDcwMCwgNDAwKTtcbiAgICB0aGlzLmxldmVsLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCl7XG4gICAgdGhpcy5kcmF3TWFpbkNoYXJhY3RlcigpO1xuICAgIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbiAgfVxuXG4gIGRyYXdNYWluQ2hhcmFjdGVyKCkge1xuICAgIGNvbnN0IHNwcml0ZVdpZHRoID0gMzUwO1xuICAgIGNvbnN0IHNwcml0ZUhlaWdodCA9IDQwNztcbiAgICBjb25zdCByb3dzID0gMTE7XG4gICAgY29uc3QgY29scyA9IDc7XG4gICAgdGhpcy50cmFja1JpZ2h0ID0gMTtcbiAgICB0aGlzLnRyYWNrTGVmdCA9IDE7XG4gICAgdGhpcy53aWR0aCA9IHNwcml0ZVdpZHRoIC8gY29scztcbiAgICB0aGlzLmhlaWdodCA9IHNwcml0ZUhlaWdodCAvIHJvd3M7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5vbGRGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnggPSAyMjA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3JjWD0gMDtcbiAgICB0aGlzLnNyY1k9IHRoaXMudHJhY2tSaWdodCAqIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgdGhpcy5zcGVlZFkgPSAxNTtcbiAgICB0aGlzLmNoYXJhY3Rlci5zcmMgPSBcImRpc3QvaW1hZ2VzL2FkdmVudHVyZXItU2hlZXQucG5nXCI7XG4gIH1cbiAgbWFpbkxvb3AodGltZSl7XG4gICAgdGhpcy51cGRhdGVGcmFtZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5mcmFtZUNvdW50LCB0aGlzLnRyYWNrTGVmdCwgdGhpcy50cmFja1JpZ2h0KVxuICAgIGlmICh0aGlzLmZhY2luZ0xlZnQgPT09IHRydWUpe1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICgtdGhpcy54IC0gKHRoaXMud2lkdGggKiAyKSksIHRoaXMueSwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7ICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgqMiwgdGhpcy5oZWlnaHQqMilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdXBlck1vZGUgPT09IGZhbHNlKXtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICAgIH0sIDEwMClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpXG4gICAgICB9LCA0MClcbiAgICB9XG4gIH1cblxuICB1cGRhdGVGcmFtZSh3aWR0aCwgaGVpZ2h0LCBmcmFtZUNvdW50LCB0cmFja0xlZnQsIHRyYWNrUmlnaHQpe1xuICAgIHRoaXMub2xkRnJhbWUgPSB0aGlzLm9sZEZyYW1lICsgMTtcbiAgICBcbiAgICB0aGlzLmN1ckZyYW1lID0gKHRoaXMuY3VyRnJhbWUgKyAxKSAlIGZyYW1lQ291bnQ7XG4gICAgdGhpcy5zdGlsbEZyYW1lID0gTWF0aC5mbG9vcigodGhpcy5vbGRGcmFtZSAlIDkpIC8gMylcbiAgICB0aGlzLnNyY1ggPSB0aGlzLmN1ckZyYW1lICogd2lkdGggKyB3aWR0aDtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoICogMiwgaGVpZ2h0ICogMik7XG4gICAgdGhpcy5sZXZlbC51cGRhdGVTY2VuZSh0aGlzLngsIHRoaXMueSwgdGhpcy5vbGRGcmFtZSk7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5sZWZ0ICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IGZhbHNlICYmICh0aGlzLnggPiAtMjAgfHwgKHRoaXMubGV2ZWwucm9vbSAhPTEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcpKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNwZWVkWSA9IDE1XG4gICAgICBpZiAoMzEwIC0gdGhpcy55ID4gdGhpcy5zcGVlZFkgfHwgKHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3ICYmIHRoaXMubGV2ZWwucm9vbSAhPSAyNSAmJiB0aGlzLmxldmVsLnJvb20gIT0gMCAmJiB0aGlzLnN1cGVyTW9kZSA9PT0gZmFsc2UpKXtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy55ICs9IDMxMCAtIHRoaXMueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5qdW1waW5nID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmp1bXBIZWlnaHQgKz0gMzBcbiAgICAgIHRoaXMueSAtPSAzMDtcbiAgICAgIGlmICh0aGlzLmp1bXBIZWlnaHQgPiAxMzApe1xuICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgIHRoaXMuanVtcEhlaWdodCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPiA2NzApeyBcbiAgICAgIHRoaXMuc2Nyb2xsUmlnaHQoKTtcbiAgICAgIHRoaXMueCA9IC0yMDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA8IC0yMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNykge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICB0aGlzLnggPSA2NDA7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbC5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5wbGF0Zm9ybXNbaV0pXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xuICAgICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubGV2ZWwuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgY29sbGlzaW9uTmFtZSA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5pdGVtc1tpXSlcbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTFcIil7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkxID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDYwMCwgMjQwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTJcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MiA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5M1wiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXk0XCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjI1LCAzNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueSA+IDUwMCApe1xuICAgICAgdGhpcy5sZXZlbC5saXZlcyAtPSAxO1xuICAgICAgdGhpcy55ID0gMTA7XG4gICAgICB0aGlzLnggPSAyMDtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZXZlbC5saXZlcyA9PT0gMCl7XG4gICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgfVxuXG5cblxuICAgIGlmICh0aGlzLnkgPT09IDMxMCkgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKSB0aGlzLnNyY1kgPSBoZWlnaHQgKiAyO1xuICAgIGVsc2UgaWYgKHRoaXMubGVmdCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tMZWZ0ICogaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMucmlnaHQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrUmlnaHQgKiBoZWlnaHQ7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNyY1ggPSAodGhpcy5zdGlsbEZyYW1lKSAqIHdpZHRoOyBcbiAgICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgfVxuICB9XG4gIFxuICBtb3ZlTGVmdCgpe1xuICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSB0cnVlO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCl7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICB9XG5cbiAganVtcCgpe1xuICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICB9XG5cbiAgYmluZEtleUhhbmRsZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIgfHwgZS5rZXlDb2RlID09PSAzOSkge1xuICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiIHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXlDb2RlID09PSAzOCkgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmICh0aGlzLnkgPT09IDMxMCB8fCB0aGlzLnNwZWVkWSA9PT0gMCkgJiYgdGhpcy55IDw9IDMxMCkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDYgJiYgdGhpcy54ID4gMjYwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5mb3VuZEtleXMoKSA9PT0gdHJ1ZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDI1ICYmIGUucmVwZWF0ID09PSBmYWxzZSl7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBpZiAoKGUua2V5ID09PSBcInBcIikgJiYgdGhpcy5sZXZlbC5yb29tID09PSAxICYmIGUucmVwZWF0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zdXBlck1vZGUgPSAhdGhpcy5zdXBlck1vZGU7XG4gICAgfVxuXG59XG5cbiBrZXlVcEhhbmRsZXIoZSkge1xuICAgaWYgKGUua2V5ID09PSBcImRcIiB8fCBlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG4gICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIgfHwgZS5rZXlDb2RlID09PSAzNykge1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG59XG5cbmZvdW5kS2V5cygpe1xuICByZXR1cm4gdGhpcy5sZXZlbC5mb3VuZEtleTEgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTIgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTMgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTRcbn1cblxuY29sbGlzaW9uQ2hlY2socGxhdGZvcm0pe1xuICBjb25zdCB2ZWN0b3JYID0gKHRoaXMueCArICh0aGlzLndpZHRoKSkgLSAocGxhdGZvcm0ueCArIChwbGF0Zm9ybS53aWR0aCAvIDIpKTtcbiAgY29uc3QgdmVjdG9yWSA9ICh0aGlzLnkgKyAodGhpcy5oZWlnaHQpKSAtIChwbGF0Zm9ybS55ICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpKTtcblxuICBjb25zdCBjZW50ZXJXaWR0aHMgPSAodGhpcy53aWR0aC8yKSArIChwbGF0Zm9ybS53aWR0aCAvIDIpO1xuICBjb25zdCBjZW50ZXJIZWlnaHRzID0gKHRoaXMuaGVpZ2h0KSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKTtcblxuXG4gIGxldCBjb2xsaXNpb25EaXJlY3Rpb247XG5cbiAgaWYgKE1hdGguYWJzKHZlY3RvclgpIDwgY2VudGVyV2lkdGhzICYmIE1hdGguYWJzKHZlY3RvclkpIDwgY2VudGVySGVpZ2h0cykgXG4gIHtcblxuICAgIGlmIChwbGF0Zm9ybS5uYW1lKSByZXR1cm4gcGxhdGZvcm0ubmFtZTtcbiAgICBjb25zdCBvZmZzZXRYID0gY2VudGVyV2lkdGhzIC0gTWF0aC5hYnModmVjdG9yWCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGNlbnRlckhlaWdodHMgLSBNYXRoLmFicyh2ZWN0b3JZKTtcblxuICAgIGlmIChvZmZzZXRYIDwgb2Zmc2V0WSlcbiAgICAgICAgaWYgKHZlY3RvclggPiAwKXtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgICAgIHRoaXMueCArPSBvZmZzZXRYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgIHRoaXMueCAtPSBvZmZzZXRYO1xuICAgICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodmVjdG9yWSA+IDApe1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInRvcFwiO1xuICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMueSAtPSBvZmZzZXRZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb2xsaXNpb25EaXJlY3Rpb247XG59XG5cbnNjcm9sbFJpZ2h0KCl7XG4gIGlmICh0aGlzLmxldmVsLnJvb20gIT09IDI1ICYmICh0aGlzLmxldmVsLnJvb20gIT09IDAgJiYgdGhpcy5sZXZlbC5yb29tICE9PSA3KSkgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnNjcm9sbExlZnQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMCAmJiB0aGlzLmxldmVsLnJvb20gIT09IDcpKSB0aGlzLmxldmVsLnJvb20gLT0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuZW50ZXIoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy54ID0gLTIwO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc3RhcnQoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDE7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB0aGlzLnggPSAyMjA7XG4gIHRoaXMueSA9IDMxMDtcbn1cblxucmVzZXQoKXtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5nYW1lT3Zlcigpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwucm9vbSA9IDI1XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxucmVzdGFydCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoMCwgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5jb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL2dhbWVfdmlld1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gXG4gIGxldCBsZXZlbCA9IG5ldyBMZXZlbCgwLCBjdHgsIGNhbnZhcyk7XG4gIG5ldyBHYW1lVmlldyhsZXZlbCwgY3R4LCBjYW52YXMpO1xufSk7IiwiY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIGN0eCwgY2FudmFzKSB7XG4gICAgdGhpcy5yb29tID0gbnVtYmVyO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5wbGF0Zm9ybVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucGxhdGZvcm1QaWMuc3JjID0gXCJkaXN0L2ltYWdlcy9wbGF0Zm9ybS5wbmdcIjtcbiAgICB0aGlzLnBsYXRmb3JtV2lkdGggPSAxNTA7XG4gICAgdGhpcy5wbGF0Zm9ybUhlaWdodCA9IDIwO1xuICAgIHRoaXMuaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmhlYXJ0LnNyYyA9IFwiZGlzdC9pbWFnZXMvaGVhcnQucG5nXCI7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkxID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTIgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MyA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXk0ID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLnNlY29uZFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLnByaW5jZXNzU3dvcmRDb3VudCA9IDA7XG4gICAgdGhpcy5rbmlnaHREZWFkID09PSBmYWxzZTtcbiAgICB0aGlzLmtleTEgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTEuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTIuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTQuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleXMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleXMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleUNvdW50ID0gMDtcbiAgICB0aGlzLmdyZWVuS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5ncmVlbktuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL01pdGhlcmFsS25pZ2h0LnBuZ1wiO1xuICAgIHRoaXMucHJpbmNlc3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByaW5jZXNzLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5wcmluY2Vzc1ggPSA1MDA7XG4gICAgdGhpcy5nb2xkS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5nb2xkS25pZ2h0LnNyYyA9IFwiZGlzdC9pbWFnZXMvR29sZEtuaWdodC5wbmdcIlxuICAgIHRoaXMuZ29sZEtuaWdodFggPSA3MDA7XG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImRpc3QvaW1hZ2VzL2xldmVsJHt0aGlzLnJvb219LnBuZ1wiYFxuICAgIHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHBsYXRmb3JtV2lkdGggPSB0aGlzLnBsYXRmb3JtV2lkdGg7XG4gICAgcGxhdGZvcm1IZWlnaHQgPSB0aGlzLnBsYXRmb3JtSGVpZ2h0XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCkge1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGNvbnRyb2wgSGVucnkgd2hvIGlzIGEgY29hbCBtaW5lciBmcm9tIHRoZSBraW5nZG9tIG9mIFRyb21pZGUuXCIsIDMwLCA1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIGhhcyBhbHdheXMga2VwdCBhIGxvdyBwcm9maWxlLCBkZXRlcm1pbmVkIHRvIGRvIGhpcyBqb2IgYW5kIHRoZW4gZW5qb3kgdGhlIHBlYWNlIGFuZCBxdWlldCBvZiBoaXMgaG9tZS5cIiwgMzAsIDcwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmV2ZXIgbWFkZSBhbiBlZmZvcnQgdG8gYmUga25vd24gb3IgbWFrZSBmcmllbmRzLiBObyBvbmUga25ldyBoaW0gcGVyc29uYWxseSBhbmQgaGUgbGlrZWQgaXQgdGhhdCB3YXkuXCIsIDMwLCA5MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRoZSBwcmluY2VzcyBoYXMgYmVlbiBraWRuYXBwZWQgYW5kIGFsbCBlZmZvcnRzIHRvIHNhdmUgaGVyIGhhdmUgZmFpbGVkLiBBbHRob3VnaCBIZW5yeSBoYXMgaGVhcmQgb2YgdGhlIHNpdHVhdGlvbixcIiwgMzAsIDExMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIml0IHdhc24ndCBzb21ldGhpbmcgaGUgd2FzIGludGVyZXN0ZWQgaW4gZ2V0dGluZyBpbnZvbHZlZCBpbi4gQXMgaGUgd2FzIHdhbGtpbmcgdG8gd29yayBoZSBzYXcgYSBmbGllciBvZmZlcmluZ1wiLCAzMCwgMTMwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYSBtYWpvciByZXdhcmQgdG8gYW55b25lIHRoYXQgY2FuIGhlbHAgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoZSBvbmUgdGhpbmcgSGVucnkgZG9lcyBjYXJlIGZvciBpcyBtb25leS5cIiwgMzAsIDE1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5lZWRzIHRvIGZpbmQgdGhlIDQga2V5cyB0byBnZXQgaW50byB0aGUgZW5lbXkgY2FzdGxlIGFuZCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhpcyBpcyB3aGVyZSBoaXMgc3RvcnkgYmVnaW5zLiBcIiwgMzAsIDE3MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFycm93IGtleXMgb3IgQSBhbmQgRCB0byBtb3ZlIGxlZnQvcmlnaHQgYW5kIFcgdG8ganVtcC4gTm90ZTogVGhlcmUgaXMgbm8gZG91YmxlIGp1bXAuXCIsIDMwLCAxOTAgKVxuICAgICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQuJywgMjYwLCAyMTUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yb29tID09PSAxKSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItMjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMTEwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgODAwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAyMCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE3MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAzMCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkxXCIsXG4gICAgICAgICAgeDogNjAwLFxuICAgICAgICAgIHk6IDI0MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDEwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM4MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI2MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkyXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NjAsXG4gICAgICAgIHk6IDE0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMxNSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0NDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkzXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDYwMCxcbiAgICAgICAgeTogNzUsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1NTAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA3MCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA0NzUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTMwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE0MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNTUwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA1MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTRcIixcbiAgICAgICAgICB4OiAyMjUsXG4gICAgICAgICAgeTogMzQwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNikge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjIsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDcwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY3MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDcwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGZhaWxlZCB0byBzYXZlIHRoZSBQcmluY2Vzcy5cIiwgMTcwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gdHJ5IGFnYWluLicsIDIyMCwgMTUwKTtcbiAgICB9XG4gIH1cblxuICBkcmF3VGV4dEJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpe1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpdXMuYmwsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdfcGxhdGZvcm1zKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QocGxhdGZvcm1zW2ldLngsIHBsYXRmb3Jtc1tpXS55LCBwbGF0Zm9ybXNbaV0ud2lkdGgsIHBsYXRmb3Jtc1tpXS5oZWlnaHQpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucGxhdGZvcm1QaWMsIDAsIDAsIDk2LCA5NiwgcGxhdGZvcm1zW2ldLngsIHBsYXRmb3Jtc1tpXS55LCBwbGF0Zm9ybXNbaV0ud2lkdGgsIHBsYXRmb3Jtc1tpXS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdIZWFydCgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmhlYXJ0LCAwLCAwLCAxMjUsIDEyNSwgNjUwLCAxMCwgMzAsIDMwKVxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLmxpdmVzLCA2MzIsIDMyKTtcbiAgfVxuXG4gIGRyYXdLZXlDb3VudCgpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg1NjAsIDEwLCAyMDAsIDUwKVxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleXMsIDMyLCAwLCAzMiwgMzIsIDU5MCwgMTIsIDMwLCAzMCk7XG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMua2V5Q291bnQsIDU3MCwgMzIpO1xuICB9XG5cbiAgZHJhd19rZXkxKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MSwgMCwgMCwgMzIsIDMyLCA2MDAsIDI0MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5Migpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTIsIDMyLCAwLCAzMiwgMzIsIDM4NSwgMjUwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkzKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTMsIDY0LCAwLCAzMiwgMzIsIDM4NSwgMjUwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXk0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTQsIDk2LCAwLCAzMiwgMzIsIDIyNSwgMzQwLCAzMCwgMzApO1xuICB9XG5cbiAgdXBkYXRlU2NlbmUoeCwgeSwgY3VycmVudEZyYW1lKXtcbiAgICBsZXQgcHJpbmNlc3NDb2w7XG4gICAgbGV0IHByaW5jZXNzUm93ID0gMjtcbiAgICBsZXQga25pZ2h0Q29sO1xuICAgIGxldCBrbmlnaHRSb3c7XG5cbiAgICBpZiAodGhpcy5yb29tICE9IDAgJiYgdGhpcy5yb29tICE9IDI1KXtcbiAgICB0aGlzLmRyYXdLZXlDb3VudCgpO1xuICAgIHRoaXMuZHJhd0hlYXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSl7XG4gICAgICBpZiAoeCA8IDQwMCAmJiB4ID4gMjAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg5MCwgMjgwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0dvb2QgbHVjayBIZW5yeSwnLCA5NSwgMzAwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0kga25vdyB5b3UgY2FuJywgOTUsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdkbyBpdCEnLCA5NSwgMzIwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDkwLCAyODAsIDEwMCwgNTApO1xuICAgIH1cblxuICAgICAgaWYgKHggPCA4MDAgJiYgeCA+IDUwMCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goNDAwLCAyNjAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBhcmVuJ3QgZ29pbmdcIiwgNDEwLCAyODApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgndG8gbGFzdCA1IG1pbnV0ZXMnLCA0MTAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwib3V0IHRoZXJlLlwiLCA0MTAsIDMwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNDAwLCAyNjAsIDEwMCwgNTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5kcmF3X2tleTEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMykge1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDEzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpIHtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1MDAsXG4gICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDMwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuZHJhd19rZXk0KCk7XG4gICAgICB9ICBcbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDYpe1xuICAgICAgdGhpcy5kcmF3X3BsYXRmb3JtcygpO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgY29sID0gY3VycmVudEZyYW1lICUgMTBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDMyMCwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmdyZWVuS25pZ2h0LCAzMiAqIGNvbCwgMCwgMzIsIDMyLCAtMzg1LCAzMTAsIDY1LCA2NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyMjAsIDI3MCwgMTIwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IG11c3QgaGF2ZSBhbGwgNFwiLCAyMzAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdrZXlzIHRvIGVudGVyIHRoZSBjYXN0bGUuJywgMjMwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDIyMCwgMjcwLCAxMjAsIDUwKTtcbiAgICAgICAgaWYgKHggPiAyNjAgJiYgeCA8IDM1MCl7XG4gICAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyNjAsIDI3MCwgMTUwLCAyNSwgNSk7XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIEMgdG8gZW50ZXIgdGhlIGNhc3RsZS5cIiwgMjcwLCAyOTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyNjAsIDI3MCwgMTUwLCAyNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDcpe1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5nb2xkS25pZ2h0WCwgMzAwLCA4NSwgODUpXG4gICAgICBpZiAodGhpcy5maXJzdFNjZW5lID09PSB0cnVlKXtcbiAgICAgICBwcmluY2Vzc0NvbCA9IDc7XG4gICAgICAgIGlmIChjdXJyZW50RnJhbWUgJSA4ID09PSAwKXtcbiAgICAgICAgIHByaW5jZXNzQ29sID0gODtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoeCA8IDI1MCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMzkwLCAyOTAsIDE1MCwgNDAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGxlYXNlIHNhdmUgbWUhIFRoZVwiLCA0MDAgLCAzMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImV2aWwga25pZ2h0IGlzIGNvbWluZyFcIiwgNDAwLCAzMjMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM5MCwgMjkwLCAxNTAsIDQwKTtcbiAgICAgIH1cbiAgICAgIGtuaWdodFJvdyA9IDE7XG4gICAgICBpZiAoeCA+IDI2MCl7XG4gICAgICAgIGtuaWdodENvbCA9IChjdXJyZW50RnJhbWUpICUgMTA7XG4gICAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID4gMzUwKSB7XG4gICAgICAgICAgdGhpcy5nb2xkS25pZ2h0WCAtPSA1O1xuICAgICAgICAgIGtuaWdodFJvdyA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NTd29yZENvdW50ID4gMSkge1xuICAgICAgICAgIGtuaWdodFJvdyA9IDQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa25pZ2h0Um93ID09PSA0ICYmIGtuaWdodENvbCA9PT0gOSl7XG4gICAgICAgICAgdGhpcy5rbmlnaHREZWFkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUpe1xuICAgICAgICAgIGtuaWdodENvbCA9IDk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5nb2xkS25pZ2h0LCAzMiAqIGtuaWdodENvbCwga25pZ2h0Um93ICogMzIsIDMyLCAzMiwgLXRoaXMuZ29sZEtuaWdodFggLSA4NSwgMzAwLCA4NSwgODUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID4gMzYwICYmIHRoaXMuZ29sZEtuaWdodFggPCA2MDApXG4gICAgICB7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMTMwLCAyNTAsIDE4MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGV5IHlvdSBiaWcgZHVtbXkuIFlvdVwiLCAxNDAsIDI3Mik7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYmV0dGVyIGxldCB0aGUgcHJpbmNlc3MgZ28hXCIsIDE0MCwgMjg1KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPT09IDM1MCAmJiB0aGlzLnByaW5jZXNzWCAhPSAzOTApe1xuICAgICAgICB0aGlzLmZpcnN0U2NlbmUgPSBmYWxzZTtcbiAgICAgICAgcHJpbmNlc3NDb2wgPSBjdXJyZW50RnJhbWUgJSAyO1xuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPiAzOTApe1xuICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSA1O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgxMzAsIDI1MCwgMTgwLCA1NSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjEwLCAyMzAsIDE3MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhhbmsgZ29kIHlvdSBhcmUgaGVyZS5cIiwgMjIwLCAyNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkV2ZXJ5b25lIGhhcyBpdCBhbGwgd3JvbmdcIiwgMjIwLCAyNjUpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPT09IDM5MCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMTAsIDIzMCwgMTcwLCA4MCk7XG4gICAgICAgIGlmICh0aGlzLnNlY29uZFNjZW5lID09PSB0cnVlKXtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IE1hdGguZmxvb3IoKGN1cnJlbnRGcmFtZSAlIDEzKSAvIDMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMjApIC8gMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmluY2Vzc0NvbCA9PT0gNCl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAwO1xuICAgICAgICAgIHRoaXMucHJpbmNlc3NTd29yZENvdW50ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPT09IDIpe1xuICAgICAgICAgIHRoaXMuc2Vjb25kU2NlbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPiAxKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0NjAsIDI3MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIb3cgY3V0ZS4gWW91IHRob3VnaHQgSSB3YXNcIiwgNDcwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcInRoZSBvbmUgdGhhdCBuZWVkZWQgc2F2aW5nLlwiLCA0NzAsIDMwNSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICAvLyBlbHNlIGlmICh0aGlzLnJvb20gPT09IDI1KXtcbiAgICAvLyAgIHRoaXMuZHJhd1RleHRCb3goNDAwLCAyNjAsIDEwMCwgNTAsIDUpXG4gICAgLy8gICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjBwdCBDYWxpYnJpJztcbiAgICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgIC8vICAgdGhpcy5jdHguZmlsbFRleHQoXCJHYW1lIE92ZXJcIiwgNDEwLCAyODApO1xuICAgIC8vICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gdHJ5IGFnYWluLicsIDQxMCwgMjkwKTtcbiAgICAvLyB9XG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==