const Level = require("./level");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
 
  let level = new Level(1, ctx);
  new GameView(level,ctx);
});