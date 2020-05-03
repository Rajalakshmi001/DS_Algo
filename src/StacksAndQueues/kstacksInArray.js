class Kstacks {
  constructor(_stackCapacity) {
    this._stackCapacity = _stackCapacity;
    this.values = [];
    this.sizes = [0, 0, 0];
    this.numberOfStacks = 3;
  }
  isValidStack(stackNumber) {
    if (stackNumber <= this.numberOfStacks) return true;
    return false;
  }
  indexOfTop(stackNumber) {
    const offset = this._stackCapacity * stackNumber;
    const size = this.sizes[stackNumber];
    return offset + size - 1;
  }
  isEmpty(stackNumber) {
    if (this.sizes[stackNumber] > 0) return false;
    return true;
  }
  isFull(stackNumber) {
    if (this.sizes[stackNumber] >= this._stackCapacity) return true;
    return false;
  }
  push(stackNumber, value) {
    if (this.isFull(stackNumber)) return "Stack is full";
    this.sizes[stackNumber]++;
    let indexToBeFilled = this.indexOfTop(stackNumber);
    this.values[indexToBeFilled] = value;
    return "value successfully pushed";
  }
  pop(stackNumber) {
    if (this.isEmpty(stackNumber)) return "Stack is empty";
    const topIndexOfStack = this.indexOfTop(stackNumber);
    const valueToBePopped = this.values[topIndexOfStack];
    this.values[topIndexOfStack] = null;
    this.sizes[stackNumber]--;
    return valueToBePopped;
  }
  peek(stackNumber) {
    if (this.isEmpty()) return "Stack is empty";
    return this.values[this.indexOfTop(stackNumber)];
  }
}

let stack = new Kstacks(5);
console.log(stack.push(1, 10));
console.log(stack.push(1, 20));
console.log(stack.push(1, 30));
console.log(stack.push(0, 40));
console.log(stack.push(0, 50));
console.log(stack.push(0, 60));
console.log(stack.push(0, 60));
console.log(stack.push(0, 60));
console.log(stack.push(0, 60));
console.log("$$$ ", stack);
// console.log(stack);
