class Solution(object):        
    def numIslands(self, grid):
        def dfs(grid, r, c):
            if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]):
                return
            if grid[r][c] != '1': 
                return
            grid[r][c] = '0'
            dfs(grid, r+1, c)
            dfs(grid, r-1, c)
            dfs(grid, r, c+1)
            dfs(grid, r, c-1)

        ans = 0
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == '1':
                    ans += 1
                    dfs(grid,r,c)
        
        return ans        
        


        