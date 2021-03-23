/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
​
  while (left - 1 <  right) {
    const i = Math.floor((left + right) / 2);
​
    if (nums[i] === target) {
      return i
    } else if (nums[i] > target) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
​
  return left;
};
​
// Test cases
// console.assert(searchInsert([1,3,5,6], 5) === 2, 'test 1 failed');
// console.assert(searchInsert([1,3,5,6], 2) === 1, 'test 2 failed');
// console.assert(searchInsert([1,3,5,6], 7) === 4, 'test 3 failed');
// console.assert(searchInsert([1,3,5,6], 0) === 0, 'test 4 failed');
// console.assert(searchInsert([1], 0) === 0, 'test 5 failed');
// console.assert(searchInsert([1], 1) === 0, 'test 5 failed');
// console.assert(searchInsert([1, 3], 2) === 1, 'test 5 failed');
