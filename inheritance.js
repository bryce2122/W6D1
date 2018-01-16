// Function.prototype.inherits = function(superclass) {
//   function Surrogate() {
//
//   }
//
//   Surrogate.prototype = superclass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

function MovingObject () {}
//
function Ship () {}
// Ship.inherits(MovingObject);
//
function Asteroid () {}
// Asteroid.inherits(MovingObject);

Asteroid.prototype = Object.create(MovingObject);
Asteroid.prototype.constructor = Asteroid;

console.log(Asteroid.__proto__);
