function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, null, this.head);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, this.tail, null);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  let val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  let val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.tail = null;
  return val;
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
  while (current && value !== null) {
    if (current.value === value) {
      if (current.next) {
        current.next.prev = current.prev;
        current.prev.next = current.next;
        if (current === this.head) {
          this.head = current.next;
        }
      } else if (current === this.tail) {
        if (current.prev) {
          current.prev.next = null;
          this.tail = current.prev;
        } else {
          this.head = this.tail = null;
        }
      }
    }
    current = current.next;
  }
  return null;
};

LinkedList.prototype.reverse = function() {
  if (!this.head) return;
  let currentNode = this.head;
  this.tail = currentNode;
  while (currentNode) {
    currentNode.prev = [
      currentNode.next,
      (currentNode.next = currentNode.prev)
    ][0];
    if (currentNode.prev) {
      currentNode = currentNode.prev;
    } else {
      this.head = currentNode;
      break;
    }
  }
};

LinkedList.prototype.print = function() {
  if (!this.head) return;
  let currentNode = this.head;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};

LinkedList.prototype.removeDuplicates = function() {
  if (!this.head) return null;
  let currentNode = this.head;
  let trackNode = this.head;
  while (currentNode) {
    let value = currentNode.value;
    trackNode = currentNode.next;
    while (trackNode) {
      if (trackNode.value === value) {
        trackNode.prev.next = trackNode.next;
        if (trackNode.next == null) {
          this.tail = trackNode.prev;
        } else {
          trackNode.next.prev = trackNode.prev;
        }
      }
      trackNode = trackNode.next;
    }
    currentNode = currentNode.next;
  }
};

let ll = new LinkedList();
ll.addToHead("g");
ll.addToHead("b");
ll.addToHead("g");
ll.addToHead("g");
ll.addToHead("g");
ll.removeDuplicates();
console.log(ll.print());
