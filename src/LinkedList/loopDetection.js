function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next) {
  this.value = value;
  this.next = next;
  this.traversed = false;
}

LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head);
  if (this.head) newNode.next = this.head;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  this.head = this.head.next;
  if (!this.head) this.tail = null;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  let currentNode = this.head;
  let tailNode = this.head.next;
  while (tailNode.next !== null) {
    currentNode = tailNode;
    tailNode = tailNode.next;
  }
  currentNode.next = null;
  this.tail = currentNode;
};

LinkedList.prototype.search = function(value) {
  let currentNode = this.head;
  if (!this.head) return null;
  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function(value) {
  let currentNode = this.head;
  if (!this.head) return null;
  let counter = 0;
  let result = [];
  while (currentNode) {
    if (currentNode.value === value) {
      result.push(counter);
    }
    currentNode = currentNode.next;
    counter++;
  }
  return result;
};

LinkedList.prototype.deleteANode = function(value) {
  if (!this.head) return null;
  let current = this.head;
  if (current.value === value) {
    this.removeHead();
  } else if (this.tail.value === value) {
    this.removeTail();
  } else {
    let tailNode = this.head.next;
    while (tailNode !== null) {
      if (tailNode.value === value) {
        current.next = tailNode.next;
        break;
      }
      tailNode = tailNode.next;
      current = current.next;
    }
  }
  return null;
};

LinkedList.prototype.reverse = function() {
  if (!this.head) return;
  let currentNode = this.head,
    previous,
    tmp;
  this.tail = currentNode;
  while (currentNode) {
    tmp = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
    currentNode = tmp;
  }
  this.head = previous;
};

LinkedList.prototype.print = function() {
  if (!this.head) return;
  let currentNode = this.head;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};

LinkedList.prototype.loopDetection = function() {
  if (!this.head) return "The list is empty";
  let currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.traversed === true) return currentNode;
    currentNode.traversed = true;
    currentNode = currentNode.next;
  }
  return false;
};

let ll = new LinkedList();
ll.addToHead(5);
ll.addToTail(6);
ll.addToTail(7);
ll.addToTail(6);
ll.addToTail(5);
ll.tail.next = ll.head.next.next;
console.log(ll.loopDetection());
