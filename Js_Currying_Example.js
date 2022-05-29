// Js Currying -
// Developed by Haskell Curry
// It is a Technique of Functional Programming
// Function which is accepting multiple arguments
// is being converted into the several function which is accepting single argument in sequence

// Example -

function findVolume(length, breadth, height) {
  return length * breadth * height;
}

// Syntactical Change in the function as the Currying Technique is applied
function findVolume2(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}

console.log(findVolume(5, 5, 5));
console.log(findVolume2(5)(5)(5));
