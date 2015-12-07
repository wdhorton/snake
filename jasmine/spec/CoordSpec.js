describe("Coord", function() {
  var coord;

  describe("constructor", function() {
    it("raises an error when not passed an array", function() {
      expect(function() { new SnakeGame.Coord(); }).toThrow();
    });

    it("sets row and column properties", function() {
      coord = new SnakeGame.Coord([1,2]);
      expect(coord).toEqual(jasmine.objectContaining({
        row: 1,
        col: 2
      }));
    });
  });

  describe("#pos", function() {
    it("returns an array giving the position", function() {
      coord = new SnakeGame.Coord([2,4]);
      expect(coord.pos()).toEqual([2,4]);
    });
  });

  describe("#plus", function() {
    var firstCoord, secondCoord, result;

    beforeAll(function() {
      firstCoord = new SnakeGame.Coord([2,3]);
      secondCoord = new SnakeGame.Coord([5,1]);
      result = firstCoord.plus(secondCoord);
    });

    it("returns a new Coord", function () {
      expect(result instanceof SnakeGame.Coord).toEqual(true);
    });

    it("correctly adds the coordinates", function () {
      expect(result).toEqual(jasmine.objectContaining({
        row: 7,
        col: 4
      }));
    });
  });

  describe("#equals", function() {
    beforeAll(function() {
      firstCoord = new SnakeGame.Coord([2,3]);
      secondCoord = new SnakeGame.Coord([2,3]);
      thirdCoord = new SnakeGame.Coord([5,4]);
    });

    it("returns true when Coords have the same position", function() {
      expect(firstCoord.equals(secondCoord)).toEqual(true);
    });

    it("returns false when Coords have different positions", function() {
      expect(firstCoord.equals(thirdCoord)).toEqual(false);
    });
  });



});
