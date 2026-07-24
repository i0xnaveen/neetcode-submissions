class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length
        let ans = 1
        
        for(let i =0 ; i<n;i++){
            for(let j=i+1; j< n; j++){
                let height = Math.min(heights[i], heights[j])
                if(n==2 && height == 0){
                    return 0

                }
                let width = j-i
                ans = Math.max(ans, height*width)
            }
        }
       return ans 
    }
}
