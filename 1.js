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
let developer1 = { name: "Abhishek" };
let developer2 = JSON.parse(JSON.stringify(developer1));
developer2.name = "Varun";

console.log(developer1);
console.log(developer2);
