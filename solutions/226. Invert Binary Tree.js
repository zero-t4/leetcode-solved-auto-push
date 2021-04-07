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
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (!root) {
    return null;
  }
​
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
​
  let queue = new ListNode(root);
  let last = queue;
​
  while (queue !== null) {
    let temp;
​
    if (queue.val?.left !== undefined) {
      temp = queue.val.left;
​
      last.next = new ListNode(queue.val.left);
      last = last.next;
    }
​
    if (queue.val?.right !== undefined) {
      last.next = new ListNode(queue.val.right);
      last = last.next;
    }
​
    if (temp !== undefined) {
      queue.val.left = queue.val.right;
      queue.val.right = temp;
    }
​
    queue = queue.next;
    temp = undefined;
  }
​
  return root;
};
​
// // Test cases
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
// console.log(invertTree(zero));
​
