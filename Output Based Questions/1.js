// Closures

// Scenario 1 - Scopes Placing by code

// global scope

// function local(){
//     local or function scope
// }

// {
//     block scope
// }

// Scenario 2 - What is the output of this ?

// let count = 0
// ;(function printCount() {
//   if (count === 0) {
//     let count = 1 //Shadowing
//     console.log(count)
//   }
//   console.log(count)
// })()

// Output - 1 0

// Scenario 3 - Output based

// const createBase = (num1) => {
//   return function (num2) {
//     return num1 + num2
//   }
// }

// var addSix = createBase(6)
// console.log(addSix(10))
// console.log(addSix(21))

// Scenario 4 - Time Optimization with Closure

// Scenario 5 - Print 1, 2, 3 using closures

// for (var i = 1; i < 4; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i)
//     }, i * 1000)
//   }
//   inner(i)
// }

// Output - 1, 2, 3

// 26.19
