class StackOfPlates {
  constructor(threshold) {
    this.stack = [];
    this.stacks = [];
    this.threshold = threshold;
    this.incrementer = 0;
  }

  push(value) {
    if (this.stacks.length === 0) {
      this.stack.push(value);
      this.stacks.push(this.stack);
      return;
    }
    if (this.isFull()) {
      this.stack = [];
      this.incrementer++;
    }
    this.stack.push(value);
    this.stacks[this.incrementer] = this.stack;
  }

  pop() {
    let value;
    if (!this.isFull() && !this.isEmpty()) {
      value = this.stack.pop();
      if (this.isEmpty()) {
        this.stacks.splice(this.incrementer, 1);
        this.incrementer--;
      }
      return value;
    }
    return this.stacks[this.incrementer].pop();
  }

  isEmpty() {
    return this.stack.length === 0 ? true : false;
  }

  isFull() {
    return this.stack.length >= this.threshold ? true : false;
  }

  popAt(index) {
    if (index > this.incrementer) return "invalid index";
    return this.stacks[index].pop();
  }
}

let stackOfPlates = new StackOfPlates(3);
stackOfPlates.push(1);
stackOfPlates.push(2);
stackOfPlates.push(3);
stackOfPlates.push(4);
stackOfPlates.push(5);
stackOfPlates.push(6);
stackOfPlates.push(7);
stackOfPlates.push(9);
console.log(stackOfPlates.pop());
// console.log(stackOfPlates.pop());
console.log(stackOfPlates.popAt(0));
console.log(stackOfPlates);
