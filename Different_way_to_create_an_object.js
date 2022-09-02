// 1st Method - using class keyword
// class person{
//     constructor(name, age, profession){
//         this.name = name
//         this.age = age
//         this.profession = profession
//     }
// }

// 2nd Method - function constructor
// function person(name, age, profession){
//     this.name = name
//     this.age = age
//     this.profession = profession
// }

// 3rd Method - using object literals 
// const obj = {}
// obj["name"] = "Abhishek"
// obj["age"] = 25
// obj["profession"] = "SDE"

// 4th Method - using object.create
const obj = {}
const newObj = Object.create(obj)
newObj["name"] = "Abhishek"
newObj["age"] = 25
newObj["profession"] = "SDE"


// const p1 = new person("Abhishek", 25, "SDE")
// console.log(p1)
// console.log(obj)
console.log(newObj)