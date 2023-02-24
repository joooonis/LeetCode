# 문제

[1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

# 풀이

이진탐색으로 풀어야 모든 케이스가 통과 됩니다.
이분탐색을 이용하여 최소 무게와 최대 무게 사이의 중간값(mid)을 구합니다. 이후, mid 값을 기준으로 해당 무게를 일정 기간(days) 내에 배송할 수 있는지 검사합니다. 이 과정을 반복하여 최소 무게를 구하고, 이를 반환합니다. 이 알고리즘의 시간 복잡도는 O(n log n)입니다.

# 코드

```javascript
const shipWithinDays = function (weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((acc, cur) => acc + cur, 0);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let day = 1; // 현재 배송 일수
    let sum = 0; // 현재 배송 중인 무게
    for (const weight of weights) {
      if (sum + weight > mid) { // 배송 무게 초과
        day++;
        sum = 0;
      }
      sum += weight;
    }
    if (day > days) { // 배송 일수 초과
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

```

# 결과

Accepted
Runtime : 25.34%
Memory: 82.40%
