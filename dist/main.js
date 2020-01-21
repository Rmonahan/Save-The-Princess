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
        this.scrollRight();
        this.x = -20;
      }

      if (this.x < -20 && this.y < 320 && this.level.room != 1 && this.level.room != 7) {
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

      if (this.level.lives === 0 || this.level.stallCount === 60) {
        this.level.disabled = false;
        this.gameOver();
      }

      if (this.level.room === 0) {
        this.intro();
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

      if (e.key === "v" && this.level.room === 25 && e.repeat === false && this.level.reachedLevel7 === true) {
        this.restartFinal();
      }

      if (e.key === "c" && this.level.room === 0 && e.repeat === false) {
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
    key: "intro",
    value: function intro() {
      this.clear();
      this.level.room = 0;
      this.level.addScene();
    }
  }, {
    key: "restart",
    value: function restart() {
      var newLevel = new Level(0, this.ctx, this.canvas);
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
        this.ctx.font = 'bold 12pt Arial';
        this.ctx.fillStyle = "white";
        this.ctx.fillText("You control Henry who is a coal miner from the kingdom of Tromide. He has always", 20, 50);
        this.ctx.fillText("kept a low profile, determined to do his job and then enjoy the peace and quiet of his", 20, 70);
        this.ctx.fillText("home. No one knows him personally and he likes it that way. The princess of Tromide", 20, 90);
        this.ctx.fillText("has been kidnapped and all efforts to save her have failed. Although Henry heard of the", 20, 110);
        this.ctx.fillText("situation, it wasn't something he was interested in getting involved in. On his way to", 20, 130);
        this.ctx.fillText("work he saw a poster offering a major reward to anyone that can help save the princess.", 20, 150);
        this.ctx.fillText("The one thing Henry does care for is money. He needs to find the 4 keys to get into the ", 20, 170);
        this.ctx.fillText("enemy castle and save the princess. This is where his story begins...", 20, 190);
        this.ctx.fillText("Use the arrow keys or A,D,W to go left, right and jump. Note: There is no double jump.", 20, 220);
        this.ctx.font = '16pt Arial';
        this.ctx.fillText('Press C to start.', 260, 250);
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
          this.ctx.font = 'bold 12pt Arial';
          this.ctx.fillStyle = "white";
          this.ctx.fillText("After killing the princess you returned to Tromide. You told the story of your adventure", 20, 50);
          this.ctx.fillText("but the king didn't buy it. He thought you made it up and were planning on killing her", 20, 70);
          this.ctx.fillText("all along. You have been exiled to an island where you have to fend for yourself. You", 20, 90);
          this.ctx.fillText("never expected this is what being a hero would feel like. Your whole life all you wanted", 20, 110);
          this.ctx.fillText("was to be left alone yet now you would do anything to see another person. After", 20, 130);
          this.ctx.fillText("spending weeks focused on surival, you see see a boat approach the island...", 20, 150);
          this.ctx.fillText("THE END.", 300, 200);
          this.ctx.fillText('Press C to start again.', 250, 240);
          this.ctx.fillText('Press V to start from castle scene again.', 200, 260);
        } else if (this.princessSaved === true) {
          this.ctx.font = 'bold 12pt Arial';
          this.ctx.fillStyle = "white";
          this.ctx.fillText("You brought the princess back to Tromide. The king couldn't believe what happened.", 20, 50);
          this.ctx.fillText("After seeing for himself that the princess was the one behind it all, he ordered", 20, 70);
          this.ctx.fillText("to have her locked away in the dungeon. The people of Tromide hailed you a hero.", 20, 90);
          this.ctx.fillText("Everywhere you went people called out your name. Truthfully, you liked it better", 20, 110);
          this.ctx.fillText("when no one knew who you were. A few weeks later you couldn't get one question out", 20, 130);
          this.ctx.fillText("of your head. What drove the princess to do all this. You decided to go down to", 20, 150);
          this.ctx.fillText("the dunguen to try and get some answers. When you got to the cell the door was", 20, 170);
          this.ctx.fillText("broken open and the cell was empty...", 20, 190);
          this.ctx.fillText("THE END.", 300, 220);
          this.ctx.fillText('Press C to start again.', 260, 250);
          this.ctx.fillText('Press V to start from castle scene again.', 200, 270);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJzd29yZFN3aXBlIiwianVtcEhlaWdodCIsImluQWlyIiwiY3VyRnJhbWUiLCJmcmFtZUNvdW50Iiwic3JjWCIsInNyY1kiLCJ4IiwieSIsInNwZWVkIiwia2lsbCIsInNhdmUiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwicHJpbmNlc3NYIiwicHJpbmNlc3NEaXNhYmxlZCIsInNjcm9sbFJpZ2h0Iiwic2Nyb2xsTGVmdCIsImkiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJjb2xsaXNpb25DaGVjayIsImNvbGxpc2lvbk5hbWUiLCJmb3VuZEtleTEiLCJrZXlDb3VudCIsImZvdW5kS2V5MiIsImZvdW5kS2V5MyIsImZvdW5kS2V5NCIsImxpdmVzIiwicmVzZXQiLCJzdGFsbENvdW50IiwiZ2FtZU92ZXIiLCJpbnRybyIsInByaW5jZXNzRGVhZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZSIsImtleSIsImtleUNvZGUiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInJlcGVhdCIsImp1bXAiLCJmb3VuZEtleXMiLCJlbnRlciIsInJlc3RhcnQiLCJyZWFjaGVkTGV2ZWw3IiwicmVzdGFydEZpbmFsIiwic3RhcnQiLCJwcmluY2Vzc1NhdmVkIiwicGxhdGZvcm0iLCJ2ZWN0b3JYIiwidmVjdG9yWSIsImNlbnRlcldpZHRocyIsImNlbnRlckhlaWdodHMiLCJjb2xsaXNpb25EaXJlY3Rpb24iLCJhYnMiLCJuYW1lIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjbGVhciIsIm5ld0xldmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIm51bWJlciIsInBsYXRmb3JtUGljIiwicGxhdGZvcm1XaWR0aCIsInBsYXRmb3JtSGVpZ2h0IiwiaGVhcnQiLCJmaXJzdFNjZW5lIiwic2Vjb25kU2NlbmUiLCJwcmluY2Vzc1N3b3JkQ291bnQiLCJrbmlnaHREZWFkIiwia2V5MSIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleXMiLCJncmVlbktuaWdodCIsInByaW5jZXNzIiwiZ29sZEtuaWdodCIsImdvbGRLbmlnaHRYIiwibWlzc2lsZSIsImZpcmVkIiwiZGlzcGxheUZpcmVkIiwiZG9uZU9uY2UiLCJyZW1haW5pbmdGaXJlZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImJhY2tncm91bmRQb3NpdGlvblgiLCJwdXNoIiwicmFkaXVzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImJsIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNoaWZ0Iiwic3Ryb2tlU3R5bGUiLCJzdHJva2VUZXh0IiwiY3VycmVudEZyYW1lIiwicHJpbmNlc3NDb2wiLCJwcmluY2Vzc1JvdyIsImtuaWdodENvbCIsImtuaWdodFJvdyIsImRyYXdLZXlDb3VudCIsImRyYXdIZWFydCIsImRyYXdUZXh0Qm94IiwiZHJhd1BsYXRmb3JtcyIsImRyYXdfa2V5MSIsImRyYXdfa2V5MiIsImRyYXdfa2V5MyIsImRyYXdfa2V5NCIsImNvbCIsInJhbmQiLCJyYW5kb20iLCJyYW5kMiIsImRyYXdJdGVtcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQywrQkFBRCxDQUFyQjs7SUFFTUMsUTs7O0FB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Q0FBbUIsS0FBSzZFLFFBQXhCLEVBQWtDLEtBQUksQ0FBdEMsRUFBeUMsSUFBSSxFQUE3QyxFQUFpRCxFQUFqRCxFQUFxRCxFQUFyRCxFQUF5RCxLQUFLckUsU0FBOUQsRUFBeUUsR0FBekUsRUFBOEUsRUFBOUUsRUFBa0YsRUFBbEY7QUFDRDtBQUNEO0FBQ0Y7Ozs7OztBQUdEa0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCakgsS0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuXG5jbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgsIGNhbnZhcywgYmFja2dyb3VuZEN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZEN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmZsaXBQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5zd29yZFN3aXBlID0gMDtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAwO1xuICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMuc3JjWCA9IDA7XG4gICAgdGhpcy5zcmNZID0gMDtcbiAgICB0aGlzLnggPSAzMDA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3BlZWQgPSAxMjtcbiAgICB0aGlzLmtpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnNhdmUgPSBmYWxzZTtcbiAgICB0aGlzLnN1cGVyTW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDcwMCwgNDAwKTtcbiAgICB0aGlzLmxldmVsLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCl7XG4gICAgdGhpcy5kcmF3TWFpbkNoYXJhY3RlcigpO1xuICAgIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbiAgfVxuXG4gIGRyYXdNYWluQ2hhcmFjdGVyKCkge1xuICAgIGNvbnN0IHNwcml0ZVdpZHRoID0gMzUwO1xuICAgIGNvbnN0IHNwcml0ZUhlaWdodCA9IDQwNztcbiAgICBjb25zdCByb3dzID0gMTE7XG4gICAgY29uc3QgY29scyA9IDc7XG4gICAgdGhpcy50cmFja1JpZ2h0ID0gMTtcbiAgICB0aGlzLnRyYWNrTGVmdCA9IDE7XG4gICAgdGhpcy53aWR0aCA9IHNwcml0ZVdpZHRoIC8gY29scztcbiAgICB0aGlzLmhlaWdodCA9IHNwcml0ZUhlaWdodCAvIHJvd3M7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5vbGRGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnggPSAyMjA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3JjWD0gMDtcbiAgICB0aGlzLnNyY1k9IHRoaXMudHJhY2tSaWdodCAqIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgdGhpcy5zcGVlZFkgPSAxNTtcbiAgICB0aGlzLmNoYXJhY3Rlci5zcmMgPSBcImRpc3QvaW1hZ2VzL2FkdmVudHVyZXItU2hlZXQucG5nXCI7XG4gIH1cbiAgbWFpbkxvb3AodGltZSl7XG4gICAgdGhpcy51cGRhdGVGcmFtZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5mcmFtZUNvdW50LCB0aGlzLnRyYWNrTGVmdCwgdGhpcy50cmFja1JpZ2h0KVxuICAgIGlmICh0aGlzLmZhY2luZ0xlZnQgPT09IHRydWUpe1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICgtdGhpcy54IC0gKHRoaXMud2lkdGggKiAyKSksIHRoaXMueSwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7ICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgqMiwgdGhpcy5oZWlnaHQqMilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdXBlck1vZGUgPT09IGZhbHNlKXtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICAgIH0sIDEwMClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpXG4gICAgICB9LCA0MClcbiAgICB9XG4gIH1cblxuICB1cGRhdGVGcmFtZSh3aWR0aCwgaGVpZ2h0LCBmcmFtZUNvdW50LCB0cmFja0xlZnQsIHRyYWNrUmlnaHQpe1xuICAgIHRoaXMub2xkRnJhbWUgPSB0aGlzLm9sZEZyYW1lICsgMTtcbiAgICBcbiAgICB0aGlzLmN1ckZyYW1lID0gKHRoaXMuY3VyRnJhbWUgKyAxKSAlIGZyYW1lQ291bnQ7XG4gICAgdGhpcy5zdGlsbEZyYW1lID0gTWF0aC5mbG9vcigodGhpcy5vbGRGcmFtZSAlIDkpIC8gMylcbiAgICB0aGlzLnNyY1ggPSB0aGlzLmN1ckZyYW1lICogd2lkdGggKyB3aWR0aDtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoICogMiwgaGVpZ2h0ICogMik7XG4gICAgdGhpcy5sZXZlbC51cGRhdGVTY2VuZSh0aGlzLngsIHRoaXMueSwgdGhpcy5vbGRGcmFtZSk7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5sZWZ0ICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IGZhbHNlICYmICh0aGlzLnggPiAtMjAgfHwgKHRoaXMubGV2ZWwucm9vbSAhPTEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcpKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSAmJiAodGhpcy54IDwgNjIwIHx8ICh0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gNikpICYmICh0aGlzLmxldmVsLnJvb20gICE9IDcgfHwgdGhpcy54IDwgKHRoaXMubGV2ZWwucHJpbmNlc3NYIC0gODYpIHx8IHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuaW5BaXIgPT09IHRydWUpe1xuICAgICAgdGhpcy5zcGVlZFkgPSAxNVxuICAgICAgaWYgKDMxMCAtIHRoaXMueSA+IHRoaXMuc3BlZWRZIHx8ICh0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gMjUgJiYgdGhpcy5sZXZlbC5yb29tICE9IDAgJiYgdGhpcy5zdXBlck1vZGUgPT09IGZhbHNlKSl7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMueSArPSAzMTAgLSB0aGlzLnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuanVtcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ICs9IDMwXG4gICAgICB0aGlzLnkgLT0gMzA7XG4gICAgICBpZiAodGhpcy5qdW1wSGVpZ2h0ID4gMTMwKXtcbiAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgICB0aGlzLmp1bXBIZWlnaHQgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54ID4gNjcwICYmIHRoaXMueSA8IDMyMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gNil7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gLTIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMueSA8IDMyMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNykge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICB0aGlzLnggPSA2NDA7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbC5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5wbGF0Zm9ybXNbaV0pXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xuICAgICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubGV2ZWwuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgY29sbGlzaW9uTmFtZSA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5pdGVtc1tpXSlcbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTFcIil7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkxID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDYwMCwgMjQwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTJcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MiA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5M1wiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXk0XCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjI1LCAzNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImZpcmViYWxsXCIgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgICB0aGlzLnggPSAyMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gNTAwICl7XG4gICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICB0aGlzLnkgPSAxMDtcbiAgICAgIHRoaXMueCA9IDIwO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxldmVsLmxpdmVzID09PSAwIHx8IHRoaXMubGV2ZWwuc3RhbGxDb3VudCA9PT0gNjApe1xuICAgICAgdGhpcy5sZXZlbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxldmVsLnJvb20gPT09IDApe1xuICAgICAgdGhpcy5pbnRybygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnkgPT09IDMxMCkgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKSB0aGlzLnNyY1kgPSBoZWlnaHQgKiAyO1xuICAgIGVsc2UgaWYgKHRoaXMubGVmdCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tMZWZ0ICogaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMucmlnaHQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrUmlnaHQgKiBoZWlnaHQ7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNyY1ggPSAodGhpcy5zdGlsbEZyYW1lKSAqIHdpZHRoOyBcbiAgICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNyY1ggPSAoKHRoaXMuc3RpbGxGcmFtZSAlIDQpICsgIDMpICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA1ICogaGVpZ2h0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMua2lsbCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGVhZCA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDtcbiAgICAgIHRoaXMuc3JjWSA9IDcgKiBoZWlnaHQ7XG4gICAgICBpZiAodGhpcy5zdGlsbEZyYW1lID09PSAyKXtcbiAgICAgICAgdGhpcy5zd29yZFN3aXBlICs9IDFcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN3b3JkU3dpcGUgPT09IDgpe1xuICAgICAgICB0aGlzLmxldmVsLnByaW5jZXNzRGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMuc2F2ZSA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGVhZCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuc3JjWCA9IDIgKiB3aWR0aDtcbiAgICAgIHRoaXMuc3JjWSA9IDggKiBoZWlnaHQ7XG4gICAgfVxuICB9XG4gIFxuICBtb3ZlTGVmdCgpe1xuICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSB0cnVlO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCl7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICB9XG5cbiAganVtcCgpe1xuICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICB9XG5cbiAgYmluZEtleUhhbmRsZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIgfHwgZS5rZXlDb2RlID09PSAzOSkge1xuICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiIHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXlDb2RlID09PSAzOCkgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmICh0aGlzLnkgPT09IDMxMCB8fCB0aGlzLnNwZWVkWSA9PT0gMCkgJiYgdGhpcy55IDw9IDMxMCkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDYgJiYgdGhpcy54ID4gMjYwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5mb3VuZEtleXMoKSA9PT0gdHJ1ZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDI1ICYmIGUucmVwZWF0ID09PSBmYWxzZSl7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwidlwiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwucmVhY2hlZExldmVsNyA9PT0gdHJ1ZSkge1xuICAgIHRoaXMucmVzdGFydEZpbmFsKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNyAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5zYXZlID09PSBmYWxzZSkge1xuICAgIHRoaXMua2lsbCA9IHRydWU7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwidlwiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNyAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5raWxsID09PSBmYWxzZSkge1xuICAgIHRoaXMuc2F2ZSA9IHRydWU7XG4gICAgdGhpcy5sZXZlbC5wcmluY2Vzc1NhdmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwicFwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDEgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnN1cGVyTW9kZSA9ICF0aGlzLnN1cGVyTW9kZTtcbiAgICB9XG5cbn1cblxuIGtleVVwSGFuZGxlcihlKSB7XG4gICBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbiAgIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIiB8fCBlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbn1cblxuZm91bmRLZXlzKCl7XG4gIHJldHVybiB0aGlzLmxldmVsLmZvdW5kS2V5MSAmJiB0aGlzLmxldmVsLmZvdW5kS2V5MiAmJiB0aGlzLmxldmVsLmZvdW5kS2V5MyAmJiB0aGlzLmxldmVsLmZvdW5kS2V5NFxufVxuXG5jb2xsaXNpb25DaGVjayhwbGF0Zm9ybSl7XG4gIGNvbnN0IHZlY3RvclggPSAodGhpcy54ICsgKHRoaXMud2lkdGgpKSAtIChwbGF0Zm9ybS54ICsgKHBsYXRmb3JtLndpZHRoIC8gMikpO1xuICBjb25zdCB2ZWN0b3JZID0gKHRoaXMueSArICh0aGlzLmhlaWdodCkpIC0gKHBsYXRmb3JtLnkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMikpO1xuXG4gIGNvbnN0IGNlbnRlcldpZHRocyA9ICh0aGlzLndpZHRoLzIpICsgKHBsYXRmb3JtLndpZHRoIC8gMik7XG4gIGNvbnN0IGNlbnRlckhlaWdodHMgPSAodGhpcy5oZWlnaHQpICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpO1xuXG5cbiAgbGV0IGNvbGxpc2lvbkRpcmVjdGlvbjtcblxuICBpZiAoTWF0aC5hYnModmVjdG9yWCkgPCBjZW50ZXJXaWR0aHMgJiYgTWF0aC5hYnModmVjdG9yWSkgPCBjZW50ZXJIZWlnaHRzKSBcbiAge1xuXG4gICAgaWYgKHBsYXRmb3JtLm5hbWUpIHJldHVybiBwbGF0Zm9ybS5uYW1lO1xuICAgIGNvbnN0IG9mZnNldFggPSBjZW50ZXJXaWR0aHMgLSBNYXRoLmFicyh2ZWN0b3JYKTtcbiAgICBjb25zdCBvZmZzZXRZID0gY2VudGVySGVpZ2h0cyAtIE1hdGguYWJzKHZlY3RvclkpO1xuXG4gICAgaWYgKG9mZnNldFggPCBvZmZzZXRZKVxuICAgICAgICBpZiAodmVjdG9yWCA+IDApe1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgICAgICAgdGhpcy54ICs9IG9mZnNldFg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgICAgICAgdGhpcy54IC09IG9mZnNldFg7XG4gICAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh2ZWN0b3JZID4gMCl7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwidG9wXCI7XG4gICAgICAgIHRoaXMueSArPSBvZmZzZXRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgdGhpcy55IC09IG9mZnNldFlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbGxpc2lvbkRpcmVjdGlvbjtcbn1cblxuc2Nyb2xsUmlnaHQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMCAmJiB0aGlzLmxldmVsLnJvb20gIT09IDcpKSB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc2Nyb2xsTGVmdCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiAodGhpcy5sZXZlbC5yb29tICE9PSAwICYmIHRoaXMubGV2ZWwucm9vbSAhPT0gNykpIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLnggPSAtMjA7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zdGFydCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIHRoaXMueCA9IDIyMDtcbiAgdGhpcy55ID0gMzEwO1xufVxuXG5yZXNldCgpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbmdhbWVPdmVyKCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5yb29tID0gMjVcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5pbnRybygpIHtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLnJvb20gPSAwXG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxucmVzdGFydCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoMCwgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLnN3b3JkU3dpcGUgPSAwO1xuICB0aGlzLmtpbGwgPSBmYWxzZTtcbiAgdGhpcy5zYXZlID0gZmFsc2U7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5yZXN0YXJ0RmluYWwoKXtcbiAgbGV0IG5ld0xldmVsID0gbmV3IExldmVsKDcsIHRoaXMuY3R4LCB0aGlzLmNhbnZhcyk7XG4gIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgdGhpcy5zd29yZFN3aXBlID0gMDtcbiAgdGhpcy5raWxsID0gZmFsc2U7XG4gIHRoaXMueCA9IDA7XG4gIHRoaXMuc2F2ZSA9IGZhbHNlO1xuICB0aGlzLmxldmVsLmtleUNvdW50ID0gNDtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9nYW1lX3ZpZXdcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuIFxuICBsZXQgbGV2ZWwgPSBuZXcgTGV2ZWwoMCwgY3R4LCBjYW52YXMpO1xuICBuZXcgR2FtZVZpZXcobGV2ZWwsIGN0eCwgY2FudmFzKTtcbn0pOyIsImNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCBjdHgsIGNhbnZhcykge1xuICAgIHRoaXMucm9vbSA9IG51bWJlcjtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMucGxhdGZvcm1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBsYXRmb3JtUGljLnNyYyA9IFwiZGlzdC9pbWFnZXMvcGxhdGZvcm0ucG5nXCI7XG4gICAgdGhpcy5wbGF0Zm9ybVdpZHRoID0gMTUwO1xuICAgIHRoaXMucGxhdGZvcm1IZWlnaHQgPSAyMDtcbiAgICB0aGlzLmhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5oZWFydC5zcmMgPSBcImRpc3QvaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgIHRoaXMuc3RhbGxDb3VudCA9IDA7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkxID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTIgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MyA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXk0ID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLnNlY29uZFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLnByaW5jZXNzU3dvcmRDb3VudCA9IDA7XG4gICAgdGhpcy5rbmlnaHREZWFkID0gZmFsc2U7XG4gICAgdGhpcy5rZXkxID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkxLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkyLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXk0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXk0LnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXlzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlDb3VudCA9IDA7XG4gICAgdGhpcy5yZWFjaGVkTGV2ZWw3ID0gZmFsc2U7XG4gICAgdGhpcy5ncmVlbktuaWdodCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZ3JlZW5LbmlnaHQuc3JjID0gXCJkaXN0L2ltYWdlcy9NaXRoZXJhbEtuaWdodC5wbmdcIjtcbiAgICB0aGlzLnByaW5jZXNzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmluY2Vzcy5zcmMgPSBcImRpc3QvaW1hZ2VzL3ByaW5jZXNzLnBuZ1wiO1xuICAgIHRoaXMucHJpbmNlc3NYID0gNTAwO1xuICAgIHRoaXMuZ29sZEtuaWdodCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZ29sZEtuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL0dvbGRLbmlnaHQucG5nXCJcbiAgICB0aGlzLmdvbGRLbmlnaHRYID0gNzAwO1xuICAgIHRoaXMubWlzc2lsZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMubWlzc2lsZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3ByaW5jZXNzLnBuZ1wiO1xuICAgIHRoaXMuZmlyZWQgPSAwO1xuICAgIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJpbmNlc3NEZWFkID0gZmFsc2U7XG4gICAgdGhpcy5wcmluY2Vzc1NhdmVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5RmlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRvbmVPbmNlID0gZmFsc2U7XG4gICAgdGhpcy5yZW1haW5pbmdGaXJlZCA9IDIwO1xuICB9XG4gIGFkZFNjZW5lKCkge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCJkaXN0L2ltYWdlcy9sZXZlbCR7dGhpcy5yb29tfS5wbmdcImBcbiAgICBwbGF0Zm9ybXMgPSB0aGlzLnBsYXRmb3JtcztcbiAgICBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBwbGF0Zm9ybVdpZHRoID0gdGhpcy5wbGF0Zm9ybVdpZHRoO1xuICAgIHBsYXRmb3JtSGVpZ2h0ID0gdGhpcy5wbGF0Zm9ybUhlaWdodFxuICAgIGlmICh0aGlzLnJvb20gPT09IDApIHtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMnB0IEFyaWFsJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgY29udHJvbCBIZW5yeSB3aG8gaXMgYSBjb2FsIG1pbmVyIGZyb20gdGhlIGtpbmdkb20gb2YgVHJvbWlkZS4gSGUgaGFzIGFsd2F5c1wiLCAyMCwgNTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJrZXB0IGEgbG93IHByb2ZpbGUsIGRldGVybWluZWQgdG8gZG8gaGlzIGpvYiBhbmQgdGhlbiBlbmpveSB0aGUgcGVhY2UgYW5kIHF1aWV0IG9mIGhpc1wiLCAyMCwgNzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJob21lLiBObyBvbmUga25vd3MgaGltIHBlcnNvbmFsbHkgYW5kIGhlIGxpa2VzIGl0IHRoYXQgd2F5LiBUaGUgcHJpbmNlc3Mgb2YgVHJvbWlkZVwiLCAyMCwgOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJoYXMgYmVlbiBraWRuYXBwZWQgYW5kIGFsbCBlZmZvcnRzIHRvIHNhdmUgaGVyIGhhdmUgZmFpbGVkLiBBbHRob3VnaCBIZW5yeSBoZWFyZCBvZiB0aGVcIiwgMjAsIDExMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcInNpdHVhdGlvbiwgaXQgd2Fzbid0IHNvbWV0aGluZyBoZSB3YXMgaW50ZXJlc3RlZCBpbiBnZXR0aW5nIGludm9sdmVkIGluLiBPbiBoaXMgd2F5IHRvXCIsIDIwLCAxMzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ3b3JrIGhlIHNhdyBhIHBvc3RlciBvZmZlcmluZyBhIG1ham9yIHJld2FyZCB0byBhbnlvbmUgdGhhdCBjYW4gaGVscCBzYXZlIHRoZSBwcmluY2Vzcy5cIiwgMjAsIDE1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRoZSBvbmUgdGhpbmcgSGVucnkgZG9lcyBjYXJlIGZvciBpcyBtb25leS4gSGUgbmVlZHMgdG8gZmluZCB0aGUgNCBrZXlzIHRvIGdldCBpbnRvIHRoZSBcIiwgMjAsIDE3MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcImVuZW15IGNhc3RsZSBhbmQgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoaXMgaXMgd2hlcmUgaGlzIHN0b3J5IGJlZ2lucy4uLlwiLCAyMCwgMTkwIClcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVXNlIHRoZSBhcnJvdyBrZXlzIG9yIEEsRCxXIHRvIGdvIGxlZnQsIHJpZ2h0IGFuZCBqdW1wLiBOb3RlOiBUaGVyZSBpcyBubyBkb3VibGUganVtcC5cIiwgIDIwLCAyMjApO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IEFyaWFsJztcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHN0YXJ0LicsIDI2MCwgMjUwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSkge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjExMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDgwMCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMjAsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNzAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMzAsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MVwiLFxuICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICB5OiAyNDAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAzKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxMDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MlwiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjYwLFxuICAgICAgICB5OiAxNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMTUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjUwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTMgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5M1wiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2MDAsXG4gICAgICAgIHk6IDc1LFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTUwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTMwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgNzAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNDc1LFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUzMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDU1MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXk0XCIsXG4gICAgICAgICAgeDogMjI1LFxuICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDYpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIxMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDYwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIyLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA3MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NzAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA3MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDcpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwXCI7XG4gICAgICB0aGlzLnJlYWNoZWRMZXZlbDcgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDI1KXtcbiAgICAgIGlmICh0aGlzLnByaW5jZXNzRGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMnB0IEFyaWFsJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiQWZ0ZXIga2lsbGluZyB0aGUgcHJpbmNlc3MgeW91IHJldHVybmVkIHRvIFRyb21pZGUuIFlvdSB0b2xkIHRoZSBzdG9yeSBvZiB5b3VyIGFkdmVudHVyZVwiLCAyMCwgNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImJ1dCB0aGUga2luZyBkaWRuJ3QgYnV5IGl0LiBIZSB0aG91Z2h0IHlvdSBtYWRlIGl0IHVwIGFuZCB3ZXJlIHBsYW5uaW5nIG9uIGtpbGxpbmcgaGVyXCIsIDIwLCA3MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYWxsIGFsb25nLiBZb3UgaGF2ZSBiZWVuIGV4aWxlZCB0byBhbiBpc2xhbmQgd2hlcmUgeW91IGhhdmUgdG8gZmVuZCBmb3IgeW91cnNlbGYuIFlvdVwiLCAyMCwgOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIm5ldmVyIGV4cGVjdGVkIHRoaXMgaXMgd2hhdCBiZWluZyBhIGhlcm8gd291bGQgZmVlbCBsaWtlLiBZb3VyIHdob2xlIGxpZmUgYWxsIHlvdSB3YW50ZWRcIiwgMjAsIDExMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwid2FzIHRvIGJlIGxlZnQgYWxvbmUgeWV0IG5vdyB5b3Ugd291bGQgZG8gYW55dGhpbmcgdG8gc2VlIGFub3RoZXIgcGVyc29uLiBBZnRlclwiLCAyMCwgMTMwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJzcGVuZGluZyB3ZWVrcyBmb2N1c2VkIG9uIHN1cml2YWwsIHlvdSBzZWUgc2VlIGEgYm9hdCBhcHByb2FjaCB0aGUgaXNsYW5kLi4uXCIsIDIwLCAxNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRIRSBFTkQuXCIsIDMwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQgYWdhaW4uJywgMjUwLCAyNDApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgViB0byBzdGFydCBmcm9tIGNhc3RsZSBzY2VuZSBhZ2Fpbi4nLCAyMDAsIDI2MCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJpbmNlc3NTYXZlZCA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMnB0IEFyaWFsJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGJyb3VnaHQgdGhlIHByaW5jZXNzIGJhY2sgdG8gVHJvbWlkZS4gVGhlIGtpbmcgY291bGRuJ3QgYmVsaWV2ZSB3aGF0IGhhcHBlbmVkLlwiLCAyMCwgNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkFmdGVyIHNlZWluZyBmb3IgaGltc2VsZiB0aGF0IHRoZSBwcmluY2VzcyB3YXMgdGhlIG9uZSBiZWhpbmQgaXQgYWxsLCBoZSBvcmRlcmVkXCIsIDIwLCA3MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidG8gaGF2ZSBoZXIgbG9ja2VkIGF3YXkgaW4gdGhlIGR1bmdlb24uIFRoZSBwZW9wbGUgb2YgVHJvbWlkZSBoYWlsZWQgeW91IGEgaGVyby5cIiwgMjAsIDkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJFdmVyeXdoZXJlIHlvdSB3ZW50IHBlb3BsZSBjYWxsZWQgb3V0IHlvdXIgbmFtZS4gVHJ1dGhmdWxseSwgeW91IGxpa2VkIGl0IGJldHRlclwiLCAyMCwgMTEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ3aGVuIG5vIG9uZSBrbmV3IHdobyB5b3Ugd2VyZS4gQSBmZXcgd2Vla3MgbGF0ZXIgeW91IGNvdWxkbid0IGdldCBvbmUgcXVlc3Rpb24gb3V0XCIsIDIwLCAxMzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIm9mIHlvdXIgaGVhZC4gV2hhdCBkcm92ZSB0aGUgcHJpbmNlc3MgdG8gZG8gYWxsIHRoaXMuIFlvdSBkZWNpZGVkIHRvIGdvIGRvd24gdG9cIiwgMjAsIDE1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhlIGR1bmd1ZW4gdG8gdHJ5IGFuZCBnZXQgc29tZSBhbnN3ZXJzLiBXaGVuIHlvdSBnb3QgdG8gdGhlIGNlbGwgdGhlIGRvb3Igd2FzXCIsIDIwLCAxNzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImJyb2tlbiBvcGVuIGFuZCB0aGUgY2VsbCB3YXMgZW1wdHkuLi5cIiwgMjAsIDE5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVEhFIEVORC5cIiwgMzAwLCAyMjApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydCBhZ2Fpbi4nLCAyNjAsIDI1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBWIHRvIHN0YXJ0IGZyb20gY2FzdGxlIHNjZW5lIGFnYWluLicsIDIwMCwgMjcwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGZhaWxlZCB0byBzYXZlIHRoZSBQcmluY2Vzcy5cIiwgMTcwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQgYWdhaW4uJywgMjIwLCAxNTApO1xuICAgICAgaWYgKHRoaXMucmVhY2hlZExldmVsNyA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgViB0byBzdGFydCBmcm9tIGNhc3RsZSBzY2VuZSBhZ2Fpbi4nLCAxNDAsIDE4MCk7XG4gICAgICB9XG4gICAgIH1cbiAgICB9XG5cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjYpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgZmFpbGVkIHRvIHNhdmUgdGhlIFByaW5jZXNzLlwiLCAxNzAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydCBhZ2Fpbi4nLCAyMjAsIDE1MCk7XG4gICAgICBpZiAodGhpcy5yZWFjaGVkTGV2ZWw3ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBWIHRvIHN0YXJ0IGZyb20gY2FzdGxlIHNjZW5lIGFnYWluLicsIDE0MCwgMTgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3VGV4dEJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpe1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpdXMuYmwsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdQbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBsYXRmb3JtUGljLCAwLCAwLCA5NiwgOTYsIHRoaXMucGxhdGZvcm1zW2ldLngsIHRoaXMucGxhdGZvcm1zW2ldLnksIHRoaXMucGxhdGZvcm1zW2ldLndpZHRoLCB0aGlzLnBsYXRmb3Jtc1tpXS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdJdGVtcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLm1pc3NpbGUsIDg5MSAsIDgyLCA4MSwgODIsIHRoaXMuaXRlbXNbaV0ueCAtIHNoaWZ0LCAyOTAsIDEwMCwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBkcmF3SGVhcnQoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5oZWFydCwgMCwgMCwgMTI1LCAxMjUsIDY1MCwgMTAsIDMwLCAzMClcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5saXZlcywgNjMyLCAzMik7XG4gIH1cblxuICBkcmF3S2V5Q291bnQoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoNTYwLCAxMCwgMjAwLCA1MClcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXlzLCAzMiwgMCwgMzIsIDMyLCA1OTAsIDEyLCAzMCwgMzApO1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLmtleUNvdW50LCA1NzAsIDMyKTtcbiAgfVxuXG4gIGRyYXdfa2V5MSgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTEsIDAsIDAsIDMyLCAzMiwgNjAwLCAyNDAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTIoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkyLCAzMiwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5MygpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkzLCA2NCwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5NCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXk0LCA5NiwgMCwgMzIsIDMyLCAyMjUsIDM0MCwgMzAsIDMwKTtcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKHgsIHksIGN1cnJlbnRGcmFtZSl7XG4gICAgbGV0IHByaW5jZXNzQ29sO1xuICAgIGxldCBwcmluY2Vzc1JvdyA9IDI7XG4gICAgbGV0IGtuaWdodENvbDtcbiAgICBsZXQga25pZ2h0Um93O1xuXG4gICAgaWYgKHRoaXMucm9vbSAhPSAwICYmIHRoaXMucm9vbSAhPSAyNSl7XG4gICAgdGhpcy5kcmF3S2V5Q291bnQoKTtcbiAgICB0aGlzLmRyYXdIZWFydCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpe1xuICAgICAgaWYgKHggPCA0MDAgJiYgeCA+IDIwMCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goOTAsIDI4MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdHb29kIGx1Y2sgSGVucnksJywgOTUsIDMwMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdJIGtub3cgeW91IGNhbicsIDk1LCAzMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnZG8gaXQhJywgOTUsIDMyMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg5MCwgMjgwLCAxMDAsIDUwKTtcbiAgICB9XG5cbiAgICAgIGlmICh4IDwgODAwICYmIHggPiA1MDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQwMCwgMjYwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgYXJlbid0IGdvaW5nXCIsIDQxMCwgMjgwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ3RvIGxhc3QgNSBtaW51dGVzJywgNDEwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIm91dCB0aGVyZS5cIiwgNDEwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDQwMCwgMjYwLCAxMDAsIDUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5kcmF3X2tleTEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMykge1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDEzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCkge1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MygpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDMwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5kcmF3X2tleTQoKTtcbiAgICAgIH0gIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNil7XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTMgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIGNvbCA9IGN1cnJlbnRGcmFtZSAlIDEwXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzMjAsIDMxMCwgNjUsIDY1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ncmVlbktuaWdodCwgMzIgKiBjb2wsIDAsIDMyLCAzMiwgLTM4NSwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjIwLCAyNzAsIDEyMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBtdXN0IGhhdmUgYWxsIDRcIiwgMjMwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgna2V5cyB0byBlbnRlciB0aGUgY2FzdGxlLicsIDIzMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjAsIDI3MCwgMTIwLCA1MCk7XG4gICAgICAgIGlmICh4ID4gMjYwICYmIHggPCAzNTApe1xuICAgICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjYwLCAyNzAsIDE1MCwgMjUsIDUpO1xuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBDIHRvIGVudGVyIHRoZSBjYXN0bGUuXCIsIDI3MCwgMjkwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjYwLCAyNzAsIDE1MCwgMjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAzMDAsIDEwMDAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5nb2xkS25pZ2h0WCwgMzAwLCA4NSwgODUpXG4gICAgICBpZiAodGhpcy5maXJzdFNjZW5lID09PSB0cnVlKXtcbiAgICAgICBwcmluY2Vzc0NvbCA9IDc7XG4gICAgICAgIGlmIChjdXJyZW50RnJhbWUgJSA4ID09PSAwKXtcbiAgICAgICAgIHByaW5jZXNzQ29sID0gODtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoeCA8IDI1MCAmJiB0aGlzLmZpcnN0U2NlbmUgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDM5MCwgMjkwLCAxNTAsIDQwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBsZWFzZSBzYXZlIG1lISBUaGVcIiwgNDAwICwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJldmlsIGtuaWdodCBpcyBjb21pbmchXCIsIDQwMCwgMzIzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzOTAsIDI5MCwgMTUwLCA0MCk7XG4gICAgICB9XG4gICAgICBrbmlnaHRSb3cgPSAxO1xuICAgICAgaWYgKHggPiAyNjAgfHwgdGhpcy5rbmlnaHREZWFkID09PSB0cnVlKXtcbiAgICAgICAga25pZ2h0Q29sID0gKGN1cnJlbnRGcmFtZSkgJSAxMDtcbiAgICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNTApIHtcbiAgICAgICAgICB0aGlzLmdvbGRLbmlnaHRYIC09IDU7XG4gICAgICAgICAga25pZ2h0Um93ID0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPiAxKSB7XG4gICAgICAgICAga25pZ2h0Um93ID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrbmlnaHRSb3cgPT09IDQgJiYga25pZ2h0Q29sID09PSA5KXtcbiAgICAgICAgICB0aGlzLmtuaWdodERlYWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAga25pZ2h0Q29sID0gOTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmdvbGRLbmlnaHQsIDMyICoga25pZ2h0Q29sLCBrbmlnaHRSb3cgKiAzMiwgMzIsIDMyLCAtdGhpcy5nb2xkS25pZ2h0WCAtIDg1LCAzMDAsIDg1LCA4NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNjAgJiYgdGhpcy5nb2xkS25pZ2h0WCA8IDYwMClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgxMzAsIDI1MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZXkgeW91IGJpZyBkdW1teS4gWW91XCIsIDE0MCwgMjcyKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJiZXR0ZXIgbGV0IHRoZSBwcmluY2VzcyBnbyFcIiwgMTQwLCAyODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA9PT0gMzUwICYmIHRoaXMucHJpbmNlc3NYICE9IDM5MCAmJiB0aGlzLmtuaWdodERlYWQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5maXJzdFNjZW5lID0gZmFsc2U7XG4gICAgICAgIHByaW5jZXNzQ29sID0gY3VycmVudEZyYW1lICUgMjtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NYID4gMzkwICYmIHRoaXMua25pZ2h0RGVhZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSA1O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgxMzAsIDI1MCwgMTgwLCA1NSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjEwLCAyMzAsIDE3MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhhbmsgZ29kIHlvdSBhcmUgaGVyZS5cIiwgMjIwLCAyNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkV2ZXJ5b25lIGhhcyBpdCBhbGwgd3JvbmcuLi5cIiwgMjIwLCAyNjUpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPT09IDM5MCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMTAsIDIzMCwgMTcwLCA4MCk7XG4gICAgICAgIGlmICh0aGlzLnNlY29uZFNjZW5lID09PSB0cnVlKXtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IE1hdGguZmxvb3IoKGN1cnJlbnRGcmFtZSAlIDE3KSAvIDQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMjApIC8gMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmluY2Vzc0NvbCA9PT0gNCl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAwO1xuICAgICAgICAgIHRoaXMucHJpbmNlc3NTd29yZENvdW50ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPT09IDIpe1xuICAgICAgICAgIHRoaXMuc2Vjb25kU2NlbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQ2MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhvdyBjdXRlLiBZb3UgdGhvdWdodCBJIHdhc1wiLCA0NzAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhlIG9uZSB0aGF0IG5lZWRlZCBzYXZpbmcuXCIsIDQ3MCwgMzA1KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUgJiYgdGhpcy5wcmluY2Vzc1ggPCA2NTApe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNDYwLCAyNzAsIDE4MCwgNjApXG4gICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE1KVxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlKXtcbiAgICAgICAgICByYW5kID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwcmluY2Vzc0NvbCA9IDlcbiAgICAgICAgaWYgKHJhbmQlMiA9PT0gMCAmJiB0aGlzLnByaW5jZXNzWCA8IDQ2MCl7XG4gICAgICAgICAgdGhpcy5wcmluY2Vzc1ggKz0gcmFuZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPiAwKXtcbiAgICAgICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSByYW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJpbmNlc3NYICs9IHJhbmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpe1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMTApLzUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhbmQyID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCkpO1xuICAgICAgICBpZiAoKGN1cnJlbnRGcmFtZSAlIDMwID09PSAwIHx8IHJhbmQyID09PSAxNCkgJiYgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAxMFxuICAgICAgICAgIGxldCBmYWNpbmdMZWZ0XG4gICAgICAgICAgaWYgKHggPCB0aGlzLnByaW5jZXNzWCl7XG4gICAgICAgICAgICBmYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaWZ0ID0gNDVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmFjaW5nTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgc2hpZnQgPSAwXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBcImZpcmViYWxsXCIsXG4gICAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICB5OiAzNTUsXG4gICAgICAgICAgICB4OiB0aGlzLnByaW5jZXNzWCArIHNoaWZ0LFxuICAgICAgICAgICAgbGVmdDogZmFjaW5nTGVmdCxcbiAgICAgICAgICAgIHNoaWZ0OiBzaGlmdFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5maXJlZCArPSAxO1xuICAgICAgICAgIHRoaXMucmVtYWluaW5nRmlyZWQgLT0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IGZhbHNlKXtcbiAgICAgICAgaWYgKHggPCB0aGlzLnByaW5jZXNzWCl7XG4gICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCAtdGhpcy5wcmluY2Vzc1ggLSA4NSwgMzAwLCA4NSwgODUpO1xuICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5sZWZ0ID09PSB0cnVlKXtcbiAgICAgICAgICAgdGhpcy5pdGVtc1tpXS54IC09IDEwO1xuICAgICAgICAgfVxuICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgIHRoaXMuaXRlbXNbaV0ueCArPSAxMDtcbiAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgdGhpcy5kcmF3SXRlbXMoY3VycmVudEZyYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RmlyZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5maXJlZCA9PT0gMjApe1xuICAgICAgICB0aGlzLnByaW5jZXNzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc3BsYXlGaXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcmVkID0gMDtcbiAgICAgIH1cblxuICAgIGlmICh0aGlzLmRpc3BsYXlGaXJlZCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzEwLCA1MCwgMzAwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubWlzc2lsZSwgODkxLCA4MiwgODEsIDgyLCAzMjAsIDQwLCAxMDAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTRwdCBGYW50YXN5JztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5yZW1haW5pbmdGaXJlZCwzMjAsIDEwMClcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMTJwdCBGYW50YXN5JztcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwicmVtYWluaW5nXCIsIDM4MCwgMTAwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUgJiYgdGhpcy5maXJlZCA8IDMgJiYgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwyNDAsIDYwMCwgNTApO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4ICsgNTAsIDI0MCwgMjAwLCA1MCwgNSk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJJIGp1c3QgbmVlZCB0byBsYXN0IGxvbmcgZW5vdWdoXCIsIHggKyA2MCwgMjYwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiZm9yIGhlciBtYWdpYyB0byBydW4gb3V0LlwiLCB4ICsgNjAsIDI3MCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlyZWQgPT09IDMgJiYgdGhpcy5kb25lT25jZSA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMjQwLCA2MDAsIDUwKTtcbiAgICAgIHRoaXMuZG9uZU9uY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgTWF0aC5hYnModGhpcy5wcmluY2Vzc1ggLSB4KSA+IDcwKXtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3godGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxvb2tzIGxpa2UgSSB3aWxsIGhhdmUgdG8gZG9cIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhpcyB0aGUgaGFyZCB3YXlcIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMzA1KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IGZhbHNlICYmIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiBNYXRoLmFicyh0aGlzLnByaW5jZXNzWCAtIHgpIDwgNzApe1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsNTApO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4IC0gMTYwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTG9va3MgbGlrZSBJIHdpbGwgaGF2ZSB0byBkb1wiLCB4IC0gMTUwLCAyOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGlzIHRoZSBlYXN5IHdheVwiLCB4IC0gMTUwLCAzMDUpO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4IC0gMTYwLCAxNDAsIDI1MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgQyB0byBraWxsIHRoZSBwcmluY2Vzc1wiLCB4IC0gMTUwLCAxNjApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBWIHRvIHJldHVybiB0aGUgcHJpbmNlc3MgdG8gVHJvbWlkZVwiLCB4IC0gMTUwLCAxNzUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaW5jZXNzU2F2ZWQgPT09IHRydWUpe1xuICAgICAgdGhpcy5zdGFsbENvdW50ICs9IDE7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgICAgdGhpcy5zdGFsbENvdW50ICs9IDE7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiA0LCAyICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3godGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkFscmlnaHQgeW91IHdpbiBJJ2xsIGdvIGJhY2tcIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwid2l0aCB5b3UuXCIsIHRoaXMucHJpbmNlc3NYICsgNjAsIDMwNSk7XG4gICAgICBpZiAodGhpcy5zdGFsbENvdW50ID4gMTUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KHggLSAxNjAsIDI3MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHb29kIENob2ljZS5cIiwgeCAtIDE1MCwgMjkwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgIGlmICh0aGlzLnByaW5jZXNzRGVhZCA9PT0gdHJ1ZSl7XG4gICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgIHRoaXMuc3RhbGxDb3VudCArPSAzO1xuICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEqIDgsIDIgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgfVxuICB9XG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==