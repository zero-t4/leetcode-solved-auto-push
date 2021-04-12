function findRelationsPath(graphs, a, b, iterationKey) {
  if (graphs[a].val === b) {
    return 1;
  }
​
  for (let i = 0; i < graphs[a].children.length; i++) {
    if (!graphs[a].children[i].visited[iterationKey]) {
      graphs[a].children[i].visited[iterationKey] = true;
​
      const foundNodeRelation = findRelationsPath(graphs, graphs[a].children[i].node, b, iterationKey);
​
      if (foundNodeRelation !== null) {
        return graphs[a].children[i].relation * foundNodeRelation;
      }
    }
  }
​
  return null;
}
​
function GraphNode(val, children = []) {
  this.val = val;
  this.children = children;
}
​
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = (equations, values, queries) => {
  const graphs = {};
​
  // building initial cyclic graphs
  for (let i = 0; i < equations.length; i++) {
    let node = graphs[equations[i][0]] || new GraphNode(equations[i][0]);
​
    node.children.push({
      visited: {
        // [iteration key]: bool
      },
      relation: values[i],
      node: equations[i][1],
    });
​
    graphs[equations[i][0]] = node;
    graphs[equations[i][1]] = new GraphNode(
      equations[i][1],
      [{
        visited: {
          // [iteration key]: bool
        },
        relation: 1 / values[i],
        node: equations[i][0],
      }],
    );
  }
​
  return queries.map(([a, b], i) => {
    if (!graphs[a]) {
      return -1;
    }
​
    const foundNode = findRelationsPath(graphs, a, b, i);
​
    return foundNode !== null ? foundNode : -1;
  });
};
​
// Test cases
// console.log(calcEquation(
//   [["a","b"],["b","c"]],
//   [2.0,3.0],
//   [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]],
// ));
// console.log(calcEquation(
//   [["a","b"],["e","f"],["b","e"]],
//   [3.4,1.4,2.3],
//   [["b","a"],["a","f"],["f","f"],["e","e"],["c","c"],["a","c"],["f","e"]],
// ));
​
