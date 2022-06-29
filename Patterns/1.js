// console.log("Patterns are easy");

// 2 Basic Building Blocks
// 1. Increasing Traingle
// *
// **
// ***
// ****
// *****

// 2. Decreasing Traingle
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

// Square Pattern
const printSq = (num) => {
  let string = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      string = string + "* ";
    }
    string = string + "\n";
  }
  return string;
};

// console.log(printSq(5));

// Increasing Traingle pattern

const printTr = (num) => {
  let string = "";
  for (let i = 0; i < num; i++) {
    for (let j = num; j > i + 1; j++) {
      string = string + "* ";
    }
    string = string + "\n";
  }
  return string;
};

console.log(printTr(5));
