class mySets {
  constructor(collection) {
    this.collection = collection;
  }

  has() {
    return this.collection;
  }
}

var newSet = new mySets([1, 2, 3, 4, 5, 6]);
console.log(newSet.has());
