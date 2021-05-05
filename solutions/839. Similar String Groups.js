/**
 * @param {string[]} strs
 * @return {number}
 */
const numSimilarGroups = (strs) => {
  /*
   * Start of DSU declaration
   */
  const parents = Array.from({length: strs.length}, (_, i) => i);
  const sizes = Array.from({length: strs.length}, () => 1);
​
  const get = (x) => {
    if (parents[x] === x) {
      return x;
    }
    parents[x] = get(parents[x]);
​
    return parents[x];
  }
​
  const merge = (a, b) => {
    const pA = get(a);
    const pB = get(b);
​
    if (pA === pB) {
      return;
    }
​
    if (sizes[pB] > sizes[pA]) {
      sizes[pB] += sizes[pA];
      parents[pA] = pB;
    } else {
      sizes[pA] += sizes[pB];
      parents[pB] = pA;
    }
  }
​
  const getNumberOfSets = () => [...new Set(parents)].length;
  /*
   * End of DSU declaration
   */
​
  const wordsHasEnoughCommonChars = (a, b) => {
    let diffCharCount = 0;
​
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        diffCharCount += 1;
      }
    }
​
    return diffCharCount <= 2;
  }
​
  for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j < strs.length; j++) {
      if (wordsHasEnoughCommonChars(strs[i], strs[j])) {
        merge(i, j);
      }
    }
  }
​
  for (let i = 0; i < parents.length; i++) {
    merge(i, i);
  }
​
  return getNumberOfSets();
};
​
// Test cases
// console.log(numSimilarGroups(["omv", "ovm"])); // 1;
// console.log(numSimilarGroups([
//   "ajdidocuyh",
//   "djdyaohuic",
//   "ddjyhuicoa",
//   "djdhaoyuic",
//   "ddjoiuycha",
//   "ddhoiuycja",
//   "ajdydocuih",
//   "ddjiouycha",
//   "ajdydohuic",
//   "ddjyouicha"])); // 2;
​
