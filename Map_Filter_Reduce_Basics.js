// Map Filter Reduce example

// Map - Whenever we want to transform all the elements of an array

// const arr = [1, 2, 3, 4, 5];
// const arrMulBy2 = arr.map((element, index) => {
//   return element * 2;
// });
// const arrBinary = arr.map((element, index) => {
//   return element.toString(2);
// });
// console.log(arr);
// console.log(arrMulBy2);
// console.log(arrBinary);

// Filter - Whenever we want to filter the values inside an array
// const arr = [1, 2, 3, 4, 5];
// const arrLessthan3 = arr.filter((element, index) => {
//   return element <= 3;
// });
// console.log(arr);
// console.log(arrLessthan3);

// Reduce - It does not reduce anything, We use it when we need to take all the elements of an array and come up with a single value out of them
const arr = [1, 2, 3, 4, 5];

function findSum(arr) {
  var sum = 0;
  var i = 0;
  while (i < arr.length) {
    sum = sum + arr[i];
    i = i + 1;
  }
  return sum;
}

function findMax(arr) {
  var maxValue = 0;
  var i = 0;
  while (i < arr.length) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
    i = i + 1;
  }
  return maxValue;
}

// Sum of all element's of an array using reduce
const arr2findSum = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0); // 0 will be the Initial Value of acc

// console.log(findSum(arr));
// console.log(arr2findSum);

// Finding greatest number in the array using reduce
const arr2GreatestNum = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(findMax(arr));
console.log(arr2GreatestNum);
