const longestCycle = (edges) => {
  const n = edges.length;
  const visited = Array(n).fill(false);
  const stack = [];
  const cycle = [];

  const dfs = (i) => {
    if (visited[i]) {
      return;
    }
    visited[i] = true;
    stack.push(i);
    const j = edges[i];
    if (j !== -1) {
      if (visited[j]) {
        const k = stack.indexOf(j);
        if (k !== -1) {
          cycle.push(stack.slice(k));
        }
      } else {
        dfs(j);
      }
    }
    stack.pop();
  };
  for (let i = 0; i < n; i++) {
    dfs(i);
  }
  return cycle.length ? Math.max(...cycle.map((c) => c.length)) : -1;
};
