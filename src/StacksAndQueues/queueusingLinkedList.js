class Node {
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
}

class QueueAsLinkedList {
  constructor() {
    this.queue = null;
  }

  enqueue(value) {
    let head = this.queue;
    let newNode = new Node(null, value);
    if (!head) {
      this.queue = newNode;
    } else {
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  dequeue() {
    let head = this.queue;
    if (!head) return "Empty queue";
    this.queue = head.next;
    return head.value;
  }
  peek() {
    if (!this.queue) return "Empty queue";
    return this.queue.value;
  }
  isEmpty() {
    if (!this.queue) return true;
    return false;
  }
  print() {
    if (!this.queue) return "Empty queue";
    let currentNode = this.queue;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
