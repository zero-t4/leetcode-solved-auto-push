/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const rowsLength = matrix.length;
  const colsLength = matrix[0].length;

  const matrixSize = rowsLength * colsLength;

  let top = 0;
  let right = colsLength - 1;
  let down = rowsLength - 1;
  let left = 0;

  const result = [];

  do {
    for(let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    for(let i = top + 1; i <= down; i++) {
      result.push(matrix[i][right]);
    }
    for(let i = right - 1; i >= left; i--) {
      result.push(matrix[down][i]);
    }
    for(let i = down - 1; i > top; i--) {
      result.push(matrix[i][left]);
    }

    top++;
    right--;
    down--;
    left++;

  } while (
    result.length < matrixSize
  );

  result.length = matrixSize;

  return result;
};

// Test cases
// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));
// console.log(spiralOrder([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]));
