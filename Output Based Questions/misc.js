// Scenario 1: Equalto operator behaves differently with boolean

// console.log(false == "0") // true
// console.log(true == "1") // true

// Scenario 2: Type Coersion String is converted to number in case of - and concaternation occur in case of +

// console.log("1" - -"1") // 1 - (-1) = 2
// console.log("1" + -"1") // "1" + "-1" = 1-1

// Scenario 3: Closure
// ;(function () {
//   var lang2 = "java"
// })()

// console.log(lang2) // lang2 is not defined

// Scenario 4: call and this
// ;(function () {
//   console.log(typeof this)
// }.call(10))

// Scenario 5: instanceof operator

// console.log("ayushv.medium.com/" instanceof String)

// const s = new String("ayushv.medium.com/")
// console.log(s instanceof String)

// Scenario 6: Object property reassignment is allowed

// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// }

// console.log(obj)

// Scenario 7: Object - Passed by reference

// let c = { greeting: "Hey!" }
// let d
// d = c
// c.greeting = "Hello"
// console.log(d.greeting) // Hello
// console.log(c.greeting) // Hello

// Scenario 8: new Number is an Object

// let a = 3
// let b = new Number(3)
// let c = 3
// console.log(a == b)
// console.log(a === b)
// console.log(b === c)

// Scenario 9: Passed by reference -> When testing equality, primitives are compared by their value, while objects are compared by their reference.

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are an adult!")
//   } else if (data == { age: 18 }) {
//     console.log("You are still an adult.")
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`)
//   }
// }

// checkAge({ age: 20 })

// Scenario 10: All object keys (excluding Symbols) are strings under the hood.

// const obj = { 1: "a", 2: "b", 3: "c" }
// const set = new Set([1, 2, 3, 4, 5])

// console.log(obj.hasOwnProperty("1"))
// console.log(obj.hasOwnProperty(1))
// console.log(set.has("1"))
// console.log(set.has(1))

// Scenario 11: (Tricky) When we stringify an object, it becomes "[object Object]"

// const a = {}
// const b = { key: "b" }
// const c = { key: "c" }

// a[b] = 123
// a[c] = 456

// console.log(a)
// console.log(a[b])

// Scenario 12: Empty Items in an Array - Empty slots have the value of undefined

// const numbers = [1, 2, 3]
// numbers[10] = 11
// console.log(numbers)

// Scenario 13: Iterating over an Object using for loop
// const person = {
//   name: "Abhishek",
//   age: 25,
// }

// for (const i in person) {
//   console.log(i)
//   console.log(person[i])
// }

// Scenario 14: The last element from the second array is used as the index to get the value from first array like arrTest[3].

// const arrTest = [10, 20, 30, 40, 50][1, 3]
// console.log(arrTest) // 40

// Scenario 15: + operator

// console.log([] + [])
// console.log([1] + [])
// console.log([1] + "abc")
// console.log([1, 2, 3] + [1, 3, 4])

// Scenario 16: NaN is a Unique value

// const ans1 = NaN === NaN
// const ans2 = Object.is(NaN, NaN)
// console.log(ans1, ans2)

// Scenario 17: increment and global scope

// var a = 3
// var b = {
//   a: 9,
//   b: ++a,
// }
// console.log(a + b.a + ++b.b)

// Scenario 18: Boolean passed inside the filter function

// const arr = [1, 2, undefined, NaN, null, false, true, "", "abc", 3]
// console.log(arr.filter(Boolean)) // it will return all the truthy values

// const arr2 = [1, 2, undefined, NaN, null, false, true, "", "abc", 3]
// console.log(arr2.filter(!Boolean)) // Will throw error

// Scenario 19: While assign the key the object evaluates the numerical expression

// const person = {
//   name: "Ayush Verma",
//   0.25e2: 25,
// }

// console.log(person[25])
// console.log(person[0.25e2])
// console.log(person[".25e2"])

// Scenario 20: empty array to toString()

// const newWorld = new Array(3).toString()
// console.log(newWorld)

// console.log([1, 2, 3, 4, 5].toString())

// Scenario 21: MicroTask and MacroTask

// Concept - When a macrotask is completed, all other microtasks are executed in turn first, and then the next macrotask is executed.

// Mircotasks include: MutationObserver, Promise.then() and Promise.catch(), other techniques based on Promise such as the fetch API, V8 garbage collection process, process.nextTick() in node environment.

// Marcotasks include initial script, setTimeout, setInterval, setImmediate, I/O, UI rendering.

// let obj = {
//   x: 2,
//   getX: function () {
//     setTimeout(() => console.log("a"), 0)
//     new Promise((res) => res(1)).then((v) => console.log(v))
//     setTimeout(() => console.log("b"), 0)
//   },
// }
// obj.getX()
