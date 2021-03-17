const createGetLiveNeighbours = (matrix) => (row, column) => {
  let liveNeighbours = 0;
  for (let i = -1; i < 2; i++) {
    if (matrix[row - 1]?.[column + i]) {
      liveNeighbours++;
    }
​
    if (matrix[row + 1]?.[column + i]) {
      liveNeighbours++;
    }
  }
​
  if (matrix[row]?.[column - 1]) {
    liveNeighbours++;
  }
  if (matrix[row]?.[column + 1]) {
    liveNeighbours++;
  }
​
  return liveNeighbours;
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
