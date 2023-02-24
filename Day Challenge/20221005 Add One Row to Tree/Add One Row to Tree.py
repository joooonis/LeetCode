# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def addOneRow(self, root, val, depth):
        """
        :type root: TreeNode
        :type val: int
        :type depth: int
        :rtype: TreeNode
        """
        if depth == 1:
            node = TreeNode(val, root, None)
            return node
        
        def switch(root, val, depth):
            if not root:
                return  
            
            elif depth == 2:
                node_left = TreeNode(val, root.left, None)
                node_right = TreeNode(val, None, root.right)
                
                root.left = node_left
                root.right = node_right
            else:
                depth -= 1
                switch(root.left, val, depth)
                switch(root.right, val, depth)
                
        switch(root, val, depth)
        return root        
        