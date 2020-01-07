const GameView = require("./game_view");


class Level {
  constructor(number, ctx, canvas) {
    this.items = [];
    this.room = number;
    // this.backgroundCanvas = document.getElementById("myCanvas2");
    // this.backgroundCtx = this.backgroundCanvas.getContext("2d");
    this.canvas = canvas
  }
  addScene() {
    // this.backgroundCtx.drawImage(this.canvas, 0, 0);
    if (this.room === 1) {
      // this.drawCastle();
    }
  }
  drawCastle() {
    const img = new Image();
    img.onload = () => {
    // this.backgroundCtx.drawImage(img, 100, 50, 800, 800, 0, 0, 800, 800);
    };
    img.src = "images/castleScene.png";

  }

}

module.exports = Level;


