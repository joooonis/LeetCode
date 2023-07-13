/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

const shipWithinDays = function (weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((acc, cur) => acc + cur, 0);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let day = 1;
    let sum = 0;
    weights.forEach((weight) => {
      if (sum + weight > mid) {
        day++;
        sum = 0;
      }
      sum += weight;
    });
    if (day > days) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
