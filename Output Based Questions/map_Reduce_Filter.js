// Scenario 1 - What is Array Reduce Method

const nums = [1, 2, 3, 4, 5]

// // acc - Accumulator
// // curr - Current

// const sum = nums.reduce((acc, curr, index, arr) => {
//   acc = acc + curr
//   return acc
// }, 0)

// console.log(sum)

// Scenario 2 - Polyfill for Map()

// Array.prototype.myMap = function (cb) {
//   let newArr = []
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this))
//   }
//   return newArr
// }

// Scenario 3 - Polyfill for filter()

// Array.prototype.myFilter = function (cb) {
//   let newArr = []
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       newArr.push(cb(this[i], i, this))
//     }
//   }
//   return newArr
// }

// Scenario 4 - Polyfill for Reduce()

// Array.prototype.myReduce = function (cb, initialValue) {
//   var accumulator = initialValue
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
//   }
//   return accumulator
// }

// Scenario 5 - Difference between Map and forEach

// Map returns a new array
// forEach does not returns a new array

// Map can be chain further with Map, filter or reduce.
// forEach can not
