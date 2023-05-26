class Solution(object):
    def waysToSplit(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        prefixSum = [nums[0]]

        for i in range(1, len(nums)):
            prefixSum.append(prefixSum[i-1] + nums[i])

        ans = 0

        r_min, r_max = 0, 0

        for i in range(len(nums)-2):
            if r_min <= i:
                r_min += 1
            while r_min < len(nums)-1 and prefixSum[i] > prefixSum[r_min] - prefixSum[i]:
                r_min += 1
            if r_max < r_min:
                r_max = r_min
            while r_max < len(nums)-1 and prefixSum[r_max] - prefixSum[i] <= prefixSum[len(nums)-1] - prefixSum[r_max]:
                r_max += 1
            ans = (ans + r_max - r_min) % 1000000007
        return ans
