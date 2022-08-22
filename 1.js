// Example of Promises

// const res = () => {
//     return new Promise((resolve, reject)=>{
//  fetch("https://dummyjson.com/products").then(res => {resolve(res)}).catch((err) => {
//      reject(err)
//  })
// }

import fetch from "node-fetch";
const res = new Promise(function (Resolve, Reject) {
  fetch("https://dummyjson.com/products")
    .then((res) => Resolve(res))
    .catch((err) => Reject(err));
});

res
  .then((res) => {
    console.log("Data = " + res);
  })
  .catch((err) => {
    console.log("Err = " + err);
  });
