class Level {
  constructor(number, ctx, canvas) {
    this.room = number;
    this.ctx = ctx;
    this.items = [];
    this.canvas = canvas
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
    this.greenKnight = new Image();
    this.greenKnight.src = "dist/images/MitheralKnight.png";
    this.princess = new Image();
    this.princess.src = "dist/images/princess.png";
    this.goldKnight = new Image();
    this.goldKnight.src = "dist/images/GoldKnight.png"
    this.goldKnightX = 700;
  }
  addScene() {
    this.canvas.style.backgroundImage = `url("dist/images/level${this.room}.png"`
    platforms = this.platforms;
    canvas = this.canvas;
    platformWidth = this.platformWidth;
    platformHeight = this.platformHeight
    if (this.room === 0) {
      this.ctx.font = 'bold 10pt Calibri';
      this.ctx.fillStyle = "white"
      this.ctx.fillText("You control Henry who is a coal miner from the kingdom of Tromide.", 30, 50);
      this.ctx.fillText("He has always kept a low profile, determined to do his job and then enjoy the peace and quiet of his home.", 30, 70);
      this.ctx.fillText("He never made an effort to be known or make friends. No one knew him personally and he liked it that way.", 30, 90);
      this.ctx.fillText("The princess has been kidnapped and all efforts to save her have failed. Although Henry has heard of the situation,", 30, 110);
      this.ctx.fillText("it wasn't something he was interested in getting involved in. As he was walking to work he saw a flier offering", 30, 130);
      this.ctx.fillText("a major reward to anyone that can help save the princess. The one thing Henry does care for is money.", 30, 150);
      this.ctx.fillText("He needs to find the 4 keys to get into the enemy castle and save the princess. This is where his story begins. ", 30, 170);
      this.ctx.font = '16pt Calibri';
      this.ctx.fillStyle = "white"
      this.ctx.fillText('Press Spacebar to start.', 230, 215);
    }
    if (this.room === 1) {
      this.canvas.style.backgroundPositionY = "-20px";
      this.canvas.style.backgroundPositionX = "-100px";
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
        x: canvas.width - 390,
        y: canvas.height - 120,
        width: platformWidth,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 390,
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

      platforms.push({
        x: 0,
        y: this.canvas.height - 30,
        width: platformWidth + 200,
        height: platformHeight + 20,
      });

      platforms.push({
        x: canvas.width - 170,
        y: this.canvas.height - 40,
        width: platformWidth + 20,
        height: platformHeight + 30,
      });
      if (this.foundKey1 === false){
        this.items.push({
          name: "key1",
          x: 600,
          y: 240,
          width: 30,
          height: 30
        })
      }

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
      if (this.foundKey2 === false)
        this.items.push({
          name: "key2",
          x: 385,
          y: 250,
          width: 30,
          height: 30
        })
    }
    
    else if (this.room === 4){
      this.canvas.style.backgroundPositionY = "0px";
      this.canvas.style.backgroundPositionX = "0px";

      platforms.push({
        x: canvas.width - 660,
        y: 140,
        width: platformWidth - 100,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 700,
        y: this.canvas.height - 170,
        width: platformWidth,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 315,
        y: canvas.height - 120,
        width: platformWidth - 120,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 200,
        y: canvas.height - 170,
        width: platformWidth + 100,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 650,
        y: canvas.height - 440,
        width: platformWidth - 50,
        height: platformHeight,
      });
      if (this.foundKey3 === false)
        this.items.push({
          name: "key3",
          x: 385,
          y: 250,
          width: 30,
          height: 30
        })
      }
    
    else if (this.room === 5){
      this.canvas.style.backgroundPositionY = "0px";
      this.canvas.style.backgroundPositionX = "0px";

      platforms.push({
        x: canvas.width - 600,
        y: 75,
        width: platformWidth,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 700,
        y: this.canvas.height - 170,
        width: platformWidth,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 550,
        y: this.canvas.height - 240,
        width: platformWidth - 130,
        height: platformHeight + 70,
      });
      platforms.push({
        x: canvas.width - 475,
        y: canvas.height - 30,
        width: platformWidth - 120,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 530,
        y: canvas.height - 240,
        width: platformWidth - 20,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 140,
        y: canvas.height - 170,
        width: platformWidth + 100,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 300,
        y: canvas.height - 550,
        width: platformWidth,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 700,
        y: canvas.height - 30,
        width: platformWidth - 50,
        height: platformHeight,
      });

      if (this.foundKey4 === false){
        this.items.push({
          name: "key4",
          x: 225,
          y: 340,
          width: 30,
          height: 30
        })
      }
    }
    else if (this.room === 6) {
      this.canvas.style.backgroundPositionY = "-50px";
      this.canvas.style.backgroundPositionX = "100px";

      platforms.push({
        x: canvas.width - 600,
        y: canvas.height - 22,
        width: platformWidth + 200,
        height: platformHeight,
      });

      platforms.push({
        x: canvas.width - 700,
        y: canvas.height - 170,
        width: platformWidth - 70,
        height: platformHeight,
      });
      platforms.push({
        x: canvas.width - 670,
        y: canvas.height - 80,
        width: platformWidth - 70,
        height: platformHeight,
      });
    }
    
    else if (this.room === 7){
      this.canvas.style.backgroundPositionY = "0px";
      this.canvas.style.backgroundPositionX = "0";
    }
    else if (this.room === 25){
      this.canvas.style.backgroundPositionY = "0px";
      this.canvas.style.backgroundPositionX = "-100px";
      this.ctx.font = 'bold 20pt Calibri';
      this.ctx.fillStyle = "white"
      this.ctx.fillText("You failed to save the Princess.", 170, 100);
      this.ctx.fillText('Press Spacebar to try again.', 180, 150);
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
      // this.ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
      this.ctx.drawImage(this.platformPic, 0, 0, 96, 96, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
    }
  }

  drawHeart(){
    this.ctx.drawImage(this.heart, 0, 0, 125, 125, 650, 10, 30, 30)
    this.ctx.font = '16pt Times New Roman';
    this.ctx.strokeStyle = "white"
    this.ctx.strokeText(this.lives, 632, 32);
  }

  drawKeyCount(){
    this.ctx.clearRect(560, 10, 200, 50)
    this.ctx.drawImage(this.keys, 32, 0, 32, 32, 590, 12, 30, 30);
    this.ctx.font = '16pt Times New Roman';
    this.ctx.strokeStyle = "white"
    this.ctx.strokeText(this.keyCount, 570, 32);
  }

  draw_key1(){
    this.ctx.drawImage(this.key1, 0, 0, 32, 32, 600, 240, 30, 30);
  }

  draw_key2(){
    this.ctx.drawImage(this.key2, 32, 0, 32, 32, 385, 250, 30, 30);
  }

  draw_key3() {
    this.ctx.drawImage(this.key3, 64, 0, 32, 32, 385, 250, 30, 30);
  }

  draw_key4() {
    this.ctx.drawImage(this.key4, 96, 0, 32, 32, 225, 340, 30, 30);
  }

  updateScene(x, y, currentFrame){
    let col;
    if (this.room != 0 && this.room != 25){
    this.drawKeyCount();
    this.drawHeart();
    }

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

    else if (this.room === 4) {
      this.draw_platforms();
      if (this.foundKey3 === false) {
        this.draw_key3();
      } else {
        platforms.push({
          x: canvas.width - 500,
          y: this.canvas.height - 200,
          width: platformWidth,
          height: platformHeight,
        });
      }

      if (this.foundKey4 === true){
        platforms.push({
          x: canvas.width - 300,
          y: canvas.height - 30,
          width: platformWidth + 300,
          height: platformHeight,
        });
      }
    }

    else if (this.room === 5){
      this.draw_platforms();
      if (this.foundKey4 === false){
        this.draw_key4();
      }  
    }

    else if (this.room === 6){
      this.draw_platforms();

      if (this.foundKey1 === false || this.foundKey2 === false || this.foundKey3 === false || this.foundKey4 === false){
        col = currentFrame % 10
        this.ctx.clearRect(320, 310, 65, 65);
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(this.greenKnight, 32 * col, 0, 32, 32, -385, 310, 65, 65);
        this.ctx.scale(-1, 1);
        this.drawTextBox(220, 270, 120, 50, 5)
        this.ctx.font = 'bold 8pt Calibri';
        this.ctx.fillStyle = "black"
        this.ctx.fillText("You must have all 4", 230, 290);
        this.ctx.fillText('keys to enter the castle.', 230, 300);
      } else {
        this.ctx.clearRect(220, 270, 120, 50);
        if (x > 260 && x < 350){
          this.drawTextBox(260, 270, 150, 25, 5);
          this.ctx.font = 'bold 8pt Calibri';
          this.ctx.fillStyle = "black"
          this.ctx.fillText("Press R to enter the castle.", 270, 290);
        } else {
          this.ctx.clearRect(260, 270, 150, 25);
        }
      }
    }

    else if (this.room === 7){
       col = 7;
        if (currentFrame % 8 === 0){
         col = 8;
        }
        row = 2;
        let princessX = 500;
        this.ctx.clearRect(this.goldKnightX, 300, 85, 85)
        this.ctx.clearRect(princessX, 300, 85, 85);
        this.ctx.drawImage(this.princess, 81 * col, row * 82, 81, 82, princessX, 300, 85, 85);
      
      if (x < 250 && this.firstScene === true){
        this.drawTextBox(390, 290, 150, 40, 5);
        this.ctx.font = 'bold 8pt Calibri';
        this.ctx.fillStyle = "black"
        this.ctx.fillText("Please save me!", 400 , 310);
        this.ctx.fillText("The evil knight is coming!", 400, 320);
      } else {
        this.ctx.clearRect(390, 290, 150, 40);
      }
      if (x > 260 && this.firstScene === true){
        col = (currentFrame) % 10;
        if (this.goldKnightX > 350) {
          this.goldKnightX -= 5;
          row = 2;
        }
         else{
            row = 1;
          }
        this.disabled = true;
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(this.goldKnight, 32 * col, row * 32, 32, 32, -this.goldKnightX - 85, 300, 85, 85);
        this.ctx.scale(-1, 1);
      }

      if (this.goldKnightX === 350){
        this.drawTextBox(240, 230, 150, 50, 5);
        this.ctx.font = 'bold 10pt Calibri';
        this.ctx.fillStyle = "black"
        this.ctx.fillText("Oh man thank god you", 250, 250);
        this.ctx.fillText("are here. Everyone has", 250, 260);
        this.ctx.fillText("it all wrong.", 260, 270);
        // this.ctx.drawImage(this.princess, 81 * col, row * 82, 81, 82, princessX, 300, 85, 85);
      }


    }


    else if (this.room === 25){
      this.drawTextBox(400, 260, 100, 50, 5)
      this.ctx.font = 'bold 20pt Calibri';
      this.ctx.fillStyle = "white"
      this.ctx.fillText("Game Over", 410, 280);
      this.ctx.fillText('Press Spacebar to try again.', 410, 290);
    }
}
}

module.exports = Level;


