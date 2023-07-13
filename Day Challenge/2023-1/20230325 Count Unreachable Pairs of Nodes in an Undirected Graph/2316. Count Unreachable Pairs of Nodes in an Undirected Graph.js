const countPairs  = (n, edges) => {
  const graph = new Array(n).fill().map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(n).fill(false);
  const sizes = [];
  const dfs = (node) => {
    visited[node] = true;
    let size = 1;
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        size += dfs(neighbor);
      }
    }
    return size;
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      sizes.push(dfs(i));
    }
  }

  const totalPairs = n * (n - 1) / 2;
  const reachablePairs = sizes.reduce((acc, size) => acc + size * (size - 1) / 2, 0);
  return totalPairs - reachablePairs;
};