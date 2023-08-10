class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        i = 0
        while i < len(nums)-1 and nums[i] <= nums[i+1]:
            if nums[i] == target:
                return True
            i += 1

        if i == len(nums)-1:
            if nums[i] == target:
                return True
            return False
        else:
            pivot = i + 1

        left, right = 0, pivot
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        if nums[left] == target:
            return True

        left, right = pivot, len(nums)-1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        if nums[left] == target:
            return True

        return False
