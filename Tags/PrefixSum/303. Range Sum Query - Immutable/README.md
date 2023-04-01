# 문제

[303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/description/)

# 코드

```javascript
var NumArray = function (nums) {
  this.prefixSum = [0];
  for (let i = 0; i < nums.length; i++) {
    this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
  }
};

NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSum[right + 1] - this.prefixSum[left];
};
```

# 풀이

누적합을 통해 구간합을 구하는 `NumArray` `class`의 생성자를 작성하는 코드입니다. 생성자 함수로 `nums`를 받아 누적합 배열인 `prefixSum`을 초기화 합니다 이후 `prefixSum` 베열을 이용하여 `left`부터 `right`까지의 구간합을 반환하는 함수 `sumRange`를 구현합니다.

left 부터 right 까지의 합은 `prefixSum[right + 1] - prefixSum[left]`으로 구할 수 있습니다.

# 결과

Accepted
Runtime : 87.6%
Memory: 21.12%
