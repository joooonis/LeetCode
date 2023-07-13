const buildTree = (inorder, postorder) => {
  if (inorder.length == 0) return null;
  let root = new TreeNode(postorder[postorder.length - 1]);
  let i = inorder.indexOf(root.val);
  root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
  root.right = buildTree(
    inorder.slice(i + 1),
    postorder.slice(i, postorder.length - 1)
  );
  return root;
};
