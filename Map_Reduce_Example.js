// Find the Number of People having same age
// for example - {25: 3, 75: 3, 40: 3}

const users = [
  { fName: "Abhishek", lName: "Verma", age: 25 },
  { fName: "Rahul", lName: "Verma", age: 75 },
  { fName: "Rohit", lName: "Verma", age: 40 },
  { fName: "Jyoti", lName: "Verma", age: 25 },
  { fName: "Kumar", lName: "Verma", age: 75 },
  { fName: "Sanu", lName: "Verma", age: 40 },
  { fName: "Chad", lName: "Verma", age: 25 },
  { fName: "Roman", lName: "Verma", age: 75 },
  { fName: "Kane", lName: "Verma", age: 40 },
];

const filteredUsers = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

const fNames = users
  .filter((element, index) => {
    if (element.age < 30) {
      return element.fName;
    }
  })
  .map((element, index) => {
    return element.fName;
  });

console.log(filteredUsers);
console.log(fNames);
