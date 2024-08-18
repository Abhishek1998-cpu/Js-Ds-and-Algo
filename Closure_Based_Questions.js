// Case 1: Basic Example of Closure in Action
// Output -> 6, 6, 6, 6, 6
// Note -> This happens because of closures. When setTimeout stores the function somewhere
// and attaches timer to it, the function remembers its reference to i, not value of i. All
// 5 copies of function point to same reference of i. JS stores these 5 functions, prints
// string and then comes back to the functions. By then the timer has run fully. And due
// to looping, the i value became 6. And when the callback fun runs the variable i = 6. 
// So same 6 is printed in each log
// Solution -> To avoid this, we can use let instead of var as let has Block scope. For each 
// iteration, the i is a new variable altogether(new copy of i). Everytime setTimeout is run, 
// the inside function forms closure with new variable i

function print() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
print();
