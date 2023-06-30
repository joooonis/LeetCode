# 문제

[864. Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)

# 코드

```python
from collections import deque
class Solution(object):
    def shortestPathAllKeys(self, grid):
        """
        :type grid: List[str]
        :rtype: int
        """
        row, col = len(grid), len(grid[0])
        start = None
        keys = 0
        for i in range(row):
            for j in range(col):
                if grid[i][j] == '@':
                    start = (i, j)
                elif grid[i][j] in 'abcdef':
                    keys |= 1 << (ord(grid[i][j]) - ord('a'))
        q = deque([(start[0], start[1], 0, 0)])
        visited = set([(start[0], start[1], 0)])
        while q:
            i, j, k, d = q.popleft()
            if k == keys:
                return d
            for di, dj in ((0, 1), (0, -1), (1, 0), (-1, 0)):
                ni, nj = i + di, j + dj
                if 0 <= ni < row and 0 <= nj < col:
                    if grid[ni][nj] == '#':
                        continue
                    if grid[ni][nj] in 'ABCDEF' and not (k & (1 << (ord(grid[ni][nj]) - ord('A')))):
                        continue
                    if grid[ni][nj] in 'abcdef':
                        nk = k | (1 << (ord(grid[ni][nj]) - ord('a')))
                    else:
                        nk = k
                    if (ni, nj, nk) not in visited:
                        visited.add((ni, nj, nk))
                        q.append((ni, nj, nk, d + 1))
        return -1
```

# 풀이

```python
    row, col = len(grid), len(grid[0])
    start = None
    keys = 0
    for i in range(row):
        for j in range(col):
            if grid[i][j] == '@':
                start = (i, j)
            elif grid[i][j] in 'abcdef':
                keys |= 1 << (ord(grid[i][j]) - ord('a'))
```

그리드의 행과 열의 개수를 row과 col에 저장합니다. 그리고 시작 지점을 나타내는 start 변수를 None으로 초기화하고, 획득해야 할 열쇠를 나타내는 keys 변수를 0으로 초기화합니다.

```python
    q = deque([(start[0], start[1], 0, 0)])
    visited = set([(start[0], start[1], 0)])
```

deque 자료구조 q와 방문한 지점을 저장하기 위한 set 자료구조 visited를 생성합니다. q에는 시작 지점의 좌표 (start[0], start[1]), 현재까지 획득한 열쇠의 비트 표현 0, 그리고 경로의 길이 0을 튜플로 묶어서 추가합니다. visited에는 시작 지점을 방문한 상태로 추가합니다.

```python
    while q:
        i, j, k, d = q.popleft()
        if k == keys:
            return d
```

q가 비어있지 않은 동안 다음 과정을 반복합니다. q에서 가장 왼쪽의 좌표 (i, j)와 현재까지 획득한 열쇠의 비트 표현 k, 그리고 경로의 길이 d를 가져옵니다. 만약 k가 모든 열쇠를 획득한 상태라면, 즉 k와 keys가 같다면 현재까지의 경로의 길이 d를 반환하고 종료합니다.
우선순위 큐 `heap`이 비어 있지 않고, `pairs`의 길이가 k보다 작을 동안 아래 과정을 반복합니다:

```python
        for di, dj in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            ni, nj = i + di, j + dj
            if 0 <= ni < row and 0 <= nj < col:
                if grid[ni][nj] == '#':
                    continue
                if grid[ni][nj] in 'ABCDEF' and not (k & (1 << (ord(grid[ni][nj]) - ord('A')))):
                    continue
                if grid[ni][nj] in 'abcdef':
                    nk = k | (1 << (ord(grid[ni][nj]) - ord('a')))
                else:
                    nk = k
                if (ni, nj, nk) not in visited:
                    visited.add((ni, nj, nk))
                    q.append((ni, nj, nk, d + 1))

```

현재 위치에서 상하좌우로 이동할 수 있는 좌표 변화를 (di, dj)에 저장합니다. 이동한 좌표 (ni, nj)가 그리드 내에 있으면서 벽(#)이 아닌 경우를 확인합니다. 그리고 만약 이동한 좌표에 대응하는 그리드 값이 A부터 F까지의 알파벳 중 하나인 경우, 해당 열쇠를 이미 획득한 상태인지를 확인합니다. 획득한 열쇠를 가지고 있지 않다면 이동할 수 없으므로 다음 이동 가능한 좌표로 건너뜁니다.

그 외의 경우, 이동한 좌표가 a부터 f까지의 알파벳 중 하나인 경우, 새로운 열쇠를 획득한 상태로 업데이트합니다. 그렇지 않은 경우, 즉 이동한 좌표가 벽이나 열쇠가 아닌 경우, 획득한 열쇠의 상태는 그대로 유지합니다.

마지막으로, 이동한 좌표와 업데이트된 열쇠의 상태 (ni, nj, nk)가 방문한 적이 없는 경우에는 visited에 추가하고, 새로운 상태를 q에 추가합니다. 경로의 길이 d도 1 증가시켜서 함께 추가합니다.

만약 모든 경우를 탐색하고도 모든 열쇠를 획득할 수 없는 경우에는 -1을 반환합니다.

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
