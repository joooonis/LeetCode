const minScore = (n, roads) => {
  const graph = new Map();
  const visitedRoad = new Set();

  for (let i = 0; i < n; i++) {
    graph.set(i + 1, []);
  }
  for (const road of roads) {
    graph.get(road[0]).push([road[1], road[2]]);
    graph.get(road[1]).push([road[0], road[2]]);
  }

  let score = Infinity;

  function dfs(node) {
    for (const [neighbor, weight] of graph.get(node)) {
      if (visitedRoad.has(`${node}-${neighbor}`)) continue;
      visitedRoad.add(`${node}-${neighbor}`);
      visitedRoad.add(`${neighbor}-${node}`);
      score = Math.min(score, weight);
      dfs(neighbor);
    }
  }

  dfs(1);

  return score;
};
