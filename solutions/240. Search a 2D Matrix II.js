const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (left === right) {
      return array[mid] === target;
    }

    if (array[mid] === target) {
      return true;
    }

    if (array[mid] > target) {
      right = mid;
    }

    if (array[mid] < target) {
      left = mid + 1;
    }
  }

  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let rowLeft = 0;
  let rowRight = matrix[0].length - 1;

  let columnTop = 0;
  let columnBottom = matrix.length - 1;

  while (columnTop <= columnBottom) {
    if (matrix[columnTop][rowRight] === target) {
      return true;
    }

    let targetWasFound = false;

    if (matrix[columnTop][rowRight] > target) {
      if (matrix[columnTop][rowLeft] === target) {
        return true;
      }

      if (matrix[columnTop][rowLeft] <= target) {
        targetWasFound = binarySearch(matrix[columnTop].slice(1, rowRight), target);
      }
    }

    if (targetWasFound) {
      return true;
    }

    columnTop = columnTop + 1;
  }

  return false;
};

// Test cases
// console.log(searchMatrix(
//   [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]],
//   5) === true);

