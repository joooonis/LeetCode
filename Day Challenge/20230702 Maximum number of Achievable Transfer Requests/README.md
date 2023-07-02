# 문제

[1601. Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/editorial/)

# 코드

```javascript
var maximumRequests = function (n, requests) {
  indegree = Array(n).fill(0);
  ans = 0;

  const backTrack = (curr, count = 0) => {
    if (curr === requests.length) {
      if (indegree.every((x) => x === 0)) {
        ans = Math.max(ans, count);
        return;
      } else return;
    }
    let [x, y] = requests[curr];
    indegree[x] += 1;
    indegree[y] -= 1;
    backTrack(curr + 1, count + 1);
    indegree[x] -= 1;
    indegree[y] += 1;
    backTrack(curr + 1, count);
  };

  backTrack(0, 0);

  return ans;
};
```

# 풀이

백트랙킹으로 모든 경우를 탐색합니다. 모든 requests에 대해서 request를 받는 경우(1), 받지 않는 경우(0)의 두가지 경우가 존재합니다. request <= 16 이므로 최대 2\*\*16가지의 케이스가 존재하고 이는 충분히 가능한 수입니다.

재귀함수로 백트랙킹을 구현하고, 알고리즘 복잡도는 O(2\*\*n) (n:requests의 길이) 입니다.
