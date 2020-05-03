var isPalindrome = function(s) {
  if (s === "") return true;
  let regex = /\w+/gi;
  let matches = s.match(regex);
  if (matches.length) {
    matches = matches
      .join("")
      .toLowerCase()
      .split("");
  } else return false;
  console.log(matches);
  let start = 0,
    end = matches.length - 1;
  while (start <= end) {
    if (matches[start] !== matches[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
