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
    this.swordSwipe = 0;
    this.jumpHeight = 0;
    this.inAir = false;
    this.curFrame = 0;
    this.frameCount = 6;
    this.srcX = 0;
    this.srcY = 0;
    this.x = 300;
    this.y = 310;
    this.speed = 12;
    this.kill = false;
    this.save = false;
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

      if (this.level.room === 0 && this.level.introTyped === true || this.level.room === 25 && this.level.overTyped === true) {
        this.level.drawCommand();
      }

      if (this.left && this.level.disabled === false && (this.x > -20 || this.level.room != 1 && this.level.room != 7)) {
        this.speedX = 15;
        this.x -= this.speedX;
      }

      if (this.right && this.level.disabled === false && (this.x < 620 || this.level.room != 7 && this.level.room != 6) && (this.level.room != 7 || this.x < this.level.princessX - 86 || this.level.princessDisabled === true)) {
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

      if (this.x > 670 && this.y < 320 && this.level.room != 7 && this.level.room != 6) {
        if (this.level.room != 0 && this.level.room != 25) {
          this.scrollRight();
        }

        this.x = -20;
      }

      if (this.x < -20 && this.y < 320 && this.level.room != 1 && this.level.room != 7) {
        if (this.level.room != 0 && this.level.room != 25) {
          this.scrollLeft();
        }

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

        if (collisionName === "fireball" && this.level.disabled === false) {
          this.level.lives -= 1;
          this.y = 10;
          this.x = 20;
        }
      }

      if (this.y > 500) {
        this.level.lives -= 1;
        this.y = 10;
        this.x = 20;
        this.reset();
      }

      if ((this.level.lives === 0 || this.level.stallCount === 60) && (this.level.room != 25 || this.level.lives === 0)) {
        this.level.disabled = false;
        this.gameOver();
      }

      if (this.y === 310) this.inAir = false;
      if (this.inAir === true) this.srcY = height * 2;else if (this.left === true) this.srcY = trackLeft * height;else if (this.right === true) this.srcY = trackRight * height;else {
        this.srcX = this.stillFrame * width;
        this.srcY = 0;
      }

      if (this.level.disabled === true && this.level.princessDisabled === true) {
        this.srcX = (this.stillFrame % 4 + 3) * width;
        this.srcY = 5 * height;
      }

      if (this.level.disabled === true && this.level.princessDisabled === true && this.kill === true && this.level.princessDead === false) {
        this.srcX = this.stillFrame * width;
        this.srcY = 7 * height;

        if (this.stillFrame === 2) {
          this.swordSwipe += 1;
        }

        if (this.swordSwipe === 8) {
          this.level.princessDead = true;
        }
      } else if (this.level.disabled === true && this.level.princessDisabled === true && this.save === true && this.level.princessDead === false && this.level.room === 7) {
        this.srcX = 2 * width;
        this.srcY = 8 * height;
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
      } else if ((e.key === "a" || e.keyCode === 37) && this.level.disabled === false) {
        this.moveLeft();
      }

      if ((e.key === "w" || e.keyCode === 38) && e.repeat === false && this.level.disabled === false && (this.y === 310 || this.speedY === 0) && this.y <= 310) {
        this.jump();
      }

      if (e.key === "c" && this.level.room === 6 && this.x > 260 && this.x < 350 && e.repeat === false && this.foundKeys() === true) {
        this.enter();
      }

      if (e.key === "c" && this.level.room === 25 && e.repeat === false && (this.level.overTyped === true || this.level.lives === 0)) {
        this.restart();
      }

      if (e.key === "v" && this.level.room === 25 && e.repeat === false && this.level.reachedLevel7 === true && (this.level.overTyped === true || this.level.lives === 0)) {
        this.restartFinal();
      }

      if (e.key === "c" && this.level.room === 0 && e.repeat === false && this.level.introTyped === true) {
        this.start();
      }

      if (e.key === "c" && this.level.room === 7 && e.repeat === false && this.level.disabled === true && this.level.princessDisabled === true && this.save === false) {
        this.kill = true;
      }

      if (e.key === "v" && this.level.room === 7 && e.repeat === false && this.level.disabled === true && this.level.princessDisabled === true && this.kill === false) {
        this.save = true;
        this.level.princessSaved = true;
      }

      if (e.key === "p" && this.level.room === 1 && e.repeat === false) {
        this.superMode = !this.superMode;
      }

      if (e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
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

      if (e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
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
      if (this.level.room !== 25) this.level.room -= 1;
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
    key: "intro",
    value: function intro() {
      this.clear();
      this.level.room = 0;
      this.level.addScene();
    }
  }, {
    key: "restart",
    value: function restart() {
      var newLevel = new Level(1, this.ctx, this.canvas);
      this.level = newLevel;
      this.swordSwipe = 0;
      this.kill = false;
      this.save = false;
      this.clear();
      this.level.addScene();
    }
  }, {
    key: "restartFinal",
    value: function restartFinal() {
      var newLevel = new Level(7, this.ctx, this.canvas);
      this.level = newLevel;
      this.swordSwipe = 0;
      this.kill = false;
      this.x = 0;
      this.save = false;
      this.level.keyCount = 4;
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
    this.stallCount = 0;
    this.introTyped = false;
    this.overTyped = false;
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
    this.reachedLevel7 = false;
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
    this.princessDead = false;
    this.princessSaved = false;
    this.displayFired = false;
    this.doneOnce = false;
    this.remainingFired = 20;
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
        var str = "You control Henry who is a coal miner from the kingdom of Tromide. He has always kept a low profile, determined to do his job and then enjoy the peace and quiet of his home. No one knows him personally and he likes it that way. The princess of Tromide has been kidnapped and all efforts to save her have failed. On his way to work he saw a poster offering a major reward to anyone that can help save the princess. The one thing Henry does care for is money. He needs to find the 4 keys to get into the enemy castle and save the princess. This is where his story begins... stringBreak Use the arrow keys or A, D, W to go left, right and jump. Note: There is no double jump.";
        this.typeWrite(str, 20, 30, 25, 50);
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
        this.reachedLevel7 = true;
      } else if (this.room === 25) {
        if (this.princessDead === true) {
          var _str = "After killing the princess you returned to Tromide. You told the story of your adventure but the king didn't buy it. He thought you made it up and were planning on killing her all along. You have been exiled to an island where you have to fend for yourself. You never expected this is what being a hero would feel like. Your whole life all you wanted was to be left alone yet now you would do anything to see another person. After spending weeks focused on survival, you see a boat approach the island... THE END.";
          this.typeWrite(_str, 20, 30, 25, 50);
        } else if (this.princessSaved === true) {
          var _str2 = "You brought the princess back to Tromide. The king couldn't believe what happened. After seeing for himself that the princess was the one behind it all, he ordered to have her locked away in the dungeon. The people of Tromide hailed you a hero. Everywhere you went people called out your name. Truthfully, you liked it better when no one knew who you were. A few weeks later you couldn't get one question out of your head. What drove the princess to do all this. You decided to go down to the dungeon to try and get some answers. When you got to the cell the door was busted open and the cell was empty... THE END.";
          this.typeWrite(_str2, 20, 30, 25, 50);
        } else {
          this.canvas.style.backgroundPositionY = "0px";
          this.canvas.style.backgroundPositionX = "-100px";
          this.ctx.font = 'bold 20pt Calibri';
          this.ctx.fillStyle = "white";
          this.ctx.fillText("You failed to save the Princess.", 170, 100);
          this.ctx.fillText('Press C to start again.', 220, 150);

          if (this.reachedLevel7 === true) {
            this.ctx.fillText('Press V to start from castle scene again.', 140, 180);
          }
        }
      } else if (this.room === 26) {
        this.canvas.style.backgroundPositionY = "0px";
        this.canvas.style.backgroundPositionX = "-100px";
        this.ctx.font = 'bold 20pt Calibri';
        this.ctx.fillStyle = "white";
        this.ctx.fillText("You failed to save the Princess.", 170, 100);
        this.ctx.fillText('Press C to start again.', 220, 150);

        if (this.reachedLevel7 === true) {
          this.ctx.fillText('Press V to start from castle scene again.', 140, 180);
        }
      }
    }
  }, {
    key: "typeWrite",
    value: function typeWrite(str, startX, startY, lineHeight, padding) {
      var i = 0;
      var cursorX = startX;
      var cursorY = startY;
      var words = str.split(" ");
      var sentence = "";
      var self = this;
      var typing = setInterval(function () {
        var width = self.ctx.measureText(sentence).width;
        sentence += words[i] + " ";

        if (startX + width >= self.canvas.width - padding) {
          cursorX = startX;
          cursorY += lineHeight;
          sentence = words[i] + " ";
        } else if (words[i] === "stringBreak") {
          cursorX = startX;
          cursorY += lineHeight + 10;
          i++;
          sentence = words[i] + " ";
        } else {
          cursorX = startX + width;
        }

        self.ctx.font = '12pt Arial';
        self.ctx.fillStyle = "white";
        self.ctx.fillText(words[i], cursorX, cursorY);
        i++;

        if (i === words.length) {
          if (self.room === 0) self.introTyped = true;
          if (self.room === 25) self.overTyped = true;
          clearInterval(typing);
        }
      }, 30);
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
    value: function drawItems() {
      for (var i = 0; i < this.items.length; i++) {
        this.ctx.drawImage(this.missile, 891, 82, 81, 82, this.items[i].x - shift, 290, 100, 100);
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
      this.ctx.drawImage(this.key1, 32, 0, 32, 32, 600, 240, 30, 30);
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
    key: "drawCommand",
    value: function drawCommand() {
      if (this.room === 0) {
        this.ctx.clearRect(250, 230, 200, 50);
        this.ctx.font = '16pt Arial Bold';
        this.ctx.fillText('Press C to start.', 270, 250);
      } else {
        this.ctx.clearRect(190, 230, 400, 100);
        this.ctx.fillText('Press C to start again.', 250, 240);
        this.ctx.fillText('Press V to start from castle scene again.', 190, 260);
      }
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

        this.drawPlatforms();
      } else if (this.room === 4) {
        if (this.foundKey3 === false) {
          this.draw_key3();
        }

        if (this.foundKey4 === true) {
          platforms.push({
            x: canvas.width - 300,
            y: canvas.height - 30,
            width: platformWidth + 300,
            height: platformHeight
          });
          platforms.push({
            x: canvas.width - 500,
            y: this.canvas.height - 200,
            width: platformWidth,
            height: platformHeight
          });
        }

        this.drawPlatforms();
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
          var rand = Math.floor(Math.random() * 15);

          if (this.princessDisabled === true) {
            rand = 0;
          }

          princessCol = 9;

          if (rand % 2 === 0 && this.princessX < 460) {
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

          var rand2 = Math.floor(Math.floor(Math.random() * 50));

          if ((currentFrame % 30 === 0 || rand2 === 14) && this.princessDisabled === false) {
            princessCol = 10;
            var facingLeft;

            if (x < this.princessX) {
              facingLeft = true;
              shift = 45;
            } else {
              facingLeft = false;
              shift = 0;
            }

            this.items.push({
              name: "fireball",
              width: 10,
              height: 2,
              y: 355,
              x: this.princessX + shift,
              left: facingLeft,
              shift: shift
            });
            this.fired += 1;
            this.remainingFired -= 1;
          }

          if (this.princessDead === false) {
            if (x < this.princessX) {
              this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
            } else {
              this.ctx.scale(-1, 1);
              this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, -this.princessX - 85, 300, 85, 85);
              this.ctx.scale(-1, 1);
            }
          }

          for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].left === true) {
              this.items[i].x -= 10;
            } else {
              this.items[i].x += 10;
            }
          }

          this.drawItems(currentFrame);
        }

        if (this.knightDead === true) {
          this.disabled = false;
          this.displayFired = true;
        }

        if (this.fired === 20) {
          this.princessDisabled = true;
          this.displayFired = false;
          this.fired = 0;
        }

        if (this.displayFired === true) {
          this.ctx.clearRect(310, 50, 300, 100);
          this.ctx.drawImage(this.missile, 891, 82, 81, 82, 320, 40, 100, 100);
          this.ctx.font = 'bold 14pt Fantasy';
          this.ctx.fillStyle = "white";
          this.ctx.fillText(this.remainingFired, 320, 100);
          this.ctx.font = '12pt Fantasy';
          this.ctx.fillText("remaining", 380, 100);
        }

        if (this.knightDead === true && this.fired < 3 && this.princessDisabled === false) {
          this.ctx.clearRect(0, 240, 600, 50);
          this.drawTextBox(x + 50, 240, 200, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("I just need to last long enough", x + 60, 260);
          this.ctx.fillText("for her magic to run out.", x + 60, 270);
        }

        if (this.fired === 3 && this.doneOnce === false) {
          this.ctx.clearRect(0, 240, 600, 50);
          this.doneOnce = true;
        }

        if (this.princessDisabled === true && Math.abs(this.princessX - x) > 70) {
          this.drawTextBox(this.princessX + 50, 270, 180, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Looks like I will have to do", this.princessX + 60, 290);
          this.ctx.fillText("this the hard way", this.princessX + 60, 305);
        }

        if (this.princessDead === false && this.princessDisabled === true && Math.abs(this.princessX - x) < 70) {
          this.disabled = true;
          this.ctx.clearRect(this.princessX + 50, 270, 180, 50);
          this.drawTextBox(x - 160, 270, 180, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Looks like I will have to do", x - 150, 290);
          this.ctx.fillText("this the easy way", x - 150, 305);
          this.drawTextBox(x - 160, 140, 250, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Press C to kill the princess", x - 150, 160);
          this.ctx.fillText("Press V to return the princess to Tromide", x - 150, 175);
        }

        if (this.princessSaved === true) {
          this.stallCount += 1;
          this.ctx.clearRect(0, 0, 700, 400);
          this.stallCount += 1;
          this.ctx.drawImage(this.princess, 81 * 4, 2 * 82, 81, 82, this.princessX, 300, 85, 85);
          this.drawTextBox(this.princessX + 50, 270, 180, 50, 5);
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "black";
          this.ctx.fillText("Alright you win I'll go back", this.princessX + 60, 290);
          this.ctx.fillText("with you.", this.princessX + 60, 305);

          if (this.stallCount > 15) {
            this.drawTextBox(x - 160, 270, 180, 50, 5);
            this.ctx.font = 'bold 10pt Calibri';
            this.ctx.fillStyle = "black";
            this.ctx.fillText("Good Choice.", x - 150, 290);
          }
        }

        if (this.princessDead === true) {
          this.ctx.clearRect(0, 0, 700, 400);
          this.stallCount += 3;
          this.ctx.drawImage(this.princess, 81 * 8, 2 * 82, 81, 82, this.princessX, 300, 85, 85);
        }
      }
    }
  }]);

  return Level;
}();

