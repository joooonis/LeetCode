var findKthLargest = function (nums, k) {
  arr = [];
  for (let n of nums) {
    if (!arr) arr.push(Number(n));
    let left = 0;
    let right = arr.length;
    while (left < right) {
      mid = Math.floor((left + right) / 2);
      if (arr[mid] > Number(n)) {
        left = mid + 1;
      } else right = mid;
    }
    arr.splice(left, 0, n);
  }
  return arr[k - 1];
};
