function isPermutation(givenString, targetString) {
  if (givenString.length !== targetString.length) return false;
  let givenStringMap = stringToMap(givenString);
  let targetStringMap = stringToMap(targetString);
  if (givenStringMap.length !== targetStringMap.length) return false;
  for (let key of Object.keys(givenStringMap)) {
    if (givenStringMap[key] !== targetStringMap[key]) {
      return false;
    }
  }
  return true;
}

function stringToMap(stringtobeMapped) {
  let result = {};
  for (let str of stringtobeMapped) {
    result[str] = result[str] ? result[str] + 1 : 1;
  }
  return result;
}

console.log(isPermutation("aanb", "naab"));

function mutation(arr) {
  if (arr[0] === arr[1] || arr[1] === "") return true;
  if (arr[1].length > arr[0].length) return false;
  let firstTerm = arr[0].toLowerCase().split("");
  let secondTerm = arr[1].toLowerCase().split("");
  for (let i = 0; i < secondTerm.length; i++) {
    console.log(firstTerm, secondTerm);
    if (firstTerm.indexOf(secondTerm[i]) === -1) return false;
  }
  return true;
}

mutation(["Mary", "Aarmy"]);
