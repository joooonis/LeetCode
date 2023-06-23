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
