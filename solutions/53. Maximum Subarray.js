/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  if (!nums.length) {
    return 0;
  }

  let max = nums[0];
  let accumulatedSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];

    accumulatedSum = Math.max(accumulatedSum + curr, curr)

    if (Math.max(curr, accumulatedSum) > max) {
      max = Math.max(curr, accumulatedSum);
      accumulatedSum = max;
    }
  }

  return max;
};

// Test cases
// console.assert(maxSubArray([]) === 0, 'test 1 failed');
// console.assert(maxSubArray([0]) === 0, 'test 2 failed');
// console.assert(maxSubArray([1]) === 1, 'test 3 failed');
// console.assert(maxSubArray([0,1]) === 1, 'test 4 failed');
// console.assert(maxSubArray([1,0]) === 1, 'test 5 failed');
// console.assert(maxSubArray([1,1]) === 2, 'test 6 failed');
// console.assert(maxSubArray([0,0]) === 0, 'test 8 failed');
// console.assert(maxSubArray([1,2]) === 3, 'test 7 failed');
// console.assert(maxSubArray([0,1,0]) === 1, 'test 9 failed');
// console.assert(maxSubArray([0,1,1,0]) === 2, 'test 10 failed');
// console.assert(maxSubArray([0,2,0]) === 2, 'test 11 failed');
// console.assert(maxSubArray([0,2,2,0]) === 4, 'test 12 failed');
// console.assert(maxSubArray([0,2,0,-1]) === 2, 'test 13 failed');
// console.assert(maxSubArray([0,2,0,-1,2]) === 3, 'test 14 failed');
// console.assert(maxSubArray([0,2,0,-1,2,-2]) === 3, 'test 15 failed');
// console.assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6, 'test 16 failed');
// console.assert(maxSubArray([1, -2, -1, 2]) === 2, 'test 17 failed');
// console.assert(maxSubArray([8,-19,5,-4,20]) === 21, 'test 17 failed');

