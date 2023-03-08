const minEatingSpeed = (piles, h) => {
  let left = 1;
  let right = piles.reduce((acc, val) => acc + val);
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let hours = piles.reduce((a, b) => a + Math.ceil(b / mid), 0);
    if (hours > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
