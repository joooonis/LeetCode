class Solution(object):
    def maxProfit(self, prices, fee):
        """
        :type prices: List[int]
        :type fee: int
        :rtype: int
        """

        # dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
        # dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])

        dp = [[0 for _ in range(2)] for _ in range(len(prices))]
        dp[0][1] = -prices[0]

        for i in range(1, len(prices)):
            dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
            dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])

        return dp[-1][0]
