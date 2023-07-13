# 문제

[1466. Reorder Routes to Make All Paths Lead to the City Zero](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description/)

# 코드

```javascript
function minReorder(n, connections) {
  const adjList = new Array(n).fill(null).map(() => []);
  for (let [a, b] of connections) {
    adjList[a].push([b, 1]);
    adjList[b].push([a, 0]);
  }

  const visited = new Set();
  let cnt = 0;

  const dfs = (node) => {
    visited.add(node);
    for (let [neighbor, direction] of adjList[node]) {
      if (!visited.has(neighbor)) {
        cnt += direction;
        dfs(neighbor);
      }
    }
  };

  dfs(0);
  return cnt;
}
```

# 풀이

connections 배열을 이용해 인접 리스트(Adjacency List)를 생성합니다. 양방향 그래프이므로 [인접노드, 방향]으로 저장합니다.

```javascript
[
  [
    [1, 1],
    [4, 0],
  ],
  [
    [0, 0],
    [3, 1],
  ],
  [[3, 1]],
  [
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [5, 1],
  ],
  [[4, 0]],
];
```

그 다음 DFS 알고리즘을 사용해 노드들을 방문합니다. 각 노드들을 방문하면서 역방향인 간선의 수를 계산합니다.

# 결과

Accepted
Runtime : 21.59%
Memory: 54.68%

```

```
