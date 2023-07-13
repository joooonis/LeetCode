const minPathSum = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[m - 1][n - 1];
};

const minPathSum2 = (grid) => {
  const pathSums = [];

  const dfs = (curr, pathSum, count) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
    const dx = [1, 0];
    const dy = [0, 1];
    const [x, y] = curr;
    if (x === rows - 1 && y === cols - 1) {
      pathSums.push(pathSum);
      return;
    }

    for (let i = 0; i < 2; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          dfs([nx, ny], pathSum + grid[nx][ny]);
          visited[nx][ny] = false;
        }
      }
    }
  };

  dfs([0, 0], grid[0][0]);
  return Math.min(...pathSums);
};
