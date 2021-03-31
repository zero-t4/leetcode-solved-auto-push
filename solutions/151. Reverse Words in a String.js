/**
 * @param {string} str
 * @return {string}
 */
const reverseWords = str => str.trim().replace(/ +/g, ' ').split(' ').reverse().join(' ');

// Test cases
// console.assert(reverseWords("the sky is blue") === "blue is sky the", 'test 1 failed');
// console.assert(reverseWords("  hello world  ") === "world hello", 'test 2 failed');
// console.assert(reverseWords("a good   example") === "example good a", 'test 3 failed');
// console.assert(reverseWords("  Bob    Loves  Alice   ") === "Alice Loves Bob", 'test 4 failed');
// console.assert(reverseWords("Alice does not even like bob") === "bob like even not does Alice", 'test 5 failed');
