// dfs로 완전탐색하면 시간초과가 납니다.
// 11/22 testcase passed
var knightProbability = function (n, k, row, column) {
  const board = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  let ans = 0;

  const dr = [-2, -1, 1, 2, -2, -1, 1, 2];
  const dc = [1, 2, 2, 1, -1, -2, -2, -1];

  const dfs = (r, c, k) => {
    if (k === 0) {
      if (r >= 0 && r < n && c >= 0 && c < n) ans += 1;
      return;
    }
    for (let i = 0; i < 8; i++) {
      let nr = r + dr[i];
      let nc = c + dc[i];
      if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
        dfs(nr, nc, k - 1);
      }
    }
  };

  dfs(row, column, k);
  return ans / 8 ** k;
};

var knightProbability = function (n, k, row, column) {
  const directions = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  const dp = Array(k + 1)
    .fill()
    .map(() =>
      Array(n)
        .fill()
        .map(() => Array(n).fill(0))
    );
  dp[0][row][column] = 1;

  for (let moves = 1; moves < k + 1; moves++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let [dx, dy] of directions) {
          let prevX = i - dx;
          let prevY = j - dy;
          if (prevX >= 0 && prevX < n && prevY >= 0 && prevY < n) {
            dp[moves][i][j] += dp[moves - 1][prevX][prevY];
          }
        }
        dp[moves][i][j] /= 8;
      }
    }
  }
  return dp[k].flat().reduce((a, c) => a + c);
};
