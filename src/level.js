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
    this.foundKey1 = false;
    this.foundKey2 = false;
    this.key1 = new Image();
    this.key1.src = "images/KeyIcons.png"
    this.key2 = new Image();
    this.key2.src = "images/KeyIcons.png"
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
        name: "key1",
        x: 600,
        y: 270,
        width: 30,
        height: 30
      })

    } else if (this.room === 3){
      this.canvas.style.backgroundPositionY = "-50px";
      this.canvas.style.backgroundPositionX = "-100px";

      platforms.push({
        x: canvas.width - 700,
        y: 70,
        width: platformWidth + 100,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 100,
        y: this.canvas.height - 170,
        width: platformWidth,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 340,
        y: canvas.height - 120,
        width: platformWidth - 100,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 380,
        y: canvas.height - 260,
        width: platformWidth,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 590,
        y: canvas.height - 200,
        width: platformWidth,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 700,
        y: canvas.height - 40,
        width: platformWidth,
        height: platformHeight,
      });

      this.items.push({
        name: "key2",
        x: 385,
        y: 250,
        width: 30,
        height: 30
      })
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

    for (let i = 0; i < platforms.length; i++) {
      this.ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
    }
  }

  draw_key1(){
    this.ctx.drawImage(this.key1, 0, 0, 32, 32, 600, 270, 30, 30);
  }

  draw_key2(){
    this.ctx.drawImage(this.key2, 32, 0, 32, 32, 385, 250, 30, 30);
  }

  updateScene(x, y){
    if (this.room === 1){
      if (x < 400 && x > 200){
      this.drawTextBox(90, 280, 100, 50, 5)
      this.ctx.font = 'bold 8pt Calibri';
      this.ctx.fillStyle = "black"
      this.ctx.fillText('Good luck Henry,', 95, 300);
      this.ctx.fillText('I know you can', 95, 310);
      this.ctx.fillText('do it!', 95, 320);
    } else {
      this.ctx.clearRect(90, 280, 100, 50);
    }

      if (x < 800 && x > 500){
        this.drawTextBox(400, 260, 100, 50, 5)
        this.ctx.font = 'bold 8pt Calibri';
        this.ctx.fillStyle = "black"
        this.ctx.fillText("You aren't going", 410, 280);
        this.ctx.fillText('to last 5 minutes', 410, 290);
        this.ctx.fillText("out there.", 410, 300);
      } else {
        this.ctx.clearRect(400, 260, 100, 50);
      }
    }

    else if (this.room === 2){
        this.draw_platforms();
        if (this.foundKey1 === false){
          this.draw_key1();
        }
    }

    else if (this.room === 3) {
      this.draw_platforms();
      if (this.foundKey2 === false) {
        this.draw_key2();
      }

      if (this.foundKey1 === true){
        platforms.push({
          x: canvas.width - 700,
          y: this.canvas.height - 130,
          width: platformWidth - 100,
          height: platformHeight,
        });
      }
    }
}
}

module.exports = Level;


