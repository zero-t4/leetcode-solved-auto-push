/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const l = nums.length;
  const result = [];
​
  function bt(index, combination) {
    if (combination.length === l) {
      result.push(Array.from(combination));
      return;
    }
​
    for (const num of nums) {
      if (combination.includes(num)) {
        continue;
      }
​
      combination.push(num);
      bt(index + 1, combination);
      combination.pop();
    }
  }
​
  bt(0, []);
​
  return result;
};
​
// console.log(permute([1,2,3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// console.log(permute([0,1])); // [[0,1],[1,0]]
// console.log(permute([1])); // [[1]]
​
