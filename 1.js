class Students {
  constructor(name, age, standard) {
    this.name = name
    this.age = age
    this.standard = standard
  }

  getDetails() {
    console.log(
      this.name +
        " age is " +
        this.age +
        " and the person studies in " +
        this.standard +
        " standard."
    )
  }
}

function Students(name, age, standard) {
  this.name = name
  this.age = age
  this.standard = standard
  this.getDetails = function getDetails() {
    console.log(
      this.name +
        " age is " +
        this.age +
        " and the person studies in " +
        this.standard +
        " standard."
    )
  }
}

var Y = new Students("Abhishek Verma", 20, 12)
Y.getDetails()
