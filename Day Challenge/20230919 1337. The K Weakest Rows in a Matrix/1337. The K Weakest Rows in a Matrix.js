var kWeakestRows = function (mat, k) {
  arr = Array.from({ length: mat.length }, (_, index) => index);
  return arr
    .sort(
      (i, j) => mat[i].reduce((a, c) => a + c) - mat[j].reduce((a, c) => a + c)
    )
    .slice(0, k);
};
