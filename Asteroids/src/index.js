let MovingObject = require("./moving_object");


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  console.log(canvasEl);
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = 'blue';
  ctx.width = 500;
  ctx.height = 500;
  ctx.fillRect(0,0,500, 500);
  });
