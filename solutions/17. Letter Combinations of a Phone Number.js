/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (digits.length === 0) {
    return [];
  }
​
  const result = [];
​
  const digitsArray = digits.split('');
  const k = digits.length;
​
  const mapping = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
​
  function bt(index, str) {
    if (str.length === k) {
      result.push(str);
      return;
    }
​
    for (const char of mapping[digits[index]]) {
      str += char;
​
      bt(index + 1, str);
​
      str = str.slice(0, -1);
    }
​
  }
​
  bt(0, '');
​
  return result;
};
​
// Test cases
// console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations("2")); // ["a","b","c"]
// console.log(letterCombinations("234")); // ["a","b","c"]
​
