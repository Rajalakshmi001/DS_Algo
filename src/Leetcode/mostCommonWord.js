var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph
    .toLowerCase()
    .match(/[a-z]+/gi)
    .join(" ");
  let max = 0;
  paragraph = paragraph.match(/[a-z]+/gi);
  paragraph = paragraph.reduce((acc, word) => {
    if (!banned.includes(word)) {
      if (!acc.has(word)) {
        acc.set(word, 1);
        if (max < 1) max = 1;
      } else {
        acc.set(word, acc.get(word) + 1);
        if (max < acc.get(word)) max = acc.get(word);
      }
    }
    return acc;
  }, new Map());
  for (let [key, value] of paragraph.entries()) {
    if (value === max) return key;
  }
};

console.log(mostCommonWord("abc abc? abcd the jeff!", ["abc", "abcd", "jeff"]));
