var findTheDifference = function (s, t) {
  for (let n of t) {
    idx = s.indexOf(n);
    if (idx < 0) return n;
    else s = s.slice(0, idx) + s.slice(idx + 1);
  }
};
