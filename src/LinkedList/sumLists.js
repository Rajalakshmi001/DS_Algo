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

function sumLists(list1, list2) {
  if (!list1) return list2;
  else if (!list2) return list1;
  let sumList = new LinkedList();
  let remainder = 0;
  let list1currentNode = list1.head;
  let list2currentNode = list2.head;
  let sum = 0;
  while (list1currentNode || list2currentNode) {
    if (list1currentNode === null) sum = remainder + list2currentNode.value;
    else if (list2currentNode === null)
      sum = remainder + list1currentNode.value;
    else sum = remainder + list1currentNode.value + list2currentNode.value;
    if (sum >= 10) {
      remainder = 1;
      sumList.addToTail(sum - 10);
    } else {
      remainder = 0;
      sumList.addToTail(sum);
    }
    list1currentNode = list1currentNode ? list1currentNode.next : null;
    list2currentNode = list2currentNode ? list2currentNode.next : null;
  }
  return sumList;
}

let ll1 = new LinkedList();
ll1.addToHead(7);
ll1.addToTail(1);
ll1.addToTail(6);

let ll2 = new LinkedList();
ll2.addToHead(5);
ll2.addToTail(9);
ll2.addToTail(2);

console.log(sumLists(ll1, ll2));
