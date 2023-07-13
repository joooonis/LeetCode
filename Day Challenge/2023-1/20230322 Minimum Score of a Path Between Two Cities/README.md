# 문제

[2492. Minimum Score of a Path Between Two Cities](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/description/)

# 코드

```javascript
const minScore = (n, roads) => {
  const graph = new Map();
  const visitedRoad = new Set();

  for (let i = 0; i < n; i++) {
    graph.set(i + 1, []);
  }
  for (const road of roads) {
    graph.get(road[0]).push([road[1], road[2]]);
    graph.get(road[1]).push([road[0], road[2]]);
  }

  let score = Infinity;

  function dfs(node) {
    for (const [neighbor, weight] of graph.get(node)) {
      if (visitedRoad.has(`${node}-${neighbor}`)) continue;
      visitedRoad.add(`${node}-${neighbor}`);
      visitedRoad.add(`${neighbor}-${node}`);
      score = Math.min(score, weight);
      dfs(neighbor);
    }
  }

  dfs(1);
  return score;
};
```

# 풀이

1-N 까지의 path가 적어도 한 개 존재한다고 했고, 방문한 노드를 재방문할 수 있기 때문에 노드간의 edge를 기준으로 방문여부를 확인하며 탐색을 합니다. 최종적으로는 클러스터(서로 인접한 노드의 집합)안에서 가장 작은 weight을 return합니다.

# 결과

Accepted
Runtime : 14.29%
Memory: 11.43%
