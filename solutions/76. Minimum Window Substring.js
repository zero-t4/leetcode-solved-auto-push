/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const map = {};
​
  let start = 0;
  let matched = 0;
​
  let minLength = Infinity;
​
  let substrStart = 0;
​
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
​
    map[char] = (map[char] ?? 0) + 1;
  }
​
  for (let end = 0; end < s.length; end++) {
    let right = s[end];
​
    if (right in map) {
      map[right]--;
​
      if (map[right] >= 0) {
        matched++;
      }
    }
​
    while (matched === t.length) {
      if (minLength > end - start + 1) {
        minLength = end - start + 1;
        substrStart = start;
      }
​
      let left = s[start];
​
      start++;
​
      if (left in map) {
        if (map[left] === 0) {
          matched--;
        }
​
        map[left]++;
      }
    }
  }
​
  return minLength > s.length
    ? '' :
    s.substring(substrStart, substrStart + minLength);
};
​
// Test cases
console.log(minWindow('ADOBECODEBANC', 'ABC')); // 'BANC'
console.log(minWindow('a', 'a')); // 'a'
console.log(minWindow('a', 'aa')); // ''
​
