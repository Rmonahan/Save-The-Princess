class GameView {
  constructor(level, ctx) {
    this.ctx = ctx;
    this.level = level;
    this.mainCharacter = this.createMainCharacter();
    this.bindKeyHandlers();
  }
  bindKeyHandlers() {
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
  }
  createMainCharacter() {
    const img = new Image();
    img.onload = () => {
      this.ctx.drawImage(img, 100, 100);
    };
    img.src = "images/MainCharacterImages/adventurer-attack1-00.png"
  }
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


module.exports = GameView;