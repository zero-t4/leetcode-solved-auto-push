/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => {
  if (nums.length === 1) {
    return 0;
  }

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    } else {
      return i-1;
    }

    if (i === nums.length - 1) {
      return i;
    }
  }
};

// Test cases
// console.assert(findPeakElement([1,2,3,1]) === 2, 'test 1 failed');
// console.assert(findPeakElement([1,2,1,3,5,6,4]) === 1, 'test 2 failed');
// console.assert(findPeakElement([0]) === 0, 'test 3 failed');
// console.assert(findPeakElement([0, 1]) === 1, 'test 4 failed');
// console.assert(findPeakElement([0, -1]) === 0, 'test 5 failed');

