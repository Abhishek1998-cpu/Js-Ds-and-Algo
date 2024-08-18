// Call, Apply and Bind Method in Js

// 1. Call Method - point to other object
// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu ",
//   getPokeName: function (profile, age) {
//     var fullname =
//       this.firstname +
//       " " +
//       this.lastname +
//       " He is a " +
//       profile +
//       " He is " +
//       age +
//       " years old."
//     console.log(fullname)
//     return fullname
//   },
// }

// var Abhishek = {
//   firstname: "Abhishek",
//   lastname: "Verma",
// }

// pokemon.getPokeName.call(Abhishek, "Software Engineer", 25)

// Difference between call and apply - apply accepts only one argument as an array

// 2. Apply Method - point to other object
// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu ",
//   getPokeName: function (profile, age) {
//     var fullname =
//       this.firstname +
//       " " +
//       this.lastname +
//       " He is a " +
//       profile +
//       " He is " +
//       age +
//       " years old."
//     console.log(fullname)
//     return fullname
//   },
// }

// var Abhishek = {
//   firstname: "Abhishek",
//   lastname: "Verma",
// }

// pokemon.getPokeName.apply(Abhishek, ["Software Engineer", 25])

// 3. Bind Method - Exactly same as Call Method, it returns a new function which can be invoked later

// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu ",
//   getPokeName: function (profile, age) {
//     var fullname =
//       this.firstname +
//       " " +
//       this.lastname +
//       " He is a " +
//       profile +
//       " He is " +
//       age +
//       " years old.";
//     console.log(fullname);
//     return fullname;
//   },
// };

// var Abhishek = {
//   firstname: "Abhishek",
//   lastname: "Verma",
// };

// var newFunc = pokemon.getPokeName.bind(Abhishek, "Software Engineer", 25);
// newFunc();
// 12:48

// 4. Polyfill for Bind Method -

// Normal Implementation of Bind Method

let nameObj = { firstName: "Abhishek", lastName: "Verma" };

let printName = function (city, country) {
  console.log(this.firstName + " " + this.lastName + " " + city + " " + country);
};

// const res = printName.bind(nameObj, "Gorakhpur");
// res("India");

// Basic Polyfill for the Bind method which support multiple arguments

Function.prototype.myBind = function (...args) {
  let obj = this; // Here this will be the function which is invoked 
  let params = args.slice(1); // Remove first element from the array and then return the array containing other elements
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
    // obj.apply(args?.[0], ...params, ...args2) // We can also use this 
  };
};

const res2 = printName.myBind(nameObj, "Gorakhpur");
res2("India");

// 5. Polyfill for Call Method 

let car = {
  color: "red", 
  company: "Ferrari"
}

function purchaseCar(currency, price){
  console.log("I have buyed a " + this.color + " " + this.company + " for " + currency + price)
}

purchaseCar.call(car, "$", "2000")

Function.prototype.myCall = function(...args){
  console.log(this)
  // Check if this is really a function 
  if(typeof this !== "function"){
      throw new Error("myCall should be called on a function")
  }
  console.log(args)
  const Obj = args?.[0]
  const params = args?.slice(1)
  Obj.fn = this // In the Object provided we will attach the function and then execute it passing params
  Obj.fn(...params)
}

purchaseCar.myCall(car, "$", "2000")
// 6. Polyfill for Apply Method 

let vehicle = {
  color: "red", 
  company: "Ferrari"
}

function purchaseCar(currency, price){
  console.log("I have buyed a " + this.color + " " + this.company + " for " + currency + price)
}

purchaseCar.apply(vehicle, ["$", "2000"])

Function.prototype.myApply = function(...args){
  if(typeof this !== "function"){
      throw new Error("myCall should be called on a function")
  }
  const Obj = args?.[0]
  const params = args?.slice(1)
  const subParams = params?.[0]
  Obj.fn = this
  Obj.fn(...subParams)
}

purchaseCar.myApply(vehicle, ["$", "2000"])

