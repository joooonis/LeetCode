# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def tree2str(self, root):
        """
        :type root: TreeNode
        :rtype: str
        """
        
        def preorder(root, s):
            if root:
                s = str(root.val)
                if root.left:
                    s += '(' + preorder(root.left, s) + ')'              
                if root.right:
                    if not root.left: 
                        s += '()'
                    s += '(' + preorder(root.right, s) + ')'
            return s
                
        return preorder(root, '')