class EffKStackInArray {
  constructor(stackSize, arrayLength) {
    this._stackSize = stackSize;
    this._arrayLength = arrayLength;
    this.next = [];
    for (let i = 0; i < arrayLength - 1; i++) {
      this.next[i] = i + 1;
    }
    this.next[arrayLength - 1] = -1;
    this.free = 0;
    this.top = [];
    for (let i = 0; i < stackSize; i++) {
      this.top[i] = -1;
    }
    this.stackArray = [];
  }

  isFull() {
    return this.free === -1;
  }

  isEmpty(stackNumber) {
    return this.top[stackNumber] === -1;
  }

  push(value, stackNumber) {
    if (this.isFull()) return "Stack is full";
    const index = this.free;
    this.free = this.next[index];
    this.next[index] = this.top[stackNumber];
    this.top[stackNumber] = index;
    this.stackArray[index] = value;
  }
  pop(stackNumber) {
    // Underflow check
    if (this.isEmpty(stackNumber)) return "Stack is empty";

    // Find index of top item in stack number 'stackNumber'
    const index = this.top[stackNumber];

    this.top[stackNumber] = this.next[index]; // Change top to store next of previous top

    // Attach the previous top to the beginning of free list
    this.next[index] = this.free;
    this.free = index;

    // Return the previous top item
    return this.stackArray[index];
  }
}

let ks = new EffKStackInArray(3, 10);
ks.push(15, 2);
ks.push(45, 2);

// Let us put some items in stack number 1
ks.push(17, 1);
ks.push(49, 1);
ks.push(39, 1);

// Let us put some items in stack number 0
ks.push(11, 0);
ks.push(9, 0);
ks.push(7, 0);
console.log("ks before popping ", ks);

console.log(ks.pop(2));

console.log("ks after popping ", ks);
