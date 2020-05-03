function urlify(givenString, length) {
  return givenString
    .trim()
    .split(" ")
    .join("%20");
}

console.log(urlify("Mr John Smith  ", 13));
