// Scenario 1 - let, const, var scoping

// var is global and functional scoped
// let and const are block scoped

// // This will be working
// {
//   var a = "Abhishek Verma"
// }

// // these will not
// {
//   let b = "Abhishek Verma"
// }

// // these will not
// {
//   const c = "Abhishek Verma"
// }

// function hello() {
//   console.log(a) // Abhishek Verma
//   console.log(b) // error
//   console.log(c) // error
// }

// hello()

// Scenario 2 - Variable shadowing

// function test() {
//   let a = "Hello"
//   if (true) {
//     let a = "Hi"
//     console.log(a)
//   }
//   console.log(a)
// }

// test()

// Output - Hi Hello

// Scenario 3 - Illegal Shadowing

// let is block scoped and cannot be redeclare in a block
// var can be redeclare in the same scope

// function test() {
//   var a = "Hello"
//   let b = "Bye"
//   if (true) {
//     let a = "Hi"
//     var b = "Goodbye"
//     console.log(a)
//     console.log(b)
//   }
// }

// test()

// Output - Cannot redeclare variable b

// Scenario 4 - Re-initialization

// var and let can be updated but const can never be updated

// const a = 10
// a = 15
// console.log(a)

// Scenario 5 - Hoisting
// variable and function declaration moves to the top
// let and const are not hoisted, they are hoisted in the temporal dead zone

// function test() {
//   console.log(a)
//   var a = 100
// }

// test()

// This will throw Error - let and const are not purely hoisted - they are hoisted / initialzied in Temporal Deadzone
// Temporal Deadzone - They are in scope but they are not hoisted

// function test() {
//   console.log(a, b, c)
//   const c = 30
//   let b = 20
//   var a = 10
// }

// test()

// test()
