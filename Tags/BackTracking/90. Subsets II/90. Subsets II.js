/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const results = [];
  nums.sort((a, b) => a - b);

  const dfs = (start, path) => {
    results.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  };

  dfs(0, []);

  return results;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const results = [];

  const dfs = (start, path) => {
    results.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  };

  dfs(0, []);

  let hash = {};
  let answers = [];
  for (let i = 0; i < results.length; i++) {
    key = results[i].sort().join('');
    if (!hash[key]) {
      hash[key] = true;
      answers.push(results[i]);
    }
  }

  return answers;
};
