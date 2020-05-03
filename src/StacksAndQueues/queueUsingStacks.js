class QueueUsingStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    if (!this.stack1.length) {
      this.stack1.push(value);
      return;
    }
    for (let i = 0; i < this.stack1.length; i++) {
      this.stack2.push(this.stack1[i]);
    }
    this.stack1 = [];
    this.stack1.push(value);
    for (let index = 0; index < this.stack2.length; index++) {
      this.stack1[index + 1] = this.stack2[index];
    }
    this.stack2 = [];
  }

  dequeue() {
    if (!this.stack1) return "Empty queue";
    return this.stack1.pop();
  }
}

let queueUsingStacks = new QueueUsingStacks();
queueUsingStacks.enqueue(3);
queueUsingStacks.enqueue(4);
queueUsingStacks.enqueue(5);
queueUsingStacks.enqueue(6);
queueUsingStacks.enqueue(7);
console.log(queueUsingStacks.dequeue());
console.log(queueUsingStacks.dequeue());
console.log(queueUsingStacks.dequeue());

console.log(queueUsingStacks.stack1);
