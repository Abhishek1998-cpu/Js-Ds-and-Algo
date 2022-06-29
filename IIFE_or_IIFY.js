// IIFE or IIFY - Immediately Invoked JavaScript Function - The function which get's executed as soon as it is defined
(function () {
  console.log("Hello World");
})();

// 1st set of parenthesis - it tells the compiler that the function is not a function declaration, instead, it’s a function expression.
// 2nd set of parenthesis - From the definition of an IIFE, we know that our code should run as soon as it is defined. A function runs only when it is invoked. If we do not invoke the function, the function declaration is returned. Therefore to invoke the function, we use the second set of parenthesis.
