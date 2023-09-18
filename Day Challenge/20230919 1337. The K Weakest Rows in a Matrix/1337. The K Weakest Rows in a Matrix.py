class Solution(object):
    def kWeakestRows(self, mat, k):
        """
        :type mat: List[List[int]]
        :type k: int
        :rtype: List[int]
        """

        def binary_search(row):
            l, r = 0, len(row)
            while l < r:
                mid = (l + r) // 2
                if row[mid] == 1:
                    l = mid + 1
                else:
                    r = mid
            return l

        res = []
        for i, row in enumerate(mat):
            res.append((binary_search(row), i))
        res.sort()
        return [x[1] for x in res[:k]]
