/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  let dp = [];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    dp.push({});
    for (let j = 0; j < i; j++) {
      let diff = nums[i] - nums[j];
      if (dp[j][diff]) {
        dp[i][diff] = dp[j][diff] + 1;
      } else {
        dp[i][diff] = 2;
      }
      max = Math.max(max, dp[i][diff]);
    }
  }
  return max;
};
