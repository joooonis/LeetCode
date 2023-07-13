var canFinish = function (numCourses, prerequisites) {
  let adj = {};
  let indegree = Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    adj[i] = [];
  }

  for (const [a, b] of prerequisites) {
    adj[b].push(a);
    indegree[a]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let nodesVisited = 0;
  while (queue.length) {
    node = queue.shift();
    nodesVisited++;

    for (let neighbor of adj[node]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return nodesVisited === numCourses;
};
