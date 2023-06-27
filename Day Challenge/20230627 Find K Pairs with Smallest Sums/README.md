# 문제

[373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/submissions/)

# 코드

```python
import heapq
class Solution(object):
    def kSmallestPairs(self, nums1, nums2, k):
        def push(i, j):
            if i < len(nums1) and j < len(nums2):
                heapq.heappush(heap, [nums1[i] + nums2[j], i, j])

        heap = []
        push(0, 0)
        pairs = []
        while heap and len(pairs) < k:
            _, i, j = heapq.heappop(heap)
            pairs.append([nums1[i], nums2[j]])
            push(i, j + 1)
            if j == 0:
                push(i + 1, 0)
        return pairs

```

# 풀이

heap(priority queue)를 사용합니다.

```python
# 모듈 import
import heapq

# heap 배열 생성
heap = []

# heap에 원소 추가
heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
heapq.heappush(heap, 2)

# 최솟값 꺼내기
min_value = heapq.heappop(heap)
```

heapq 모듈은 우선순위 큐를 구현하는데, 이 우선순위 큐는 기본적으로 튜플의 첫 번째 요소를 우선순위로 인식합니다. 즉, 튜플 (x, i, j)를 우선순위 큐에 저장할 때, 우선순위는 x의 값입니다.

```python
def push(i, j):
    if i < len(nums1) and j < len(nums2):
        heapq.heappush(heap, [nums1[i] + nums2[j], i, j])

```

`push` 함수는 `nums1`과 `nums2`의 인덱스 i와 j를 받아 해당 위치의 숫자를 더한 값을 우선순위 큐인 "heap"에 추가합니다. 즉, `nums1[i] + nums2[j]`를 우선순위로 하는 튜플 `[nums1[i] + nums2[j], i, j]`를 `heap`에 추가합니다.

```python
while heap and len(pairs) < k:
    x, i, j = heapq.heappop(heap)
    pairs.append([nums1[i], nums2[j]])
    push(i, j + 1)
    if j == 0:
        push(i + 1, 0)
```

우선순위 큐 `heap`이 비어 있지 않고, `pairs`의 길이가 k보다 작을 동안 아래 과정을 반복합니다:

`heap`에서 가장 작은 우선순위 값을 가져와서 (x, i, j)에 할당합니다.
`pairs`에 `[nums1[i], nums2[j]]` 형태로 숫자 쌍을 추가합니다.
`push(i, j + 1)`을 호출하여 현재 숫자 쌍의 다음 인덱스 값을 우선순위 큐 `heap`에 추가합니다.
만약 j가 0인 경우 (현재 숫자 쌍의 두 번째 리스트의 첫 번째 숫자일 경우), `push(i + 1, 0)`을 호출하여 다음 숫자 쌍의 첫 번째 리스트의 첫 번째 숫자를 우선순위 큐 `heap`에 추가합니다.
반복이 종료되면 "pairs"에는 최소 k개의 숫자 쌍이 저장되어 반환됩니다.

이 코드는 두 개의 정렬된 리스트에서 최소 k개의 숫자 쌍을 찾는 문제를 해결하는 알고리즘입니다. 이 알고리즘은 우선순위 큐를 활용하여 숫자 쌍을 적절한 순서로 추출하고, 새로운 숫자 쌍을 추가하여 탐색 범위를 확장하는 방식으로 동작합니다.

# 예시

nums1 = [1, 7, 11], nums2 = [2, 4, 6], k = 3을 인자로 전달하면 kSmallestPairs 함수는 다음과 같은 과정을 거칩니다:

- heap에서 (3, 0, 0)을 추출합니다.
- (3, 0, 0)에 해당하는 숫자 쌍 [1, 2]을 pairs에 추가합니다.
- push(0, 1)을 호출하여 (5, 0, 1)을 heap에 추가합니다.
- push(1, 0)을 호출하여 (8, 1, 0)을 heap에 추가합니다.
- heap에서 (5, 0, 1)을 추출합니다.
- (5, 0, 1)에 해당하는 숫자 쌍 [1, 4]을 pairs에 추가합니다.
- push(0, 2)을 호출하여 (7, 0, 2)를 heap에 추가합니다.
- push(1, 0)을 호출하여 (8, 1, 0)을 heap에 추가합니다.
- heap에서 (7, 0, 2)을 추출합니다.
- (7, 0, 2)에 해당하는 숫자 쌍 [1, 6]을 pairs에 추가합니다.
- 따라서, 최종적으로 pairs에는 최소 3개의 숫자 쌍이 저장되어 반환됩니다: [[1, 2], [1, 4], [1, 6]]. 이와 같이 수정된 설명을 확인해주시기 바랍니다. 죄송합니다.
