/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let dp = Array(prices.length)
    .fill()
    .map(() => Array(2).fill(0));

  // 첫날에 주식을 산 경우
  dp[0][1] = -prices[0];

  // dp[i][0] : i번째 날에 주식을 팔았을 때 최대 이익
  // dp[i][1] : i번째 날에 주식을 샀을 때 최대 이익
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[dp.length - 1][0];
};
