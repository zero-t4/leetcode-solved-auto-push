/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  let hasZero0 = false;

  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (hasZero0) {
        return new Array(nums.length).fill(0);
      }

      hasZero0 = true;
    } else {
      product *= nums[i];
    }
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!hasZero0) {
      result[i] = product / nums[i];
    } else if (hasZero0 && nums[i] === 0) {
      result[i] = product;
    } else {
      result[i] = 0;
    }
  }

  return result;
};

// Test cases
// console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [24,12,8,6]


