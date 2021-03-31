/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const entries = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    const left = target - current;

    if (left in entries) {
      return [i, entries[left]];
    } else {
      entries[current] = i;
    }
  }
};

// Test cases
// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([0, 4, 3, 0], 0)); // [0, 3]
// console.log(twoSum([-3, 4, 3, 90], 0)); // [0, 2]
// console.log(twoSum([0, 3, -3, 4, -1], -1)); // [0, 4]

