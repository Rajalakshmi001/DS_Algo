class MaxHeap {
  constructor() {
    this.values = [null];
  }

  insert(value) {
    this.values.push(value);
    let currentNodeIndex = this.values.length - 1;
    let currentNodeParentIndex = Math.floor(currentNodeIndex / 2);
    while (
      this.values[currentNodeParentIndex] &&
      value > this.values[currentNodeParentIndex]
    ) {
      [this.values[currentNodeParentIndex], this.values[currentNodeIndex]] = [
        this.values[currentNodeIndex],
        this.values[currentNodeParentIndex]
      ];
      currentNodeIndex = currentNodeParentIndex;
      currentNodeParentIndex = Math.floor(currentNodeIndex / 2);
    }
  }
  remove() {
    if (this.values.length < 3) {
      let toRemove = this.values.pop();
      this.values[0] = null;
      return toRemove;
    }
    let toRemove = this.values[1];
    this.values[1] = this.values.pop();
    let currentIndex = 1;
    let [left, right] = [currentIndex * 2, currentIndex * 2 + 1];
    let currentChildIndex =
      this.values[right] && this.values[right] >= this.values[left]
        ? right
        : left;
    while (
      this.values[currentChildIndex] &&
      this.values[currentIndex] < this.values[currentChildIndex]
    ) {
      let currentNode = this.values[currentIndex];
      let currentChildNode = this.values[currentChildIndex];
      this.values[currentIndex] = currentChildNode;
      this.values[currentChildIndex] = currentNode;
    }
    return toRemove;
  }

  getMax() {
    return this.values[1];
  }
}

let maxHeap = new MaxHeap();
maxHeap.insert(100);
maxHeap.insert(19);
maxHeap.insert(36);
maxHeap.insert(17);
maxHeap.insert(3);
maxHeap.insert(25);
maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(7);
console.log(maxHeap.values);
