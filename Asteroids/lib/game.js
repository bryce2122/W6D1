let movingObject = require("./moving_object");
let Asteroid = require("./asteroids");


function Game() {
  const DIM_X = 0;
  const DIM_Y = 0;
  const NUM_ASTEROIDS = 0;
  this.asteroidArray = [];

}

Game.prototype.addAsteroids = function() {
  const asteroidArray = [];
  for(let i = 0;i < 30;i++) {
    let x = Math.floor((Math.random() * 100) + 1);
    let y = Math.floor((Math.random() * 100) + 1);
    asteroidArray.push(new Asteroid([x,y]));
  }


  this.asteroidArray = asteroidArray;

};

Game.prototype.draw = function(ctx, canvas) {
  // ctx.beginPath();
  // ctx.arc(20, 10, 40, 0, 2 * Math.PI, true);
  // ctx.strokeStyle = "green";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "blue";
  // ctx.fill();


 let circle = new Asteroid([30,30]);
 circle.draw(ctx);
  // let raw = new movingObject([5,20]);
  // raw.draw(ctx);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // this.asteroidArray.forEach(el => {
  //   el.draw(ctx);
  // });
};

Game.prototype.movingObjects = function(ctx) {
  this.asteroidArray.forEach(el => {
    el.move();
  });
};




  module.exports = Game;
