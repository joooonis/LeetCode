var findNthDigit = function (n) {
  let len = 1;
  let count = 9;
  let start = 1;
  while (n > len * count) {
    n -= len * count;
    len++;
    count *= 10;
    start *= 10;
  }
  start += Math.floor((n - 1) / len);
  let s = start.toString();
  return parseInt(s[(n - 1) % len]);
};

var findNthDigit = function (n) {
  let left = 1;
  let right = n;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let len = digitLen(mid);
    if (len > left) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return Array.from({ length: left }, (_, i) => i + 1).join('')[n - 1];
};

const digitLen = (num) => {
  n = String(num).length;
  digit = 0;
  for (let i = 0; i < n - 1; i++) {
    digit += 9 * 10 ** i * (i + 1);
  }
  digit += (num - 10 ** (n - 1) + 1) * n;
  return digit;
};
