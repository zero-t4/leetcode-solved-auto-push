/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  let result = 0;
​
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    result |= n & 1;
    n >>= 1;
  }
​
  return result >>> 0;
};
​
// Test cases
console.log(reverseBits(43261596)); // 964176192
console.log(reverseBits(4294967293)); // 3221225471
​