module.exports = Level;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJzd29yZFN3aXBlIiwianVtcEhlaWdodCIsImluQWlyIiwiY3VyRnJhbWUiLCJmcmFtZUNvdW50Iiwic3JjWCIsInNyY1kiLCJ4IiwieSIsInNwZWVkIiwia2lsbCIsInNhdmUiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwicm9vbSIsImludHJvVHlwZWQiLCJvdmVyVHlwZWQiLCJkcmF3Q29tbWFuZCIsImRpc2FibGVkIiwicHJpbmNlc3NYIiwicHJpbmNlc3NEaXNhYmxlZCIsInNjcm9sbFJpZ2h0Iiwic2Nyb2xsTGVmdCIsImkiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJjb2xsaXNpb25DaGVjayIsImNvbGxpc2lvbk5hbWUiLCJmb3VuZEtleTEiLCJrZXlDb3VudCIsImZvdW5kS2V5MiIsImZvdW5kS2V5MyIsImZvdW5kS2V5NCIsImxpdmVzIiwicmVzZXQiLCJzdGFsbENvdW50IiwiZ2FtZU92ZXIiLCJwcmluY2Vzc0RlYWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJrZXlDb2RlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZm91bmRLZXlzIiwiZW50ZXIiLCJyZXN0YXJ0IiwicmVhY2hlZExldmVsNyIsInJlc3RhcnRGaW5hbCIsInN0YXJ0IiwicHJpbmNlc3NTYXZlZCIsInByZXZlbnREZWZhdWx0IiwicGxhdGZvcm0iLCJ2ZWN0b3JYIiwidmVjdG9yWSIsImNlbnRlcldpZHRocyIsImNlbnRlckhlaWdodHMiLCJjb2xsaXNpb25EaXJlY3Rpb24iLCJhYnMiLCJuYW1lIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjbGVhciIsIm5ld0xldmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIm51bWJlciIsInBsYXRmb3JtUGljIiwicGxhdGZvcm1XaWR0aCIsInBsYXRmb3JtSGVpZ2h0IiwiaGVhcnQiLCJmaXJzdFNjZW5lIiwic2Vjb25kU2NlbmUiLCJwcmluY2Vzc1N3b3JkQ291bnQiLCJrbmlnaHREZWFkIiwia2V5MSIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleXMiLCJncmVlbktuaWdodCIsInByaW5jZXNzIiwiZ29sZEtuaWdodCIsImdvbGRLbmlnaHRYIiwibWlzc2lsZSIsImZpcmVkIiwiZGlzcGxheUZpcmVkIiwiZG9uZU9uY2UiLCJyZW1haW5pbmdGaXJlZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic3RyIiwidHlwZVdyaXRlIiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImJhY2tncm91bmRQb3NpdGlvblgiLCJwdXNoIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0Iiwic3RhcnRYIiwic3RhcnRZIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJjdXJzb3JYIiwiY3Vyc29yWSIsIndvcmRzIiwic3BsaXQiLCJzZW50ZW5jZSIsInNlbGYiLCJ0eXBpbmciLCJzZXRJbnRlcnZhbCIsIm1lYXN1cmVUZXh0IiwiY2xlYXJJbnRlcnZhbCIsInJhZGl1cyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJibCIsImNsb3NlUGF0aCIsImZpbGwiLCJzaGlmdCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlVGV4dCIsImN1cnJlbnRGcmFtZSIsInByaW5jZXNzQ29sIiwicHJpbmNlc3NSb3ciLCJrbmlnaHRDb2wiLCJrbmlnaHRSb3ciLCJkcmF3S2V5Q291bnQiLCJkcmF3SGVhcnQiLCJkcmF3VGV4dEJveCIsImRyYXdQbGF0Zm9ybXMiLCJkcmF3X2tleTEiLCJkcmF3X2tleTIiLCJkcmF3X2tleTMiLCJkcmF3X2tleTQiLCJjb2wiLCJyYW5kIiwicmFuZG9tIiwicmFuZDIiLCJkcmF3SXRlbXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixF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LEVBQThCLEdBQTlCO0FBQ0EsZUFBSytDLFVBQUwsSUFBbUIsQ0FBbkI7QUFDQSxlQUFLN0UsR0FBTCxDQUFTa0QsU0FBVCxDQUFtQixLQUFLZ0YsUUFBeEIsRUFBa0MsS0FBSSxDQUF0QyxFQUF5QyxJQUFJLEVBQTdDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELEVBQXlELEtBQUtyRSxTQUE5RCxFQUF5RSxHQUF6RSxFQUE4RSxFQUE5RSxFQUFrRixFQUFsRjtBQUNEO0FBQ0Q7QUFDRjs7Ozs7O0FBR0RrRCxNQUFNLENBQUNDLE9BQVAsR0FBaUJwSCxLQUFqQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5cbmNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IobGV2ZWwsIGN0eCwgY2FudmFzLCBiYWNrZ3JvdW5kQ3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLmJhY2tncm91bmRDdHggPSBiYWNrZ3JvdW5kQ3R4O1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLmJpbmRLZXlIYW5kbGVycygpO1xuICAgIHRoaXMuZmxpcFBsYXllciA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnN3b3JkU3dpcGUgPSAwO1xuICAgIHRoaXMuanVtcEhlaWdodCA9IDA7XG4gICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy5zcmNYID0gMDtcbiAgICB0aGlzLnNyY1kgPSAwO1xuICAgIHRoaXMueCA9IDMwMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcGVlZCA9IDEyO1xuICAgIHRoaXMua2lsbCA9IGZhbHNlO1xuICAgIHRoaXMuc2F2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc3VwZXJNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgIHRoaXMubGV2ZWwucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlU2NlbmUoKXtcbiAgICB0aGlzLmRyYXdNYWluQ2hhcmFjdGVyKCk7XG4gICAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB9XG5cbiAgZHJhd01haW5DaGFyYWN0ZXIoKSB7XG4gICAgY29uc3Qgc3ByaXRlV2lkdGggPSAzNTA7XG4gICAgY29uc3Qgc3ByaXRlSGVpZ2h0ID0gNDA3O1xuICAgIGNvbnN0IHJvd3MgPSAxMTtcbiAgICBjb25zdCBjb2xzID0gNztcbiAgICB0aGlzLnRyYWNrUmlnaHQgPSAxO1xuICAgIHRoaXMudHJhY2tMZWZ0ID0gMTtcbiAgICB0aGlzLndpZHRoID0gc3ByaXRlV2lkdGggLyBjb2xzO1xuICAgIHRoaXMuaGVpZ2h0ID0gc3ByaXRlSGVpZ2h0IC8gcm93cztcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLm9sZEZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMueCA9IDIyMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcmNYPSAwO1xuICAgIHRoaXMuc3JjWT0gdGhpcy50cmFja1JpZ2h0ICogdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICB0aGlzLnNwZWVkWSA9IDE1O1xuICAgIHRoaXMuY2hhcmFjdGVyLnNyYyA9IFwiZGlzdC9pbWFnZXMvYWR2ZW50dXJlci1TaGVldC5wbmdcIjtcbiAgfVxuICBtYWluTG9vcCh0aW1lKXtcbiAgICB0aGlzLnVwZGF0ZUZyYW1lKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmZyYW1lQ291bnQsIHRoaXMudHJhY2tMZWZ0LCB0aGlzLnRyYWNrUmlnaHQpXG4gICAgaWYgKHRoaXMuZmFjaW5nTGVmdCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgKC10aGlzLnggLSAodGhpcy53aWR0aCAqIDIpKSwgdGhpcy55LCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTsgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCoyLCB0aGlzLmhlaWdodCoyKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN1cGVyTW9kZSA9PT0gZmFsc2Upe1xuICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgICAgfSwgMTAwKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICAgIH0sIDQwKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZyYW1lKHdpZHRoLCBoZWlnaHQsIGZyYW1lQ291bnQsIHRyYWNrTGVmdCwgdHJhY2tSaWdodCl7XG4gICAgdGhpcy5vbGRGcmFtZSA9IHRoaXMub2xkRnJhbWUgKyAxO1xuICAgIFxuICAgIHRoaXMuY3VyRnJhbWUgPSAodGhpcy5jdXJGcmFtZSArIDEpICUgZnJhbWVDb3VudDtcbiAgICB0aGlzLnN0aWxsRnJhbWUgPSBNYXRoLmZsb29yKCh0aGlzLm9sZEZyYW1lICUgOSkgLyAzKVxuICAgIHRoaXMuc3JjWCA9IHRoaXMuY3VyRnJhbWUgKiB3aWR0aCArIHdpZHRoO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGggKiAyLCBoZWlnaHQgKiAyKTtcbiAgICB0aGlzLmxldmVsLnVwZGF0ZVNjZW5lKHRoaXMueCwgdGhpcy55LCB0aGlzLm9sZEZyYW1lKTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcblxuICAgIGlmICgodGhpcy5sZXZlbC5yb29tID09PSAwICYmIHRoaXMubGV2ZWwuaW50cm9UeXBlZCA9PT0gdHJ1ZSkgfHwgKHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgdGhpcy5sZXZlbC5vdmVyVHlwZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLmxldmVsLmRyYXdDb21tYW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGVmdCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSAmJiAodGhpcy54ID4gLTIwIHx8ICh0aGlzLmxldmVsLnJvb20gIT0xICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2UgJiYgKHRoaXMueCA8IDYyMCB8fCAodGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDYpKSAmJiAodGhpcy5sZXZlbC5yb29tICAhPSA3IHx8IHRoaXMueCA8ICh0aGlzLmxldmVsLnByaW5jZXNzWCAtIDg2KSB8fCB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpKXtcbiAgICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKXtcbiAgICAgIHRoaXMuc3BlZWRZID0gMTVcbiAgICAgIGlmICgzMTAgLSB0aGlzLnkgPiB0aGlzLnNwZWVkWSB8fCAodGhpcy5sZXZlbC5yb29tICE9IDEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDI1ICYmIHRoaXMubGV2ZWwucm9vbSAhPSAwICYmIHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDY3MCAmJiB0aGlzLnkgPCAzMjAgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDYpeyBcbiAgICAgIGlmICh0aGlzLmxldmVsLnJvb20gIT0gMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gMjUpe1xuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgfVxuICAgICAgdGhpcy54ID0gLTIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMueSA8IDMyMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNykge1xuICAgICAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPSAwICYmIHRoaXMubGV2ZWwucm9vbSAhPSAyNSkge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnggPSA2NDA7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbC5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5wbGF0Zm9ybXNbaV0pXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xuICAgICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubGV2ZWwuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgY29sbGlzaW9uTmFtZSA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5pdGVtc1tpXSlcbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTFcIil7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkxID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDYwMCwgMjQwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTJcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MiA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5M1wiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXk0XCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjI1LCAzNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImZpcmViYWxsXCIgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgICB0aGlzLnggPSAyMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gNTAwICl7XG4gICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICB0aGlzLnkgPSAxMDtcbiAgICAgIHRoaXMueCA9IDIwO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIGlmICgodGhpcy5sZXZlbC5saXZlcyA9PT0gMCB8fCB0aGlzLmxldmVsLnN0YWxsQ291bnQgPT09IDYwKSAmJiAodGhpcy5sZXZlbC5yb29tICE9IDI1IHx8IHRoaXMubGV2ZWwubGl2ZXMgPT09IDApKXtcbiAgICAgIHRoaXMubGV2ZWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID09PSAzMTApIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gaGVpZ2h0ICogMjtcbiAgICBlbHNlIGlmICh0aGlzLmxlZnQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrTGVmdCAqIGhlaWdodDtcbiAgICBlbHNlIGlmICh0aGlzLnJpZ2h0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja1JpZ2h0ICogaGVpZ2h0O1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDsgXG4gICAgICB0aGlzLnNyY1kgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpe1xuICAgICAgdGhpcy5zcmNYID0gKCh0aGlzLnN0aWxsRnJhbWUgJSA0KSArICAzKSAqIHdpZHRoO1xuICAgICAgdGhpcy5zcmNZID0gNSAqIGhlaWdodFxuICAgIH1cblxuICAgIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmtpbGwgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPT09IGZhbHNlKXtcbiAgICAgIHRoaXMuc3JjWCA9ICh0aGlzLnN0aWxsRnJhbWUpICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA3ICogaGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuc3RpbGxGcmFtZSA9PT0gMil7XG4gICAgICAgIHRoaXMuc3dvcmRTd2lwZSArPSAxXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zd29yZFN3aXBlID09PSA4KXtcbiAgICAgICAgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLnNhdmUgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNyl7XG4gICAgICB0aGlzLnNyY1ggPSAyICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA4ICogaGVpZ2h0O1xuICAgIH1cbiAgfVxuICBcbiAgbW92ZUxlZnQoKXtcbiAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpe1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGp1bXAoKXtcbiAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRLZXlIYW5kbGVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLm1vdmVSaWdodCgpO1xuICB9XG4gIGVsc2UgaWYgKChlLmtleSA9PT0gXCJhXCIgfHwgZS5rZXlDb2RlID09PSAzNykgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXlDb2RlID09PSAzOCkgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IGZhbHNlICYmICh0aGlzLnkgPT09IDMxMCB8fCB0aGlzLnNwZWVkWSA9PT0gMCkgJiYgdGhpcy55IDw9IDMxMCkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDYgJiYgdGhpcy54ID4gMjYwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5mb3VuZEtleXMoKSA9PT0gdHJ1ZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmICh0aGlzLmxldmVsLm92ZXJUeXBlZCA9PT0gdHJ1ZSB8fCB0aGlzLmxldmVsLmxpdmVzID09PSAwKSl7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICAgIGlmIChlLmtleSA9PT0gXCJ2XCIgJiYgdGhpcy5sZXZlbC5yb29tID09PSAyNSAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5yZWFjaGVkTGV2ZWw3ID09PSB0cnVlICYmICh0aGlzLmxldmVsLm92ZXJUeXBlZCA9PT0gdHJ1ZSB8fCB0aGlzLmxldmVsLmxpdmVzID09PSAwKSkge1xuICAgIHRoaXMucmVzdGFydEZpbmFsKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5pbnRyb1R5cGVkID09PSB0cnVlKSB7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDcgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMuc2F2ZSA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLmtpbGwgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcInZcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDcgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMua2lsbCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLnNhdmUgPSB0cnVlO1xuICAgIHRoaXMubGV2ZWwucHJpbmNlc3NTYXZlZCA9IHRydWU7XG4gIH1cblxuICBpZiAoKGUua2V5ID09PSBcInBcIikgJiYgdGhpcy5sZXZlbC5yb29tID09PSAxICYmIGUucmVwZWF0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zdXBlck1vZGUgPSAhdGhpcy5zdXBlck1vZGU7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzggfHwgZS5rZXlDb2RlID09PSA0MCl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG59XG5cbiBrZXlVcEhhbmRsZXIoZSkge1xuICAgaWYgKGUua2V5ID09PSBcImRcIiB8fCBlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG4gICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIgfHwgZS5rZXlDb2RlID09PSAzNykge1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG4gICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKXtcbiAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgfVxuXG59XG5cbmZvdW5kS2V5cygpe1xuICByZXR1cm4gdGhpcy5sZXZlbC5mb3VuZEtleTEgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTIgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTMgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTRcbn1cblxuY29sbGlzaW9uQ2hlY2socGxhdGZvcm0pe1xuICBjb25zdCB2ZWN0b3JYID0gKHRoaXMueCArICh0aGlzLndpZHRoKSkgLSAocGxhdGZvcm0ueCArIChwbGF0Zm9ybS53aWR0aCAvIDIpKTtcbiAgY29uc3QgdmVjdG9yWSA9ICh0aGlzLnkgKyAodGhpcy5oZWlnaHQpKSAtIChwbGF0Zm9ybS55ICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpKTtcblxuICBjb25zdCBjZW50ZXJXaWR0aHMgPSAodGhpcy53aWR0aC8yKSArIChwbGF0Zm9ybS53aWR0aCAvIDIpO1xuICBjb25zdCBjZW50ZXJIZWlnaHRzID0gKHRoaXMuaGVpZ2h0KSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKTtcblxuXG4gIGxldCBjb2xsaXNpb25EaXJlY3Rpb247XG5cbiAgaWYgKE1hdGguYWJzKHZlY3RvclgpIDwgY2VudGVyV2lkdGhzICYmIE1hdGguYWJzKHZlY3RvclkpIDwgY2VudGVySGVpZ2h0cykgXG4gIHtcblxuICAgIGlmIChwbGF0Zm9ybS5uYW1lKSByZXR1cm4gcGxhdGZvcm0ubmFtZTtcbiAgICBjb25zdCBvZmZzZXRYID0gY2VudGVyV2lkdGhzIC0gTWF0aC5hYnModmVjdG9yWCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGNlbnRlckhlaWdodHMgLSBNYXRoLmFicyh2ZWN0b3JZKTtcblxuICAgIGlmIChvZmZzZXRYIDwgb2Zmc2V0WSlcbiAgICAgICAgaWYgKHZlY3RvclggPiAwKXtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgICAgIHRoaXMueCArPSBvZmZzZXRYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgIHRoaXMueCAtPSBvZmZzZXRYO1xuICAgICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodmVjdG9yWSA+IDApe1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInRvcFwiO1xuICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMueSAtPSBvZmZzZXRZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb2xsaXNpb25EaXJlY3Rpb247XG59XG5cbnNjcm9sbFJpZ2h0KCl7XG4gIGlmICh0aGlzLmxldmVsLnJvb20gIT09IDI1ICYmICh0aGlzLmxldmVsLnJvb20gIT09IDAgJiYgdGhpcy5sZXZlbC5yb29tICE9PSA3KSkgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnNjcm9sbExlZnQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUpIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLnggPSAtMjA7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zdGFydCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIHRoaXMueCA9IDIyMDtcbiAgdGhpcy55ID0gMzEwO1xufVxuXG5yZXNldCgpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbmdhbWVPdmVyKCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5yb29tID0gMjVcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5pbnRybygpIHtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLnJvb20gPSAwXG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxucmVzdGFydCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoMSwgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLnN3b3JkU3dpcGUgPSAwO1xuICB0aGlzLmtpbGwgPSBmYWxzZTtcbiAgdGhpcy5zYXZlID0gZmFsc2U7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5yZXN0YXJ0RmluYWwoKXtcbiAgbGV0IG5ld0xldmVsID0gbmV3IExldmVsKDcsIHRoaXMuY3R4LCB0aGlzLmNhbnZhcyk7XG4gIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgdGhpcy5zd29yZFN3aXBlID0gMDtcbiAgdGhpcy5raWxsID0gZmFsc2U7XG4gIHRoaXMueCA9IDA7XG4gIHRoaXMuc2F2ZSA9IGZhbHNlO1xuICB0aGlzLmxldmVsLmtleUNvdW50ID0gNDtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9nYW1lX3ZpZXdcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuIFxuICBsZXQgbGV2ZWwgPSBuZXcgTGV2ZWwoMCwgY3R4LCBjYW52YXMpO1xuICBuZXcgR2FtZVZpZXcobGV2ZWwsIGN0eCwgY2FudmFzKTtcbn0pOyIsImNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCBjdHgsIGNhbnZhcykge1xuICAgIHRoaXMucm9vbSA9IG51bWJlcjtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMucGxhdGZvcm1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBsYXRmb3JtUGljLnNyYyA9IFwiZGlzdC9pbWFnZXMvcGxhdGZvcm0ucG5nXCI7XG4gICAgdGhpcy5wbGF0Zm9ybVdpZHRoID0gMTUwO1xuICAgIHRoaXMucGxhdGZvcm1IZWlnaHQgPSAyMDtcbiAgICB0aGlzLmhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5oZWFydC5zcmMgPSBcImRpc3QvaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgIHRoaXMuc3RhbGxDb3VudCA9IDA7XG4gICAgdGhpcy5pbnRyb1R5cGVkID0gZmFsc2U7XG4gICAgdGhpcy5vdmVyVHlwZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTEgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MiA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkzID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTQgPSBmYWxzZTtcbiAgICB0aGlzLmZpcnN0U2NlbmUgPSB0cnVlO1xuICAgIHRoaXMuc2Vjb25kU2NlbmUgPSB0cnVlO1xuICAgIHRoaXMucHJpbmNlc3NTd29yZENvdW50ID0gMDtcbiAgICB0aGlzLmtuaWdodERlYWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleTEgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTEuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTIuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTQuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleXMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleXMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleUNvdW50ID0gMDtcbiAgICB0aGlzLnJlYWNoZWRMZXZlbDcgPSBmYWxzZTtcbiAgICB0aGlzLmdyZWVuS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5ncmVlbktuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL01pdGhlcmFsS25pZ2h0LnBuZ1wiO1xuICAgIHRoaXMucHJpbmNlc3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByaW5jZXNzLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5wcmluY2Vzc1ggPSA1MDA7XG4gICAgdGhpcy5nb2xkS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5nb2xkS25pZ2h0LnNyYyA9IFwiZGlzdC9pbWFnZXMvR29sZEtuaWdodC5wbmdcIlxuICAgIHRoaXMuZ29sZEtuaWdodFggPSA3MDA7XG4gICAgdGhpcy5taXNzaWxlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5taXNzaWxlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5maXJlZCA9IDA7XG4gICAgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcmluY2Vzc0RlYWQgPSBmYWxzZTtcbiAgICB0aGlzLnByaW5jZXNzU2F2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXlGaXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuZG9uZU9uY2UgPSBmYWxzZTtcbiAgICB0aGlzLnJlbWFpbmluZ0ZpcmVkID0gMjA7XG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImRpc3QvaW1hZ2VzL2xldmVsJHt0aGlzLnJvb219LnBuZ1wiYFxuICAgIHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHBsYXRmb3JtV2lkdGggPSB0aGlzLnBsYXRmb3JtV2lkdGg7XG4gICAgcGxhdGZvcm1IZWlnaHQgPSB0aGlzLnBsYXRmb3JtSGVpZ2h0XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCkge1xuICAgICAgbGV0IHN0ciA9IFwiWW91IGNvbnRyb2wgSGVucnkgd2hvIGlzIGEgY29hbCBtaW5lciBmcm9tIHRoZSBraW5nZG9tIG9mIFRyb21pZGUuIEhlIGhhcyBhbHdheXMga2VwdCBhIGxvdyBwcm9maWxlLCBkZXRlcm1pbmVkIHRvIGRvIGhpcyBqb2IgYW5kIHRoZW4gZW5qb3kgdGhlIHBlYWNlIGFuZCBxdWlldCBvZiBoaXMgaG9tZS4gTm8gb25lIGtub3dzIGhpbSBwZXJzb25hbGx5IGFuZCBoZSBsaWtlcyBpdCB0aGF0IHdheS4gVGhlIHByaW5jZXNzIG9mIFRyb21pZGUgaGFzIGJlZW4ga2lkbmFwcGVkIGFuZCBhbGwgZWZmb3J0cyB0byBzYXZlIGhlciBoYXZlIGZhaWxlZC4gT24gaGlzIHdheSB0byB3b3JrIGhlIHNhdyBhIHBvc3RlciBvZmZlcmluZyBhIG1ham9yIHJld2FyZCB0byBhbnlvbmUgdGhhdCBjYW4gaGVscCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhlIG9uZSB0aGluZyBIZW5yeSBkb2VzIGNhcmUgZm9yIGlzIG1vbmV5LiBIZSBuZWVkcyB0byBmaW5kIHRoZSA0IGtleXMgdG8gZ2V0IGludG8gdGhlIGVuZW15IGNhc3RsZSBhbmQgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoaXMgaXMgd2hlcmUgaGlzIHN0b3J5IGJlZ2lucy4uLiBzdHJpbmdCcmVhayBVc2UgdGhlIGFycm93IGtleXMgb3IgQSwgRCwgVyB0byBnbyBsZWZ0LCByaWdodCBhbmQganVtcC4gTm90ZTogVGhlcmUgaXMgbm8gZG91YmxlIGp1bXAuXCJcbiAgICAgIHRoaXMudHlwZVdyaXRlKHN0ciwgMjAsIDMwLCAyNSwgNTApXG4gICAgfVxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi0yMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIxMTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA4MDAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDIwLFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTcwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDMwLFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTFcIixcbiAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgeTogMjQwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM0MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzgwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjYwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSlcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTJcIixcbiAgICAgICAgICB4OiAzODUsXG4gICAgICAgICAgeTogMjUwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY2MCxcbiAgICAgICAgeTogMTQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzE1LFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY1MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDQ0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA1MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSlcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTNcIixcbiAgICAgICAgICB4OiAzODUsXG4gICAgICAgICAgeTogMjUwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA1KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjAwLFxuICAgICAgICB5OiA3NSxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU1MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEzMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDcwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDQ3NSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1MzAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA1NTAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5NFwiLFxuICAgICAgICAgIHg6IDIyNSxcbiAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA2KSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyMixcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjcwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMFwiO1xuICAgICAgdGhpcy5yZWFjaGVkTGV2ZWw3ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IHRydWUpe1xuICAgICAgICBsZXQgc3RyID0gXCJBZnRlciBraWxsaW5nIHRoZSBwcmluY2VzcyB5b3UgcmV0dXJuZWQgdG8gVHJvbWlkZS4gWW91IHRvbGQgdGhlIHN0b3J5IG9mIHlvdXIgYWR2ZW50dXJlIGJ1dCB0aGUga2luZyBkaWRuJ3QgYnV5IGl0LiBIZSB0aG91Z2h0IHlvdSBtYWRlIGl0IHVwIGFuZCB3ZXJlIHBsYW5uaW5nIG9uIGtpbGxpbmcgaGVyIGFsbCBhbG9uZy4gWW91IGhhdmUgYmVlbiBleGlsZWQgdG8gYW4gaXNsYW5kIHdoZXJlIHlvdSBoYXZlIHRvIGZlbmQgZm9yIHlvdXJzZWxmLiBZb3UgbmV2ZXIgZXhwZWN0ZWQgdGhpcyBpcyB3aGF0IGJlaW5nIGEgaGVybyB3b3VsZCBmZWVsIGxpa2UuIFlvdXIgd2hvbGUgbGlmZSBhbGwgeW91IHdhbnRlZCB3YXMgdG8gYmUgbGVmdCBhbG9uZSB5ZXQgbm93IHlvdSB3b3VsZCBkbyBhbnl0aGluZyB0byBzZWUgYW5vdGhlciBwZXJzb24uIEFmdGVyIHNwZW5kaW5nIHdlZWtzIGZvY3VzZWQgb24gc3Vydml2YWwsIHlvdSBzZWUgYSBib2F0IGFwcHJvYWNoIHRoZSBpc2xhbmQuLi4gVEhFIEVORC5cIlxuICAgICAgICB0aGlzLnR5cGVXcml0ZShzdHIsIDIwLCAzMCwgMjUsIDUwKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByaW5jZXNzU2F2ZWQgPT09IHRydWUpe1xuICAgICAgICBsZXQgc3RyID0gXCJZb3UgYnJvdWdodCB0aGUgcHJpbmNlc3MgYmFjayB0byBUcm9taWRlLiBUaGUga2luZyBjb3VsZG4ndCBiZWxpZXZlIHdoYXQgaGFwcGVuZWQuIEFmdGVyIHNlZWluZyBmb3IgaGltc2VsZiB0aGF0IHRoZSBwcmluY2VzcyB3YXMgdGhlIG9uZSBiZWhpbmQgaXQgYWxsLCBoZSBvcmRlcmVkIHRvIGhhdmUgaGVyIGxvY2tlZCBhd2F5IGluIHRoZSBkdW5nZW9uLiBUaGUgcGVvcGxlIG9mIFRyb21pZGUgaGFpbGVkIHlvdSBhIGhlcm8uIEV2ZXJ5d2hlcmUgeW91IHdlbnQgcGVvcGxlIGNhbGxlZCBvdXQgeW91ciBuYW1lLiBUcnV0aGZ1bGx5LCB5b3UgbGlrZWQgaXQgYmV0dGVyIHdoZW4gbm8gb25lIGtuZXcgd2hvIHlvdSB3ZXJlLiBBIGZldyB3ZWVrcyBsYXRlciB5b3UgY291bGRuJ3QgZ2V0IG9uZSBxdWVzdGlvbiBvdXQgb2YgeW91ciBoZWFkLiBXaGF0IGRyb3ZlIHRoZSBwcmluY2VzcyB0byBkbyBhbGwgdGhpcy4gWW91IGRlY2lkZWQgdG8gZ28gZG93biB0byB0aGUgZHVuZ2VvbiB0byB0cnkgYW5kIGdldCBzb21lIGFuc3dlcnMuIFdoZW4geW91IGdvdCB0byB0aGUgY2VsbCB0aGUgZG9vciB3YXMgYnVzdGVkIG9wZW4gYW5kIHRoZSBjZWxsIHdhcyBlbXB0eS4uLiBUSEUgRU5ELlwiXG4gICAgICAgIHRoaXMudHlwZVdyaXRlKHN0ciwgMjAsIDMwLCAyNSwgNTApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgZmFpbGVkIHRvIHNhdmUgdGhlIFByaW5jZXNzLlwiLCAxNzAsIDEwMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHN0YXJ0IGFnYWluLicsIDIyMCwgMTUwKTtcbiAgICAgICAgaWYgKHRoaXMucmVhY2hlZExldmVsNyA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBWIHRvIHN0YXJ0IGZyb20gY2FzdGxlIHNjZW5lIGFnYWluLicsIDE0MCwgMTgwKTtcbiAgICAgICAgfVxuICAgICB9XG4gICAgfVxuXG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDI2KSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGZhaWxlZCB0byBzYXZlIHRoZSBQcmluY2Vzcy5cIiwgMTcwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQgYWdhaW4uJywgMjIwLCAxNTApO1xuICAgICAgaWYgKHRoaXMucmVhY2hlZExldmVsNyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgViB0byBzdGFydCBmcm9tIGNhc3RsZSBzY2VuZSBhZ2Fpbi4nLCAxNDAsIDE4MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHlwZVdyaXRlKHN0ciwgc3RhcnRYLCBzdGFydFksIGxpbmVIZWlnaHQsIHBhZGRpbmcpe1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY3Vyc29yWCA9IHN0YXJ0WDtcbiAgICBsZXQgY3Vyc29yWSA9IHN0YXJ0WTtcbiAgICBsZXQgd29yZHMgPSBzdHIuc3BsaXQoXCIgXCIpO1xuICAgIGxldCBzZW50ZW5jZSA9IFwiXCI7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0eXBpbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgd2lkdGggPSBzZWxmLmN0eC5tZWFzdXJlVGV4dChzZW50ZW5jZSkud2lkdGg7XG4gICAgICBzZW50ZW5jZSArPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgICAgaWYgKHN0YXJ0WCArIHdpZHRoID49IHNlbGYuY2FudmFzLndpZHRoIC0gcGFkZGluZykge1xuICAgICAgICBjdXJzb3JYID0gc3RhcnRYO1xuICAgICAgICBjdXJzb3JZICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgIHNlbnRlbmNlID0gd29yZHNbaV0gKyBcIiBcIjtcbiAgICAgIH0gZWxzZSBpZiAod29yZHNbaV0gPT09IFwic3RyaW5nQnJlYWtcIil7XG4gICAgICAgIGN1cnNvclggPSBzdGFydFg7XG4gICAgICAgIGN1cnNvclkgKz0gbGluZUhlaWdodCArIDEwO1xuICAgICAgICBpKys7XG4gICAgICAgIHNlbnRlbmNlID0gd29yZHNbaV0gKyBcIiBcIjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjdXJzb3JYID0gc3RhcnRYICsgd2lkdGhcbiAgICAgIH1cbiAgICAgIHNlbGYuY3R4LmZvbnQgPSAnMTJwdCBBcmlhbCc7XG4gICAgICBzZWxmLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICBzZWxmLmN0eC5maWxsVGV4dCh3b3Jkc1tpXSwgY3Vyc29yWCwgY3Vyc29yWSk7XG4gICAgICBpKys7XG4gICAgICBpZiAoaSA9PT0gd29yZHMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChzZWxmLnJvb20gPT09IDApIHNlbGYuaW50cm9UeXBlZCA9IHRydWU7XG4gICAgICAgIGlmIChzZWxmLnJvb20gPT09IDI1KSBzZWxmLm92ZXJUeXBlZCA9IHRydWU7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodHlwaW5nKTtcbiAgICAgIH1cbiAgICB9LCAyMDApO1xuICB9XG5cbiAgZHJhd1RleHRCb3goeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKXtcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLmJsLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3UGxhdGZvcm1zKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wbGF0Zm9ybVBpYywgMCwgMCwgOTYsIDk2LCB0aGlzLnBsYXRmb3Jtc1tpXS54LCB0aGlzLnBsYXRmb3Jtc1tpXS55LCB0aGlzLnBsYXRmb3Jtc1tpXS53aWR0aCwgdGhpcy5wbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBkcmF3SXRlbXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5taXNzaWxlLCA4OTEgLCA4MiwgODEsIDgyLCB0aGlzLml0ZW1zW2ldLnggLSBzaGlmdCwgMjkwLCAxMDAsIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hlYXJ0KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaGVhcnQsIDAsIDAsIDEyNSwgMTI1LCA2NTAsIDEwLCAzMCwgMzApXG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMubGl2ZXMsIDYzMiwgMzIpO1xuICB9XG5cbiAgZHJhd0tleUNvdW50KCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDU2MCwgMTAsIDIwMCwgNTApXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5cywgMzIsIDAsIDMyLCAzMiwgNTkwLCAxMiwgMzAsIDMwKTtcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5rZXlDb3VudCwgNTcwLCAzMik7XG4gIH1cblxuICBkcmF3X2tleTEoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkxLCAzMiwgMCwgMzIsIDMyLCA2MDAsIDI0MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5Migpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTIsIDMyLCAwLCAzMiwgMzIsIDM4NSwgMjUwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkzKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTMsIDY0LCAwLCAzMiwgMzIsIDM4NSwgMjUwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXk0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTQsIDk2LCAwLCAzMiwgMzIsIDIyNSwgMzQwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd0NvbW1hbmQoKXtcbiAgICBpZiAodGhpcy5yb29tID09PSAwKXtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyNTAsIDIzMCwgMjAwLCA1MClcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBBcmlhbCBCb2xkJztcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHN0YXJ0LicsIDI3MCwgMjUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDE5MCwgMjMwLCA0MDAsIDEwMClcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHN0YXJ0IGFnYWluLicsIDI1MCwgMjQwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBWIHRvIHN0YXJ0IGZyb20gY2FzdGxlIHNjZW5lIGFnYWluLicsIDE5MCwgMjYwKTtcbiAgICB9IFxuICB9XG5cbiAgdXBkYXRlU2NlbmUoeCwgeSwgY3VycmVudEZyYW1lKXtcbiAgICBsZXQgcHJpbmNlc3NDb2w7XG4gICAgbGV0IHByaW5jZXNzUm93ID0gMjtcbiAgICBsZXQga25pZ2h0Q29sO1xuICAgIGxldCBrbmlnaHRSb3c7XG5cbiAgICBpZiAodGhpcy5yb29tICE9IDAgJiYgdGhpcy5yb29tICE9IDI1KXtcbiAgICB0aGlzLmRyYXdLZXlDb3VudCgpO1xuICAgIHRoaXMuZHJhd0hlYXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSl7XG4gICAgICBpZiAoeCA8IDQwMCAmJiB4ID4gMjAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg5MCwgMjgwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0dvb2QgbHVjayBIZW5yeSwnLCA5NSwgMzAwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0kga25vdyB5b3UgY2FuJywgOTUsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdkbyBpdCEnLCA5NSwgMzIwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh4IDwgODAwICYmIHggPiA1MDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQwMCwgMjYwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgYXJlbid0IGdvaW5nXCIsIDQxMCwgMjgwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ3RvIGxhc3QgNSBtaW51dGVzJywgNDEwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIm91dCB0aGVyZS5cIiwgNDEwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDQwMCwgMjYwLCAxMDAsIDUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5kcmF3X2tleTEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMykge1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDEzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCkge1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MygpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDMwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5kcmF3X2tleTQoKTtcbiAgICAgIH0gIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNil7XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTMgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIGNvbCA9IGN1cnJlbnRGcmFtZSAlIDEwXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzMjAsIDMxMCwgNjUsIDY1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ncmVlbktuaWdodCwgMzIgKiBjb2wsIDAsIDMyLCAzMiwgLTM4NSwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjIwLCAyNzAsIDEyMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBtdXN0IGhhdmUgYWxsIDRcIiwgMjMwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgna2V5cyB0byBlbnRlciB0aGUgY2FzdGxlLicsIDIzMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjAsIDI3MCwgMTIwLCA1MCk7XG4gICAgICAgIGlmICh4ID4gMjYwICYmIHggPCAzNTApe1xuICAgICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjYwLCAyNzAsIDE1MCwgMjUsIDUpO1xuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBDIHRvIGVudGVyIHRoZSBjYXN0bGUuXCIsIDI3MCwgMjkwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjYwLCAyNzAsIDE1MCwgMjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAzMDAsIDEwMDAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5nb2xkS25pZ2h0WCwgMzAwLCA4NSwgODUpXG4gICAgICBpZiAodGhpcy5maXJzdFNjZW5lID09PSB0cnVlKXtcbiAgICAgICBwcmluY2Vzc0NvbCA9IDc7XG4gICAgICAgIGlmIChjdXJyZW50RnJhbWUgJSA4ID09PSAwKXtcbiAgICAgICAgIHByaW5jZXNzQ29sID0gODtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoeCA8IDI1MCAmJiB0aGlzLmZpcnN0U2NlbmUgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDM5MCwgMjkwLCAxNTAsIDQwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBsZWFzZSBzYXZlIG1lISBUaGVcIiwgNDAwICwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJldmlsIGtuaWdodCBpcyBjb21pbmchXCIsIDQwMCwgMzIzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzOTAsIDI5MCwgMTUwLCA0MCk7XG4gICAgICB9XG4gICAgICBrbmlnaHRSb3cgPSAxO1xuICAgICAgaWYgKHggPiAyNjAgfHwgdGhpcy5rbmlnaHREZWFkID09PSB0cnVlKXtcbiAgICAgICAga25pZ2h0Q29sID0gKGN1cnJlbnRGcmFtZSkgJSAxMDtcbiAgICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNTApIHtcbiAgICAgICAgICB0aGlzLmdvbGRLbmlnaHRYIC09IDU7XG4gICAgICAgICAga25pZ2h0Um93ID0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPiAxKSB7XG4gICAgICAgICAga25pZ2h0Um93ID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrbmlnaHRSb3cgPT09IDQgJiYga25pZ2h0Q29sID09PSA5KXtcbiAgICAgICAgICB0aGlzLmtuaWdodERlYWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAga25pZ2h0Q29sID0gOTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmdvbGRLbmlnaHQsIDMyICoga25pZ2h0Q29sLCBrbmlnaHRSb3cgKiAzMiwgMzIsIDMyLCAtdGhpcy5nb2xkS25pZ2h0WCAtIDg1LCAzMDAsIDg1LCA4NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNjAgJiYgdGhpcy5nb2xkS25pZ2h0WCA8IDYwMClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgxMzAsIDI1MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZXkgeW91IGJpZyBkdW1teS4gWW91XCIsIDE0MCwgMjcyKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJiZXR0ZXIgbGV0IHRoZSBwcmluY2VzcyBnbyFcIiwgMTQwLCAyODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA9PT0gMzUwICYmIHRoaXMucHJpbmNlc3NYICE9IDM5MCAmJiB0aGlzLmtuaWdodERlYWQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5maXJzdFNjZW5lID0gZmFsc2U7XG4gICAgICAgIHByaW5jZXNzQ29sID0gY3VycmVudEZyYW1lICUgMjtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NYID4gMzkwICYmIHRoaXMua25pZ2h0RGVhZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSA1O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgxMzAsIDI1MCwgMTgwLCA1NSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjEwLCAyMzAsIDE3MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhhbmsgZ29kIHlvdSBhcmUgaGVyZS5cIiwgMjIwLCAyNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkV2ZXJ5b25lIGhhcyBpdCBhbGwgd3JvbmcuLi5cIiwgMjIwLCAyNjUpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPT09IDM5MCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMTAsIDIzMCwgMTcwLCA4MCk7XG4gICAgICAgIGlmICh0aGlzLnNlY29uZFNjZW5lID09PSB0cnVlKXtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IE1hdGguZmxvb3IoKGN1cnJlbnRGcmFtZSAlIDE3KSAvIDQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMjApIC8gMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmluY2Vzc0NvbCA9PT0gNCl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAwO1xuICAgICAgICAgIHRoaXMucHJpbmNlc3NTd29yZENvdW50ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPT09IDIpe1xuICAgICAgICAgIHRoaXMuc2Vjb25kU2NlbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQ2MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhvdyBjdXRlLiBZb3UgdGhvdWdodCBJIHdhc1wiLCA0NzAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhlIG9uZSB0aGF0IG5lZWRlZCBzYXZpbmcuXCIsIDQ3MCwgMzA1KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUgJiYgdGhpcy5wcmluY2Vzc1ggPCA2NTApe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNDYwLCAyNzAsIDE4MCwgNjApXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE1KVxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlKXtcbiAgICAgICAgICByYW5kID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwcmluY2Vzc0NvbCA9IDlcbiAgICAgICAgaWYgKHJhbmQlMiA9PT0gMCAmJiB0aGlzLnByaW5jZXNzWCA8IDQ2MCl7XG4gICAgICAgICAgdGhpcy5wcmluY2Vzc1ggKz0gcmFuZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPiAwKXtcbiAgICAgICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSByYW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJpbmNlc3NYICs9IHJhbmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpe1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMTApLzUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhbmQyID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCkpO1xuICAgICAgICBpZiAoKGN1cnJlbnRGcmFtZSAlIDMwID09PSAwIHx8IHJhbmQyID09PSAxNCkgJiYgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAxMFxuICAgICAgICAgIGxldCBmYWNpbmdMZWZ0XG4gICAgICAgICAgaWYgKHggPCB0aGlzLnByaW5jZXNzWCl7XG4gICAgICAgICAgICBmYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaWZ0ID0gNDVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmFjaW5nTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgc2hpZnQgPSAwXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBcImZpcmViYWxsXCIsXG4gICAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICB5OiAzNTUsXG4gICAgICAgICAgICB4OiB0aGlzLnByaW5jZXNzWCArIHNoaWZ0LFxuICAgICAgICAgICAgbGVmdDogZmFjaW5nTGVmdCxcbiAgICAgICAgICAgIHNoaWZ0OiBzaGlmdFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5maXJlZCArPSAxO1xuICAgICAgICAgIHRoaXMucmVtYWluaW5nRmlyZWQgLT0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IGZhbHNlKXtcbiAgICAgICAgaWYgKHggPCB0aGlzLnByaW5jZXNzWCl7XG4gICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCAtdGhpcy5wcmluY2Vzc1ggLSA4NSwgMzAwLCA4NSwgODUpO1xuICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5sZWZ0ID09PSB0cnVlKXtcbiAgICAgICAgICAgdGhpcy5pdGVtc1tpXS54IC09IDEwO1xuICAgICAgICAgfVxuICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgIHRoaXMuaXRlbXNbaV0ueCArPSAxMDtcbiAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgdGhpcy5kcmF3SXRlbXMoY3VycmVudEZyYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RmlyZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5maXJlZCA9PT0gMjApe1xuICAgICAgICB0aGlzLnByaW5jZXNzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc3BsYXlGaXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcmVkID0gMDtcbiAgICAgIH1cblxuICAgIGlmICh0aGlzLmRpc3BsYXlGaXJlZCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzEwLCA1MCwgMzAwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubWlzc2lsZSwgODkxLCA4MiwgODEsIDgyLCAzMjAsIDQwLCAxMDAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTRwdCBGYW50YXN5JztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5yZW1haW5pbmdGaXJlZCwzMjAsIDEwMClcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMTJwdCBGYW50YXN5JztcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwicmVtYWluaW5nXCIsIDM4MCwgMTAwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUgJiYgdGhpcy5maXJlZCA8IDMgJiYgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwyNDAsIDYwMCwgNTApO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4ICsgNTAsIDI0MCwgMjAwLCA1MCwgNSk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJJIGp1c3QgbmVlZCB0byBsYXN0IGxvbmcgZW5vdWdoXCIsIHggKyA2MCwgMjYwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiZm9yIGhlciBtYWdpYyB0byBydW4gb3V0LlwiLCB4ICsgNjAsIDI3MCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlyZWQgPT09IDMgJiYgdGhpcy5kb25lT25jZSA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMjQwLCA2MDAsIDUwKTtcbiAgICAgIHRoaXMuZG9uZU9uY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgTWF0aC5hYnModGhpcy5wcmluY2Vzc1ggLSB4KSA+IDcwKXtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3godGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxvb2tzIGxpa2UgSSB3aWxsIGhhdmUgdG8gZG9cIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhpcyB0aGUgaGFyZCB3YXlcIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMzA1KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IGZhbHNlICYmIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiBNYXRoLmFicyh0aGlzLnByaW5jZXNzWCAtIHgpIDwgNzApe1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsNTApO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4IC0gMTYwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTG9va3MgbGlrZSBJIHdpbGwgaGF2ZSB0byBkb1wiLCB4IC0gMTUwLCAyOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGlzIHRoZSBlYXN5IHdheVwiLCB4IC0gMTUwLCAzMDUpO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4IC0gMTYwLCAxNDAsIDI1MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgQyB0byBraWxsIHRoZSBwcmluY2Vzc1wiLCB4IC0gMTUwLCAxNjApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBWIHRvIHJldHVybiB0aGUgcHJpbmNlc3MgdG8gVHJvbWlkZVwiLCB4IC0gMTUwLCAxNzUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaW5jZXNzU2F2ZWQgPT09IHRydWUpe1xuICAgICAgdGhpcy5zdGFsbENvdW50ICs9IDE7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgICAgdGhpcy5zdGFsbENvdW50ICs9IDE7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiA0LCAyICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3godGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkFscmlnaHQgeW91IHdpbiBJJ2xsIGdvIGJhY2tcIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwid2l0aCB5b3UuXCIsIHRoaXMucHJpbmNlc3NYICsgNjAsIDMwNSk7XG4gICAgICBpZiAodGhpcy5zdGFsbENvdW50ID4gMTUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KHggLSAxNjAsIDI3MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHb29kIENob2ljZS5cIiwgeCAtIDE1MCwgMjkwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgIGlmICh0aGlzLnByaW5jZXNzRGVhZCA9PT0gdHJ1ZSl7XG4gICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgIHRoaXMuc3RhbGxDb3VudCArPSAzO1xuICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEqIDgsIDIgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgfVxuICB9XG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==