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