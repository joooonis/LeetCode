# 문제

[1020. Number of Enclaves](https://leetcode.com/problems/number-of-enclaves/description/)

# 코드

```javascript
const numEnclaves = (grid) => {
  let answer = 0;
  const row = grid.length;
  const col = grid[0].length;
  const visited = Array(row)
    .fill()
    .map(() => Array(col).fill(false));
  const isBoundary = ([x, y]) =>
    x === 0 || x === row - 1 || y === 0 || y === col - 1;
  const bfs = (start) => {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    queue = [start];
    let isArea = isBoundary(start);
    let count = 1;
    while (queue.length) {
      const [x, y] = queue.shift();
      visited[x][y] = true;
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < row && ny >= 0 && ny < col) {
          if (!visited[nx][ny] && grid[nx][ny] === 1) {
            queue.push([nx, ny]);
            visited[nx][ny] = true;
            isArea = isArea ? isArea : isBoundary([nx, ny]);
            count++;
          }
        }
      }
    }
    if (!isArea) answer += count;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) bfs([i, j]);
    }
  }
  return answer;
};
```

# 풀이

BFS 또는 DFS로 grid를 완전 탐색합니다.

# 결과

Accepted
Runtime : 31.75%
Memory: 80.16%
