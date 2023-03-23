# 문제

[1319. Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/description/)

# 코드

```javascript
const makeConnected = (n, connections) => {
  if (connections.length < n - 1) return -1;

  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < connections.length; i++) {
    graph[connections[i][0]] = [...graph[connections[i][0]], connections[i][1]];
    graph[connections[i][1]] = [...graph[connections[i][1]], connections[i][0]];
  }

  const visited = Array(n).fill(false);
  let clusters = 0;

  function dfs(node) {
    visited[node] = true;
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  for (let node = 0; node < n; node++) {
    if (!visited[node]) {
      dfs(node);
      clusters++;
    }
  }
  return clusters - 1;
};
```

# 풀이

먼저 edge들을 가지고 graph를 만들어줍니다.

n개의 노드들이 전부 연결되기 위해 필요한 edge의 최소 개수는 n-1개 입니다.

클러스터의 개수를 셉니다. dfs함수로 서로 이어진 노드들을 세고 한번 재귀함수 호출이 끝날때마다 cluster를 1씩 증가시킵니다.

m 개의 cluster를 서로 연결시키기 위해 필요한 edge의 개수는 m-1개입니다.

# 결과

Accepted
Runtime : 13.69%
Memory: 16.84%
