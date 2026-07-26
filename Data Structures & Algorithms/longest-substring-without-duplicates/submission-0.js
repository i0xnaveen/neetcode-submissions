class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        const map = new Map()
        let ans = 0
        for(let right = 0; right<s.length; right++){
            if(map.has(s[right])){
                left = Math.max(left, map.get(s[right])+1)
            }
            map.set(s[right], right)
            ans = Math.max(ans, right-left+1)

        }
        return ans
    }
}
