class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length
        let ans = 0
        let min = prices[0]
        let profit = 0
        for(let i =0 ; i< n; i++){
            min = Math.min(min, prices[i])
            profit = Math.max(profit, prices[i] - min)

        }
        return profit
    }
}
