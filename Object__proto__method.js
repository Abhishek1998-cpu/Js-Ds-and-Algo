function Person() {}

// Create a personA object through the Person constructor function
const personA = new Person();

// Through the __proto__ method, view the prototype of personA
// __proto__ method is provided by the Browser
console.log(personA.__proto__); // {constructor: ƒ}
console.log(personA.getPrototypeOf); // {constructor: ƒ}

// 1. What is the Output of this?
// personA.__proto__ === Person.prototype; // true
// Object.getPrototypeOf(personA) === Person.prototype; // true
// personA.__proto__ === Object.getPrototypeOf(personA); // true

// Notes - 

// [[Prototype]] is a special hidden property in JavaScript objects, 
// but because it cannot be directly accessed, it can be accessed through the __proto__ access method.