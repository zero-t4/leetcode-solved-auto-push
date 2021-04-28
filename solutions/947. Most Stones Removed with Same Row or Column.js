/**
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = (stones) => {
  const parents = Array.from({ length: stones.length }, (_, i) => i);
  const sizes = Array.from({ length: stones.length }, () => 1);
  let removedStones = 0;
​
  const get = (x) => {
    if (parents[x] === x) {
      return x;
    }
    parents[x] = get(parents[x]);
​
    return parents[x];
  }
​
  const merge = (a, b) => {
    const pA = get(a);
    const pB = get(b);
​
    if (pA === pB) {
      return;
    }
​
    if (sizes[pB] > sizes[pA]) {
      sizes[pB] += sizes[pA];
      parents[pA] = pB;
    } else {
      sizes[pA] += sizes[pB];
      parents[pB] = pA;
    }
  }
​
  const isMerged = (a, b) => {
    const pA = get(a);
    const pB = get(b);
​
    return pA === pB;
  }
​
  for (let i = 0; i < stones.length; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      if (isMerged(i, j)) {
        continue;
      }
​
      if (stones[i][0] === stones[j][0]) {
        // equal by row
        merge(i, j);
        removedStones++;
      } else if (stones[i][1] === stones[j][1]) {
        // equal by column
        merge(i, j);
        removedStones++;
      }
    }
  }
​
  return removedStones;
}
​
// Test cases
// console.log(removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]])); // 5
// console.log(removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]])); // 3
// console.log(removeStones([[0,0]])); // 0
// console.log(removeStones([[1, 2], [1, 3], [3, 3], [3, 1], [2, 1], [1, 0]])); // 0
​
