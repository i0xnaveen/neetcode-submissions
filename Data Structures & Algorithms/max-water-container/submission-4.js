class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let ans = 1;
        let j = n - 1;
        let i = 0;
        while (i < j) {
            let height = Math.min(heights[i], heights[j]);
            if (n == 2 && height == 0) {
                return 0;
            }
            let width = j - i;
            ans = Math.max(ans, height * width);
            if (heights[i] > heights[j]) {
                j--;
            } else {
                i++;
            }
        }
        return ans;
    }
}
