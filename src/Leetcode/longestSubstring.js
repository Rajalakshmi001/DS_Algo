var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length;
  let charMap = new Map(),
    max = 1,
    anchor = 0,
    travel;
  while (anchor <= s.length - 1) {
    if (!charMap.has(s[anchor])) charMap.set(s[anchor], 1);
    travel = anchor + 1;
    while (!charMap.has(s[travel]) && travel <= s.length - 1) {
      charMap.set(s[travel], 1);
      travel++;
    }
    const keyslength = [...charMap.keys()].length;
    if (max < keyslength) max = keyslength;
    charMap = new Map();
    anchor++;
  }
  return Math.max(max, [...charMap.keys()].length);
};

console.log(lengthOfLongestSubstring("abca"));
