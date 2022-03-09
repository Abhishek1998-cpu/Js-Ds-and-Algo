// Queue Data Structures
// First In First Out

// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// 1st Method Queue Implementation using Array
function Queue() {
  collection = [];
  this.print = function () {
    // console.log(collection);
    return collection;
  };
  this.enqueue = function (element) {
    collection.push(element);
    return collection;
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var New1 = new Queue();
New1.enqueue("a");
New1.enqueue("b");
New1.enqueue("c");
// console.log(New1.dequeue());
console.log(New1.front());
// console.log(New1.print());
// console.log(New1.print());
// console.log(New1.enqueue(4));
