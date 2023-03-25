const findDuplicate1 = (nums) => {
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  fast = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

const findDuplicate2 = (nums) => {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return nums[i];
    } else {
      hash[nums[i]] = nums[i];
    }
  }
};
