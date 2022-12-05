# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        nodes = []
        nodes.append(head)
        n = 1
        while head.next:
            head = head.next
            nodes.append(head)
            n += 1
        return nodes[n//2]
