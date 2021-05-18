/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  let max = 1;
​
  const maxLengths = Array.from({ length: nums.length }, () => max);
​
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        maxLengths[i] = Math.max(maxLengths[j] + 1, maxLengths[i]);
        max = Math.max(max, maxLengths[i]);
      }
    }
  }
​
  return max;
};
​
// Test cases
// console.log(lengthOfLIS([-1, 3, 4, 5, 2, 2, 2, 2])); // 4
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
// console.log(lengthOfLIS([0,1,0,3,2,3])); // 4
// console.log(lengthOfLIS([7,7,7,7,7,7,7])); // 1
// console.log(lengthOfLIS([1,2,3])); // 3
// console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6])); // 6
// console.log(lengthOfLIS([0,1,0,3,2,3])); // 4
​
