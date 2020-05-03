class Node {
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
}

class StackAsLinkedList {
  constructor() {
    this.stack = null;
  }

  push(value) {
    let head = this.stack;
    let newNode;
    if (!head) {
      newNode = new Node(null, value);
    } else {
      newNode = new Node(this.stack, value);
    }
    this.stack = newNode;
  }
  pop() {
    let head = this.stack;
    if (!head) return "Empty stack";
    this.stack = head.next;
    return head.value;
  }
  peek() {
    return this.stack.value;
  }
  isEmpty() {
    if (!this.stack) return true;
    return false;
  }
  print() {
    if (!this.stack) return "Empty stack";
    let currentNode = this.stack;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
