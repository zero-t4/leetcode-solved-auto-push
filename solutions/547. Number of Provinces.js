/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = (isConnected) => {
  const n = isConnected.length;
​
  const visited = new Set();
  let provinces = 0;
​
  // top level cities traverse
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      provinces++;
​
      visited.add(i);
      checkChildren(i, isConnected, visited)
    }
  }
​
  return provinces;
};
​
// children level traverse
function checkChildren(node, isConnected, visited) {
  for (let j = 0; j < isConnected.length; j++) {
​
    if (
      node === j // i === j (same city)
    ) {
      continue;
    }
​
    if (
      isConnected[node][j] === 0 // no connection
    ) {
      continue;
    }
​
    if (
      visited.has(j) // not visited yet
    ) {
      continue;
    }
​
    visited.add(j);
    checkChildren(j, isConnected, visited);
  }
}
​
// Test cases
// console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])); // 3
// console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // 2
// console.log(findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]])); // 1
​
