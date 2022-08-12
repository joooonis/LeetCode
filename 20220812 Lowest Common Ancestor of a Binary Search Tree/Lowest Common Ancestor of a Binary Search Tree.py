# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
        def getAncestors(root, target, ancestors):
            # Base case
            if root == None:
                return False
     
            if root == target:
                ancestors.append(root)
                return True
 
            # If target is present in either left or right subtree
            # of this node, then print this node
            if (getAncestors(root.left, target, ancestors) or getAncestors(root.right, target, ancestors)):
                ancestors.append(root)
                return True
 
            # Else return False
            return False
        ancestorP, ancestorQ = [], []
        getAncestors(root, p, ancestorP)
        getAncestors(root, q, ancestorQ)
        
        commonAncestors = []
                
        for node in ancestorP:
            if node in ancestorQ:
                return node