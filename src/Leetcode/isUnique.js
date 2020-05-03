function isUnique(passedString) {
  const arr = passedString.split("");
  return arr.reduce((acc, currentValue, index, stringTobeChecked) => {
    for (let i = index + 1; i < arr.length; i++) {
      if (currentValue === arr[i]) {
        return false;
      }
    }
    return acc;
  }, true);
}

console.log(isUnique("rajii"));
