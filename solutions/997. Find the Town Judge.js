/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (N, trust) => {
  if (N === 1) return 1;
​
  const g = Array.from({ length: N }, () => new Set());
​
  for (let [person, trustPerson] of trust) {
    g[trustPerson] = (g[trustPerson] || new Set()).add(person);
    g[person] = g[person] || new Set();
  }
​
  for (let i = 1; i < g.length; i++) {
    if (g[i].size === N - 1) {
      try {
        g[i].forEach(child => {
          if (g[child].has(i)) {
            throw new Error();
          }
        });
​
        return i;
      } catch(e) {
        // not judge
      }
    }
  }
​
  return -1;
};
​
// Test cases
// console.log(findJudge(2, [[1,2]])) // 2
// console.log(findJudge(3, [[1,3],[2,3]])) // 3
// console.log(findJudge(3, [[1,3],[2,3],[3,1]])) // -1
// console.log(findJudge(3, [[1,2],[2,3]])) // -1
// console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]])) // 3
​
