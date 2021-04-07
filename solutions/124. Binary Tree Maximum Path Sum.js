/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = root => {
  let maxSum = Number.MIN_SAFE_INTEGER;
​
  const getMaxPathSumFromNode = (node) => {
    if (node === null) {
      return 0;
    }
​
    const leftSideMax = Math.max(0, getMaxPathSumFromNode(node.left));
    const rightSideMax = Math.max(0, getMaxPathSumFromNode(node.right));
​
    const sidesMax = Math.max(leftSideMax, rightSideMax);
​
    const sideMax = node.val + sidesMax;
    
    const rowMax = node.val + leftSideMax + rightSideMax;
​
    maxSum = Math.max(maxSum, sideMax, rowMax);
​
    return sideMax;
  }
​
  getMaxPathSumFromNode(root);
​
  return maxSum;
};
​
// Test cases
// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }
​
// const six = new TreeNode(7);
// const five = new TreeNode(15);
// const two = new TreeNode(20, five, six);
// const one = new TreeNode(9);
// const zero = new TreeNode(3, one, two);
​
// const _7 = new TreeNode(-1);
// const _5 = new TreeNode(-2);
// const _4 = new TreeNode(3);
// const _3 = new TreeNode(1, _7);
// const _2 = new TreeNode(-3, _5);
// const _1 = new TreeNode(-2, _3, _4);
// const _0 = new TreeNode(1, _1, _2);
​
// console.log(maxPathSum(_0)); // [[3],[9,20],[15,7]]
​
