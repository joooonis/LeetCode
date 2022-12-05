# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteMiddle(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        n = 0
        x = head
        
        # singly-linked list's length
        while x.next:
            n += 1
            x = x.next
        
        # mid node's index
        if n == 0:
            return None
        
        if n % 2 == 0:
            mid = n // 2 - 1 
        else:
            mid = n // 2
        
        # go to the node before the mid node and remove mid node
        y = head
        
        for _ in range(mid):
            y = y.next
        
        y.next = y.next.next
        
        return head