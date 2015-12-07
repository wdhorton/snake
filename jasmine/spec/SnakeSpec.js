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

    describe("single-block snake", function() {

      it("moves north", function () {
        snake.dir = "N";
        snake.move();
        expect(snake.segments[0].pos()).toEqual([9, 10]);
      });

      it("moves west", function () {
        snake.dir = "W";
        snake.move();
        expect(snake.segments[0].pos()).toEqual([10, 9]);
      });

      it("moves east", function () {
        snake.dir = "E";
        snake.move();
        expect(snake.segments[0].pos()).toEqual([10, 11]);
      });

      it("moves south", function () {
        snake.dir = "S";
        snake.move();
        expect(snake.segments[0].pos()).toEqual([11, 10]);
      });

    });

    describe("multi-block snake", function () {
      it("moves correctly with bigger snake", function () {
        snake.dir = "S";
        snake.segments= [new SnakeGame.Coord([10,10]), new SnakeGame.Coord([9, 10])];
        snake.move();
        snake_positions = snake.segments.map(function (el) {
          return el.pos();
        });

        expect(snake_positions).toContain([10, 10]);
        expect(snake_positions).toContain([11, 10]);
      });

      it("has back parts continue to move in old direction after turn", function () {
        snake.dir = "E";
        snake.segments= [
          new SnakeGame.Coord([10,10]),
          new SnakeGame.Coord([9, 10]),
          new SnakeGame.Coord([8, 10])
        ];

        snake.move();
        snake_positions = snake.segments.map(function (el) {
          return el.pos();
        });

        expect(snake_positions).toContain([10, 11]);
        expect(snake_positions).toContain([10, 10]);
        expect(snake_positions).toContain([9, 10]);
      });
    });
  });

  describe("#turn", function (){
    beforeEach(function () {
      snake.dir = "N";
    });

    it("does not allow turn in the opposite direction", function () {
      snake.turn("S");
      expect(snake.dir).toEqual("N");
    });

    it("turns in allowed direction", function() {
      snake.turn("E");
      expect(snake.dir).toEqual("E");
    });
  });
});
