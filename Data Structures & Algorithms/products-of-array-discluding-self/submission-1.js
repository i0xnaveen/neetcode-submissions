class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const ans = new Array(nums.length).fill(1);
        for (let i = 0; i < nums.length; i++) {
            const left = this.left(nums, i);
            const right = this.right(nums, i);
            const product = left * right;
            ans[i] = product;
        }
        return ans;
    }

    left(nums, i) {
        let product = 1;
        for (let j = i - 1; j >= 0; j--) {
            product *= nums[j];
        }
        return product;
    }
    right(nums, i) {
        let product = 1;
        for (let k = i + 1; k < nums.length; k++) {
            product *= nums[k];
        }
        return product;
    }
}
