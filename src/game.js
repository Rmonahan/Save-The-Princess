function Game() {
  this.mainCharacter = [];
  this.items = [];
  this.room = 1
  this.addScene();
}


Game.prototype.add = function add(object) {
  if (object instanceof MainCharacter) {
    this.mainCharcter.push(object);
  } else if (object instanceof Item) {
    this.items.push(object);
  } else if (object instanceof Scenary) {
    this.scenary.push(object);
  } else {
    throw new Error("unknown type of object");
  }
};

Game.prototype.addScenary = function addScene() {
    new Scene({ game: this, room: this.room });
}

Game.prototype.createMainCharacter = function createMainCharacter() {
  const mainCharacter = new mainCharacter({
    pos: (100,100),
    game: this
  });

  this.add(mainCharacter);

  return mainCharacter;
};

Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
  return (pos[0] < 0) || (pos[1] < 0) ||
    (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
};


var rightPressed = false;
var leftPressed = false;

function drawCastle() {
  var castleImage = new Image();
  castleImage.onload = function () {
    ctx.drawImage(castle, 170, 170, 100, 100, 400, 200, 100, 100);
  };
  castleImage.src = 'castle.png';
}
function drawMainCharacter() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCastle();
  // drawMainCharacter();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  }
  else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval); // Needed for Chrome to end game
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  }
  else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
}

var interval = setInterval(draw, 10);