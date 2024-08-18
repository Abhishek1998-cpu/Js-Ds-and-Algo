// function* simpleGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generatorObj = simpleGenerator(); // This will not execute the code line by line as per the function body, this will create next function on calling of which the function body get's executed
// console.log("Gen ::: ", generatorObj);

// const next = generatorObj?.next();
// console.log("Next ::: ", next); // Next :::  { value: 1, done: false }
// // value = Value which is return by the Generator Function to the generatorObj
// // done = more code ahead to run or not

// const next2 = generatorObj?.next();
// console.log("Next ::: ", next2);

// const next3 = generatorObj?.next();
// console.log("Next ::: ", next3);

// const next4 = generatorObj?.next();
// console.log("Next ::: ", next4);

// const next5 = generatorObj?.return(15);
// console.log("Next ::: ", next5);

// const next6 = generatorObj?.throw(new Error("This is wrong"));
// console.log("Next ::: ", next6);

// Use cases (Not many uses) -

// Infinite Loop -
// Normal Infinite Loop using for or something will freeze the system, but this will not

// function* generateId() {
//   let id = 1;
//   while (true) {
//     yield id;
//     id++;
//   }
// }

// const generatorObject = generateId();
// console.log(generatorObject.next());

// Notes -

// The asterisk (*) after the function tell's the Js that simpleGenerator
// is not a normal function it's the Generator Function

// yield is a kind of special type of return keyword that is only used inside of a generator function

// Generator function returns us a generator object
