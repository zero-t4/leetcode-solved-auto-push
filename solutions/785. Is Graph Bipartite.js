/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = (graph) => {
  const leftGroup = new Set();
  const rightGroup = new Set();

  const visitedNodes = new Set();

  try {
    for (let node = 0; node < graph.length; node++) {
      dfs(node);
    }
  } catch(e) {
    // definitely not bipartite
    return false;
  }

  function dfs(node) {
    if (visitedNodes.has(node)) {
      return;
    }

    visitedNodes.add(node);

    const connections = graph[node];

    if (leftGroup.has(node)) {
      for (let connection of connections) {
        if (leftGroup.has(connection)) {
          throw new Error('not bipartite')
        }

        rightGroup.add(connection);
        dfs(connection);
      }
    } else if (rightGroup.has(node)) {
      for (let connection of connections) {
        if (rightGroup.has(connection)) {
          throw new Error('not bipartite');
        }

        leftGroup.add(connection);
        dfs(connection);
      }
    } else {
      leftGroup.add(node);

      connections.forEach(connection => {
        rightGroup.add(connection);
        dfs(connection);
      });
    }
  }

  return true;
};

// Test cases
// console.log(isBipartite([[1,2,3],[0,2],[0,1,3],[0,2]])); // false
// console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]])); // true
// console.log(isBipartite([[1],[0,3],[3],[1,2]])); // true
// console.log(isBipartite([[3],[2,4],[1],[0,4],[1,3]])); // true
