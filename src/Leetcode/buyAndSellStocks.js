var maxProfit = function(prices) {
  const profits = [0];
  for (let i = 1; i < prices.length; i++) {
    profits.push(
      Math.max(profits[i - 1], profits[i - 1] + prices[i] - prices[i - 1])
    );
  }
  return profits[profits.length - 1];
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

var getHint = function(secret, guess) {
  let bull = 0;
  let cow = 0;
  const map = {};
  for (let i = 0; i < secret.length; i++) {
    const s = secret.charAt(i);
    const g = guess.charAt(i);
    if (s === g) {
      bull++;
    } else {
      console.log(map[s] < 0, map[g]);
      if (map[s] < 0) cow++;
      if (map[g] > 0) cow++;
      map[s] = parseInt(map[s] || "0", 10) + 1;
      map[g] = parseInt(map[g] || "0", 10) - 1;
    }
  }
  return `${bull}A${cow}B`;
};

console.log(getHint("1123", "0111"));
