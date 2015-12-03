(function() {

  if (typeof window.SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var Snake = window.SnakeGame.Snake = function () {
    this.segments = [new window.SnakeGame.Coord([10, 10])];
    this.dir = "X";
  };

  Snake.DIRECTIONS = {
    "N": [-1, 0],
    "S": [1, 0],
    "E": [0, 1],
    "W": [0, -1],
  };

  Snake.OPPOSITES = {
    "N": "S",
    "S": "N",
    "E": "W",
    "W" : "E"
  };

  Snake.prototype.isOffGrid = function (coord) {
    return coord.pos().some(function (n) {
      return n < 0 || n > 20;
    });
  };

  Snake.prototype.collidesWithSelf = function (newSegment) {
    return this.segments.some(function (segment) {
      return segment.equals(newSegment);
    });
  };

  Snake.prototype.move = function () {
    if (this.dir !== "X") {
      var oldSegment = this.segments.pop();
      var changeCoord = new window.SnakeGame.Coord(Snake.DIRECTIONS[this.dir]);

      var newSegment;

      if (this.segments.length === 0) {
        newSegment = oldSegment.plus(changeCoord);
      }
      else {
        newSegment = this.segments[0].plus(changeCoord);
      }

      if (this.isOffGrid(newSegment) || this.collidesWithSelf(newSegment)) {
        return false;
      } else {
        this.segments.unshift(newSegment);
        return true;
      }
    } else {
      return true;
    }
  };

  Snake.prototype.turn = function (newDir) {
    if (this.dir !== Snake.OPPOSITES(newDir)) {
      this.dir = newDir;
    }
  };

  Snake.prototype.grow = function () {
    var lastSegment = this.segments.slice(-1)[0];
    var newDir = Snake.DIRECTIONS[Snake.OPPOSITES[this.dir]];
    var newCoord = new window.SnakeGame.Coord(newDir);
    var newSegment = lastSegment.plus(newCoord);
    this.segments.push(newSegment);
  };

}) ();
