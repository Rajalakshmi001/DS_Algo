function validParanthesis(str) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  let stack = [];
  for (let par of str) {
    if (map[par]) stack.push(map[par]);
    else {
      if (par !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
}

console.log(validParanthesis("((]))"));
