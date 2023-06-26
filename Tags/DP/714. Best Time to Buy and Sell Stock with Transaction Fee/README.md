# 문제

[714. Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/)

# 코드

```python
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
```

# 풀이

dp와 greedy를 사용하빈다.

```python
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
```

- dp[i][0] : i번째 날에 주식을 팔았을 때 최대 이익
- dp[i][1] : i번째 날에 주식을 샀을 때 최대 이익

먼저, dp[0][1]을 초기화하여 첫 번째 날에 주식을 구매하는 경우를 고려합니다. 따라서 dp[0][1]은 첫 번째 날의 주식 가격에 마이너스 부호를 붙인 값이 됩니다.

그런 다음, 두 번째 날부터 시작하여 루프를 돌며 dp 배열을 채웁니다.

dp[i][0]은 i-1번째 날에 주식을 보유하지 않을 때의 최대 이익과 i번째 날에 주식을 팔았을 때의 이익(prices[i] - fee) 중에서 더 큰 값을 선택합니다. 이는 주식을 보유하지 않는 상태에서 오늘 주식을 사는 경우와 주식을 이미 보유한 상태에서 오늘 주식을 팔아 이익을 얻는 경우를 비교하여 더 큰 값을 선택하는 것입니다.

dp[i][1]은 i-1번째 날에 주식을 보유했을 때의 최대 이익과 i번째 날에 주식을 구매할 때의 이익(prices[i]) 중에서 더 큰 값을 선택합니다. 이는 주식을 이미 보유한 상태에서 오늘 주식을 사는 경우와 주식을 보유하지 않는 상태에서 오늘 주식을 팔아 이익을 얻는 경우를 비교하여 더 큰 값을 선택하는 것입니다.

마지막으로, dp[-1][0] 값을 반환하여 마지막 날에 주식을 보유하지 않을 때의 최대 이익을 얻습니다.

# 결과

Accepted
Runtime : 35.50%
Memory: 15.98%
