/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
  const len = dist.length;
  if (hour < len - 1) return -1;

  let left = 1;
  let right = 10 ** 7;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    let sum = 0;
    for (let i = 0; i < len - 1; i++) sum += Math.ceil(dist[i] / mid);
    sum += dist[len - 1] / mid;
    if (sum <= hour) right = mid;
    else left = mid + 1;
  }

  return left;
};
