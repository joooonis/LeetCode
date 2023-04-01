# 문제

[64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/description/)

# 코드

```javascript
function subarraySum(nums, k) {
  const map = new Map([[0, 1]]);
  let sum = 0;
  let count = 0;
  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}
```

# 풀이

이 코드는 배열 nums에서 부분 배열(subarray)의 합이 k가 되는 경우의 수를 구하는 함수입니다.

이 함수는 map 변수를 생성하여 부분 합을 키(key)로 하고, 해당 부분 합이 나온 횟수를 값(value)으로 하는 맵을 만듭니다. 이때 초기값으로는 부분 합이 0인 경우가 하나 있으므로, 이 경우를 미리 맵에 넣어줍니다.

그리고 배열 nums의 각 원소 num을 탐색하면서, 현재까지의 부분 합 sum에 num을 더합니다. 그리고 이전에 나왔던 부분 합 중에서 현재까지의 부분 합에서 k를 뺀 값이 있으면, 해당 값을 가진 키(key)에 해당하는 값을 count에 더합니다. 그리고 현재의 부분 합 sum을 맵에 추가합니다. 이때, 맵에 이미 sum이라는 키(key)가 있으면 해당 값을 1 증가시키고, 없으면 1을 값(value)으로 추가합니다.

반복문을 마치면, 부분 합이 k인 부분 배열의 개수가 count 변수에 저장되어 있으므로, 이 값을 반환합니다.

이 함수의 시간 복잡도는 O(N)입니다. 이는 배열 nums을 한 번 탐색하면서 맵에 값을 추가하고, 해당 맵을 다시 탐색하여 부분 합이 k인 경우를 찾기 때문입니다. 공간 복잡도는 O(N)입니다. 이는 map 맵에 최대 N개의 부분 합을 저장할 수 있기 때문입니다.

# 결과

Accepted
Runtime : 64.51%
Memory: 79.38%
