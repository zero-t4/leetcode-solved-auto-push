/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0]) {
    return 0
  }
​
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
​
  let dp = Array.from(
    { length: m },
    () => Array.from({ length: n }, () => 0)
  );
​
  dp[0][0] = 1;
​
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (
        obstacleGrid[y][x] === 1
        || (y === 0 && x === 0)
      ) {
        continue
      }
​
      dp[y][x] = (dp[y - 1]?.[x] ?? 0) + (dp[y][x - 1] ?? 0)
    }
  }
​
  return dp[m - 1][n - 1]
};
​
// Test cases
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // 2
​
