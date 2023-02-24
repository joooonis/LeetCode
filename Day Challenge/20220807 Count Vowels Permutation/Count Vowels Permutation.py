class Solution(object):
    import math
    def countVowelPermutation(self, n):
        """
        :type n: int
        :rtype: int
        """
        mod = math.pow(10, 9)+7;
        a, e, i, o ,u = 1, 1, 1, 1, 1
        
        for _ in range(n-1):
            a2 = (e + i + u) % mod
            e2 = (a + i) % mod
            i2 = (e + o) % mod
            o2 = i
            u2 = (i + o) % mod
            
            a, e, i, o, u = a2, e2, i2, o2, u2
            
        return int((a + e + i + o + u) % mod)

# Memory Limit Exceeded
'''class Solution(object):
    import random
    def countVowelPermutation(self, n):
        """
        :type n: int
        :rtype: int
        """
        def next(before):       
            if before == 'a':
                return ['e']
            elif before == 'e':
                return ['a','i']
            elif before == 'i':
                return ['a','e','o','u']
            elif before == 'o':
                return ['i','u']
            elif before == 'u':
                return ['a']
            
        words = ['']
        
        for n in range(n):
            new = []
            lst = []
            for i in range(len(words)):
                if words[i] != '':
                    lst = next(words[i][-1])
                else: 
                    lst = ['a','e','i','o','u']
                lst = [words[i]+k for k in lst]
                new += lst
            words = new

        return len(words)
'''