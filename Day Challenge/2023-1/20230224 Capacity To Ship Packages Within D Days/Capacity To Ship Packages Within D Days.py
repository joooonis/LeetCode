class Solution(object):
    def shipWithinDays(self, weights, days):
        left = max(weights)
        right = sum(weights)

        while left < right:
            mid = (left + right) // 2
            day = 1
            total_weight = 0

            for weight in weights:
                if total_weight + weight > mid:
                    day += 1
                    total_weight = 0
                total_weight += weight

            if day > days:
                left = mid + 1
            else:
                right = mid

        return left
