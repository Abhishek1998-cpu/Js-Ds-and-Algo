// *** Linear Search Algo ***
// Basic Problem - Find the index of an element in an array, if element is not found then return -1
// Note - Approach - Just loop over the array one by one to find the targetElement

// Q. Arr = [5, 2, 10, 4, 6], Target Element = 2
// Ans. Index of the Target Elemet -> 1

// function linearSearch(arr, targetElement) {
//   for (let i = 0; i < arr?.length; i++) {
//     if (arr[i] === targetElement) {
//       return i;
//     }
//   }
//   return -1;
// }

// const resA = linearSearch([5, 2, 10, 4, 6], 2);
// console.log(resA);

// Time Complexity - O(n)
// Space Complexity - O(n)

// *** Binary Search Algo ***
// Basic Problem - Find the index of an element in an array, if element is not found then return -1
// Note - Binary Search Algo is always applied on a sorted Array, so if it's not sorted then we need to sort it first

// Approach -

// 1. If array is empty, return -1
// 2. Find the Middle element of an array, if it matches the target element then return it.
// 3. If target element is less than the Middle Element, Implement Binary Search Algo to left half of the array
// 4.    If target element is greater than the Middle Element, Implement Binary Search Algo to right half of the array

// Q. Arr = [5, 2, 10, 4, 6], Target Element = 2
// Ans. Index of the Target Elemet -> 1

// function binarySearch(arr, targetElement) {
//   arr.sort((a, b) => a - b);
//   let leftIndex = 0;
//   let rightIndex = arr?.length - 1;
//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (targetElement === arr[middleIndex]) {
//       return middleIndex;
//     }
//     if (targetElement < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   return -1;
// }

// const resB = binarySearch([2, 4, 5, 6, 10], 5);
// console.log(resB);

// Time Complexity - O(logn) -> input size is getting half
// Space Complexity - O(n)

// *** Binary Search Recursive Solution ***

function binarySearch(arr, targetElement) {
  arr.sort((a, b) => a - b);
  const binarySearchHelper = (arr, targetElement, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
      return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (targetElement === arr[middleIndex]) {
      return middleIndex;
    }
    if (targetElement < arr[middleIndex]) {
      return binarySearchHelper(arr, targetElement, leftIndex, middleIndex - 1);
    } else {
      return binarySearchHelper(
        arr,
        targetElement,
        middleIndex + 1,
        rightIndex
      );
    }
  };
  return binarySearchHelper(arr, targetElement, 0, arr?.length - 1);
}

const resC = binarySearch([2, 4, 5, 6, 10], 6);
console.log(resC);

// Big O Time Complexity - O(logn)
// Space Complexity - 0(n)
