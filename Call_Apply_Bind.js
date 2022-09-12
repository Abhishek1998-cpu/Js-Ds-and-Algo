// Call, Apply and Bind Method in Js

// Call Method - point to other object
// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu ",
//   getPokeName: function (profile, age) {
//     var fullname =
//       this.firstname +
//       " " +
//       this.lastname +
//       " He is a " +
//       profile +
//       " He is " +
//       age +
//       " years old."
//     console.log(fullname)
//     return fullname
//   },
// }

// var Abhishek = {
//   firstname: "Abhishek",
//   lastname: "Verma",
// }

// pokemon.getPokeName.call(Abhishek, "Software Engineer", 25)

// Difference between call and apply - apply accepts only one argument as an array

// Apply Method - point to other object
// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu ",
//   getPokeName: function (profile, age) {
//     var fullname =
//       this.firstname +
//       " " +
//       this.lastname +
//       " He is a " +
//       profile +
//       " He is " +
//       age +
//       " years old."
//     console.log(fullname)
//     return fullname
//   },
// }

// var Abhishek = {
//   firstname: "Abhishek",
//   lastname: "Verma",
// }

// pokemon.getPokeName.apply(Abhishek, ["Software Engineer", 25])

// Bind Method - Exactly same as Call Method, it returns a new function which can be invoked later

var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function (profile, age) {
    var fullname =
      this.firstname +
      " " +
      this.lastname +
      " He is a " +
      profile +
      " He is " +
      age +
      " years old."
    console.log(fullname)
    return fullname
  },
}

var Abhishek = {
  firstname: "Abhishek",
  lastname: "Verma",
}

var newFunc = pokemon.getPokeName.bind(Abhishek, "Software Engineer", 25)
newFunc()
// 12:48
