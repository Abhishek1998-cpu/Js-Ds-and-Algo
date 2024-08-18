// #1
// Note - Adding property to function does not woke an error
// function fruit(){
//     console.log("Woof")
// }
// fruit.name = "Abhishek"
// fruit()
// console.log(fruit.name)

// #2
// Note - Eval function evaluates the value and then returns it
// const sum = eval("10*10+5")
// console.log(sum)

// #3
// Note - Check if specific key is there or not in an object
// const obj = {
//     1: "a",
//     2: "b",
//     3: "c"
// }
// console.log(obj.hasOwnProperty("1"))
// console.log(obj.hasOwnProperty(1))

// #4
// Note - Normal function executes first and then setTimeout function executes
// const foo = () => console.log("First")
// const bar = () => setTimeout(() => console.log("Second"))
// const baz = () => console.log("Third")
// bar()
// foo()
// baz()

// #5
// Note - Core concept of Call, Apply and Bind
// const person = {name: "Abhishek"}
// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person, 21))
// console.log(sayHi.bind(person, 21)())

// #6
// Infinite Array / Circular Array Item
// Reason - ?
// const numbers = [1,2,3]
// numbers[3] = numbers
// console.log(numbers)

// #7
// Everything in Js are either primitive or object
// Everything in Js are either primitive data type or non primitive data type

// #8
// Note - It return Id in the browser along with HI
// console.log(setInterval(() => console.log("Hi"), 1000))
// console.log(setInterval(() => console.log("Hi"), 1000))
// console.log(setInterval(() => console.log("Hi"), 1000))

// #9
// Note - extra + will convert 5 into number
// console.log(7 + "5")
// console.log(15 - - "5") // Output => 20
// console.log(typeof (3 + 4 + + "5")) // Output => number

// #10
// Note - return statement is overwriting the property
// function Car(){
//     this.make = "tata"
//     return {make: "kia"}
// }

// const myCar = new Car()
// console.log(myCar.make)
// Output - Kia

// #11
// Note - Scope is block level and that's why x is not defined and that's why it's type is not defined
// (()=>{
//     let x = (y = 10)
// })()

// console.log(typeof x)

// #12
// Note - let x = y = 10 long form is -
// let x;
// y = 10
// As we can see y is declared globally that's why we can access it
// (()=>{
//     let x = y = 10
// })()
// console.log(y)
// console.log(typeof y)
// console.log(x)

// #13
// Note - O/ = undefined - out of scope
// (()=>{
//     let x = 10
// })();

// (()=>{
//     let x = 10
// })();
// console.log(typeof x)

// #14
// Note - x is defined globally / Scope Issue / Output - 100
// let x = 100;
// (() => {
//     var x = 20
// })();

// console.log(x)

// #15
// Note - + before "10" will make it number 10 and then additional takes place
// console.log(!true - true)
// console.log(true + +"10")

// #16
// console.log(3 > 2 > 1);
// Output -> false
// Reason -> Js evaluate expression from left to right, i.e 3 > 2 will be true and then
// true > 1 which is 1 > 1 which is false :(

// #17
// Note - NaN (Not-a-Number) is a special value in JavaScript, and its data type is considered “number”
// console.log(typeof NaN)
// Output -> number

// #18
// Js Garbage Collection Theory
// Note -
// What is Garbage Collection - Whenever a function, object, or a variable is declared in Js or any other
// language inside a program and then that program is executed then some specific memory is located to these
// variable's, after the execution of the program these memory should be released or free'd. The clearance of
// these memory location is known as Garbage Collection or process of Garbage Collecting.
// Js is a high level language so we don't need to allocate memory. In Js Memory Allocation is done automatically. Also in Go, Java, Python
// Memory allocation and release happens automatically
// Garbage Collector is a routine in Js, which perform the process of Garbage Collection
// Garbage Collection is also called Automatic Memory Management
// The Unreachable Code get's removed from the Memory Allocation

// #19
// Js Garbage Collection - Mark and Sweep Algo
// Note - This Algo start from the root object and check for the references linked, in case algorithm finds unreachable location, it list down them and then removes it
// Mark and Sweep - "Mark" will mark all the referenced items and Sweep will remove all the unmarked reference cleaning the memory acquired.
// All Modern Browser uses Mark and Sweep Algo
// Due to the Circular reference there was a situation of memory leak in Older Browser

// #20
// Advantage of Garbage Collection  -
// Note -
// It helps us overcoming these issues -
// Dangling Pointer, Double free or Corruption Error, Memory Leak

// #21
// Disadvantages of Garbage Collection  -
// Note -
// Extra Computing resources and performance impact
// Memory Management out of programmer control

// 22
// Note - Js handle floating point number's differently, in Js numbers are represented using
// the IEEE 754 standard for floating-point arithmetic.  This means that not all decimal numbers
// can be represented exactly as binary floating-point numbers. In particular, the decimal number
// 0.1 cannot be represented exactly in binary floating-point format. When you add 0.1 and 0.2 in
// JavaScript, the result is actually slightly larger than 0.3 due to rounding errors in the binary
// representation. Therefore, x is not equal to y.
// let x = 0.1 + 0.2;
// let y = 0.3;
// console.log(x == y); // false

// #23
// Trick - Stringified function getting undefined / JSON.stringify not working properly
// const obj1 = {
//   name: "Abhishek Verma",
//   sampleFunction: JSON.stringify(() => {
//     console.log("Abhishek");
//   }),
// };

// const obj2 = { ...obj1 };
// const obj3 = obj1;
// console.log(obj2); // { name: 'Abhishek Verma', sampleFunction: undefined }
// console.log(obj3); // { name: 'Abhishek Verma', sampleFunction: undefined }

// #24
// Note - String's are Immutable, that's why it's not changing 
// const str = "abc"
// str[0] = "x"
// console.log(str) // Output -> abc

// 25 
// Note - Basic Currying Questions 
// function sum(a = 0, b = 0, c = 0) {
//   return a + b + c;
// }

// function sumCurrying(a) {
//   return function (b = 0) {
//     return function (c = 0) {
//       return a + b + c;
//     };
//   };
// }

// // const sumCurrying =
// //   (a = 0) =>
// //   (b = 0) =>
// //   (c = 0) =>
// //     a + b + c;

// console.log(sum(1));
// console.log(sumCurrying(1)(2)(3));
