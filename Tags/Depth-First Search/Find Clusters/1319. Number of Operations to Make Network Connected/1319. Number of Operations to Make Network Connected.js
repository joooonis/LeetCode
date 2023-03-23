const makeConnected = (n, connections) => {
  if (connections.length < n - 1) return -1;

  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < connections.length; i++) {
    graph[connections[i][0]] = [...graph[connections[i][0]], connections[i][1]];
    graph[connections[i][1]] = [...graph[connections[i][1]], connections[i][0]];
  }

  const visited = Array(n).fill(false);
  let clusters = 0;

  function dfs(node) {
    visited[node] = true;
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  for (let node = 0; node < n; node++) {
    if (!visited[node]) {
      dfs(node);
      clusters++;
    }
  }
  return clusters - 1;
};
