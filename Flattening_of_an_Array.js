const SampleArray = [
  [1, 2],
  [3, 4],
  [
    [5, 6],
    [7, 8],
  ],
];

// Flattening of an Array

// Method 1: Using flat method
// console.log(SampleArray.flat())

// Method 2: Using concat and apply method

// const flattenSampleArray = [].concat.apply([], SampleArray)
// console.log(flattenSampleArray)

// Method 3: Using the spread operator
// const flattenSampleArray = [].concat(...SampleArray)
// console.log(flattenSampleArray)

// Method 4: Using the reduce method
// const flattenSampleArray = SampleArray.reduce((acc, curVal) => {
//     return acc.concat(curVal)
// })
// console.log(flattenSampleArray)

// Deep Flattening of an Array

// Method 1: 
// Using flatten method of underscores library

// Method 2: 
// Using flattenDeep method of lodash library

// Method 3: Using flat with Infinity  
// console.log(SampleArray.flat(Infinity))

// Recursive Function to Implement Deep Flattening of an Array - Important

function flatten(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const flattenSampleArray = flatten(SampleArray)
console.log(flattenSampleArray)
