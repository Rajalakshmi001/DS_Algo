var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length === 0 || needle.length > haystack.length) return -1;
  let counter = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] === needle[j]) counter++;
        if (counter === needle.length) return i;
      }
    }
  }
  return -1;
};

console.log(strStr("mississippi", "mississippi"));

var addBinary = function(a, b) {
  let first = a.padStart(b.length, "0");
  let second = b.padStart(a.length, "0");
  let carry = 0,
    result = "";
  for (let i = first.length - 1; i >= 0; i--) {
    let charResult = parseInt(first[i]) + parseInt(second[i]);
    if (charResult === 2) {
      charResult = 10;
    }
    charResult = carry + charResult;

    if (charResult === 0) {
      charResult = "0";
      carry = 0;
    } else if (charResult === 1) {
      charResult = "1";
      carry = 0;
    } else if (charResult === 10) {
      charResult = "0";
      carry = 1;
    } else {
      charResult = "1";
      carry = 1;
    }

    result = charResult + result;
  }
  if (carry) result = carry + result;
  return result;
};

console.log(addBinary("11", "1"));
