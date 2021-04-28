/**
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = (stones) => {
  let numberOfRemovedStones = stones.length;
  const groups = [];
​
  const find = (x) => {
    if (groups[x] !== x) {
      return find(groups[x]);
    }
​
    return x;
  }
​
  const union = (x, y) => {
    const xPar = find(x);
    const yPar = find(y);
​
    if (xPar !== yPar) {
      groups[xPar] = yPar;
      numberOfRemovedStones -= 1;
    }
  }
​
  for (let i = 0; i < stones.length; i++) {
    groups[i] = i;
  }
​
  for (let index = 1; index < stones.length; index++) {
    const stone = stones[index];
​
    for (let prevIndex = 0; prevIndex < index; prevIndex++) {
      const prevStone = stones[prevIndex];
​
      if (stone[0] !== prevStone[0] && stone[1] !== prevStone[1]) {
        continue;
      }
​
      if (groups[index] === index) {
        groups[index] = prevIndex;
        numberOfRemovedStones -= 1;
      } else {
        union(index, prevIndex);
      }
    }
  }
​
  return stones.length - numberOfRemovedStones;
};
​
// Test cases
// console.log(removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]])); // 5
// console.log(removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]])); // 3
// console.log(removeStones([[0,0]])); // 0
// console.log(removeStones([[1, 2], [1, 3], [3, 3], [3, 1], [2, 1], [1, 0]])); // 5
​
