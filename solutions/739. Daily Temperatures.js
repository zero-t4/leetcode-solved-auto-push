/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = [];
  
  const result = [];
​
  for (let i = T.length - 1; i > -1; i--) {
    while(stack.length && stack[stack.length - 1].val <= T[i]) {
      stack.pop();
    }
        
    if(stack.length == 0) {
      result[i] = 0;
    } else {
      result[i] = stack[stack.length - 1].index - i;
    }
​
    stack.push({ val: T[i], index: i })
  }
  
  return result;
};
