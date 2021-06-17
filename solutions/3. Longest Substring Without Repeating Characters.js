/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const slidingWindowCharsSet = {};
​
  let longest = 0;
​
  let i = 0;
  let j = 0;
​
  while (i < s.length && j < s.length) {
    if (!slidingWindowCharsSet[s[j]]) {
      slidingWindowCharsSet[s[j]] = true;
​
      longest = Math.max(longest, j - i + 1);
​
      j += 1;
    } else {
      delete slidingWindowCharsSet[s[i]];
​
      i += 1;
    }
  }
  return longest;
};
​
// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
​
