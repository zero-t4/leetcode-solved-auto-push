/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const res = [];
​
  const bt = (low, trying) => {
    if (trying.length === k) {
      res.push(trying);
      return;
    }
​
    for (let i = low; i < n + 1; i++) {
      trying.push(i);
      bt(i + 1, trying);
      trying.pop();
    }
  };
​
  bt(1, []);
​
  return res;
};
​
// Test cases
// console.log(combine(4, 2)); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
​
