# Save The Princess

<a href="https://rmonahan.github.io/Save-The-Princess/"><img src="https://github.com/Rmonahan/Save-The-Princess/blob/master/dist/images/logo.png" width="200" height="200"> </a><h1><a href="https://rmonahan.github.io/Save-The-Princess/">   Play here! </a></h1>

Background 

Save The Princess is a platform scroller game that has the main character going on a journey to save the castle. It features a unique storyline and will require smart movements to obtain the 4 keys that are required to enter the castle and save the princess.

You control Henry who is a coal miner from the kingdom of Tromide. He has always kept a low profile, determined to do his job and then enjoy the peace and quiet of his home. He never made an effort to be known or make friends. No one knew him personally and he liked it that way.  The princess has been kidnapped and all efforts to save her have failed. No one has been able to save her and although Henry has heard of the situation, it wasn't something he was interested in getting involved in. As he was walking to work he saw a flier offering a major reward to anyone that can help save the princess. The one thing Henry does care for is money. This is where his story begins. As you progress through the game you will discover more and more about Henry, the kingdom and the history.

<h3>In Save The Princess, users are able to:</h3>

  1. Experience the story telling of the game.
  2. Move the main character around the scenes.
  3. Interact with various objects.
  4. Jump from platform to platform avoiding the dangerous landscape.
  5. Collect the keys required to enter the castle.
  6. Enter certain locations by interacting with it.
  7. Experience an adaptive storyline based on their actions.



<h2> Architecture and Technologies </h2>

This project was implemented with the following technologies:

  1. Javascript for game logic
  2. Canvas for game animation and effect rendering
  3. Webpack & Babel to bundle js files
  
  
<h2> Code Snippets </h2>

Add fireballs into the scene: 

```Javascript
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
  ```
Cutscene animations: 

```Javascript

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
      
```
