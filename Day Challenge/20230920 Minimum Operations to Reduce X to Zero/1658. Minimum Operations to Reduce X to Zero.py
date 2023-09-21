class Solution:
    def minOperations(self, nums, x):
        total = sum(nums)
        if total < x:
            return -1
        if total == x:
            return len(nums)
        target = total - x
        l, r = 0, 0
        cur = 0
        res = -1
        while r < len(nums):
            cur += nums[r]
            while cur > target:
                cur -= nums[l]
                l += 1
            if cur == target:
                res = max(res, r - l + 1)
            r += 1
        return len(nums) - res if res != -1 else -1
