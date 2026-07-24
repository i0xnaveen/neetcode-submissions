class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let ans = [];
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            let target = -nums[i];
            let j = i + 1;
            let k = nums.length - 1;
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            while (j < k) {
                if (nums[j] + nums[k] > target) {
                    k--;
                } else if (nums[j] + nums[k] < target) {
                    j++;
                } else {
                    ans.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while (j < k && nums[j] == nums[j - 1]) {
                        j++;
                    }
                    while (j < k && nums[k] == nums[k + 1]) {
                        k--;
                    }
                }
            }
        }
        return ans;
    }
}
