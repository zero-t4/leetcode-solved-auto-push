/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
​
  const map = {};
​
  for (let char of s) {
    if (map[char]) {
      map[char] = map[char] + 1;
    } else {
      map[char] = 1;
    }
  }
​
  for (let char of t) {
    if (map[char]) {
      map[char] = map[char] - 1;
    } else {
      return false;
    }
  }
​
  return true;
};
​
// Test cases
// console.log(isAnagram("anagram", "nagaram"));
​
