/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  const lastRowIndex = grid.length;
  const lastColumnIndex = grid[0].length;
​
  for(let r = 0; r < lastRowIndex; r++) {
    for(let c = 0; c < lastColumnIndex; c++) {
      const top = r - 1;
      let topCell = top < 0 ? Infinity : grid[top][c];
​
​
      const left = c - 1;
      let leftCell = left < 0 ? Infinity : grid[r][left];
​
      topCell = (topCell === leftCell && leftCell === Infinity) 
        ? 0 
        : topCell;
​
      grid[r][c] = Math.min(
        grid[r][c] + topCell,
        grid[r][c] + leftCell,
      );
    }
  }
​
  return grid[lastRowIndex - 1][lastColumnIndex - 1];
};
​
// Test cases
// console.time();
// console.log(minPathSum([
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ])); // 7
// console.timeEnd();
// console.time();
// console.log(minPathSum([
//   [3,8,6,0,5,9,9,6,3,4,0,5,7,3,9,3],
//   [0,9,2,5,5,4,9,1,4,6,9,5,6,7,3,2],
//   [8,2,2,3,3,3,1,6,9,1,1,6,6,2,1,9],
//   [1,3,6,9,9,5,0,3,4,9,1,0,9,6,2,7],
//   [8,6,2,2,1,3,0,0,7,2,7,5,4,8,4,8],
//   [4,1,9,5,8,9,9,2,0,2,5,1,8,7,0,9],
//   [6,2,1,7,8,1,8,5,5,7,0,2,5,7,2,1],
//   [8,1,7,6,2,8,1,2,2,6,4,0,5,4,1,3],
//   [9,2,1,7,6,1,4,3,8,6,5,5,3,9,7,3],
//   [0,6,0,2,4,3,7,6,1,3,8,6,9,0,0,8],
//   [4,3,7,2,4,3,6,4,0,3,9,5,3,6,9,3],
//   [2,1,8,8,4,5,6,5,8,7,3,7,7,5,8,3],
//   [0,7,6,6,1,2,0,3,5,0,8,0,8,7,4,3],
//   [0,4,3,4,9,0,1,9,7,7,8,6,4,6,9,5],
//   [6,5,1,9,9,2,2,7,4,2,7,2,2,3,7,2],
//   [7,1,9,6,1,2,7,0,9,6,6,4,4,5,1,0],
//   [3,4,9,2,8,3,1,2,6,9,7,0,2,4,2,0],
//   [5,1,8,8,4,6,8,5,2,4,1,6,2,2,9,7]
// ])); // 83
// console.timeEnd();
​
