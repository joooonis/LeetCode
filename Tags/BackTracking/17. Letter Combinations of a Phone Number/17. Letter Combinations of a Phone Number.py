class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if digits == "": 
            return []
        map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
        }
        results = []
        def dfs(c,s):
            if len(s) == len(digits):
                results.append(''.join(s))
                return
            for i in range(c, len(digits)):
                key = int(digits[i])
                for v in map[key]:
                    s.append(v)
                    dfs(i+1,s)
                    s.pop() 

        dfs(0,[])
        return results