
  function movingObject(optionsObj) {
    this.xpos = optionsObj['pos'][0];
    this.ypos = optionsObj['pos'][1];
    this.xvel = optionsObj['vel'][0];
    this.yvel = optionsObj['vel'][1];
    this.radius = optionsObj['radius'];
    this.color = optionsObj['color'];
  }

  movingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.xpos,this.ypos, this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

  };

  movingObject.prototype.move = function() {
    this.xpos = 100;
    // this.ypos += this.yvel;
  };

  module.exports = movingObject;

// let hash = { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" };
// let circle = movingObject(hash);
// circle.draw(ctx);
