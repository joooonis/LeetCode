# 문제

[1161. Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/)

# 코드

```javascript
class Solution(object):
    def maxLevelSum(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        levelSumdict = {}

        def recursiveTraverse(node, level):
            if node.val:
                if level in levelSumdict:
                    levelSumdict[level] += node.val
                else:
                    levelSumdict[level] = node.val
            if node.left:
                recursiveTraverse(node.left, level + 1)
            if node.right:
                recursiveTraverse(node.right, level + 1)

        recursiveTraverse(root, 1)
        print(levelSumdict)

        minValue = max(levelSumdict.values())  # 사전 값 중 최소값을 찾음

        minKeys = [key for key, value in levelSumdict.items()
                   if value == minValue]
        return minKeys[0]

```

# 풀이

root 부터 recursive하게 아래로 내려가면서 레벨의 합을 저장합니다.

# 결과

Accepted
Runtime : 35.50%
Memory: 15.98%
