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
    const rightCell = matrix[r]?.[right] || 0;
    const leftCell = matrix[r]?.[left] || 0;
​
    const currentCell = matrix[r][c];
​
    const topMax = topCell > currentCell
      ? findLongestIncreasingPath(top, c)
      : 0;
​
    const bottomMax = bottomCell > currentCell
      ? findLongestIncreasingPath(bottom, c)
      : 0;
​
    const rightMax = rightCell > currentCell
      ? findLongestIncreasingPath(r, right)
      : 0;
​
    const leftMax = leftCell > currentCell
      ? findLongestIncreasingPath(r, left)
      : 0;
​
​
    max[`${r},${c}`] = Math.max(
      topMax,
      bottomMax,
      rightMax,
      leftMax,
    ) + 1;
​
    return max[`${r},${c}`];
  }
​
  for (let r = 0; r < rowLast; r++) {
    for (let c = 0; c < colLast; c++) {
      findLongestIncreasingPath(r, c);
    }
  }
​
  return Math.max(...Object.values(max));
};
​
// console.log(longestIncreasingPath([
//   [9,9,4],
//   [6,6,8],
//   [2,1,1],
// ])); // [1, 2, 6, 9].
​
