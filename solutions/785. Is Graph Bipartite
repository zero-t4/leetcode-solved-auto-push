/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = (graph) => {
  const leftGroup = new Set();
  const rightGroup = new Set();
​
  const visitedNodes = new Set();
​
  try {
    for (let node = 0; node < graph.length; node++) {
      dfs(node);
    }
  } catch(e) {
    // isDefinitelyNotBipartite
    return false;
  }
​
  function dfs(node) {
    if (visitedNodes.has(node)) {
      return;
    }
​
    visitedNodes.add(node);
​
    const connections = graph[node];
​
    if (leftGroup.has(node)) {
      for (let connection of connections) {
        if (leftGroup.has(connection)) {
          throw new Error('not bipartite')
        }
​
        if (!rightGroup.has(connection)) {
          rightGroup.add(connection);
          dfs(connection);
        }
      }
    } else if (rightGroup.has(node)) {
      for (let connection of connections) {
        if (rightGroup.has(connection)) {
          throw new Error('not bipartite');
        }
​
        if (!leftGroup.has(connection)) {
          leftGroup.add(connection);
          dfs(connection);
        }
​
      }
    } else {
      // const hasConnectionsInRightGroup = connections.some(connection => rightGroup.has(connection));
      // const hasConnectionsInLeftGroup = connections.some(connection => leftGroup.has(connection));
      //
      // if (!hasConnectionsInLeftGroup && !hasConnectionsInRightGroup) {
      //   graph.push();
      // }
      //
      // if (hasConnectionsInRightGroup) {
      leftGroup.add(node);
      connections.forEach(connection => {
        rightGroup.add(connection);
        dfs(connection);
      });
      // } else {
      //   rightGroup.add(node);
      //   connections.forEach(connection => {
      //     leftGroup.add(connection);
      //   });
      // }
    }
  }
​
  return true;
};
​
// Test cases
// console.log(isBipartite([[1,2,3],[0,2],[0,1,3],[0,2]])); // false
// console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]])); // true
// console.log(isBipartite([[1],[0,3],[3],[1,2]])); // true
// console.log(isBipartite([[3],[2,4],[1],[0,4],[1,3]])); // true
​
