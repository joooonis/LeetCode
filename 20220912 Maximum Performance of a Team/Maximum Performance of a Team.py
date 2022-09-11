class Solution(object):
    def maxPerformance(self, n, speed, efficiency, k):
        """
        :type n: int
        :type speed: List[int]
        :type efficiency: List[int]
        :type k: int
        :rtype: int
        """
        from itertools import combinations
        ans = -1

        for j in range(1,k+1):
        
            com = list(combinations([i for i in range(1,n+1)], j))
        
            for c in com:
                sp = [speed[i-1] for i in c]
                ef = [efficiency[i-1] for i in c]
                s = sum(sp) * min(ef)
                ans = max(ans, s)
                
        return ans
          
          
        