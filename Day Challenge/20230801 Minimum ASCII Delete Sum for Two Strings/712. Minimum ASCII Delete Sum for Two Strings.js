/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  const dp = [];
  for (let i = 0; i <= s1.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= s2.length; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }

  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] =
        s1[i - 1] === s2[j - 1]
          ? dp[i - 1][j - 1]
          : Math.min(
              dp[i - 1][j] + s1.charCodeAt(i - 1),
              dp[i][j - 1] + s2.charCodeAt(j - 1)
            );
    }
  }

  return dp[s1.length][s2.length];
};
