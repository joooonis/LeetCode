# 문제

[1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

# 풀이

이진탐색으로 풀어야 모든 케이스가 통과 됩니다.
이분탐색을 이용하여 최소 무게와 최대 무게 사이의 중간값(mid)을 구합니다. 이후, mid 값을 기준으로 해당 무게를 일정 기간(days) 내에 배송할 수 있는지 검사합니다. 이 과정을 반복하여 최소 무게를 구하고, 이를 반환합니다. 이 알고리즘의 시간 복잡도는 O(n log n)입니다.

1. 초기에 left 변수에 weights 리스트의 최대값을, right 변수에 weights 리스트의 합계를 할당합니다.

2. left가 right보다 작은 동안 이진 검색을 수행합니다.

- mid 변수에 left와 right의 중간값인 (left + right) // 2를 할당합니다.
- day 변수를 1로 초기화하고, total_weight 변수를 0으로 초기화합니다.
- weights 리스트를 순회하면서 현재 합계 total_weight와 현재 무게 weight를 비교합니다.
  - total_weight + weight > mid인 경우, 운송 무게 mid를 초과하므로 배송일 day를 증가시키고 total_weight를 0으로 초기화합니다.
  - 그렇지 않은 경우, total_weight에 weight를 더합니다.
- 모든 무게를 처리한 후에 day가 주어진 배송일 수 days보다 큰지 확인합니다.
  - day > days인 경우, left 값을 mid + 1로 업데이트합니다.
    그렇지 않은 경우, right 값을 mid로 업데이트합니다.

3. 반복이 끝난 후 left 값이 최소 운송 무게를 나타내므로 left를 반환합니다.

# 코드

```python
class Solution(object):
    def shipWithinDays(self, weights, days):
        left = max(weights)
        right = sum(weights)

        while left < right:
            mid = (left + right) // 2
            day = 1
            total_weight = 0

            for weight in weights:
                if total_weight + weight > mid:
                    day += 1
                    total_weight = 0
                total_weight += weight

            if day > days:
                left = mid + 1
            else:
                right = mid

        return left
```

# 결과

Accepted
Runtime : 60.56%
Memory: 85.92%
