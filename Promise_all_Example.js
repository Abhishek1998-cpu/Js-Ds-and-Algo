// Promise.all - Getting the result of the different promises at a time
// If all the promise get resolved then then() will be called
// If any of the promise get reject then catch() will be called

// Example of a Simple Promise and it's Syntax
// let p1 = new Promise((res, rej)=>{
//     const a = 100
//     if(a === 100){
//         res("a is equal to 100")
//     }else{
//         rej("a is not equal to 100")
//     }
// })

// p1.then((res)=>console.log(res)).catch((err)=>{
//     console.log(err)
// })

// Exmaple of Promise all - Execution of the then block

let p2 = new Promise((res, rej) => {
  const a = 90;
  if (a === 90) {
    res("a is equal to 90");
  } else {
    rej("a is not equal to 90");
  }
});

let p3 = new Promise((res, rej) => {
  const a = 80;
  if (a === 800) {
    res("a is equal to 80");
  } else {
    rej("a is not equal to 80");
  }
});

let p4 = new Promise((res, rej) => {
  const a = 70;
  if (a === 70) {
    res("a is equal to 70");
  } else {
    rej("a is not equal to 70");
  }
});

// Promise.all([p2, p3, p4])
Promise.allSettled([p2, p3, p4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Exmaple of Promise all - Execution of the catch block

// let p5 = new Promise((res, rej) => {
//   const a = 90;
//   if (a === 90) {
//     res("a is equal to 90");
//   } else {
//     rej("a is not equal to 90");
//   }
// });

// let p6 = new Promise((res, rej) => {
//   const a = 80;
//   if (a === 10) {
//     res("a is equal to 80");
//   } else {
//     rej("a is not equal to 80");
//   }
// });

// let p7 = new Promise((res, rej) => {
//   const a = 70;
//   setTimeout(() => {
//     if (a === 70) {
//       res("a is equal to 70");
//     } else {
//       rej("a is not equal to 70");
//     }
//   }, 3000);
// });

// Promise.all([p5, p6, p7])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
