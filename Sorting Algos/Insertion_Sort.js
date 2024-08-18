// Insertion Sort Algo

// Approach -

// We assume that the first element is already sorted and remaining elements are unsorted
// Now we select an element from an unsorted array and then compare with all the elements in the sorted part
// If the element in the sorted part is smaller than the selected element, then we proceed to the next element in the unsorted part
// Else we shift the larger element in the sorted parts towards the right
// Insert the selected element at the right index
// Now we repeat this till all the unsorted elements are placed in the right order

const arr = [2, 34, 1, 5, 634, 23, 100];

const insertionSort = (arr) => {
  for (let i = 1; i < arr?.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
};

const res = insertionSort(arr);
console.log(res);

// Time Complexity - O(n^2)
