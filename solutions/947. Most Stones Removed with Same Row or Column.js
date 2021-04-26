/**
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = (stones) => {
  let max = -Infinity;
​
  for (let [row, column] of stones) {
    max = Math.max(row, column, max);
  }
​
  const g = Array.from({ length: (max + 1) * 2 }, (_, i) => i);
​
  const plane = Array.from({ length: (max + 1) * 2 }, () => 0);
​
  function find(node) {
    if (g[node] !== node) {
      g[node] = find(g[node]);
    }
​
    return g[node];
  }
​
  function union(leftNode, rightNode) {
    let left = find(leftNode);
    let right = find(rightNode);
​
    if (plane[left] === plane[right]) {
      g[right] = left;
      plane[left] = plane[left] + 1;
    } else if (plane[left] < plane[right]) {
      g[left] = right;
    } else {
      g[right] = left;
    }
  }
​
  for (let [row, column] of stones) {
    union(row, column + max + 1);
  }
​
  const set = new Set();
​
  for (let [row] of stones) {
    set.add(find(row));
  }
​
  return stones.length - set.size;
};
​
