class Solution(object):
    def longestMountain(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        if len(arr) < 3:
            return 0

        ans = 0

        dp_up, dp_down = [1 for _ in range(len(arr))], [
            1 for _ in range(len(arr))]

        for i in range(1, len(arr)):
            if arr[i] > arr[i-1]:
                dp_up[i] = 1 + dp_up[i-1]

        for i in range(len(arr)-2, -1, -1):
            if arr[i] > arr[i+1]:
                dp_down[i] = 1 + dp_down[i+1]

        for i in range(len(arr)):
            if dp_up[i] > 1 and dp_down[i] > 1:
                ans = max(dp_up[i] + dp_down[i] - 1, ans)

        return ans
