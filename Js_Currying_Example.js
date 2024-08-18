// Js Currying -
// Developed by Haskell Curry
// It is a Technique of Functional Programming
// Function which is accepting multiple arguments
// is being converted into the several function which is accepting single argument in sequence

// Example -

// function findVolume(length, breadth, height) {
//   return length * breadth * height;
// }

// Type: 1 - Simple Currying for findVolumne function - Syntactical Change in the function as the Currying Technique is applied

// function findVolume2(length) {
//   return function (breadth) {
//     return function (height) {
//       return length * breadth * height;
//     };
//   };
// }

// Type: 2 - Currying for Single Liner Function

// const findVolume2 = (length) => (breadth) => (height) => length * breadth * height

// console.log(findVolume(5, 5, 5))
// console.log(findVolume2(5)(5)(5))

// Type: 3 - Infinite Currying Example - Single () is required at last for calling sum function
// Note - This follows a recursive approach to solve the question
// Extra () is required after the function and it's argument as it calls the function at last
// function sum(a) {
//   return function (b) {
//     if (b) {
//       return sum(a * b);
//     }
//     return a;
//   };
// }

// console.log(sum(1)(2)(3)(4)(5)());
// console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(12)());

// Type: 4 Evaluate operations

// function evaluate(operation) {
//   if (operation === "sum") {
//     return function (b) {
//       return function (c) {
//         return b + c;
//       };
//     };
//   } else if (operation === "subtract") {
//     return function (b) {
//       return function (c) {
//         return b - c;
//       };
//     };
//   } else if (operation === "divide") {
//     return function (b) {
//       return function (c) {
//         return b / c;
//       };
//     };
//   } else if (operation === "multiply") {
//     return function (b) {
//       return function (c) {
//         return b * c;
//       };
//     };
//   }
// }

// console.log(evaluate("sum")(6)(2));
// console.log(evaluate("multiply")(6)(2));
// console.log(evaluate("divide")(6)(2));
// console.log(evaluate("subtract")(6)(2));

// Type 5 - Currying vs Partial Application
// Partial Application transform one function into another function with small number of arguments a function receives

// function sum(a) {
//   return function (b, c) {
//     return a + b + c
//   }
// }

// console.log(sum(10)(10, 20))

// Type 6 - Real Life Example of Js Currying - DOM Manipulation - Hint: Update the content of the heading via the heading id

// Type 7 - Currying Creator Function, Write a function Curry to Convert f(a, b ,c ) into f(a)(b)(c) - Curry Implementation
// Difficulty Level - High (Senior Position Interview's)

function sum(a, b, c, d) {
  return a + b + c + d;
}

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const fn1 = curry(sum);
console.log(fn1(1)(2)(3)(10));

// Type  - Important - n arguments n times Infinite Currying

// Currying Question asked in an Interview
// function sum() {
//   console.log(arguments)
// }

// sum(1, 1, 1, 1)
// sum(1, 1, 1, 1)(1, 1, 1)(1, 1)(1, 1, 1, 1, 1)(1, 1)

// 6:25
