# 문제

[845. Longest Mountain in Array](https://leetcode.com/problems/longest-mountain-in-array/)

# 풀이

투 포인터 알고리즘을 사용하는 대표적인 문제입니다.
모든 index를 지나면서 봉우리가 되는 경우 두 개의 포인터를 좌우로 이동하면서 산의 길이를 계산합니다.

```python
class Solution(object):
    def longestMountain(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        if len(arr) < 3:
            return 0

        mountain = 0

        for i in range(1, len(arr)-1):
            if arr[i-1] < arr[i] and arr[i] > arr[i+1]:
                left, right = i - 1, i + 1
                while left > 0 and arr[left-1] < arr[left]:
                    left -= 1
                while right < len(arr) - 1 and arr[right] > arr[right+1]:
                    right += 1
                mountain = max(mountain, right - left + 1)
        return mountain
```

# 결과

Accepted
Runtime : 70.83%
Memory: 66.67%
