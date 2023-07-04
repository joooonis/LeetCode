# 문제

[137. Single Number II](https://leetcode.com/problems/single-number-ii/description/)

# 코드

```javascript
var singleNumber = function (nums) {
  let hash = {};
  for (const n of nums) {
    hash[n] = (hash[n] || 0) + 1;
    if (hash[n] === 3) delete hash[n];
  }
  return Object.keys(hash)[0];
};
```

# 풀이

hash, map을 이용헙니다. 아래와 같이 hash 값을 동시에 초기화, 업데이트 할 수 있습니다. 시간복잡도는 O(n)입니다.

```javascript
hash[n] = (hash[n] || 0) + 1;
```
