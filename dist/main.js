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
        this.ctx.fillText('Press C to start.', 260, 220);
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
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "white";
          this.ctx.fillText("After killing the princess you returned to Tromide. You told the", 170, 50);
          this.ctx.fillText("story of your adventure but the king didn't buy it. He thought", 170, 70);
          this.ctx.fillText("you made it up and were planning on killing her all along. You", 170, 90);
          this.ctx.fillText("have been exiled to an island where you have to fend for yourself.", 170, 110);
          this.ctx.fillText("You never expected this is what being a hero would feel like.", 170, 130);
          this.ctx.fillText("Your whole life all you wanted was to be left alone yet now you", 170, 150);
          this.ctx.fillText("would do anything to see another person. After spending weeks focused", 170, 170);
          this.ctx.fillText("on survival. You see a boat approach the island...", 170, 190);
          this.ctx.fillText("THE END.", 350, 220);
          this.ctx.fillText('Press C to start again.', 320, 240);
          this.ctx.fillText('Press V to start from castle scene again.', 270, 260);
        } else if (this.princessSaved === true) {
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "white";
          this.ctx.fillText("You brought the princess back to Tromide. The king couldn't believe what happened.", 120, 50);
          this.ctx.fillText("After seeing for himself that the princess was the one behind it all, he ordered ", 120, 70);
          this.ctx.fillText("to have her locked away in the dungeon. The people of Tromide hailed you a hero. ", 120, 90);
          this.ctx.fillText("Everywhere you went people called out your name and cheered for you.", 120, 110);
          this.ctx.fillText("Truthfully, you liked it better when no one knew who you were. A few weeks later", 120, 130);
          this.ctx.fillText("you couldn't get one question out of your head. What drove the princess to do all this.", 120, 150);
          this.ctx.fillText("You decided to go down to the dunguen to try and get some answers. When you got to the", 120, 170);
          this.ctx.fillText("cell the door was broken open and the cell was empty...", 120, 190);
          this.ctx.fillText("THE END.", 350, 220);
          this.ctx.fillText('Press C to start again.', 320, 240);
          this.ctx.fillText('Press V to start from castle scene again.', 270, 260);
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
          rand = Math.floor(Math.random() * 15);

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

          if (currentFrame % 30 === 0 && this.princessDisabled === false) {
            princessCol = 10;
            var facingLeft;

            if (x < this.princessX) {
              facingLeft = true;
              shift = 55;
            } else {
              facingLeft = false;
              shift = 0;
            }

            this.items.push({
              name: "fireball",
              width: 2,
              height: 2,
              y: 355,
              x: this.princessX + shift,
              left: facingLeft,
              shift: shift
            });
            this.fired += 1;
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
          } // if (this.items.length > 40) {
          //   this.items = this.items.slice(6, 41)
          // }


          this.drawItems(currentFrame);
        }

        if (this.knightDead === true) {
          this.disabled = false;
        }

        if (this.fired === 20) {
          this.princessDisabled = true;
          this.fired = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJzd29yZFN3aXBlIiwianVtcEhlaWdodCIsImluQWlyIiwiY3VyRnJhbWUiLCJmcmFtZUNvdW50Iiwic3JjWCIsInNyY1kiLCJ4IiwieSIsInNwZWVkIiwia2lsbCIsInNhdmUiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwicHJpbmNlc3NYIiwicHJpbmNlc3NEaXNhYmxlZCIsInNjcm9sbFJpZ2h0Iiwic2Nyb2xsTGVmdCIsImkiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJjb2xsaXNpb25DaGVjayIsImNvbGxpc2lvbk5hbWUiLCJmb3VuZEtleTEiLCJrZXlDb3VudCIsImZvdW5kS2V5MiIsImZvdW5kS2V5MyIsImZvdW5kS2V5NCIsImxpdmVzIiwicmVzZXQiLCJzdGFsbENvdW50IiwiZ2FtZU92ZXIiLCJwcmluY2Vzc0RlYWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJrZXlDb2RlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZm91bmRLZXlzIiwiZW50ZXIiLCJyZXN0YXJ0IiwicmVhY2hlZExldmVsNyIsInJlc3RhcnRGaW5hbCIsInN0YXJ0IiwicHJpbmNlc3NTYXZlZCIsInBsYXRmb3JtIiwidmVjdG9yWCIsInZlY3RvclkiLCJjZW50ZXJXaWR0aHMiLCJjZW50ZXJIZWlnaHRzIiwiY29sbGlzaW9uRGlyZWN0aW9uIiwiYWJzIiwibmFtZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY2xlYXIiLCJuZXdMZXZlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJudW1iZXIiLCJwbGF0Zm9ybVBpYyIsInBsYXRmb3JtV2lkdGgiLCJwbGF0Zm9ybUhlaWdodCIsImhlYXJ0IiwiZmlyc3RTY2VuZSIsInNlY29uZFNjZW5lIiwicHJpbmNlc3NTd29yZENvdW50Iiwia25pZ2h0RGVhZCIsImtleTEiLCJrZXkyIiwia2V5MyIsImtleTQiLCJrZXlzIiwiZ3JlZW5LbmlnaHQiLCJwcmluY2VzcyIsImdvbGRLbmlnaHQiLCJnb2xkS25pZ2h0WCIsIm1pc3NpbGUiLCJmaXJlZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImJhY2tncm91bmRQb3NpdGlvblgiLCJwdXNoIiwicmFkaXVzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImJsIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNoaWZ0Iiwic3Ryb2tlU3R5bGUiLCJzdHJva2VUZXh0IiwiY3VycmVudEZyYW1lIiwicHJpbmNlc3NDb2wiLCJwcmluY2Vzc1JvdyIsImtuaWdodENvbCIsImtuaWdodFJvdyIsImRyYXdLZXlDb3VudCIsImRyYXdIZWFydCIsImRyYXdUZXh0Qm94IiwiZHJhd1BsYXRmb3JtcyIsImRyYXdfa2V5MSIsImRyYXdfa2V5MiIsImRyYXdfa2V5MyIsImRyYXdfa2V5NCIsImNvbCIsInJhbmQiLCJyYW5kb20iLCJkcmF3SXRlbXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsK0JBQUQsQ0FBckI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CQyxHQUFuQixFQUF3QkMsTUFBeEIsRUFBZ0NDLGFBQWhDLEVBQStD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NUUsR0FBTCxDQUFTOEIsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixHQUF6QixFQUE4QixHQUE5QjtBQUNBLGVBQUs0QyxVQUFMLElBQW1CLENBQW5CO0FBQ0EsZUFBSzFFLEdBQUwsQ0FBU2tELFNBQVQsQ0FBbUIsS0FBSzRFLFFBQXhCLEVBQWtDLEtBQUksQ0FBdEMsRUFBeUMsSUFBSSxFQUE3QyxFQUFpRCxFQUFqRCxFQUFxRCxFQUFyRCxFQUF5RCxLQUFLcEUsU0FBOUQsRUFBeUUsR0FBekUsRUFBOEUsRUFBOUUsRUFBa0YsRUFBbEY7QUFDRDtBQUNEO0FBQ0Y7Ozs7OztBQUdEaUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEgsS0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuXG5jbGFzcyBHYW1lVmlldyB7XG4gIGNvbnN0cnVjdG9yKGxldmVsLCBjdHgsIGNhbnZhcywgYmFja2dyb3VuZEN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZEN0eDtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICB0aGlzLmZsaXBQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XG4gICAgdGhpcy5zd29yZFN3aXBlID0gMDtcbiAgICB0aGlzLmp1bXBIZWlnaHQgPSAwO1xuICAgIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICB0aGlzLmN1ckZyYW1lID0gMDtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSA2O1xuICAgIHRoaXMuc3JjWCA9IDA7XG4gICAgdGhpcy5zcmNZID0gMDtcbiAgICB0aGlzLnggPSAzMDA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3BlZWQgPSAxMjtcbiAgICB0aGlzLmtpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnNhdmUgPSBmYWxzZTtcbiAgICB0aGlzLnN1cGVyTW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDcwMCwgNDAwKTtcbiAgICB0aGlzLmxldmVsLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCl7XG4gICAgdGhpcy5kcmF3TWFpbkNoYXJhY3RlcigpO1xuICAgIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbiAgfVxuXG4gIGRyYXdNYWluQ2hhcmFjdGVyKCkge1xuICAgIGNvbnN0IHNwcml0ZVdpZHRoID0gMzUwO1xuICAgIGNvbnN0IHNwcml0ZUhlaWdodCA9IDQwNztcbiAgICBjb25zdCByb3dzID0gMTE7XG4gICAgY29uc3QgY29scyA9IDc7XG4gICAgdGhpcy50cmFja1JpZ2h0ID0gMTtcbiAgICB0aGlzLnRyYWNrTGVmdCA9IDE7XG4gICAgdGhpcy53aWR0aCA9IHNwcml0ZVdpZHRoIC8gY29scztcbiAgICB0aGlzLmhlaWdodCA9IHNwcml0ZUhlaWdodCAvIHJvd3M7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5vbGRGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnggPSAyMjA7XG4gICAgdGhpcy55ID0gMzEwO1xuICAgIHRoaXMuc3JjWD0gMDtcbiAgICB0aGlzLnNyY1k9IHRoaXMudHJhY2tSaWdodCAqIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgdGhpcy5zcGVlZFkgPSAxNTtcbiAgICB0aGlzLmNoYXJhY3Rlci5zcmMgPSBcImRpc3QvaW1hZ2VzL2FkdmVudHVyZXItU2hlZXQucG5nXCI7XG4gIH1cbiAgbWFpbkxvb3AodGltZSl7XG4gICAgdGhpcy51cGRhdGVGcmFtZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5mcmFtZUNvdW50LCB0aGlzLnRyYWNrTGVmdCwgdGhpcy50cmFja1JpZ2h0KVxuICAgIGlmICh0aGlzLmZhY2luZ0xlZnQgPT09IHRydWUpe1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICgtdGhpcy54IC0gKHRoaXMud2lkdGggKiAyKSksIHRoaXMueSwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XG4gICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7ICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jaGFyYWN0ZXIsIHRoaXMuc3JjWCwgdGhpcy5zcmNZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgqMiwgdGhpcy5oZWlnaHQqMilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdXBlck1vZGUgPT09IGZhbHNlKXtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSlcbiAgICAgIH0sIDEwMClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpXG4gICAgICB9LCA0MClcbiAgICB9XG4gIH1cblxuICB1cGRhdGVGcmFtZSh3aWR0aCwgaGVpZ2h0LCBmcmFtZUNvdW50LCB0cmFja0xlZnQsIHRyYWNrUmlnaHQpe1xuICAgIHRoaXMub2xkRnJhbWUgPSB0aGlzLm9sZEZyYW1lICsgMTtcbiAgICBcbiAgICB0aGlzLmN1ckZyYW1lID0gKHRoaXMuY3VyRnJhbWUgKyAxKSAlIGZyYW1lQ291bnQ7XG4gICAgdGhpcy5zdGlsbEZyYW1lID0gTWF0aC5mbG9vcigodGhpcy5vbGRGcmFtZSAlIDkpIC8gMylcbiAgICB0aGlzLnNyY1ggPSB0aGlzLmN1ckZyYW1lICogd2lkdGggKyB3aWR0aDtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIHdpZHRoICogMiwgaGVpZ2h0ICogMik7XG4gICAgdGhpcy5sZXZlbC51cGRhdGVTY2VuZSh0aGlzLngsIHRoaXMueSwgdGhpcy5vbGRGcmFtZSk7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5sZWZ0ICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IGZhbHNlICYmICh0aGlzLnggPiAtMjAgfHwgKHRoaXMubGV2ZWwucm9vbSAhPTEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcpKSl7XG4gICAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWRYO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5yaWdodCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSAmJiAodGhpcy54IDwgNjIwIHx8ICh0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gNikpICYmICh0aGlzLmxldmVsLnJvb20gICE9IDcgfHwgdGhpcy54IDwgKHRoaXMubGV2ZWwucHJpbmNlc3NYIC0gODYpIHx8IHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuaW5BaXIgPT09IHRydWUpe1xuICAgICAgdGhpcy5zcGVlZFkgPSAxNVxuICAgICAgaWYgKDMxMCAtIHRoaXMueSA+IHRoaXMuc3BlZWRZIHx8ICh0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gMjUgJiYgdGhpcy5sZXZlbC5yb29tICE9IDAgJiYgdGhpcy5zdXBlck1vZGUgPT09IGZhbHNlKSl7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMueSArPSAzMTAgLSB0aGlzLnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuanVtcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ICs9IDMwXG4gICAgICB0aGlzLnkgLT0gMzA7XG4gICAgICBpZiAodGhpcy5qdW1wSGVpZ2h0ID4gMTMwKXtcbiAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgICB0aGlzLmp1bXBIZWlnaHQgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54ID4gNjcwICYmIHRoaXMueSA8IDMyMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gNil7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gLTIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMueSA8IDMyMCAmJiB0aGlzLmxldmVsLnJvb20gIT0gMSAmJiB0aGlzLmxldmVsLnJvb20gIT0gNykge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICB0aGlzLnggPSA2NDA7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbC5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5wbGF0Zm9ybXNbaV0pXG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHRoaXMuc3BlZWRYID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAwO1xuICAgICAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMubGV2ZWwuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgY29sbGlzaW9uTmFtZSA9IHRoaXMuY29sbGlzaW9uQ2hlY2sodGhpcy5sZXZlbC5pdGVtc1tpXSlcbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTFcIil7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkxID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDYwMCwgMjQwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTJcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzODUsIDI1MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5MiA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5M1wiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXk0XCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjI1LCAzNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImZpcmViYWxsXCIgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgICB0aGlzLnggPSAyMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy55ID4gNTAwICl7XG4gICAgICB0aGlzLmxldmVsLmxpdmVzIC09IDE7XG4gICAgICB0aGlzLnkgPSAxMDtcbiAgICAgIHRoaXMueCA9IDIwO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxldmVsLmxpdmVzID09PSAwIHx8IHRoaXMubGV2ZWwuc3RhbGxDb3VudCA9PT0gNjApe1xuICAgICAgdGhpcy5sZXZlbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgIH1cblxuXG5cbiAgICBpZiAodGhpcy55ID09PSAzMTApIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gaGVpZ2h0ICogMjtcbiAgICBlbHNlIGlmICh0aGlzLmxlZnQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrTGVmdCAqIGhlaWdodDtcbiAgICBlbHNlIGlmICh0aGlzLnJpZ2h0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja1JpZ2h0ICogaGVpZ2h0O1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDsgXG4gICAgICB0aGlzLnNyY1kgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpe1xuICAgICAgdGhpcy5zcmNYID0gKCh0aGlzLnN0aWxsRnJhbWUgJSA0KSArICAzKSAqIHdpZHRoO1xuICAgICAgdGhpcy5zcmNZID0gNSAqIGhlaWdodFxuICAgIH1cblxuICAgIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmtpbGwgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPT09IGZhbHNlKXtcbiAgICAgIHRoaXMuc3JjWCA9ICh0aGlzLnN0aWxsRnJhbWUpICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA3ICogaGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuc3RpbGxGcmFtZSA9PT0gMil7XG4gICAgICAgIHRoaXMuc3dvcmRTd2lwZSArPSAxXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zd29yZFN3aXBlID09PSA4KXtcbiAgICAgICAgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLnNhdmUgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNyl7XG4gICAgICB0aGlzLnNyY1ggPSAyICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA4ICogaGVpZ2h0O1xuICAgIH1cbiAgfVxuICBcbiAgbW92ZUxlZnQoKXtcbiAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpe1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGp1bXAoKXtcbiAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRLZXlIYW5kbGVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLm1vdmVSaWdodCgpO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIiB8fCBlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5tb3ZlTGVmdCgpO1xuICB9XG4gIGlmICgoZS5rZXkgPT09IFwid1wiIHx8IGUua2V5Q29kZSA9PT0gMzgpICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiAodGhpcy55ID09PSAzMTAgfHwgdGhpcy5zcGVlZFkgPT09IDApICYmIHRoaXMueSA8PSAzMTApIHtcbiAgICB0aGlzLmp1bXAoKTtcbiAgfVxuXG4gIGlmIChlLmtleSA9PT0gXCJjXCIgJiYgdGhpcy5sZXZlbC5yb29tID09PSA2ICYmIHRoaXMueCA+IDI2MCAmJiB0aGlzLnggPCAzNTAgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMuZm91bmRLZXlzKCkgPT09IHRydWUpe1xuICAgIHRoaXMuZW50ZXIoKTtcbiAgfVxuXG4gIGlmIChlLmtleSA9PT0gXCJjXCIgJiYgdGhpcy5sZXZlbC5yb29tID09PSAyNSAmJiBlLnJlcGVhdCA9PT0gZmFsc2Upe1xuICAgIHRoaXMucmVzdGFydCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcInZcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDI1ICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiB0aGlzLmxldmVsLnJlYWNoZWRMZXZlbDcgPT09IHRydWUpIHtcbiAgICB0aGlzLnJlc3RhcnRGaW5hbCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDAgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDcgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMuc2F2ZSA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLmtpbGwgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcInZcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDcgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMua2lsbCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLnNhdmUgPSB0cnVlO1xuICAgIHRoaXMubGV2ZWwucHJpbmNlc3NTYXZlZCA9IHRydWU7XG4gIH1cblxuICBpZiAoKGUua2V5ID09PSBcInBcIikgJiYgdGhpcy5sZXZlbC5yb29tID09PSAxICYmIGUucmVwZWF0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zdXBlck1vZGUgPSAhdGhpcy5zdXBlck1vZGU7XG4gICAgfVxuXG59XG5cbiBrZXlVcEhhbmRsZXIoZSkge1xuICAgaWYgKGUua2V5ID09PSBcImRcIiB8fCBlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG4gICBlbHNlIGlmIChlLmtleSA9PT0gXCJhXCIgfHwgZS5rZXlDb2RlID09PSAzNykge1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICB9XG59XG5cbmZvdW5kS2V5cygpe1xuICByZXR1cm4gdGhpcy5sZXZlbC5mb3VuZEtleTEgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTIgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTMgJiYgdGhpcy5sZXZlbC5mb3VuZEtleTRcbn1cblxuY29sbGlzaW9uQ2hlY2socGxhdGZvcm0pe1xuICBjb25zdCB2ZWN0b3JYID0gKHRoaXMueCArICh0aGlzLndpZHRoKSkgLSAocGxhdGZvcm0ueCArIChwbGF0Zm9ybS53aWR0aCAvIDIpKTtcbiAgY29uc3QgdmVjdG9yWSA9ICh0aGlzLnkgKyAodGhpcy5oZWlnaHQpKSAtIChwbGF0Zm9ybS55ICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpKTtcblxuICBjb25zdCBjZW50ZXJXaWR0aHMgPSAodGhpcy53aWR0aC8yKSArIChwbGF0Zm9ybS53aWR0aCAvIDIpO1xuICBjb25zdCBjZW50ZXJIZWlnaHRzID0gKHRoaXMuaGVpZ2h0KSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKTtcblxuXG4gIGxldCBjb2xsaXNpb25EaXJlY3Rpb247XG5cbiAgaWYgKE1hdGguYWJzKHZlY3RvclgpIDwgY2VudGVyV2lkdGhzICYmIE1hdGguYWJzKHZlY3RvclkpIDwgY2VudGVySGVpZ2h0cykgXG4gIHtcblxuICAgIGlmIChwbGF0Zm9ybS5uYW1lKSByZXR1cm4gcGxhdGZvcm0ubmFtZTtcbiAgICBjb25zdCBvZmZzZXRYID0gY2VudGVyV2lkdGhzIC0gTWF0aC5hYnModmVjdG9yWCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGNlbnRlckhlaWdodHMgLSBNYXRoLmFicyh2ZWN0b3JZKTtcblxuICAgIGlmIChvZmZzZXRYIDwgb2Zmc2V0WSlcbiAgICAgICAgaWYgKHZlY3RvclggPiAwKXtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgICAgIHRoaXMueCArPSBvZmZzZXRYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgIHRoaXMueCAtPSBvZmZzZXRYO1xuICAgICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodmVjdG9yWSA+IDApe1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInRvcFwiO1xuICAgICAgICB0aGlzLnkgKz0gb2Zmc2V0WTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwiYm90dG9tXCI7XG4gICAgICAgIHRoaXMueSAtPSBvZmZzZXRZXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb2xsaXNpb25EaXJlY3Rpb247XG59XG5cbnNjcm9sbFJpZ2h0KCl7XG4gIGlmICh0aGlzLmxldmVsLnJvb20gIT09IDI1ICYmICh0aGlzLmxldmVsLnJvb20gIT09IDAgJiYgdGhpcy5sZXZlbC5yb29tICE9PSA3KSkgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnNjcm9sbExlZnQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMCAmJiB0aGlzLmxldmVsLnJvb20gIT09IDcpKSB0aGlzLmxldmVsLnJvb20gLT0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuZW50ZXIoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDFcbiAgdGhpcy54ID0gLTIwO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc3RhcnQoKXtcbiAgdGhpcy5sZXZlbC5yb29tICs9IDE7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xuICB0aGlzLnggPSAyMjA7XG4gIHRoaXMueSA9IDMxMDtcbn1cblxucmVzZXQoKXtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5nYW1lT3Zlcigpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwucm9vbSA9IDI1XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxucmVzdGFydCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoMCwgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLnN3b3JkU3dpcGUgPSAwO1xuICB0aGlzLmtpbGwgPSBmYWxzZTtcbiAgdGhpcy5zYXZlID0gZmFsc2U7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5yZXN0YXJ0RmluYWwoKXtcbiAgbGV0IG5ld0xldmVsID0gbmV3IExldmVsKDcsIHRoaXMuY3R4LCB0aGlzLmNhbnZhcyk7XG4gIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgdGhpcy5zd29yZFN3aXBlID0gMDtcbiAgdGhpcy5raWxsID0gZmFsc2U7XG4gIHRoaXMueCA9IDA7XG4gIHRoaXMuc2F2ZSA9IGZhbHNlO1xuICB0aGlzLmxldmVsLmtleUNvdW50ID0gNDtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiLCJjb25zdCBMZXZlbCA9IHJlcXVpcmUoXCIuL2xldmVsXCIpO1xuY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9nYW1lX3ZpZXdcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuIFxuICBsZXQgbGV2ZWwgPSBuZXcgTGV2ZWwoMCwgY3R4LCBjYW52YXMpO1xuICBuZXcgR2FtZVZpZXcobGV2ZWwsIGN0eCwgY2FudmFzKTtcbn0pOyIsImNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IobnVtYmVyLCBjdHgsIGNhbnZhcykge1xuICAgIHRoaXMucm9vbSA9IG51bWJlcjtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICB0aGlzLnBsYXRmb3JtcyA9IFtdO1xuICAgIHRoaXMucGxhdGZvcm1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnBsYXRmb3JtUGljLnNyYyA9IFwiZGlzdC9pbWFnZXMvcGxhdGZvcm0ucG5nXCI7XG4gICAgdGhpcy5wbGF0Zm9ybVdpZHRoID0gMTUwO1xuICAgIHRoaXMucGxhdGZvcm1IZWlnaHQgPSAyMDtcbiAgICB0aGlzLmhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5oZWFydC5zcmMgPSBcImRpc3QvaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xuICAgIHRoaXMubGl2ZXMgPSAzO1xuICAgIHRoaXMuc3RhbGxDb3VudCA9IDA7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkxID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTIgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MyA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXk0ID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLnNlY29uZFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLnByaW5jZXNzU3dvcmRDb3VudCA9IDA7XG4gICAgdGhpcy5rbmlnaHREZWFkID0gZmFsc2U7XG4gICAgdGhpcy5rZXkxID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkxLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkyLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXk0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXk0LnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXlzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlDb3VudCA9IDA7XG4gICAgdGhpcy5yZWFjaGVkTGV2ZWw3ID0gZmFsc2U7XG4gICAgdGhpcy5ncmVlbktuaWdodCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZ3JlZW5LbmlnaHQuc3JjID0gXCJkaXN0L2ltYWdlcy9NaXRoZXJhbEtuaWdodC5wbmdcIjtcbiAgICB0aGlzLnByaW5jZXNzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmluY2Vzcy5zcmMgPSBcImRpc3QvaW1hZ2VzL3ByaW5jZXNzLnBuZ1wiO1xuICAgIHRoaXMucHJpbmNlc3NYID0gNTAwO1xuICAgIHRoaXMuZ29sZEtuaWdodCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZ29sZEtuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL0dvbGRLbmlnaHQucG5nXCJcbiAgICB0aGlzLmdvbGRLbmlnaHRYID0gNzAwO1xuICAgIHRoaXMubWlzc2lsZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMubWlzc2lsZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3ByaW5jZXNzLnBuZ1wiO1xuICAgIHRoaXMuZmlyZWQgPSAwO1xuICAgIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJpbmNlc3NEZWFkID0gZmFsc2U7XG4gICAgdGhpcy5wcmluY2Vzc1NhdmVkID0gZmFsc2U7XG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImRpc3QvaW1hZ2VzL2xldmVsJHt0aGlzLnJvb219LnBuZ1wiYFxuICAgIHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHBsYXRmb3JtV2lkdGggPSB0aGlzLnBsYXRmb3JtV2lkdGg7XG4gICAgcGxhdGZvcm1IZWlnaHQgPSB0aGlzLnBsYXRmb3JtSGVpZ2h0XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCkge1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGNvbnRyb2wgSGVucnkgd2hvIGlzIGEgY29hbCBtaW5lciBmcm9tIHRoZSBraW5nZG9tIG9mIFRyb21pZGUuXCIsIDMwLCA1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIGhhcyBhbHdheXMga2VwdCBhIGxvdyBwcm9maWxlLCBkZXRlcm1pbmVkIHRvIGRvIGhpcyBqb2IgYW5kIHRoZW4gZW5qb3kgdGhlIHBlYWNlIGFuZCBxdWlldCBvZiBoaXMgaG9tZS5cIiwgMzAsIDcwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmV2ZXIgbWFkZSBhbiBlZmZvcnQgdG8gYmUga25vd24gb3IgbWFrZSBmcmllbmRzLiBObyBvbmUga25ldyBoaW0gcGVyc29uYWxseSBhbmQgaGUgbGlrZWQgaXQgdGhhdCB3YXkuXCIsIDMwLCA5MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRoZSBwcmluY2VzcyBoYXMgYmVlbiBraWRuYXBwZWQgYW5kIGFsbCBlZmZvcnRzIHRvIHNhdmUgaGVyIGhhdmUgZmFpbGVkLiBBbHRob3VnaCBIZW5yeSBoYXMgaGVhcmQgb2YgdGhlIHNpdHVhdGlvbixcIiwgMzAsIDExMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIml0IHdhc24ndCBzb21ldGhpbmcgaGUgd2FzIGludGVyZXN0ZWQgaW4gZ2V0dGluZyBpbnZvbHZlZCBpbi4gQXMgaGUgd2FzIHdhbGtpbmcgdG8gd29yayBoZSBzYXcgYSBmbGllciBvZmZlcmluZ1wiLCAzMCwgMTMwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYSBtYWpvciByZXdhcmQgdG8gYW55b25lIHRoYXQgY2FuIGhlbHAgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoZSBvbmUgdGhpbmcgSGVucnkgZG9lcyBjYXJlIGZvciBpcyBtb25leS5cIiwgMzAsIDE1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5lZWRzIHRvIGZpbmQgdGhlIDQga2V5cyB0byBnZXQgaW50byB0aGUgZW5lbXkgY2FzdGxlIGFuZCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhpcyBpcyB3aGVyZSBoaXMgc3RvcnkgYmVnaW5zLiBcIiwgMzAsIDE3MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFycm93IGtleXMgb3IgQSBhbmQgRCB0byBtb3ZlIGxlZnQvcmlnaHQgYW5kIFcgdG8ganVtcC4gTm90ZTogVGhlcmUgaXMgbm8gZG91YmxlIGp1bXAuXCIsIDMwLCAxOTAgKVxuICAgICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQuJywgMjYwLCAyMjApO1xuICAgIH1cbiAgICBpZiAodGhpcy5yb29tID09PSAxKSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItMjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMTEwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgODAwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAyMCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE3MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAzMCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkxXCIsXG4gICAgICAgICAgeDogNjAwLFxuICAgICAgICAgIHk6IDI0MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDEwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM4MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI2MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkyXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NjAsXG4gICAgICAgIHk6IDE0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMxNSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0NDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkzXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDYwMCxcbiAgICAgICAgeTogNzUsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1NTAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA3MCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA0NzUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTMwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE0MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNTUwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA1MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTRcIixcbiAgICAgICAgICB4OiAyMjUsXG4gICAgICAgICAgeTogMzQwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNikge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjIsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDcwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY3MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDcwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBcIjtcbiAgICAgIHRoaXMucmVhY2hlZExldmVsNyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgaWYgKHRoaXMucHJpbmNlc3NEZWFkID09PSB0cnVlKXtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkFmdGVyIGtpbGxpbmcgdGhlIHByaW5jZXNzIHlvdSByZXR1cm5lZCB0byBUcm9taWRlLiBZb3UgdG9sZCB0aGVcIiwgMTcwLCA1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwic3Rvcnkgb2YgeW91ciBhZHZlbnR1cmUgYnV0IHRoZSBraW5nIGRpZG4ndCBidXkgaXQuIEhlIHRob3VnaHRcIiwgMTcwLCA3MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwieW91IG1hZGUgaXQgdXAgYW5kIHdlcmUgcGxhbm5pbmcgb24ga2lsbGluZyBoZXIgYWxsIGFsb25nLiBZb3VcIiwgMTcwLCA5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiaGF2ZSBiZWVuIGV4aWxlZCB0byBhbiBpc2xhbmQgd2hlcmUgeW91IGhhdmUgdG8gZmVuZCBmb3IgeW91cnNlbGYuXCIsIDE3MCwgMTEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgbmV2ZXIgZXhwZWN0ZWQgdGhpcyBpcyB3aGF0IGJlaW5nIGEgaGVybyB3b3VsZCBmZWVsIGxpa2UuXCIsIDE3MCwgMTMwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3VyIHdob2xlIGxpZmUgYWxsIHlvdSB3YW50ZWQgd2FzIHRvIGJlIGxlZnQgYWxvbmUgeWV0IG5vdyB5b3VcIiwgMTcwLCAxNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIndvdWxkIGRvIGFueXRoaW5nIHRvIHNlZSBhbm90aGVyIHBlcnNvbi4gQWZ0ZXIgc3BlbmRpbmcgd2Vla3MgZm9jdXNlZFwiLCAxNzAsIDE3MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwib24gc3Vydml2YWwuIFlvdSBzZWUgYSBib2F0IGFwcHJvYWNoIHRoZSBpc2xhbmQuLi5cIiwgMTcwLCAxOTApXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVEhFIEVORC5cIiwgMzUwLCAyMjApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydCBhZ2Fpbi4nLCAzMjAsIDI0MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBWIHRvIHN0YXJ0IGZyb20gY2FzdGxlIHNjZW5lIGFnYWluLicsIDI3MCwgMjYwKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmluY2Vzc1NhdmVkID09PSB0cnVlKXtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBicm91Z2h0IHRoZSBwcmluY2VzcyBiYWNrIHRvIFRyb21pZGUuIFRoZSBraW5nIGNvdWxkbid0IGJlbGlldmUgd2hhdCBoYXBwZW5lZC5cIiwgMTIwLCA1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiQWZ0ZXIgc2VlaW5nIGZvciBoaW1zZWxmIHRoYXQgdGhlIHByaW5jZXNzIHdhcyB0aGUgb25lIGJlaGluZCBpdCBhbGwsIGhlIG9yZGVyZWQgXCIsIDEyMCwgNzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcInRvIGhhdmUgaGVyIGxvY2tlZCBhd2F5IGluIHRoZSBkdW5nZW9uLiBUaGUgcGVvcGxlIG9mIFRyb21pZGUgaGFpbGVkIHlvdSBhIGhlcm8uIFwiLCAxMjAsIDkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJFdmVyeXdoZXJlIHlvdSB3ZW50IHBlb3BsZSBjYWxsZWQgb3V0IHlvdXIgbmFtZSBhbmQgY2hlZXJlZCBmb3IgeW91LlwiLCAxMjAsIDExMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVHJ1dGhmdWxseSwgeW91IGxpa2VkIGl0IGJldHRlciB3aGVuIG5vIG9uZSBrbmV3IHdobyB5b3Ugd2VyZS4gQSBmZXcgd2Vla3MgbGF0ZXJcIiwgMTIwLCAxMzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcInlvdSBjb3VsZG4ndCBnZXQgb25lIHF1ZXN0aW9uIG91dCBvZiB5b3VyIGhlYWQuIFdoYXQgZHJvdmUgdGhlIHByaW5jZXNzIHRvIGRvIGFsbCB0aGlzLlwiLCAxMjAsIDE1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGRlY2lkZWQgdG8gZ28gZG93biB0byB0aGUgZHVuZ3VlbiB0byB0cnkgYW5kIGdldCBzb21lIGFuc3dlcnMuIFdoZW4geW91IGdvdCB0byB0aGVcIiwgMTIwLCAxNzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImNlbGwgdGhlIGRvb3Igd2FzIGJyb2tlbiBvcGVuIGFuZCB0aGUgY2VsbCB3YXMgZW1wdHkuLi5cIiwgMTIwLCAxOTApXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVEhFIEVORC5cIiwgMzUwLCAyMjApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydCBhZ2Fpbi4nLCAzMjAsIDI0MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBWIHRvIHN0YXJ0IGZyb20gY2FzdGxlIHNjZW5lIGFnYWluLicsIDI3MCwgMjYwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGZhaWxlZCB0byBzYXZlIHRoZSBQcmluY2Vzcy5cIiwgMTcwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQgYWdhaW4uJywgMjIwLCAxNTApO1xuICAgICAgaWYgKHRoaXMucmVhY2hlZExldmVsNyA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgViB0byBzdGFydCBmcm9tIGNhc3RsZSBzY2VuZSBhZ2Fpbi4nLCAxNDAsIDE4MCk7XG4gICAgICB9XG4gICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDI2KSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGZhaWxlZCB0byBzYXZlIHRoZSBQcmluY2Vzcy5cIiwgMTcwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQgYWdhaW4uJywgMjIwLCAxNTApO1xuICAgICAgaWYgKHRoaXMucmVhY2hlZExldmVsNyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgViB0byBzdGFydCBmcm9tIGNhc3RsZSBzY2VuZSBhZ2Fpbi4nLCAxNDAsIDE4MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd1RleHRCb3goeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKXtcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLmJsLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3UGxhdGZvcm1zKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wbGF0Zm9ybVBpYywgMCwgMCwgOTYsIDk2LCB0aGlzLnBsYXRmb3Jtc1tpXS54LCB0aGlzLnBsYXRmb3Jtc1tpXS55LCB0aGlzLnBsYXRmb3Jtc1tpXS53aWR0aCwgdGhpcy5wbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBkcmF3SXRlbXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5taXNzaWxlLCA4OTEgLCA4MiwgODEsIDgyLCB0aGlzLml0ZW1zW2ldLnggLSBzaGlmdCwgMjkwLCAxMDAsIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hlYXJ0KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaGVhcnQsIDAsIDAsIDEyNSwgMTI1LCA2NTAsIDEwLCAzMCwgMzApXG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMubGl2ZXMsIDYzMiwgMzIpO1xuICB9XG5cbiAgZHJhd0tleUNvdW50KCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDU2MCwgMTAsIDIwMCwgNTApXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5cywgMzIsIDAsIDMyLCAzMiwgNTkwLCAxMiwgMzAsIDMwKTtcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5rZXlDb3VudCwgNTcwLCAzMik7XG4gIH1cblxuICBkcmF3X2tleTEoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkxLCAwLCAwLCAzMiwgMzIsIDYwMCwgMjQwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkyKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MiwgMzIsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTMoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MywgNjQsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5NCwgOTYsIDAsIDMyLCAzMiwgMjI1LCAzNDAsIDMwLCAzMCk7XG4gIH1cblxuICB1cGRhdGVTY2VuZSh4LCB5LCBjdXJyZW50RnJhbWUpe1xuICAgIGxldCBwcmluY2Vzc0NvbDtcbiAgICBsZXQgcHJpbmNlc3NSb3cgPSAyO1xuICAgIGxldCBrbmlnaHRDb2w7XG4gICAgbGV0IGtuaWdodFJvdztcblxuICAgIGlmICh0aGlzLnJvb20gIT0gMCAmJiB0aGlzLnJvb20gIT0gMjUpe1xuICAgIHRoaXMuZHJhd0tleUNvdW50KCk7XG4gICAgdGhpcy5kcmF3SGVhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yb29tID09PSAxKXtcbiAgICAgIGlmICh4IDwgNDAwICYmIHggPiAyMDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDkwLCAyODAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnR29vZCBsdWNrIEhlbnJ5LCcsIDk1LCAzMDApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnSSBrbm93IHlvdSBjYW4nLCA5NSwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2RvIGl0IScsIDk1LCAzMjApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgfVxuXG4gICAgICBpZiAoeCA8IDgwMCAmJiB4ID4gNTAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGFyZW4ndCBnb2luZ1wiLCA0MTAsIDI4MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCd0byBsYXN0IDUgbWludXRlcycsIDQxMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJvdXQgdGhlcmUuXCIsIDQxMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg0MDAsIDI2MCwgMTAwLCA1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICAgIHRoaXMuZHJhd19rZXkxKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpIHtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSB0cnVlKXtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMzAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpIHtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTMoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSB0cnVlKXtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMwMCxcbiAgICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAzMDAsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1MDAsXG4gICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA1KXtcbiAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuZHJhd19rZXk0KCk7XG4gICAgICB9ICBcbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDYpe1xuICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTIgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICBjb2wgPSBjdXJyZW50RnJhbWUgJSAxMFxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzIwLCAzMTAsIDY1LCA2NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZ3JlZW5LbmlnaHQsIDMyICogY29sLCAwLCAzMiwgMzIsIC0zODUsIDMxMCwgNjUsIDY1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDIyMCwgMjcwLCAxMjAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgbXVzdCBoYXZlIGFsbCA0XCIsIDIzMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2tleXMgdG8gZW50ZXIgdGhlIGNhc3RsZS4nLCAyMzAsIDMwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjIwLCAyNzAsIDEyMCwgNTApO1xuICAgICAgICBpZiAoeCA+IDI2MCAmJiB4IDwgMzUwKXtcbiAgICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDI2MCwgMjcwLCAxNTAsIDI1LCA1KTtcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgQyB0byBlbnRlciB0aGUgY2FzdGxlLlwiLCAyNzAsIDI5MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDI2MCwgMjcwLCAxNTAsIDI1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNyl7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMzAwLCAxMDAwLCAxMDApO1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMuZ29sZEtuaWdodFgsIDMwMCwgODUsIDg1KVxuICAgICAgaWYgKHRoaXMuZmlyc3RTY2VuZSA9PT0gdHJ1ZSl7XG4gICAgICAgcHJpbmNlc3NDb2wgPSA3O1xuICAgICAgICBpZiAoY3VycmVudEZyYW1lICUgOCA9PT0gMCl7XG4gICAgICAgICBwcmluY2Vzc0NvbCA9IDg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHggPCAyNTAgJiYgdGhpcy5maXJzdFNjZW5lID09PSB0cnVlKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgzOTAsIDI5MCwgMTUwLCA0MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQbGVhc2Ugc2F2ZSBtZSEgVGhlXCIsIDQwMCAsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiZXZpbCBrbmlnaHQgaXMgY29taW5nIVwiLCA0MDAsIDMyMyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzkwLCAyOTAsIDE1MCwgNDApO1xuICAgICAgfVxuICAgICAga25pZ2h0Um93ID0gMTtcbiAgICAgIGlmICh4ID4gMjYwIHx8IHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgIGtuaWdodENvbCA9IChjdXJyZW50RnJhbWUpICUgMTA7XG4gICAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID4gMzUwKSB7XG4gICAgICAgICAgdGhpcy5nb2xkS25pZ2h0WCAtPSA1O1xuICAgICAgICAgIGtuaWdodFJvdyA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NTd29yZENvdW50ID4gMSkge1xuICAgICAgICAgIGtuaWdodFJvdyA9IDQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa25pZ2h0Um93ID09PSA0ICYmIGtuaWdodENvbCA9PT0gOSl7XG4gICAgICAgICAgdGhpcy5rbmlnaHREZWFkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUpe1xuICAgICAgICAgIGtuaWdodENvbCA9IDk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5nb2xkS25pZ2h0LCAzMiAqIGtuaWdodENvbCwga25pZ2h0Um93ICogMzIsIDMyLCAzMiwgLXRoaXMuZ29sZEtuaWdodFggLSA4NSwgMzAwLCA4NSwgODUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID4gMzYwICYmIHRoaXMuZ29sZEtuaWdodFggPCA2MDApXG4gICAgICB7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMTMwLCAyNTAsIDE4MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGV5IHlvdSBiaWcgZHVtbXkuIFlvdVwiLCAxNDAsIDI3Mik7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYmV0dGVyIGxldCB0aGUgcHJpbmNlc3MgZ28hXCIsIDE0MCwgMjg1KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPT09IDM1MCAmJiB0aGlzLnByaW5jZXNzWCAhPSAzOTAgJiYgdGhpcy5rbmlnaHREZWFkID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuZmlyc3RTY2VuZSA9IGZhbHNlO1xuICAgICAgICBwcmluY2Vzc0NvbCA9IGN1cnJlbnRGcmFtZSAlIDI7XG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzWCA+IDM5MCAmJiB0aGlzLmtuaWdodERlYWQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5wcmluY2Vzc1ggLT0gNTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMTMwLCAyNTAsIDE4MCwgNTUpO1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDIxMCwgMjMwLCAxNzAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRoYW5rIGdvZCB5b3UgYXJlIGhlcmUuXCIsIDIyMCwgMjUwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJFdmVyeW9uZSBoYXMgaXQgYWxsIHdyb25nLi4uXCIsIDIyMCwgMjY1KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJpbmNlc3NYID09PSAzOTApe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjEwLCAyMzAsIDE3MCwgODApO1xuICAgICAgICBpZiAodGhpcy5zZWNvbmRTY2VuZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSBNYXRoLmZsb29yKChjdXJyZW50RnJhbWUgJSAxNykgLyA0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IE1hdGguZmxvb3IoKGN1cnJlbnRGcmFtZSAlIDIwKSAvIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpbmNlc3NDb2wgPT09IDQpe1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gMDtcbiAgICAgICAgICB0aGlzLnByaW5jZXNzU3dvcmRDb3VudCArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NTd29yZENvdW50ID09PSAyKXtcbiAgICAgICAgICB0aGlzLnNlY29uZFNjZW5lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0NjAsIDI3MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIb3cgY3V0ZS4gWW91IHRob3VnaHQgSSB3YXNcIiwgNDcwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcInRoZSBvbmUgdGhhdCBuZWVkZWQgc2F2aW5nLlwiLCA0NzAsIDMwNSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5rbmlnaHREZWFkID09PSB0cnVlICYmIHRoaXMucHJpbmNlc3NYIDwgNjUwKXtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDQ2MCwgMjcwLCAxODAsIDYwKVxuICAgICAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE1KVxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlKXtcbiAgICAgICAgICByYW5kID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwcmluY2Vzc0NvbCA9IDlcbiAgICAgICAgaWYgKHJhbmQlMiA9PT0gMCAmJiB0aGlzLnByaW5jZXNzWCA8IDQ2MCl7XG4gICAgICAgICAgdGhpcy5wcmluY2Vzc1ggKz0gcmFuZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPiAwKXtcbiAgICAgICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSByYW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJpbmNlc3NYICs9IHJhbmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpe1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMTApLzUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoY3VycmVudEZyYW1lICUgMzAgPT09IDApICYmIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gZmFsc2Upe1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gMTBcbiAgICAgICAgICBsZXQgZmFjaW5nTGVmdFxuICAgICAgICAgIGlmICh4IDwgdGhpcy5wcmluY2Vzc1gpe1xuICAgICAgICAgICAgZmFjaW5nTGVmdCA9IHRydWU7XG4gICAgICAgICAgICBzaGlmdCA9IDU1XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNoaWZ0ID0gMFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogXCJmaXJlYmFsbFwiLFxuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICB5OiAzNTUsXG4gICAgICAgICAgICB4OiB0aGlzLnByaW5jZXNzWCArIHNoaWZ0LFxuICAgICAgICAgICAgbGVmdDogZmFjaW5nTGVmdCxcbiAgICAgICAgICAgIHNoaWZ0OiBzaGlmdFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5maXJlZCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzRGVhZCA9PT0gZmFsc2Upe1xuICAgICAgICBpZiAoeCA8IHRoaXMucHJpbmNlc3NYKXtcbiAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIC10aGlzLnByaW5jZXNzWCAtIDg1LCAzMDAsIDg1LCA4NSk7XG4gICAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB9XG4gICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLmxlZnQgPT09IHRydWUpe1xuICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnggLT0gMTA7XG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgdGhpcy5pdGVtc1tpXS54ICs9IDEwO1xuICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuaXRlbXMubGVuZ3RoID4gNDApIHtcbiAgICAgICAgLy8gICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5zbGljZSg2LCA0MSlcbiAgICAgICAgLy8gfVxuICAgICAgIHRoaXMuZHJhd0l0ZW1zKGN1cnJlbnRGcmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZpcmVkID09PSAyMCl7XG4gICAgICAgIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZmlyZWQgPSAwO1xuICAgICAgfVxuICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgTWF0aC5hYnModGhpcy5wcmluY2Vzc1ggLSB4KSA+IDcwKXtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3godGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxvb2tzIGxpa2UgSSB3aWxsIGhhdmUgdG8gZG9cIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhpcyB0aGUgaGFyZCB3YXlcIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMzA1KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IGZhbHNlICYmIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiBNYXRoLmFicyh0aGlzLnByaW5jZXNzWCAtIHgpIDwgNzApe1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsNTApO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4IC0gMTYwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTG9va3MgbGlrZSBJIHdpbGwgaGF2ZSB0byBkb1wiLCB4IC0gMTUwLCAyOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGlzIHRoZSBlYXN5IHdheVwiLCB4IC0gMTUwLCAzMDUpO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4IC0gMTYwLCAxNDAsIDI1MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgQyB0byBraWxsIHRoZSBwcmluY2Vzc1wiLCB4IC0gMTUwLCAxNjApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBWIHRvIHJldHVybiB0aGUgcHJpbmNlc3MgdG8gVHJvbWlkZVwiLCB4IC0gMTUwLCAxNzUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaW5jZXNzU2F2ZWQgPT09IHRydWUpe1xuICAgICAgdGhpcy5zdGFsbENvdW50ICs9IDE7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgICAgdGhpcy5zdGFsbENvdW50ICs9IDE7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiA0LCAyICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3godGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkFscmlnaHQgeW91IHdpbiBJJ2xsIGdvIGJhY2tcIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwid2l0aCB5b3UuXCIsIHRoaXMucHJpbmNlc3NYICsgNjAsIDMwNSk7XG4gICAgICBpZiAodGhpcy5zdGFsbENvdW50ID4gMTUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KHggLSAxNjAsIDI3MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHb29kIENob2ljZS5cIiwgeCAtIDE1MCwgMjkwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgIGlmICh0aGlzLnByaW5jZXNzRGVhZCA9PT0gdHJ1ZSl7XG4gICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgIHRoaXMuc3RhbGxDb3VudCArPSAzO1xuICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEqIDgsIDIgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgfVxuICB9XG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==