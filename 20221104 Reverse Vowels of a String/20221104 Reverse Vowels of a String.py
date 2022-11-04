class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        vowel = [ x for x in list(s) if x in ['a','e','i','o','u', 'A','E','I','O','U'] ] 
        
        ans = ''
        k = len(vowel) - 1
        for i in range(len(s)):
            if s[i] in ['a','e','i','o','u', 'A','E','I','O','U']:
                ans += vowel[k]
                k -= 1
            else:
                ans += s[i]
        
        return ans

# Two Pointer Algorithm
class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        s = list(s)
        vowels = ['a','e','i','o','u', 'A','E','I','O','U']
        
        left, right = 0, len(s)-1
        
        while left < right:
            if s[left] in vowels and s[right] in vowels:
                s[left], s[right] = s[right], s[left]
                right -= 1
                left += 1
                
            elif s[left] in vowels:
                right -= 1
            else:
                left += 1
        
        return ''.join(s)