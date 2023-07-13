class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: bool
        """
        graph = [[] for _ in range(numCourses)]
        indegree = [0] * numCourses

        for [a, b] in prerequisites:
            graph[b].append(a)
            indegree[a] += 1

        q = deque([])

        for i in range(numCourses):
            if indegree[i] == 0:
                q.append(i)

        nodesVisited = 0

        while q:
            node = q.popleft()
            nodesVisited += 1
            for neighbor in graph[node]:
                indegree[neighbor] -= 1
                if (indegree[neighbor] == 0):
                    q.append(neighbor)

        return nodesVisited == numCourses
