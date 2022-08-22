// Other language - class inherits class 
// Js - Object inherit Object 

// Inheritance – It is a concept in which some properties and methods of an Object are being used by another Object.

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