// const lodash = require("lodash")
import lodash from "lodash";

const obj1 = {
  name: "Abhishek",
  profession: "Developer",
};

// Creation of the Shallow copy - Directly copying an object into another variable
// const obj2 = obj1

// 1st Method of creating a Deep copy using parse and stringify - Not Applicable for complex and nested object's
// const obj2 = JSON.parse(JSON.stringify(obj1))

// 2nd Method of creating a Deep copy using lodash library - Perfect for Deep copy
const obj2 = lodash.cloneDeep(obj1);
obj2.name = "Raj";

console.log(obj1);
console.log(obj2);

// It's always better the Deep copy and Object
