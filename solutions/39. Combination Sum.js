/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const result = [];
​
  const bt = (index, sum, elements) => {
    if (sum === target) {
      result.push(Array.from(elements));
      return;
    }
​
    if (sum < target) {
      for (let candidateIndex = index; candidateIndex < candidates.length; candidateIndex++) {
        elements.push(candidates[candidateIndex]);
        bt(candidateIndex, sum + candidates[candidateIndex], elements);
        elements.pop();
      }
    }
    // else if (sum > target) {
    //   // do nothing?
    // }
  };
​
  bt(0, 0, []);
​
  return result;
};
​
// console.log(combinationSum([2,3,6,7], 7)); // [[2,2,3],[7]]
// console.log(combinationSum([2,3,5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
​
