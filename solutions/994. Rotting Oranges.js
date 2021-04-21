/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
  // find all '2'
  let twos = [];
  let totalN = 0;
  grid.forEach((row, r) => row.forEach((col, c) => {
    if (grid[r][c] === 2) {
      twos.push([r, c]);
    }
​
    if (grid[r][c]) {
      totalN++;
    }
  }));
  
  if (totalN === 0) return 0;
​
  let totalTwos = twos.length;
  let i = -1;
  let nextStepTwos = [];
​
  while (twos.length) {
    i++;
    twos.forEach(([r, c]) => {
      if (grid[r + 1]?.[c] === 1) {
        totalTwos++;
        nextStepTwos.push([r + 1, c]);
        grid[r + 1][c] = 2;
      }
      if (grid[r - 1]?.[c] === 1) {
        totalTwos++;
        nextStepTwos.push([r - 1, c]);
        grid[r - 1][c] = 2;
      }
      if (grid[r]?.[c + 1] === 1) {
        totalTwos++;
        nextStepTwos.push([r, c + 1]);
        grid[r][c + 1] = 2;
      }
      if (grid[r]?.[c - 1] === 1) {
        totalTwos++;
        nextStepTwos.push([r, c - 1]);
        grid[r][c - 1] = 2;
      }
    });
​
    twos = nextStepTwos;
    nextStepTwos = [];
  }
​
  if (totalN !== totalTwos) {
    return -1;
  }
​
  return i;
};
​
// Test cases
// orangesRotting([[2,1,1],[1,1,0],[0,1,1]]); // 4;
// orangesRotting([[2,1,1],[0,1,1],[1,0,1]]); // -1;
// orangesRotting([[0,2]]); // 0;
​
