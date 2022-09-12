class Solution(object):
    def bagOfTokensScore(self, tokens, power):
        """
        :type tokens: List[int]
        :type power: int
        :rtype: int
        """
        score = 0
        ans = 0
        n = len(tokens)
        for _ in range(n):
            tokens.sort()
            if power >= tokens[0]:
                power -= tokens[0]
                tokens.pop(0)
                score += 1
            
            elif score >= 1:
                tokens.sort(reverse=True)
                power += tokens[0]
                tokens.pop(0)
                score -= 1
            ans = max(score, ans)
        return ans

class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        score=0
        tokens.sort()
        i=0
        j=len(tokens)-1
        mx=0
        while i<=j:
            if tokens[i]<=power:
                power-=tokens[i]
                score+=1
                i+=1
                mx=max(mx,score)
            elif score>0:
                score-=1
                power+=tokens[j]
                j-=1
            else:
                break
        return mx