function GameView(level, ctx) {
  this.ctx = ctx;
  this.level = level;
  this.mainCharacter = this.game.createMainCharacter();
  this.bindKeyHandlers;
}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};


GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
  const mainCharacter = this.mainCharacter;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);  
}

function keyDownHandler(e) {
  if (e.key == "d") {
    rightPressed = true;
  }
  else if (e.key == "a") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "d") {
    rightPressed = true;
  }
  else if (e.key == "a") {
    leftPressed = true;
  }
}

GameView.protoype.animate 
