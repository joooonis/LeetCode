# 문제

[863. All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/)

# 코드

```python
class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        graph = collections.defaultdict(list)

        # Recursively build the undirected graph from the given binary tree.
        def build_graph(cur, parent):
            if cur and parent:
                graph[cur.val].append(parent.val)
                graph[parent.val].append(cur.val)
            if cur.left:
                build_graph(cur.left, cur)
            if cur.right:
                build_graph(cur.right, cur)
        build_graph(root, None)

        answer = []
        visited = set([target.val])

        def dfs(cur, distance):
            if distance == k:
                answer.append(cur)
                return
            for neighbor in graph[cur]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    dfs(neighbor, distance + 1)
        dfs(target.val, 0)

        return answer

```

# 풀이

트리는 단방향이므로 child -> parent로 탐색이 불가능 합니다. 따라서 트리를 그래프로 바꿔준 다음에 dfs를 통해 그래프를 탐색하며 거리가 k가 되는 노드들을 전부 찾습니다.
