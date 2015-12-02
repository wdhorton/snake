(function() {
  if (typeof window.SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var Coord = window.SnakeGame.Coord = function (arr) {
    this.row = arr[0];
    this.col = arr[1];
  };

  Coord.prototype.plus = function (otherCord) {
    var newRow = this.row + otherCord.row;
    var newCol = this.col + otherCord.col;
    return new Coord([newRow, newCol]);
  };

  Coord.prototype.pos = function () {
    return [this.row, this.col];
  };

  Coord.prototype.equals = function (otherCoord) {
    return (this.row === otherCoord.row) && (this.col === otherCoord.col);
  };

})();
