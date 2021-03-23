/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
​
  for (let _ = 0; _ < nums.length; _++) {
    const i = Math.floor((left + right) / 2);
​
    if (left === right) {
      return nums[i] === target
        ? i
        : -1;
    }
​
    if (nums[i] === target) {
      return i;
    }
​
    if (nums[i] > target) {
      right = i;
    }
    if (nums[i] < target) {
      left = i + 1;
    }
  }
};
​
// while version.
const search1 = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
​
  while (left !== right) {
    const i = Math.floor((left + right) / 2);
​
    if (nums[i] === target) {
      return i;
    }
​
    if (nums[i] > target) {
      right = i;
      continue;
    }
​
    if (nums[i] < target) {
      left = i + 1;
    }
  }
​
  const i = nums.length - 1;
​
  return nums[i] === target ? i : -1;
};
​
// Test cases
// console.log(search([1,2,3,4,5,6,7,8,9,10], 1.5));
// console.log(search([1,2,3,4,5,6,7,8,9,10], 1));
// console.log(search([1,2,3,4,5,6,7,8,9,10], 9));
// console.log(search([1,2,3,4,5,6,7,8,9,10], 5));
