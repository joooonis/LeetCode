# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
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
