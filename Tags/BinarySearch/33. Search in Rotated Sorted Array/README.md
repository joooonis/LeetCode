# 문제

[33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

# 코드

```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)-1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid
        pivot = left

        left, right = pivot, len(nums)-1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        if nums[left] == target:
            return left

        left, right = 0, pivot - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        if nums[left] == target:
            return left

        return -1
```

# 풀이

이진탐색으로 pivot 찾고, 구간을 두 개로 나누어서 각각 이진탐색을 수행합니다.
