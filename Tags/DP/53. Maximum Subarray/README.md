# 문제

[54. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

# 풀이

nums 배열에서 연속된 부분 배열의 합 중 가장 큰 값을 반환합니다.
반복문을 돌면서 이전값과 현재값을 바탕으로 부분 배열을 확장할지를 결정합니다.

# 시간복잡도

O(n)

for 루프를 nums 배열의 모든 요소에 대해 한 번씩 순회하며, 각 요소에 대해 Math.max 함수를 호출합니다. 이 때, Math.max 함수는 두 개의 인수 중 더 큰 값을 반환하므로 상수 시간 O(1)으로 실행됩니다. 따라서 for 루프의 시간 복잡도는 O(n)입니다.

# 코드

```javascript
const maxSubArray = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};
```

# 결과

Accepted
Runtime : 89.89%  
Memory: 45.6 MB
