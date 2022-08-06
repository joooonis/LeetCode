class Solution(object):
    import math 
    def poorPigs(self, buckets, minutesToDie, minutesToTest):
        """
        :type buckets: int
        :type minutesToDie: int
        :type minutesToTest: int
        :rtype: int
        """
        n = minutesToTest//minutesToDie + 1
        return int(math.ceil(math.log(buckets, n)))