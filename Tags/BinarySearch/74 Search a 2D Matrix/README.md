# 문제

[74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)

# 코드

```py
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # O(log(mn)) / O(1)
        m, n = len(matrix), len(matrix[0])
        l, r = 0, m*n-1
        while l < r:
            mid = (l+r)//2
            if matrix[mid//n][mid % n] < target:
                l = mid + 1
            else:
                r = mid
        return matrix[l//n][l % n] == target

```

# 풀이

Binary Search, n(len(matrix[0]))개 씩 끊어서 행이 바뀌므로 현재 위치를 `matrix[mid//n][mid % n]`로 나타낼 수 있습니다.
