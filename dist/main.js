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
        this.ctx.font = '16pt Calibri';
        this.ctx.fillStyle = "white";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJqdW1wSGVpZ2h0IiwiaW5BaXIiLCJjdXJGcmFtZSIsImZyYW1lQ291bnQiLCJzcmNYIiwic3JjWSIsIngiLCJ5Iiwic3BlZWQiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwic2Nyb2xsUmlnaHQiLCJzY3JvbGxMZWZ0IiwiaSIsImxlbmd0aCIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkNoZWNrIiwiY29sbGlzaW9uTmFtZSIsImZvdW5kS2V5MSIsImtleUNvdW50IiwiZm91bmRLZXkyIiwiZm91bmRLZXkzIiwiZm91bmRLZXk0IiwibGl2ZXMiLCJyZXNldCIsImdhbWVPdmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZm91bmRLZXlzIiwiZW50ZXIiLCJyZXN0YXJ0Iiwic3RhcnQiLCJwbGF0Zm9ybSIsInZlY3RvclgiLCJ2ZWN0b3JZIiwiY2VudGVyV2lkdGhzIiwiY2VudGVySGVpZ2h0cyIsImNvbGxpc2lvbkRpcmVjdGlvbiIsImFicyIsIm5hbWUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNsZWFyIiwibmV3TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibnVtYmVyIiwicGxhdGZvcm1QaWMiLCJwbGF0Zm9ybVdpZHRoIiwicGxhdGZvcm1IZWlnaHQiLCJoZWFydCIsImZpcnN0U2NlbmUiLCJzZWNvbmRTY2VuZSIsInByaW5jZXNzU3dvcmRDb3VudCIsImtuaWdodERlYWQiLCJrZXkxIiwia2V5MiIsImtleTMiLCJrZXk0Iiwia2V5cyIsImdyZWVuS25pZ2h0IiwicHJpbmNlc3MiLCJwcmluY2Vzc1giLCJnb2xkS25pZ2h0IiwiZ29sZEtuaWdodFgiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImJhY2tncm91bmRQb3NpdGlvblkiLCJiYWNrZ3JvdW5kUG9zaXRpb25YIiwicHVzaCIsInJhZGl1cyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJibCIsImNsb3NlUGF0aCIsImZpbGwiLCJzdHJva2VTdHlsZSIsInN0cm9rZVRleHQiLCJjdXJyZW50RnJhbWUiLCJwcmluY2Vzc0NvbCIsInByaW5jZXNzUm93Iiwia25pZ2h0Q29sIiwia25pZ2h0Um93IiwiZHJhd0tleUNvdW50IiwiZHJhd0hlYXJ0IiwiZHJhd1RleHRCb3giLCJkcmF3X3BsYXRmb3JtcyIsImRyYXdfa2V5MSIsImRyYXdfa2V5MiIsImRyYXdfa2V5MyIsImRyYXdfa2V5NCIsImNvbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQywrQkFBRCxDQUFyQjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUJDLEdBQW5CLEVBQXdCQyxNQUF4QixFQUFnQ0MsYUFBaEMsRUFBK0M7QUFBQTs7QUFDN0MsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLSCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLSSxlQUFMO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxJ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ZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuXG5jbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgsIGNhbnZhcywgYmFja2dyb3VuZEN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZEN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmZsaXBQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5zdXBlck1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgdGhpcy5sZXZlbC5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpe1xuICAgIHRoaXMuZHJhd01haW5DaGFyYWN0ZXIoKTtcbiAgICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIH1cblxuICBkcmF3TWFpbkNoYXJhY3RlcigpIHtcbiAgICBjb25zdCBzcHJpdGVXaWR0aCA9IDM1MDtcbiAgICBjb25zdCBzcHJpdGVIZWlnaHQgPSA0MDc7XG4gICAgY29uc3Qgcm93cyA9IDExO1xuICAgIGNvbnN0IGNvbHMgPSA3O1xuICAgIHRoaXMudHJhY2tSaWdodCA9IDE7XG4gICAgdGhpcy50cmFja0xlZnQgPSAxO1xuICAgIHRoaXMud2lkdGggPSBzcHJpdGVXaWR0aCAvIGNvbHM7XG4gICAgdGhpcy5oZWlnaHQgPSBzcHJpdGVIZWlnaHQgLyByb3dzO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMub2xkRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy54ID0gMjIwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNyY1g9IDA7XG4gICAgdGhpcy5zcmNZPSB0aGlzLnRyYWNrUmlnaHQgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgIHRoaXMuc3BlZWRZID0gMTU7XG4gICAgdGhpcy5jaGFyYWN0ZXIuc3JjID0gXCJkaXN0L2ltYWdlcy9hZHZlbnR1cmVyLVNoZWV0LnBuZ1wiO1xuICB9XG4gIG1haW5Mb29wKHRpbWUpe1xuICAgIHRoaXMudXBkYXRlRnJhbWUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuZnJhbWVDb3VudCwgdGhpcy50cmFja0xlZnQsIHRoaXMudHJhY2tSaWdodClcbiAgICBpZiAodGhpcy5mYWNpbmdMZWZ0ID09PSB0cnVlKXtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAoLXRoaXMueCAtICh0aGlzLndpZHRoICogMikpLCB0aGlzLnksIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpOyAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoKjIsIHRoaXMuaGVpZ2h0KjIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSl7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpXG4gICAgICB9LCAxMDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgICAgfSwgNDApXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRnJhbWUod2lkdGgsIGhlaWdodCwgZnJhbWVDb3VudCwgdHJhY2tMZWZ0LCB0cmFja1JpZ2h0KXtcbiAgICB0aGlzLm9sZEZyYW1lID0gdGhpcy5vbGRGcmFtZSArIDE7XG4gICAgXG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIHRoaXMuc3RpbGxGcmFtZSA9IE1hdGguZmxvb3IoKHRoaXMub2xkRnJhbWUgJSA5KSAvIDMpXG4gICAgdGhpcy5zcmNYID0gdGhpcy5jdXJGcmFtZSAqIHdpZHRoICsgd2lkdGg7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueCwgdGhpcy55LCB3aWR0aCAqIDIsIGhlaWdodCAqIDIpO1xuICAgIHRoaXMubGV2ZWwudXBkYXRlU2NlbmUodGhpcy54LCB0aGlzLnksIHRoaXMub2xkRnJhbWUpO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMubGVmdCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSAmJiAodGhpcy54ID4gLTIwIHx8ICh0aGlzLmxldmVsLnJvb20gIT0xICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuaW5BaXIgPT09IHRydWUpe1xuICAgICAgdGhpcy5zcGVlZFkgPSAxNVxuICAgICAgaWYgKDMxMCAtIHRoaXMueSA+IHRoaXMuc3BlZWRZIHx8ICh0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gMjUgJiYgdGhpcy5sZXZlbC5yb29tICE9IDAgJiYgdGhpcy5zdXBlck1vZGUgPT09IGZhbHNlKSl7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMueSArPSAzMTAgLSB0aGlzLnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuanVtcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ICs9IDMwXG4gICAgICB0aGlzLnkgLT0gMzA7XG4gICAgICBpZiAodGhpcy5qdW1wSGVpZ2h0ID4gMTMwKXtcbiAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgICB0aGlzLmp1bXBIZWlnaHQgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54ID4gNjcwKXsgXG4gICAgICB0aGlzLnNjcm9sbFJpZ2h0KCk7XG4gICAgICB0aGlzLnggPSAtMjA7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnggPCAtMjAgJiYgdGhpcy5sZXZlbC5yb29tICE9IDEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCgpO1xuICAgICAgdGhpcy54ID0gNjQwO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWwucGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwucGxhdGZvcm1zW2ldKVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIiB8fCBkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidG9wXCIgfHwgZGlyZWN0aW9uID09PSBcImJvdHRvbVwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMDtcbiAgICAgICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLmxldmVsLml0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGNvbGxpc2lvbk5hbWUgPSB0aGlzLmNvbGxpc2lvbkNoZWNrKHRoaXMubGV2ZWwuaXRlbXNbaV0pXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkxXCIpe1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg2MDAsIDI0MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkyXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzg1LCAyNTAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTIgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTNcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5NFwiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDIyNSwgMzQwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXk0ID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnkgPiA1MDAgKXtcbiAgICAgIHRoaXMubGV2ZWwubGl2ZXMgLT0gMTtcbiAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgdGhpcy54ID0gMjA7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGV2ZWwubGl2ZXMgPT09IDApe1xuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgIH1cblxuXG5cbiAgICBpZiAodGhpcy55ID09PSAzMTApIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gaGVpZ2h0ICogMjtcbiAgICBlbHNlIGlmICh0aGlzLmxlZnQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrTGVmdCAqIGhlaWdodDtcbiAgICBlbHNlIGlmICh0aGlzLnJpZ2h0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja1JpZ2h0ICogaGVpZ2h0O1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDsgXG4gICAgICB0aGlzLnNyY1kgPSAwO1xuICAgIH1cbiAgfVxuICBcbiAgbW92ZUxlZnQoKXtcbiAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpe1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGp1bXAoKXtcbiAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRLZXlIYW5kbGVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiKSB7XG4gICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKGUua2V5ID09PSBcIndcIiAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgKHRoaXMueSA9PT0gMzEwIHx8IHRoaXMuc3BlZWRZID09PSAwKSAmJiB0aGlzLnkgPD0gMzEwKSB7XG4gICAgdGhpcy5qdW1wKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNiAmJiB0aGlzLnggPiAyNjAgJiYgdGhpcy54IDwgMzUwICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiB0aGlzLmZvdW5kS2V5cygpID09PSB0cnVlKXtcbiAgICB0aGlzLmVudGVyKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgZS5yZXBlYXQgPT09IGZhbHNlKXtcbiAgICB0aGlzLnJlc3RhcnQoKTtcbiAgfVxuXG4gIGlmIChlLmtleSA9PT0gXCJjXCIgJiYgdGhpcy5sZXZlbC5yb29tID09PSAwICYmIGUucmVwZWF0ID09PSBmYWxzZSkge1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwicFwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDEgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnN1cGVyTW9kZSA9ICF0aGlzLnN1cGVyTW9kZTtcbiAgICB9XG5cbn1cblxuIGtleVVwSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIpIHtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiKSB7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cblxuICBlbHNlIGlmIChlLmtleSA9PT0gXCJ3XCIpIHtcbiAgfVxufVxuXG5mb3VuZEtleXMoKXtcbiAgcmV0dXJuIHRoaXMubGV2ZWwuZm91bmRLZXkxICYmIHRoaXMubGV2ZWwuZm91bmRLZXkyICYmIHRoaXMubGV2ZWwuZm91bmRLZXkzICYmIHRoaXMubGV2ZWwuZm91bmRLZXk0XG59XG5cbmNvbGxpc2lvbkNoZWNrKHBsYXRmb3JtKXtcbiAgY29uc3QgdmVjdG9yWCA9ICh0aGlzLnggKyAodGhpcy53aWR0aCkpIC0gKHBsYXRmb3JtLnggKyAocGxhdGZvcm0ud2lkdGggLyAyKSk7XG4gIGNvbnN0IHZlY3RvclkgPSAodGhpcy55ICsgKHRoaXMuaGVpZ2h0KSkgLSAocGxhdGZvcm0ueSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKSk7XG5cbiAgY29uc3QgY2VudGVyV2lkdGhzID0gKHRoaXMud2lkdGgvMikgKyAocGxhdGZvcm0ud2lkdGggLyAyKTtcbiAgY29uc3QgY2VudGVySGVpZ2h0cyA9ICh0aGlzLmhlaWdodCkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMik7XG5cblxuICBsZXQgY29sbGlzaW9uRGlyZWN0aW9uO1xuXG4gIGlmIChNYXRoLmFicyh2ZWN0b3JYKSA8IGNlbnRlcldpZHRocyAmJiBNYXRoLmFicyh2ZWN0b3JZKSA8IGNlbnRlckhlaWdodHMpIFxuICB7XG5cbiAgICBpZiAocGxhdGZvcm0ubmFtZSkgcmV0dXJuIHBsYXRmb3JtLm5hbWU7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNlbnRlcldpZHRocyAtIE1hdGguYWJzKHZlY3RvclgpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBjZW50ZXJIZWlnaHRzIC0gTWF0aC5hYnModmVjdG9yWSk7XG5cbiAgICBpZiAob2Zmc2V0WCA8IG9mZnNldFkpXG4gICAgICAgIGlmICh2ZWN0b3JYID4gMCl7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgICAgICB0aGlzLnggKz0gb2Zmc2V0WDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgICAgICB0aGlzLnggLT0gb2Zmc2V0WDtcbiAgICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHZlY3RvclkgPiAwKXtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJ0b3BcIjtcbiAgICAgICAgdGhpcy55ICs9IG9mZnNldFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImJvdHRvbVwiO1xuICAgICAgICB0aGlzLnkgLT0gb2Zmc2V0WVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29sbGlzaW9uRGlyZWN0aW9uO1xufVxuXG5zY3JvbGxSaWdodCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiAodGhpcy5sZXZlbC5yb29tICE9PSAwKSkgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnNjcm9sbExlZnQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMCB8fCB0aGlzLmxldmVsLnJvb20gIT09IDcpKSB0aGlzLmxldmVsLnJvb20gLT0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuZW50ZXIoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy54ID0gLTIwO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc3RhcnQoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDE7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB0aGlzLnggPSAyMjA7XG4gIHRoaXMueSA9IDMxMDtcbn1cblxucmVzZXQoKXtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5nYW1lT3Zlcigpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwucm9vbSA9IDI1XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxucmVzdGFydCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoMCwgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5jb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL2dhbWVfdmlld1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gXG4gIGxldCBsZXZlbCA9IG5ldyBMZXZlbCgwLCBjdHgsIGNhbnZhcyk7XG4gIG5ldyBHYW1lVmlldyhsZXZlbCwgY3R4LCBjYW52YXMpO1xufSk7IiwiY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIGN0eCwgY2FudmFzKSB7XG4gICAgdGhpcy5yb29tID0gbnVtYmVyO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5wbGF0Zm9ybVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucGxhdGZvcm1QaWMuc3JjID0gXCJkaXN0L2ltYWdlcy9wbGF0Zm9ybS5wbmdcIjtcbiAgICB0aGlzLnBsYXRmb3JtV2lkdGggPSAxNTA7XG4gICAgdGhpcy5wbGF0Zm9ybUhlaWdodCA9IDIwO1xuICAgIHRoaXMuaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmhlYXJ0LnNyYyA9IFwiZGlzdC9pbWFnZXMvaGVhcnQucG5nXCI7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkxID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTIgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MyA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXk0ID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLnNlY29uZFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLnByaW5jZXNzU3dvcmRDb3VudCA9IDA7XG4gICAgdGhpcy5rbmlnaHREZWFkID09PSBmYWxzZTtcbiAgICB0aGlzLmtleTEgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTEuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTIuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTQuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleXMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleXMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleUNvdW50ID0gMDtcbiAgICB0aGlzLmdyZWVuS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5ncmVlbktuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL01pdGhlcmFsS25pZ2h0LnBuZ1wiO1xuICAgIHRoaXMucHJpbmNlc3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByaW5jZXNzLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5wcmluY2Vzc1ggPSA1MDA7XG4gICAgdGhpcy5nb2xkS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5nb2xkS25pZ2h0LnNyYyA9IFwiZGlzdC9pbWFnZXMvR29sZEtuaWdodC5wbmdcIlxuICAgIHRoaXMuZ29sZEtuaWdodFggPSA3MDA7XG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImRpc3QvaW1hZ2VzL2xldmVsJHt0aGlzLnJvb219LnBuZ1wiYFxuICAgIHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHBsYXRmb3JtV2lkdGggPSB0aGlzLnBsYXRmb3JtV2lkdGg7XG4gICAgcGxhdGZvcm1IZWlnaHQgPSB0aGlzLnBsYXRmb3JtSGVpZ2h0XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCkge1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGNvbnRyb2wgSGVucnkgd2hvIGlzIGEgY29hbCBtaW5lciBmcm9tIHRoZSBraW5nZG9tIG9mIFRyb21pZGUuXCIsIDMwLCA1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIGhhcyBhbHdheXMga2VwdCBhIGxvdyBwcm9maWxlLCBkZXRlcm1pbmVkIHRvIGRvIGhpcyBqb2IgYW5kIHRoZW4gZW5qb3kgdGhlIHBlYWNlIGFuZCBxdWlldCBvZiBoaXMgaG9tZS5cIiwgMzAsIDcwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmV2ZXIgbWFkZSBhbiBlZmZvcnQgdG8gYmUga25vd24gb3IgbWFrZSBmcmllbmRzLiBObyBvbmUga25ldyBoaW0gcGVyc29uYWxseSBhbmQgaGUgbGlrZWQgaXQgdGhhdCB3YXkuXCIsIDMwLCA5MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRoZSBwcmluY2VzcyBoYXMgYmVlbiBraWRuYXBwZWQgYW5kIGFsbCBlZmZvcnRzIHRvIHNhdmUgaGVyIGhhdmUgZmFpbGVkLiBBbHRob3VnaCBIZW5yeSBoYXMgaGVhcmQgb2YgdGhlIHNpdHVhdGlvbixcIiwgMzAsIDExMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIml0IHdhc24ndCBzb21ldGhpbmcgaGUgd2FzIGludGVyZXN0ZWQgaW4gZ2V0dGluZyBpbnZvbHZlZCBpbi4gQXMgaGUgd2FzIHdhbGtpbmcgdG8gd29yayBoZSBzYXcgYSBmbGllciBvZmZlcmluZ1wiLCAzMCwgMTMwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYSBtYWpvciByZXdhcmQgdG8gYW55b25lIHRoYXQgY2FuIGhlbHAgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoZSBvbmUgdGhpbmcgSGVucnkgZG9lcyBjYXJlIGZvciBpcyBtb25leS5cIiwgMzAsIDE1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5lZWRzIHRvIGZpbmQgdGhlIDQga2V5cyB0byBnZXQgaW50byB0aGUgZW5lbXkgY2FzdGxlIGFuZCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhpcyBpcyB3aGVyZSBoaXMgc3RvcnkgYmVnaW5zLiBcIiwgMzAsIDE3MCk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHN0YXJ0LicsIDI2MCwgMjE1KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSkge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjExMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDgwMCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMjAsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNzAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMzAsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MVwiLFxuICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICB5OiAyNDAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAzKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxMDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MlwiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjYwLFxuICAgICAgICB5OiAxNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMTUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjUwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTMgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5M1wiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2MDAsXG4gICAgICAgIHk6IDc1LFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTUwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTMwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgNzAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNDc1LFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUzMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDU1MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXk0XCIsXG4gICAgICAgICAgeDogMjI1LFxuICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDYpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIxMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDYwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIyLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA3MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NzAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA3MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDcpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBmYWlsZWQgdG8gc2F2ZSB0aGUgUHJpbmNlc3MuXCIsIDE3MCwgMTAwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHRyeSBhZ2Fpbi4nLCAyMjAsIDE1MCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1RleHRCb3goeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKXtcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLmJsLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3X3BsYXRmb3JtcygpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KHBsYXRmb3Jtc1tpXS54LCBwbGF0Zm9ybXNbaV0ueSwgcGxhdGZvcm1zW2ldLndpZHRoLCBwbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBsYXRmb3JtUGljLCAwLCAwLCA5NiwgOTYsIHBsYXRmb3Jtc1tpXS54LCBwbGF0Zm9ybXNbaV0ueSwgcGxhdGZvcm1zW2ldLndpZHRoLCBwbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBkcmF3SGVhcnQoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5oZWFydCwgMCwgMCwgMTI1LCAxMjUsIDY1MCwgMTAsIDMwLCAzMClcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5saXZlcywgNjMyLCAzMik7XG4gIH1cblxuICBkcmF3S2V5Q291bnQoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoNTYwLCAxMCwgMjAwLCA1MClcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXlzLCAzMiwgMCwgMzIsIDMyLCA1OTAsIDEyLCAzMCwgMzApO1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLmtleUNvdW50LCA1NzAsIDMyKTtcbiAgfVxuXG4gIGRyYXdfa2V5MSgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTEsIDAsIDAsIDMyLCAzMiwgNjAwLCAyNDAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTIoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkyLCAzMiwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5MygpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkzLCA2NCwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5NCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXk0LCA5NiwgMCwgMzIsIDMyLCAyMjUsIDM0MCwgMzAsIDMwKTtcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKHgsIHksIGN1cnJlbnRGcmFtZSl7XG4gICAgbGV0IHByaW5jZXNzQ29sO1xuICAgIGxldCBwcmluY2Vzc1JvdyA9IDI7XG4gICAgbGV0IGtuaWdodENvbDtcbiAgICBsZXQga25pZ2h0Um93O1xuXG4gICAgaWYgKHRoaXMucm9vbSAhPSAwICYmIHRoaXMucm9vbSAhPSAyNSl7XG4gICAgdGhpcy5kcmF3S2V5Q291bnQoKTtcbiAgICB0aGlzLmRyYXdIZWFydCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpe1xuICAgICAgaWYgKHggPCA0MDAgJiYgeCA+IDIwMCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goOTAsIDI4MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdHb29kIGx1Y2sgSGVucnksJywgOTUsIDMwMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdJIGtub3cgeW91IGNhbicsIDk1LCAzMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnZG8gaXQhJywgOTUsIDMyMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg5MCwgMjgwLCAxMDAsIDUwKTtcbiAgICB9XG5cbiAgICAgIGlmICh4IDwgODAwICYmIHggPiA1MDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQwMCwgMjYwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgYXJlbid0IGdvaW5nXCIsIDQxMCwgMjgwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ3RvIGxhc3QgNSBtaW51dGVzJywgNDEwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIm91dCB0aGVyZS5cIiwgNDEwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDQwMCwgMjYwLCAxMDAsIDUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICAgIHRoaXMuZHJhd19rZXkxKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpIHtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSB0cnVlKXtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMzAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KSB7XG4gICAgICB0aGlzLmRyYXdfcGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTMgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZHJhd19rZXkzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSB0cnVlKXtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMwMCxcbiAgICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAzMDAsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA1KXtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLmRyYXdfa2V5NCgpO1xuICAgICAgfSAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA2KXtcbiAgICAgIHRoaXMuZHJhd19wbGF0Zm9ybXMoKTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTMgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIGNvbCA9IGN1cnJlbnRGcmFtZSAlIDEwXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzMjAsIDMxMCwgNjUsIDY1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ncmVlbktuaWdodCwgMzIgKiBjb2wsIDAsIDMyLCAzMiwgLTM4NSwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjIwLCAyNzAsIDEyMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBtdXN0IGhhdmUgYWxsIDRcIiwgMjMwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgna2V5cyB0byBlbnRlciB0aGUgY2FzdGxlLicsIDIzMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjAsIDI3MCwgMTIwLCA1MCk7XG4gICAgICAgIGlmICh4ID4gMjYwICYmIHggPCAzNTApe1xuICAgICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjYwLCAyNzAsIDE1MCwgMjUsIDUpO1xuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBDIHRvIGVudGVyIHRoZSBjYXN0bGUuXCIsIDI3MCwgMjkwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjYwLCAyNzAsIDE1MCwgMjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMuZ29sZEtuaWdodFgsIDMwMCwgODUsIDg1KVxuICAgICAgaWYgKHRoaXMuZmlyc3RTY2VuZSA9PT0gdHJ1ZSl7XG4gICAgICAgcHJpbmNlc3NDb2wgPSA3O1xuICAgICAgICBpZiAoY3VycmVudEZyYW1lICUgOCA9PT0gMCl7XG4gICAgICAgICBwcmluY2Vzc0NvbCA9IDg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHggPCAyNTApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDM5MCwgMjkwLCAxNTAsIDQwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBsZWFzZSBzYXZlIG1lISBUaGVcIiwgNDAwICwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJldmlsIGtuaWdodCBpcyBjb21pbmchXCIsIDQwMCwgMzIzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzOTAsIDI5MCwgMTUwLCA0MCk7XG4gICAgICB9XG4gICAgICBrbmlnaHRSb3cgPSAxO1xuICAgICAgaWYgKHggPiAyNjApe1xuICAgICAgICBrbmlnaHRDb2wgPSAoY3VycmVudEZyYW1lKSAlIDEwO1xuICAgICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA+IDM1MCkge1xuICAgICAgICAgIHRoaXMuZ29sZEtuaWdodFggLT0gNTtcbiAgICAgICAgICBrbmlnaHRSb3cgPSAyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzU3dvcmRDb3VudCA+IDEpIHtcbiAgICAgICAgICBrbmlnaHRSb3cgPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtuaWdodFJvdyA9PT0gNCAmJiBrbmlnaHRDb2wgPT09IDkpe1xuICAgICAgICAgIHRoaXMua25pZ2h0RGVhZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5rbmlnaHREZWFkID09PSB0cnVlKXtcbiAgICAgICAgICBrbmlnaHRDb2wgPSA5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZ29sZEtuaWdodCwgMzIgKiBrbmlnaHRDb2wsIGtuaWdodFJvdyAqIDMyLCAzMiwgMzIsIC10aGlzLmdvbGRLbmlnaHRYIC0gODUsIDMwMCwgODUsIDg1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA+IDM2MCAmJiB0aGlzLmdvbGRLbmlnaHRYIDwgNjAwKVxuICAgICAge1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDEzMCwgMjUwLCAxODAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhleSB5b3UgYmlnIGR1bW15LiBZb3VcIiwgMTQwLCAyNzIpO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImJldHRlciBsZXQgdGhlIHByaW5jZXNzIGdvIVwiLCAxNDAsIDI4NSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID09PSAzNTAgJiYgdGhpcy5wcmluY2Vzc1ggIT0gMzkwKXtcbiAgICAgICAgdGhpcy5maXJzdFNjZW5lID0gZmFsc2U7XG4gICAgICAgIHByaW5jZXNzQ29sID0gY3VycmVudEZyYW1lICUgMjtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NYID4gMzkwKXtcbiAgICAgICAgdGhpcy5wcmluY2Vzc1ggLT0gNTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMTMwLCAyNTAsIDE4MCwgNTUpO1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDIxMCwgMjMwLCAxNzAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRoYW5rIGdvZCB5b3UgYXJlIGhlcmUuXCIsIDIyMCwgMjUwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJFdmVyeW9uZSBoYXMgaXQgYWxsIHdyb25nXCIsIDIyMCwgMjY1KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJpbmNlc3NYID09PSAzOTApe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjEwLCAyMzAsIDE3MCwgODApO1xuICAgICAgICBpZiAodGhpcy5zZWNvbmRTY2VuZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSBNYXRoLmZsb29yKChjdXJyZW50RnJhbWUgJSAxMykgLyAzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IE1hdGguZmxvb3IoKGN1cnJlbnRGcmFtZSAlIDIwKSAvIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpbmNlc3NDb2wgPT09IDQpe1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gMDtcbiAgICAgICAgICB0aGlzLnByaW5jZXNzU3dvcmRDb3VudCArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NTd29yZENvdW50ID09PSAyKXtcbiAgICAgICAgICB0aGlzLnNlY29uZFNjZW5lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NTd29yZENvdW50ID4gMSl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goNDYwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSG93IGN1dGUuIFlvdSB0aG91Z2h0IEkgd2FzXCIsIDQ3MCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGUgb25lIHRoYXQgbmVlZGVkIHNhdmluZy5cIiwgNDcwLCAzMDUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG5cblxuICAgIH1cblxuXG4gICAgLy8gZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgLy8gICB0aGlzLmRyYXdUZXh0Qm94KDQwMCwgMjYwLCAxMDAsIDUwLCA1KVxuICAgIC8vICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAvLyAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR2FtZSBPdmVyXCIsIDQxMCwgMjgwKTtcbiAgICAvLyAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHRyeSBhZ2Fpbi4nLCA0MTAsIDI5MCk7XG4gICAgLy8gfVxufVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=