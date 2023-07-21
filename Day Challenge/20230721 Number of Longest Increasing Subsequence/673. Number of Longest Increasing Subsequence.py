class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        dp = [1 for _ in range(len(nums))]
        cnt = [1 for _ in range(len(nums))]
        m = 0
        for i in range(0,len(nums)):
            for j in range(0, i):
                if nums[i] > nums[j]:
                    if dp[j] + 1 > dp[i]:
                        dp[i] = dp[j] + 1
                        cnt[i] = cnt[j]
                    elif dp[i] == dp[j] + 1:
                        cnt[i] += cnt[j]
            m = max(m, dp[i])

        ans = 0
        for i in range(len(nums)):
            if dp[i] == m:
                ans += cnt[i]
        return ans