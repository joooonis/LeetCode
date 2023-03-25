# 문제

[2316. Count Unreachable Pairs of Nodes in an Undirected Graph](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/description/)

# 코드

```javascript
const countPairs = (n, edges) => {
  const graph = new Array(n).fill().map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(n).fill(false);
  const sizes = [];
  const dfs = (node) => {
    visited[node] = true;
    let size = 1;
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        size += dfs(neighbor);
      }
    }
    return size;
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      sizes.push(dfs(i));
    }
  }

  const totalPairs = (n * (n - 1)) / 2;
  const reachablePairs = sizes.reduce(
    (acc, size) => acc + (size * (size - 1)) / 2,
    0
  );
  return totalPairs - reachablePairs;
};
```

# 풀이

edges 배열을 이용해 인접 리스트(Adjacency List), graph를 생성합니다.

그 다음 DFS 알고리즘을 사용해 노드들을 방문합니다. 각 노드들을 방문하면서 클러스터의 size를 계산합니다.

서로 도달할 수 없는 쌍의 개수르 구하기 위한 아래 식을 사용합니다.

```javascript
const totalPairs = (n * (n - 1)) / 2;
const reachablePairs = sizes.reduce(
  (acc, size) => acc + (size * (size - 1)) / 2,
  0
);
```

(전체 노드에서 가능한 페어들의 조합) - (각 클러스터마다 가능한 페어들의 조합)

# 결과

Accepted
Runtime : 21.59%
Memory: 54.68%

```

```
