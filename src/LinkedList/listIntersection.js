function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next) {
  this.value = value;
  this.next = next;
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

function listIntersection(list1, list2) {
  if (list1.head === list2.head) return true;
  let list1CurrentNode = list1.head;
  let list2CurrentNode = list2.head;
  while (list1CurrentNode !== null) {
    while (list2CurrentNode !== null) {
      if (list1CurrentNode === list2CurrentNode.next) {
        return true;
      }
      list2CurrentNode = list2CurrentNode.next;
    }
    list2CurrentNode = list2.head;
    list1CurrentNode = list1CurrentNode.next;
  }
  return false;
}

const deleteDuplicates = function(head) {
  let currentNode = head;
  let trackNode = head;
  while (currentNode) {
    const value = currentNode.value;
    let loopNode = currentNode;
    trackNode = currentNode.next;
    while (trackNode) {
      if (trackNode.value === value) {
        loopNode.next = trackNode.next;
      } else {
        loopNode = loopNode.next;
      }
      trackNode = trackNode.next;
    }
    currentNode = currentNode.next;
  }
  return head;
};
let ll = new LinkedList();
ll.addToHead(5);
ll.addToTail(6);
ll.addToTail(7);
ll.addToTail(6);
ll.addToTail(5);
console.log(deleteDuplicates(ll.head));
let l2 = new LinkedList();
l2.addToHead(8);
l2.head.next = ll.head.next;

console.log(listIntersection(ll, l2));
