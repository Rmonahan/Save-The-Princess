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

        if (collisionName === "fireball") {
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

      if (this.level.lives === 0 || this.level.stallCount === 30) {
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
      } else if (this.level.disabled === true && this.level.princessDisabled === true && this.save === true && this.level.princessDead === false) {
        this.srcX = this.stillFrame * width;
        this.srcY = 9 * height;
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

      if (e.key === "c" && this.level.room === 7 && e.repeat === false && this.level.disabled === true && this.level.princessDisabled === true) {
        this.kill = true;
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
        this.reachedLevel7 = true;
      } else if (this.room === 25) {
        if (this.princessDead === true) {
          this.ctx.font = 'bold 10pt Calibri';
          this.ctx.fillStyle = "white";
          this.ctx.fillText("After killing the princess who went mad you returned to Tromide.", 170, 50);
          this.ctx.fillText("You told the story of your adventure but the king didn't buy it.", 170, 70);
          this.ctx.fillText("He knew you made it up and were planning on killing her all along.", 170, 90);
          this.ctx.fillText("You have been exiled to an island where you have to fend for yourself.", 170, 110);
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
          this.ctx.fillText("You brought the princess back to Tromide. The king couldn't believe what happened.", 170, 50);
          this.ctx.fillText("After seeing for himself that the princess was the one behind it all, he ordered ", 170, 70);
          this.ctx.fillText("to have her locked away in the dungeon. The people of Tromide hailed you a hero. ", 170, 90);
          this.ctx.fillText("Everywhere you went people called out your name and cheered for you.", 1700, 110);
          this.ctx.fillText("Truthfully, you liked it better when no one knew who you were. A few weeks later", 170, 130);
          this.ctx.fillText("you couldn't get one question out of your head. What drove the princess to do all this.", 170, 150);
          this.ctx.fillText("You decided to go down to the dunguen to try and get some answers. When you got to the", 170, 170);
          this.ctx.fillText("cell the door was broken open and the cell was empty...", 170, 190);
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

        if (this.fired === 40) {
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

        if (this.princessDead === true) {
          this.ctx.clearRect(0, 0, 700, 400);
          this.stallCount += 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJzd29yZFN3aXBlIiwianVtcEhlaWdodCIsImluQWlyIiwiY3VyRnJhbWUiLCJmcmFtZUNvdW50Iiwic3JjWCIsInNyY1kiLCJ4IiwieSIsInNwZWVkIiwia2lsbCIsInNhdmUiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwicHJpbmNlc3NYIiwicHJpbmNlc3NEaXNhYmxlZCIsInNjcm9sbFJpZ2h0Iiwic2Nyb2xsTGVmdCIsImkiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJjb2xsaXNpb25DaGVjayIsImNvbGxpc2lvbk5hbWUiLCJmb3VuZEtleTEiLCJrZXlDb3VudCIsImZvdW5kS2V5MiIsImZvdW5kS2V5MyIsImZvdW5kS2V5NCIsImxpdmVzIiwicmVzZXQiLCJzdGFsbENvdW50IiwiZ2FtZU92ZXIiLCJwcmluY2Vzc0RlYWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJrZXlDb2RlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJyZXBlYXQiLCJqdW1wIiwiZm91bmRLZXlzIiwiZW50ZXIiLCJyZXN0YXJ0IiwicmVhY2hlZExldmVsNyIsInJlc3RhcnRGaW5hbCIsInN0YXJ0IiwicGxhdGZvcm0iLCJ2ZWN0b3JYIiwidmVjdG9yWSIsImNlbnRlcldpZHRocyIsImNlbnRlckhlaWdodHMiLCJjb2xsaXNpb25EaXJlY3Rpb24iLCJhYnMiLCJuYW1lIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjbGVhciIsIm5ld0xldmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIm51bWJlciIsInBsYXRmb3JtUGljIiwicGxhdGZvcm1XaWR0aCIsInBsYXRmb3JtSGVpZ2h0IiwiaGVhcnQiLCJmaXJzdFNjZW5lIiwic2Vjb25kU2NlbmUiLCJwcmluY2Vzc1N3b3JkQ291bnQiLCJrbmlnaHREZWFkIiwia2V5MSIsImtleTIiLCJrZXkzIiwia2V5NCIsImtleXMiLCJncmVlbktuaWdodCIsInByaW5jZXNzIiwiZ29sZEtuaWdodCIsImdvbGRLbmlnaHRYIiwibWlzc2lsZSIsImZpcmVkIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsInB1c2giLCJwcmluY2Vzc1NhdmVkIiwicmFkaXVzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImJsIiwiY2xvc2VQYXRoIiwiZmlsbCIsInNoaWZ0Iiwic3Ryb2tlU3R5bGUiLCJzdHJva2VUZXh0IiwiY3VycmVudEZyYW1lIiwicHJpbmNlc3NDb2wiLCJwcmluY2Vzc1JvdyIsImtuaWdodENvbCIsImtuaWdodFJvdyIsImRyYXdLZXlDb3VudCIsImRyYXdIZWFydCIsImRyYXdUZXh0Qm94IiwiZHJhd1BsYXRmb3JtcyIsImRyYXdfa2V5MSIsImRyYXdfa2V5MiIsImRyYXdfa2V5MyIsImRyYXdfa2V5NCIsImNvbCIsInJhbmQiLCJyYW5kb20iLCJyYW5kMiIsInNsaWNlIiwiZHJhd0l0ZW1zIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtCQUFELENBQXJCOztJQUVNQyxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQkMsR0FBbkIsRUFBd0JDLE1BQXhCLEVB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LEVBQWtEckgsQ0FBQyxHQUFHLEdBQXRELEVBQTJELEdBQTNEO0FBQ0EsZUFBS2pCLEdBQUwsQ0FBU3NJLFFBQVQsQ0FBa0IsbUJBQWxCLEVBQXVDckgsQ0FBQyxHQUFHLEdBQTNDLEVBQWdELEdBQWhEO0FBQ0EsZUFBSzRJLFdBQUwsQ0FBaUI1SSxDQUFDLEdBQUcsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsRUFBcEMsRUFBd0MsQ0FBeEM7QUFDQSxlQUFLakIsR0FBTCxDQUFTb0ksSUFBVCxHQUFnQixtQkFBaEI7QUFDQSxlQUFLcEksR0FBTCxDQUFTcUksU0FBVCxHQUFxQixPQUFyQjtBQUNBLGVBQUtySSxHQUFMLENBQVNzSSxRQUFULENBQWtCLDhCQUFsQixFQUFrRHJILENBQUMsR0FBRyxHQUF0RCxFQUEyRCxHQUEzRDtBQUNBLGVBQUtqQixHQUFMLENBQVNzSSxRQUFULENBQWtCLDJDQUFsQixFQUErRHJILENBQUMsR0FBRyxHQUFuRSxFQUF3RSxHQUF4RTtBQUNEOztBQUVGLFlBQUksS0FBSzJELFlBQUwsS0FBc0IsSUFBMUIsRUFBK0I7QUFDN0IsZUFBSzVFLEdBQUwsQ0FBUzhCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUI7QUFDQSxlQUFLNEMsVUFBTCxJQUFtQixDQUFuQjtBQUNBLGVBQUsxRSxHQUFMLENBQVNrRCxTQUFULENBQW1CLEtBQUsyRSxRQUF4QixFQUFrQyxLQUFJLENBQXRDLEVBQXlDLElBQUksRUFBN0MsRUFBaUQsRUFBakQsRUFBcUQsRUFBckQsRUFBeUQsS0FBS25FLFNBQTlELEVBQXlFLEdBQXpFLEVBQThFLEVBQTlFLEVBQWtGLEVBQWxGO0FBQ0Q7QUFDRDtBQUNGOzs7Ozs7QUFHRGdELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9HLEtBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcblxuY2xhc3MgR2FtZVZpZXcge1xuICBjb25zdHJ1Y3RvcihsZXZlbCwgY3R4LCBjYW52YXMsIGJhY2tncm91bmRDdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMuYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDdHg7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMuYmluZEtleUhhbmRsZXJzKCk7XG4gICAgdGhpcy5mbGlwUGxheWVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3dvcmRTd2lwZSA9IDA7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5raWxsID0gZmFsc2U7XG4gICAgdGhpcy5zYXZlID0gZmFsc2U7XG4gICAgdGhpcy5zdXBlck1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgdGhpcy5sZXZlbC5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpe1xuICAgIHRoaXMuZHJhd01haW5DaGFyYWN0ZXIoKTtcbiAgICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIH1cblxuICBkcmF3TWFpbkNoYXJhY3RlcigpIHtcbiAgICBjb25zdCBzcHJpdGVXaWR0aCA9IDM1MDtcbiAgICBjb25zdCBzcHJpdGVIZWlnaHQgPSA0MDc7XG4gICAgY29uc3Qgcm93cyA9IDExO1xuICAgIGNvbnN0IGNvbHMgPSA3O1xuICAgIHRoaXMudHJhY2tSaWdodCA9IDE7XG4gICAgdGhpcy50cmFja0xlZnQgPSAxO1xuICAgIHRoaXMud2lkdGggPSBzcHJpdGVXaWR0aCAvIGNvbHM7XG4gICAgdGhpcy5oZWlnaHQgPSBzcHJpdGVIZWlnaHQgLyByb3dzO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMub2xkRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy54ID0gMjIwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNyY1g9IDA7XG4gICAgdGhpcy5zcmNZPSB0aGlzLnRyYWNrUmlnaHQgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgIHRoaXMuc3BlZWRZID0gMTU7XG4gICAgdGhpcy5jaGFyYWN0ZXIuc3JjID0gXCJkaXN0L2ltYWdlcy9hZHZlbnR1cmVyLVNoZWV0LnBuZ1wiO1xuICB9XG4gIG1haW5Mb29wKHRpbWUpe1xuICAgIHRoaXMudXBkYXRlRnJhbWUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuZnJhbWVDb3VudCwgdGhpcy50cmFja0xlZnQsIHRoaXMudHJhY2tSaWdodClcbiAgICBpZiAodGhpcy5mYWNpbmdMZWZ0ID09PSB0cnVlKXtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAoLXRoaXMueCAtICh0aGlzLndpZHRoICogMikpLCB0aGlzLnksIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpOyAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoKjIsIHRoaXMuaGVpZ2h0KjIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSl7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpXG4gICAgICB9LCAxMDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgICAgfSwgNDApXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRnJhbWUod2lkdGgsIGhlaWdodCwgZnJhbWVDb3VudCwgdHJhY2tMZWZ0LCB0cmFja1JpZ2h0KXtcbiAgICB0aGlzLm9sZEZyYW1lID0gdGhpcy5vbGRGcmFtZSArIDE7XG4gICAgXG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIHRoaXMuc3RpbGxGcmFtZSA9IE1hdGguZmxvb3IoKHRoaXMub2xkRnJhbWUgJSA5KSAvIDMpXG4gICAgdGhpcy5zcmNYID0gdGhpcy5jdXJGcmFtZSAqIHdpZHRoICsgd2lkdGg7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueCwgdGhpcy55LCB3aWR0aCAqIDIsIGhlaWdodCAqIDIpO1xuICAgIHRoaXMubGV2ZWwudXBkYXRlU2NlbmUodGhpcy54LCB0aGlzLnksIHRoaXMub2xkRnJhbWUpO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMubGVmdCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSAmJiAodGhpcy54ID4gLTIwIHx8ICh0aGlzLmxldmVsLnJvb20gIT0xICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2UgJiYgKHRoaXMueCA8IDYyMCB8fCAodGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDYpKSAmJiAodGhpcy5sZXZlbC5yb29tICAhPSA3IHx8IHRoaXMueCA8ICh0aGlzLmxldmVsLnByaW5jZXNzWCAtIDg2KSB8fCB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpKXtcbiAgICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKXtcbiAgICAgIHRoaXMuc3BlZWRZID0gMTVcbiAgICAgIGlmICgzMTAgLSB0aGlzLnkgPiB0aGlzLnNwZWVkWSB8fCAodGhpcy5sZXZlbC5yb29tICE9IDEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDI1ICYmIHRoaXMubGV2ZWwucm9vbSAhPSAwICYmIHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDY3MCAmJiB0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gNil7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gLTIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQoKTtcbiAgICAgIHRoaXMueCA9IDY0MDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsLnBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLnBsYXRmb3Jtc1tpXSlcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgfHwgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJib3R0b21cIikge1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XG4gICAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sZXZlbC5pdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBjb2xsaXNpb25OYW1lID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLml0ZW1zW2ldKVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MVwiKXtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTEgPSB0cnVlO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNjAwLCAyNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MlwiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkyID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkzXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzg1LCAyNTAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTRcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjUsIDM0MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5NCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwiZmlyZWJhbGxcIil7XG4gICAgICAgIHRoaXMubGV2ZWwubGl2ZXMgLT0gMTtcbiAgICAgICAgdGhpcy55ID0gMTA7XG4gICAgICAgIHRoaXMueCA9IDIwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnkgPiA1MDAgKXtcbiAgICAgIHRoaXMubGV2ZWwubGl2ZXMgLT0gMTtcbiAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgdGhpcy54ID0gMjA7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGV2ZWwubGl2ZXMgPT09IDAgfHwgdGhpcy5sZXZlbC5zdGFsbENvdW50ID09PSAzMCl7XG4gICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgfVxuXG5cblxuICAgIGlmICh0aGlzLnkgPT09IDMxMCkgdGhpcy5pbkFpciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKSB0aGlzLnNyY1kgPSBoZWlnaHQgKiAyO1xuICAgIGVsc2UgaWYgKHRoaXMubGVmdCA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gdHJhY2tMZWZ0ICogaGVpZ2h0O1xuICAgIGVsc2UgaWYgKHRoaXMucmlnaHQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrUmlnaHQgKiBoZWlnaHQ7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNyY1ggPSAodGhpcy5zdGlsbEZyYW1lKSAqIHdpZHRoOyBcbiAgICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNyY1ggPSAoKHRoaXMuc3RpbGxGcmFtZSAlIDQpICsgIDMpICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA1ICogaGVpZ2h0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMua2lsbCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGVhZCA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDtcbiAgICAgIHRoaXMuc3JjWSA9IDcgKiBoZWlnaHQ7XG4gICAgICBpZiAodGhpcy5zdGlsbEZyYW1lID09PSAyKXtcbiAgICAgICAgdGhpcy5zd29yZFN3aXBlICs9IDFcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN3b3JkU3dpcGUgPT09IDgpe1xuICAgICAgICB0aGlzLmxldmVsLnByaW5jZXNzRGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIHRoaXMuc2F2ZSA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGVhZCA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDtcbiAgICAgIHRoaXMuc3JjWSA9IDkgKiBoZWlnaHQ7XG4gICAgfVxuICB9XG4gIFxuICBtb3ZlTGVmdCgpe1xuICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSB0cnVlO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCl7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgIHRoaXMuZmFjaW5nTGVmdCA9IGZhbHNlO1xuICB9XG5cbiAganVtcCgpe1xuICAgIHRoaXMuanVtcGluZyA9IHRydWU7XG4gICAgdGhpcy5pbkFpciA9IHRydWU7XG4gICAgdGhpcy5zdGlsbCA9IGZhbHNlO1xuICB9XG5cbiAgYmluZEtleUhhbmRsZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJkXCIgfHwgZS5rZXlDb2RlID09PSAzOSkge1xuICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiIHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gIH1cbiAgaWYgKChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXlDb2RlID09PSAzOCkgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmICh0aGlzLnkgPT09IDMxMCB8fCB0aGlzLnNwZWVkWSA9PT0gMCkgJiYgdGhpcy55IDw9IDMxMCkge1xuICAgIHRoaXMuanVtcCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDYgJiYgdGhpcy54ID4gMjYwICYmIHRoaXMueCA8IDM1MCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5mb3VuZEtleXMoKSA9PT0gdHJ1ZSl7XG4gICAgdGhpcy5lbnRlcigpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDI1ICYmIGUucmVwZWF0ID09PSBmYWxzZSl7XG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwidlwiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMjUgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwucmVhY2hlZExldmVsNyA9PT0gdHJ1ZSkge1xuICAgIHRoaXMucmVzdGFydEZpbmFsKCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMCAmJiBlLnJlcGVhdCA9PT0gZmFsc2UpIHtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBpZiAoZS5rZXkgPT09IFwiY1wiICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gNyAmJiBlLnJlcGVhdCA9PT0gZmFsc2UgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICB0aGlzLmtpbGwgPSB0cnVlO1xuICB9XG5cbiAgaWYgKChlLmtleSA9PT0gXCJwXCIpICYmIHRoaXMubGV2ZWwucm9vbSA9PT0gMSAmJiBlLnJlcGVhdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc3VwZXJNb2RlID0gIXRoaXMuc3VwZXJNb2RlO1xuICAgIH1cblxufVxuXG4ga2V5VXBIYW5kbGVyKGUpIHtcbiAgIGlmIChlLmtleSA9PT0gXCJkXCIgfHwgZS5rZXlDb2RlID09PSAzOSkge1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxuICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiIHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gdHJ1ZTtcbiAgfVxufVxuXG5mb3VuZEtleXMoKXtcbiAgcmV0dXJuIHRoaXMubGV2ZWwuZm91bmRLZXkxICYmIHRoaXMubGV2ZWwuZm91bmRLZXkyICYmIHRoaXMubGV2ZWwuZm91bmRLZXkzICYmIHRoaXMubGV2ZWwuZm91bmRLZXk0XG59XG5cbmNvbGxpc2lvbkNoZWNrKHBsYXRmb3JtKXtcbiAgY29uc3QgdmVjdG9yWCA9ICh0aGlzLnggKyAodGhpcy53aWR0aCkpIC0gKHBsYXRmb3JtLnggKyAocGxhdGZvcm0ud2lkdGggLyAyKSk7XG4gIGNvbnN0IHZlY3RvclkgPSAodGhpcy55ICsgKHRoaXMuaGVpZ2h0KSkgLSAocGxhdGZvcm0ueSArIChwbGF0Zm9ybS5oZWlnaHQgLyAyKSk7XG5cbiAgY29uc3QgY2VudGVyV2lkdGhzID0gKHRoaXMud2lkdGgvMikgKyAocGxhdGZvcm0ud2lkdGggLyAyKTtcbiAgY29uc3QgY2VudGVySGVpZ2h0cyA9ICh0aGlzLmhlaWdodCkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMik7XG5cblxuICBsZXQgY29sbGlzaW9uRGlyZWN0aW9uO1xuXG4gIGlmIChNYXRoLmFicyh2ZWN0b3JYKSA8IGNlbnRlcldpZHRocyAmJiBNYXRoLmFicyh2ZWN0b3JZKSA8IGNlbnRlckhlaWdodHMpIFxuICB7XG5cbiAgICBpZiAocGxhdGZvcm0ubmFtZSkgcmV0dXJuIHBsYXRmb3JtLm5hbWU7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGNlbnRlcldpZHRocyAtIE1hdGguYWJzKHZlY3RvclgpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBjZW50ZXJIZWlnaHRzIC0gTWF0aC5hYnModmVjdG9yWSk7XG5cbiAgICBpZiAob2Zmc2V0WCA8IG9mZnNldFkpXG4gICAgICAgIGlmICh2ZWN0b3JYID4gMCl7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgICAgICB0aGlzLnggKz0gb2Zmc2V0WDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgICAgICB0aGlzLnggLT0gb2Zmc2V0WDtcbiAgICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHZlY3RvclkgPiAwKXtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJ0b3BcIjtcbiAgICAgICAgdGhpcy55ICs9IG9mZnNldFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsaXNpb25EaXJlY3Rpb24gPSBcImJvdHRvbVwiO1xuICAgICAgICB0aGlzLnkgLT0gb2Zmc2V0WVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29sbGlzaW9uRGlyZWN0aW9uO1xufVxuXG5zY3JvbGxSaWdodCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiAodGhpcy5sZXZlbC5yb29tICE9PSAwICYmIHRoaXMubGV2ZWwucm9vbSAhPT0gNykpIHRoaXMubGV2ZWwucm9vbSArPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zY3JvbGxMZWZ0KCl7XG4gIGlmICh0aGlzLmxldmVsLnJvb20gIT09IDI1ICYmICh0aGlzLmxldmVsLnJvb20gIT09IDAgJiYgdGhpcy5sZXZlbC5yb29tICE9PSA3KSkgdGhpcy5sZXZlbC5yb29tIC09IDFcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbmVudGVyKCl7XG4gIHRoaXMubGV2ZWwucm9vbSArPSAxXG4gIHRoaXMueCA9IC0yMDtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnN0YXJ0KCl7XG4gIHRoaXMubGV2ZWwucm9vbSArPSAxO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbiAgdGhpcy54ID0gMjIwO1xuICB0aGlzLnkgPSAzMTA7XG59XG5cbnJlc2V0KCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuZ2FtZU92ZXIoKXtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLnJvb20gPSAyNVxuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnJlc3RhcnQoKXtcbiAgbGV0IG5ld0xldmVsID0gbmV3IExldmVsKDAsIHRoaXMuY3R4LCB0aGlzLmNhbnZhcyk7XG4gIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgdGhpcy5zd29yZFN3aXBlID0gMDtcbiAgdGhpcy5raWxsID0gZmFsc2U7XG4gIHRoaXMuc2F2ZSA9IGZhbHNlO1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxucmVzdGFydEZpbmFsKCl7XG4gIGxldCBuZXdMZXZlbCA9IG5ldyBMZXZlbCg3LCB0aGlzLmN0eCwgdGhpcy5jYW52YXMpO1xuICB0aGlzLmxldmVsID0gbmV3TGV2ZWw7XG4gIHRoaXMuc3dvcmRTd2lwZSA9IDA7XG4gIHRoaXMua2lsbCA9IGZhbHNlO1xuICB0aGlzLnNhdmUgPSBmYWxzZTtcbiAgdGhpcy5sZXZlbC5rZXlDb3VudCA9IDQ7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVZpZXc7IiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcbmNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vZ2FtZV92aWV3XCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiBcbiAgbGV0IGxldmVsID0gbmV3IExldmVsKDAsIGN0eCwgY2FudmFzKTtcbiAgbmV3IEdhbWVWaWV3KGxldmVsLCBjdHgsIGNhbnZhcyk7XG59KTsiLCJjbGFzcyBMZXZlbCB7XG4gIGNvbnN0cnVjdG9yKG51bWJlciwgY3R4LCBjYW52YXMpIHtcbiAgICB0aGlzLnJvb20gPSBudW1iZXI7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLnBsYXRmb3JtUGljID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wbGF0Zm9ybVBpYy5zcmMgPSBcImRpc3QvaW1hZ2VzL3BsYXRmb3JtLnBuZ1wiO1xuICAgIHRoaXMucGxhdGZvcm1XaWR0aCA9IDE1MDtcbiAgICB0aGlzLnBsYXRmb3JtSGVpZ2h0ID0gMjA7XG4gICAgdGhpcy5oZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaGVhcnQuc3JjID0gXCJkaXN0L2ltYWdlcy9oZWFydC5wbmdcIjtcbiAgICB0aGlzLmxpdmVzID0gMztcbiAgICB0aGlzLnN0YWxsQ291bnQgPSAwO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MSA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkyID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTMgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5NCA9IGZhbHNlO1xuICAgIHRoaXMuZmlyc3RTY2VuZSA9IHRydWU7XG4gICAgdGhpcy5zZWNvbmRTY2VuZSA9IHRydWU7XG4gICAgdGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPSAwO1xuICAgIHRoaXMua25pZ2h0RGVhZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5MSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5MS5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5MiA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5Mi5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5MyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5My5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5NCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5NC5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5cyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMua2V5cy5zcmMgPSBcImRpc3QvaW1hZ2VzL0tleUljb25zLnBuZ1wiO1xuICAgIHRoaXMua2V5Q291bnQgPSAwO1xuICAgIHRoaXMucmVhY2hlZExldmVsNyA9IGZhbHNlO1xuICAgIHRoaXMuZ3JlZW5LbmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmdyZWVuS25pZ2h0LnNyYyA9IFwiZGlzdC9pbWFnZXMvTWl0aGVyYWxLbmlnaHQucG5nXCI7XG4gICAgdGhpcy5wcmluY2VzcyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucHJpbmNlc3Muc3JjID0gXCJkaXN0L2ltYWdlcy9wcmluY2Vzcy5wbmdcIjtcbiAgICB0aGlzLnByaW5jZXNzWCA9IDUwMDtcbiAgICB0aGlzLmdvbGRLbmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmdvbGRLbmlnaHQuc3JjID0gXCJkaXN0L2ltYWdlcy9Hb2xkS25pZ2h0LnBuZ1wiXG4gICAgdGhpcy5nb2xkS25pZ2h0WCA9IDcwMDtcbiAgICB0aGlzLm1pc3NpbGUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLm1pc3NpbGUuc3JjID0gXCJkaXN0L2ltYWdlcy9wcmluY2Vzcy5wbmdcIjtcbiAgICB0aGlzLmZpcmVkID0gMDtcbiAgICB0aGlzLnByaW5jZXNzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByaW5jZXNzRGVhZCA9IGZhbHNlO1xuICB9XG4gIGFkZFNjZW5lKCkge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCJkaXN0L2ltYWdlcy9sZXZlbCR7dGhpcy5yb29tfS5wbmdcImBcbiAgICBwbGF0Zm9ybXMgPSB0aGlzLnBsYXRmb3JtcztcbiAgICBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICBwbGF0Zm9ybVdpZHRoID0gdGhpcy5wbGF0Zm9ybVdpZHRoO1xuICAgIHBsYXRmb3JtSGVpZ2h0ID0gdGhpcy5wbGF0Zm9ybUhlaWdodFxuICAgIGlmICh0aGlzLnJvb20gPT09IDApIHtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBjb250cm9sIEhlbnJ5IHdobyBpcyBhIGNvYWwgbWluZXIgZnJvbSB0aGUga2luZ2RvbSBvZiBUcm9taWRlLlwiLCAzMCwgNTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBoYXMgYWx3YXlzIGtlcHQgYSBsb3cgcHJvZmlsZSwgZGV0ZXJtaW5lZCB0byBkbyBoaXMgam9iIGFuZCB0aGVuIGVuam95IHRoZSBwZWFjZSBhbmQgcXVpZXQgb2YgaGlzIGhvbWUuXCIsIDMwLCA3MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5ldmVyIG1hZGUgYW4gZWZmb3J0IHRvIGJlIGtub3duIG9yIG1ha2UgZnJpZW5kcy4gTm8gb25lIGtuZXcgaGltIHBlcnNvbmFsbHkgYW5kIGhlIGxpa2VkIGl0IHRoYXQgd2F5LlwiLCAzMCwgOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUaGUgcHJpbmNlc3MgaGFzIGJlZW4ga2lkbmFwcGVkIGFuZCBhbGwgZWZmb3J0cyB0byBzYXZlIGhlciBoYXZlIGZhaWxlZC4gQWx0aG91Z2ggSGVucnkgaGFzIGhlYXJkIG9mIHRoZSBzaXR1YXRpb24sXCIsIDMwLCAxMTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJpdCB3YXNuJ3Qgc29tZXRoaW5nIGhlIHdhcyBpbnRlcmVzdGVkIGluIGdldHRpbmcgaW52b2x2ZWQgaW4uIEFzIGhlIHdhcyB3YWxraW5nIHRvIHdvcmsgaGUgc2F3IGEgZmxpZXIgb2ZmZXJpbmdcIiwgMzAsIDEzMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcImEgbWFqb3IgcmV3YXJkIHRvIGFueW9uZSB0aGF0IGNhbiBoZWxwIHNhdmUgdGhlIHByaW5jZXNzLiBUaGUgb25lIHRoaW5nIEhlbnJ5IGRvZXMgY2FyZSBmb3IgaXMgbW9uZXkuXCIsIDMwLCAxNTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZSBuZWVkcyB0byBmaW5kIHRoZSA0IGtleXMgdG8gZ2V0IGludG8gdGhlIGVuZW15IGNhc3RsZSBhbmQgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoaXMgaXMgd2hlcmUgaGlzIHN0b3J5IGJlZ2lucy4gXCIsIDMwLCAxNzApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJVc2UgdGhlIGxlZnQsIHJpZ2h0LCB1cCBhcnJvdyBrZXlzIG9yIEEgYW5kIEQgdG8gbW92ZSBsZWZ0L3JpZ2h0IGFuZCBXIHRvIGp1bXAuIE5vdGU6IFRoZXJlIGlzIG5vIGRvdWJsZSBqdW1wLlwiLCAzMCwgMTkwIClcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHN0YXJ0LicsIDI2MCwgMjE1KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSkge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjExMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAyMDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCArIDgwMCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzOTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1OTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxODAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMjAsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNzAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgMzAsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MVwiLFxuICAgICAgICAgIHg6IDYwMCxcbiAgICAgICAgICB5OiAyNDAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodGhpcy5yb29tID09PSAzKXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxMDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzQwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTIwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzODAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAyNjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIwMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTIgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5MlwiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KXtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjYwLFxuICAgICAgICB5OiAxNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMTUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjUwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNDQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDUwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTMgPT09IGZhbHNlKVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIG5hbWU6IFwia2V5M1wiLFxuICAgICAgICAgIHg6IDM4NSxcbiAgICAgICAgICB5OiAyNTAsXG4gICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgIGhlaWdodDogMzBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2MDAsXG4gICAgICAgIHk6IDc1LFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTUwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTMwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgNzAsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNDc1LFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUzMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAyMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAxNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDU1MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXk0XCIsXG4gICAgICAgICAgeDogMjI1LFxuICAgICAgICAgIHk6IDM0MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDYpIHtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSBcIi01MHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIxMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDYwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDIyLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDIwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA3MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NzAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA3MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDcpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwXCI7XG4gICAgICB0aGlzLnJlYWNoZWRMZXZlbDcgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDI1KXtcbiAgICAgIGlmICh0aGlzLnByaW5jZXNzRGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJBZnRlciBraWxsaW5nIHRoZSBwcmluY2VzcyB3aG8gd2VudCBtYWQgeW91IHJldHVybmVkIHRvIFRyb21pZGUuXCIsIDE3MCwgNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSB0b2xkIHRoZSBzdG9yeSBvZiB5b3VyIGFkdmVudHVyZSBidXQgdGhlIGtpbmcgZGlkbid0IGJ1eSBpdC5cIiwgMTcwLCA3MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUga25ldyB5b3UgbWFkZSBpdCB1cCBhbmQgd2VyZSBwbGFubmluZyBvbiBraWxsaW5nIGhlciBhbGwgYWxvbmcuXCIsIDE3MCwgOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBoYXZlIGJlZW4gZXhpbGVkIHRvIGFuIGlzbGFuZCB3aGVyZSB5b3UgaGF2ZSB0byBmZW5kIGZvciB5b3Vyc2VsZi5cIiwgMTcwLCAxMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBuZXZlciBleHBlY3RlZCB0aGlzIGlzIHdoYXQgYmVpbmcgYSBoZXJvIHdvdWxkIGZlZWwgbGlrZS5cIiwgMTcwLCAxMzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdXIgd2hvbGUgbGlmZSBhbGwgeW91IHdhbnRlZCB3YXMgdG8gYmUgbGVmdCBhbG9uZSB5ZXQgbm93IHlvdVwiLCAxNzAsIDE1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwid291bGQgZG8gYW55dGhpbmcgdG8gc2VlIGFub3RoZXIgcGVyc29uLiBBZnRlciBzcGVuZGluZyB3ZWVrcyBmb2N1c2VkXCIsIDE3MCwgMTcwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJvbiBzdXJ2aXZhbC4gWW91IHNlZSBhIGJvYXQgYXBwcm9hY2ggdGhlIGlzbGFuZC4uLlwiLCAxNzAsIDE5MClcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUSEUgRU5ELlwiLCAzNTAsIDIyMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHN0YXJ0IGFnYWluLicsIDMyMCwgMjQwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFYgdG8gc3RhcnQgZnJvbSBjYXN0bGUgc2NlbmUgYWdhaW4uJywgMjcwLCAyNjApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByaW5jZXNzU2F2ZWQgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGJyb3VnaHQgdGhlIHByaW5jZXNzIGJhY2sgdG8gVHJvbWlkZS4gVGhlIGtpbmcgY291bGRuJ3QgYmVsaWV2ZSB3aGF0IGhhcHBlbmVkLlwiLCAxNzAsIDUwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJBZnRlciBzZWVpbmcgZm9yIGhpbXNlbGYgdGhhdCB0aGUgcHJpbmNlc3Mgd2FzIHRoZSBvbmUgYmVoaW5kIGl0IGFsbCwgaGUgb3JkZXJlZCBcIiwgMTcwLCA3MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidG8gaGF2ZSBoZXIgbG9ja2VkIGF3YXkgaW4gdGhlIGR1bmdlb24uIFRoZSBwZW9wbGUgb2YgVHJvbWlkZSBoYWlsZWQgeW91IGEgaGVyby4gXCIsIDE3MCwgOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkV2ZXJ5d2hlcmUgeW91IHdlbnQgcGVvcGxlIGNhbGxlZCBvdXQgeW91ciBuYW1lIGFuZCBjaGVlcmVkIGZvciB5b3UuXCIsIDE3MDAsIDExMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVHJ1dGhmdWxseSwgeW91IGxpa2VkIGl0IGJldHRlciB3aGVuIG5vIG9uZSBrbmV3IHdobyB5b3Ugd2VyZS4gQSBmZXcgd2Vla3MgbGF0ZXJcIiwgMTcwLCAxMzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcInlvdSBjb3VsZG4ndCBnZXQgb25lIHF1ZXN0aW9uIG91dCBvZiB5b3VyIGhlYWQuIFdoYXQgZHJvdmUgdGhlIHByaW5jZXNzIHRvIGRvIGFsbCB0aGlzLlwiLCAxNzAsIDE1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGRlY2lkZWQgdG8gZ28gZG93biB0byB0aGUgZHVuZ3VlbiB0byB0cnkgYW5kIGdldCBzb21lIGFuc3dlcnMuIFdoZW4geW91IGdvdCB0byB0aGVcIiwgMTcwLCAxNzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImNlbGwgdGhlIGRvb3Igd2FzIGJyb2tlbiBvcGVuIGFuZCB0aGUgY2VsbCB3YXMgZW1wdHkuLi5cIiwgMTcwLCAxOTApXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVEhFIEVORC5cIiwgMzUwLCAyMjApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgQyB0byBzdGFydCBhZ2Fpbi4nLCAzMjAsIDI0MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBWIHRvIHN0YXJ0IGZyb20gY2FzdGxlIHNjZW5lIGFnYWluLicsIDI3MCwgMjYwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGZhaWxlZCB0byBzYXZlIHRoZSBQcmluY2Vzcy5cIiwgMTcwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQgYWdhaW4uJywgMjIwLCAxNTApO1xuICAgICAgaWYgKHRoaXMucmVhY2hlZExldmVsNyA9PT0gdHJ1ZSl7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgViB0byBzdGFydCBmcm9tIGNhc3RsZSBzY2VuZSBhZ2Fpbi4nLCAxNDAsIDE4MCk7XG4gICAgICB9XG4gICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDI2KSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDIwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGZhaWxlZCB0byBzYXZlIHRoZSBQcmluY2Vzcy5cIiwgMTcwLCAxMDApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQgYWdhaW4uJywgMjIwLCAxNTApO1xuICAgICAgaWYgKHRoaXMucmVhY2hlZExldmVsNyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnUHJlc3MgViB0byBzdGFydCBmcm9tIGNhc3RsZSBzY2VuZSBhZ2Fpbi4nLCAxNDAsIDE4MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd1RleHRCb3goeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKXtcbiAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLmJsLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3UGxhdGZvcm1zKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxhdGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wbGF0Zm9ybVBpYywgMCwgMCwgOTYsIDk2LCB0aGlzLnBsYXRmb3Jtc1tpXS54LCB0aGlzLnBsYXRmb3Jtc1tpXS55LCB0aGlzLnBsYXRmb3Jtc1tpXS53aWR0aCwgdGhpcy5wbGF0Zm9ybXNbaV0uaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBkcmF3SXRlbXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5taXNzaWxlLCA4OTEgLCA4MiwgODEsIDgyLCB0aGlzLml0ZW1zW2ldLnggLSBzaGlmdCwgMjkwLCAxMDAsIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0hlYXJ0KCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaGVhcnQsIDAsIDAsIDEyNSwgMTI1LCA2NTAsIDEwLCAzMCwgMzApXG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMubGl2ZXMsIDYzMiwgMzIpO1xuICB9XG5cbiAgZHJhd0tleUNvdW50KCl7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDU2MCwgMTAsIDIwMCwgNTApXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5cywgMzIsIDAsIDMyLCAzMiwgNTkwLCAxMiwgMzAsIDMwKTtcbiAgICB0aGlzLmN0eC5mb250ID0gJzE2cHQgVGltZXMgTmV3IFJvbWFuJztcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIlxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5rZXlDb3VudCwgNTcwLCAzMik7XG4gIH1cblxuICBkcmF3X2tleTEoKXtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5rZXkxLCAwLCAwLCAzMiwgMzIsIDYwMCwgMjQwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkyKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MiwgMzIsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTMoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MywgNjQsIDAsIDMyLCAzMiwgMzg1LCAyNTAsIDMwLCAzMCk7XG4gIH1cblxuICBkcmF3X2tleTQoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5NCwgOTYsIDAsIDMyLCAzMiwgMjI1LCAzNDAsIDMwLCAzMCk7XG4gIH1cblxuICB1cGRhdGVTY2VuZSh4LCB5LCBjdXJyZW50RnJhbWUpe1xuICAgIGxldCBwcmluY2Vzc0NvbDtcbiAgICBsZXQgcHJpbmNlc3NSb3cgPSAyO1xuICAgIGxldCBrbmlnaHRDb2w7XG4gICAgbGV0IGtuaWdodFJvdztcblxuICAgIGlmICh0aGlzLnJvb20gIT0gMCAmJiB0aGlzLnJvb20gIT0gMjUpe1xuICAgIHRoaXMuZHJhd0tleUNvdW50KCk7XG4gICAgdGhpcy5kcmF3SGVhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yb29tID09PSAxKXtcbiAgICAgIGlmICh4IDwgNDAwICYmIHggPiAyMDApe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDkwLCAyODAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnR29vZCBsdWNrIEhlbnJ5LCcsIDk1LCAzMDApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgnSSBrbm93IHlvdSBjYW4nLCA5NSwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ2RvIGl0IScsIDk1LCAzMjApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoOTAsIDI4MCwgMTAwLCA1MCk7XG4gICAgfVxuXG4gICAgICBpZiAoeCA8IDgwMCAmJiB4ID4gNTAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg0MDAsIDI2MCwgMTAwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGFyZW4ndCBnb2luZ1wiLCA0MTAsIDI4MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCd0byBsYXN0IDUgbWludXRlcycsIDQxMCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJvdXQgdGhlcmUuXCIsIDQxMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg0MDAsIDI2MCwgMTAwLCA1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAyKXtcbiAgICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kS2V5MSA9PT0gZmFsc2Upe1xuICAgICAgICAgIHRoaXMuZHJhd19rZXkxKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpIHtcbiAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDEzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpIHtcbiAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkzID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRyYXdfa2V5MygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDUwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAyMDAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gdHJ1ZSl7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzMDAsXG4gICAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMzAwLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5NCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLmRyYXdfa2V5NCgpO1xuICAgICAgfSAgXG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA2KXtcbiAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXkyID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgY29sID0gY3VycmVudEZyYW1lICUgMTBcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDMyMCwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmdyZWVuS25pZ2h0LCAzMiAqIGNvbCwgMCwgMzIsIDMyLCAtMzg1LCAzMTAsIDY1LCA2NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyMjAsIDI3MCwgMTIwLCA1MCwgNSlcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IG11c3QgaGF2ZSBhbGwgNFwiLCAyMzAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdrZXlzIHRvIGVudGVyIHRoZSBjYXN0bGUuJywgMjMwLCAzMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDIyMCwgMjcwLCAxMjAsIDUwKTtcbiAgICAgICAgaWYgKHggPiAyNjAgJiYgeCA8IDM1MCl7XG4gICAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyNjAsIDI3MCwgMTUwLCAyNSwgNSk7XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDhwdCBDYWxpYnJpJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIEMgdG8gZW50ZXIgdGhlIGNhc3RsZS5cIiwgMjcwLCAyOTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyNjAsIDI3MCwgMTUwLCAyNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDcpe1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDMwMCwgMTAwMCwgMTAwKTtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLmdvbGRLbmlnaHRYLCAzMDAsIDg1LCA4NSlcbiAgICAgIGlmICh0aGlzLmZpcnN0U2NlbmUgPT09IHRydWUpe1xuICAgICAgIHByaW5jZXNzQ29sID0gNztcbiAgICAgICAgaWYgKGN1cnJlbnRGcmFtZSAlIDggPT09IDApe1xuICAgICAgICAgcHJpbmNlc3NDb2wgPSA4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICh4IDwgMjUwICYmIHRoaXMuZmlyc3RTY2VuZSA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMzkwLCAyOTAsIDE1MCwgNDAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGxlYXNlIHNhdmUgbWUhIFRoZVwiLCA0MDAgLCAzMTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImV2aWwga25pZ2h0IGlzIGNvbWluZyFcIiwgNDAwLCAzMjMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM5MCwgMjkwLCAxNTAsIDQwKTtcbiAgICAgIH1cbiAgICAgIGtuaWdodFJvdyA9IDE7XG4gICAgICBpZiAoeCA+IDI2MCB8fCB0aGlzLmtuaWdodERlYWQgPT09IHRydWUpe1xuICAgICAgICBrbmlnaHRDb2wgPSAoY3VycmVudEZyYW1lKSAlIDEwO1xuICAgICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA+IDM1MCkge1xuICAgICAgICAgIHRoaXMuZ29sZEtuaWdodFggLT0gNTtcbiAgICAgICAgICBrbmlnaHRSb3cgPSAyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzU3dvcmRDb3VudCA+IDEpIHtcbiAgICAgICAgICBrbmlnaHRSb3cgPSA0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtuaWdodFJvdyA9PT0gNCAmJiBrbmlnaHRDb2wgPT09IDkpe1xuICAgICAgICAgIHRoaXMua25pZ2h0RGVhZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5rbmlnaHREZWFkID09PSB0cnVlKXtcbiAgICAgICAgICBrbmlnaHRDb2wgPSA5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZ29sZEtuaWdodCwgMzIgKiBrbmlnaHRDb2wsIGtuaWdodFJvdyAqIDMyLCAzMiwgMzIsIC10aGlzLmdvbGRLbmlnaHRYIC0gODUsIDMwMCwgODUsIDg1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA+IDM2MCAmJiB0aGlzLmdvbGRLbmlnaHRYIDwgNjAwKVxuICAgICAge1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDEzMCwgMjUwLCAxODAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhleSB5b3UgYmlnIGR1bW15LiBZb3VcIiwgMTQwLCAyNzIpO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImJldHRlciBsZXQgdGhlIHByaW5jZXNzIGdvIVwiLCAxNDAsIDI4NSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdvbGRLbmlnaHRYID09PSAzNTAgJiYgdGhpcy5wcmluY2Vzc1ggIT0gMzkwICYmIHRoaXMua25pZ2h0RGVhZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLmZpcnN0U2NlbmUgPSBmYWxzZTtcbiAgICAgICAgcHJpbmNlc3NDb2wgPSBjdXJyZW50RnJhbWUgJSAyO1xuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPiAzOTAgJiYgdGhpcy5rbmlnaHREZWFkID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMucHJpbmNlc3NYIC09IDU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDEzMCwgMjUwLCAxODAsIDU1KTtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgyMTAsIDIzMCwgMTcwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJUaGFuayBnb2QgeW91IGFyZSBoZXJlLlwiLCAyMjAsIDI1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiRXZlcnlvbmUgaGFzIGl0IGFsbCB3cm9uZy4uLlwiLCAyMjAsIDI2NSk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByaW5jZXNzWCA9PT0gMzkwKXtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDIxMCwgMjMwLCAxNzAsIDgwKTtcbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kU2NlbmUgPT09IHRydWUpe1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMTcpIC8gNCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSBNYXRoLmZsb29yKChjdXJyZW50RnJhbWUgJSAyMCkgLyAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW5jZXNzQ29sID09PSA0KXtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IDA7XG4gICAgICAgICAgdGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzU3dvcmRDb3VudCA9PT0gMil7XG4gICAgICAgICAgdGhpcy5zZWNvbmRTY2VuZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goNDYwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSG93IGN1dGUuIFlvdSB0aG91Z2h0IEkgd2FzXCIsIDQ3MCwgMjkwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGUgb25lIHRoYXQgbmVlZGVkIHNhdmluZy5cIiwgNDcwLCAzMDUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSAmJiB0aGlzLnByaW5jZXNzWCA8IDY1MCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg0NjAsIDI3MCwgMTgwLCA2MClcbiAgICAgICAgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNSlcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgcmFuZCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcHJpbmNlc3NDb2wgPSA5XG4gICAgICAgIGlmIChyYW5kJTIgPT09IDAgJiYgdGhpcy5wcmluY2Vzc1ggPCA0NjApe1xuICAgICAgICAgIHRoaXMucHJpbmNlc3NYICs9IHJhbmQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NYID4gMCl7XG4gICAgICAgICAgICAgdGhpcy5wcmluY2Vzc1ggLT0gcmFuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByaW5jZXNzWCArPSByYW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlKXtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IE1hdGguZmxvb3IoKGN1cnJlbnRGcmFtZSAlIDEwKS81KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmFuZDIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNTApO1xuICAgICAgICBpZiAoKGN1cnJlbnRGcmFtZSAlIDMwID09PSAwIHx8IHJhbmQyID09PSAwKSAmJiB0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IGZhbHNlKXtcbiAgICAgICAgICB0aGlzLmZpcmVkICs9IDE7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAxMFxuICAgICAgICAgIGxldCBmYWNpbmdMZWZ0XG4gICAgICAgICAgaWYgKHggPCB0aGlzLnByaW5jZXNzWCl7XG4gICAgICAgICAgICBmYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaWZ0ID0gNTVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmFjaW5nTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgc2hpZnQgPSAwXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBcImZpcmViYWxsXCIsXG4gICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgIGhlaWdodDogMixcbiAgICAgICAgICAgIHk6IDM1NSxcbiAgICAgICAgICAgIHg6IHRoaXMucHJpbmNlc3NYICsgc2hpZnQsXG4gICAgICAgICAgICBsZWZ0OiBmYWNpbmdMZWZ0LFxuICAgICAgICAgICAgc2hpZnQ6IHNoaWZ0XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IGZhbHNlKXtcbiAgICAgICAgaWYgKHggPCB0aGlzLnByaW5jZXNzWCl7XG4gICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCAtdGhpcy5wcmluY2Vzc1ggLSA4NSwgMzAwLCA4NSwgODUpO1xuICAgICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5sZWZ0ID09PSB0cnVlKXtcbiAgICAgICAgICAgdGhpcy5pdGVtc1tpXS54IC09IDEwO1xuICAgICAgICAgfVxuICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgIHRoaXMuaXRlbXNbaV0ueCArPSAxMDtcbiAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuc2xpY2UoNiwgNDEpXG4gICAgICAgIH1cbiAgICAgICB0aGlzLmRyYXdJdGVtcyhjdXJyZW50RnJhbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5rbmlnaHREZWFkID09PSB0cnVlKXtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgaWYgKHRoaXMuZmlyZWQgPT09IDQwKXtcbiAgICAgIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmZpcmVkID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiBNYXRoLmFicyh0aGlzLnByaW5jZXNzWCAtIHgpID4gNzApe1xuICAgICAgdGhpcy5kcmF3VGV4dEJveCh0aGlzLnByaW5jZXNzWCArIDUwLCAyNzAsIDE4MCwgNTAsIDUpO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiTG9va3MgbGlrZSBJIHdpbGwgaGF2ZSB0byBkb1wiLCB0aGlzLnByaW5jZXNzWCArIDYwLCAyOTApO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJ0aGlzIHRoZSBoYXJkIHdheVwiLCB0aGlzLnByaW5jZXNzWCArIDYwLCAzMDUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByaW5jZXNzRGVhZCA9PT0gZmFsc2UgJiYgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIE1hdGguYWJzKHRoaXMucHJpbmNlc3NYIC0geCkgPCA3MCl7XG4gICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLnByaW5jZXNzWCArIDUwLCAyNzAsIDE4MCw1MCk7XG4gICAgICB0aGlzLmRyYXdUZXh0Qm94KHggLSAxNjAsIDI3MCwgMTgwLCA1MCwgNSk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMb29rcyBsaWtlIEkgd2lsbCBoYXZlIHRvIGRvXCIsIHggLSAxNTAsIDI5MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcInRoaXMgdGhlIGVhc3kgd2F5XCIsIHggLSAxNTAsIDMwNSk7XG4gICAgICB0aGlzLmRyYXdUZXh0Qm94KHggLSAxNjAsIDE0MCwgMjUwLCA1MCwgNSk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBDIHRvIGtpbGwgdGhlIHByaW5jZXNzXCIsIHggLSAxNTAsIDE2MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIFYgdG8gcmV0dXJuIHRoZSBwcmluY2VzcyB0byBUcm9taWRlXCIsIHggLSAxNTAsIDE3NSk7XG4gICAgfVxuXG4gICBpZiAodGhpcy5wcmluY2Vzc0RlYWQgPT09IHRydWUpe1xuICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNzAwLCA0MDApO1xuICAgICB0aGlzLnN0YWxsQ291bnQgKz0gMTtcbiAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxKiA4LCAyICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgIH1cbiAgfVxufVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=