# 문제

[81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/)

# 코드

```py
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
```

# 풀이

크기가 같은 값들이 반복적으로 나오기 때문에 이진 탐색으로는 pivot을 찾을 수 없습니다. linear하게 체크를 하다 pivot을 발견한다면 이진탐색으로 넘어갑니다.
