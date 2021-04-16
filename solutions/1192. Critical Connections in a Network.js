function criticalConnections(n, connections) {
  // Build graph
  const graph = new Array(n).fill('').map(_ => ([]));
​
  for (const [leftNodeOfConnection, rightNodeOfConnection] of connections) {
    graph[leftNodeOfConnection].push(rightNodeOfConnection);
    graph[rightNodeOfConnection].push(leftNodeOfConnection);
  }
​
  let time = 0;
​
  const criticalConnections = [];
​
  const low = [];
​
  const disc = [];
​
  for (let i = 0; i < n; i++) {
    disc.push(Infinity);
  }
​
  function dfs(node, prevNode) {
    time = time + 1;
    disc[node] = time;
    low[node] = time;
​
    for (const childNode of graph[node]) {
      if (childNode === prevNode) {
        continue;
      }
​
      if (disc[childNode] === Infinity) {
        dfs(childNode, node);
​
        low[node] = Math.min(low[node], low[childNode]);
​
        if (low[childNode] > disc[node]) {
          criticalConnections.push([node, childNode]);
        }
      } else {
        low[node] = Math.min(low[node], disc[childNode]);
      }
    }
  }
​
  dfs(0, -1);
​
  return criticalConnections;
}
​
// Test cases
// console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]])) // [[1,3]]
​
