const Level = require("./level");

class GameView {
  constructor(level, ctx, canvas, backgroundCtx) {
    this.ctx = ctx;
    this.canvas = canvas
    this.backgroundCtx = backgroundCtx;
    this.level = level;
    this.bindKeyHandlers();
    this.flipPlayer = false;
    this.still = true;
    this.left = false;
    this.facingLeft = false;
    this.right = false;
    this.jumping = false;
    this.jumpHeight = 0;
    this.inAir = false;
    this.curFrame = 0;
    this.frameCount = 6;
    this.srcX = 0;
    this.srcY = 0;
    this.x = 300;
    this.y = 310;
    this.speed = 12;
    this.character = new Image();
    this.createScene();
    window.requestAnimationFrame(this.mainLoop.bind(this));
  }

  clear(){
    this.ctx.clearRect(0, 0, 700, 400);
    this.level.platforms = [];
    this.level.items = [];
  }

  createScene(){
    this.drawMainCharacter();
    this.level.addScene();
  }

  drawMainCharacter() {
    const spriteWidth = 350;
    const spriteHeight = 407;
    const rows = 11;
    const cols = 7;
    this.trackRight = 1;
    this.trackLeft = 1;
    this.width = spriteWidth / cols;
    this.height = spriteHeight / rows;
    this.curFrame = 0;
    this.frameCount = 6;
    this.x = 220;
    this.y = 310;
    this.srcX= 0;
    this.srcY= this.trackRight * this.height;
    this.speedX = 15;
    this.speedY = 15;
    this.character.src = "dist/images/adventurer-Sheet.png";
  }
  mainLoop(time){
    this.updateFrame(this.width, this.height, this.frameCount, this.trackLeft, this.trackRight)
    if (this.facingLeft === true){
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(this.character, this.srcX, this.srcY, this.width, this.height, (-this.x - (this.width * 2)), this.y, this.width * 2, this.height * 2);
      this.ctx.scale(-1, 1);    
    }
    else {
    this.ctx.drawImage(this.character, this.srcX, this.srcY, this.width, this.height, this.x, this.y, this.width*2, this.height*2)
    }
    setTimeout(() =>{
    window.requestAnimationFrame(this.mainLoop.bind(this))
    }, 100)
  }

  updateFrame(width, height, frameCount, trackLeft, trackRight){

    this.stillFrame = this.curFrame % 4
    if (this.curFrame === 4) this.stillFrame = 3
    
    
    this.curFrame = (this.curFrame + 1) % frameCount;
    this.srcX = this.curFrame * width + width;
    this.ctx.clearRect(this.x, this.y, width * 2, height * 2);
    this.level.updateScene(this.x, this.y);
    this.inAir = true;

    if (this.left && (this.x > -20 || this.level.room !=1)){
      this.speedX = 15;
      this.x -= this.speedX;
    }
    
    if (this.right){
      this.speedX = 15;
      this.x += this.speedX;
    }
    
    if (this.inAir === true){
      this.speedY = 15
      if (310 - this.y > this.speedY || (this.level.room != 1 && this.level.room != 25 && this.level.room != 0)){
        this.y += this.speedY;
      } else {
        this.y += 310 - this.y;
      }
    }

    if (this.jumping === true) {
      this.jumpHeight += 30
      this.y -= 30;
      if (this.jumpHeight > 130){
      this.jumping = false;
      this.still = true;
      this.jumpHeight = 0;
      }
    }
    
    if (this.x > 670){ 
      this.scrollRight();
      this.x = 10;
    }
    
    if (this.x < -20 && this.level.room != 1) {
      this.scrollLeft();
      this.x = 640;
    }
    for (let i = 0; i < this.level.platforms.length; i++) {
      const direction = this.collisionCheck(this.level.platforms[i])

      if (direction === "left" || direction === "right") {
        this.speedX = 0;
      }
      else if (direction === "top" || direction === "bottom") {
        this.speedY = 0;
        this.still = true;
        this.inAir = false;
      }
    }

    for (let i=0; i < this.level.items.length; i++){
      const collisionName = this.collisionCheck(this.level.items[i])
      if (collisionName === "key1"){
        this.level.foundKey1 = true;
        this.ctx.clearRect(600, 270, 30, 30);
        this.level.keyCount += 1;
        this.level.items = [];
      }
      if (collisionName === "key2") {
        this.level.items = [];
        this.ctx.clearRect(385, 250, 30, 30);
        this.level.keyCount += 1;
        this.level.foundKey2 = true
      }
    }

    if (this.y > 500 ){
      this.level.lives -= 1;
      this.y = 10;
      this.x = 20;
      this.reset();
    }

    if (this.level.lives === 0){
      this.gameOver();
    }



    if (this.y === 310) this.inAir = false;
    if (this.inAir === true) this.srcY = height * 2;
    else if (this.left === true) this.srcY = trackLeft * height;
    else if (this.right === true) this.srcY = trackRight * height;
    else {this.srcX = (this.stillFrame) * width; this.srcY = 0;}
  }
  
