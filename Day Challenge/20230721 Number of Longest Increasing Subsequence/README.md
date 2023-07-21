# 문제

[673. Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/)

# 코드

```py
class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        # dp[i]는 nums[i]를 마지막으로 하는 LIS의 길이를 나타냅니다.
        dp = [1 for _ in range(len(nums))]
        # cnt[i]는 nums[i]를 마지막으로 하는 LIS의 개수를 나타냅니다.
        cnt = [1 for _ in range(len(nums))]
        # m은 최대 LIS의 길이를 저장하는 변수입니다.
        m = 0

        # 각 숫자를 마지막으로 하는 LIS의 길이를 계산합니다.
        for i in range(len(nums)):
            for j in range(i):
                # 만약 nums[i]가 nums[j]보다 크다면 LIS를 확장할 수 있습니다.
                if nums[i] > nums[j]:
                    if dp[j] + 1 > dp[i]:
                        # 현재 계산된 LIS의 길이보다 확장된 길이가 더 크다면, LIS를 갱신하고 개수를 업데이트합니다.
                        dp[i] = dp[j] + 1
                        cnt[i] = cnt[j]
                    elif dp[i] == dp[j] + 1:
                        # 만약 확장된 길이가 기존과 같다면, LIS의 개수를 누적합니다.
                        cnt[i] += cnt[j]
            # 최대 LIS의 길이를 업데이트합니다.
            m = max(m, dp[i])

        # 최대 LIS의 길이에 해당하는 LIS들의 개수를 더해서 반환합니다.
        ans = 0
        for i in range(len(nums)):
            if dp[i] == m:
                ans += cnt[i]
        return ans
```

# 풀이

dp(dynamic programming)에 관한 문제입니다. LIS의 길이, 개수에 대한 두개의 dp 배열을 만들어서 해결합니다. 이중 루프로 시간복잡도는 O(n\*\*2)입니다.
