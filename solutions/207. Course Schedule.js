/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const colors = new Map();
  // '0' - white - not visited
  // '1' - gray  - visiting
  // '2' - black - visited
​
  const g = new Array(numCourses).fill().map(_ => ([]));
​
  function dfs(node) {
    const nodeColor = colors.get(node);
​
    if (nodeColor === undefined) {
      colors.set(node, '1');
​
      const children = g[node];
​
      if (children.length) {
        for (let child of children) {
          const childCycle = dfs(child, g);
​
          if (childCycle) {
            return true;
          }
        }
      }
​
      colors.set(node, '2');
​
      return false;
    }
​
    if (nodeColor === '1') {
      return true;
    }
​
    if (nodeColor === '2') {
      return false;
    }
  }
​
  for (let [left, right] of prerequisites) {
    g[left].push(right);
  }
​
  for (let node = 0; node < g.length; node++) {
    const hasCycle = dfs(node, g, colors);
​
    if (hasCycle) {
      return false
    }
  }
​
  return true;
};
​
// Test cases
// console.log(canFinish(2, [[1,0]])); // true
// console.log(canFinish(2, [[1,0],[0,1]])); // false
// console.log(canFinish(2, [])); // true
// console.log(canFinish(2, [[0, 1]])); // true
// console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]])); // true
​
