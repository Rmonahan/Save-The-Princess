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
    this.curFrame = 1;
    this.frameCount = 6;
    this.x = 220;
    this.y = 310;
    this.srcX= 0;
    this.srcY= this.trackRight * this.height;
    this.speedX = 15;
    this.speedY = 15;
    this.character.src = "images/adventurer-Sheet.png";
  }
  mainLoop(time){
    this.updateFrame(this.width, this.height, this.frameCount, this.trackLeft, this.trackRight)
    if (this.left === true){
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
      if (310 - this.y > this.speedY){
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
    
    if (this.x > 700){ 
      this.scrollRight();
      this.x = 20;
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
        this.level.foundKey1 = true
      }
      if (collisionName === "key2") {
        this.level.foundKey2 = true
      }
    }

    if (this.y === 310) this.inAir = false;
    if (this.inAir === true) this.srcY = height * 2;
    else if (this.left === true) this.srcY = trackLeft * height;
    else if (this.right === true) this.srcY = trackRight * height;
    else {this.srcX = width; this.srcY = 0;}
  }
  
  moveLeft(){
    this.left = true;
    this.right = false;
    this.still = false;
  }

  moveRight(){
    this.left = false;
    this.still = false;
    this.right = true;
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
  if (e.key === "w" && e.repeat === false && (this.y === 310 || this.speedY === 0)) {
    this.jump();
  }

  if (e.key === "r" && this.level.room === 4 && this.x > 300 && this.x < 350 && e.repeat === false){
    this.enter();
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
  this.level.room += 1
  this.clear();
  this.level.addScene();
}

scrollLeft(){
  this.level.room -= 1
  this.clear();
  this.level.addScene();
}

enter(){
  this.level.room += 1
  this.level.addScene();
}
}


module.exports = GameView;