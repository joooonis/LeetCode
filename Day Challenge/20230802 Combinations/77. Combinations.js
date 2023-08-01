/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
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

var combine = function (n, k) {
  answer = [];
  const getCombies = (arr, c, k) => {
    if (arr.length === k) {
      answer.push(arr);
      return;
    }
    if (c === n + 1) return;

    getCombies([...arr, c], c + 1, k);
    getCombies(arr, c + 1, k);
  };
  getCombies([], 1, k);
  return answer;
};
