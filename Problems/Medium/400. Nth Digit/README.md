# 문제

[400. Nth Digit](https://leetcode.com/problems/nth-digit/)

# 풀이

한 자리수의 개수 = 9 -> 1~9 -> index : 1~9
두 자리수의 개수 = 90 -> 10 ~ 99 -> index 10 ~ 189
...

먼저, 변수 len을 1로, count를 9로 초기화하고, start를 1로 설정합니다. 이후, while 루프를 이용해 주어진 n이 몇 자리 수인지 구합니다. 이를 위해서는 n이 현재 검사 중인 자릿수의 숫자 개수보다 큰지 비교하면 됩니다. 만약 n이 현재 검사 중인 자릿수의 숫자 개수보다 크면, len을 1 증가시키고, count를 10배로 증가시키고, start도 10배로 증가시킵니다. 이를 반복하면서 n이 현재 검사 중인 자릿수의 숫자 개수보다 작아질 때까지 반복합니다.

그리고 나서, start에 (n-1)/len을 내림한 값을 더해주어서 n번째 자릿수가 속한 숫자를 구합니다. (n-1)/len을 내림한 이유는, 배열 인덱스는 0부터 시작하기 때문입니다.

마지막으로, start를 문자열로 변환한 후, (n-1)%len번째 문자를 정수로 변환하여 반환합니다. 이때, (n-1)%len을 하는 이유는, start에서 구한 숫자의 len자리 중에서 n번째 자릿수가 몇 번째 문자에 해당하는지를 구하기 위해서입니다.

# 코드

```javascript
var findNthDigit = function (n) {
  let len = 1;
  let count = 9;
  let start = 1;
  while (n > len * count) {
    n -= len * count;
    len++;
    count *= 10;
    start *= 10;
  }
  start += Math.floor((n - 1) / len);
  let s = start.toString();
  return parseInt(s[(n - 1) % len]);
};
```

# 결과

Accepted
Runtime : 82.73%
Memory: 82.45%

```

```
