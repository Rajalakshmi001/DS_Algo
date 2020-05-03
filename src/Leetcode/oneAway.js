import { stringToMap } from "./palindromePerm";

function oneAway(firstString, secondString) {
  return isReplaceable(firstString, secondString);
}

function isReplaceable(string1, string2) {
  string1 = stringToMap(string1);
  string2 = stringToMap(string2);
  let count = 0;
  for (let key of Object.keys(string1)) {
    if (string1[key] !== string2[key]) {
      count++;
    }
  }
  return count > 1 ? false : true;
}

console.log(oneAway("pale", "paod"));
console.log(oneAway("pale", "bake"));
