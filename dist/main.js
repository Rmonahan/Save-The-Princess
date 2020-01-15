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

      if (this.x > 670 && this.level.room != 7 && this.level.room != 6) {
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
        this.drawPlatforms();

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
        this.drawPlatforms();

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

          var rand2 = Math.floor(Math.random() * 50);

          if ((currentFrame % 30 === 0 || rand2 === 0) && this.princessDisabled === false) {
            this.fired += 1;
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

          if (this.items.length > 40) {
            this.items = this.items.slice(6, 41);
          }

          this.drawItems(currentFrame);
        }

        if (this.knightDead === true) {
          this.disabled = false;
        }

        if (this.fired === 30) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJzd29yZFN3aXBlIiwianVtcEhlaWdodCIsImluQWlyIiwiY3VyRnJhbWUiLCJmcmFtZUNvdW50Iiwic3JjWCIsInNyY1kiLCJ4IiwieSIsInNwZWVkIiwia2lsbCIsInNhdmUiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwicHJpbmNlc3NYIiwicHJpbmNlc3NEaXNhYmxlZCIsInNjcm9sbFJpZ2h0Iiwic2Nyb2xsTGVmdCIsImkiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJjb2xsaXNpb25DaGVjayIsImNvbGxpc2lvbk5hbWUiLCJmb3VuZEtleTEiLCJrZXlDb3VudCIsImZvdW5kS2V5MiIsImZvdW5kS2V5MyIsImZvdW5kS2V5NCIsImxpdmVzIiwicmVzZXQiLCJzdGFsbENvdW50IiwiZ2FtZU92ZXIiLCJwcmluY2Vzc0RlYWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJrZXlDb2RlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZm91bmRLZXlzIiwiZW50ZXIiLCJyZXN0YXJ0IiwicmVhY2hlZExldmVsNyIsInJlc3RhcnRGaW5hbCIsInN0YXJ0IiwicHJpbmNlc3NTYXZlZCIsInBsYXRmb3JtIiwidmVjdG9yWCIsInZlY3RvclkiLCJjZW50ZXJXaWR0aHMiLCJjZW50ZXJIZWlnaHRzIiwiY29sbGlzaW9uRGlyZWN0aW9uIiwiYWJzIiwibmFtZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY2xlYXIiLCJuZXdMZXZlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJudW1iZXIiLCJwbGF0Zm9ybVBpYyIsInBsYXRmb3JtV2lkdGgiLCJwbGF0Zm9ybUhlaWdodCIsImhlYXJ0IiwiZmlyc3RTY2VuZSIsInNlY29uZFNjZW5lIiwicHJpbmNlc3NTd29yZENvdW50Iiwia25pZ2h0RGVhZCIsImtleTEiLCJrZXkyIiwia2V5MyIsImtleTQiLCJrZXlzIiwiZ3JlZW5LbmlnaHQiLCJwcmluY2VzcyIsImdvbGRLbmlnaHQiLCJnb2xkS25pZ2h0WCIsIm1pc3NpbGUiLCJmaXJlZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiYmFja2dyb3VuZFBvc2l0aW9uWSIsImJhY2tncm91bmRQb3NpdGlvblgiLCJwdXNoIiwicmFkaXVzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImJsIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNoaWZ0Iiwic3Ryb2tlU3R5bGUiLCJzdHJva2VUZXh0IiwiY3VycmVudEZyYW1lIiwicHJpbmNlc3NDb2wiLCJwcmluY2Vzc1JvdyIsImtuaWdodENvbCIsImtuaWdodFJvdyIsImRyYXdLZXlDb3VudCIsImRyYXdIZWFydCIsImRyYXdUZXh0Qm94IiwiZHJhd1BsYXRmb3JtcyIsImRyYXdfa2V5MSIsImRyYXdfa2V5MiIsImRyYXdfa2V5MyIsImRyYXdfa2V5NCIsImNvbCIsInJhbmQiLCJyYW5kb20iLCJyYW5kMiIsInNsaWNlIiwiZHJhd0l0ZW1zIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtCQUFELENBQXJCOztJQUVNQyxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQkMsR0FBbkIsRUFBd0JDLE1BQXhCLEVB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QSxpQkFBS3JJLEdBQUwsQ0FBU3NJLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxpQkFBS3RJLEdBQUwsQ0FBU3VJLFFBQVQsQ0FBa0IsY0FBbEIsRUFBa0N0SCxDQUFDLEdBQUcsR0FBdEMsRUFBMkMsR0FBM0M7QUFDRDtBQUNGOztBQUVGLFlBQUksS0FBSzJELFlBQUwsS0FBc0IsSUFBMUIsRUFBK0I7QUFDN0IsZUFBSzVFLEdBQUwsQ0FBUzhCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUI7QUFDQSxlQUFLNEMsVUFBTCxJQUFtQixDQUFuQjtBQUNBLGVBQUsxRSxHQUFMLENBQVNrRCxTQUFULENBQW1CLEtBQUs0RSxRQUF4QixFQUFrQyxLQUFJLENBQXRDLEVBQXlDLElBQUksRUFBN0MsRUFBaUQsRUFBakQsRUFBcUQsRUFBckQsRUFBeUQsS0FBS3BFLFNBQTlELEVBQXlFLEdBQXpFLEVBQThFLEVBQTlFLEVBQWtGLEVBQWxGO0FBQ0Q7QUFDRDtBQUNGOzs7Ozs7QUFHRGlELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhILEtBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcblxuY2xhc3MgR2FtZVZpZXcge1xuICBjb25zdHJ1Y3RvcihsZXZlbCwgY3R4LCBjYW52YXMsIGJhY2tncm91bmRDdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMuYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDdHg7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMuYmluZEtleUhhbmRsZXJzKCk7XG4gICAgdGhpcy5mbGlwUGxheWVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3dvcmRTd2lwZSA9IDA7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5raWxsID0gZmFsc2U7XG4gICAgdGhpcy5zYXZlID0gZmFsc2U7XG4gICAgdGhpcy5zdXBlck1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgdGhpcy5sZXZlbC5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpe1xuICAgIHRoaXMuZHJhd01haW5DaGFyYWN0ZXIoKTtcbiAgICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIH1cblxuICBkcmF3TWFpbkNoYXJhY3RlcigpIHtcbiAgICBjb25zdCBzcHJpdGVXaWR0aCA9IDM1MDtcbiAgICBjb25zdCBzcHJpdGVIZWlnaHQgPSA0MDc7XG4gICAgY29uc3Qgcm93cyA9IDExO1xuICAgIGNvbnN0IGNvbHMgPSA3O1xuICAgIHRoaXMudHJhY2tSaWdodCA9IDE7XG4gICAgdGhpcy50cmFja0xlZnQgPSAxO1xuICAgIHRoaXMud2lkdGggPSBzcHJpdGVXaWR0aCAvIGNvbHM7XG4gICAgdGhpcy5oZWlnaHQgPSBzcHJpdGVIZWlnaHQgLyByb3dzO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMub2xkRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy54ID0gMjIwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNyY1g9IDA7XG4gICAgdGhpcy5zcmNZPSB0aGlzLnRyYWNrUmlnaHQgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgIHRoaXMuc3BlZWRZID0gMTU7XG4gICAgdGhpcy5jaGFyYWN0ZXIuc3JjID0gXCJkaXN0L2ltYWdlcy9hZHZlbnR1cmVyLVNoZWV0LnBuZ1wiO1xuICB9XG4gIG1haW5Mb29wKHRpbWUpe1xuICAgIHRoaXMudXBkYXRlRnJhbWUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuZnJhbWVDb3VudCwgdGhpcy50cmFja0xlZnQsIHRoaXMudHJhY2tSaWdodClcbiAgICBpZiAodGhpcy5mYWNpbmdMZWZ0ID09PSB0cnVlKXtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAoLXRoaXMueCAtICh0aGlzLndpZHRoICogMikpLCB0aGlzLnksIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpOyAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoKjIsIHRoaXMuaGVpZ2h0KjIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSl7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpXG4gICAgICB9LCAxMDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgICAgfSwgNDApXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRnJhbWUod2lkdGgsIGhlaWdodCwgZnJhbWVDb3VudCwgdHJhY2tMZWZ0LCB0cmFja1JpZ2h0KXtcbiAgICB0aGlzLm9sZEZyYW1lID0gdGhpcy5vbGRGcmFtZSArIDE7XG4gICAgXG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIHRoaXMuc3RpbGxGcmFtZSA9IE1hdGguZmxvb3IoKHRoaXMub2xkRnJhbWUgJSA5KSAvIDMpXG4gICAgdGhpcy5zcmNYID0gdGhpcy5jdXJGcmFtZSAqIHdpZHRoICsgd2lkdGg7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueCwgdGhpcy55LCB3aWR0aCAqIDIsIGhlaWdodCAqIDIpO1xuICAgIHRoaXMubGV2ZWwudXBkYXRlU2NlbmUodGhpcy54LCB0aGlzLnksIHRoaXMub2xkRnJhbWUpO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMubGVmdCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSAmJiAodGhpcy54ID4gLTIwIHx8ICh0aGlzLmxldmVsLnJvb20gIT0xICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2UgJiYgKHRoaXMueCA8IDYyMCB8fCAodGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDYpKSAmJiAodGhpcy5sZXZlbC5yb29tICAhPSA3IHx8IHRoaXMueCA8ICh0aGlzLmxldmVsLnByaW5jZXNzWCAtIDg2KSB8fCB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpKXtcbiAgICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKXtcbiAgICAgIHRoaXMuc3BlZWRZID0gMTVcbiAgICAgIGlmICgzMTAgLSB0aGlzLnkgPiB0aGlzLnNwZWVkWSB8fCAodGhpcy5sZXZlbC5yb29tICE9IDEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDI1ICYmIHRoaXMubGV2ZWwucm9vbSAhPSAwICYmIHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDY3MCAmJiB0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gNil7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gLTIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQoKTtcbiAgICAgIHRoaXMueCA9IDY0MDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsLnBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLnBsYXRmb3Jtc1tpXSlcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgfHwgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJib3R0b21cIikge1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XG4gICAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sZXZlbC5pdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBjb2xsaXNpb25OYW1lID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLml0ZW1zW2ldKVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MVwiKXtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTEgPSB0cnVlO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNjAwLCAyNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MlwiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkyID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkzXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzg1LCAyNTAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTRcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjUsIDM0MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5NCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwiZmlyZWJhbGxcIiAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMubGV2ZWwubGl2ZXMgLT0gMTtcbiAgICAgICAgdGhpcy55ID0gMTA7XG4gICAgICAgIHRoaXMueCA9IDIwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnkgPiA1MDAgKXtcbiAgICAgIHRoaXMubGV2ZWwubGl2ZXMgLT0gMTtcbiAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgdGhpcy54ID0gMjA7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGV2ZWwubGl2ZXMgPT09IDAgfHwgdGhpcy5sZXZlbC5zdGFsbENvdW50ID09PSA2MCl7XG4gICAgICB0aGlzLmxldmVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgfVxuXG5cblxuICAgIGlmICh0aGlzLnkgPT09IDMxMCkgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKSB0aGlzLnNyY1kgPSBoZWlnaHQgKiAyO1xuICAgIGVsc2UgaWYgKHRoaXMubGVmdCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tMZWZ0ICogaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMucmlnaHQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrUmlnaHQgKiBoZWlnaHQ7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNyY1ggPSAodGhpcy5zdGlsbEZyYW1lKSAqIHdpZHRoOyBcbiAgICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNyY1ggPSAoKHRoaXMuc3RpbGxGcmFtZSAlIDQpICsgIDMpICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA1ICogaGVpZ2h0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMua2lsbCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGVhZCA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDtcbiAgICAgIHRoaXMuc3JjWSA9IDcgKiBoZWlnaHQ7XG4gICAgICBpZiAodGhpcy5zdGlsbEZyYW1lID09PSAyKXtcbiAgICAgICAgdGhpcy5zd29yZFN3aXBlICs9IDFcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN3b3JkU3dpcGUgPT09IDgpe1xuICAgICAgICB0aGlzLmxldmVsLnByaW5jZXNzRGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMuc2F2ZSA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGVhZCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuc3JjWCA9IDIgKiB3aWR0aDtcbiAgICAgIHRoaXMuc3JjWSA9IDggKiBoZWlnaHQ7XG4gICAgfVxuICB9XG4gIFxuICBtb3ZlTGVmdCgpe1xuICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSB0cnVlO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCl7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICB9XG5cbiAganVtcCgpe1xuICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICB9XG5cbiAgYmluZEtleUhhbmRsZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIgfHwgZS5rZXlDb2RlID09PSAzOSkge1xuICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiIHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXlDb2RlID09PSAzOCkgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmICh0aGlzLnkgPT09IDMxMCB8fCB0aGlzLnNwZWVkWSA9PT0gMCkgJiYgdGhpcy55IDw9IDMxMCkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDYgJiYgdGhpcy54ID4gMjYwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5mb3VuZEtleXMoKSA9PT0gdHJ1ZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDI1ICYmIGUucmVwZWF0ID09PSBmYWxzZSl7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwidlwiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwucmVhY2hlZExldmVsNyA9PT0gdHJ1ZSkge1xuICAgIHRoaXMucmVzdGFydEZpbmFsKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNyAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5zYXZlID09PSBmYWxzZSkge1xuICAgIHRoaXMua2lsbCA9IHRydWU7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwidlwiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNyAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5raWxsID09PSBmYWxzZSkge1xuICAgIHRoaXMuc2F2ZSA9IHRydWU7XG4gICAgdGhpcy5sZXZlbC5wcmluY2Vzc1NhdmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwicFwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDEgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnN1cGVyTW9kZSA9ICF0aGlzLnN1cGVyTW9kZTtcbiAgICB9XG5cbn1cblxuIGtleVVwSGFuZGxlcihlKSB7XG4gICBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbiAgIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIiB8fCBlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbn1cblxuZm91bmRLZXlzKCl7XG4gIHJldHVybiB0aGlzLmxldmVsLmZvdW5kS2V5MSAmJiB0aGlzLmxldmVsLmZvdW5kS2V5MiAmJiB0aGlzLmxldmVsLmZvdW5kS2V5MyAmJiB0aGlzLmxldmVsLmZvdW5kS2V5NFxufVxuXG5jb2xsaXNpb25DaGVjayhwbGF0Zm9ybSl7XG4gIGNvbnN0IHZlY3RvclggPSAodGhpcy54ICsgKHRoaXMud2lkdGgpKSAtIChwbGF0Zm9ybS54ICsgKHBsYXRmb3JtLndpZHRoIC8gMikpO1xuICBjb25zdCB2ZWN0b3JZID0gKHRoaXMueSArICh0aGlzLmhlaWdodCkpIC0gKHBsYXRmb3JtLnkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMikpO1xuXG4gIGNvbnN0IGNlbnRlcldpZHRocyA9ICh0aGlzLndpZHRoLzIpICsgKHBsYXRmb3JtLndpZHRoIC8gMik7XG4gIGNvbnN0IGNlbnRlckhlaWdodHMgPSAodGhpcy5oZWlnaHQpICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpO1xuXG5cbiAgbGV0IGNvbGxpc2lvbkRpcmVjdGlvbjtcblxuICBpZiAoTWF0aC5hYnModmVjdG9yWCkgPCBjZW50ZXJXaWR0aHMgJiYgTWF0aC5hYnModmVjdG9yWSkgPCBjZW50ZXJIZWlnaHRzKSBcbiAge1xuXG4gICAgaWYgKHBsYXRmb3JtLm5hbWUpIHJldHVybiBwbGF0Zm9ybS5uYW1lO1xuICAgIGNvbnN0IG9mZnNldFggPSBjZW50ZXJXaWR0aHMgLSBNYXRoLmFicyh2ZWN0b3JYKTtcbiAgICBjb25zdCBvZmZzZXRZID0gY2VudGVySGVpZ2h0cyAtIE1hdGguYWJzKHZlY3RvclkpO1xuXG4gICAgaWYgKG9mZnNldFggPCBvZmZzZXRZKVxuICAgICAgICBpZiAodmVjdG9yWCA+IDApe1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgICAgICAgdGhpcy54ICs9IG9mZnNldFg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgICAgICAgdGhpcy54IC09IG9mZnNldFg7XG4gICAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh2ZWN0b3JZID4gMCl7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwidG9wXCI7XG4gICAgICAgIHRoaXMueSArPSBvZmZzZXRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgdGhpcy55IC09IG9mZnNldFlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbGxpc2lvbkRpcmVjdGlvbjtcbn1cblxuc2Nyb2xsUmlnaHQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMCAmJiB0aGlzLmxldmVsLnJvb20gIT09IDcpKSB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc2Nyb2xsTGVmdCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiAodGhpcy5sZXZlbC5yb29tICE9PSAwICYmIHRoaXMubGV2ZWwucm9vbSAhPT0gNykpIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLnggPSAtMjA7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zdGFydCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIHRoaXMueCA9IDIyMDtcbiAgdGhpcy55ID0gMzEwO1xufVxuXG5yZXNldCgpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbmdhbWVPdmVyKCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5yb29tID0gMjVcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5yZXN0YXJ0KCl7XG4gIGxldCBuZXdMZXZlbCA9IG5ldyBMZXZlbCgwLCB0aGlzLmN0eCwgdGhpcy5jYW52YXMpO1xuICB0aGlzLmxldmVsID0gbmV3TGV2ZWw7XG4gIHRoaXMuc3dvcmRTd2lwZSA9IDA7XG4gIHRoaXMua2lsbCA9IGZhbHNlO1xuICB0aGlzLnNhdmUgPSBmYWxzZTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnJlc3RhcnRGaW5hbCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoNywgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLnN3b3JkU3dpcGUgPSAwO1xuICB0aGlzLmtpbGwgPSBmYWxzZTtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy5zYXZlID0gZmFsc2U7XG4gIHRoaXMubGV2ZWwua2V5Q291bnQgPSA0O1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5jb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL2dhbWVfdmlld1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gXG4gIGxldCBsZXZlbCA9IG5ldyBMZXZlbCgwLCBjdHgsIGNhbnZhcyk7XG4gIG5ldyBHYW1lVmlldyhsZXZlbCwgY3R4LCBjYW52YXMpO1xufSk7IiwiY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIGN0eCwgY2FudmFzKSB7XG4gICAgdGhpcy5yb29tID0gbnVtYmVyO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5wbGF0Zm9ybVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucGxhdGZvcm1QaWMuc3JjID0gXCJkaXN0L2ltYWdlcy9wbGF0Zm9ybS5wbmdcIjtcbiAgICB0aGlzLnBsYXRmb3JtV2lkdGggPSAxNTA7XG4gICAgdGhpcy5wbGF0Zm9ybUhlaWdodCA9IDIwO1xuICAgIHRoaXMuaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmhlYXJ0LnNyYyA9IFwiZGlzdC9pbWFnZXMvaGVhcnQucG5nXCI7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5zdGFsbENvdW50ID0gMDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTEgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MiA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkzID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTQgPSBmYWxzZTtcbiAgICB0aGlzLmZpcnN0U2NlbmUgPSB0cnVlO1xuICAgIHRoaXMuc2Vjb25kU2NlbmUgPSB0cnVlO1xuICAgIHRoaXMucHJpbmNlc3NTd29yZENvdW50ID0gMDtcbiAgICB0aGlzLmtuaWdodERlYWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleTEgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTEuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTIgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTIuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleTQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleTQuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleXMgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmtleXMuc3JjID0gXCJkaXN0L2ltYWdlcy9LZXlJY29ucy5wbmdcIjtcbiAgICB0aGlzLmtleUNvdW50ID0gMDtcbiAgICB0aGlzLnJlYWNoZWRMZXZlbDcgPSBmYWxzZTtcbiAgICB0aGlzLmdyZWVuS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5ncmVlbktuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL01pdGhlcmFsS25pZ2h0LnBuZ1wiO1xuICAgIHRoaXMucHJpbmNlc3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnByaW5jZXNzLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5wcmluY2Vzc1ggPSA1MDA7XG4gICAgdGhpcy5nb2xkS25pZ2h0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5nb2xkS25pZ2h0LnNyYyA9IFwiZGlzdC9pbWFnZXMvR29sZEtuaWdodC5wbmdcIlxuICAgIHRoaXMuZ29sZEtuaWdodFggPSA3MDA7XG4gICAgdGhpcy5taXNzaWxlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5taXNzaWxlLnNyYyA9IFwiZGlzdC9pbWFnZXMvcHJpbmNlc3MucG5nXCI7XG4gICAgdGhpcy5maXJlZCA9IDA7XG4gICAgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcmluY2Vzc0RlYWQgPSBmYWxzZTtcbiAgICB0aGlzLnByaW5jZXNzU2F2ZWQgPSBmYWxzZTtcbiAgfVxuICBhZGRTY2VuZSgpIHtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiZGlzdC9pbWFnZXMvbGV2ZWwke3RoaXMucm9vbX0ucG5nXCJgXG4gICAgcGxhdGZvcm1zID0gdGhpcy5wbGF0Zm9ybXM7XG4gICAgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgcGxhdGZvcm1XaWR0aCA9IHRoaXMucGxhdGZvcm1XaWR0aDtcbiAgICBwbGF0Zm9ybUhlaWdodCA9IHRoaXMucGxhdGZvcm1IZWlnaHRcbiAgICBpZiAodGhpcy5yb29tID09PSAwKSB7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgY29udHJvbCBIZW5yeSB3aG8gaXMgYSBjb2FsIG1pbmVyIGZyb20gdGhlIGtpbmdkb20gb2YgVHJvbWlkZS5cIiwgMzAsIDUwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgaGFzIGFsd2F5cyBrZXB0IGEgbG93IHByb2ZpbGUsIGRldGVybWluZWQgdG8gZG8gaGlzIGpvYiBhbmQgdGhlbiBlbmpveSB0aGUgcGVhY2UgYW5kIHF1aWV0IG9mIGhpcyBob21lLlwiLCAzMCwgNzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBuZXZlciBtYWRlIGFuIGVmZm9ydCB0byBiZSBrbm93biBvciBtYWtlIGZyaWVuZHMuIE5vIG9uZSBrbmV3IGhpbSBwZXJzb25hbGx5IGFuZCBoZSBsaWtlZCBpdCB0aGF0IHdheS5cIiwgMzAsIDkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhlIHByaW5jZXNzIGhhcyBiZWVuIGtpZG5hcHBlZCBhbmQgYWxsIGVmZm9ydHMgdG8gc2F2ZSBoZXIgaGF2ZSBmYWlsZWQuIEFsdGhvdWdoIEhlbnJ5IGhhcyBoZWFyZCBvZiB0aGUgc2l0dWF0aW9uLFwiLCAzMCwgMTEwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiaXQgd2Fzbid0IHNvbWV0aGluZyBoZSB3YXMgaW50ZXJlc3RlZCBpbiBnZXR0aW5nIGludm9sdmVkIGluLiBBcyBoZSB3YXMgd2Fsa2luZyB0byB3b3JrIGhlIHNhdyBhIGZsaWVyIG9mZmVyaW5nXCIsIDMwLCAxMzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJhIG1ham9yIHJld2FyZCB0byBhbnlvbmUgdGhhdCBjYW4gaGVscCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhlIG9uZSB0aGluZyBIZW5yeSBkb2VzIGNhcmUgZm9yIGlzIG1vbmV5LlwiLCAzMCwgMTUwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmVlZHMgdG8gZmluZCB0aGUgNCBrZXlzIHRvIGdldCBpbnRvIHRoZSBlbmVteSBjYXN0bGUgYW5kIHNhdmUgdGhlIHByaW5jZXNzLiBUaGlzIGlzIHdoZXJlIGhpcyBzdG9yeSBiZWdpbnMuIFwiLCAzMCwgMTcwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVXNlIHRoZSBsZWZ0LCByaWdodCwgdXAgYXJyb3cga2V5cyBvciBBIGFuZCBEIHRvIG1vdmUgbGVmdC9yaWdodCBhbmQgVyB0byBqdW1wLiBOb3RlOiBUaGVyZSBpcyBubyBkb3VibGUganVtcC5cIiwgMzAsIDE5MCApXG4gICAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydC4nLCAyNjAsIDIyMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi0yMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIxMTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA4MDAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDIwLFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTcwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDMwLFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTFcIixcbiAgICAgICAgICB4OiA2MDAsXG4gICAgICAgICAgeTogMjQwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiA3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM0MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzgwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjYwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSlcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTJcIixcbiAgICAgICAgICB4OiAzODUsXG4gICAgICAgICAgeTogMjUwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY2MCxcbiAgICAgICAgeTogMTQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzE1LFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY1MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDQ0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA1MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSlcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTNcIixcbiAgICAgICAgICB4OiAzODUsXG4gICAgICAgICAgeTogMjUwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA1KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjAwLFxuICAgICAgICB5OiA3NSxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU1MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEzMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDcwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDQ3NSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1MzAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMTQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA1NTAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5NFwiLFxuICAgICAgICAgIHg6IDIyNSxcbiAgICAgICAgICB5OiAzNDAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA2KSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItNTBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyMixcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjcwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMFwiO1xuICAgICAgdGhpcy5yZWFjaGVkTGV2ZWw3ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyNSl7XG4gICAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiQWZ0ZXIga2lsbGluZyB0aGUgcHJpbmNlc3MgeW91IHJldHVybmVkIHRvIFRyb21pZGUuIFlvdSB0b2xkIHRoZVwiLCAxNzAsIDUwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJzdG9yeSBvZiB5b3VyIGFkdmVudHVyZSBidXQgdGhlIGtpbmcgZGlkbid0IGJ1eSBpdC4gSGUgdGhvdWdodFwiLCAxNzAsIDcwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ5b3UgbWFkZSBpdCB1cCBhbmQgd2VyZSBwbGFubmluZyBvbiBraWxsaW5nIGhlciBhbGwgYWxvbmcuIFlvdVwiLCAxNzAsIDkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJoYXZlIGJlZW4gZXhpbGVkIHRvIGFuIGlzbGFuZCB3aGVyZSB5b3UgaGF2ZSB0byBmZW5kIGZvciB5b3Vyc2VsZi5cIiwgMTcwLCAxMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBuZXZlciBleHBlY3RlZCB0aGlzIGlzIHdoYXQgYmVpbmcgYSBoZXJvIHdvdWxkIGZlZWwgbGlrZS5cIiwgMTcwLCAxMzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdXIgd2hvbGUgbGlmZSBhbGwgeW91IHdhbnRlZCB3YXMgdG8gYmUgbGVmdCBhbG9uZSB5ZXQgbm93IHlvdVwiLCAxNzAsIDE1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwid291bGQgZG8gYW55dGhpbmcgdG8gc2VlIGFub3RoZXIgcGVyc29uLiBBZnRlciBzcGVuZGluZyB3ZWVrcyBmb2N1c2VkXCIsIDE3MCwgMTcwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJvbiBzdXJ2aXZhbC4gWW91IHNlZSBhIGJvYXQgYXBwcm9hY2ggdGhlIGlzbGFuZC4uLlwiLCAxNzAsIDE5MClcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUSEUgRU5ELlwiLCAzNTAsIDIyMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHN0YXJ0IGFnYWluLicsIDMyMCwgMjQwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFYgdG8gc3RhcnQgZnJvbSBjYXN0bGUgc2NlbmUgYWdhaW4uJywgMjcwLCAyNjApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByaW5jZXNzU2F2ZWQgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGJyb3VnaHQgdGhlIHByaW5jZXNzIGJhY2sgdG8gVHJvbWlkZS4gVGhlIGtpbmcgY291bGRuJ3QgYmVsaWV2ZSB3aGF0IGhhcHBlbmVkLlwiLCAxMjAsIDUwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJBZnRlciBzZWVpbmcgZm9yIGhpbXNlbGYgdGhhdCB0aGUgcHJpbmNlc3Mgd2FzIHRoZSBvbmUgYmVoaW5kIGl0IGFsbCwgaGUgb3JkZXJlZCBcIiwgMTIwLCA3MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidG8gaGF2ZSBoZXIgbG9ja2VkIGF3YXkgaW4gdGhlIGR1bmdlb24uIFRoZSBwZW9wbGUgb2YgVHJvbWlkZSBoYWlsZWQgeW91IGEgaGVyby4gXCIsIDEyMCwgOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkV2ZXJ5d2hlcmUgeW91IHdlbnQgcGVvcGxlIGNhbGxlZCBvdXQgeW91ciBuYW1lIGFuZCBjaGVlcmVkIGZvciB5b3UuXCIsIDEyMCwgMTEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUcnV0aGZ1bGx5LCB5b3UgbGlrZWQgaXQgYmV0dGVyIHdoZW4gbm8gb25lIGtuZXcgd2hvIHlvdSB3ZXJlLiBBIGZldyB3ZWVrcyBsYXRlclwiLCAxMjAsIDEzMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwieW91IGNvdWxkbid0IGdldCBvbmUgcXVlc3Rpb24gb3V0IG9mIHlvdXIgaGVhZC4gV2hhdCBkcm92ZSB0aGUgcHJpbmNlc3MgdG8gZG8gYWxsIHRoaXMuXCIsIDEyMCwgMTUwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgZGVjaWRlZCB0byBnbyBkb3duIHRvIHRoZSBkdW5ndWVuIHRvIHRyeSBhbmQgZ2V0IHNvbWUgYW5zd2Vycy4gV2hlbiB5b3UgZ290IHRvIHRoZVwiLCAxMjAsIDE3MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiY2VsbCB0aGUgZG9vciB3YXMgYnJva2VuIG9wZW4gYW5kIHRoZSBjZWxsIHdhcyBlbXB0eS4uLlwiLCAxMjAsIDE5MClcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUSEUgRU5ELlwiLCAzNTAsIDIyMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHN0YXJ0IGFnYWluLicsIDMyMCwgMjQwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFYgdG8gc3RhcnQgZnJvbSBjYXN0bGUgc2NlbmUgYWdhaW4uJywgMjcwLCAyNjApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgZmFpbGVkIHRvIHNhdmUgdGhlIFByaW5jZXNzLlwiLCAxNzAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydCBhZ2Fpbi4nLCAyMjAsIDE1MCk7XG4gICAgICBpZiAodGhpcy5yZWFjaGVkTGV2ZWw3ID09PSB0cnVlKXtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBWIHRvIHN0YXJ0IGZyb20gY2FzdGxlIHNjZW5lIGFnYWluLicsIDE0MCwgMTgwKTtcbiAgICAgIH1cbiAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjYpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgZmFpbGVkIHRvIHNhdmUgdGhlIFByaW5jZXNzLlwiLCAxNzAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydCBhZ2Fpbi4nLCAyMjAsIDE1MCk7XG4gICAgICBpZiAodGhpcy5yZWFjaGVkTGV2ZWw3ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBWIHRvIHN0YXJ0IGZyb20gY2FzdGxlIHNjZW5lIGFnYWluLicsIDE0MCwgMTgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3VGV4dEJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpe1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaXVzLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpdXMuYmwsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdQbGF0Zm9ybXMoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF0Zm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBsYXRmb3JtUGljLCAwLCAwLCA5NiwgOTYsIHRoaXMucGxhdGZvcm1zW2ldLngsIHRoaXMucGxhdGZvcm1zW2ldLnksIHRoaXMucGxhdGZvcm1zW2ldLndpZHRoLCB0aGlzLnBsYXRmb3Jtc1tpXS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdJdGVtcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLm1pc3NpbGUsIDg5MSAsIDgyLCA4MSwgODIsIHRoaXMuaXRlbXNbaV0ueCAtIHNoaWZ0LCAyOTAsIDEwMCwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBkcmF3SGVhcnQoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5oZWFydCwgMCwgMCwgMTI1LCAxMjUsIDY1MCwgMTAsIDMwLCAzMClcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5saXZlcywgNjMyLCAzMik7XG4gIH1cblxuICBkcmF3S2V5Q291bnQoKXtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoNTYwLCAxMCwgMjAwLCA1MClcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXlzLCAzMiwgMCwgMzIsIDMyLCA1OTAsIDEyLCAzMCwgMzApO1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLmtleUNvdW50LCA1NzAsIDMyKTtcbiAgfVxuXG4gIGRyYXdfa2V5MSgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTEsIDAsIDAsIDMyLCAzMiwgNjAwLCAyNDAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTIoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkyLCAzMiwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5MygpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkzLCA2NCwgMCwgMzIsIDMyLCAzODUsIDI1MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5NCgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXk0LCA5NiwgMCwgMzIsIDMyLCAyMjUsIDM0MCwgMzAsIDMwKTtcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKHgsIHksIGN1cnJlbnRGcmFtZSl7XG4gICAgbGV0IHByaW5jZXNzQ29sO1xuICAgIGxldCBwcmluY2Vzc1JvdyA9IDI7XG4gICAgbGV0IGtuaWdodENvbDtcbiAgICBsZXQga25pZ2h0Um93O1xuXG4gICAgaWYgKHRoaXMucm9vbSAhPSAwICYmIHRoaXMucm9vbSAhPSAyNSl7XG4gICAgdGhpcy5kcmF3S2V5Q291bnQoKTtcbiAgICB0aGlzLmRyYXdIZWFydCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJvb20gPT09IDEpe1xuICAgICAgaWYgKHggPCA0MDAgJiYgeCA+IDIwMCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goOTAsIDI4MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdHb29kIGx1Y2sgSGVucnksJywgOTUsIDMwMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdJIGtub3cgeW91IGNhbicsIDk1LCAzMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnZG8gaXQhJywgOTUsIDMyMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg5MCwgMjgwLCAxMDAsIDUwKTtcbiAgICB9XG5cbiAgICAgIGlmICh4IDwgODAwICYmIHggPiA1MDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQwMCwgMjYwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJZb3UgYXJlbid0IGdvaW5nXCIsIDQxMCwgMjgwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ3RvIGxhc3QgNSBtaW51dGVzJywgNDEwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIm91dCB0aGVyZS5cIiwgNDEwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDQwMCwgMjYwLCAxMDAsIDUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5kcmF3X2tleTEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMykge1xuICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZHJhd19rZXkyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNCkge1xuICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTMgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZHJhd19rZXkzKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMDAsXG4gICAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMzAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5kcmF3X2tleTQoKTtcbiAgICAgIH0gIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNil7XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTMgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIGNvbCA9IGN1cnJlbnRGcmFtZSAlIDEwXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzMjAsIDMxMCwgNjUsIDY1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ncmVlbktuaWdodCwgMzIgKiBjb2wsIDAsIDMyLCAzMiwgLTM4NSwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjIwLCAyNzAsIDEyMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBtdXN0IGhhdmUgYWxsIDRcIiwgMjMwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgna2V5cyB0byBlbnRlciB0aGUgY2FzdGxlLicsIDIzMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjAsIDI3MCwgMTIwLCA1MCk7XG4gICAgICAgIGlmICh4ID4gMjYwICYmIHggPCAzNTApe1xuICAgICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjYwLCAyNzAsIDE1MCwgMjUsIDUpO1xuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBDIHRvIGVudGVyIHRoZSBjYXN0bGUuXCIsIDI3MCwgMjkwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjYwLCAyNzAsIDE1MCwgMjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAzMDAsIDEwMDAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5nb2xkS25pZ2h0WCwgMzAwLCA4NSwgODUpXG4gICAgICBpZiAodGhpcy5maXJzdFNjZW5lID09PSB0cnVlKXtcbiAgICAgICBwcmluY2Vzc0NvbCA9IDc7XG4gICAgICAgIGlmIChjdXJyZW50RnJhbWUgJSA4ID09PSAwKXtcbiAgICAgICAgIHByaW5jZXNzQ29sID0gODtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoeCA8IDI1MCAmJiB0aGlzLmZpcnN0U2NlbmUgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDM5MCwgMjkwLCAxNTAsIDQwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBsZWFzZSBzYXZlIG1lISBUaGVcIiwgNDAwICwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJldmlsIGtuaWdodCBpcyBjb21pbmchXCIsIDQwMCwgMzIzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzOTAsIDI5MCwgMTUwLCA0MCk7XG4gICAgICB9XG4gICAgICBrbmlnaHRSb3cgPSAxO1xuICAgICAgaWYgKHggPiAyNjAgfHwgdGhpcy5rbmlnaHREZWFkID09PSB0cnVlKXtcbiAgICAgICAga25pZ2h0Q29sID0gKGN1cnJlbnRGcmFtZSkgJSAxMDtcbiAgICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNTApIHtcbiAgICAgICAgICB0aGlzLmdvbGRLbmlnaHRYIC09IDU7XG4gICAgICAgICAga25pZ2h0Um93ID0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPiAxKSB7XG4gICAgICAgICAga25pZ2h0Um93ID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrbmlnaHRSb3cgPT09IDQgJiYga25pZ2h0Q29sID09PSA5KXtcbiAgICAgICAgICB0aGlzLmtuaWdodERlYWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAga25pZ2h0Q29sID0gOTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmdvbGRLbmlnaHQsIDMyICoga25pZ2h0Q29sLCBrbmlnaHRSb3cgKiAzMiwgMzIsIDMyLCAtdGhpcy5nb2xkS25pZ2h0WCAtIDg1LCAzMDAsIDg1LCA4NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNjAgJiYgdGhpcy5nb2xkS25pZ2h0WCA8IDYwMClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgxMzAsIDI1MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZXkgeW91IGJpZyBkdW1teS4gWW91XCIsIDE0MCwgMjcyKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJiZXR0ZXIgbGV0IHRoZSBwcmluY2VzcyBnbyFcIiwgMTQwLCAyODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA9PT0gMzUwICYmIHRoaXMucHJpbmNlc3NYICE9IDM5MCAmJiB0aGlzLmtuaWdodERlYWQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5maXJzdFNjZW5lID0gZmFsc2U7XG4gICAgICAgIHByaW5jZXNzQ29sID0gY3VycmVudEZyYW1lICUgMjtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NYID4gMzkwICYmIHRoaXMua25pZ2h0RGVhZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSA1O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgxMzAsIDI1MCwgMTgwLCA1NSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjEwLCAyMzAsIDE3MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhhbmsgZ29kIHlvdSBhcmUgaGVyZS5cIiwgMjIwLCAyNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkV2ZXJ5b25lIGhhcyBpdCBhbGwgd3JvbmcuLi5cIiwgMjIwLCAyNjUpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPT09IDM5MCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMTAsIDIzMCwgMTcwLCA4MCk7XG4gICAgICAgIGlmICh0aGlzLnNlY29uZFNjZW5lID09PSB0cnVlKXtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IE1hdGguZmxvb3IoKGN1cnJlbnRGcmFtZSAlIDE3KSAvIDQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMjApIC8gMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmluY2Vzc0NvbCA9PT0gNCl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAwO1xuICAgICAgICAgIHRoaXMucHJpbmNlc3NTd29yZENvdW50ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPT09IDIpe1xuICAgICAgICAgIHRoaXMuc2Vjb25kU2NlbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQ2MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhvdyBjdXRlLiBZb3UgdGhvdWdodCBJIHdhc1wiLCA0NzAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhlIG9uZSB0aGF0IG5lZWRlZCBzYXZpbmcuXCIsIDQ3MCwgMzA1KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUgJiYgdGhpcy5wcmluY2Vzc1ggPCA2NTApe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNDYwLCAyNzAsIDE4MCwgNjApXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTUpXG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpe1xuICAgICAgICAgIHJhbmQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHByaW5jZXNzQ29sID0gOVxuICAgICAgICBpZiAocmFuZCUyID09PSAwICYmIHRoaXMucHJpbmNlc3NYIDwgNDYwKXtcbiAgICAgICAgICB0aGlzLnByaW5jZXNzWCArPSByYW5kO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnByaW5jZXNzWCA+IDApe1xuICAgICAgICAgICAgIHRoaXMucHJpbmNlc3NYIC09IHJhbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmluY2Vzc1ggKz0gcmFuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSBNYXRoLmZsb29yKChjdXJyZW50RnJhbWUgJSAxMCkvNSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbmQyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjUwKTtcbiAgICAgICAgaWYgKChjdXJyZW50RnJhbWUgJSAzMCA9PT0gMCB8fCByYW5kMiA9PT0gMCkgJiYgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5maXJlZCArPSAxO1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gMTBcbiAgICAgICAgICBsZXQgZmFjaW5nTGVmdFxuICAgICAgICAgIGlmICh4IDwgdGhpcy5wcmluY2Vzc1gpe1xuICAgICAgICAgICAgZmFjaW5nTGVmdCA9IHRydWU7XG4gICAgICAgICAgICBzaGlmdCA9IDU1XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNoaWZ0ID0gMFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogXCJmaXJlYmFsbFwiLFxuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICB5OiAzNTUsXG4gICAgICAgICAgICB4OiB0aGlzLnByaW5jZXNzWCArIHNoaWZ0LFxuICAgICAgICAgICAgbGVmdDogZmFjaW5nTGVmdCxcbiAgICAgICAgICAgIHNoaWZ0OiBzaGlmdFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NEZWFkID09PSBmYWxzZSl7XG4gICAgICAgIGlmICh4IDwgdGhpcy5wcmluY2Vzc1gpe1xuICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgLXRoaXMucHJpbmNlc3NYIC0gODUsIDMwMCwgODUsIDg1KTtcbiAgICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIH1cbiAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0ubGVmdCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgIHRoaXMuaXRlbXNbaV0ueCAtPSAxMDtcbiAgICAgICAgIH1cbiAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnggKz0gMTA7XG4gICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiA0MCkge1xuICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKDYsIDQxKVxuICAgICAgICB9XG4gICAgICAgdGhpcy5kcmF3SXRlbXMoY3VycmVudEZyYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgIGlmICh0aGlzLmZpcmVkID09PSAzMCl7XG4gICAgICB0aGlzLnByaW5jZXNzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5maXJlZCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgTWF0aC5hYnModGhpcy5wcmluY2Vzc1ggLSB4KSA+IDcwKXtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3godGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxvb2tzIGxpa2UgSSB3aWxsIGhhdmUgdG8gZG9cIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhpcyB0aGUgaGFyZCB3YXlcIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMzA1KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IGZhbHNlICYmIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiBNYXRoLmFicyh0aGlzLnByaW5jZXNzWCAtIHgpIDwgNzApe1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsNTApO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4IC0gMTYwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTG9va3MgbGlrZSBJIHdpbGwgaGF2ZSB0byBkb1wiLCB4IC0gMTUwLCAyOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGlzIHRoZSBlYXN5IHdheVwiLCB4IC0gMTUwLCAzMDUpO1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh4IC0gMTYwLCAxNDAsIDI1MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgQyB0byBraWxsIHRoZSBwcmluY2Vzc1wiLCB4IC0gMTUwLCAxNjApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBWIHRvIHJldHVybiB0aGUgcHJpbmNlc3MgdG8gVHJvbWlkZVwiLCB4IC0gMTUwLCAxNzUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaW5jZXNzU2F2ZWQgPT09IHRydWUpe1xuICAgICAgdGhpcy5zdGFsbENvdW50ICs9IDE7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgICAgdGhpcy5zdGFsbENvdW50ICs9IDE7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiA0LCAyICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3godGhpcy5wcmluY2Vzc1ggKyA1MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkFscmlnaHQgeW91IHdpbiBJJ2xsIGdvIGJhY2tcIiwgdGhpcy5wcmluY2Vzc1ggKyA2MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwid2l0aCB5b3UuXCIsIHRoaXMucHJpbmNlc3NYICsgNjAsIDMwNSk7XG4gICAgICBpZiAodGhpcy5zdGFsbENvdW50ID4gMTUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KHggLSAxNjAsIDI3MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHb29kIENob2ljZS5cIiwgeCAtIDE1MCwgMjkwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgIGlmICh0aGlzLnByaW5jZXNzRGVhZCA9PT0gdHJ1ZSl7XG4gICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgIHRoaXMuc3RhbGxDb3VudCArPSAzO1xuICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEqIDgsIDIgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgfVxuICB9XG59XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==