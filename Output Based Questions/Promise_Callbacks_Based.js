// Output Question based on Promises, Callbacks, Async Await
// Ref - https://www.youtube.com/watch?v=HaJdoFp2OEc

// Notes -
// Promises are the asynchronous code
// Promise are used to handle the asynchronous code
// Js execute Synchronous code first and then Asynchronous code

// Scenario 1 - Js executing setTimeout asynchronously because it is a part of the Web API's

// console.log("start")

// function importantAction(userName){
//     setTimeout(() => {
//         return `Subscribe to ${userName}`
//     }, 0)
// }

// const message = importantAction("Abhishek Verma")
// console.log(message) // Here we will be getting undefined
// console.log("stop")
// console.log(message) // Here we will be getting undefined

// Scenario 2 - In the above question consoling the message with the help of callback function

// console.log('start')

// function importantAction(userName, callBack){
//     setTimeout(() => {
//         callBack(`Subscribe to ${userName}`)
//     }, 0)
// }

// const message = importantAction("Abhishek Verma", function(newMessage){
//     console.log(newMessage)
// })

// console.log("stop")

// Scenario 3 - About Promise Chaining

// Scenario 4 - Promise Combinator's - 4 types -

// Promise.all, Promise.race, Promise.allSettled, Promise.race - have same syntax

// 1. Promise.all

// 2. Promise.race - We get the result of that promises which is resolve or rejected first

// 3. Promise.allSettled - Same as promise.all but it will return the res even if a promise get rejected

// let p2 = new Promise((res, rej) => {
//     const a = 90;
//     if (a === 90) {
//       res("a is equal to 90");
//     } else {
//       rej("a is not equal to 90");
//     }
//   });

//   let p3 = new Promise((res, rej) => {
//     const a = 80;
//     if (a === 800) {
//       res("a is equal to 80");
//     } else {
//       rej("a is not equal to 80");
//     }
//   });

//   let p4 = new Promise((res, rej) => {
//     const a = 70;
//     if (a === 70) {
//       res("a is equal to 70");
//     } else {
//       rej("a is not equal to 70");
//     }
//   });

//   Promise.allSettled([p2, p3, p4])
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// 4. Promise.any - It only returns the first fullfilled promise and ignore the rejected one, it will be giving error only if all the promises are rejected

// Scenario 5 - Promise based output question

// console.log("start")

// // Here the promise will be initialized and the Synchronuos code inside it will be executed
// // That's why console.log(1) get executes after start. Also if we comment then and catch block then 1 will get printed after start
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })

// // This will be the asynchronous operation
// promise1.then((res) => {
//     console.log(res)
// })

// console.log("end")

// Scenario 6 - Output based question

// console.log("start")

// // Here the promise will be initialized and the Synchronuos code inside it will be executed
// // That's why console.log(1) get executes after start. Also if we comment then and catch block then 1 will get printed after start
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })

// // This will be the asynchronous operation
// promise1.then((res) => {
//     console.log(res)
// })

// console.log("end")

// Scenario 7 - Output based question

// console.log("start")

// // Here the promise will be initialized and the Synchronuos code inside it will be executed
// // That's why console.log(1) get executes after start. Also if we comment then and catch block then 1 will get printed after start
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     console.log(3)
// })

// // This will be the asynchronous operation but there is a twist
// // This block will not get executed as the Promise is not resolved
// promise1.then((res) => {
//     console.log(res)
// })

// console.log("end")

// Scenario 8 - Output based question

// console.log("start")

// const fn = () => {
//     return new Promise((resolve, reject) => {
//         console.log(1)
//         resolve("success")
//     })
// }

// console.log("middle")

// // Here the function is executed and console.log(1) will be printed
// // But just after that end will be printed as promise resolution and printed it's result will be done asynchronously
// fn().then((res) => {
//     console.log(res)
// })

// console.log("end")

// // output -
// // start
// // middle
// // 1
// // end
// // success

