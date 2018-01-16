let MovingObject = require("./moving_object");
let util = require("./util");

function Asteroid(pos) {

  this.radius = 10;
  this.color = 'grey';
  this.xpos = pos[0];
  this.ypos = pos[1];
  this.xvel = 10;
  this.yvel = 10;
}
util.inherits(Asteroid, MovingObject);
// window.Asteroid = Asteroid;

module.exports = Asteroid;
