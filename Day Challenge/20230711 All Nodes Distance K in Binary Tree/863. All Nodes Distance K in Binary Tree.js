/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const buildGraph = (node, parent) => {
    if (!node) return;
    if (parent) {
      graph[node.val] = graph[node.val] || [];
      graph[node.val].push(parent.val);
      graph[parent.val] = graph[parent.val] || [];
      graph[parent.val].push(node.val);
    }
    buildGraph(node.left, node);
    buildGraph(node.right, node);
  };
  const graph = {};
  buildGraph(root);

  const ans = [];
  const visited = new Set([target.val]);

  const dfs = (node, distance) => {
    if (distance === k) {
      ans.push(node);
      return;
    }
    for (let neighbor of graph[node]) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      dfs(neighbor, distance + 1);
    }
  };

  dfs(target.val, 0);

  return ans;
};
