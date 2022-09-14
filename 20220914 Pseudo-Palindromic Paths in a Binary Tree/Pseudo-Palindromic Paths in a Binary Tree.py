# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def pseudoPalindromicPaths (self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        paths = []
        def getPaths(root):
            # list to store path
            getPathsRec(root, [], 0)
 
        # Helper function to print path from root
        # to leaf in binary tree
        def getPathsRec(root, path, pathLen):
     
            # Base condition - if binary tree is empty return
            if root is None:
                return
 
            
            if(len(path) > pathLen):
                
                path[pathLen] = root.val
            else:
                path.append(root.val)
 
            # increment pathLen by 1
            pathLen = pathLen + 1
 
            if root.left is None and root.right is None:
                appendPathtoPaths(path, pathLen)
            else:
                # try for left and right subtree
                getPathsRec(root.left, path, pathLen)
                getPathsRec(root.right, path, pathLen)
                
        def appendPathtoPaths(ints, len):
            paths.append(ints[0 : len])

        getPaths(root)
        def isPalindromic(path):
            odd = 0
            even = 0
            while path:
                num = path.pop()
                count = 1
                while num in path:
                    path.remove(num)
                    count += 1
                if count%2 == 0:
                    even += 1
                else:
                    odd += 1
            return odd <= 1
        
        ans = 0 
        
        for path in paths:
            if(isPalindromic(path)):
                ans += 1
            else:
                print('not palindromic')
        return ans
            