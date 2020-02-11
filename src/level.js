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
    this.stallCount = 0;
    this.introTyped = false;
    this.overTyped = false;
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
    this.goldKnight.src = "dist/images/GoldKnight.png"
    this.goldKnightX = 700;
    this.missile = new Image();
    this.missile.src = "dist/images/princess.png";
    this.fired = 0;
    this.princessDisabled = false;
    this.princessDead = false;
    this.princessSaved = false;
    this.displayFired = false;
    this.doneOnce = false;
    this.remainingFired = 20;
  }
  addScene() {
    this.canvas.style.backgroundImage = `url("dist/images/level${this.room}.png"`
    platforms = this.platforms;
    canvas = this.canvas;
    platformWidth = this.platformWidth;
    platformHeight = this.platformHeight
    if (this.room === 0) {
      let str = "You control Henry who is a coal miner from the kingdom of Tromide. He has always kept a low profile, determined to do his job and then enjoy the peace and quiet of his home. No one knows him personally and he likes it that way. The princess of Tromide has been kidnapped and all efforts to save her have failed. On his way to work he saw a poster offering a major reward to anyone that can help save the princess. The one thing Henry does care for is money. He needs to find the 4 keys to get into the enemy castle and save the princess. This is where his story begins... stringBreak Use the arrow keys or A, D, W to go left, right and jump. Note: There is no double jump."
      this.typeWrite(str, 20, 30, 25, 50)
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
      this.reachedLevel7 = true;
    }
    else if (this.room === 25){
      if (this.princessDead === true){
        let str = "After killing the princess you returned to Tromide. You told the story of your adventure but the king didn't buy it. He thought you made it up and were planning on killing her all along. You have been exiled to an island where you have to fend for yourself. You never expected this is what being a hero would feel like. Your whole life all you wanted was to be left alone yet now you would do anything to see another person. After spending weeks focused on survival, you see a boat approach the island... THE END."
        this.typeWrite(str, 20, 30, 25, 50)
      } else if (this.princessSaved === true){
        let str = "You brought the princess back to Tromide. The king couldn't believe what happened. After seeing for himself that the princess was the one behind it all, he ordered to have her locked away in the dungeon. The people of Tromide hailed you a hero. Everywhere you went people called out your name. Truthfully, you liked it better when no one knew who you were. A few weeks later you couldn't get one question out of your head. What drove the princess to do all this. You decided to go down to the dungeon to try and get some answers. When you got to the cell the door was busted open and the cell was empty... THE END."
        this.typeWrite(str, 20, 30, 25, 50)
      } else {
        this.canvas.style.backgroundPositionY = "0px";
        this.canvas.style.backgroundPositionX = "-100px";
        this.ctx.font = 'bold 20pt Calibri';
        this.ctx.fillStyle = "white"
        this.ctx.fillText("You failed to save the Princess.", 170, 100);
        this.ctx.fillText('Press C to start again.', 220, 150);
        if (this.reachedLevel7 === true){
        this.ctx.fillText('Press V to start from castle scene again.', 140, 180);
        }
     }
    }


    else if (this.room === 26) {
      this.canvas.style.backgroundPositionY = "0px";
      this.canvas.style.backgroundPositionX = "-100px";
      this.ctx.font = 'bold 20pt Calibri';
      this.ctx.fillStyle = "white"
      this.ctx.fillText("You failed to save the Princess.", 170, 100);
      this.ctx.fillText('Press C to start again.', 220, 150);
      if (this.reachedLevel7 === true) {
        this.ctx.fillText('Press V to start from castle scene again.', 140, 180);
      }
    }
  }

  typeWrite(str, startX, startY, lineHeight, padding){
    let i = 0;
    let cursorX = startX;
    let cursorY = startY;
    let words = str.split(" ");
    let sentence = "";
    let self = this;
    let typing = setInterval(function () {
      let width = self.ctx.measureText(sentence).width;
      sentence += words[i] + " ";
      if (startX + width >= self.canvas.width - padding) {
        cursorX = startX;
        cursorY += lineHeight;
        sentence = words[i] + " ";
      } else if (words[i] === "stringBreak"){
        cursorX = startX;
        cursorY += lineHeight + 10;
        i++;
        sentence = words[i] + " ";
      }
      else {
        cursorX = startX + width
      }
      self.ctx.font = '12pt Arial';
      self.ctx.fillStyle = "white";
      self.ctx.fillText(words[i], cursorX, cursorY);
      i++;
      if (i === words.length) {
        if (self.room === 0) self.introTyped = true;
        if (self.room === 25) self.overTyped = true;
        clearInterval(typing);
      }
    }, 200);
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

  drawPlatforms() {
    this.ctx.fillStyle = "black";
    for (let i = 0; i < this.platforms.length; i++) {
      this.ctx.drawImage(this.platformPic, 0, 0, 96, 96, this.platforms[i].x, this.platforms[i].y, this.platforms[i].width, this.platforms[i].height);
    }
  }

  drawItems() {
    for (let i = 0; i < this.items.length; i++) {
      this.ctx.drawImage(this.missile, 891 , 82, 81, 82, this.items[i].x - shift, 290, 100, 100);
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
    this.ctx.drawImage(this.key1, 32, 0, 32, 32, 600, 240, 30, 30);
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

  drawCommand(){
    if (this.room === 0){
      this.ctx.clearRect(250, 230, 200, 50)
      this.ctx.font = '16pt Arial Bold';
      this.ctx.fillText('Press C to start.', 270, 250);
    } else {
      this.ctx.clearRect(190, 230, 400, 100)
      this.ctx.fillText('Press C to start again.', 250, 240);
      this.ctx.fillText('Press V to start from castle scene again.', 190, 260);
    } 
  }

  updateScene(x, y, currentFrame){
    let princessCol;
    let princessRow = 2;
    let knightCol;
    let knightRow;

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
        this.drawPlatforms();
        if (this.foundKey1 === false){
          this.draw_key1();
        }
    }

    else if (this.room === 3) {
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
      this.drawPlatforms();
    }

    else if (this.room === 4) {
      if (this.foundKey3 === false) {
        this.draw_key3();
      }
      
      if (this.foundKey4 === true){
        platforms.push({
          x: canvas.width - 300,
          y: canvas.height - 30,
          width: platformWidth + 300,
          height: platformHeight,
        });
        platforms.push({
          x: canvas.width - 500,
          y: this.canvas.height - 200,
          width: platformWidth,
          height: platformHeight,
        });
      }
      this.drawPlatforms();
    }

    else if (this.room === 5){
      this.drawPlatforms();
      if (this.foundKey4 === false){
        this.draw_key4();
      }  
    }

    else if (this.room === 6){
      this.drawPlatforms();

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
          this.ctx.fillText("Press C to enter the castle.", 270, 290);
        } else {
          this.ctx.clearRect(260, 270, 150, 25);
        }
      }
    }

    else if (this.room === 7){
      this.ctx.clearRect(0, 300, 1000, 100);
      this.ctx.clearRect(this.goldKnightX, 300, 85, 85)
      if (this.firstScene === true){
       princessCol = 7;
        if (currentFrame % 8 === 0){
         princessCol = 8;
        }
        this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
      }
      
      if (x < 250 && this.firstScene === true){
        this.drawTextBox(390, 290, 150, 40, 5);
        this.ctx.font = 'bold 10pt Calibri';
        this.ctx.fillStyle = "black"
        this.ctx.fillText("Please save me! The", 400 , 310);
        this.ctx.fillText("evil knight is coming!", 400, 323);
      } else {
        this.ctx.clearRect(390, 290, 150, 40);
      }
      knightRow = 1;
      if (x > 260 || this.knightDead === true){
        knightCol = (currentFrame) % 10;
        if (this.goldKnightX > 350) {
          this.goldKnightX -= 5;
          knightRow = 2;
        }
        this.disabled = true;
        this.ctx.scale(-1, 1);
        if (this.princessSwordCount > 1) {
          knightRow = 4;
        }

        if (knightRow === 4 && knightCol === 9){
          this.knightDead = true;
        }

        if (this.knightDead === true){
          knightCol = 9;
        }

        this.ctx.drawImage(this.goldKnight, 32 * knightCol, knightRow * 32, 32, 32, -this.goldKnightX - 85, 300, 85, 85);
        this.ctx.scale(-1, 1);
      }

      if (this.goldKnightX > 360 && this.goldKnightX < 600)
      {
        this.drawTextBox(130, 250, 180, 50, 5);
        this.ctx.font = 'bold 10pt Calibri';
        this.ctx.fillStyle = "black"
        this.ctx.fillText("Hey you big dummy. You", 140, 272);
        this.ctx.fillText("better let the princess go!", 140, 285);
      }

      if (this.goldKnightX === 350 && this.princessX != 390 && this.knightDead === false){
        this.firstScene = false;
        princessCol = currentFrame % 2;
        if (this.princessX > 390 && this.knightDead === false){
        this.princessX -= 5;
        }
        this.ctx.clearRect(130, 250, 180, 55);
        this.drawTextBox(210, 230, 170, 50, 5);
        this.ctx.font = 'bold 10pt Calibri';
        this.ctx.fillStyle = "black"
        this.ctx.fillText("Thank god you are here.", 220, 250);
        this.ctx.fillText("Everyone has it all wrong...", 220, 265);
        this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
      }

      if (this.princessX === 390){
        this.ctx.clearRect(210, 230, 170, 80);
        if (this.secondScene === true){
          princessCol = Math.floor((currentFrame % 17) / 4);
        } else {
          princessCol = Math.floor((currentFrame % 20) / 10);
        }
        if (princessCol === 4){
          princessCol = 0;
          this.princessSwordCount += 1;
        }

        if (this.princessSwordCount === 2){
          this.secondScene = false;
        }
        this.drawTextBox(460, 270, 180, 50, 5);
        this.ctx.font = 'bold 10pt Calibri';
        this.ctx.fillStyle = "black"
        this.ctx.fillText("How cute. You thought I was", 470, 290);
        this.ctx.fillText("the one that needed saving.", 470, 305);
        
        this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
      }

      if (this.knightDead === true && this.princessX < 650){
        this.ctx.clearRect(460, 270, 180, 60)
        let rand = Math.floor(Math.random()*15)
        if (this.princessDisabled === true){
          rand = 0;
        }
        princessCol = 9
        if (rand%2 === 0 && this.princessX < 460){
          this.princessX += rand;
        }
        else {
          if (this.princessX > 0){
             this.princessX -= rand;
          }
          else {
            this.princessX += rand;
          }
        }
        if (this.princessDisabled === true){
          princessCol = Math.floor((currentFrame % 10)/5);
        }

        let rand2 = Math.floor(Math.floor(Math.random() * 50));
        if ((currentFrame % 30 === 0 || rand2 === 14) && this.princessDisabled === false){
          princessCol = 10
          let facingLeft
          if (x < this.princessX){
            facingLeft = true;
            shift = 45
          } else {
            facingLeft = false;
            shift = 0
          }
          this.items.push({
            name: "fireball",
            width: 10,
            height: 2,
            y: 355,
            x: this.princessX + shift,
            left: facingLeft,
            shift: shift
          })
          this.fired += 1;
          this.remainingFired -= 1;
        }
        if (this.princessDead === false){
        if (x < this.princessX){
         this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, this.princessX, 300, 85, 85);
        } else {
          this.ctx.scale(-1, 1);
          this.ctx.drawImage(this.princess, 81 * princessCol, princessRow * 82, 81, 82, -this.princessX - 85, 300, 85, 85);
          this.ctx.scale(-1, 1);
        }
       }
        for (let i = 0; i < this.items.length; i++) {
         if (this.items[i].left === true){
           this.items[i].x -= 10;
         }
         else {
           this.items[i].x += 10;
         }
        }

       this.drawItems(currentFrame);
      }

      if (this.knightDead === true){
        this.disabled = false;
        this.displayFired = true;
      }

      if (this.fired === 20){
        this.princessDisabled = true;
        this.displayFired = false;
        this.fired = 0;
      }

    if (this.displayFired === true){
      this.ctx.clearRect(310, 50, 300, 100);
      this.ctx.drawImage(this.missile, 891, 82, 81, 82, 320, 40, 100, 100);
      this.ctx.font = 'bold 14pt Fantasy';
      this.ctx.fillStyle = "white"
      this.ctx.fillText(this.remainingFired,320, 100)
      this.ctx.font = '12pt Fantasy';
      this.ctx.fillText("remaining", 380, 100)
    }

    if (this.knightDead === true && this.fired < 3 && this.princessDisabled === false){
      this.ctx.clearRect(0,240, 600, 50);
      this.drawTextBox(x + 50, 240, 200, 50, 5);
      this.ctx.font = 'bold 10pt Calibri';
      this.ctx.fillStyle = "black"
      this.ctx.fillText("I just need to last long enough", x + 60, 260);
      this.ctx.fillText("for her magic to run out.", x + 60, 270);
    }

    if (this.fired === 3 && this.doneOnce === false){
      this.ctx.clearRect(0,240, 600, 50);
      this.doneOnce = true;
    }

    if (this.princessDisabled === true && Math.abs(this.princessX - x) > 70){
      this.drawTextBox(this.princessX + 50, 270, 180, 50, 5);
      this.ctx.font = 'bold 10pt Calibri';
      this.ctx.fillStyle = "black"
      this.ctx.fillText("Looks like I will have to do", this.princessX + 60, 290);
      this.ctx.fillText("this the hard way", this.princessX + 60, 305);
    }

    if (this.princessDead === false && this.princessDisabled === true && Math.abs(this.princessX - x) < 70){
      this.disabled = true;
      this.ctx.clearRect(this.princessX + 50, 270, 180,50);
      this.drawTextBox(x - 160, 270, 180, 50, 5);
      this.ctx.font = 'bold 10pt Calibri';
      this.ctx.fillStyle = "black"
      this.ctx.fillText("Looks like I will have to do", x - 150, 290);
      this.ctx.fillText("this the easy way", x - 150, 305);
      this.drawTextBox(x - 160, 140, 250, 50, 5);
      this.ctx.font = 'bold 10pt Calibri';
      this.ctx.fillStyle = "black"
      this.ctx.fillText("Press C to kill the princess", x - 150, 160);
      this.ctx.fillText("Press V to return the princess to Tromide", x - 150, 175);
    }

    if (this.princessSaved === true){
      this.stallCount += 1;
      this.ctx.clearRect(0, 0, 700, 400);
      this.stallCount += 1;
      this.ctx.drawImage(this.princess, 81 * 4, 2 * 82, 81, 82, this.princessX, 300, 85, 85);
      this.drawTextBox(this.princessX + 50, 270, 180, 50, 5);
      this.ctx.font = 'bold 10pt Calibri';
      this.ctx.fillStyle = "black"
      this.ctx.fillText("Alright you win I'll go back", this.princessX + 60, 290);
      this.ctx.fillText("with you.", this.princessX + 60, 305);
      if (this.stallCount > 15){
        this.drawTextBox(x - 160, 270, 180, 50, 5);
        this.ctx.font = 'bold 10pt Calibri';
        this.ctx.fillStyle = "black"
        this.ctx.fillText("Good Choice.", x - 150, 290);
      }
    }

   if (this.princessDead === true){
     this.ctx.clearRect(0, 0, 700, 400);
     this.stallCount += 3;
     this.ctx.drawImage(this.princess, 81* 8, 2 * 82, 81, 82, this.princessX, 300, 85, 85);
   }
  }
}
}

module.exports = Level;


