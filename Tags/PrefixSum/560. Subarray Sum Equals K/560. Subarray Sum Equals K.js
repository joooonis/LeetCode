function subarraySum(nums, k) {
  const map = new Map([[0, 1]]);
  let sum = 0;
  let count = 0;
  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

function subarraySum(nums, k) {
  const prefixSum = [0];
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (prefixSum[j] - prefixSum[i] === k) {
        count++;
      }
    }
  }
  return count;
}
