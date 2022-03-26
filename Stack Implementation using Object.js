// Implementation of Stack using Object

class Stack {
  constructor() {
    this.counter = 0;
    this.storage = {};
  }

  push(element) {
    this.storage[this.counter] = element;
    this.counter = this.counter + 1;
    return this.storage;
  }

  getData() {
    return this.storage;
  }

  pop() {
    delete this.storage[`${this.counter}` - 1];
    this.counter = this.counter - 1;
    return this.storage;
  }

  size() {
    return this.counter;
  }
}

var X = new Stack();
X.push("Abhishek");
X.push(25);
X.push(false);
X.pop();
console.log(X.getData());
console.log(X.size());
