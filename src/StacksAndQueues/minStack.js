class MinStack {
  constructor() {
    this.items = [];
    this.min = null;
  }

  push(value) {
    if (this.isEmpty()) {
      this.min = value;
      this.items.push(value);
      return;
    }
    if (value >= this.min) this.items.push(value);
    else {
      this.items.push(2 * value - this.min);
      this.min = value;
    }
  }

  pop() {
    if (this.isEmpty()) return "Empty stack";
    let value = this.peek();
    let minimum = this.min;
    if (value >= this.min) return this.items.pop();
    this.min = 2 * this.min - value;
    this.items.pop();
    return minimum;
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

  getMin() {
    return this.min;
  }
}

let minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);
minStack.push(1);
minStack.push(-1);
console.log(minStack.pop());
console.log(minStack.pop());
console.log(minStack.pop());
console.log(minStack.getMin());
console.log(minStack.items);
// console.log(minStack.items);
