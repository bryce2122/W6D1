
function gameview(game) {
  this.game = game;
  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
}

gameview.prototype.start = function() {
  setInterval(this.game.draw(this.ctx, this.canvas), 20);
  setInterval(this.game.moveObjects, 20);
};

module.exports = gameview;
