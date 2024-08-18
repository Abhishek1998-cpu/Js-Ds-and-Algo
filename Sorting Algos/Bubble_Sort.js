// Bubble Sort Algo -
// Base Problem - Sort a numeric array

// Approach - Compare adjacent elements in the array and
// swap their position if they are not in the intended order
// repeat the swapping with every iteration. Also if swap operation
// has happen then we need to reiterate the array with the same process.

// Bubble Sort is a in place Sorting Algo

const arr = [2, 34, 1, 5, 634, 23, 100];

const bubbleSort = (arr) => {
  let isElementSwapped = true;
  while (isElementSwapped) {
    let counter = 0;
    for (let i = 0; i < arr?.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        counter = counter + 1;
      }
    }
    if (counter === 0) {
      isElementSwapped = false;
    }
  }
  return arr;
};

console.log(bubbleSort(arr));

// Time Complexity - O(n^2)
// Space Complexity - O(1)
