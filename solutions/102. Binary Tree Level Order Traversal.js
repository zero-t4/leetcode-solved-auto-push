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
