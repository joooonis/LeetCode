# 문제

[168. Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/description/)

# 코드

```py
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        ans = ''
        while columnNumber:
            columnNumber -= 1
            ans = chr(columnNumber % 26 + 65) + ans
            columnNumber //= 26
        return ans
```

# 풀이

주어진 수를 26인수로 바꿔집니다. 'A'가 1부터 시작으므로 루프 처음에 1을 빼줍니다.
참고로 chr(65) = A, chr(97) = a, ord('A') = 65, ord('A') = 97 입니다.
