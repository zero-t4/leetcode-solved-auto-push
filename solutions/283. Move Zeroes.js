/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => nums.sort((a, b) => {
  if (a === 0) {
    return 1;
  }
​
  if (b === 0) {
    return -1;
  }
​
  return 0;
});
​
// console.log(moveZeroes([]));
// console.log(moveZeroes([1]));
// console.log(moveZeroes([0]));
// console.log(moveZeroes([1, 0]));
// console.log(moveZeroes([0, 1]));
// console.log(moveZeroes([1, 0, 1]));
// console.log(moveZeroes([0, 1, 0, 1]));
// console.log(moveZeroes([1, 0, 0, 1]));
// console.log(moveZeroes([0, 1, 1, 0]));
​
