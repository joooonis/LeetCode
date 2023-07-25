var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) left = mid + 1;
    else right = mid;
  }

  return left;
};

var peakIndexInMountainArray = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) return i + 1;
  }
};
