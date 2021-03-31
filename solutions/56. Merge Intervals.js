const isPointInRange = (start, end, point) => [
  point <= end,
  point >= start,
].every(Boolean);

const isInRange = (start1, end1, start2, end2) => [
  isPointInRange(start1, end1, start2),
  isPointInRange(start1, end1, end2),
].every(Boolean);

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }

    if (b[1] > a[1]) {
      return 1;
    }

    return 0;
  })
  const temp = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const prevElement = temp[temp.length - 1];

    if (isInRange(start, end, prevElement[0], prevElement[1])) {
      temp[temp.length - 1] = [start, end];
    } else if (isPointInRange(prevElement[0], prevElement[1], start) && end > prevElement[1]) {
      temp[temp.length - 1][1] = end;
    } else if (isPointInRange(prevElement[0], prevElement[1], end) && start < prevElement[0]) {
      temp[temp.length - 1][0] = start;
    } else if (!isInRange(prevElement[0], prevElement[1], start, end)) {
      temp.push([start, end]);
    }
  }

  return temp;
};


// Test cases
// isEqual = (a) => (b) => JSON.stringify(a) === JSON.stringify(b);
// console.assert(isEqual(merge([[0, 1]]))([[0, 1]]), 'test 1 failed');
// console.assert(isEqual(merge([[0, 1], [2, 3]]))([[0, 1], [2, 3]]), 'test 2 failed');
// console.assert(isEqual(merge([[0, 2], [1, 3]]))([[0, 3]]), 'test 3 failed');
// console.assert(isEqual(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))([[1, 6], [8, 10], [15, 18]]), 'test 4 failed');
// console.assert(isEqual(merge([[1, 4], [4, 5]]))([[1, 5]]), 'test 5 failed');
// console.assert(isEqual(merge([[1, 4], [0, 4]]))([[0, 4]]), 'test 6 failed');
// console.assert(isEqual(merge([[1, 4], [0, 5]]))([[0, 5]]), 'test 7 failed');
// console.assert(isEqual(merge([[1, 4], [2, 3]]))([[1, 4]]), 'test 8 failed');
// console.assert(isEqual(merge([[1, 4], [0, 0]]))([[1, 4], [0, 0]]), 'test 9 failed');
// console.assert(isEqual(merge([[1, 4], [1, 4]]))([[1, 4]]), 'test 10 failed');
// console.assert(isEqual(merge([[1, 4], [2, 3]]))([[1, 4]]), 'test 11 failed');
// console.assert(isEqual(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))([[1, 10]]), 'test 12 failed');
