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