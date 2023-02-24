class Solution:
    def averageOfLevels(self, root):
        q = collections.deque([root])
        res = []
        while q:
            n = len(q)
            sum = 0
            for i in range(n):
                num = q.popleft()
                
                if num:
                    if num.left:
                        q.append(num.left)
                    if num.right:    
                        q.append(num.right)
                    sum += num.val
            print(sum)
            level_avg = sum/n
            res.append(level_avg)
        return res