/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  const cache = []
​
  const calcNumTreesMemoized = function (n) {
    if (n === 1) {
      return 1;
    }
​
    if (cache[n]) {
      return cache[n];
    }
​
    let totalTrees = 0;
​
    for (let root = 1; root <= n; root++) {
      let leftTrees = 1
​
      if (root > 1) {
        leftTrees = calcNumTreesMemoized(root - 1, cache)
      }
​
      let rightTrees = 1
​
      if (root < n) {
        rightTrees = calcNumTreesMemoized(n - root, cache)
      }
​
      totalTrees += leftTrees * rightTrees
    }
​
    cache[n] = totalTrees
​
    return totalTrees
  };
​
  return calcNumTreesMemoized(n);
}
​
// Test cases
console.log(numTrees(3)); // 5
console.log(numTrees(1)); // 5
console.log(numTrees(4)); // 14
​
