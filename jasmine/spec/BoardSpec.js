describe("Board", function () {
  var board;

  beforeEach(function () {
    board = new SnakeGame.Board();
  });

  describe("#makeGrid", function () {
    it("returns an array", function () {
      expect(board.makeGrid() instanceof Array).toEqual(true);
    });

    it("makes the right number of rows", function () {
      numRows = board.makeGrid().length;
      expect(numRows).toEqual(SnakeGame.Board.SIZE);
    });

    it("makes the right number of columns", function () {
      numCols = board.makeGrid()[0].length;
      expect(numCols).toEqual(SnakeGame.Board.SIZE);
    });
  });

  describe("#render", function () {
    it("renders the grid to a string", function () {
      expect(board.render()).toEqual(
         "....................\n....................\n....................\n" +
         "....................\n....................\n....................\n" +
         "....................\n....................\n....................\n" +
         "....................\n..........s.........\n....................\n" +
         "....................\n....................\n....................\n" +
         "....................\n....................\n....................\n" +
         "....................\n...................."
      );
    });
  });
});
