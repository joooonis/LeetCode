function minReorder(n, connections) {
  const adjList = new Array(n).fill(null).map(() => []);
  for (let [a, b] of connections) {
    adjList[a].push([b, 1]);
    adjList[b].push([a, 0]);
  }

  const visited = new Set();
  let cnt = 0;

  const dfs = (node) => {
    visited.add(node);
    for (let [neighbor, direction] of adjList[node]) {
      if (!visited.has(neighbor)) {
        cnt += direction;
        dfs(neighbor);
      }
    }
  };

  dfs(0);
  return cnt;
}
