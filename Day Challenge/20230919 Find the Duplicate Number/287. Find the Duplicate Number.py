class Solution(object):
    def findDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        def binary_search():
            l, r = 1, len(nums)
            while l < r:
                mid = (l + r) // 2
                count = 0
                for num in nums:
                    if num <= mid:
                        count += 1
                if count > mid:
                    r = mid
                else:
                    l = mid + 1
            return l

        return binary_search()
