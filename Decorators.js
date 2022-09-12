// Decorators - Wrap a function inside another function
// They add or decorate the original function with more capabilities

// Example 1:
// Use closure to log how many times a function is called

let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num)
}

const callCounter = (fn) => {
  let count = 0
  return (...args) => {
    console.log(`Sum has been called ${(count += 1)} times`)
    return fn(...args)
  }
}

sum = callCounter(sum)

console.log(sum(1, 2, 3))
console.log(sum(4, 5))
console.log(sum(6, 7))
