/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
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
