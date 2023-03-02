# 문제

[443. String Compression](https://leetcode.com/problems/string-compression/description/)

# 코드

```javascript
const compress = (chars) => {
  let len = 0;
  let i = 0;
  while (i < chars.length) {
    let j = i + 1;
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }
    chars[len++] = chars[i];
    if (j - i > 1) {
      const count = (j - i).toString();
      for (let k = 0; k < count.length; k++) {
        chars[len++] = count[k];
      }
    }
    i = j;
  }
  return len;
};
```

# 결과

Accepted
Runtime : 74.5%%
Memory: 50.52%
