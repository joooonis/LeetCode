# 문제

[2187. Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/description/)

# 풀이

time = [t1,t2,t3] 일때 k초가 지난 후 totalTrips의 값은 k//t1 + k//t2 + k//t3 입니다.
즉 몫의 값의 합 만큼의 totalTrips의 값이 될 것입니다. 선형적으로 탐색을 하니 시간초과가 나므로 이진탐색으로 찾습니다. 최소시간은 1로 최대시간은 한개의 버스로만 운행하는 하는 경우 걸리는 시간으로 설정합니다.

# 코드

```javascript
const minimumTime = (time, totalTrips) => {
  let minTime = 1;
  let maxTime = Math.min(...time) * totalTrips;
  let midTime = Math.floor((minTime + maxTime) / 2);
  let trips = 0;
  while (minTime < maxTime) {
    trips = 0;
    for (let i = 0; i < time.length; i++) {
      trips += Math.floor(midTime / time[i]);
    }
    if (trips < totalTrips) {
      minTime = midTime + 1;
    } else {
      maxTime = midTime;
    }
    midTime = Math.floor((minTime + maxTime) / 2);
  }

  return minTime;
};
```

# 결과

Accepted
Runtime : 66.25%
Memory: 43.75%
