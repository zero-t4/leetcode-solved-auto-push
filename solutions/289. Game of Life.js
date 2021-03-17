};
​
const getCellNextState = (liveNeighbours, live) => {
  if (!live) {
    return liveNeighbours === 3 ? 1 : 0;
  }
​
  if (liveNeighbours < 2 || liveNeighbours > 3) {
    return 0;
  }
​
  if (liveNeighbours >= 2 || liveNeighbours <= 3) {
    return 1;
  }
};
​
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
  const getLiveNeighbours = createGetLiveNeighbours(board);
​
  const newBoard = board.map((row, rowIndex) =>
    row.map((_, colIndex) =>
      getCellNextState(
        getLiveNeighbours(rowIndex, colIndex),
        board[rowIndex][colIndex]
      )
    )
  );
​
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
      board[rowIndex][colIndex] = newBoard[rowIndex][colIndex];
    }
  }
};
​
// Test cases
// console.log(gameOfLife([[1,1],[1,0]]));
// console.log(
//   gameOfLife([
//     [0, 1, 0],
//     [0, 0, 1],
//     [1, 1, 1],
//     [0, 0, 0],
//   ])
// );
​
