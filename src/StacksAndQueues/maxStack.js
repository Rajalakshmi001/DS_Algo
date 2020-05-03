class MaxStack {
  constructor() {
    this.items = [];
    this.max = null;
  }

  push(value) {
    if (this.isEmpty()) {
      this.max = value;
      this.items.push(value);
      return;
    }
    if (value < this.max) this.items.push(value);
    else {
      this.items.push(2 * value - this.max);
      this.max = value;
    }
  }

  pop() {
    if (this.isEmpty()) return "Empty stack";
    let value = this.peek();
    let maximum = this.max;
    if (value < this.max) return this.items.pop();
    this.max = 2 * this.max - value;
    this.items.pop();
    return maximum;
  }

  peek() {
    if (this.isEmpty()) return "Empty stack";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0 ? true : false;
  }

  print() {
    for (let item of this.items) {
      console.log(item + "");
    }
  }

  getMax() {
    return this.max;
  }
}

let maxStack = new MaxStack();
maxStack.push(3);
maxStack.push(5);
maxStack.push(2);
maxStack.push(1);
maxStack.push(1);
maxStack.push(-1);
console.log(maxStack.pop());
console.log(maxStack.pop());
console.log(maxStack.pop());
console.log(maxStack.getMax());
console.log(maxStack.items);
// console.log(maxStack.items);
