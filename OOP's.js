// OOP's Concept with JavaScript

// Creation of a simple Object
class Students {
  constructor(name, age, standard) {
    // The fetched name is on the RHS of this.name = name
    // We can also write this.nameOfStudent = name, it means that the fetched name is now assigned to nameOfStudent property of the Students Object
    // this is representing the Students Object
    this.name = name;
    this.age = age;
    this.standard = standard;
  }

  // Example of Instance Method
  bioData() {
    console.log("Hello I am Abhishek " + this.name);
  }
}

// Inheritance - Using the instance methods and properties of the Parent class, We can do it here with the help of "extends" keyword
// Using Inheritance
class Players extends Students {}

const X = new Students("Verma");
const Y = new Players("Rohan");
X.bioData();
Y.bioData();

// 23.41
