class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let leftMax = 0;
        let ans = 0;
        for (let i = 0; i < n; i++) {
            let leftMax = 0 
            let rightMax = 0;
            for(let j = 0; j<=i;j++){
            leftMax = Math.max(height[j], leftMax);
            }
            for (let j = i; j < n; j++) {
                rightMax = Math.max(height[j], rightMax);
            }
            ans = ans + Math.min(leftMax, rightMax) - height[i];
        }
        return ans;
    }
}
