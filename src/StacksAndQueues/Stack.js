class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) return "Empty stack";
    return this.items.pop();
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
}
