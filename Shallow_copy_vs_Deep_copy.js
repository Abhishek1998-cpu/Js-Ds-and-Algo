// Shallow Copy vs Deep Copy

// Example of a Shallow Copy
// Name of Developer 1 is also changed when we change the Name of Developer 2
// let developer1 = { name: "Abhishek" };
// let developer2 = developer1;
// developer2.name = "Varun";

// console.log(developer1);
// console.log(developer2);

// Example of a Deep Copy
// Name of Developer 1 does not changes when we change the Name of Developer 2
let developer1 = { name: "Abhishek" }
let developer2 = JSON.parse(JSON.stringify(developer1))
developer2.name = "Varun"

console.log(developer1)
console.log(developer2)


// New Changes 

// Creation of a Shallow copy

// const obj = {
//     name: "Abhishek Verma",
//     age: 20,
//     profile: "SDE"
// }

// const obj2 = obj
// obj2["name"] = "Rahul"

// console.log(obj2)
// console.log(obj)

// Creation of a Deep copy 

// 1st Method - parse and stringify method 
// const obj = {
//     name: "Abhishek Verma",
//     age: 20,
//     profile: "SDE"
// }

// const obj2 = JSON.parse(JSON.stringify(obj))
// obj2["name"] = "Rahul Verma"

// 2nd Method - Using spread operator 
// const obj = {
//     name: "Abhishek Verma",
//     age: 20,
//     profile: "SDE"
// }

// const obj2 = {...obj}
// obj2["name"] = "Rahul Verma"

// 3rd Method - using Object.assign method 
// const obj = {
//     name: "Abhishek Verma",
//     age: 20,
//     profile: "SDE"
// }

// const obj2 = Object.assign({}, obj)
// obj2["name"] = "Rahul Verma"

console.log(obj2)
console.log(obj)
