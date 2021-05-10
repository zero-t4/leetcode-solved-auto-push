/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const result = [];
  let parentheses = '';
​
  function backtrack(remainingOpenParentheses, balance) {
    if (remainingOpenParentheses === 0 && balance === 0) {
      result.push(parentheses);
      return;
    }
​
    if (remainingOpenParentheses > 0) {
      parentheses += '(';
​
      backtrack(remainingOpenParentheses - 1, balance + 1);
​
      parentheses = parentheses.slice(0, -1);
    }
​
    if (balance > 0) {
      parentheses += ')';
​
      backtrack(remainingOpenParentheses, balance - 1, parentheses, result);
​
      parentheses = parentheses.slice(0, -1);
    }
  }
​
  backtrack(n, 0);
​
  return result;
};
​
// Test cases
// console.log(generateParenthesis(3)) // ["((()))","(()())","(())()","()(())","()()()"] ;
​
