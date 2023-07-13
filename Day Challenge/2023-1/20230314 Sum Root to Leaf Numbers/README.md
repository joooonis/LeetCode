# 문제

[129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/description/)

# 풀이

이진트리의 각 리프노드에서 표현된 수를 계산하고, 그 수들의 총 합을 반환하는 문제입니다. 전위순회(preorder traversal)를 이용하여 각 노드를 방문하며, 리프노드에서 숫자를 계산하고 누적합니다. 재귀적인 방식을 사용하여 이진트리의 모든 노드를 방문하며, 코드를 더욱 간결하게 만듭니다.

# 코드

```javascript
const sumNumbers = (root) => {
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
```

# 결과

Accepted
Runtime : 54.86%
Memory: 59.32%
