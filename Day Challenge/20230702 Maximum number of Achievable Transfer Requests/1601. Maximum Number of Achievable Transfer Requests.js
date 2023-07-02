/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  indegree = Array(n).fill(0);
  ans = 0;

  const dfs = (i, count = 0) => {
    if (i === requests.length) {
      if (indegree.every((x) => x === 0)) {
        ans = Math.max(ans, count);
        return;
      } else return;
    }
    let [x, y] = requests[i];
    indegree[x] += 1;
    indegree[y] -= 1;
    dfs(i + 1, count + 1);
    indegree[x] -= 1;
    indegree[y] += 1;
    dfs(i + 1, count);
  };

  dfs(0, 0);

  return ans;
};
