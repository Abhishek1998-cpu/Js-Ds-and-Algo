// Call, Apply, Bind example - Important

// Call Example 
// let userDetails = {
//     name: "Abhishek Verma",
//     age: 24,
//     designation: "Software Engineer",
//     printDetails: function(){
//         console.log(`${this.name} is a ${this.designation}. He is of ${this.age} years old.`)
//     }
// }

// let userDetails2 = {
//     name: "Sample User",
//     age: 20,
//     designation: "Engineer"
// }

// Call is an example of function borrowing 
// userDetails.printDetails.call(userDetails2)
// console.log("Hello World")

// Call Example - 2 - Using generic function or component

// There is one generic function / Common function 
// We need to use this function with any Object 
// So we can use call 

// let userDetails = {
//     name: "Abhishek Verma",
//     age: 24,
//     designation: "Software Engineer",

// }

// let userDetails2 = {
//     name: "Sample User",
//     age: 20,
//     designation: "Engineer"
// }

// function printDetails(){
//     console.log(`${this.name} is a ${this.designation}. He is of ${this.age} years old.`)
// }

// printDetails.call(userDetails)
// printDetails.call(userDetails2)

// Call example - 3 - Passing an argument

// let userDetails = {
//     name: "Abhishek Verma",
//     age: 24,
//     designation: "Software Engineer",

// }

// let userDetails2 = {
//     name: "Sample User",
//     age: 20,
//     designation: "Engineer"
// }

// function printDetails(city, state){
//     console.log(`${this.name} is a ${this.designation}. He is of ${this.age} years olds, he lives in ${city}, ${state}.`)
// }

// printDetails.call(userDetails)
// printDetails.call(userDetails, "Lucknow", "Uttar Pradesh")
// printDetails.call(userDetails2, "Hyderabad", "Telangana")

// Apply Example 

// Only difference between call and apply - 
// call can multiple arguments one by one seperated by comma 
// apply can take multiple arguments all in one array 

// let userDetails = {
//     name: "Abhishek Verma",
//     age: 24,
//     designation: "Software Engineer",

// }

// let userDetails2 = {
//     name: "Sample User",
//     age: 20,
//     designation: "Engineer"
// }

// function printDetails(city, state){
//     console.log(`${this.name} is a ${this.designation}. He is of ${this.age} years olds, he lives in ${city}, ${state}.`)
// }

// printDetails.apply(userDetails)
// printDetails.apply(userDetails, ["Lucknow", "Uttar Pradesh"])
// printDetails.apply(userDetails2, ["Hyderabad", "Telangana"])

// Bind Example 
// Instead of calling function on the stop you can save it to a variable and then call it later 

let userDetails = {
    name: "Abhishek Verma",
    age: 24,
    designation: "Software Engineer",

}

let userDetails2 = {
    name: "Sample User",
    age: 20,
    designation: "Engineer"
}

function printDetails(city, state){
    console.log(`${this.name} is a ${this.designation}. He is of ${this.age} years olds, he lives in ${city}, ${state}.`)
}

var f1 = printDetails.bind(userDetails)
var f2 = printDetails.bind(userDetails, "Lucknow", "Uttar Pradesh")
var f3 = printDetails.bind(userDetails2, "Hyderabad", "Telangana")
f1()
f2()
f3()