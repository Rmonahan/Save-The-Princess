const GameView = require("./game_view");


class Level {
  constructor(number, ctx, canvas) {
    this.room = number;
    this.ctx = ctx;
    this.items = [];
    this.canvas = canvas
    this.platforms = [];
    this.platformWidth = 150;
    this.platformHeight = 20;
    this.foundKey = false;
    this.key = new Image();
    this.key.src = "images/KeyIcons.png"
  }
  addScene() {
    this.canvas.style.backgroundImage = `url("images/level${this.room}.png"`
    platforms = this.platforms;
    canvas = this.canvas;
    platformWidth = this.platformWidth;
    platformHeight = this.platformHeight
    if (this.room === 1) {
      this.canvas.style.backgroundPositionY = "-20px";
      this.canvas.style.backgroundPostionX = "-100px";
    } else if (this.room === 2){
      this.canvas.style.backgroundPositionY = "110px";
      this.canvas.style.backgroundPositionX = "-100px";

      platforms.push({
        x: canvas.width - 200,
        y: 70,
        width: platformWidth + 100,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 200,
        y: 70,
        width: platformWidth - 120,
        height: platformHeight + 800,
      });
      platforms.push({
        x: canvas.width - 380,
        y: canvas.height - 120,
        width: platformWidth,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 380,
        y: canvas.height - 240,
        width: platformWidth,
        height: platformHeight,
      });

      platforms.push({
        x: canvas.width - 590,
        y: canvas.height - 180,
        width: platformWidth,
        height: platformHeight,
      });

      this.items.push({
        name: "key",
        x: 600,
        y: 270,
        width: 30,
        height: 30
      })

    } else if (this.room === 3){
      this.canvas.style.backgroundPositionY = "-50px";
      this.canvas.style.backgroundPositionX = "-100px";
    }
    
    
    else if (this.room === 4){
      this.canvas.style.backgroundPositionY = "-50px";
      this.canvas.style.backgroundPositionX = "100px";
    }
    
    else if (this.room === 5){
      this.canvas.style.backgroundPositionY = "40px";
      this.canvas.style.backgroundPostionX = "-100px";
    }
  }

  drawTextBox(x, y, width, height, radius){
    const ctx = this.ctx;
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

  draw_platforms() {
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "red";

    for (let i = 0; i < platforms.length; i++) {
      this.ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
    }
  }

  draw_key(){
    this.ctx.drawImage(this.key, 0, 0, 32, 32, 600, 270, 30, 30);
  }

  updateScene(x, y){
    if (this.room === 1){
      if (x < 400 && x > 200){
      this.drawTextBox(90, 280, 100, 50, 5)
      this.ctx.font = 'bold 6pt Calibri';
      this.ctx.fillStyle = "black"
      this.ctx.fillText('Good luck Henry, I know', 93, 300);
      this.ctx.fillText('you can do it!', 93, 310);
    } else {
      this.ctx.clearRect(90, 280, 100, 50);
    }

      if (x < 800 && x > 500){
        this.drawTextBox(400, 260, 100, 50, 5)
        this.ctx.font = 'bold 6pt Calibri';
        this.ctx.fillStyle = "black"
        this.ctx.fillText("You aren't going to last", 410, 280);
        this.ctx.fillText('5 minutes out there.', 410, 290);
      } else {
        this.ctx.clearRect(400, 260, 100, 50);
      }
    }

    else if (this.room === 2){
        this.draw_platforms();
        if (this.foundKey === false){
          this.draw_key();
        }
    }
}
}

module.exports = Level;


