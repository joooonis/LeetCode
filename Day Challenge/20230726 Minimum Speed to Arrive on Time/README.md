# 문제

[1870. Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/)

# 코드

```js
var minSpeedOnTime = function (dist, hour) {
  const len = dist.length;
  if (hour < len - 1) return -1;

  let left = 1;
  let right = 10 ** 7;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    let sum = 0;
    for (let i = 0; i < len - 1; i++) sum += Math.ceil(dist[i] / mid);
    sum += dist[len - 1] / mid;
    if (sum <= hour) right = mid;
    else left = mid + 1;
  }

  return left;
};
```

# 풀이

이진탐색으로 범위를 좁혀가며 빠르게 찾아줍니다.
