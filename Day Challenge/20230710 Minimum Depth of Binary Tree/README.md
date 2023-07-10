# 문제

[111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)

# 코드

```javascript
var minDepth = function (root) {
  ans = Infinity;
  const findLeaf = (node, depth) => {
    if (node === null) return;
    if (node.left) findLeaf(node.left, depth + 1);
    if (node.right) findLeaf(node.right, depth + 1);
    if (!node.left && !node.right) {
      ans = Math.min(depth, ans);
    }
  };
  findLeaf(root, 1);
  return root ? ans : 0;
};
```

# 풀이

재귀적으로 깊이를 넘겨주면서 리프노드 탐색합니다.
