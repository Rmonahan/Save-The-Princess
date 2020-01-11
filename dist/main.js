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

      if (this.level.lives === 0) {
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
      }

      if (this.fired === 10) {
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
        this.ctx.drawImage(this.princess, 81 * 8, 2 * 82, 81, 82, this.princessX, 300, 85, 85);
      }
    }
  }]);

  return Level;
}();

module.exports = Level;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsLmpzIl0sIm5hbWVzIjpbIkxldmVsIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwibGV2ZWwiLCJjdHgiLCJjYW52YXMiLCJiYWNrZ3JvdW5kQ3R4IiwiYmluZEtleUhhbmRsZXJzIiwiZmxpcFBsYXllciIsInN0aWxsIiwibGVmdCIsImZhY2luZ0xlZnQiLCJyaWdodCIsImp1bXBpbmciLCJzd29yZFN3aXBlIiwianVtcEhlaWdodCIsImluQWlyIiwiY3VyRnJhbWUiLCJmcmFtZUNvdW50Iiwic3JjWCIsInNyY1kiLCJ4IiwieSIsInNwZWVkIiwia2lsbCIsInNhdmUiLCJzdXBlck1vZGUiLCJjaGFyYWN0ZXIiLCJJbWFnZSIsImNyZWF0ZVNjZW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWFpbkxvb3AiLCJiaW5kIiwiY2xlYXJSZWN0IiwicGxhdGZvcm1zIiwiaXRlbXMiLCJkcmF3TWFpbkNoYXJhY3RlciIsImFkZFNjZW5lIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJyb3dzIiwiY29scyIsInRyYWNrUmlnaHQiLCJ0cmFja0xlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9sZEZyYW1lIiwic3BlZWRYIiwic3BlZWRZIiwic3JjIiwidGltZSIsInVwZGF0ZUZyYW1lIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJzZXRUaW1lb3V0Iiwic3RpbGxGcmFtZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNjZW5lIiwiZGlzYWJsZWQiLCJyb29tIiwicHJpbmNlc3NYIiwicHJpbmNlc3NEaXNhYmxlZCIsInNjcm9sbFJpZ2h0Iiwic2Nyb2xsTGVmdCIsImkiLCJsZW5ndGgiLCJkaXJlY3Rpb24iLCJjb2xsaXNpb25DaGVjayIsImNvbGxpc2lvbk5hbWUiLCJmb3VuZEtleTEiLCJrZXlDb3VudCIsImZvdW5kS2V5MiIsImZvdW5kS2V5MyIsImZvdW5kS2V5NCIsImxpdmVzIiwicmVzZXQiLCJnYW1lT3ZlciIsInByaW5jZXNzRGVhZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZSIsImtleSIsImtleUNvZGUiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInJlcGVhdCIsImp1bXAiLCJmb3VuZEtleXMiLCJlbnRlciIsInJlc3RhcnQiLCJyZWFjaGVkTGV2ZWw3IiwicmVzdGFydEZpbmFsIiwic3RhcnQiLCJwbGF0Zm9ybSIsInZlY3RvclgiLCJ2ZWN0b3JZIiwiY2VudGVyV2lkdGhzIiwiY2VudGVySGVpZ2h0cyIsImNvbGxpc2lvbkRpcmVjdGlvbiIsImFicyIsIm5hbWUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNsZWFyIiwibmV3TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwibnVtYmVyIiwicGxhdGZvcm1QaWMiLCJwbGF0Zm9ybVdpZHRoIiwicGxhdGZvcm1IZWlnaHQiLCJoZWFydCIsImZpcnN0U2NlbmUiLCJzZWNvbmRTY2VuZSIsInByaW5jZXNzU3dvcmRDb3VudCIsImtuaWdodERlYWQiLCJrZXkxIiwia2V5MiIsImtleTMiLCJrZXk0Iiwia2V5cyIsImdyZWVuS25pZ2h0IiwicHJpbmNlc3MiLCJnb2xkS25pZ2h0IiwiZ29sZEtuaWdodFgiLCJtaXNzaWxlIiwiZmlyZWQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImJhY2tncm91bmRQb3NpdGlvblkiLCJiYWNrZ3JvdW5kUG9zaXRpb25YIiwicHVzaCIsInJhZGl1cyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInF1YWRyYXRpY0N1cnZlVG8iLCJibCIsImNsb3NlUGF0aCIsImZpbGwiLCJzaGlmdCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlVGV4dCIsImN1cnJlbnRGcmFtZSIsInByaW5jZXNzQ29sIiwicHJpbmNlc3NSb3ciLCJrbmlnaHRDb2wiLCJrbmlnaHRSb3ciLCJkcmF3S2V5Q291bnQiLCJkcmF3SGVhcnQiLCJkcmF3VGV4dEJveCIsImRyYXdQbGF0Zm9ybXMiLCJkcmF3X2tleTEiLCJkcmF3X2tleTIiLCJkcmF3X2tleTMiLCJkcmF3X2tleTQiLCJjb2wiLCJyYW5kIiwicmFuZG9tIiwicmFuZDIiLCJzbGljZSIsImRyYXdJdGVtcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQywrQkFBRCxDQUFyQjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUJDLEdBQW5CLEVBQXdCQyxNQUF4QixFQUFnQ0MsYUFBaEMsRUFBK0M7QUFBQTs7QUFDN0Ms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QixTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCO0FBQ0EsYUFBSzlCLEdBQUwsQ0FBU2tELFNBQVQsQ0FBbUIsS0FBSzBFLFFBQXhCLEVBQWtDLEtBQUksQ0FBdEMsRUFBeUMsSUFBSSxFQUE3QyxFQUFpRCxFQUFqRCxFQUFxRCxFQUFyRCxFQUF5RCxLQUFLbEUsU0FBOUQsRUFBeUUsR0FBekUsRUFBOEUsRUFBOUUsRUFBa0YsRUFBbEY7QUFDRDtBQUdIOzs7Ozs7QUFHRCtDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjlHLEtBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgTGV2ZWwgPSByZXF1aXJlKFwiLi9sZXZlbFwiKTtcblxuY2xhc3MgR2FtZVZpZXcge1xuICBjb25zdHJ1Y3RvcihsZXZlbCwgY3R4LCBjYW52YXMsIGJhY2tncm91bmRDdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMuYmFja2dyb3VuZEN0eCA9IGJhY2tncm91bmRDdHg7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgIHRoaXMuYmluZEtleUhhbmRsZXJzKCk7XG4gICAgdGhpcy5mbGlwUGxheWVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3dvcmRTd2lwZSA9IDA7XG4gICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgdGhpcy5jdXJGcmFtZSA9IDA7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gNjtcbiAgICB0aGlzLnNyY1ggPSAwO1xuICAgIHRoaXMuc3JjWSA9IDA7XG4gICAgdGhpcy54ID0gMzAwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNwZWVkID0gMTI7XG4gICAgdGhpcy5raWxsID0gZmFsc2U7XG4gICAgdGhpcy5zYXZlID0gZmFsc2U7XG4gICAgdGhpcy5zdXBlck1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubWFpbkxvb3AuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgdGhpcy5sZXZlbC5wbGF0Zm9ybXMgPSBbXTtcbiAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpe1xuICAgIHRoaXMuZHJhd01haW5DaGFyYWN0ZXIoKTtcbiAgICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIH1cblxuICBkcmF3TWFpbkNoYXJhY3RlcigpIHtcbiAgICBjb25zdCBzcHJpdGVXaWR0aCA9IDM1MDtcbiAgICBjb25zdCBzcHJpdGVIZWlnaHQgPSA0MDc7XG4gICAgY29uc3Qgcm93cyA9IDExO1xuICAgIGNvbnN0IGNvbHMgPSA3O1xuICAgIHRoaXMudHJhY2tSaWdodCA9IDE7XG4gICAgdGhpcy50cmFja0xlZnQgPSAxO1xuICAgIHRoaXMud2lkdGggPSBzcHJpdGVXaWR0aCAvIGNvbHM7XG4gICAgdGhpcy5oZWlnaHQgPSBzcHJpdGVIZWlnaHQgLyByb3dzO1xuICAgIHRoaXMuY3VyRnJhbWUgPSAwO1xuICAgIHRoaXMub2xkRnJhbWUgPSAwO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDY7XG4gICAgdGhpcy54ID0gMjIwO1xuICAgIHRoaXMueSA9IDMxMDtcbiAgICB0aGlzLnNyY1g9IDA7XG4gICAgdGhpcy5zcmNZPSB0aGlzLnRyYWNrUmlnaHQgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLnNwZWVkWCA9IDE1O1xuICAgIHRoaXMuc3BlZWRZID0gMTU7XG4gICAgdGhpcy5jaGFyYWN0ZXIuc3JjID0gXCJkaXN0L2ltYWdlcy9hZHZlbnR1cmVyLVNoZWV0LnBuZ1wiO1xuICB9XG4gIG1haW5Mb29wKHRpbWUpe1xuICAgIHRoaXMudXBkYXRlRnJhbWUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuZnJhbWVDb3VudCwgdGhpcy50cmFja0xlZnQsIHRoaXMudHJhY2tSaWdodClcbiAgICBpZiAodGhpcy5mYWNpbmdMZWZ0ID09PSB0cnVlKXtcbiAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNoYXJhY3RlciwgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAoLXRoaXMueCAtICh0aGlzLndpZHRoICogMikpLCB0aGlzLnksIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xuICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpOyAgICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2hhcmFjdGVyLCB0aGlzLnNyY1gsIHRoaXMuc3JjWSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoKjIsIHRoaXMuaGVpZ2h0KjIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSl7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm1haW5Mb29wLmJpbmQodGhpcykpXG4gICAgICB9LCAxMDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tYWluTG9vcC5iaW5kKHRoaXMpKVxuICAgICAgfSwgNDApXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRnJhbWUod2lkdGgsIGhlaWdodCwgZnJhbWVDb3VudCwgdHJhY2tMZWZ0LCB0cmFja1JpZ2h0KXtcbiAgICB0aGlzLm9sZEZyYW1lID0gdGhpcy5vbGRGcmFtZSArIDE7XG4gICAgXG4gICAgdGhpcy5jdXJGcmFtZSA9ICh0aGlzLmN1ckZyYW1lICsgMSkgJSBmcmFtZUNvdW50O1xuICAgIHRoaXMuc3RpbGxGcmFtZSA9IE1hdGguZmxvb3IoKHRoaXMub2xkRnJhbWUgJSA5KSAvIDMpXG4gICAgdGhpcy5zcmNYID0gdGhpcy5jdXJGcmFtZSAqIHdpZHRoICsgd2lkdGg7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMueCwgdGhpcy55LCB3aWR0aCAqIDIsIGhlaWdodCAqIDIpO1xuICAgIHRoaXMubGV2ZWwudXBkYXRlU2NlbmUodGhpcy54LCB0aGlzLnksIHRoaXMub2xkRnJhbWUpO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMubGVmdCAmJiB0aGlzLmxldmVsLmRpc2FibGVkID09PSBmYWxzZSAmJiAodGhpcy54ID4gLTIwIHx8ICh0aGlzLmxldmVsLnJvb20gIT0xICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSkpe1xuICAgICAgdGhpcy5zcGVlZFggPSAxNTtcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkWDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucmlnaHQgJiYgdGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gZmFsc2UgJiYgKHRoaXMueCA8IDYyMCB8fCAodGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDYpKSAmJiAodGhpcy5sZXZlbC5yb29tICAhPSA3IHx8IHRoaXMueCA8ICh0aGlzLmxldmVsLnByaW5jZXNzWCAtIDg2KSB8fCB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpKXtcbiAgICAgIHRoaXMuc3BlZWRYID0gMTU7XG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLmluQWlyID09PSB0cnVlKXtcbiAgICAgIHRoaXMuc3BlZWRZID0gMTVcbiAgICAgIGlmICgzMTAgLSB0aGlzLnkgPiB0aGlzLnNwZWVkWSB8fCAodGhpcy5sZXZlbC5yb29tICE9IDEgJiYgdGhpcy5sZXZlbC5yb29tICE9IDcgJiYgdGhpcy5sZXZlbC5yb29tICE9IDI1ICYmIHRoaXMubGV2ZWwucm9vbSAhPSAwICYmIHRoaXMuc3VwZXJNb2RlID09PSBmYWxzZSkpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnkgKz0gMzEwIC0gdGhpcy55O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmp1bXBpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuanVtcEhlaWdodCArPSAzMFxuICAgICAgdGhpcy55IC09IDMwO1xuICAgICAgaWYgKHRoaXMuanVtcEhlaWdodCA+IDEzMCl7XG4gICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgdGhpcy5qdW1wSGVpZ2h0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMueCA+IDY3MCAmJiB0aGlzLmxldmVsLnJvb20gIT0gNyAmJiB0aGlzLmxldmVsLnJvb20gIT0gNil7IFxuICAgICAgdGhpcy5zY3JvbGxSaWdodCgpO1xuICAgICAgdGhpcy54ID0gLTIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy54IDwgLTIwICYmIHRoaXMubGV2ZWwucm9vbSAhPSAxICYmIHRoaXMubGV2ZWwucm9vbSAhPSA3KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQoKTtcbiAgICAgIHRoaXMueCA9IDY0MDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsLnBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLnBsYXRmb3Jtc1tpXSlcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgfHwgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInRvcFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJib3R0b21cIikge1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XG4gICAgICAgIHRoaXMuc3RpbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLmluQWlyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5sZXZlbC5pdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBjb2xsaXNpb25OYW1lID0gdGhpcy5jb2xsaXNpb25DaGVjayh0aGlzLmxldmVsLml0ZW1zW2ldKVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MVwiKXtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTEgPSB0cnVlO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNjAwLCAyNDAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwia2V5MlwiKSB7XG4gICAgICAgIHRoaXMubGV2ZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDM4NSwgMjUwLCAzMCwgMzApO1xuICAgICAgICB0aGlzLmxldmVsLmtleUNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwuZm91bmRLZXkyID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGlzaW9uTmFtZSA9PT0gXCJrZXkzXCIpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMzg1LCAyNTAsIDMwLCAzMCk7XG4gICAgICAgIHRoaXMubGV2ZWwua2V5Q291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3VuZEtleTMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb25OYW1lID09PSBcImtleTRcIikge1xuICAgICAgICB0aGlzLmxldmVsLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjUsIDM0MCwgMzAsIDMwKTtcbiAgICAgICAgdGhpcy5sZXZlbC5rZXlDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmxldmVsLmZvdW5kS2V5NCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxpc2lvbk5hbWUgPT09IFwiZmlyZWJhbGxcIil7XG4gICAgICAgIHRoaXMubGV2ZWwubGl2ZXMgLT0gMTtcbiAgICAgICAgdGhpcy55ID0gMTA7XG4gICAgICAgIHRoaXMueCA9IDIwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnkgPiA1MDAgKXtcbiAgICAgIHRoaXMubGV2ZWwubGl2ZXMgLT0gMTtcbiAgICAgIHRoaXMueSA9IDEwO1xuICAgICAgdGhpcy54ID0gMjA7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGV2ZWwubGl2ZXMgPT09IDApe1xuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgIH1cblxuXG5cbiAgICBpZiAodGhpcy55ID09PSAzMTApIHRoaXMuaW5BaXIgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbkFpciA9PT0gdHJ1ZSkgdGhpcy5zcmNZID0gaGVpZ2h0ICogMjtcbiAgICBlbHNlIGlmICh0aGlzLmxlZnQgPT09IHRydWUpIHRoaXMuc3JjWSA9IHRyYWNrTGVmdCAqIGhlaWdodDtcbiAgICBlbHNlIGlmICh0aGlzLnJpZ2h0ID09PSB0cnVlKSB0aGlzLnNyY1kgPSB0cmFja1JpZ2h0ICogaGVpZ2h0O1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zcmNYID0gKHRoaXMuc3RpbGxGcmFtZSkgKiB3aWR0aDsgXG4gICAgICB0aGlzLnNyY1kgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZXZlbC5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmxldmVsLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpe1xuICAgICAgdGhpcy5zcmNYID0gKCh0aGlzLnN0aWxsRnJhbWUgJSA0KSArICAzKSAqIHdpZHRoO1xuICAgICAgdGhpcy5zcmNZID0gNSAqIGhlaWdodFxuICAgIH1cblxuICAgIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLmtpbGwgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPT09IGZhbHNlKXtcbiAgICAgIHRoaXMuc3JjWCA9ICh0aGlzLnN0aWxsRnJhbWUpICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA3ICogaGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuc3RpbGxGcmFtZSA9PT0gMil7XG4gICAgICAgIHRoaXMuc3dvcmRTd2lwZSArPSAxXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zd29yZFN3aXBlID09PSA4KXtcbiAgICAgICAgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmxldmVsLmRpc2FibGVkID09PSB0cnVlICYmIHRoaXMubGV2ZWwucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSAmJiB0aGlzLnNhdmUgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0RlYWQgPT09IGZhbHNlKXtcbiAgICAgIHRoaXMuc3JjWCA9ICh0aGlzLnN0aWxsRnJhbWUpICogd2lkdGg7XG4gICAgICB0aGlzLnNyY1kgPSA5ICogaGVpZ2h0O1xuICAgIH1cbiAgfVxuICBcbiAgbW92ZUxlZnQoKXtcbiAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnN0aWxsID0gZmFsc2U7XG4gICAgdGhpcy5mYWNpbmdMZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpe1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICB0aGlzLmZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGp1bXAoKXtcbiAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW5BaXIgPSB0cnVlO1xuICAgIHRoaXMuc3RpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRLZXlIYW5kbGVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLm1vdmVSaWdodCgpO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIiB8fCBlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5tb3ZlTGVmdCgpO1xuICB9XG4gIGlmICgoZS5rZXkgPT09IFwid1wiIHx8IGUua2V5Q29kZSA9PT0gMzgpICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiAodGhpcy55ID09PSAzMTAgfHwgdGhpcy5zcGVlZFkgPT09IDApICYmIHRoaXMueSA8PSAzMTApIHtcbiAgICB0aGlzLmp1bXAoKTtcbiAgfVxuXG4gIGlmIChlLmtleSA9PT0gXCJjXCIgJiYgdGhpcy5sZXZlbC5yb29tID09PSA2ICYmIHRoaXMueCA+IDI2MCAmJiB0aGlzLnggPCAzNTAgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMuZm91bmRLZXlzKCkgPT09IHRydWUpe1xuICAgIHRoaXMuZW50ZXIoKTtcbiAgfVxuXG4gIGlmIChlLmtleSA9PT0gXCJjXCIgJiYgdGhpcy5sZXZlbC5yb29tID09PSAyNSAmJiBlLnJlcGVhdCA9PT0gZmFsc2Upe1xuICAgIHRoaXMucmVzdGFydCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcInZcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDI1ICYmIGUucmVwZWF0ID09PSBmYWxzZSAmJiB0aGlzLmxldmVsLnJlYWNoZWRMZXZlbDcgPT09IHRydWUpIHtcbiAgICB0aGlzLnJlc3RhcnRGaW5hbCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDAgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgaWYgKGUua2V5ID09PSBcImNcIiAmJiB0aGlzLmxldmVsLnJvb20gPT09IDcgJiYgZS5yZXBlYXQgPT09IGZhbHNlICYmIHRoaXMubGV2ZWwuZGlzYWJsZWQgPT09IHRydWUgJiYgdGhpcy5sZXZlbC5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlKSB7XG4gICAgdGhpcy5raWxsID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICgoZS5rZXkgPT09IFwicFwiKSAmJiB0aGlzLmxldmVsLnJvb20gPT09IDEgJiYgZS5yZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnN1cGVyTW9kZSA9ICF0aGlzLnN1cGVyTW9kZTtcbiAgICB9XG5cbn1cblxuIGtleVVwSGFuZGxlcihlKSB7XG4gICBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbiAgIGVsc2UgaWYgKGUua2V5ID09PSBcImFcIiB8fCBlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5zdGlsbCA9IHRydWU7XG4gIH1cbn1cblxuZm91bmRLZXlzKCl7XG4gIHJldHVybiB0aGlzLmxldmVsLmZvdW5kS2V5MSAmJiB0aGlzLmxldmVsLmZvdW5kS2V5MiAmJiB0aGlzLmxldmVsLmZvdW5kS2V5MyAmJiB0aGlzLmxldmVsLmZvdW5kS2V5NFxufVxuXG5jb2xsaXNpb25DaGVjayhwbGF0Zm9ybSl7XG4gIGNvbnN0IHZlY3RvclggPSAodGhpcy54ICsgKHRoaXMud2lkdGgpKSAtIChwbGF0Zm9ybS54ICsgKHBsYXRmb3JtLndpZHRoIC8gMikpO1xuICBjb25zdCB2ZWN0b3JZID0gKHRoaXMueSArICh0aGlzLmhlaWdodCkpIC0gKHBsYXRmb3JtLnkgKyAocGxhdGZvcm0uaGVpZ2h0IC8gMikpO1xuXG4gIGNvbnN0IGNlbnRlcldpZHRocyA9ICh0aGlzLndpZHRoLzIpICsgKHBsYXRmb3JtLndpZHRoIC8gMik7XG4gIGNvbnN0IGNlbnRlckhlaWdodHMgPSAodGhpcy5oZWlnaHQpICsgKHBsYXRmb3JtLmhlaWdodCAvIDIpO1xuXG5cbiAgbGV0IGNvbGxpc2lvbkRpcmVjdGlvbjtcblxuICBpZiAoTWF0aC5hYnModmVjdG9yWCkgPCBjZW50ZXJXaWR0aHMgJiYgTWF0aC5hYnModmVjdG9yWSkgPCBjZW50ZXJIZWlnaHRzKSBcbiAge1xuXG4gICAgaWYgKHBsYXRmb3JtLm5hbWUpIHJldHVybiBwbGF0Zm9ybS5uYW1lO1xuICAgIGNvbnN0IG9mZnNldFggPSBjZW50ZXJXaWR0aHMgLSBNYXRoLmFicyh2ZWN0b3JYKTtcbiAgICBjb25zdCBvZmZzZXRZID0gY2VudGVySGVpZ2h0cyAtIE1hdGguYWJzKHZlY3RvclkpO1xuXG4gICAgaWYgKG9mZnNldFggPCBvZmZzZXRZKVxuICAgICAgICBpZiAodmVjdG9yWCA+IDApe1xuICAgICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgICAgICAgdGhpcy54ICs9IG9mZnNldFg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgICAgICAgdGhpcy54IC09IG9mZnNldFg7XG4gICAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh2ZWN0b3JZID4gMCl7XG4gICAgICAgIGNvbGxpc2lvbkRpcmVjdGlvbiA9IFwidG9wXCI7XG4gICAgICAgIHRoaXMueSArPSBvZmZzZXRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGlzaW9uRGlyZWN0aW9uID0gXCJib3R0b21cIjtcbiAgICAgICAgdGhpcy55IC09IG9mZnNldFlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbGxpc2lvbkRpcmVjdGlvbjtcbn1cblxuc2Nyb2xsUmlnaHQoKXtcbiAgaWYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMjUgJiYgKHRoaXMubGV2ZWwucm9vbSAhPT0gMCAmJiB0aGlzLmxldmVsLnJvb20gIT09IDcpKSB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cblxuc2Nyb2xsTGVmdCgpe1xuICBpZiAodGhpcy5sZXZlbC5yb29tICE9PSAyNSAmJiAodGhpcy5sZXZlbC5yb29tICE9PSAwICYmIHRoaXMubGV2ZWwucm9vbSAhPT0gNykpIHRoaXMubGV2ZWwucm9vbSAtPSAxXG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5lbnRlcigpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMVxuICB0aGlzLnggPSAtMjA7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5zdGFydCgpe1xuICB0aGlzLmxldmVsLnJvb20gKz0gMTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG4gIHRoaXMueCA9IDIyMDtcbiAgdGhpcy55ID0gMzEwO1xufVxuXG5yZXNldCgpe1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbmdhbWVPdmVyKCl7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5sZXZlbC5yb29tID0gMjVcbiAgdGhpcy5sZXZlbC5hZGRTY2VuZSgpO1xufVxuXG5yZXN0YXJ0KCl7XG4gIGxldCBuZXdMZXZlbCA9IG5ldyBMZXZlbCgwLCB0aGlzLmN0eCwgdGhpcy5jYW52YXMpO1xuICB0aGlzLmxldmVsID0gbmV3TGV2ZWw7XG4gIHRoaXMuc3dvcmRTd2lwZSA9IDA7XG4gIHRoaXMua2lsbCA9IGZhbHNlO1xuICB0aGlzLnNhdmUgPSBmYWxzZTtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmxldmVsLmFkZFNjZW5lKCk7XG59XG5cbnJlc3RhcnRGaW5hbCgpe1xuICBsZXQgbmV3TGV2ZWwgPSBuZXcgTGV2ZWwoNywgdGhpcy5jdHgsIHRoaXMuY2FudmFzKTtcbiAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICB0aGlzLnN3b3JkU3dpcGUgPSAwO1xuICB0aGlzLmtpbGwgPSBmYWxzZTtcbiAgdGhpcy5zYXZlID0gZmFsc2U7XG4gIHRoaXMubGV2ZWwua2V5Q291bnQgPSA0O1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMubGV2ZWwuYWRkU2NlbmUoKTtcbn1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyIsImNvbnN0IExldmVsID0gcmVxdWlyZShcIi4vbGV2ZWxcIik7XG5jb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL2dhbWVfdmlld1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gXG4gIGxldCBsZXZlbCA9IG5ldyBMZXZlbCgwLCBjdHgsIGNhbnZhcyk7XG4gIG5ldyBHYW1lVmlldyhsZXZlbCwgY3R4LCBjYW52YXMpO1xufSk7IiwiY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihudW1iZXIsIGN0eCwgY2FudmFzKSB7XG4gICAgdGhpcy5yb29tID0gbnVtYmVyO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMucGxhdGZvcm1zID0gW107XG4gICAgdGhpcy5wbGF0Zm9ybVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMucGxhdGZvcm1QaWMuc3JjID0gXCJkaXN0L2ltYWdlcy9wbGF0Zm9ybS5wbmdcIjtcbiAgICB0aGlzLnBsYXRmb3JtV2lkdGggPSAxNTA7XG4gICAgdGhpcy5wbGF0Zm9ybUhlaWdodCA9IDIwO1xuICAgIHRoaXMuaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmhlYXJ0LnNyYyA9IFwiZGlzdC9pbWFnZXMvaGVhcnQucG5nXCI7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXkxID0gZmFsc2U7XG4gICAgdGhpcy5mb3VuZEtleTIgPSBmYWxzZTtcbiAgICB0aGlzLmZvdW5kS2V5MyA9IGZhbHNlO1xuICAgIHRoaXMuZm91bmRLZXk0ID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLnNlY29uZFNjZW5lID0gdHJ1ZTtcbiAgICB0aGlzLnByaW5jZXNzU3dvcmRDb3VudCA9IDA7XG4gICAgdGhpcy5rbmlnaHREZWFkID0gZmFsc2U7XG4gICAgdGhpcy5rZXkxID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkxLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkyID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkyLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXkzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXkzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXk0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXk0LnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5rZXlzLnNyYyA9IFwiZGlzdC9pbWFnZXMvS2V5SWNvbnMucG5nXCI7XG4gICAgdGhpcy5rZXlDb3VudCA9IDA7XG4gICAgdGhpcy5yZWFjaGVkTGV2ZWw3ID0gZmFsc2U7XG4gICAgdGhpcy5ncmVlbktuaWdodCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZ3JlZW5LbmlnaHQuc3JjID0gXCJkaXN0L2ltYWdlcy9NaXRoZXJhbEtuaWdodC5wbmdcIjtcbiAgICB0aGlzLnByaW5jZXNzID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5wcmluY2Vzcy5zcmMgPSBcImRpc3QvaW1hZ2VzL3ByaW5jZXNzLnBuZ1wiO1xuICAgIHRoaXMucHJpbmNlc3NYID0gNTAwO1xuICAgIHRoaXMuZ29sZEtuaWdodCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZ29sZEtuaWdodC5zcmMgPSBcImRpc3QvaW1hZ2VzL0dvbGRLbmlnaHQucG5nXCJcbiAgICB0aGlzLmdvbGRLbmlnaHRYID0gNzAwO1xuICAgIHRoaXMubWlzc2lsZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMubWlzc2lsZS5zcmMgPSBcImRpc3QvaW1hZ2VzL3ByaW5jZXNzLnBuZ1wiO1xuICAgIHRoaXMuZmlyZWQgPSAwO1xuICAgIHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJpbmNlc3NEZWFkID0gZmFsc2U7XG4gIH1cbiAgYWRkU2NlbmUoKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcImRpc3QvaW1hZ2VzL2xldmVsJHt0aGlzLnJvb219LnBuZ1wiYFxuICAgIHBsYXRmb3JtcyA9IHRoaXMucGxhdGZvcm1zO1xuICAgIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHBsYXRmb3JtV2lkdGggPSB0aGlzLnBsYXRmb3JtV2lkdGg7XG4gICAgcGxhdGZvcm1IZWlnaHQgPSB0aGlzLnBsYXRmb3JtSGVpZ2h0XG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMCkge1xuICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IGNvbnRyb2wgSGVucnkgd2hvIGlzIGEgY29hbCBtaW5lciBmcm9tIHRoZSBraW5nZG9tIG9mIFRyb21pZGUuXCIsIDMwLCA1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIGhhcyBhbHdheXMga2VwdCBhIGxvdyBwcm9maWxlLCBkZXRlcm1pbmVkIHRvIGRvIGhpcyBqb2IgYW5kIHRoZW4gZW5qb3kgdGhlIHBlYWNlIGFuZCBxdWlldCBvZiBoaXMgaG9tZS5cIiwgMzAsIDcwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiSGUgbmV2ZXIgbWFkZSBhbiBlZmZvcnQgdG8gYmUga25vd24gb3IgbWFrZSBmcmllbmRzLiBObyBvbmUga25ldyBoaW0gcGVyc29uYWxseSBhbmQgaGUgbGlrZWQgaXQgdGhhdCB3YXkuXCIsIDMwLCA5MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlRoZSBwcmluY2VzcyBoYXMgYmVlbiBraWRuYXBwZWQgYW5kIGFsbCBlZmZvcnRzIHRvIHNhdmUgaGVyIGhhdmUgZmFpbGVkLiBBbHRob3VnaCBIZW5yeSBoYXMgaGVhcmQgb2YgdGhlIHNpdHVhdGlvbixcIiwgMzAsIDExMCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIml0IHdhc24ndCBzb21ldGhpbmcgaGUgd2FzIGludGVyZXN0ZWQgaW4gZ2V0dGluZyBpbnZvbHZlZCBpbi4gQXMgaGUgd2FzIHdhbGtpbmcgdG8gd29yayBoZSBzYXcgYSBmbGllciBvZmZlcmluZ1wiLCAzMCwgMTMwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiYSBtYWpvciByZXdhcmQgdG8gYW55b25lIHRoYXQgY2FuIGhlbHAgc2F2ZSB0aGUgcHJpbmNlc3MuIFRoZSBvbmUgdGhpbmcgSGVucnkgZG9lcyBjYXJlIGZvciBpcyBtb25leS5cIiwgMzAsIDE1MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhlIG5lZWRzIHRvIGZpbmQgdGhlIDQga2V5cyB0byBnZXQgaW50byB0aGUgZW5lbXkgY2FzdGxlIGFuZCBzYXZlIHRoZSBwcmluY2Vzcy4gVGhpcyBpcyB3aGVyZSBoaXMgc3RvcnkgYmVnaW5zLiBcIiwgMzAsIDE3MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlVzZSB0aGUgbGVmdCwgcmlnaHQsIHVwIGFycm93IGtleXMgb3IgQSBhbmQgRCB0byBtb3ZlIGxlZnQvcmlnaHQgYW5kIFcgdG8ganVtcC4gTm90ZTogVGhlcmUgaXMgbm8gZG91YmxlIGp1bXAuXCIsIDMwLCAxOTAgKVxuICAgICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIEMgdG8gc3RhcnQuJywgMjYwLCAyMTUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yb29tID09PSAxKSB7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCItMjBweFwiO1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTEwMHB4XCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDIpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMTEwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDIwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0ICsgODAwLFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDU5MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE4MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAyMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAyMCxcbiAgICAgIH0pO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE3MCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gNDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyAzMCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSl7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkxXCIsXG4gICAgICAgICAgeDogNjAwLFxuICAgICAgICAgIHk6IDI0MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLnJvb20gPT09IDMpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIi0xMDBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDEwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSAzNDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMjAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gMTAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDM4MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDI2MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTkwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGgsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkyXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDQpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCIwcHhcIjtcblxuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NjAsXG4gICAgICAgIHk6IDE0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxNzAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDMxNSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDEyMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDEwMCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA2NTAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSA0NDAsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoIC0gNTAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJrZXkzXCIsXG4gICAgICAgICAgeDogMzg1LFxuICAgICAgICAgIHk6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNSl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBweFwiO1xuXG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDYwMCxcbiAgICAgICAgeTogNzUsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1NTAsXG4gICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIDI0MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMzAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQgKyA3MCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA0NzUsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMjAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNTMwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjQwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDIwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDE0MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDE3MCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggKyAxMDAsXG4gICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICB9KTtcbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gNTUwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICB4OiBjYW52YXMud2lkdGggLSA3MDAsXG4gICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSA1MCxcbiAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcImtleTRcIixcbiAgICAgICAgICB4OiAyMjUsXG4gICAgICAgICAgeTogMzQwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNikge1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiLTUwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjEwMHB4XCI7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNjAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMjIsXG4gICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoICsgMjAwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG5cbiAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgeDogY2FudmFzLndpZHRoIC0gNzAwLFxuICAgICAgICB5OiBjYW52YXMuaGVpZ2h0IC0gMTcwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDcwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDY3MCxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDgwLFxuICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCAtIDcwLFxuICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNyl7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblggPSBcIjBcIjtcbiAgICAgIHRoaXMucmVhY2hlZExldmVsNyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMjUpe1xuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IFwiMHB4XCI7XG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItMTAwcHhcIjtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAyMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBmYWlsZWQgdG8gc2F2ZSB0aGUgUHJpbmNlc3MuXCIsIDE3MCwgMTAwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQcmVzcyBDIHRvIHN0YXJ0IGFnYWluLicsIDIyMCwgMTUwKTtcbiAgICAgIGlmICh0aGlzLnJlYWNoZWRMZXZlbDcgPT09IHRydWUpe1xuICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ1ByZXNzIFYgdG8gc3RhcnQgZnJvbSBjYXN0bGUgc2NlbmUgYWdhaW4uJywgMTQwLCAxODApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdUZXh0Qm94KHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyl7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cy5ibCwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd1BsYXRmb3JtcygpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXRmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucGxhdGZvcm1QaWMsIDAsIDAsIDk2LCA5NiwgdGhpcy5wbGF0Zm9ybXNbaV0ueCwgdGhpcy5wbGF0Zm9ybXNbaV0ueSwgdGhpcy5wbGF0Zm9ybXNbaV0ud2lkdGgsIHRoaXMucGxhdGZvcm1zW2ldLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0l0ZW1zKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubWlzc2lsZSwgODkxICwgODIsIDgxLCA4MiwgdGhpcy5pdGVtc1tpXS54IC0gc2hpZnQsIDI5MCwgMTAwLCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdIZWFydCgpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmhlYXJ0LCAwLCAwLCAxMjUsIDEyNSwgNjUwLCAxMCwgMzAsIDMwKVxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZwdCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLmxpdmVzLCA2MzIsIDMyKTtcbiAgfVxuXG4gIGRyYXdLZXlDb3VudCgpe1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCg1NjAsIDEwLCAyMDAsIDUwKVxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleXMsIDMyLCAwLCAzMiwgMzIsIDU5MCwgMTIsIDMwLCAzMCk7XG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB0IFRpbWVzIE5ldyBSb21hbic7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMua2V5Q291bnQsIDU3MCwgMzIpO1xuICB9XG5cbiAgZHJhd19rZXkxKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMua2V5MSwgMCwgMCwgMzIsIDMyLCA2MDAsIDI0MCwgMzAsIDMwKTtcbiAgfVxuXG4gIGRyYXdfa2V5Migpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTIsIDMyLCAwLCAzMiwgMzIsIDM4NSwgMjUwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXkzKCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTMsIDY0LCAwLCAzMiwgMzIsIDM4NSwgMjUwLCAzMCwgMzApO1xuICB9XG5cbiAgZHJhd19rZXk0KCkge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmtleTQsIDk2LCAwLCAzMiwgMzIsIDIyNSwgMzQwLCAzMCwgMzApO1xuICB9XG5cbiAgdXBkYXRlU2NlbmUoeCwgeSwgY3VycmVudEZyYW1lKXtcbiAgICBsZXQgcHJpbmNlc3NDb2w7XG4gICAgbGV0IHByaW5jZXNzUm93ID0gMjtcbiAgICBsZXQga25pZ2h0Q29sO1xuICAgIGxldCBrbmlnaHRSb3c7XG5cbiAgICBpZiAodGhpcy5yb29tICE9IDAgJiYgdGhpcy5yb29tICE9IDI1KXtcbiAgICB0aGlzLmRyYXdLZXlDb3VudCgpO1xuICAgIHRoaXMuZHJhd0hlYXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm9vbSA9PT0gMSl7XG4gICAgICBpZiAoeCA8IDQwMCAmJiB4ID4gMjAwKXtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCg5MCwgMjgwLCAxMDAsIDUwLCA1KVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgOHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0dvb2QgbHVjayBIZW5yeSwnLCA5NSwgMzAwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoJ0kga25vdyB5b3UgY2FuJywgOTUsIDMxMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdkbyBpdCEnLCA5NSwgMzIwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDkwLCAyODAsIDEwMCwgNTApO1xuICAgIH1cblxuICAgICAgaWYgKHggPCA4MDAgJiYgeCA+IDUwMCl7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goNDAwLCAyNjAsIDEwMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBhcmVuJ3QgZ29pbmdcIiwgNDEwLCAyODApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgndG8gbGFzdCA1IG1pbnV0ZXMnLCA0MTAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwib3V0IHRoZXJlLlwiLCA0MTAsIDMwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNDAwLCAyNjAsIDEwMCwgNTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gMil7XG4gICAgICAgIHRoaXMuZHJhd1BsYXRmb3JtcygpO1xuICAgICAgICBpZiAodGhpcy5mb3VuZEtleTEgPT09IGZhbHNlKXtcbiAgICAgICAgICB0aGlzLmRyYXdfa2V5MSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSAzKSB7XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSB0cnVlKXtcbiAgICAgICAgcGxhdGZvcm1zLnB1c2goe1xuICAgICAgICAgIHg6IGNhbnZhcy53aWR0aCAtIDcwMCxcbiAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMzAsXG4gICAgICAgICAgd2lkdGg6IHBsYXRmb3JtV2lkdGggLSAxMDAsXG4gICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybUhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA0KSB7XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcbiAgICAgIGlmICh0aGlzLmZvdW5kS2V5MyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kcmF3X2tleTMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXRmb3Jtcy5wdXNoKHtcbiAgICAgICAgICB4OiBjYW52YXMud2lkdGggLSA1MDAsXG4gICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gMjAwLFxuICAgICAgICAgIHdpZHRoOiBwbGF0Zm9ybVdpZHRoLFxuICAgICAgICAgIGhlaWdodDogcGxhdGZvcm1IZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IHRydWUpe1xuICAgICAgICBwbGF0Zm9ybXMucHVzaCh7XG4gICAgICAgICAgeDogY2FudmFzLndpZHRoIC0gMzAwLFxuICAgICAgICAgIHk6IGNhbnZhcy5oZWlnaHQgLSAzMCxcbiAgICAgICAgICB3aWR0aDogcGxhdGZvcm1XaWR0aCArIDMwMCxcbiAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtSGVpZ2h0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbHNlIGlmICh0aGlzLnJvb20gPT09IDUpe1xuICAgICAgdGhpcy5kcmF3UGxhdGZvcm1zKCk7XG4gICAgICBpZiAodGhpcy5mb3VuZEtleTQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5kcmF3X2tleTQoKTtcbiAgICAgIH0gIFxuICAgIH1cblxuICAgIGVsc2UgaWYgKHRoaXMucm9vbSA9PT0gNil7XG4gICAgICB0aGlzLmRyYXdQbGF0Zm9ybXMoKTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRLZXkxID09PSBmYWxzZSB8fCB0aGlzLmZvdW5kS2V5MiA9PT0gZmFsc2UgfHwgdGhpcy5mb3VuZEtleTMgPT09IGZhbHNlIHx8IHRoaXMuZm91bmRLZXk0ID09PSBmYWxzZSl7XG4gICAgICAgIGNvbCA9IGN1cnJlbnRGcmFtZSAlIDEwXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzMjAsIDMxMCwgNjUsIDY1KTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ncmVlbktuaWdodCwgMzIgKiBjb2wsIDAsIDMyLCAzMiwgLTM4NSwgMzEwLCA2NSwgNjUpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjIwLCAyNzAsIDEyMCwgNTAsIDUpXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIllvdSBtdXN0IGhhdmUgYWxsIDRcIiwgMjMwLCAyOTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCgna2V5cyB0byBlbnRlciB0aGUgY2FzdGxlLicsIDIzMCwgMzAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMjAsIDI3MCwgMTIwLCA1MCk7XG4gICAgICAgIGlmICh4ID4gMjYwICYmIHggPCAzNTApe1xuICAgICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjYwLCAyNzAsIDE1MCwgMjUsIDUpO1xuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCA4cHQgQ2FsaWJyaSc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBDIHRvIGVudGVyIHRoZSBjYXN0bGUuXCIsIDI3MCwgMjkwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMjYwLCAyNzAsIDE1MCwgMjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAodGhpcy5yb29tID09PSA3KXtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAzMDAsIDEwMDAsIDEwMCk7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QodGhpcy5nb2xkS25pZ2h0WCwgMzAwLCA4NSwgODUpXG4gICAgICBpZiAodGhpcy5maXJzdFNjZW5lID09PSB0cnVlKXtcbiAgICAgICBwcmluY2Vzc0NvbCA9IDc7XG4gICAgICAgIGlmIChjdXJyZW50RnJhbWUgJSA4ID09PSAwKXtcbiAgICAgICAgIHByaW5jZXNzQ29sID0gODtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoeCA8IDI1MCAmJiB0aGlzLmZpcnN0U2NlbmUgPT09IHRydWUpe1xuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDM5MCwgMjkwLCAxNTAsIDQwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBsZWFzZSBzYXZlIG1lISBUaGVcIiwgNDAwICwgMzEwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJldmlsIGtuaWdodCBpcyBjb21pbmchXCIsIDQwMCwgMzIzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgzOTAsIDI5MCwgMTUwLCA0MCk7XG4gICAgICB9XG4gICAgICBrbmlnaHRSb3cgPSAxO1xuICAgICAgaWYgKHggPiAyNjAgfHwgdGhpcy5rbmlnaHREZWFkID09PSB0cnVlKXtcbiAgICAgICAga25pZ2h0Q29sID0gKGN1cnJlbnRGcmFtZSkgJSAxMDtcbiAgICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNTApIHtcbiAgICAgICAgICB0aGlzLmdvbGRLbmlnaHRYIC09IDU7XG4gICAgICAgICAga25pZ2h0Um93ID0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoLTEsIDEpO1xuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPiAxKSB7XG4gICAgICAgICAga25pZ2h0Um93ID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrbmlnaHRSb3cgPT09IDQgJiYga25pZ2h0Q29sID09PSA5KXtcbiAgICAgICAgICB0aGlzLmtuaWdodERlYWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAga25pZ2h0Q29sID0gOTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmdvbGRLbmlnaHQsIDMyICoga25pZ2h0Q29sLCBrbmlnaHRSb3cgKiAzMiwgMzIsIDMyLCAtdGhpcy5nb2xkS25pZ2h0WCAtIDg1LCAzMDAsIDg1LCA4NSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKC0xLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ29sZEtuaWdodFggPiAzNjAgJiYgdGhpcy5nb2xkS25pZ2h0WCA8IDYwMClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5kcmF3VGV4dEJveCgxMzAsIDI1MCwgMTgwLCA1MCwgNSk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJIZXkgeW91IGJpZyBkdW1teS4gWW91XCIsIDE0MCwgMjcyKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJiZXR0ZXIgbGV0IHRoZSBwcmluY2VzcyBnbyFcIiwgMTQwLCAyODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nb2xkS25pZ2h0WCA9PT0gMzUwICYmIHRoaXMucHJpbmNlc3NYICE9IDM5MCAmJiB0aGlzLmtuaWdodERlYWQgPT09IGZhbHNlKXtcbiAgICAgICAgdGhpcy5maXJzdFNjZW5lID0gZmFsc2U7XG4gICAgICAgIHByaW5jZXNzQ29sID0gY3VycmVudEZyYW1lICUgMjtcbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NYID4gMzkwICYmIHRoaXMua25pZ2h0RGVhZCA9PT0gZmFsc2Upe1xuICAgICAgICB0aGlzLnByaW5jZXNzWCAtPSA1O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgxMzAsIDI1MCwgMTgwLCA1NSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHRCb3goMjEwLCAyMzAsIDE3MCwgNTAsIDUpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiVGhhbmsgZ29kIHlvdSBhcmUgaGVyZS5cIiwgMjIwLCAyNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkV2ZXJ5b25lIGhhcyBpdCBhbGwgd3JvbmcuLi5cIiwgMjIwLCAyNjUpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5wcmluY2VzcywgODEgKiBwcmluY2Vzc0NvbCwgcHJpbmNlc3NSb3cgKiA4MiwgODEsIDgyLCB0aGlzLnByaW5jZXNzWCwgMzAwLCA4NSwgODUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcmluY2Vzc1ggPT09IDM5MCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgyMTAsIDIzMCwgMTcwLCA4MCk7XG4gICAgICAgIGlmICh0aGlzLnNlY29uZFNjZW5lID09PSB0cnVlKXtcbiAgICAgICAgICBwcmluY2Vzc0NvbCA9IE1hdGguZmxvb3IoKGN1cnJlbnRGcmFtZSAlIDE3KSAvIDQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gTWF0aC5mbG9vcigoY3VycmVudEZyYW1lICUgMjApIC8gMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmluY2Vzc0NvbCA9PT0gNCl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSAwO1xuICAgICAgICAgIHRoaXMucHJpbmNlc3NTd29yZENvdW50ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmluY2Vzc1N3b3JkQ291bnQgPT09IDIpe1xuICAgICAgICAgIHRoaXMuc2Vjb25kU2NlbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdUZXh0Qm94KDQ2MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDEwcHQgQ2FsaWJyaSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkhvdyBjdXRlLiBZb3UgdGhvdWdodCBJIHdhc1wiLCA0NzAsIDI5MCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhlIG9uZSB0aGF0IG5lZWRlZCBzYXZpbmcuXCIsIDQ3MCwgMzA1KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSAqIHByaW5jZXNzQ29sLCBwcmluY2Vzc1JvdyAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmtuaWdodERlYWQgPT09IHRydWUgJiYgdGhpcy5wcmluY2Vzc1ggPCA2NTApe1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoNDYwLCAyNzAsIDE4MCwgNjApXG4gICAgICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTUpXG4gICAgICAgIGlmICh0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUpe1xuICAgICAgICAgIHJhbmQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHByaW5jZXNzQ29sID0gOVxuICAgICAgICBpZiAocmFuZCUyID09PSAwICYmIHRoaXMucHJpbmNlc3NYIDwgNDYwKXtcbiAgICAgICAgICB0aGlzLnByaW5jZXNzWCArPSByYW5kO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnByaW5jZXNzWCA+IDApe1xuICAgICAgICAgICAgIHRoaXMucHJpbmNlc3NYIC09IHJhbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmluY2Vzc1ggKz0gcmFuZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NEaXNhYmxlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgcHJpbmNlc3NDb2wgPSBNYXRoLmZsb29yKChjdXJyZW50RnJhbWUgJSAxMCkvNSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbmQyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjUwKTtcbiAgICAgICAgaWYgKChjdXJyZW50RnJhbWUgJSAzMCA9PT0gMCB8fCByYW5kMiA9PT0gMCkgJiYgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSBmYWxzZSl7XG4gICAgICAgICAgdGhpcy5maXJlZCArPSAxO1xuICAgICAgICAgIHByaW5jZXNzQ29sID0gMTBcbiAgICAgICAgICBsZXQgZmFjaW5nTGVmdFxuICAgICAgICAgIGlmICh4IDwgdGhpcy5wcmluY2Vzc1gpe1xuICAgICAgICAgICAgZmFjaW5nTGVmdCA9IHRydWU7XG4gICAgICAgICAgICBzaGlmdCA9IDU1XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZhY2luZ0xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNoaWZ0ID0gMFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogXCJmaXJlYmFsbFwiLFxuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICB5OiAzNTUsXG4gICAgICAgICAgICB4OiB0aGlzLnByaW5jZXNzWCArIHNoaWZ0LFxuICAgICAgICAgICAgbGVmdDogZmFjaW5nTGVmdCxcbiAgICAgICAgICAgIHNoaWZ0OiBzaGlmdFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJpbmNlc3NEZWFkID09PSBmYWxzZSl7XG4gICAgICAgIGlmICh4IDwgdGhpcy5wcmluY2Vzc1gpe1xuICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgdGhpcy5wcmluY2Vzc1gsIDMwMCwgODUsIDg1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucHJpbmNlc3MsIDgxICogcHJpbmNlc3NDb2wsIHByaW5jZXNzUm93ICogODIsIDgxLCA4MiwgLXRoaXMucHJpbmNlc3NYIC0gODUsIDMwMCwgODUsIDg1KTtcbiAgICAgICAgICB0aGlzLmN0eC5zY2FsZSgtMSwgMSk7XG4gICAgICAgIH1cbiAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0ubGVmdCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgIHRoaXMuaXRlbXNbaV0ueCAtPSAxMDtcbiAgICAgICAgIH1cbiAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnggKz0gMTA7XG4gICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiA0MCkge1xuICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKDYsIDQxKVxuICAgICAgICB9XG4gICAgICAgdGhpcy5kcmF3SXRlbXMoY3VycmVudEZyYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMua25pZ2h0RGVhZCA9PT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5maXJlZCA9PT0gMTApe1xuICAgICAgdGhpcy5wcmluY2Vzc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlyZWQgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcmluY2Vzc0Rpc2FibGVkID09PSB0cnVlICYmIE1hdGguYWJzKHRoaXMucHJpbmNlc3NYIC0geCkgPiA3MCl7XG4gICAgICB0aGlzLmRyYXdUZXh0Qm94KHRoaXMucHJpbmNlc3NYICsgNTAsIDI3MCwgMTgwLCA1MCwgNSk7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMTBwdCBDYWxpYnJpJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJMb29rcyBsaWtlIEkgd2lsbCBoYXZlIHRvIGRvXCIsIHRoaXMucHJpbmNlc3NYICsgNjAsIDI5MCk7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcInRoaXMgdGhlIGhhcmQgd2F5XCIsIHRoaXMucHJpbmNlc3NYICsgNjAsIDMwNSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJpbmNlc3NEZWFkID09PSBmYWxzZSAmJiB0aGlzLnByaW5jZXNzRGlzYWJsZWQgPT09IHRydWUgJiYgTWF0aC5hYnModGhpcy5wcmluY2Vzc1ggLSB4KSA8IDcwKXtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KHRoaXMucHJpbmNlc3NYICsgNTAsIDI3MCwgMTgwLDUwKTtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3goeCAtIDE2MCwgMjcwLCAxODAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkxvb2tzIGxpa2UgSSB3aWxsIGhhdmUgdG8gZG9cIiwgeCAtIDE1MCwgMjkwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwidGhpcyB0aGUgZWFzeSB3YXlcIiwgeCAtIDE1MCwgMzA1KTtcbiAgICAgIHRoaXMuZHJhd1RleHRCb3goeCAtIDE2MCwgMTQwLCAyNTAsIDUwLCA1KTtcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAxMHB0IENhbGlicmknO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIEMgdG8ga2lsbCB0aGUgcHJpbmNlc3NcIiwgeCAtIDE1MCwgMTYwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgViB0byByZXR1cm4gdGhlIHByaW5jZXNzIHRvIFRyb21pZGVcIiwgeCAtIDE1MCwgMTc1KTtcbiAgICB9XG5cbiAgIGlmICh0aGlzLnByaW5jZXNzRGVhZCA9PT0gdHJ1ZSl7XG4gICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA3MDAsIDQwMCk7XG4gICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnByaW5jZXNzLCA4MSogOCwgMiAqIDgyLCA4MSwgODIsIHRoaXMucHJpbmNlc3NYLCAzMDAsIDg1LCA4NSk7XG4gICB9XG5cblxufVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=