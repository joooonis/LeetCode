# 문제

[50. Pow(x, n)](https://leetcode.com/problems/powx-n/editorial/)

# 코드

```js
var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) return 1 / myPow(x, -n);

  if (n % 2 === 0) return myPow(x * x, n / 2);

  return x * myPow(x * x, (n - 1) / 2);
};
```

# 풀이

Constraints:

- 100.0 < x < 100.0
- 231 <= n <= 231-1
- n is an integer.
- Either x is not zero or n > 0.
- 104 <= xn <= 104

제한사항을 보면 알 수 있듯이 최적화를 잘해야 모든 테케를 통과할 수 있습니다.

우선 재귀는 필수적으로 사용하고, 추가적으로 최적화하기위해 어떤 방법이 있는지 생각해봅니다.

```js
var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) return 1 / myPow(x, -n);

  return x * myPow(x, n - 1);
};
```

우선 위와 같이 작성만해도 모든 케이스를 통과할 수 있습니다.

n이 짝수인 경우 :
x^n = (x^2)^n/2

n이 홀수인 경우 :
x^n = x\*(x^2)^n-1/2

이를 재귀과정에 적용하면 스텝을 확연하게 줄일 수 있습니다.

```js
var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) return 1 / myPow(x, -n);

  if (n % 2 === 0) return myPow(x * x, n / 2);

  return x * myPow(x * x, (n - 1) / 2);
};
```

예를 들어 2^100을 계산하는 경우 처음의 방법으로는 100 steps이 걸리지만 최적화를 통해 10 steps으로 줄일 수 있습니다.
