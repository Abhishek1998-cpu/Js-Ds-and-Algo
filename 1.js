// Implement Memoization
// Deep flatten an array in Js - all Methods
// Deep flatten of an Object in Js - all Methods
// Promise basic Implementation
// Async Await basic Implementation
// Promise.all Implementation
// Call, Apply, Bind Implementation
// Shallow Copy and Deep Copy Implementation
// Implementation of Debouncing and Throttling
// Implementation of Event Propagation

// Memoization Implementation
// const HashMap = new Map()

// const AddTwoNumber = (num1, num2)=>{
//     console.log(HashMap)
//     if(HashMap.has([num1, num2].toString())){
//         console.log("Memoized Value")
//         return HashMap.get([num1, num2].toString())
//     }else{
//         console.log("Calc Value")
//         HashMap.set([num1, num2].toString(), num1 + num2)
//         return num1 + num2
//     }
// }

// console.log(AddTwoNumber(10,20))
// console.log(AddTwoNumber(10,20))

// Flattening of an Array

// const New = [[1,2],[3,4],[[[5,6],[7,8]],[9,10]],[11,12]]

// 1st
// console.log(New.flat())

// 2nd
// console.log([].concat(...New))

// 3th
// console.log([].concat.apply([], New))

// 4th
// const flattenArray = New.reduce((acc, curVal) => {
//     return acc.concat(curVal)
// })
// console.log(flattenArray)

// Deep Flattening of an Array

// const New = [[1,2],[3,4],[[[5,6],[7,8]],[9,10]],[11,12]]

// 1st
// console.log(New.flat(Infinity))

// 2nd Method

// const DeepFlattenArray = (arr) => {
//     var newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             newArr = newArr.concat(DeepFlattenArray(arr[i]))
//         }else{
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(DeepFlattenArray(New))

// Flattening of an Object to Single level / Deep Flattening of an Object

// const obj = {
//     name: "Abhishek",
//     profession: {
//         title: "Engineer",
//         industry: "Software"
//     },
//     address: {
//         state: {
//             name: "Uttar Pradesh",
//             city: {
//                 name: "Gorakhpur"
//             }
//         }
//     }
// }

// const DeepFlattenObject = (obj) => {
//     let res = {}
//     for(const item in obj){
//         if((typeof obj[item] === "object") && !Array.isArray(obj[item])){
//             const temp = DeepFlattenObject(obj[item])
//             for(const tempItem in temp){
//                 res[`${item}` + "." + `${tempItem}`] = temp[tempItem]
//             }
//         }else{
//             res[item] = obj[item]
//         }
//     }
//     return res
// }

// console.log(DeepFlattenObject(obj))

// let fetchData = new Promise((Resolve, Reject) => {
//   let data = 100;
//   setTimeout(() => {
//     if (data === 10) {
//       Resolve("Data fetched Successfully");
//     } else {
//       Reject("Error in fetching the Data");
//     }
//   }, 3000);
// });

// fetchData.then((res) => console.log(res)).catch((err) => console.log(err));

// let fetchData = () => {
//   return new Promise((Resolve, Reject) => {
//     let data = 100;
//     setTimeout(() => {
//       if (data === 100) {
//         Resolve("Data fetched Successfully");
//       } else {
//         Reject("Error in fetching the Data");
//       }
//     }, 3000);
//   });
// };

// async function getData() {
//   try {
//     const res = await fetchData();
//     console.log(res)
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData();

// Promise.all Implementation

// let p1 = new Promise((Resolve, Reject) => {
//   let data = 100;
//   setTimeout(() => {
//     if (data === 100) {
//       Resolve("Data fetched Successfully");
//     } else {
//       Reject("Error in fetching the Data");
//     }
//   }, 3000);
// });

// let p2 = new Promise((Resolve, Reject) => {
//   let data = 100;
//   setTimeout(() => {
//     if (data === 100) {
//       Resolve("Data fetched Successfully");
//     } else {
//       Reject("Error in fetching the Data");
//     }
//   }, 3000);
// });

// let p3 = new Promise((Resolve, Reject) => {
//   let data = 100;
//   setTimeout(() => {
//     if (data === 1001) {
//       Resolve("Data fetched Successfully");
//     } else {
//       Reject("Error in fetching the Data");
//     }
//   }, 3000);
// });


// Promise.all([p1,p2,p3]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// Call, Apply, Bind  Implementation

// const obj = {
//     name: "Abhishek",
//     printName: function(city,  state) {
//         console.log(`The name of the person is ${this.name}. He lives in ${city}, ${state}`)
//     }
// }

// const obj2 = {
//     name: "Rahul"
// }

// obj.printName.call(obj2, "Gorakhpur", "Uttar Pradesh")
// obj.printName.apply(obj2, ["Gorakhpur", "Uttar Pradesh"])

// const callFunction = obj.printName.bind(obj2, "Gorakhpur", "Uttar Pradesh")
// callFunction()

// Shallow Copy and Deep Copy Implementation 

const obj = {
    name: "Abhishek"
}

// Shallow Copy Creation 
// const obj2 = obj 
// obj2.name = "Verma"
// console.log(obj)
// console.log(obj2)

// Deep Copy Creation 

// 1st 
// const obj2 = {...obj}
// obj2.name = "Verma"
// console.log(obj)
// console.log(obj2)

// 2nd 
// const obj2 = JSON.parse(JSON.stringify(obj))
// obj2.name = "Verma"
// console.log(obj)
// console.log(obj2)

// 3rd 
// const obj2 = Object.create(obj, {})
// obj2.name = "Verma"
// console.log(obj)
// console.log(obj2)