# 문제

[1539. Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/submissions/910016434/)

# 코드

````javascript
const findKthPositive = (arr, k) => {
    let missing = 0;
    for (let i = 1; i <= arr[arr.length - 1]; i++) {
        if (!arr.includes(i)) {
            missing++;
            if (missing === k) {
                return i;
            }
        }
    }
    return arr[arr.length - 1] + k - missing;
};
```

# 결과

Accepted
Runtime : 53.9%
Memory: 75%
````
