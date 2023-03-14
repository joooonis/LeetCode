# 문제

[142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)

# 풀이

이 코드는 투 포인터(Two-Pointer) 알고리즘을 사용하여, 순환 구조를 탐지하고 해당 구조에서 노드를 찾습니다. 순환 구조가 있는 경우, 두 개의 포인터가 결국 같은 지점에서 만나게 되며, 이 때 두 개의 포인터 중 하나를 처음 노드로 돌려서 두 포인터를 같은 속도로 이동시키면, 두 포인터가 다시 만나는 지점은 순환의 시작 지점입니다.

# 코드

```javascript
const detectCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
```

# 결과

Accepted
Runtime : 96.23%
Memory: 53.31%
