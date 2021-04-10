/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
​
  const parts = path.split('/');
  
  parts.forEach((el) => {
    if (el === '.' || el === '') {
      
    } else if (el === '..') {
      stack.pop();
    } else {
      stack.push(el);
    }
  });
  
  return `/${stack.join('/')}`;
};
​
// Test cases
// console.log(simplifyPath('/home/'))
// console.log(simplifyPath('/../'))
// console.log(simplifyPath('/home//foo/'))
