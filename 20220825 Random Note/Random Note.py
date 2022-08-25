class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        from collections import Counter
        r = Counter(ransomNote)
        m = Counter(magazine)
        
        for key in r.keys():
            if key not in m.keys() or r[key] > m[key]:
                return False
        return True