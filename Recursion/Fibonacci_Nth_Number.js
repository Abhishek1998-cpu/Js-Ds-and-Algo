// Fibonacci Using Recursion
// Print the nth term of the Fibonacci Series
// This is also an example of Dynamic Programming 

const Fib = (n) => {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return Fib(n - 1) + Fib(n - 2);
};

// If we visualize this recursion then we will find that it's a Multibranch recursion

// It is using two recursive calls So T.C is 2^n
// T.C = O(2 ^ n);
// S.C = O(n)

console.log(Fib(5));
console.log(Fib(50));

// 4th term = 3
// 1 1 2 3

// 5th term = 5
// 1 1 2 3 5 8

// Fibonacci using Iteration 

// function Fib(num){
//   var x = 0
//   var y = 1
//   var z = 0
//   for(let i = 0; i < num; i++){
// z = x + y 
// x = y
// y = z
//   }
//   return x
// }


// Using Recursion
// Time complexity - Exponential (Very bad) as every function is calling two other function 
// Space Complexity - O(n) Extra space 

// const getNthFibonacciTerm = (n) => {
//     if(n <= 1){
//         return n
//     }
//     return getNthFibonacciTerm(n-1) + getNthFibonacciTerm(n -2)
// }

// const res = getNthFibonacciTerm(50)
// console.log(res)

// Using Dynamic Programming 
// Time Complexity - O(n) - best one
// Space Complexity - O(n) Auxilary Space 

function getNthFibonacciTerm(n) {
  let f = new Array(n + 2);
  let i;
  f[0] = 0;
  f[1] = 1;
  for (i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}

const res = getNthFibonacciTerm(100);
console.log(res);

