# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        # inorder travetsal
        lst = []
        def inorder(root):
            if root.left:
                inorder(root.left)
            lst.append(root.val)
            if root.right:
                inorder(root.right)
        inorder(root)
        result = []
        # 중복된 값 있는지 확인 
        for i in lst:
            if i in result and i != 0:
                return False
            else:
                result.append(i)
                
        return lst == sorted(lst)
        