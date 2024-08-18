// // # Case 1
// const obj = {
//     name: "Abhishek",
//     print: function(){
//         // We want to use the this of this function in the arrow function
//         // return () => {
//         //     console.log(`My name is ${this.name}`)
//         //     return
//         // }
//         return () => {
//             console.log(`My name is ${this.name}`)
//             return
//         }
//     },
//     print2: () => {
//         console.log(`My name is ${this.name}`)
//         return
//     }
// }

// console.log(obj.print()())
// console.log(obj.print2())

// # Case 2
// Note - this keyword in undefined in arrow function as it does not point's to the object of
// which a function is a part of.
// arguments keyword behave differently in Normal and Arrow Function's -> In Normal Function you will be getting the normal arguments
// object but in Arrow Function you will get something different as arguments binding does not exist for Arrow Function

const Obj = {
  address: "Gorakhpur",
  namedFunction: function (name) {
    console.log(arguments);
    console.log(`${name} is living in ${this.address}`);
  },
  arrowFunction: (name) => {
    console.log(arguments);
    console.log(`${name} is living in ${this.address}`);
  },
};

Obj.namedFunction("Abhishek");
Obj.arrowFunction("Abhishek");
