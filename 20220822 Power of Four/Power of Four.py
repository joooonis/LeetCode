class Solution(object):
    def isPowerOfFour(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n <= 0:
            return False
        
        x = 0
        
        while x == 0 and n != 1:
            x = n % 4
            n = n // 4
        return x == 0 and n == 1


# float.is_integer(), math는 기본적으로 import 되어 있습니다. 
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        return n > 0 and log(n, 4).is_integer()
  