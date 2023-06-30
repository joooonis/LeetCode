from collections import deque


class Solution(object):
    def shortestPathAllKeys(self, grid):
        """
        :type grid: List[str]
        :rtype: int
        """
        row, col = len(grid), len(grid[0])
        start = None
        keys = 0
        for i in range(row):
            for j in range(col):
                if grid[i][j] == '@':
                    start = (i, j)
                elif grid[i][j] in 'abcdef':
                    keys |= 1 << (ord(grid[i][j]) - ord('a'))
        q = deque([(start[0], start[1], 0, 0)])
        visited = set([(start[0], start[1], 0)])
        while q:
            i, j, k, d = q.popleft()
            if k == keys:
                return d
            for di, dj in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                ni, nj = i + di, j + dj
                if 0 <= ni < row and 0 <= nj < col:
                    if grid[ni][nj] == '#':
                        continue
                    if grid[ni][nj] in 'ABCDEF' and not (k & (1 << (ord(grid[ni][nj]) - ord('A')))):
                        continue
                    if grid[ni][nj] in 'abcdef':
                        nk = k | (1 << (ord(grid[ni][nj]) - ord('a')))
                    else:
                        nk = k
                    if (ni, nj, nk) not in visited:
                        visited.add((ni, nj, nk))
                        q.append((ni, nj, nk, d + 1))
        return -1
