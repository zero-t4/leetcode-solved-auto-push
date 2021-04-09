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
 * @return {number[]}
 */
const rightSideView = (root) => {
  if (!root) {
    return [];
  }
  
  const result = [];
​
  let queue = [root];
  let nextQueue = [];
​
  while (queue.length) {
    for (let node of queue) {
      if (node.left) {
        nextQueue.push(node.left);
      }
      
      if (node.right) {
        nextQueue.push(node.right);
      }
    }
​
    result.push(queue[queue.length - 1].val);
​
    queue = nextQueue;
    nextQueue = [];
  }
​
  return result;
};
​
