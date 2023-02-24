class Solution(object):
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        copy = [item[:] for item in matrix]
        n = len(matrix)
        i = 0
        j = n - 1
        for _ in range(n//2):
            for m in range(i,j+1):
                matrix[m][j] = copy[i][m]
                matrix[j][m] = copy[j-m+i][j]
                matrix[m][i] = copy[j][m]
                matrix[i][m] = copy[j-m+i][i]
            i += 1
            j -= 1
        return matrix