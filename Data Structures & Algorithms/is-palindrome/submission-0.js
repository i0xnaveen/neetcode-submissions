class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
let str =s.replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();       console.log("The strsss", str)
       let last = str.length - 1
       let first = 0
       while(first<last){
        if(str[first]!==str[last]){
            return false
        }
        first ++
        last --
       }
       return true
    }
}
