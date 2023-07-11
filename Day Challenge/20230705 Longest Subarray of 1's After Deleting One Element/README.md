# 문제

[1493. Longest Subarray of 1's After Deleting One Element
](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/)

# 코드

```javascript
var longestSubarray = function (nums) {
  let zeroCount = 0;
  let longestWindow = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    zeroCount += nums[i] === 0 ? 1 : 0;

    while (zeroCount > 1) {
      zeroCount -= nums[start] === 0 ? 1 : 0;
      start++;
    }

    longestWindow = Math.max(longestWindow, i - start);
  }

  return longestWindow;
};
```

# 풀이

Sliding Window(슬라이딩 윈도우, 투 포인터) 개념을 이용합니다.

주어진 범위내에 0이 한번만 들어가도록 윈도우 양 끝을 조절해나가며 윈도우를 오른쪽으로 진행시킵니다.

오른쪽 끝을 한칸 씩 전진해나가며 내부에 0의 개수를 카운팅 합니다.

만약 윈도우 안에 0이 두개가 된다면 왼쪽 끝을 0이 하나가 포함 될 때까지 전진시킵니다.
