# 문제

[45. Jump Game II](https://leetcode.com/problems/jump-game-ii/)

# 코드

```javascript
const const jump = (nums) => {
  const dp = new Array(nums.length).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
  return dp[nums.length - 1];
};

```

# 풀이

jump 함수는 주어진 배열 nums를 인자로 받아서, 해당 배열에서 뛰어넘어야 하는 최소한의 점프 횟수를 반환하는 함수입니다.

먼저, dp라는 새로운 배열을 생성합니다. 이 배열은 각 인덱스까지 도달하는 데 필요한 최소 점프 수를 저장할 것입니다. 배열을 모두 Infinity 값으로 초기화합니다.

첫 번째 원소인 dp[0]은 0으로 초기화합니다. 첫 번째 원소는 이미 시작 위치에서 시작하므로, 점프 횟수가 필요하지 않기 때문입니다.

그다음, for 루프를 통해 dp 배열을 채웁니다. 이중 for 루프를 이용하여, 현재 위치에서 뛰어넘어 갈 수 있는 최대 거리까지의 모든 인덱스에 대해, 해당 인덱스로 도달하는 데 필요한 최소 점프 수를 갱신합니다. 이때, dp[i + j]는 dp[i]에서 1을 더한 값이므로, 갱신 시에 dp[i + j]와 dp[i] + 1 중 작은 값을 dp[i + j]에 저장합니다.

마지막으로, dp[nums.length - 1] 값을 반환합니다. 이 값은 배열의 마지막 인덱스까지 도달하는 데 필요한 최소 점프 수입니다.

# 시간복잡도

이중 for 루프를 이용하기 때문에 O(n^2)입니다. 하지만, 이 알고리즘은 해당 문제를 해결하기 위해 상당히 효과적인 방법입니다.

# 결과

Accepted
Runtime : 89.89%  
Memory: 45.6 MB
