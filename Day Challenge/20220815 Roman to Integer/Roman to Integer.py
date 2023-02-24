class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman = { 
            'I':1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000,
            'IV':4,
            'IX':9,
            'XL':40,
            'XC':90,
            'CD':400,
            'CM':900
        }
        
        ans = 0
        idx = 0    
        
        # for문에서 counter값을 바꿀 수 없어서 while문 사용 
        while idx < len(s):    
            if s[idx:idx+2] in ['IV','IX','XL','XC','CD','CM' ]:
                ans += roman[s[idx:idx+2]]
                idx += 2
            else:
                ans += roman[s[idx]]
                idx += 1
        
        return ans