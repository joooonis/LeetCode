/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]);
    if (count === undefined) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], count + 1);
    }
  }
  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
};

var singleNumber = function (nums) {
  let hash = {};
  for (const n of nums) {
    hash[n] = (hash[n] || 0) + 1;
    if (hash[n] === 3) delete hash[n];
  }
  return Object.keys(hash)[0];
};
