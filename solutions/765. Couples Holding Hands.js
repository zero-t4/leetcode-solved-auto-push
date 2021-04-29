/**
 * @param {number[]} row
 * @return {number}
 */
const minSwapsCouples = (row) => {
  let swaps = 0;
​
  const indexes = row.reduce((a, c, i) => ({...a, [c]: i }), {});
​
  function swap(i, j) {
    const temp = row[i];
​
    row[i] = row[j];
    row[j] = temp;
​
    indexes[row[i]] = i;
    indexes[row[j]] = j;
  }
​
  for (let i = 0; i < row.length; i += 2) {
    const p = row[i];
    const nextP =  row[i + 1];
    const correctP = row[i] % 2 === 0 ? p + 1 : p - 1;
​
    if (nextP === correctP) {
      continue;
    }
​
    swap(i + 1, indexes[correctP]);
    swaps++;
  }
​
  return swaps;
};
​
// Test cases
// console.log(minSwapsCouples([0,2,1,3])); // 1
// console.log(minSwapsCouples([3, 2, 0, 1])); // 0
// console.log(minSwapsCouples([2,0,5,4,3,1])); // 1
// console.log(minSwapsCouples([5,3,4,2,1,0])); // 1
// console.log(minSwapsCouples([0,2,4,6,7,1,3,5])); // 3
​
