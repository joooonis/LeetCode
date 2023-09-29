# 문제

[2360. Longest Cycle in a Graph](https://leetcode.com/problems/longest-cycle-in-a-graph/)

# 코드

```javascript
const longestCycle = (edges) => {
  const n = edges.length;
  const visited = Array(n).fill(false);
  const stack = [];
  const cycle = [];

  const dfs = (i) => {
    // 방문한 노드라면 종료
    if (visited[i]) {
      return;
    }
    visited[i] = true;

    // 현재까지 방문한 노드들을 스택에 보관합니다.
    stack.push(i);
    const j = edges[i];

    // 다음 방문할 노드가 존재한다명
    if (j !== -1) {
      // 스택에 담겨있는 노드라면 사이클을 찾은 것
      if (visited[j]) {
        // 사이클을 잘라서 배열에 저장
        const k = stack.indexOf(j);
        if (k !== -1) {
          cycle.push(stack.slice(k));
        }
      }
      // 스택에 없다면 새로운 노드를 가지고 재귀호출
      else {
        dfs(j);
      }
    }

    // 함수를 종료하기 전에 스택에서 현재노드를 꺼내줌
    stack.pop();
  };
  for (let i = 0; i < n; i++) {
    dfs(i);
  }
  return cycle.length ? Math.max(...cycle.map((c) => c.length)) : -1;
};
```

# 풀이

DFS 함수를 사용해서 그래프를 탐색하고 사이클을 찾습니다. DFS를 수행할 때 방문한 노드들을 스택에 담고, 다음 방문할 노드가 스택 안에 존재한다면 사이클이 있음을 확인하고 스택에서 재방문한 노드의 위치를 기준으로 slice해서 cycle에 담습니다. stack은 현재 경로가 사이클인지를 확인하기 위한 저장소이고 visited와는 구별하여 사용합니다.

# 결과

Accepted
Runtime : 94.23%
Memory: 88.46%
