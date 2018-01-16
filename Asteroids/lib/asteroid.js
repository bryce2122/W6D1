const Game = require('./game');
const Gameview = require('./gameview');

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("myCanvas");
  const asteroidContext = canvas.getContext("2d");
  let gameview = new Gameview(new Game(), canvas);
  gameview.start();
  });
