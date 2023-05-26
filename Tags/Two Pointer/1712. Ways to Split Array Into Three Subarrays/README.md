# 문제

[1712. Ways to Split Array Into Three Subarrays](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/description/)

# 풀이

1. 누적합을 사용하여 O(N*3) -> O(N*2) 으로 시간복잡도를 줄입니다.

- 누적합을 사용하면 배열의 부분합을 O(1) 시간으로 계산할수 있습니다.
- 1차원 누적합 배열 길이는 원래 배열길이와 똑같으며, 맨 처음 원소는 원래 배열의 처음 원소로 초기화 하고 그 다음 원소부터 누적합으로 계산합니다.
- 수열에서 부분합을 생각하면 이해하기 쉽습니다.
  ex. a11 + a12 + ... + a20 = S20 - S10

```python
def partial_sum(numbers, start, end):
    cumulative_sum = [0]  # 누적합을 저장할 리스트. 초기값은 0으로 설정합니다.

    # 주어진 숫자들의 누적합을 계산하여 cumulative_sum 리스트에 저장합니다.
    for i in range(len(numbers)):
        cumulative_sum.append(cumulative_sum[i] + numbers[i])

    # 구간의 부분합을 계산합니다.
    return cumulative_sum[end] - cumulative_sum[start - 1]

# 예시로 사용할 숫자 리스트
numbers = [1, 2, 3, 4, 5]

# 2번 인덱스부터 4번 인덱스까지의 부분합을 계산합니다.
start_index = 2
end_index = 4
result = partial_sum(numbers, start_index, end_index)
print(result)
```

2. r_min, r_max 두개의 포인터를 사용합니다.

- 배열의 첫 인덱스부터 len(arr) - 2 까지 순회합니다.
- 각 순회지점을 mid의 시작지점으로 하여 각 루프마다 가능한 mid의 범위를 구합니다.
- 이때 최초로 가능한 mid의 끝 지점을 r_min, 가장 마지막 지점을 r_max로 잡습니다.

```python
class Solution(object):
    def waysToSplit(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # 누적합 계산
        prefixSum = [nums[0]]

        for i in range(1, len(nums)):
            prefixSum.append(prefixSum[i-1] + nums[i])

        ans, r_min, r_max = 0, 0, 0


        for l in range(len(nums)-2):
            if r_min <= l:
                r_min += 1
            # 가장 처음 mid로 가능한 범위 찾기 l+1 ~ r_min
            while r_min < len(nums)-1 and prefixSum[l] > prefixSum[r_min] - prefixSum[l]:
                r_min += 1
            if r_max < r_min:
                r_max = r_min
            # 가장 마지막으로 mid로 가능한 범위 찾기 l+1 ~ r_max - 1
            while r_max < len(nums)-1 and prefixSum[r_max] - prefixSum[l] <= prefixSum[len(nums)-1] - prefixSum[r_max]:
                r_max += 1
            # 가능한 mid의 개수는 r_max - r_min
            ans = (ans + r_max - r_min) % 1000000007
        return ans

```

# 결과

Accepted
Runtime : 70.83%
Memory: 66.67%
