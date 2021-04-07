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
const maxDepth = root => {
  if (!root) {
    return 0;
  }
​
  let maxLevel = 0;
​
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
​
  let queue = new ListNode({ node: root, level: 0 });
  let last = queue;
​
  while(queue !== null) {
    if (queue.val.node?.left !== undefined) {
      last.next = new ListNode({ node: queue.val.node.left, level: queue.val.level + 1 });
      last = last.next;
​
      maxLevel = Math.max(maxLevel, last.val.level);
    }
​
    if (queue.val.node?.right !== undefined) {
      last.next = new ListNode({ node: queue.val.node.right, level: queue.val.level + 1 });
      last = last.next;
​
      maxLevel = Math.max(maxLevel, last.val.level);
    }
​
    queue = queue.next;
  }
​
  return maxLevel;
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
// console.log(maxDepth(zero));
​
