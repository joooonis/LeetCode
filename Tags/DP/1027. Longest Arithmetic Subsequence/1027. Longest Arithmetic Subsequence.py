class Solution(object):
    def longestArithSeqLength(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        diffSet = set()
        answer = 0
        logestLst = []
        for i in range(len(nums)):
            curr = nums[i]
            for j in range(i+1, len(nums)):
                next = nums[j]
                diff = next - curr
                if diff in diffSet:
                    continue
                else:
                    diffSet.add(diff)
                pt1, pt2 = j, j+1
                steps = 2
                lst = [nums[i], nums[j]]
                while pt2 < len(nums):
                    if nums[pt2] - nums[pt1] == diff:
                        steps += 1
                        lst.append(nums[pt2])
                        pt1 = pt2
                        pt2 += 1
                    else:
                        pt2 += 1
                if len(lst) > len(logestLst):
                    logestLst = list(lst)
                answer = max(steps, answer)

        return answer


class Solution(object):
    def longestArithSeqLength(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        dp = [dict() for _ in range(len(nums))]
        ans = 0
        for i in range(len(nums)):
            for j in range(0, i):
                # 등차를 계산
                diff = nums[i] - nums[j]
                # 직전에 해당 등차를 가진 수열이 있다면 그 값을 가지고 갱신
                if diff in dp[j]:
                    dp[i][diff] = dp[j][diff] + 1
                else:
                    dp[i][diff] = 2
                ans = max(ans, dp[i][diff])
        return ans
