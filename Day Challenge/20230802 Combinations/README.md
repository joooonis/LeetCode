# 문제

[77. Combinations
](https://leetcode.com/problems/combinations/description/)

# 코드

```js
var combine = function (n, k) {
  const result = [];
  const dfs = (start, path) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      dfs(i + 1, path);
      path.pop();
    }
  };

  dfs(1, []);
  return result;
};
```

# 풀이

DFS, BackTracking 기법으로 모든 경우의 수를 완전탐색합니다.
