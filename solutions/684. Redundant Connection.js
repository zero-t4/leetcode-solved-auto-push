/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = (edges) => {
  const group = Array.from({ length: edges.length + 1 }, (_, i) => i);
​
  const recursiveFindLast = (x) => (group[x] === x)
    ? x
    : recursiveFindLast(group[x]);
​
  for (let [leftNode, rightNode] of edges) {
    const leftLast = recursiveFindLast(leftNode);
    const rightLast = recursiveFindLast(rightNode);
    if (leftLast === rightLast) {
      return [leftNode, rightNode];
    }
​
    group[rightLast] = leftLast;
  }
};
​
// Test cases
// console.log(findRedundantConnection([[1,2],[1,3],[2,3]])); // [2, 3];
