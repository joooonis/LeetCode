/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
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

  return results;
};
