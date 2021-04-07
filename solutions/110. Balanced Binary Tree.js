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
 * @return {boolean}
 */
const isBalanced = root => {
  try {
    function findIsBothSidesIsBalanced(node) {
      if (node === null) {
        return 0;
      }
​
      const leftSideMaxDepth = findIsBothSidesIsBalanced(node.left);
      const rightSideMaxDepth = findIsBothSidesIsBalanced(node.right);
​
      if (Math.abs(leftSideMaxDepth - rightSideMaxDepth) > 1) {
        throw new Error();
      }
​
      return Math.max(leftSideMaxDepth, rightSideMaxDepth) + 1;
    }
​
    findIsBothSidesIsBalanced(root);
​
    return true;
  } catch(e) {
    return false;
  }
};
​
// Test cases
// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }
​
// const seven = new TreeNode(7);
// const six = new TreeNode(7, seven);
// const five = new TreeNode(15);
// const two = new TreeNode(20, five, six);
// const one = new TreeNode(9);
// const zero = new TreeNode(3, one, two);
​
// console.log(isBalanced(zero));
​
