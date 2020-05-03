function stringCompression(givenString) {
  if (givenString.length === 0) return;
  let output = "";
  let countNew = 0;
  for (let i = 0; i < givenString.length; i++) {
    countNew++;
    if (givenString[i] !== givenString[i + 1]) {
      output += givenString[i] + countNew;
      countNew = 0;
    }
  }
  return output.length > givenString.length ? givenString : output;
}
console.log(stringCompression("aaaaa"));
