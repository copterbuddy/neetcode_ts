export default function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_SAFE_INTEGER
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i]
        }else{
            maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        }
    }

    return maxProfit
};