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
