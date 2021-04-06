const binarySearch = (array, left, right, target) => {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (left === right) {
      return array[mid] === target ? mid : -1;
    }

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] > target) {
      right = mid;
    }

    if (array[mid] < target) {
      left = mid + 1;
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (left === right) {
      return nums[mid] === target ? mid : -1;
    }

    if (nums[mid] === target) {
      return mid;
    }

    let foundTargetIndex = -1;

    if (nums[left] <= nums[mid]) {
      // pivot in right direction => check left direction
      if (target >= nums[left] && target <= nums[mid]) {
        // do binary search
        foundTargetIndex = binarySearch(nums, left, mid, target);
      }

      left = mid + 1;
    } else if (nums[right] >= nums[mid]) {
      // pivot in left direction => check right direction
      if (target <= nums[right] && target >= nums[mid]) {
        // do binary search
        foundTargetIndex = binarySearch(nums, mid, right, target);
      }

      right = mid;
    } else {
      return binarySearch(nums, left, right, target);
    }

    if (foundTargetIndex !== -1) {
      return foundTargetIndex;
    }
  }
};

// Test cases
// console.log(search([0,1,2,4,5,6,7], 0) === 0);
// console.log(search([4,5,6,7,0,1,2], 0) === 4);
// console.log(search([7,0,1,2,4,5,6], 7) === 0);
// console.log(search([1,2,4,5,6,7,0], 0) === 6);

// console.log(search([4,5,6,7,0,1,2], 0) === 4);
// console.log(search([4,5,6,7,0,1,2], 3) === -1);
// console.log(search([1], 0) === -1);

// console.log(search([3,1], 1) === 1);

