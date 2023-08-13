# 문제

[2369. Check if There is a Valid Partition For The Array](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/)

# 코드

```py
class Solution:
    def validPartition(self, nums: List[int]) -> bool:
        n = len(nums)
        memo = {-1: True}

        def prefixIsValid(i):
            if i in memo:
                return memo[i]
            ans = False

            if i > 0 and nums[i] == nums[i-1]:
                ans |= prefixIsValid(i-2)
            if i > 1 and nums[i] == nums[i-1] == nums[i-2]:
                ans |= prefixIsValid(i-3)
            if i > 1 and nums[i] == nums[i-1] + 1 == nums[i-2] + 2:
                ans |= prefixIsValid(i-3)
            memo[i] = ans
            return ans
        return prefixIsValid(n-1)
```

# 풀이

dp 알고리즘을 사용해서 계산합니다. memoization을 이용하고 케이스에 따라 재귀적으로 계산합니다. `|=` 언산 비트 논리 OR 연산을 수행하고 결과값을 왼쪽에 할당합니다.

base case: i<0->True
and three case: ...
