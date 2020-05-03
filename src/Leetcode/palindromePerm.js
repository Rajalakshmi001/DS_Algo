function ispalindromePerm(givenString) {
  givenString = givenString
    .split(" ")
    .join("")
    .toLowerCase();
  let givenStringMap = stringToMap(givenString);
  let count = 0;
  for (let pair of Object.keys(givenStringMap)) {
    if (givenString.length % 2 === 0 && givenStringMap[pair] % 2 === 0) {
      return true;
    } else if (givenString.length % 2 !== 0 && givenStringMap[pair] % 2 !== 0) {
      count++;
      return count > 1 ? false : true;
    } else {
      return false;
    }
  }
}

export function stringToMap(stringtobeMapped) {
  let result = {};
  for (let str of stringtobeMapped) {
    result[str] = result[str] ? result[str] + 1 : 1;
  }
  return result;
}

exports.ispalindromePerm = ispalindromePerm;
console.log(ispalindromePerm("Tact boa"));
