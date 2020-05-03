class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return "Empty queue";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "Empty queue";
    return this.items[0];
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
