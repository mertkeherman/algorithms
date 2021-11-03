prices = [7,1,5,3,6,4];

const maxProfit = (prices) => {
    let profit = 0;
    let lowestPrice = prices[0];

    for (currentPrice of prices) {

        //finding lowest price 
        if (currentPrice < lowestPrice) lowestPrice = currentPrice;

        //calculate current profit
        let currentProfit = currentPrice - lowestPrice;

        //checking for new maximum profit
        if (profit < currentProfit) profit = currentProfit;
    }

    return profit;
}

console.log(maxProfit(prices));