# 문제

[64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/description/)

# 코드

```javascript
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
```

# 풀이

DP(Dynamic Programming) 알고리즘을 풀 수 있습니다. 먼저 grid 배열의 첫 행과 첫 열을 이전 값의 합으로 업데이트 한 후 각 셀을 탐색하면서 이전 셀 중에서 최소 합을 가지는 값을 찾아 현재 위치 값과 더하여 gird 배열에 없데이트 합니다.

예를 들어 아래와 같이 grid 배열이 주어지면

```
grid
[
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]
```

1행, 1열 부터 업데이트 해주고

```
grid
[
  [1, 4, 5],
  [2, 5, 1],
  [6, 2, 1]
]
```

이어서 아래와 같이 없데이트 됩니다.

```
grid
[
  [1, 4, 5],
  [2, 7, 6],
  [6, 8, 7]
]
```

끝으로 마지막 셀인 `grid[2][2]`에 위치한 최소 합인 7을 반환합니다.

시간 복잡도는 O(mn)이며, 공간 복잡도는 O(1)입니다.

# 결과

Accepted
Runtime : 64.51%
Memory: 79.38%
