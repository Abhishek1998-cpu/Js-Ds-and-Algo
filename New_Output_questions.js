
// #1
// Note - Adding property to function does not woke an error 
// function fruit(){
//     console.log("Woof")
// }
// fruit.name = "Abhishek"
// fruit()

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
// console.log(typeof (3 + 4 + + "5")) 

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