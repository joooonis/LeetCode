# 문제

[51. N-Queens](https://leetcode.com/problems/n-queens/description/)

# 코드

```py
class Solution:
    def solveNQueens(self, n: int):
        def dfs(i, cols, xy_diff, xy_sum):
            if i == n:
                res.append(cols)
                return
            for j in range(n):
                if j not in cols and i-j not in xy_diff and i+j not in xy_sum:
                    dfs(i+1, cols+[j], xy_diff+[i-j], xy_sum+[i+j])
        res = []
        dfs(0, [], [], [])
        return [['.'*i + 'Q' + '.'*(n-i-1) for i in sol] for sol in res]

```

# 풀이

백트래킹 문제입니다.

재귀함수를 사용합니다. i-j은 왼쪽위-오른쪽아래 대각선 i+j는 왼쪽아래-오른쪽위 대각선을 의미합니다. 예를 들여 (0,1),(1,2),(2,3),(3,4) 는 같은 대각선에 위치합니다. 모든 경우의 수를 찾을 수 있습니다.
