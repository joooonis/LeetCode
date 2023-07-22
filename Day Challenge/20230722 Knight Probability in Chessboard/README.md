# 문제

[688. Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/description/)

# 코드

```js
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
```

# 풀이

위의 코드는 체스판 위에서 나이트가 주어진 횟수 k만큼 이동했을 때, 나이트가 체스판 내에 머무르는 확률을 계산합니다.

함수의 매개변수로는 다음과 같은 값들이 주어집니다:

- `n`: 체스판의 크기. 체스판은 n x n 크기입니다.
- `k`: 나이트의 이동 횟수. 이동은 총 k번까지 가능합니다.
- `row`: 나이트의 초기 위치인 행(row) 좌표입니다.
- `column`: 나이트의 초기 위치인 열(column) 좌표입니다.

중요 로직은 아래와 같습니다.

1. `directions`: 나이트가 이동할 수 있는 방향을 모두 나타내는 배열입니다. 나이트는 L자 모양으로 움직일 수 있으므로, 총 8가지 방향이 있습니다.
2. `dp`: 이동 횟수에 따른 나이트의 위치별 확률을 저장하는 3차원 배열입니다. `dp[moves][i][j]`는 `moves`번 이동한 후에 나이트가 `(i, j)` 위치에 머무르는 확률을 의미합니다.

코드 내용 설명:

1. `dp[0][row][column] = 1`: 초기 상태에서 나이트는 주어진 위치에 머무르므로 해당 위치의 확률을 1로 설정합니다.

2. `for (let moves = 1; moves < k + 1; moves++)`: 나이트의 이동 횟수를 1부터 k까지 반복합니다.

3. 중첩된 반복문:

   - `for (let i = 0; i < n; i++)`: 체스판의 모든 행을 순회합니다.
   - `for (let j = 0; j < n; j++)`: 체스판의 모든 열을 순회합니다.

4. `for (let [dx, dy] of directions)`: `directions` 배열에 있는 모든 방향에 대해 반복합니다.

5. `let prevX = i - dx; let prevY = j - dy;`: 현재 위치에서 해당 방향으로 이동했을 때의 이전 위치를 계산합니다.

6. `if (prevX >= 0 && prevX < n && prevY >= 0 && prevY < n)`: 이전 위치가 체스판 내에 있는 경우에만 아래 로직을 수행합니다.

7. `dp[moves][i][j] += dp[moves - 1][prevX][prevY];`: 현재 위치로 이동할 수 있는 확률은 이전 위치로부터 이동할 수 있는 확률의 합으로 계산합니다. 나이트는 8가지 방향으로 이동할 수 있으므로, 이전 위치의 확률을 8로 나눠서 계산합니다.

8. `dp[moves][i][j] /= 8;`: 모든 방향으로 이동할 수 있는 경우의 수는 8가지이므로, 각 경우의 확률을 8로 나누어 정규화합니다.

9. `return dp[k].flat().reduce((a, c) => a + c);`: k번 이동한 후에 나이트가 머무르는 확률을 계산하기 위해 dp 배열을 2차원으로 평탄화한 뒤, 모든 확률 값을 더해서 반환합니다.

이 함수는 동적 프로그래밍(Dynamic Programming)을 사용하여 나이트의 위치별 확률을 계산하고, 최종적으로 이동 횟수가 k일 때의 전체 확률을 구하는 방식으로 동작합니다.

# DFS vs DP

DFS는 모든 가능한 경로를 탐색하면서 해답을 찾는 알고리즘으로, 모든 경우를 다 탐색하기 때문에 경우의 수가 많을수록 시간이 급격하게 증가합니다. 특히, 이 문제에서는 이동 횟수 k가 크고 체스판의 크기 n도 클 수 있으므로 모든 경우를 탐색하는 DFS는 매우 비효율적입니다.

DFS로 구현한 이 함수는 각 칸마다 8개의 이동 방향으로 탐색을 진행하면서 모든 가능한 경로를 탐색합니다. 이동 횟수가 증가함에 따라 탐색해야 하는 경우의 수가 기하급수적으로 증가하게 되기 때문에 k 값이 크면 많은 시간이 소요됩니다.

반면 동적 프로그래밍(DP)으로 구현한 이전의 코드는 중복 계산을 피하고, 이전 계산 결과를 재사용하여 효율적으로 문제를 해결할 수 있습니다. DP를 사용하면 더 적은 계산으로 결과를 얻을 수 있기 때문에, 더 빠른 실행 속도를 기대할 수 있습니다.

따라서 이 문제에서는 DFS보다 DP를 사용하여 해결하는 것이 좋습니다. DP로 구현된 이전의 코드가 효율적으로 동작하여 대부분의 테스트 케이스를 통과한 것으로 보입니다. 추가적으로 최적화를 위해 DP 테이블의 크기를 적절하게 조절하는 등의 방법을 사용할 수도 있을 것입니다.
