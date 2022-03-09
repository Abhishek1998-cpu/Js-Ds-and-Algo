// OOP's Concept with JavaScript

// Creation of a simple Object

// Whenever we create a instance or an object from the class then the constructor is called by default

class Students {
  constructor(userName, age, standard) {
    // The fetched name is on the RHS of this.name = name
    // We can also write this.nameOfStudent = name, it means that the fetched name is now assigned to nameOfStudent property of the Students Object
    // this is representing the Students Object
    this.name = userName;
    this.age = age;
    this.standard = standard;
  }

  // Example of Instance Method
  bioData = () => {
    console.log("Hello I am Abhishek " + this.name);
  };

  // Example of Static Method
  //   static bioData() {
  //     console.log("Hello I am Abhishek " + this.name);
  //   }
}

// Inheritance - Using the instance methods and properties of the Parent class, We can do it here with the help of "extends" keyword
// Using Inheritance we cannot access the static method of the parent class
// Inherited class such as Players is also known as Derived class
// Using Inheritance
class Players extends Students {
  constructor(userName, age, standard, game) {
    super(userName, age, standard);
    // If we don't use super() here then this error will be thrown -> Must call super constructor in derived class
    // super() is like asking the parent class to provide it's constructor to join with this constructor
    this.game = game;
  }
  bioData = () => {
    console.log(`${this.name} + ${this.age} + ${this.standard} + ${this.game}`);
  };
}

// const X = new Students("Verma");
const Y = new Players("Abhishek", "25", "B.Tech", "Wreslting");
// X.bioData();
Y.bioData();

// 23.41
