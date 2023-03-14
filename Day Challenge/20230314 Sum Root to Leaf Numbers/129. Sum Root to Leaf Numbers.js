// github copilot
const sumNumbers = (root) => {
  let sum = 0;
  const dfs = (node, num) => {
    if (!node) return;
    num = num * 10 + node.val;
    if (!node.left && !node.right) {
      sum += num;
      return;
    }
    dfs(node.left, num);
    dfs(node.right, num);
  };
  dfs(root, 0);
  return sum;
};

// me
const sumNumbers2 = (root) => {
  let sum = 0;
  const rootToLeaf = (node, num) => {
    if (node.left) {
      rootToLeaf(node.left, String(num) + node.left.val);
    }
    if (node.right) {
      rootToLeaf(node.right, String(num) + node.right.val);
    }
    if (!node.left && !node.right) {
      sum += Number(num);
    }
  };
  rootToLeaf(root, root.val);

  return sum;
};

// chatgpt
const sumNumbers3 = (root) => {
  const rootToLeaf = (node, num) => {
    if (!node) {
      return 0;
    }
    num = num * 10 + node.val;
    if (!node.left && !node.right) {
      return num;
    }
    return rootToLeaf(node.left, num) + rootToLeaf(node.right, num);
  };
  return rootToLeaf(root, 0);
};
