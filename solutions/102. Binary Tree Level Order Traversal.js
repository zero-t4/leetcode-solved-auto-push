/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (!root) {
    return []
  }
 
  let currentGroup = [root];
  const result = [];
 
  function doCheck(group, i) {
    const nextGroup = [];
 
    result[i] = [];
 
    for (let node of group) {
      if (node.val !== undefined) {
        result[i].push(node.val);
      }
 
      if (node.left) {
        nextGroup.push(node.left);
      }
 
      if (node.right) {
        nextGroup.push(node.right);
      }
    }
 
    return nextGroup;
  }
 
  let i = 0;
  while (currentGroup.length) {
    currentGroup = doCheck(currentGroup, i);
    i++;
  }
 
  return result;
};

// Test cases
// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }

// const six = new TreeNode(7);
// const five = new TreeNode(15);
// const two = new TreeNode(20, five, six);
// const one = new TreeNode(9);
// const zero = new TreeNode(3, one, two);

// console.log(levelOrder(zero)); // [[3],[9,20],[15,7]]

/**
 * @param {number[]} root
 * @return {number[][]}
 */
const levelOrderArray = (root) => {
  if (!root) {
    return [];
  }

  let level = 1;
  let maxElements = level * 2;
  let elements = 0;

  const result = [[root[0]]];

  for (let i = 1; i < root.length; i++) {
    elements++;

    if (elements > maxElements) {
      level++;
      maxElements = level * 2;
      elements = 1;
    }

    if (root[i]) {
      if (result[level] === undefined) {
        result[level] = [root[i]]
      } else {
        result[level].push(root[i]);
      }
    }
  }

  return result;
};

// Test cases
// console.log(levelOrderArray([3,9,20,null,null,15,7]));
