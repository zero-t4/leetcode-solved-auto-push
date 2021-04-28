/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {
  const oUnion = new Set();
​
  function isMerged(r, c) {
    return oUnion.has(`${r},${c}`);
  }
​
  function merge(r, c) {
    return oUnion.add(`${r},${c}`);
  }
​
  function createGroup(r, c) {
    if (!board[r]?.[c]) {
      return;
    }
​
    if (board[r][c] !== 'O') {
      return;
    }
​
    if (isMerged(r, c)) {
      return;
    } else {
      merge(r, c);
    }
​
    createGroup(r - 1, c); // top
    createGroup(r, c + 1); // right
    createGroup(r + 1, c); // bottom
    createGroup(r, c - 1); // left
  }
​
  for (let c = 0; c < board[0].length; c++) {
    // top
    if (board[0][c] === 'O') {
      createGroup(0, c);
    }
  }
​
  for (let c = 1; c < board.length; c++) {
    // right
    if (board[c][board[0].length - 1] === 'O') {
      createGroup(c, board[0].length - 1);
    }
  }
​
  for (let c = 0; c < board[0].length - 1; c++) {
    // bottom
    if (board[board.length - 1][c] === 'O') {
      createGroup(board.length - 1, c);
    }
  }
​
  for (let c = 0; c < board.length - 1; c++) {
    // left
    if (board[c][0] === 'O') {
      createGroup(c, 0);
    }
  }
​
  for (let r = 1; r < board.length - 1; r++) {
    for (let c = 1; c < board[0].length - 1; c++) {
      if (board[r][c] !== 'O') {
        continue;
      }
​
      if (isMerged(r,c)) {
        continue;
      }
​
      board[r][c] = 'X';
    }
  }
};
​
// Test cases
let board;
// board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
// solve(board);console.log(board); // [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
board = [["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]];
solve(board);console.log(board);// [["X","O","X","O","X","O"],["O","X","X","X","X","X"],["X","X","X","X","X","O"],["O","X","O","X","O","X"]]
​
