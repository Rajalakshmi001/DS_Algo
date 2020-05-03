function kSubStringKDistChars(str, k) {
  let anchor = 0,
    travel = 0,
    charMap = new Map(),
    substringArr = [];
  loop1: while (anchor <= str.length - k) {
    if (!charMap.has(str[anchor])) {
      charMap.set(str[anchor], 1);
    }
    travel = anchor + 1;
    loop2: while (travel < str.length && [...charMap.keys()].length < k) {
      if (!charMap.has(str[travel])) {
        charMap.set(str[travel], 1);
      } else {
        charMap = new Map();
        break loop2;
      }
      travel++;
    }
    if ([...charMap.keys()].length === k) {
      const elem = [...charMap.keys()].join().replace(/,/g, "");
      if (!substringArr.includes(elem))
        substringArr.push([...charMap.keys()].join().replace(/,/g, ""));
      charMap = new Map();
    }
    anchor++;
  }
  return substringArr;
}

console.log(kSubStringKDistChars("awaglknagawunagwkwagl", 4));
