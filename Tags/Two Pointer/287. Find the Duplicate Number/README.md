# 문제

[287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/description/)

[토끼와 거북이](https://fierycoding.tistory.com/45)

# 풀이

Floyd's cycle detection algorithm, 또는 토끼와 거북이 알고리즘으로 풀 수 있습니다.

위 알고리즘을 사용하면 링크드 리스트에 사이클의 위치를 확인할 수 있습니다.

1. 토끼와 거북이를 리스트의 root에서 출발합니다.
2. 토끼는 두칸씩, 거북이는 한칸씩 전진합니다.
3. 만약 리스트에 사이클이 있다면 토끼와 거북이는 언젠가는 만나게 됩니다.
4. 토끼와 거북이가 만났다면 거북이를 다시 시작점으로 돌려보냅니다.
5. 이후 토끼와 거북이 모두 한칸씩 전진하다가 만나는 점이 사이클의 시작점입니다.

위 문제에서는 순환점이 중복되는 수가 되고, 시간복잡도는 O(n)입니다.

```javascript
const findDuplicate1 = (nums) => {
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
```

# 결과

Accepted
Runtime : 82.73%
Memory: 82.45%
