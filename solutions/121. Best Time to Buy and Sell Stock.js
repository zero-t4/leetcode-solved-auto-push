/**
 * @param {number[]} prices
 * @return {number}
 */
const data = [12, 45, 34, 55, 666, 34, 555, 0, 2];
​
const maxProfit = (prices) => {
  if (
    !Array.isArray(prices)
    || !prices.length
  ) {
    return 0;
  }
​
  let diff = 0;
  let min = prices[0];
​
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
​
    if (currentPrice < min) {
      min = currentPrice;
    }
​
    const foundDiff = currentPrice - min;
    if (foundDiff > diff) {
      diff = foundDiff;
    }
  }
​
  return diff;
};
​
// Test cases
// console.log(maxProfit());
// console.log(maxProfit([]));
// console.log(maxProfit([555]));
console.log(maxProfit(data));