  moveLeft(){
    this.left = true;
    this.right = false;
    this.still = false;
    this.facingLeft = true;
  }

  moveRight(){
    this.left = false;
    this.still = false;
    this.right = true;
    this.facingLeft = false;
  }

  jump(){
    this.jumping = true;
    this.inAir = true;
    this.still = false;
  }

  bindKeyHandlers() {
    document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
    document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
  }

  keyDownHandler(e) {
  if (e.key === "d") {
    this.moveRight();
  }
  else if (e.key === "a") {
    this.moveLeft();
  }
  if (e.key === "w" && e.repeat === false && (this.y === 310 || this.speedY === 0) && this.y <= 310) {
    this.jump();
  }

  if (e.key === "r" && this.level.room === 4 && this.x > 300 && this.x < 350 && e.repeat === false){
    this.enter();
  }

  if ((e.key === " " || e.key === "space") && this.level.room === 25 && e.repeat === false){
    this.restart();
  }

  if ((e.key === " " || e.key === "space") && this.level.room === 0 && e.repeat === false) {
    this.start();
  }

}

 keyUpHandler(e) {
  if (e.key === "d") {
    this.right = false;
    this.still = true;
  }
  else if (e.key === "a") {
    this.left = false;
    this.still = true;
  }

  else if (e.key === "w") {
  }
}

collisionCheck(platform){
  const vectorX = (this.x + (this.width)) - (platform.x + (platform.width / 2));
  const vectorY = (this.y + (this.height)) - (platform.y + (platform.height / 2));

  const centerWidths = (this.width/2) + (platform.width / 2);
  const centerHeights = (this.height) + (platform.height / 2);


  let collisionDirection;

  if (Math.abs(vectorX) < centerWidths && Math.abs(vectorY) < centerHeights) 
  {

    if (platform.name) return platform.name;
    const offsetX = centerWidths - Math.abs(vectorX);
    const offsetY = centerHeights - Math.abs(vectorY);

    if (offsetX < offsetY)
        if (vectorX > 0){
          collisionDirection = "left"
          this.x += offsetX;
        } else {
          collisionDirection = "right"
          this.x -= offsetX;
        }
    else {
      if (vectorY > 0){
        collisionDirection = "top";
        this.y += offsetY;
      } else {
        collisionDirection = "bottom";
        this.y -= offsetY
      }
    }
  }
  return collisionDirection;
}

scrollRight(){
  if (this.level.room !== 25 && this.level.room !== 0) this.level.room += 1
  this.clear();
  this.level.addScene();
}

scrollLeft(){
  if (this.level.room !== 25 && this.level.room !== 0) this.level.room -= 1
  this.clear();
  this.level.addScene();
}

enter(){
  this.level.room += 1
  this.level.addScene();
}

start(){
  this.level.room += 1;
  this.clear();
  this.level.addScene();
  this.x = 220;
  this.y = 310;
}

reset(){
  this.clear();
  this.level.addScene();
}
gameOver(){
  this.clear();
  this.level.room = 25
  this.level.addScene();
}

restart(){
  let newLevel = new Level(0, this.ctx, this.canvas);
  this.level = newLevel;
  this.clear();
  this.level.addScene();
}
}


module.exports = GameView;