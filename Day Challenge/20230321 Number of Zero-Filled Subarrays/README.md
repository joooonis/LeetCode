# 문제

[208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/submissions/916771968/)

# 코드

```javascript
class Trie {
  constructor() {
    this.data = [];
  }
}

Trie.prototype.insert = function (word) {
  this.data.push(word);
};

Trie.prototype.search = function (word) {
  return this.data.includes(word);
};

Trie.prototype.startsWith = function (prefix) {
  for (let i = 0; i < this.data.length; i++) {
    if (this.data[i].indexOf(prefix) === 0) return true;
  }
  return false;
};
```

# 풀이

클래스 문법을 사용하여 기본 매서드들을 구현해주는 문제입니다.

# 결과

Accepted
Runtime : 5.67%
Memory: 99.10%
