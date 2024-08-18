// Linear Search

// const linearSearch = (arr, target) => {
//   for(let i = 0; i < arr?.length; i++){
//     if(arr[i] === target){
//         return i
//     }
//   }
// };

// console.log(linearSearch([2, 5, 4, 3, 6], 6));

const binarySearch = (arr, target) => {
  const Arr = arr?.sort((a, b) => a - b);
  if (Arr?.length == 0) {
    return -1;
  }
  let leftIndex = 0;
  let rightIndex = Arr?.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    // console.log(middleIndex);
    if (Arr[middleIndex] === target) {
      return middleIndex;
    }
    if (Arr[middleIndex] > target) {
      rightIndex = middleIndex - 1;
    }
    if (Arr[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

console.log(binarySearch([2, 5, 4, 3, 6], 6));
