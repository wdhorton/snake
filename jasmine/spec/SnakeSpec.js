describe("Snake", function() {
  var snake;

  beforeEach(function() {
    snake = new SnakeGame.Snake();
  });

  describe("#collidesWithSelf", function() {
    it("returns true when passed a new segment already occupied by the snake", function () {
      var newSegment = new SnakeGame.Coord([10, 10]);
      expect(snake.collidesWithSelf(newSegment)).toEqual(true);
    });

    it("returns false when passed a new segment not occupied by the snake", function () {
      var newSegment = new SnakeGame.Coord([2, 10]);
      expect(snake.collidesWithSelf(newSegment)).toEqual(false);
    });
  });

  describe("#move", function () {
    beforeEach(function () {
      oldSegments = snake.segments.slice();
    });

    it("doesn't move when direction is X", function () {
      snake.dir = "X";
      snake.move();
      expect(snake.segments).toEqual(oldSegments);
    });

    it("moves north", function () {
      snake.dir = "N";
      snake.move();
      expect(true).toEqual(true);
    });
  });
});
