from collections import defaultdict

class Solution(object):
    def findDuplicate(self, paths):
        """
        :type paths: List[str]
        :rtype: List[List[str]]
        """
        filewithPaths = defaultdict(list) # 그냥 dictionary보다 빠름
        for path in paths:
            lst = list(path.split())
            root = lst[0]
            for i in range(1,len(lst)):
                x = lst[i]
                idx = x.index('(')
                p = x[:idx]
                q = x[idx+1:-1]
                filewithPaths[q].append(root + '/' + p)
        
        answer = []
        
        for value in filewithPaths.values():
            if len(value) > 1:
                answer.append(list(value))
        
        return [filewithPaths[i] for i in filewithPaths if len(filewithPaths[i])>1]
    
    

