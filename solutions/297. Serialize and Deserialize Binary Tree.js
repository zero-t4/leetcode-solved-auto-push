/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
​
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
  /**
   * АХВХАФХА
   * // return root;
   * easiest solution
   *
   *
   * если у нас есть 2 фукнции.
   * f1 :: a -> b
   * f2 :: b -> a
   *
   * то при их compose
   * с = f2 . f1
   * мы всегда будем получать id
   *
   * :t c :: a -> a
   * :t id :: a -> a
   *
   * ок, само решение ниже ->
   */
​
  const serializer = (node) => {
    if (!node) {
      return 'null,';
    }
​
    const left = serializer(node.left);
    const right = serializer(node.right);
​
    return node.val + ',' + left + right;
  }
​
  return serializer(root);
};
​
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = data => {
  const queue = data.split(',').reverse().filter(Boolean);
  const deserializeHelper = (queue) => {
    const valueForNode = queue.pop();
​
    if (valueForNode === 'null') {
      return null;
    }
​
    const treeNode = new TreeNode(valueForNode);
​
    treeNode.left = deserializeHelper(queue);
    treeNode.right = deserializeHelper(queue);
​
    return treeNode;
  };
​
  return deserializeHelper(queue);
};
​
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
​
// Test cases
// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }
//
// const six = new TreeNode(7);
// const five = new TreeNode(15);
// const two = new TreeNode(20, five, six);
// const one = new TreeNode(9);
// const zero = new TreeNode(3, one, two);
//
// const _7 = new TreeNode(-1);
// const _5 = new TreeNode(-2, _7);
// const _4 = new TreeNode(3);
// const _3 = new TreeNode(1);
// const _2 = new TreeNode(-3, _5);
// const _1 = new TreeNode(-2, _3, _4);
// const _0 = new TreeNode(1, _1, _2);
//
// console.log(deserialize(serialize(_0)));
// console.log(deserialize(serialize(zero)));
​
