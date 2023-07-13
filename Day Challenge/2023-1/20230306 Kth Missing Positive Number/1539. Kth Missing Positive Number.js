const findKthPositive = (arr, k) => {
  let missing = 0;
  for (let i = 1; i <= arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      missing++;
      if (missing === k) {
        return i;
      }
    }
  }
  return arr[arr.length - 1] + k - missing;
};
