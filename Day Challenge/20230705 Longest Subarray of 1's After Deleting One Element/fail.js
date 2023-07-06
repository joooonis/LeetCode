/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let start = 0;
  while (nums[start] === 0) {
    start += 1;
  }
  let numsArr = nums.slice(start);
  let ans = -1;
  let zeros = [];
  let ones = [0];

  if (numsArr.length === 0) return 0;

  for (let i = 1; i < numsArr.length; i++) {
    if (numsArr[i] === 1) {
      ones[1] = i;
    } else {
      if (zeros.length === 1) {
        if (ones.length === 2) ans = Math.max(ans, ones[1] - ones[0]);
        if (zeros[0] === i - 1) {
          if (ones.length === 1) {
            ans = Math.max(ans, 1);
            console.log(ans);
          } else ans = Math.max(ans, ones[1] - ones[0] + 1);
          while (numsArr[i] === 0) i++;
          ones = [i];
          zeros = [];
        } else {
          ones[0] = zeros[0] + 1;
          zeros[0] = i;
        }
      } else zeros.push(i);
    }
  }
  if (zeros.length === 1 && ones.length === 2)
    ans = Math.max(ans, ones[1] - ones[0]);
  if (ones.length === 0) return 0;
  console.log(ones, zeros, numsArr, ans);
  if (nums.indexOf(0) < 0) return ans === -1 ? nums.length - 1 : ans;
  return ans === -1 ? numsArr.length - 1 : ans;
};
