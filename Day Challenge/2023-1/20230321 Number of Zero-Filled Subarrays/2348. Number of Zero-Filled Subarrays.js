const zeroFilledSubarray = (nums) => {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let zeroCount = 1;
      while (i + 1 < nums.length && nums[i + 1] === 0) {
        zeroCount++;
        i++;
      }
      answer += (zeroCount * (zeroCount + 1)) / 2;
    }
  }
  return answer;
};
