// Kadane Algo

// Base Question -> Given an Integer Array, find the subarray with the largest sum and then return it's sum
// Input: [5, 4, -1, 7, 8] Output: 23, Largest Array -> [5, 4, -1, 7, 8] (Subarray with the largest sum)

// Approach 1 - Brute Force Approach
// function maxSubArray(arr) {
//   let maxSum = arr?.[0];
//   for (let i = 0; i < arr?.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < arr?.length; j++) {
//       currentSum = currentSum + arr?.[j];
//       console.log(currentSum);
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//       }
//     }
//   }
//   return maxSum;
// }

// console.log(maxSubArray([5, 4, -1, 7, 8]));

// Approach 2 Kadane's Algo -

// function maxSubArray(arr) {
//   let sum = 0;
//   let max = arr[0];
//   for (let i = 0; i < arr?.length; i++) {
//     sum += arr[i];
//     if (sum > max) {
//       max = sum;
//     }
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return max;
// }

// console.log(maxSubArray([5, 4, -1, 7, 8]));
