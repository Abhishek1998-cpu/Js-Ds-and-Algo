// Example of Promises - API Call

// import fetch from "node-fetch";
// const res = new Promise(function (Resolve, Reject) {
//   fetch("https://dummyjson.com/products/1")
//     .then((res) => Resolve(res))
//     .catch((err) => Reject(err));
// });

// res
//   .then((res) => {
//     console.log("Data = " + JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log("Err = " + JSON.stringify(err));
//   });

// Example of Async Await - API Call

import fetch from "node-fetch";
const res = new Promise(function (Resolve, Reject) {
  fetch("https://dummyjson.com/products/1")
    .then((res) => Resolve(res))
    .catch((err) => Reject(err));
});

const getData = async () => {
  try {
    const result = await res;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getData();
