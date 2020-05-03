function sortStack(inputStack) {
  let tempStack = [];
  while (inputStack.length !== 0) {
    let temp = inputStack.pop();
    while (tempStack.length !== 0 && tempStack[tempStack.length - 1] > temp) {
      inputStack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  return tempStack;
}

console.log(sortStack([34, 3, 31, 98, 92, 23]));
