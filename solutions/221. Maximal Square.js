/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = (matrix) => {
  let max = 0;
​
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === '1') {
        matrix[r][c] =  Math.min(
          matrix[r - 1]?.[c] ?? 0,
          matrix[r]?.[c - 1] ?? 0,
          matrix[r - 1]?.[c - 1] ?? 0,
        ) + 1;
      }
​
      max = Math.max(matrix[r][c], max);
    }
  }
​
  return max * max;
};
​
// Test cases
// console.log(maximalSquare([
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"],
// ]));
// console.log(maximalSquare([
//   ["0","1"],
//   ["1","0"],
// ]));
// console.log(maximalSquare([
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ]));
​
