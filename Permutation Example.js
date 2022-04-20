// console.log("Hello World");

// Permutations
// Given a set of n things there are n! permutations
// Permutations Ques can be solved using Array

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (elements) {
  if (elements.length === 0) {
    return [[]];
  }
  const firstElement = elements[0];
  const rest = elements.slice(1);
  const permsWithoutFirst = permute(rest);
  const allPermutations = [];
  permsWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [
        ...perm.slice(0, i),
        firstElement,
        ...perm.slice(i),
      ];
      allPermutations.push(permWithFirst);
    }
  });
  return allPermutations;
};

console.log(permute([1, 2, 3]));
