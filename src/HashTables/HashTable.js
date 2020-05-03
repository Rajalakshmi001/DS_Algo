function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  return total % this.numBuckets;
};

HashTable.prototype.insert = function(key, value) {
  let index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
    return;
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
    return;
  } else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  let index = this.hash(key);
  if (!this.buckets[index]) return null;
  let currentNode = this.buckets[index];
  while (currentNode) {
    if (currentNode.key === key) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null;
};

HashTable.prototype.retrieveAll = function() {
  let result = [];
  for (let bucket of this.buckets) {
    while (bucket) {
      result.push(bucket);
      bucket = bucket.next;
    }
  }
  console.log(result);
};

let myHT = new HashTable(6);
myHT.insert("Raji", 11111);
myHT.insert("nisha", 222);
myHT.insert("insha", 333);
myHT.insert("nisha", 444);
console.log(myHT.get("Rajii"));
console.log(myHT);
console.log(myHT.retrieveAll());
