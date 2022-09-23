class Solution(object):
    def concatenatedBinary(self, n):
        """
        :type n: int
        :rtype: int
        """
        mod = 10**9 + 7
        ans = ''
        for i in range(1, n+1):
            ans += bin(i)[2:]
        ans = int(ans, 2)
        ans %= mod
        
        return ans