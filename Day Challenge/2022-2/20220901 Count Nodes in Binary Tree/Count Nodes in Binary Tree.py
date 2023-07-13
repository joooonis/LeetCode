# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def goodNodes(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        def countNodes(root, vals):
            if root is None:
                return 0
            
            
            if root.val >= max(vals):
                return 1 + countNodes(root.left, vals+[root.val]) + countNodes(root.right, vals+[root.val])
            else:
                return countNodes(root.left, vals+[root.val]) + countNodes(root.right, vals+[root.val])
        return countNodes(root, [root.val])