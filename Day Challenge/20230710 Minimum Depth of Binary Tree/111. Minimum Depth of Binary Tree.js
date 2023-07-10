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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  let queue = [root];
  let depth = 0;

  while (queue.length) {
    depth++;
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (!node.left && !node.right) return depth;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
};

var minDepth = function (root) {
  ans = Infinity;
  const findLeaf = (node, path) => {
    if (node === null) return;
    if (node.left) findLeaf(node.left, path + 1);
    if (node.right) findLeaf(node.right, path + 1);
    if (!node.left && !node.right) {
      ans = Math.min(path, ans);
    }
  };
  findLeaf(root, 1);
  return root ? ans : 0;
};
