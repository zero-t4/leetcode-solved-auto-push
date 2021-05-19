// 1. Create `perfectSquares` array from 1 to 9999
const perfectSquares = [];
​
let i = 1;
let square = 1;
​
do {
  square = Math.pow(i, 2);
  perfectSquares.push(square);
  i++;
} while (square < 1e4);
​
const binarySearchRange = (left, right, val) => {
  const mid = Math.floor((right - left) / 2);
​
  if (perfectSquares[mid] === val) {
    return [mid, mid];
  }
​
  if (perfectSquares[mid] > val) {
    if (perfectSquares[mid - 1] < val) {
      return [left, mid - 1];
    }
​
    return binarySearchRange(left, mid, val);
  }
​
  if (perfectSquares[mid] < val) {
    if (perfectSquares[mid + 1] > val) {
      return [left, mid];
    }
​
    return binarySearchRange(left, right + 1, val);
  }
};
​
/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n) => {
  // 2. Find nearest perfect square to `n`
  const found = binarySearchRange(0, perfectSquares.length - 1, n);
​
  const [left, right] = found;
​
  const smallestArr = [];
​
  // 3. Iterate over zeroth perfect square to found one
  for (let i = right; i >= left; i--) {
    let leftN = n;
    let smallest = 0;
​
    while (leftN - perfectSquares[i] >= 0) {
      leftN -= perfectSquares[i];
      smallest++;
    }
​
    if (leftN === 0) {
      smallestArr.push(smallest);
      continue;
    }
​
    smallestArr.push(smallest + numSquares(leftN));
  }
​
  // 4. Find a min number of perfect square sums to create `n` num/
  return Math.min(...smallestArr);
};
​
// Test cases
// console.log(numSquares(12)); // 3
// console.log(numSquares(13)); // 2
// console.log(numSquares(9)); // 1
// console.log(numSquares(26)); // 2
​
