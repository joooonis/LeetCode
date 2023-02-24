const jump = (nums) => {
  const dp = new Array(nums.length).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
  return dp[nums.length - 1];
};
