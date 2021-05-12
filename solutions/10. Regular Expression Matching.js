const isMatch = (s, p) => {
  const bt = (sIndex, pIndex) => {
    if (sIndex >= s.length && pIndex >= p.length) {
      // match
      return true;
    }
​
    if (sIndex === s.length) {
      if (p[pIndex + 1] === '*') {
        return bt(sIndex, pIndex + 2);
      }
​
      return false;
    }
​
    if (pIndex >= p.length || sIndex >= s.length) {
      return false;
    }
​
    if (p[pIndex + 1] === '*') {
      const zero = bt(sIndex, pIndex + 2);
​
      let oneOrMore = false;
      if (s[sIndex] === p[pIndex] || p[pIndex] === '.') {
        oneOrMore = bt(sIndex + 1, pIndex);
      }
​
      return zero || oneOrMore;
    }
​
    if (p[pIndex] === '.' || s[sIndex] === p[pIndex]) {
      return bt(sIndex + 1, pIndex + 1);
    }
​
    return false;
  };
​
  return bt(0, 0);
};
​
// Test cases
// console.assert(isMatch("abc", "abc") === true);
// console.assert(isMatch("abc", "ab.") === true);
// console.assert(isMatch("abc", "a..") === true);
// console.assert(isMatch("abc", "a.*") === true);
// console.assert(isMatch("abcb", "a.*b") === true);
// console.assert(isMatch("aa", "a*") === true);
// console.log(isMatch("ab", ".*"));
// console.assert(isMatch("aab", "c*a*b") === true);
// console.assert(isMatch("mississippi", "mis*is*p*.") === false);
// console.assert(isMatch( "mississippi", "mis*is*ip*.") === true);
​
