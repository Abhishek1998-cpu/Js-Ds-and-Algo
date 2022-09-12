// Other language - class inherits class 
// Js - Object inherit Object 

// Inheritance – It is a concept in which some properties and methods of an Object are being used by another Object.
// super keyword - It is used to refer to the immediate parent class’s instance variable. 
class person{
    constructor(name, gender){
        this.name = name
        this.gender = gender
    }
}

class personDetails extends person{
    constructor(name, gender, profession){
        super(name, gender)
        this.profession = profession
    }
}

const p2 = new personDetails("Abhishek","Male", "Engineer")
console.log(p2)




// Inheritance Implementation Example 2 

// class person{
//     constructor(name){
//         this.name = name
//     }
//     toString(){
//         return `Name of the person is ${this.name}`
//     }
// }

// class personId extends person{
//     constructor(name, id){
//         super(name)
//         this.id = id
//     }
//     toString(){
//         return `${super.toString()}, Id of the person is ${this.id}`
//     }
// }

// const p1 = new personId("Rahul", 23)
// console.log(p1.toString())