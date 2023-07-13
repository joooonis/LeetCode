# 문제

[106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/)

# 풀이

이 코드는 중위순회와 후위순회 배열을 기반으로 이진 트리를 구축하는 함수 buildTree를 구현합니다.

이 함수의 입력으로는 중위순회와 후위순회 배열이 주어집니다. 중위순회는 왼쪽 자식 -> 부모 -> 오른쪽 자식 순서로 노드를 방문하고, 후위순회는 왼쪽 자식 -> 오른쪽 자식 -> 부모 순서로 노드를 방문하는 방식입니다.

이 함수는 재귀적으로 호출되며, 이진 트리의 루트 노드를 반환합니다. 함수가 호출될 때마다, 후위순회 배열에서 마지막 값(즉, 부모 노드)을 사용하여 새로운 TreeNode 객체를 만듭니다.

그런 다음, 중위순회 배열에서 해당 부모 노드의 인덱스를 찾습니다. 이 인덱스를 기준으로, 중위순회 배열을 왼쪽 자식 서브트리와 오른쪽 자식 서브트리로 나눕니다. 그리고 후위순회 배열도 같은 방법으로 서브트리를 나누어 각각의 서브트리를 구축합니다.

그러면, 왼쪽 자식 서브트리의 루트는 현재 부모 노드의 왼쪽 자식이 되며, 오른쪽 자식 서브트리의 루트는 현재 부모 노드의 오른쪽 자식이 됩니다. 이 과정을 재귀적으로 수행하여 전체 이진 트리를 구축합니다.

이 함수는 중위순회 배열과 후위순회 배열이 유효하고 길이가 같은 경우에만 작동합니다. 이러한 조건을 만족하지 않는 경우, 함수는 null을 반환하여 이진 트리를 구축하지 않습니다.

# 코드

```javascript
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
```

# 결과

Accepted
Runtime : 16.82%
Memory: 28.18%
