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
