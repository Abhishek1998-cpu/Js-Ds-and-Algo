// Functions

// Scenario - 1 - Name Confusion's
// Function Declaration = Function Statement = Function Definition

// Scenario 2 - Anonymouse Function example
// Anonymous Function
// const square = function (num) {
//   return num * num
// }

// Scenario 3 - First Class Function - Functions are treated as variables
// const newSquare = function oldSquare(num) {
//   return num * num
// }

// console.log(newSquare(10))

// Scenario 4 - IIFE Output Based Questions
// ;(function (x) {
//   return (function (y) {
//     console.log(x)
//   })(2)
// })(1)

// Output - 1

// Scenario 5 - Function Scope output based

// let has block scope and var has function scoped

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, i * 10)
// }

// Output - 5 5 5 5 5

// Scenario 6 - Function Hoisting

// When a function have a variable in a local scope then it does not finds that var in the global scope

// var x = 10

// var fun = function () {
//   console.log(x)
//   var x = 20
// }

// fun()

// Output - undefined

// Scenario 7 - Params / Arguments - Output based Questions

// Error = SyntaxError: Rest parameter must be last formal parameter

// const fn = (a, ...numbers, x, y) => {
//     console.log(x, y)
// }

// fn(1,2,3,4,5)
