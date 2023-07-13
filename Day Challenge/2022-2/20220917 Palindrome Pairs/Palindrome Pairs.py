class Solution(object):
    def palindromePairs(self, words):
        """
        :type words: List[str]
        :rtype: List[List[int]]
        """
        
        ans = []
        
        for i in range(len(words)):
            for j in range(len(words)):
                if i != j:
                    word = words[i] + words[j]
                    if word == word[-1::-1]:
                        ans.append([i,j])
        
        return ans