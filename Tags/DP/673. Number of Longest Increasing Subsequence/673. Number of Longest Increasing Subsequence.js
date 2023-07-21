/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let count = new Array(nums.length).fill(1);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    for (let j = 0; j < i; j++) {
      if (nums[j] < num) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
    max = Math.max(max, dp[i]);
  }
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (dp[i] === max) {
      res += count[i];
    }
  }
  return res;
};
