/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let totalWaysToClimb = 0;
  
  const memoizedValues = {};
  
  function climb(n) {
    if (n === 1) {
      return 1;
    }
​
    if (n === 2) {
      return 2;
    }
    
    if (memoizedValues[n] !== undefined) {
      return memoizedValues[n];
    }
    
    memoizedValues[n] = climb(n - 1) + climb(n - 2);
    
    return memoizedValues[n];
  }
  
  return climb(n);
};
​
// Test cases
// console.log(climbStairs(3)); // 3
