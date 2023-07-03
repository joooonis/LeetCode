/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

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
