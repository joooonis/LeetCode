/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
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
