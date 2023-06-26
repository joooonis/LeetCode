# 문제

[1027. Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence/)

# 코드

```javascript
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
```

# 풀이

함수 longestArithSeqLength은 nums라는 숫자 배열을 매개변수로 받습니다.

먼저, 변수 dp를 빈 배열로 초기화하고, 최대 길이를 나타내는 변수 max를 0으로 초기화합니다.

배열 nums를 순회하면서 각 숫자에 대해 다음 작업을 수행합니다.

1. dp 배열에 빈 객체를 추가합니다. dp[i]는 nums[i]까지의 등차수열의 정보를 담은 객체입니다.

2. i번째 숫자보다 앞에 있는 숫자들(j번째 숫자)과의 등차를 계산합니다. (diff = nums[i] - nums[j])

3. 만약 dp[j]에 diff라는 등차가 존재한다면, dp[j][diff]에 1을 더한 값을 dp[i][diff]에 저장합니다.
   즉, nums[i]까지의 등차수열의 길이를 dp[i][diff]에 저장합니다.

4. 만약 dp[j]에 diff라는 등차가 존재하지 않는다면, dp[i][diff]를 2로 초기화합니다.
   즉, nums[j]와 nums[i]로 이루어진 등차수열의 길이가 2임을 의미합니다.

5. max 변수를 업데이트하여 현재까지의 가장 긴 등차수열의 길이를 유지합니다.

6. 위 과정을 반복하여 배열 nums의 모든 숫자에 대해 가장 긴 등차수열의 길이를 찾습니다.

7. 최종적으로 max 값을 반환하여 가장 긴 등차수열의 길이를 출력합니다.

# 결과

Accepted
Runtime : 35.50%
Memory: 15.98%
