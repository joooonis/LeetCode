# 문제

[16859. Buddy Strings](https://leetcode.com/problems/buddy-strings/description/)

# 코드

```javascript
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  if (s === goal) {
    let set = new Set(s);
    return set.size < s.length;
  }
  let diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }
  }
  if (diff.length !== 2) return false;
  return s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
};

var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  // 두 문자열이 같은 경우
  if (s === goal) {
    let hash = {};
    for (let i = 0; i < s.length; i++) {
      if (hash[s[i]]) return true;
      else hash[s[i]] = 1;
    }
    return false;
  }

  // 두 문자열이 다른 경우
  let [firstIndex, secondIndex] = [-1, -1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (firstIndex === -1) firstIndex = i;
      else if (secondIndex === -1) secondIndex = i;
      else return false;
    }
  }
  return (
    s[firstIndex] === goal[secondIndex] && s[secondIndex] === goal[firstIndex]
  );
};
```

# 풀이

딱 한 번의 swap을 통해 주어진 두개의 문자열을 서로 같게 만들 수 있는지 물어보는 문제입니다.

1. 만약 두 문자열의 길이가 다르다면 두 문자열을 같아질 수 없으므로 false를 return합니다.

2. 문자열이 서로 같은 경우

- 한 번 이상 중복되는 문자가 있다면 그 두 문자를 서로 바꾸어서 자기 자신과 같아질 수 있습니다.
- 모든 인덱스의 문자가 서로 다르다면 두 문자열은 서로 같아질 수 없습니다.

3. 문자열이 서로 다른 경우

- 한 번의 swap을 통해 두 문자열이 같아지기 위해서 인덱스 중 값이 서로 다른 인덱스는 정확히 두 개 이어야 하고, 이 두 인덱스의 값은 서로 다른 인덱스의 값과 동일해야 합니다.
