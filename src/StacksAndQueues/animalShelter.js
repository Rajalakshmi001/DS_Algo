class Animal {
  constructor(animal, nextNode) {
    this.animal = animal;
    this.nextNode = nextNode;
  }
}

class AnimalShelter {
  constructor() {
    this.headNode = new Animal(null, null);
    this.lastNode = this.headNode;
  }

  // Animal gets added to shelter
  enqueue(animal) {
    var newAnimal = new Animal(animal, null);
    this.lastNode.nextNode = newAnimal;
    this.lastNode = newAnimal;
  }

  toArray() {
    var array = [];

    var currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      array.push(currentNode.nextNode.animal);
      currentNode = currentNode.nextNode;
    }

    return array;
  }

  dequeueAny(animal) {
    this.headNode = this.headNode.nextNode;
  }

  dequeueAnimal(animal) {
    if (!this.headNode) return null;
    let current = this.headNode;
    if (current.animal === animal) {
      this.headNode = this.headNode.nextNode;
    } else {
      let tailNode = this.headNode.nextNode;
      while (tailNode !== null) {
        if (tailNode.animal === animal) {
          current.nextNode = tailNode.nextNode;
          return this.toArray();
        }
        tailNode = tailNode.nextNode;
        current = current.nextNode;
      }
      return this.toArray();
    }
    return null;
  }
}

var shelter = new AnimalShelter();
shelter.enqueue("dog");
shelter.enqueue("cat");
shelter.enqueue("dog");
shelter.enqueue("dog");
// shelter.dequeueDog();
console.log(shelter.dequeueAnimal("cat"));
// shelter.dequeueCat();
