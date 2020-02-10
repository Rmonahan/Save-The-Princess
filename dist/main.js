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
          var _str = "After killing the princess you returned to Tromide. You told the story of your adventure but the king didn't buy it. He thought you made it up and were planning on killing her all along. You have been exiled to an island where you have to fend for yourself. You never expected this is what being a hero would feel like. Your whole life all you wanted was to be left alone yet now you would do anything to see another person. After spending weeks focused on surival, you see a boat approach the island... THE END.";
          this.typeWrite(_str, 20, 30, 25, 50);
        } else if (this.princessSaved === true) {
          var _str2 = "You brought the princess back to Tromide. The king couldn't believe what happened. After seeing for himself that the princess was the one behind it all, he ordered to have her locked away in the dungeon. The people of Tromide hailed you a hero. Everywhere you went people called out your name. Truthfully, you liked it better when no one knew who you were. A few weeks later you couldn't get one question out of your head. What drove the princess to do all this. You decided to go down to the dunguen to try and get some answers. When you got to the cell the door was broken open and the cell was empty... THE END.";
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
      }, 200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJzd29yZFN3aXBlIiwianVtcEhlaWdodCIsImluQWlyIiwiY3VyRnJhbWUiLCJmcmFtZUNvdW50Iiwic3JjWCIsInNyY1kiLCJ4IiwieSIsInNwZWVkIiwia2lsbCIsInNhdmUiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwicm9vbSIsImludHJvVHlwZWQiLCJvdmVyVHlwZWQiLCJkcmF3Q29tbWFuZCIsImRpc2FibGVkIiwicHJpbmNlc3NYIiwicHJpbmNlc3NEaXNhYmxlZCIsInNjcm9sbFJpZ2h0Iiwic2Nyb2xsTGVmdCIsImkiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJjb2xsaXNpb25DaGVjayIsImNvbGxpc2lvbk5hbWUiLCJmb3VuZEtleTEiLCJrZXlDb3VudCIsImZvdW5kS2V5MiIsImZvdW5kS2V5MyIsImZvdW5kS2V5NCIsImxpdmVzIiwicmVzZXQiLCJzdGFsbENvdW50IiwiZ2FtZU92ZXIiLCJwcmluY2Vzc0RlYWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJrZXlDb2RlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZm91bmRLZXlzIiwiZW50ZXIiLCJyZXN0YXJ0IiwicmVhY2hlZExldmVsNyIsInJlc3RhcnRGaW5hbCIsInN0YXJ0IiwicHJpbmNlc3NTYXZlZCIsInBsYXRmb3JtIiwidmVjdG9yWCIsInZlY3RvclkiLCJjZW50ZXJXaWR0aHMiLCJjZW50ZXJIZWlnaHRzIiwiY29sbGlzaW9uRGlyZWN0aW9uIiwiYWJzIiwibmFtZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY2xlYXIiLCJuZXdMZXZlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJudW1iZXIiLCJwbGF0Zm9ybVBpYyIsInBsYXRmb3JtV2lkdGgiLCJwbGF0Zm9ybUhlaWdodCIsImhlYXJ0IiwiZmlyc3RTY2VuZSIsInNlY29uZFNjZW5lIiwicHJpbmNlc3NTd29yZENvdW50Iiwia25pZ2h0RGVhZCIsImtleTEiLCJrZXkyIiwia2V5MyIsImtleTQiLCJrZXlzIiwiZ3JlZW5LbmlnaHQiLCJwcmluY2VzcyIsImdvbGRLbmlnaHQiLCJnb2xkS25pZ2h0WCIsIm1pc3NpbGUiLCJmaXJlZCIsImRpc3BsYXlGaXJlZCIsImRvbmVPbmNlIiwicmVtYWluaW5nRmlyZWQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInN0ciIsInR5cGVXcml0ZSIsImJhY2tncm91bmRQb3NpdGlvblkiLCJiYWNrZ3JvdW5kUG9zaXRpb25YIiwicHVzaCIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsInN0YXJ0WCIsInN0YXJ0WSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwiY3Vyc29yWCIsImN1cnNvclkiLCJ3b3JkcyIsInNwbGl0Iiwic2VudGVuY2UiLCJzZWxmIiwidHlwaW5nIiwic2V0SW50ZXJ2YWwiLCJtZWFzdXJlVGV4dCIsImNsZWFySW50ZXJ2YWwiLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiYmwiLCJjbG9zZVBhdGgiLCJmaWxsIiwic2hpZnQiLCJzdHJva2VTdHlsZSIsInN0cm9rZVRleHQiLCJjdXJyZW50RnJhbWUiLCJwcmluY2Vzc0NvbCIsInByaW5jZXNzUm93Iiwia25pZ2h0Q29sIiwia25pZ2h0Um93IiwiZHJhd0tleUNvdW50IiwiZHJhd0hlYXJ0IiwiZHJhd1RleHRCb3giLCJkcmF3UGxhdGZvcm1zIiwiZHJhd19rZXkxIiwiZHJhd19rZXkyIiwiZHJhd19rZXkzIiwiZHJhd19rZXk0IiwiY29sIiwicmFuZCIsInJhbmRvbSIsInJhbmQyIiwiZHJhd0l0ZW1zIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztR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QUFNLENBQUNDLE9BQVAsR0FBaUJuSCxLQUFqQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5cbmNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IobGV2ZWwsIGN0eCwgY2FudmFzLCBiYWNrZ3JvdW5kQ3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLmJhY2tncm91bmRDdHggPSBiYWNrZ3JvdW5kQ3R4O1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLmJpbmRLZXlIYW5kbGVycygpO1xuICAgIHRoaXMuZmxpcFBsYXllciA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnN3b3JkU3dpcGUgPSAwO1xuICAgIHRoaXMuanVtcEhlaWdodCA9IDA7XG4gICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy5zcmNYID0gMDtcbiAgICB0aGlzLnNyY1kgPSAwO1xuICAgIHRoaXMueCA9IDMwMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcGVlZCA9IDEyO1xuICAgIHRoaXMua2lsbCA9IGZhbHNlO1xuICAgIHRoaXMuc2F2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc3VwZXJNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgIHRoaXMubGV2ZWwucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlU2NlbmUoKXtcbiAgICB0aGlzLmRyYXdNYWluQ2hhcmFjdGVyKCk7XG4gICAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB9XG5cbiAgZHJhd01haW5DaGFyYWN0ZXIoKSB7XG4gICAgY29uc3Qgc3ByaXRlV2lkdGggPSAzNTA7XG4gICAgY29uc3Qgc3ByaXRlSGVpZ2h0ID0gNDA3O1xuICAgIGNvbnN0IHJvd3MgPSAxMTtcbiAgICBjb25zdCBjb2xzID0gNztcbiAgICB0aGlzLnRyYWNrUmlnaHQgPSAxO1xuICAgIHRoaXMudHJhY2tMZWZ0ID0gMTtcbiAgICB0aGlzLndpZHRoID0gc3ByaXRlV2lkdGggLyBjb2xzO1xuICAgIHRoaXMuaGVpZ2h0ID0gc3ByaXRlSGVpZ2h0IC8gcm93cztcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLm9sZEZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMueCA9IDIyMDtcbiAgICB0aGlzLnkgPSAzMTA7XG4gICAgdGhpcy5zcmNYPSAwO1xuICAgIHRoaXMuc3JjWT0gdGhpcy50cmFja1JpZ2h0ICogdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICB0aGlzLnNwZWVkWSA9IDE1O1xuICAgIHRoaXMuY2hhcmFjdGVyLnNyYyA9IFwiZGlzdC9pbWFnZXMvYWR2ZW50dXJlci1TaGVldC5wbmdcIjtcbiAgfVxuICBtYWluTG9vcCh0aW1lKXtcbiAgICB0aGlzLnVwZGF0ZUZyYW1lKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmZyYW1lQ291bnQsIHRoaXMudHJhY2tMZWZ0LCB0aGlzLnRyYWNrUmlnaHQpXG4gICAgaWYgKHRoaXMuZmFjaW5nTGVmdCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgKC10aGlzLnggLSAodGhpcy53aWR0aCAqIDIpKSwgdGhpcy55LCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTsgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCoyLCB0aGlzLmhlaWdodCoyKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN1cGVyTW9kZSA9PT0gZmFsc2Upe1xuICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgICAgfSwgMTAwKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICAgIH0sIDQwKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZyYW1lKHdpZHRoLCBoZWlnaHQsIGZyYW1lQ291bnQsIHRyYWNrTGVmdCwgdHJhY2tSaWdodCl7XG4gICAgdGhpcy5vbGRGcmFtZSA9IHRoaXMub2xkRnJhbWUgKyAxO1xuICAgIFxuICAgIHRoaXMuY3VyRnJhbWUgPSAodGhpcy5jdXJGcmFtZSArIDEpICUgZnJhbWVDb3VudDtcbiAgICB0aGlzLnN0aWxsRnJhbWUgPSBNYXRoLmZsb29yKCh0aGlzLm9sZEZyYW1lICUgOSkgLyAzKVxuICAgIHRoaXMuc3JjWCA9IHRoaXMuY3VyRnJhbWUgKiB3aWR0aCArIHdpZHRoO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLngsIHRoaXMueSwgd2lkdGggKiAyLCBoZWlnaHQgKiAyKTtcbiAgICB0aGlzLmxldmVsLnVwZGF0ZVNjZW5lKHRoaXMueCwgdGhpcy55LCB0aGlzLm9sZEZyYW1lKTtcbiAgICB0aGlzLmluQWlyID0gdHJ1ZTtcblxuICAgIGlmICgodGhpcy5sZXZlbC5yb29tID09PSAwICYmIHRoaXMubGV2ZWwuaW50cm9UeXBlZCA9PT0gdHJ1ZSkgfHwgKHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgdGhpcy5sZXZlbC5vdmVyVHlwZWQgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLmxldmVsLmRyYXdDb21tYW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGVmdCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSAmJiAodGhpcy54ID4gLTIwIHx8ICh0aGlzLmxldmVsLnJvb20gIT0xICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2UgJiYgKHRoaXMueCA8IDYyMCB8fCAodGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDYpKSAmJiAodGhpcy5sZXZlbC5yb29tICAhPSA3IHx8IHRoaXMueCA8ICh0aGlzLmxldmVsLnByaW5jZXNzWCAtIDg2KSB8fCB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpKXtcbiAgICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKXtcbiAgICAgIHRoaXMuc3BlZWRZID0gMTVcbiAgICAgIGlmICgzMTAgLSB0aGlzLnkgPiB0aGlzLnNwZWVkWSB8fCAodGhpcy5sZXZlbC5yb29tICE9IDEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDI1ICYmIHRoaXMubGV2ZWwucm9vbSAhPSAwICYmIHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDY3MCAmJiB0aGlzLnkgPCAzMjAgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDYpeyBcbiAgICAgIGlmICh0aGlzLmxldmVsLnJvb20gIT0gMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gMjUpe1xuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgfVxuICAgICAgdGhpcy54ID0gLTIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMueSA8IDMyMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNykge1xuICAgICAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPSAwICYmIHRoaXMubGV2ZWwucm9vbSAhPSAyNSkge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnggPSA2NDA7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbC5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5wbGF0Zm9ybXNbaV0pXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xuICAgICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubGV2ZWwuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgY29sbGlzaW9uTmFtZSA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5pdGVtc1tpXSlcbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTFcIil7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkxID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDYwMCwgMjQwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTJcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MiA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5M1wiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXk0XCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjI1LCAzNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImZpcmViYWxsXCIgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgICB0aGlzLnggPSAyMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gNTAwICl7XG4gICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICB0aGlzLnkgPSAxMDtcbiAgICAgIHRoaXMueCA9IDIwO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIGlmICgodGhpcy5sZXZlbC5saXZlcyA9PT0gMCB8fCB0aGlzLmxldmVsLnN0YWxsQ291bnQgPT09IDYwKSAmJiAodGhpcy5sZXZlbC5yb29tICE9IDI1IHx8IHRoaXMubGV2ZWwubGl2ZXMgPT09IDApKXtcbiAgICAgIHRoaXMubGV2ZWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID09PSAzMTApIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gaGVpZ2h0ICogMjtcbiAgICBlbHNlIGlmICh0aGlzLmxlZnQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrTGVmdCAqIGhlaWdodDtcbiAgICBlbHNlIGlmICh0aGlzLnJpZ2h0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja1JpZ2h0ICogaGVpZ2h0O1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDsgXG4gICAgICB0aGlzLnNyY1kgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpe1xuICAgICAgdGhpcy5zcmNYID0gKCh0aGlzLnN0aWxsRnJhbWUgJSA0KSArICAzKSAqIHdpZHRoO1xuICAgICAgdGhpcy5zcmNZID0gNSAqIGhlaWdodFxuICAgIH1cblxuICAgIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmtpbGwgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPT09IGZhbHNlKXtcbiAgICAgIHRoaXMuc3JjWCA9ICh0aGlzLnN0aWxsRnJhbWUpICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA3ICogaGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuc3RpbGxGcmFtZSA9PT0gMil7XG4gICAgICAgIHRoaXMuc3dvcmRTd2lwZSArPSAxXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zd29yZFN3aXBlID09PSA4KXtcbiAgICAgICAgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLnNhdmUgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNyl7XG4gICAgICB0aGlzLnNyY1ggPSAyICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA4ICogaGVpZ2h0O1xuICAgIH1cbiAgfVxuICBcbiAgbW92ZUxlZnQoKXtcbiAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpe1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGp1bXAoKXtcbiAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRLZXlIYW5kbGVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLm1vdmVSaWdodCgpO1xuICB9XG4gIGVsc2UgaWYgKChlLmtleSA9PT0gXCJhXCIgfHwgZS5rZXlDb2RlID09PSAzNykgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXlDb2RlID09PSAzOCkgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IGZhbHNlICYmICh0aGlzLnkgPT09IDMxMCB8fCB0aGlzLnNwZWVkWSA9PT0gMCkgJiYgdGhpcy55IDw9IDMxMCkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDYgJiYgdGhpcy54ID4gMjYwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5mb3VuZEtleXMoKSA9PT0gdHJ1ZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmICh0aGlzLmxldmVsLm92ZXJUeXBlZCA9PT0gdHJ1ZSB8fCB0aGlzLmxldmVsLmxpdmVzID09PSAwKSl7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICAgIGlmIChlLmtleSA9PT0gXCJ2XCIgJiYgdGhpcy5sZXZlbC5yb29tID09PSAyNSAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5yZWFjaGVkTGV2ZWw3ID09PSB0cnVlICYmICh0aGlzLmxldmVsLm92ZXJUeXBlZCA9PT0gdHJ1ZSB8fCB0aGlzLmxldmVsLmxpdmVzID09PSAwKSkge1xuICAgIHRoaXMucmVzdGFydEZpbmFsKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5pbnRyb1R5cGVkID09PSB0cnVlKSB7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDcgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMuc2F2ZSA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLmtpbGwgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcInZcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDcgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMua2lsbCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLnNhdmUgPSB0cnVlO1xuICAgIHRoaXMubGV2ZWwucHJpbmNlc3NTYXZlZCA9IHRydWU7XG4gIH1cblxuICBpZiAoKGUua2V5ID09PSBcInBcIikgJiYgdGhpcy5sZXZlbC5yb29tID09PSAxICYmIGUucmVwZWF0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zdXBlck1vZGUgPSAhdGhpcy5zdXBlck1vZGU7XG4gICAgfVxuXG59XG5cbiBrZXlVcEhhbmRsZXIoZSkge1xuICAgaWYgKGUua2V5ID09PSBcImRcIiB8fCBlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG4gICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIgfHwgZS5rZXlDb2RlID09PSAzNykge1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG59XG5cbmZvdW5kS2V5cygpe1xuICByZXR1cm4gdGhpcy5sZXZlbC5mb3VuZEtleTEgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTIgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTMgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTRcbn1cblxuY29sbGlzaW9uQ2hlY2socGxhdGZvcm0pe1xuICBjb25zdCB2ZWN0b3JYID0gKHRoaXMueCArICh0aGlzLndpZHRoKSkgLSAocGxhdGZvcm0ueCArIChwbGF0Zm9ybS53aWR0aCAvIDIpKTtcbiAgY29uc3QgdmVjdG9yWSA9ICh0aGlzLnkgKyAodGhpcy5oZWlnaHQpKSAtIChwbGF0Zm9ybS55ICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpKTtcblxuICBjb25zdCBjZW50ZXJXaWR0aHMgPSAodGhpcy53aWR0aC8yKSArIChwbGF0Zm9ybS53aWR0aCAvIDIpO1xuICBjb25zdCBjZW50ZXJIZWlnaHRzID0gKHRoaXMuaGVpZ2h0KSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKTtcblxuXG4gIGxldCBjb2xsaXNpb25EaXJlY3Rpb247XG5cbiAgaWYgKE1hdGguYWJzKHZlY3RvclgpIDwgY2VudGVyV2lkdGhzICYmIE1hdGguYWJzKHZlY3RvclkpIDwgY2VudGVySGVpZ2h0cykgXG4gIHtcblxuICAgIGlmIChwbGF0Zm9ybS5uYW1lKSByZXR1cm4gcGxhdGZvcm0ubmFtZTtcbiAgICBjb25zdCBvZmZzZXRYID0gY2VudGVyV2lkdGhzIC0gTWF0aC5hYnModmVjdG9yWCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGNlbnRlckhlaWdodHMgLSBNYXRoLmFicyh2ZWN0b3JZKTtcblxuICAgIGlmIChvZmZzZXRYIDwgb2Zmc2V0WSlcbiAgICAgICAgaWYgKHZlY3RvclggPiAwKXtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgICAgIHRoaXMueCArPSBvZmZzZXRYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgIHRoaXMueCAtPSBvZmZzZXRYO1xuICAgICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodmVjdG9yWSA+IDApe1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInRvcFwiO1xuICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMueSAtPSBvZmZzZXRZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb2xsaXNpb25EaXJlY3Rpb247XG59XG5cbnNjcm9sbFJpZ2h0KCl7XG4gIGlmICh0aGlzLmxldmVsLnJvb20gIT09IDI1ICYmICh0aGlzLmxldmVsLnJvb20gIT09IDAgJiYgdGhpcy5sZXZlbC5yb29tICE9PSA3KSkgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnNjcm9sbExlZnQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUpIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLnggPSAtMjA7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zdGFydCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIHRoaXMueCA9IDIyMDtcbiAgdGhpcy55ID0gMzEwO1xufVxuXG5yZXNldCgpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbmdhbWVPdmVyKCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5yb29tID0gMjVcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5pbnRybygpIHtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLnJvb20gPSAwXG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxucmVzdGFydCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoMSwgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLnN3b3JkU3dpcGUgPSAwO1xuICB0aGlzLmtpbGwgPSBmYWxzZTtcbiAgdGhpcy5zYXZlID0gZmFsc2U7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5yZXN0YXJ0RmluYWwoKXtcbiAgbGV0IG5ld0xldmVsID0gbmV3IExldmVsKDcsIHRoaXMuY3R4LCB0aGlzLmNhbnZhcyk7XG4gIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgdGhpcy5zd29yZFN3aXBlID0gMDtcbiAgdGhpcy5raWxsID0gZmFsc2U7XG4gIHRoaXMueCA9IDA7XG4gIHRoaXMuc2F2ZSA9IGZhbHNlO1xuICB0aGlzLmxldmVsLmtleUNvdW50ID0gNDtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9nYW1lX3ZpZXdcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuIFxuICBsZXQgbGV2ZWwgPSBuZXcgTGV2ZWwoMCwgY3R4LCBjYW52YXMpO1xuICBuZXcgR2FtZVZpZXcobGV2ZWwsIGN0eCwgY2FudmFzKTtcbn0pOyIsImNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCBjdHgsIGNhbnZhcykge1xuICAgIHRoaXMucm9vbSA9IG51bWJlcjtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMucGxhdGZvcm1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBsYXRmb3JtUGljLnNyYyA9IFwiZGlzdC9pbWFnZXMvcGxhdGZvcm0ucG5nXCI7XG4gICAgdGhpcy5wbGF0Zm9ybVdpZHRoID0gMTUwO1xuICAgIHRoaXMucGxhdGZvcm1IZWlnaHQgPSAyMDtcbiAgICB0aGlzLmhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5oZWFydC5zcmMgPSBcImRpc3QvaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgIHRoaXMuc3RhbGxDb3VudCA9IDA7XG4gICAgdGhpcy5pbnRyb1R5cGVkID0gZmFsc2U7XG4gICAgdGhpcy5vdmVyVHlwZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTEgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MiA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkzID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTQgPSBmYWxzZTtcbiAgICB0aGlzLmZpcnN0U2NlbmUgPSB0cnVlO1xuICAgIHRoaXMuc2Vjb25kU2NlbmUgPSB0cnVlO1xuICAgIHRoaXMucHJpbmNlc3NTd29yZENvdW50ID0gMDtcbiAgICB0aGlzLmtuaWdodERlYWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleTEgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTEuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTIuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTQuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleXMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleXMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleUNvdW50ID0gMDtcbiAgICB0aGlzLnJlYWNoZWRMZXZlbDcgPSBmYWxzZTtcbiAgICB0aGlzLmdyZWVuS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5ncmVlbktuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL01pdGhlcmFsS25pZ2h0LnBuZ1wiO1xuICAgIHRoaXMucHJpbmNlc3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByaW5jZXNzLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5wcmluY2Vzc1ggPSA1MDA7XG4gICAgdGhpcy5nb2xkS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5nb2xkS25pZ2h0LnNyYyA9IFwiZGlzdC9pbWFnZXMvR29sZEtuaWdodC5wbmdcIlxuICAgIHRoaXMuZ29sZEtuaWdodFggPSA3MDA7XG4gICAgdGhpcy5taXNzaWxlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5taXNzaWxlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5maXJlZCA9IDA7XG4gICAgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcmluY2Vzc0RlYWQgPSBmYWxzZTtcbiAgICB0aGlzLnByaW5jZXNzU2F2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXlGaXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuZG9uZU9uY2UgPSBmYWxzZTtcbiAgICB0aGlzLnJlbWFpbmluZ0ZpcmVkID0gMjA7XG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImRpc3QvaW1hZ2VzL2xldmVsJHt0aGlzLnJvb219LnBuZ1wiYFxuICAgIHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHBsYXRmb3JtV2lkdGggPSB0aGlzLnBsYXRmb3JtV2lkdGg7XG4gICAgcGxhdGZvcm1IZWlnaHQgPSB0aGlzLnBsYXRmb3JtSGVpZ2h0XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCkge1xuICAgICAgbGV0IHN0ciA9IFwiWW91IGNvbnRyb2wgSGVucnkgd2hvIGlzIGEgY29hbCBtaW5lciBmcm9tIHRoZSBraW5nZG9tIG9mIFRyb21pZGUuIEhlIGhhcyBhbHdheXMga2VwdCBhIGxvdyBwcm9maWxlLCBkZXRlcm1pbmVkIHRvIGRvIGhpcyBqb2IgYW5kIHRoZW4gZW5qb3kgdGhlIHBlYWNlIGFuZCBxdWlldCBvZiBoaXMgaG9tZS4gTm8gb25lIGtub3dzIGhpbSBwZXJzb25hbGx5IGFuZCBoZSBsaWtlcyBpdCB0aGF0IHdheS4gVGhlIHByaW5jZXNzIG9mIFRyb21pZGUgaGFzIGJlZW4ga2lkbmFwcGVkIGFuZCBhbGwgZWZmb3J0cyB0byBzYXZlIGhlciBoYXZlIGZhaWxlZC4gT24gaGlzIHdheSB0byB3b3JrIGhlIHNhdyBhIHBvc3RlciBvZmZlcmluZyBhIG1ham9yIHJld2FyZCB0byBhbnlvbmUgdGhhdCBjYW4gaGVscCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhlIG9uZSB0aGluZyBIZW5yeSBkb2VzIGNhcmUgZm9yIGlzIG1vbmV5LiBIZSBuZWVkcyB0byBmaW5kIHRoZSA0IGtleXMgdG8gZ2V0IGludG8gdGhlIGVuZW15IGNhc3RsZSBhbmQgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoaXMgaXMgd2hlcmUgaGlzIHN0b3J5IGJlZ2lucy4uLiBzdHJpbmdCcmVhayBVc2UgdGhlIGFycm93IGtleXMgb3IgQSwgRCwgVyB0byBnbyBsZWZ0LCByaWdodCBhbmQganVtcC4gTm90ZTogVGhlcmUgaXMgbm8gZG91YmxlIGp1bXAuXCJcbiAgICAgIHRoaXMudHlwZVdyaXRlKHN0ciwgMjAsIDMwLCAyNSwgNTApXG4gICAgfVxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi0yMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIxMTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA4MDAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDIwLFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTcwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDMwLFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTFcIixcbiAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgeTogMjQwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM0MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzgwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjYwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSlcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTJcIixcbiAgICAgICAgICB4OiAzODUsXG4gICAgICAgICAgeTogMjUwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY2MCxcbiAgICAgICAgeTogMTQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzE1LFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY1MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDQ0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA1MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSlcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTNcIixcbiAgICAgICAgICB4OiAzODUsXG4gICAgICAgICAgeTogMjUwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA1KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjAwLFxuICAgICAgICB5OiA3NSxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU1MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEzMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDcwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDQ3NSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1MzAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA1NTAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5NFwiLFxuICAgICAgICAgIHg6IDIyNSxcbiAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA2KSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyMixcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjcwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMFwiO1xuICAgICAgdGhpcy5yZWFjaGVkTGV2ZWw3ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IHRydWUpe1xuICAgICAgICBsZXQgc3RyID0gXCJBZnRlciBraWxsaW5nIHRoZSBwcmluY2VzcyB5b3UgcmV0dXJuZWQgdG8gVHJvbWlkZS4gWW91IHRvbGQgdGhlIHN0b3J5IG9mIHlvdXIgYWR2ZW50dXJlIGJ1dCB0aGUga2luZyBkaWRuJ3QgYnV5IGl0LiBIZSB0aG91Z2h0IHlvdSBtYWRlIGl0IHVwIGFuZCB3ZXJlIHBsYW5uaW5nIG9uIGtpbGxpbmcgaGVyIGFsbCBhbG9uZy4gWW91IGhhdmUgYmVlbiBleGlsZWQgdG8gYW4gaXNsYW5kIHdoZXJlIHlvdSBoYXZlIHRvIGZlbmQgZm9yIHlvdXJzZWxmLiBZb3UgbmV2ZXIgZXhwZWN0ZWQgdGhpcyBpcyB3aGF0IGJlaW5nIGEgaGVybyB3b3VsZCBmZWVsIGxpa2UuIFlvdXIgd2hvbGUgbGlmZSBhbGwgeW91IHdhbnRlZCB3YXMgdG8gYmUgbGVmdCBhbG9uZSB5ZXQgbm93IHlvdSB3b3VsZCBkbyBhbnl0aGluZyB0byBzZWUgYW5vdGhlciBwZXJzb24uIEFmdGVyIHNwZW5kaW5nIHdlZWtzIGZvY3VzZWQgb24gc3VyaXZhbCwgeW91IHNlZSBhIGJvYXQgYXBwcm9hY2ggdGhlIGlzbGFuZC4uLiBUSEUgRU5ELlwiXG4gICAgICAgIHRoaXMudHlwZVdyaXRlKHN0ciwgMjAsIDMwLCAyNSwgNTApXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJpbmNlc3NTYXZlZCA9PT0gdHJ1ZSl7XG4gICAgICAgIGxldCBzdHIgPSBcIllvdSBicm91Z2h0IHRoZSBwcmluY2VzcyBiYWNrIHRvIFRyb21pZGUuIFRoZSBraW5nIGNvdWxkbid0IGJlbGlldmUgd2hhdCBoYXBwZW5lZC4gQWZ0ZXIgc2VlaW5nIGZvciBoaW1zZWxmIHRoYXQgdGhlIHByaW5jZXNzIHdhcyB0aGUgb25lIGJlaGluZCBpdCBhbGwsIGhlIG9yZGVyZWQgdG8gaGF2ZSBoZXIgbG9ja2VkIGF3YXkgaW4gdGhlIGR1bmdlb24uIFRoZSBwZW9wbGUgb2YgVHJvbWlkZSBoYWlsZWQgeW91IGEgaGVyby4gRXZlcnl3aGVyZSB5b3Ugd2VudCBwZW9wbGUgY2FsbGVkIG91dCB5b3VyIG5hbWUuIFRydXRoZnVsbHksIHlvdSBsaWtlZCBpdCBiZXR0ZXIgd2hlbiBubyBvbmUga25ldyB3aG8geW91IHdlcmUuIEEgZmV3IHdlZWtzIGxhdGVyIHlvdSBjb3VsZG4ndCBnZXQgb25lIHF1ZXN0aW9uIG91dCBvZiB5b3VyIGhlYWQuIFdoYXQgZHJvdmUgdGhlIHByaW5jZXNzIHRvIGRvIGFsbCB0aGlzLiBZb3UgZGVjaWRlZCB0byBnbyBkb3duIHRvIHRoZSBkdW5ndWVuIHRvIHRyeSBhbmQgZ2V0IHNvbWUgYW5zd2Vycy4gV2hlbiB5b3UgZ290IHRvIHRoZSBjZWxsIHRoZSBkb29yIHdhcyBicm9rZW4gb3BlbiBhbmQgdGhlIGNlbGwgd2FzIGVtcHR5Li4uIFRIRSBFTkQuXCJcbiAgICAgICAgdGhpcy50eXBlV3JpdGUoc3RyLCAyMCwgMzAsIDI1LCA1MClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBmYWlsZWQgdG8gc2F2ZSB0aGUgUHJpbmNlc3MuXCIsIDE3MCwgMTAwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQgYWdhaW4uJywgMjIwLCAxNTApO1xuICAgICAgICBpZiAodGhpcy5yZWFjaGVkTGV2ZWw3ID09PSB0cnVlKXtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFYgdG8gc3RhcnQgZnJvbSBjYXN0bGUgc2NlbmUgYWdhaW4uJywgMTQwLCAxODApO1xuICAgICAgICB9XG4gICAgIH1cbiAgICB9XG5cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjYpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgZmFpbGVkIHRvIHNhdmUgdGhlIFByaW5jZXNzLlwiLCAxNzAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydCBhZ2Fpbi4nLCAyMjAsIDE1MCk7XG4gICAgICBpZiAodGhpcy5yZWFjaGVkTGV2ZWw3ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBWIHRvIHN0YXJ0IGZyb20gY2FzdGxlIHNjZW5lIGFnYWluLicsIDE0MCwgMTgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0eXBlV3JpdGUoc3RyLCBzdGFydFgsIHN0YXJ0WSwgbGluZUhlaWdodCwgcGFkZGluZyl7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjdXJzb3JYID0gc3RhcnRYO1xuICAgIGxldCBjdXJzb3JZID0gc3RhcnRZO1xuICAgIGxldCB3b3JkcyA9IHN0ci5zcGxpdChcIiBcIik7XG4gICAgbGV0IHNlbnRlbmNlID0gXCJcIjtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHR5cGluZyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB3aWR0aCA9IHNlbGYuY3R4Lm1lYXN1cmVUZXh0KHNlbnRlbmNlKS53aWR0aDtcbiAgICAgIHNlbnRlbmNlICs9IHdvcmRzW2ldICsgXCIgXCI7XG4gICAgICBpZiAoc3RhcnRYICsgd2lkdGggPj0gc2VsZi5jYW52YXMud2lkdGggLSBwYWRkaW5nKSB7XG4gICAgICAgIGN1cnNvclggPSBzdGFydFg7XG4gICAgICAgIGN1cnNvclkgKz0gbGluZUhlaWdodDtcbiAgICAgICAgc2VudGVuY2UgPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgICAgfSBlbHNlIGlmICh3b3Jkc1tpXSA9PT0gXCJzdHJpbmdCcmVha1wiKXtcbiAgICAgICAgY3Vyc29yWCA9IHN0YXJ0WDtcbiAgICAgICAgY3Vyc29yWSArPSBsaW5lSGVpZ2h0ICsgMTA7XG4gICAgICAgIGkrKztcbiAgICAgICAgc2VudGVuY2UgPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGN1cnNvclggPSBzdGFydFggKyB3aWR0aFxuICAgICAgfVxuICAgICAgc2VsZi5jdHguZm9udCA9ICcxMnB0IEFyaWFsJztcbiAgICAgIHNlbGYuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgIHNlbGYuY3R4LmZpbGxUZXh0KHdvcmRzW2ldLCBjdXJzb3JYLCBjdXJzb3JZKTtcbiAgICAgIGkrKztcbiAgICAgIGlmIChpID09PSB3b3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHNlbGYucm9vbSA9PT0gMCkgc2VsZi5pbnRyb1R5cGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNlbGYucm9vbSA9PT0gMjUpIHNlbGYub3ZlclR5cGVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0eXBpbmcpO1xuICAgICAgfVxuICAgIH0sIDIwMCk7XG4gIH1cblxuICBkcmF3VGV4dEJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpe1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpdXMuYmwsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdQbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBsYXRmb3JtUGljLCAwLCAwLCA5NiwgOTYsIHRoaXMucGxhdGZvcm1zW2ldLngsIHRoaXMucGxhdGZvcm1zW2ldLnksIHRoaXMucGxhdGZvcm1zW2ldLndpZHRoLCB0aGlzLnBsYXRmb3Jtc1tpXS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdJdGVtcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLm1pc3NpbGUsIDg5MSAsIDgyLCA4MSwgODIsIHRoaXMuaXRlbXNbaV0ueCAtIHNoaWZ0LCAyOTAsIDEwMCwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBkcmF3SGVhcnQoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5oZWFydCwgMCwgMCwgMTI1LCAxMjUsIDY1MCwgMTAsIDMwLCAzMClcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5saXZlcywgNjMyLCAzMik7XG4gIH1cblxuICBkcmF3S2V5Q291bnQoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoNTYwLCAxMCwgMjAwLCA1MClcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXlzLCAzMiwgMCwgMzIsIDMyLCA1OTAsIDEyLCAzMCwgMzApO1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLmtleUNvdW50LCA1NzAsIDMyKTtcbiAgfVxuXG4gIGRyYXdfa2V5MSgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTEsIDAsIDAsIDMyLCAzMiwgNjAwLCAyNDAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTIoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkyLCAzMiwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5MygpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkzLCA2NCwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5NCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXk0LCA5NiwgMCwgMzIsIDMyLCAyMjUsIDM0MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdDb21tYW5kKCl7XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCl7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjUwLCAyMzAsIDIwMCwgNTApXG4gICAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgQXJpYWwgQm9sZCc7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydC4nLCAyNzAsIDI1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgxOTAsIDIzMCwgNDAwLCAxMDApXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydCBhZ2Fpbi4nLCAyNTAsIDI0MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgViB0byBzdGFydCBmcm9tIGNhc3RsZSBzY2VuZSBhZ2Fpbi4nLCAxOTAsIDI2MCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2NlbmUoeCwgeSwgY3VycmVudEZyYW1lKXtcbiAgICBsZXQgcHJpbmNlc3NDb2w7XG4gICAgbGV0IHByaW5jZXNzUm93ID0gMjtcbiAgICBsZXQga25pZ2h0Q29sO1xuICAgIGxldCBrbmlnaHRSb3c7XG5cbiAgICBpZiAodGhpcy5yb29tICE9IDAgJiYgdGhpcy5yb29tICE9IDI1KXtcbiAgICB0aGlzLmRyYXdLZXlDb3VudCgpO1xuICAgIHRoaXMuZHJhd0hlYXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSl7XG4gICAgICBpZiAoeCA8IDQwMCAmJiB4ID4gMjAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg5MCwgMjgwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0dvb2QgbHVjayBIZW5yeSwnLCA5NSwgMzAwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0kga25vdyB5b3UgY2FuJywgOTUsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdkbyBpdCEnLCA5NSwgMzIwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh4IDwgODAwICYmIHggPiA1MDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQwMCwgMjYwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgYXJlbid0IGdvaW5nXCIsIDQxMCwgMjgwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ3RvIGxhc3QgNSBtaW51dGVzJywgNDEwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIm91dCB0aGVyZS5cIiwgNDEwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDQwMCwgMjYwLCAxMDAsIDUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5kcmF3X2tleTEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMykge1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDEzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCkge1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MygpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDMwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5kcmF3X2tleTQoKTtcbiAgICAgIH0gIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNil7XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTMgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIGNvbCA9IGN1cnJlbnRGcmFtZSAlIDEwXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzMjAsIDMxMCwgNjUsIDY1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ncmVlbktuaWdodCwgMzIgKiBjb2wsIDAsIDMyLCAzMiwgLTM4NSwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjIwLCAyNzAsIDEyMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBtdXN0IGhhdmUgYWxsIDRcIiwgMjMwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgna2V5cyB0byBlbnRlciB0aGUgY2FzdGxlLicsIDIzMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjAsIDI3MCwgMTIwLCA1MCk7XG4gICAgICAgIGlmICh4ID4gMjYwICYmIHggPCAzNTApe1xuICAgICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjYwLCAyNzAsIDE1MCwgMjUsIDUpO1xuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBDIHRvIGVudGVyIHRoZSBjYXN0bGUuXCIsIDI3MCwgMjkwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjYwLCAyNzAsIDE1MCwgMjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAzMDAsIDEwMDAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5nb2xkS25pZ2h0WCwgMzAwLCA4NSwgODUpXG4gICAgICBpZiAodGhpcy5maXJzdFNjZW5lID09PSB0cnVlKXtcbiAgICAgICBwcmluY2Vzc0NvbCA9IDc7XG4gICAgICAgIGlmIChjdXJyZW50RnJhbWUgJSA4ID09PSAwKXtcbiAgICAgICAgIHByaW5jZXNzQ29sID0gODtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoeCA8IDI1MCAmJiB0aGlzLmZpcnN0U2NlbmUgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDM5MCwgMjkwLCAxNTAsIDQwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBsZWFzZSBzYXZlIG1lISBUaGVcIiwgNDAwICwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJldmlsIGtuaWdodCBpcyBjb21pbmchXCIsIDQwMCwgMzIzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzOTAsIDI5MCwgMTUwLCA0MCk7XG4gICAgICB9XG4gICAgICBrbmlnaHRSb3cgPSAxO1xuICAgICAgaWYgKHggPiAyNjAgfHwgdGhpcy5rbmlnaHREZWFkID09PSB0cnVlKXtcbiAgICAgICAga25pZ2h0Q29sID0gKGN1cnJlbnRGcmFtZSkgJSAxMDtcbiAgICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNTApIHtcbiAgICAgICAgICB0aGlzLmdvbGRLbmlnaHRYIC09IDU7XG4gICAgICAgICAga25pZ2h0Um93ID0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPiAxKSB7XG4gICAgICAgICAga25pZ2h0Um93ID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrbmlnaHRSb3cgPT09IDQgJiYga25pZ2h0Q29sID09PSA5KXtcbiAgICAgICAgICB0aGlzLmtuaWdodERlYWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAga25pZ2h0Q29sID0gOTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmdvbGRLbmlnaHQsIDMyICoga25pZ2h0Q29sLCBrbmlnaHRSb3cgKiAzMiwgMzIsIDMyLCAtdGhpcy5nb2xkS25pZ2h0WCAtIDg1LCAzMDAsIDg1LCA4NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNjAgJiYgdGhpcy5nb2xkS25pZ2h0WCA8IDYwMClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgxMzAsIDI1MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZXkgeW91IGJpZyBkdW1teS4gWW91XCIsIDE0MCwgMjcyKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJiZXR0ZXIgbGV0IHRoZSBwcmluY2VzcyBnbyFcIiwgMTQwLCAyODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA9PT0gMzUwICYmIHRoaXMucHJpbmNlc3NYICE9IDM5MCAmJiB0aGlzLmtuaWdodERlYWQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5maXJzdFNjZW5lID0gZmFsc2U7XG4gICAgICAgIHByaW5jZXNzQ29sID0gY3VycmVudEZyYW1lICUgMjtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NYID4gMzkwICYmIHRoaXMua25pZ2h0RGVhZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSA1O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgxMzAsIDI1MCwgMTgwLCA1NSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjEwLCAyMzAsIDE3MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhhbmsgZ29kIHlvdSBhcmUgaGVyZS5cIiwgMjIwLCAyNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkV2ZXJ5b25lIGhhcyBpdCBhbGwgd3JvbmcuLi5cIiwgMjIwLCAyNjUpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPT09IDM5MCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMTAsIDIzMCwgMTcwLCA4MCk7XG4gICAgICAgIGlmICh0aGlzLnNlY29uZFNjZW5lID09PSB0cnVlKXtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IE1hdGguZmxvb3IoKGN1cnJlbnRGcmFtZSAlIDE3KSAvIDQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMjApIC8gMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmluY2Vzc0NvbCA9PT0gNCl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAwO1xuICAgICAgICAgIHRoaXMucHJpbmNlc3NTd29yZENvdW50ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPT09IDIpe1xuICAgICAgICAgIHRoaXMuc2Vjb25kU2NlbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQ2MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhvdyBjdXRlLiBZb3UgdGhvdWdodCBJIHdhc1wiLCA0NzAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhlIG9uZSB0aGF0IG5lZWRlZCBzYXZpbmcuXCIsIDQ3MCwgMzA1KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUgJiYgdGhpcy5wcmluY2Vzc1ggPCA2NTApe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNDYwLCAyNzAsIDE4MCwgNjApXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE1KVxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlKXtcbiAgICAgICAgICByYW5kID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwcmluY2Vzc0NvbCA9IDlcbiAgICAgICAgaWYgKHJhbmQlMiA9PT0gMCAmJiB0aGlzLnByaW5jZXNzWCA8IDQ2MCl7XG4gICAgICAgICAgdGhpcy5wcmluY2Vzc1ggKz0gcmFuZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPiAwKXtcbiAgICAgICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSByYW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJpbmNlc3NYICs9IHJhbmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpe1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMTApLzUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhbmQyID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCkpO1xuICAgICAgICBpZiAoKGN1cnJlbnRGcmFtZSAlIDMwID09PSAwIHx8IHJhbmQyID09PSAxNCkgJiYgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAxMFxuICAgICAgICAgIGxldCBmYWNpbmdMZWZ0XG4gICAgICAgICAgaWYgKHggPCB0aGlzLnByaW5jZXNzWCl7XG4gICAgICAgICAgICBmYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaWZ0ID0gNDVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmFjaW5nTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgc2hpZnQgPSAwXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBcImZpcmViYWxsXCIsXG4gICAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICB5OiAzNTUsXG4gICAgICAgICAgICB4OiB0aGlzLnByaW5jZXNzWCArIHNoaWZ0LFxuICAgICAgICAgICAgbGVmdDogZmFjaW5nTGVmdCxcbiAgICAgICAgICAgIHNoaWZ0OiBzaGlmdFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5maXJlZCArPSAxO1xuICAgICAgICAgIHRoaXMucmVtYWluaW5nRmlyZWQgLT0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IGZhbHNlKXtcbiAgICAgICAgaWYgKHggPCB0aGlzLnByaW5jZXNzWCl7XG4gICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCAtdGhpcy5wcmluY2Vzc1ggLSA4NSwgMzAwLCA4NSwgODUpO1xuICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5sZWZ0ID09PSB0cnVlKXtcbiAgICAgICAgICAgdGhpcy5pdGVtc1tpXS54IC09IDEwO1xuICAgICAgICAgfVxuICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgIHRoaXMuaXRlbXNbaV0ueCArPSAxMDtcbiAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgdGhpcy5kcmF3SXRlbXMoY3VycmVudEZyYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RmlyZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5maXJlZCA9PT0gMjApe1xuICAgICAgICB0aGlzLnByaW5jZXNzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc3BsYXlGaXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcmVkID0gMDtcbiAgICAgIH1cblxuICAgIGlmICh0aGlzLmRpc3BsYXlGaXJlZCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzEwLCA1MCwgMzAwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubWlzc2lsZSwgODkxLCA4MiwgODEsIDgyLCAzMjAsIDQwLCAxMDAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTRwdCBGYW50YXN5JztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5yZW1haW5pbmdGaXJlZCwzMjAsIDEwMClcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMTJwdCBGYW50YXN5JztcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwicmVtYWluaW5nXCIsIDM4MCwgMTAwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUgJiYgdGhpcy5maXJlZCA8IDMgJiYgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwyNDAsIDYwMCwgNTApO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4ICsgNTAsIDI0MCwgMjAwLCA1MCwgNSk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJJIGp1c3QgbmVlZCB0byBsYXN0IGxvbmcgZW5vdWdoXCIsIHggKyA2MCwgMjYwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiZm9yIGhlciBtYWdpYyB0byBydW4gb3V0LlwiLCB4ICsgNjAsIDI3MCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlyZWQgPT09IDMgJiYgdGhpcy5kb25lT25jZSA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMjQwLCA2MDAsIDUwKTtcbiAgICAgIHRoaXMuZG9uZU9uY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgTWF0aC5hYnModGhpcy5wcmluY2Vzc1ggLSB4KSA+IDcwKXtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3godGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxvb2tzIGxpa2UgSSB3aWxsIGhhdmUgdG8gZG9cIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhpcyB0aGUgaGFyZCB3YXlcIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMzA1KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IGZhbHNlICYmIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiBNYXRoLmFicyh0aGlzLnByaW5jZXNzWCAtIHgpIDwgNzApe1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsNTApO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4IC0gMTYwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTG9va3MgbGlrZSBJIHdpbGwgaGF2ZSB0byBkb1wiLCB4IC0gMTUwLCAyOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGlzIHRoZSBlYXN5IHdheVwiLCB4IC0gMTUwLCAzMDUpO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4IC0gMTYwLCAxNDAsIDI1MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgQyB0byBraWxsIHRoZSBwcmluY2Vzc1wiLCB4IC0gMTUwLCAxNjApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBWIHRvIHJldHVybiB0aGUgcHJpbmNlc3MgdG8gVHJvbWlkZVwiLCB4IC0gMTUwLCAxNzUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaW5jZXNzU2F2ZWQgPT09IHRydWUpe1xuICAgICAgdGhpcy5zdGFsbENvdW50ICs9IDE7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgICAgdGhpcy5zdGFsbENvdW50ICs9IDE7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiA0LCAyICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3godGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkFscmlnaHQgeW91IHdpbiBJJ2xsIGdvIGJhY2tcIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwid2l0aCB5b3UuXCIsIHRoaXMucHJpbmNlc3NYICsgNjAsIDMwNSk7XG4gICAgICBpZiAodGhpcy5zdGFsbENvdW50ID4gMTUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KHggLSAxNjAsIDI3MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHb29kIENob2ljZS5cIiwgeCAtIDE1MCwgMjkwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgIGlmICh0aGlzLnByaW5jZXNzRGVhZCA9PT0gdHJ1ZSl7XG4gICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgIHRoaXMuc3RhbGxDb3VudCArPSAzO1xuICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEqIDgsIDIgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgfVxuICB9XG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==