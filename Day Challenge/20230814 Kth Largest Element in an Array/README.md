# 문제

[215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/description/)

# 코드

```js
var findKthLargest = function (nums, k) {
  arr = [];
  for (let n of nums) {
    if (!arr) arr.push(Number(n));
    let left = 0;
    let right = arr.length;
    while (left < right) {
      mid = Math.floor((left + right) / 2);
      if (arr[mid] > Number(n)) {
        left = mid + 1;
      } else right = mid;
    }
    arr.splice(left, 0, n);
  }
  return arr[k - 1];
};
```

# 풀이

하나씩 꺼내서 새로운 배열에다가 담는데 이진탐색으로 알맞은 위치를 찾아서 splice 매서드로 넣어줍니다.
