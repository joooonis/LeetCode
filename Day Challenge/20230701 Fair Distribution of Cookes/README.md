# 문제

[2305. Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/description/)

# 코드

```javascript
var distributeCookies = function (cookies, k) {
  const curr = Array(k).fill(0);
  const n = cookies.length;
  const dfs = (i, zeroCount) => {
    if (n - i < zeroCount) return Infinity;
    if (n === i) return Math.max(...curr);

    answer = Infinity;
    for (let j = 0; j < k; j++) {
      zeroCount -= curr[j] === 0 ? 1 : 0;
      curr[j] += cookies[i];
      answer = Math.min(answer, dfs(i + 1, zeroCount));
      curr[j] -= cookies[i];
      zeroCount += curr[j] === 0 ? 1 : 0;
    }
    return answer;
  };
  return dfs(0, k);
};
```

# 풀이

dfs를 사용하여 완전 탐색을 합니다. 단 recursive 하게 모든 경우를 탐색할 때 쿠키를 받을 수 없는 사람이 생기게 되면 그 분기에서 탐색을 종료합니다. 이러한 기법을 백트래킹(Backtracking)이라고 합니다 백트래킹은 완전 탐색의 일종으로, 모든 가능한 조합을 시도하면서 조건을 만족하는 해를 찾는 방법입니다.

백트래킹은 일반적으로 재귀적인 방식으로 구현됩니다. 기본 아이디어는 주어진 문제를 작은 부분 문제로 나느고, 각 부분 문제를 해결하면서 조건을 체크하여 해를 찾는 것입니다. 하나의 부분 문제를 해결한 후에 다음 부분 문제를 해결하기 위해 이전 상태로 돌아가는(backtrack) 것이 특징입니다.

주요한 개념은 '상태 공간 트리(State Space Tree)'입니다. 상태 공간 트리는 문제의 가능한 모든 상태를 나타내는 트리 구조입니다. 각 노드는 문제에서의 한 가지 상태를 나타내며, 각 상태에서 가능한 다음 상태들이 자식노드로 연결됩니다. 백트래킹은 이 상태 공간 트리를 탐색하면서 해를 찾아가는 방식으로 동작합니다.

백트래킹 알고리즘의 핵심은 '가지치키(Pruning)'입니다. 가지치기는 현재 상태에서 해를 찾을 가능성이 없는 가지를 제거하여 불필요한 탐색을 줄이는 것을 말합니다. 조건을 체크하여 더 이상 탐색하지 않아도 되는 상태로 판다뇌면, 해당 가지를 가지치기하여 다음 상태로 넘어가지 않고 이전 상태로 돌아갑니다. 이렇게 하면 불필요한 탐색을 피하고 실행 시간을 단축할 수 있습니다.

위 문제에서는 아래부분이 가지치기에 해당됩니다.

```javascript
if (n - i < zeroCount) return Infinity;
if (n === i) return Math.max(...curr);
```
