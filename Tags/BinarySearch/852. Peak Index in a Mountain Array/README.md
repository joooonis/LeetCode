# 문제

[852. Peak Index in a Mountain Array
](https://leetcode.com/problems/peak-index-in-a-mountain-array/description/)

# 코드

```js
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) left = mid + 1;
    else right = mid;
  }

  return left;
};
```

# 풀이

이진탐색으로 효율성을 높이는 문제입니다. O(logn) 또는 O(n)이면 통과됩니다.
