// && This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.
// The best function will be given an array of stock prices in the order they happened throughout the day.
// It should return the maximum possible profit on the stock for that day.
// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

function best (prices) {
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let priceDiff = prices[j] - prices[i]
            if (priceDiff > maxProfit) {
                maxProfit = priceDiff
            }
        }
    }
    return maxProfit
}

// Version where it returns a string with buying point and selling point

// function best (prices) {
//     let maxProfit = 0

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             let priceDiff = prices[j] - prices[i]
//             if (priceDiff > maxProfit) {
//                 maxProfit = priceDiff
//                 buyingPoint = prices[i]
//                 sellingPoint = prices[j]
//             }
//         }
//     }

//     return `Our best option would have been to buy the stock at $${buyingPoint} and sell it at $${sellingPoint}. So the profit would be $${maxProfit}`
// }

console.log(best([15, 10, 20, 22, 1, 9]))
// 12
console.log(best([5, 4 , 3, 2, 1]))