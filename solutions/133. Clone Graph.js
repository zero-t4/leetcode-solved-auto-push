function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
​
function cloneNode(node) {
  if (visited.has(node)) {
    return visited.get(node);
  }
​
  const newNode = new Node(node.val);
​
  visited.set(node, newNode);
​
  let neighbors = [];
​
  node.neighbors.forEach(neighbor => {
    neighbors.push(cloneNode(neighbor));
  });
​
  newNode.neighbors = neighbors;
​
  return newNode;
}
​
const visited = new Map();
​
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
  if (!node) {
    return;
  }
​
  return cloneNode(node);
};
​
// Test cases
// const _1 = new Node(1);
// const _2 = new Node(2);
// const _3 = new Node(3);
// const _4 = new Node(4);
//
// _1.neighbors = [_2, _4];
// _2.neighbors = [_1, _3];
// _3.neighbors = [_2, _4];
// _4.neighbors = [_1, _3];
//
// const copy = cloneGraph(_1);
// console.log(copy);
// console.log(_1.neighbors[1] === copy.neighbors[1]);
​
