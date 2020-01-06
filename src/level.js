const GameView = require("./game_view");


class Level {
  constructor(number, ctx) {
    this.items = [];
    this.room = number;
    this.ctx = ctx;
    this.addScene();
  }
  addScene() {
    if (this.room === 1) {
      this.drawCastle();
    }
  }
  drawCastle() {
    const img = new Image();
    img.onload = () => {
    this.ctx.drawImage(img, 100, 50, 800, 800, 0, 0, 800, 800);
    };
    img.src = "images/castleScene.png";

  }
}

module.exports = Level;


