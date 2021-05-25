/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n) => {
  const perfectSquares = Array.from({ length: n + 1 }, () => 0);
  perfectSquares[1] = 1;
​
  for (let i = 2; i < perfectSquares.length; i++) {
    perfectSquares[i] = Infinity;
​
    for (let j = 1; j < i; j++) {
      const square = Math.pow(j, 2);
​
      if (i - square === 0) {
        perfectSquares[i] = 1;
        break;
      } else if (i - square > 0) {
        perfectSquares[i] = Math.min(
          perfectSquares[i],
          perfectSquares[i - square] + perfectSquares[square],
        );
      }
    }
  }
​
  return perfectSquares[n]
};
​
// Test cases
console.log(numSquares(12)); // 3
​
