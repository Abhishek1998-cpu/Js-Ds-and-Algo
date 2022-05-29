<<<<<<< HEAD
<<<<<<< HEAD
// Graph Data Structure
// Graph = Node +  Edges
// Depth First Traversal - Stack
// Breadth First Traversal - Queue
// 16.37

const depthFirstSearch = (graph, source) => {};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstSearch(graph, "a"); //abdfce
=======
// Map Filter Reduce example
=======
// Shallow Copy vs Deep Copy
>>>>>>> 1e36778384a8c0b79d56b9d085a034298cfaddec

// Example of a Shallow Copy
// Name of Developer 1 is also changed when we change the Name of Developer 2
// let developer1 = { name: "Abhishek" };
// let developer2 = developer1;
// developer2.name = "Varun";

// console.log(developer1);
// console.log(developer2);

// Example of a Deep Copy
// Name of Developer 1 does not changes when we change the Name of Developer 2
let developer1 = { name: "Abhishek" };
let developer2 = JSON.parse(JSON.stringify(developer1));
developer2.name = "Varun";

<<<<<<< HEAD
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
>>>>>>> 3cb1adbdda712a2ef96f78bae10f7c795ffdb70b
=======
console.log(developer1);
console.log(developer2);
>>>>>>> 1e36778384a8c0b79d56b9d085a034298cfaddec
