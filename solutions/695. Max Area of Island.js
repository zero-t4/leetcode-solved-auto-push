/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
  let maxIslands = 0;
​
  grid.forEach((row, r) => row.forEach((col, c) => {
    if (grid[r][c]) {
      maxIslands = Math.max(dfs(r, c), maxIslands);
    }
  }));
​
  function dfs(r, c) {
    if (!grid[r]?.[c]) {
      return 0;
    }
​
    grid[r][c] = null;
​
    let bottom = 0;
    let top = 0;
    let right = 0;
    let left = 0;
​
    if (grid[r + 1]?.[c] === 1) {
      bottom = dfs(r + 1, c);
    }
    if (grid[r - 1]?.[c] === 1) {
      top = dfs(r - 1, c);
    }
    if (grid[r]?.[c + 1] === 1) {
      right = dfs(r, c + 1);
    }
    if (grid[r]?.[c - 1] === 1) {
      left = dfs(r, c - 1);
    }
​
    return top + right + bottom + left + 1;
  }
​
  return maxIslands;
};
​
// Test cases
// maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
//   [0,0,0,0,0,0,0,1,1,1,0,0,0],
//   [0,1,1,0,1,0,0,0,0,0,0,0,0],
//   [0,1,0,0,1,1,0,0,1,0,1,0,0],
//   [0,1,0,0,1,1,0,0,1,1,1,0,0],
//   [0,0,0,0,0,0,0,0,0,0,1,0,0],
//   [0,0,0,0,0,0,0,1,1,1,0,0,0],
//   [0,0,0,0,0,0,0,1,1,0,0,0,0]]) // 6
// maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]) // 4
// maxAreaOfIsland([[0,0,0,0,0,0,0,0]]) // 0
​
