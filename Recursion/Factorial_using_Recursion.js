// Factorial through Recursion

const Fac = (number) => {
  if (number == 1) {
    return 1;
  }
  return number * Fac(number - 1);
};

// Factorial through Iteration

const Fac2 = (number) => {
  for (let i = number - 1; i >= 1; i--) {}
  return number;
};

console.log(Fac(5));
// console.log(Fac(1));
// console.log(Fac2(5));
// console.log(Fac2(1));
