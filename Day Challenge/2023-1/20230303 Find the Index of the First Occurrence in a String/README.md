# 문제

[28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)

# 코드

```javascript
const strStr = (haystack, needle) => {
  if (needle === '' || haystack === '') return -1;
  if (haystack.length < needle.length) return -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (needle.length === 1) return i;
      let j = 1;
      while (haystack[i + j] === needle[j]) {
        j++;
        if (j === needle.length) return i;
      }
    }
  }
  return -1;
};
```

# 결과

Accepted
Runtime : 84.25%
Memory: 65.43%
