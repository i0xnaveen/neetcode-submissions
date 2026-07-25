class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length
        let ans = 0
        for(let i =0 ; i< n; i++){
            let first = prices[i]
            for(let j= i+1; j<n; j++){
                let second = prices[j]
                if(second > first ){
                    ans = Math.max(ans, second - first)
                }
            }
        }
        return ans
    }
}
