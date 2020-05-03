var generate = function(numRows) {
  let output = [];
  if (numRows === 0) return output;
  output[0] = [1];
  if (numRows === 1) return output;
  output[1] = [1, 1];
  if (numRows === 2) return output;
  for (let i = 2; i < numRows; i++) {
    output[i] = [];
    output[i][0] = 1;
    output[i][i] = 1;
    for (let j = 1; j <= i - 1; j++) {
      output[i][j] = output[i - 1][j - 1] + output[i - 1][j];
    }
  }
  return output;
};

console.log(generate(6));

var maxProfit = function(prices) {
  if (!prices.length) return 0;
  let max = 0,
    maxIndex;
  for (let i = 0; i < prices.length - 1; i++) {
    maxIndex = prices.indexOf(Math.max(...prices.slice(i + 1)));
    if (max < prices[maxIndex] - prices[i]) max = prices[maxIndex] - prices[i];
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

var topKFrequent = function(nums, k) {
  const map = nums.reduce((map, num) => {
    const occurence = map.get(num) || 0;
    map.set(num, occurence + 1);
    return map;
  }, new Map());
  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0])
    .slice(0, k);
};
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));

var topKFrequentWords = function(reviews, keywords, k) {
  let wordMap = {};
  reviews.forEach(review => {
    keywords.forEach(keyword => {
      let regex = new RegExp(keyword, "g");
      let matches = review.match(regex);
      if (matches) {
        if (!wordMap[keyword]) wordMap[keyword] = matches.length;
        else wordMap[keyword] += matches.length;
      }
    });
  });
  console.log(wordMap);
  return [...Object.keys(wordMap)]
    .sort((a, b) => {
      if (wordMap[a] === wordMap[b]) return a < b ? -1 : 1;
      else return wordMap[b] - wordMap[a];
    })
    .slice(0, k);
};
let k = 2,
  keywords = [
    "anacell",
    "betacellular",
    "cetracular",
    "deltacellular",
    "eurocell"
  ],
  reviews = [
    "I love anacell Best services; Best services provided by anacell",
    "betacellular has great services",
    "deltacellular provides much better services than betacellular",
    "cetracular is worse than anacell",
    "Betacellular is better than deltacellular."
  ];
console.log(topKFrequentWords(reviews, keywords, k));
