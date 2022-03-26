// Stacks
// Functions in Stacks - Push, Pop, Peek, Length;
// Last in First Out - LIFO

// 1st Implementation Method Using Array
// Example of Stack Implementation with Array for Check Palindrome Question
// var letters = [];
// var word = "bob";
// var rword = "";

// // For Pushing the letter of words into the Stack
// for (let i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// // For Popping off the Stack in Reverse Order
// for (let i = 0; i < word.length; i++) {
//   rword += letters.pop();
// }

// // For Checking that the word is Palindrome or not
// if (rword === word) {
//   console.log(word + " is a Palindrome");
// } else {
//   console.log(word + " is not a Palindrome");
// }

// 2nd Implementation Method using objects and function
var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the Stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // Returns the Size of the Stack (Length)
  this.size = function () {
    return this.count;
  };

  // Returns the value at the end of the Stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
// console.log(myStack.count);
// console.log(myStack.pop());
// console.log(myStack.storage);
// console.log(myStack.size());
