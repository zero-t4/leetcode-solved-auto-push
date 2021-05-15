/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = (matrix) => {
  const max = {};
  const rowLast = matrix.length;
  const colLast = matrix[0].length;
​
  function findLongestIncreasingPath(r, c) {
    if (max[`${r},${c}`] !== undefined) {
      return max[`${r},${c}`];
    }
​
    if (
      r < 0
      || r >= rowLast
      || c >= colLast
      || c < 0
    ) {
      return 0;
    }
​
    const top = r - 1;
    const bottom = r + 1;
    const right = c + 1;
    const left = c - 1;
​
    const topCell = matrix[top]?.[c] || 0;
    const bottomCell = matrix[bottom]?.[c] || 0;
