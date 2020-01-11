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
    this.swordSwipe = 0;
    this.jumpHeight = 0;
    this.inAir = false;
    this.curFrame = 0;
    this.frameCount = 6;
    this.srcX = 0;
    this.srcY = 0;
    this.x = 300;
    this.y = 310;
    this.speed = 12;
    this.kill = false;
    this.save = false;
    this.superMode = false;
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
    this.oldFrame = 0;
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

    if (this.superMode === false){
      setTimeout(() =>{
      window.requestAnimationFrame(this.mainLoop.bind(this))
      }, 100)
    }
    else {
      setTimeout(() => {
        window.requestAnimationFrame(this.mainLoop.bind(this))
      }, 40)
    }
  }

  updateFrame(width, height, frameCount, trackLeft, trackRight){
    this.oldFrame = this.oldFrame + 1;
    
    this.curFrame = (this.curFrame + 1) % frameCount;
    this.stillFrame = Math.floor((this.oldFrame % 9) / 3)
    this.srcX = this.curFrame * width + width;
    this.ctx.clearRect(this.x, this.y, width * 2, height * 2);
    this.level.updateScene(this.x, this.y, this.oldFrame);
    this.inAir = true;

    if (this.left && this.level.disabled === false && (this.x > -20 || (this.level.room !=1 && this.level.room != 7))){
      this.speedX = 15;
      this.x -= this.speedX;
    }
    
    if (this.right && this.level.disabled === false && (this.x < 620 || (this.level.room != 7 && this.level.room != 6)) && (this.level.room  != 7 || this.x < (this.level.princessX - 86) || this.level.princessDisabled === true)){
      this.speedX = 15;
      this.x += this.speedX;
    }
    
    if (this.inAir === true){
      this.speedY = 15
      if (310 - this.y > this.speedY || (this.level.room != 1 && this.level.room != 7 && this.level.room != 25 && this.level.room != 0 && this.superMode === false)){
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
    
    if (this.x > 670 && this.level.room != 7 && this.level.room != 6){ 
      this.scrollRight();
      this.x = -20;
    }
    
    if (this.x < -20 && this.level.room != 1 && this.level.room != 7) {
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
        this.ctx.clearRect(600, 240, 30, 30);
        this.level.keyCount += 1;
        this.level.items = [];
      }
      if (collisionName === "key2") {
        this.level.items = [];
        this.ctx.clearRect(385, 250, 30, 30);
        this.level.keyCount += 1;
        this.level.foundKey2 = true
      }

      if (collisionName === "key3") {
        this.level.items = [];
        this.ctx.clearRect(385, 250, 30, 30);
        this.level.keyCount += 1;
        this.level.foundKey3 = true
      }

      if (collisionName === "key4") {
        this.level.items = [];
        this.ctx.clearRect(225, 340, 30, 30);
        this.level.keyCount += 1;
        this.level.foundKey4 = true
      }

      if (collisionName === "fireball"){
        this.level.lives -= 1;
        this.y = 10;
        this.x = 20;
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
    else {
      this.srcX = (this.stillFrame) * width; 
      this.srcY = 0;
    }
    if (this.level.disabled === true && this.level.princessDisabled === true){
      this.srcX = ((this.stillFrame % 4) +  3) * width;
      this.srcY = 5 * height
    }

    if (this.level.disabled === true && this.level.princessDisabled === true && this.kill === true && this.level.princessDead === false){
      this.srcX = (this.stillFrame) * width;
      this.srcY = 7 * height;
      if (this.stillFrame === 2){
        this.swordSwipe += 1
      }
      if (this.swordSwipe === 8){
        this.level.princessDead = true;
      }
    }
    else if (this.level.disabled === true && this.level.princessDisabled === true && this.save === true && this.level.princessDead === false){
      this.srcX = (this.stillFrame) * width;
      this.srcY = 9 * height;
    }
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
  if (e.key === "d" || e.keyCode === 39) {
    this.moveRight();
  }
  else if (e.key === "a" || e.keyCode === 37) {
    this.moveLeft();
  }
  if ((e.key === "w" || e.keyCode === 38) && e.repeat === false && (this.y === 310 || this.speedY === 0) && this.y <= 310) {
    this.jump();
  }

  if (e.key === "c" && this.level.room === 6 && this.x > 260 && this.x < 350 && e.repeat === false && this.foundKeys() === true){
    this.enter();
  }

  if (e.key === "c" && this.level.room === 25 && e.repeat === false){
    this.restart();
  }

  if (e.key === "v" && this.level.room === 25 && e.repeat === false && this.level.reachedLevel7 === true) {
    this.restartFinal();
  }

  if (e.key === "c" && this.level.room === 0 && e.repeat === false) {
    this.start();
  }

  if (e.key === "c" && this.level.room === 7 && e.repeat === false && this.level.disabled === true && this.level.princessDisabled === true) {
    this.kill = true;
  }

  if ((e.key === "p") && this.level.room === 1 && e.repeat === false) {
      this.superMode = !this.superMode;
    }

}

 keyUpHandler(e) {
   if (e.key === "d" || e.keyCode === 39) {
    this.right = false;
    this.still = true;
  }
   else if (e.key === "a" || e.keyCode === 37) {
    this.left = false;
    this.still = true;
  }
}

foundKeys(){
  return this.level.foundKey1 && this.level.foundKey2 && this.level.foundKey3 && this.level.foundKey4
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
  if (this.level.room !== 25 && (this.level.room !== 0 && this.level.room !== 7)) this.level.room += 1
  this.clear();
  this.level.addScene();
}

scrollLeft(){
  if (this.level.room !== 25 && (this.level.room !== 0 && this.level.room !== 7)) this.level.room -= 1
  this.clear();
  this.level.addScene();
}

enter(){
  this.level.room += 1
  this.x = -20;
  this.clear();
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
  this.swordSwipe = 0;
  this.kill = false;
  this.save = false;
  this.clear();
  this.level.addScene();
}

restartFinal(){
  let newLevel = new Level(7, this.ctx, this.canvas);
  this.level = newLevel;
  this.swordSwipe = 0;
  this.kill = false;
  this.save = false;
  this.level.keyCount = 4;
  this.clear();
  this.level.addScene();
}
}


module.exports = GameView;