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
    this.canvas.remove();
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
    this.x = 300;
    this.y = 310;
    this.srcX= 0;
    this.srcY= this.trackRight * this.height;
    this.speed = 15;
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

    if (this.left && (this.x > -20 || this.level.room !=1)){
      this.srcY = trackLeft * height;
      this.x -= this.speed;
    }

    if (this.right){
      this.srcY = trackRight * height;
      this.x += this.speed;
    }

    if (this.still === true) {
      this.srcX = width;
      this.srcY = 0;
    }

    if (this.y < 310){
      if (310 - this.y > this.speed){
         this.y += this.speed;
      } else {
        this.y += 310 - this.y;
      }
      this.srcY = height * 2;
    }

    if (this.jumping === true) {
      this.y -= 155;
      this.jumping = false;
    }

    if (this.x > 700){ 
      this.scrollRight();
      this.x = 20;
    }

    if (this.x < -20 && this.level.room != 1) {
      this.scrollLeft();
      this.x = 640;
    }
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
  if (e.key === "w" && this.y === 310) {
    this.jump();
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
     this.jumping = false;
  }
}

scrollRight(){
  this.level.room += 1
  this.canvas.style.backgroundImage = `url("images/level${this.level.room}.png"`
  if (this.level.room === 3){
    this.canvas.style.backgroundPositionY = "110px";
  } else {
    this.canvas.style.backgroundPositionY = "-50px";
  }
}

scrollLeft(){
  this.level.room -= 1
  this.canvas.style.backgroundImage = `url("images/level${this.level.room}.png"`
  if (this.level.room === 3) {
    this.canvas.style.backgroundPositionY = "110px";
  } else {
    this.canvas.style.backgroundPositionY = "-50px";
  }
}
}


module.exports = GameView;