# 문제

[459. Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)

# 코드

```py
class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        n = len(s)
        for i in range(1, n//2 + 1):
            if n % i == 0:
                if s[:i] * (n//i) == s:
                    return True
        return False
```

# 풀이

가능한 범위에서 루프 돌면서 조건 확인해주면 됩니다.
