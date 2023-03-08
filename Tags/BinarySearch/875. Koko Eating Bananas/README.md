# 문제

[875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/description/)

# 풀이

이진 탐색을 통해 최소 먹는 속도를 찾습니다.
reduce 함수를 가지고 먹는데 걸리는 시간을 계산합니다.

# 코드

```javascript
const minEatingSpeed = (piles, h) => {
  let left = 1;
  let right = piles.reduce((acc, val) => acc + val);
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let hours = piles.reduce((a, b) => a + Math.ceil(b / mid), 0);
    if (hours > h) {
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
Runtime : 11.37%
Memory: 13.88%
