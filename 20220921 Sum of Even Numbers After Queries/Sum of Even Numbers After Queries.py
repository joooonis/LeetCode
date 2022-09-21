class Solution(object):
    def sumEvenAfterQueries(self, nums, queries):
        """
        :type nums: List[int]
        :type queries: List[List[int]]
        :rtype: List[int]
        """
        ans = []
        s = 0
        
        for i in range(len(nums)):
            if nums[i]%2 == 0:
                s += nums[i]
        for i in range(len(nums)):
            q = queries[i]
            
            if nums[q[1]]%2 == 0:
                s -= nums[q[1]]
            
            nums[q[1]] = nums[q[1]] + q[0]
            
            if nums[q[1]]%2 == 0:
                s += nums[q[1]]
                
            ans.append(s)
        return ans
            