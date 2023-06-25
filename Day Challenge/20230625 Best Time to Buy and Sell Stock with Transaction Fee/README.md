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

동적 계획법(Dynamic Programming)을 사용하여 최대 이익을 계산합니다. 아래의 주석에서 주어진 상태 전이식을 사용하여 dp 배열을 채우고, 최종 결과를 반환하는 방법을 설명하겠습니다.

주어진 상태 전이식은 다음과 같습니다:

```python
dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
```

여기서 dp[i][0]은 i번째 날에 주식을 보유하지 않을 때의 최대 이익을 나타내며, dp[i][1]은 i번째 날에 주식을 보유할 때의 최대 이익을 나타냅니다.

먼저, dp[0][1]을 초기화하여 첫 번째 날에 주식을 구매하는 경우를 고려합니다. 따라서 dp[0][1]은 첫 번째 날의 주식 가격에 마이너스 부호를 붙인 값이 됩니다.

그런 다음, 두 번째 날부터 시작하여 for 루프를 통해 dp 배열을 채웁니다. dp[i][0]은 i-1번째 날에 주식을 보유하지 않을 때의 최대 이익과 i번째 날에 주식을 팔았을 때의 이익(prices[i] - fee) 중에서 더 큰 값을 선택합니다. 이는 주식을 보유하지 않는 상태에서 오늘 주식을 사는 경우와 주식을 이미 보유한 상태에서 오늘 주식을 팔아 이익을 얻는 경우를 비교하여 더 큰 값을 선택하는 것입니다.

dp[i][1]은 i-1번째 날에 주식을 보유했을 때의 최대 이익과 i번째 날에 주식을 구매할 때의 이익(prices[i]) 중에서 더 큰 값을 선택합니다. 이는 주식을 이미 보유한 상태에서 오늘 주식을 사는 경우와 주식을 보유하지 않는 상태에서 오늘 주식을 팔아 이익을 얻는 경우를 비교하여 더 큰 값을 선택하는 것입니다.

마지막으로, dp[-1][0] 값을 반환하여 마지막 날에 주식을 보유하지 않을 때의 최대 이익을 얻습니다.

이렇게 상태 전이식을 사용하여 dp 배열을 채우고, 마지막에 얻은 결과를 반환하여 문제를 해결할 수 있습니다.

# 결과

Accepted
Runtime : 35.50%
Memory: 15.98%
