// Stack Implementation using Array

// var Stack = function () {
function Stack() {
  this.storage = [];

  this.push = function (element) {
    this.storage.push(element);
  };

  this.checkStorage = function () {
    return this.storage;
  };

  this.peek = function () {
    return this.storage[this.storage.length - 1];
  };

  this.pop = function () {
    this.storage.pop();
  };

  this.size = function () {
    return this.storage.length;
  };
}

// class Stack {
//   constructor() {
//     this.storage = [];
//   }
//   push(element) {
//     this.storage.push(element);
//   }
//   checkStorage() {
//     return this.storage;
//   }
//   peek() {
//     return this.storage[this.storage.length - 1];
//   }
//   pop() {
//     this.storage.pop();
//   }
//   size() {
//     return this.storage.length;
//   }
// }

Obj1 = new Stack();
Obj1.push("Abhishek");
Obj1.push(10);
Obj1.push({ 1: "Hello World" });
Obj1.push(true);
Obj1.push(NaN);
console.log(Obj1.checkStorage());
Obj1.pop();
Obj1.pop();
console.log(Obj1.checkStorage());
console.log(Obj1.peek());
console.log(Obj1.size());
console.log(typeof Stack);
