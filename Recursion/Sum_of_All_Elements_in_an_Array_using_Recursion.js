// Print the sum of all elements of an array using recursion

// 1st Solution
// const printSumOfArray = (array) => {
//   // Base Case
//   if (array.length === 0) {
//     return 0;
//   }
//   //   Recursive Case Handling
//   var firstElement = array[0];
//   array.shift();
//   return firstElement + printSumOfArray(array);
// };

// Time Compl. = O(n^2)
// Space Compl = O(n)

// 2nd Solution
const printSumOfArray = (array) => {
  return _printSumOfArray(array, 0);
};

const _printSumOfArray = (array, index) => {
  if (index === array.length) {
    return 0;
  }
  return array[index] + _printSumOfArray(array, index + 1);
};

// Time Compl. = O(n)
// Space Compl. = O(n)

console.log(printSumOfArray([1, 5, 7, -2]));
console.log(printSumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(printSumOfArray([]));