// Scenario 9 - Output based question

// function job(){
//     return new Promise(function (resolve, reject){
//         reject()
//     })
// }

// let promise = job()

// // then block after the catch block will also execute
// promise.then(function(){
//     console.log("Success 1")
// }).then(function(){
//     console.log("Success 2")
// }).then(function(){
//     console.log("Success 3")
// }).catch(function(){
//     console.log("Error 1")
// }).then(function(){
//     console.log("Success 4")
// })

// // Output -
// // Error 1
// // Success 4

// Scenario 10 - Output based question

// function job(state){
//     return new Promise((resolve, reject) => {
//         if(state){
//             resolve("success")
//         }else{
//             reject("error")
//         }
//     })
// }

// let promise = job(true)

// promise.then(function(data){
//     console.log(data)
//     return job(false)
// }).catch(function(error){
//     console.log(error)
//     return "Error Caught"
// }).then(function(data){
//     console.log(data)
//     return job(true)
// }).catch(function(error){
//     console.log(error)
// })

// Output -
// success
// error
// Error Caught

// Scenario 11 - Promise chaining

// const firstPromise = new Promise((resolve, reject) => {
//     resolve("First!")
// })

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise)
// })

// secondPromise.then((res) => {
//     return res
// }).then((res) => {
//     console.log(res)
// })

// output -
// First!

// Scenario 12 - Promise Output based

// function loadJson(url){
//     return fetch(url).then((response) => {
//         if(response.status === 200){
//             return response.json()
//         }else{
//             throw new Error(response.status)
//         }
//     })
// }

// loadJson("https://dummyjson.com/products-no/1").catch((err) => {
//     console.log(err)
// })

// // Question Statement - Convert the Above into Async Await

// async function loadJson(url){
//     try {
//         const res = await fetch(url)
//         if(res.status === 200){
//             return res.json()
//         }else{
//             throw new Error(res.status)
//         }
//     } catch (error) {
//         // pass
//     }
// }

// async function getOutput(){
//     try {
//         const output = await loadJson("https://dummyjson.com/products-no/1")
//         // Do nothing
//     } catch (error) {
//         console.log(error)
//     }
// }

// getOutput()

// Scenario 14 - Write the function "promRecurse" to resolve promise recursively

// function Promise1(){
//     return new Promise(function(Resolve, Reject){
//         Resolve("Promise 1 resolved")
//     })
// }

// function Promise2(){
//     return new Promise(function(Resolve, Reject){
//         Resolve("Promise 2 resolved")
//     })
// }

// function Promise3(){
//     return new Promise(function(Resolve, Reject){
//         Resolve("Promise 3 resolved")
//     })
// }

// promRecurse([
//     Promise1(),
//     Promise2(),
//     Promise3()
// ])

// function promRecurse(arrayOfFunctionPromises){
//     if(arrayOfFunctionPromises.length === 0){
//         return
//     }
//     const currPromise = arrayOfFunctionPromises.shift()
//     currPromise.then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })
//     promRecurse(arrayOfFunctionPromises)
// }

// Scenario 15 - Create a Polyfill function for Simple Promises

// This will be working for both Synchronous and Asynchronous code
function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFulFilled = false,
    isCalled = false,
    value,
    isRejected = false;
  function resolve(val) {
    isFulFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(val) {
    isRejected = true 
    value = val
    if(typeof onReject === "function"){
        onReject(val)
        isCalled = true
    }
    // onReject(val);
  }
  this.then = function (callBack) {
    onResolve = callBack;
    if (isFulFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (callBack) {
    onReject = callBack;
    if (isRejected && !isCalled) {
        isCalled = true;
        onReject(value);
      }
    return this;
  };
  try {
    executor(resolve, reject)
  } catch (error) { 
    reject(error)
  }
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
//   resolve(2);
  reject(2);
  }, 3000)
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 59.41 - Polyfills for all method of Promises - Required only in Senior Level Interview
