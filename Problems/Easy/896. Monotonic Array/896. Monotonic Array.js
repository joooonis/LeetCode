/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isIncrease = true;
  let isDecrease = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      isDecrease = false;
    }
    if (nums[i] > nums[i + 1]) {
      isIncrease = false;
    }
  }
  return isIncrease || isDecrease;
};

var isMonotonic = function (nums) {
  if (nums.length == 1) return true;
  let increasing;
  let i = 0;
  while (nums[i] == nums[i + 1]) {
    i += 1;
  }
  increasing = nums[i] <= nums[i + 1];

  if (increasing) {
    let i = 0;
    while (i < nums.length - 1) {
      if (nums[i] > nums[i + 1]) return false;
      i += 1;
    }
    return true;
  } else {
    let i = 0;
    while (i < nums.length - 1) {
      if (nums[i] < nums[i + 1]) return false;
      i += 1;
    }
    return true;
  }
};
