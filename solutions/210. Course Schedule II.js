/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  const response = [];
​
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
          const childCycle = dfs(child);
​
          if (childCycle) {
            return true;
          }
        }
      }
​
      colors.set(node, '2');
      response.push(node);
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
    const hasCycle = dfs(node);
​
    if (hasCycle) {
      return []
    }
  }
​
  return response;
};
​
// Test cases
// console.log(findOrder(2, [[1,0]])); // [0, 1]
// console.log(findOrder(2, [[1,0],[0,1]])); // []
// console.log(findOrder(1, [])); // [0]
// console.log(findOrder(2, [[0, 1]])); // [1, 0]
// console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); // [0,2,1,3]
​
