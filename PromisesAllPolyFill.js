let p1 = () => {
  return new Promise((Resolve, Reject) => {
    let data = 100;
    setTimeout(() => {
      if (data === 100) {
        Resolve("Data fetched Successfully");
      } else {
        Reject("Error in fetching the Data");
      }
    }, 1000);
  });
};

let p2 = () => {
  return new Promise((Resolve, Reject) => {
    let data = 100;
    setTimeout(() => {
      if (data === 100) {
        Resolve("Data fetched Successfully");
      } else {
        Reject("Error in fetching the Data");
      }
    }, 3000);
  });
};

let p3 = () => {
  return new Promise((Resolve, Reject) => {
    let data = 500;
    setTimeout(() => {
      if (data === 500) {
        Resolve("Data fetched Successfully");
      } else {
        Reject("Error in fetching the Data");
      }
    }, 5000);
  });
};

// Promise.all([p1(), p2(), p3()]).then((res) => {
//     console.log("Res ::: ", res)
// }).catch(err => {
//     console.log("Err ::: ", err)
// })

const promisePolyfill = (arrayOfPromises) => {
  return new Promise((resolve, reject) => {
    const output = [];
    // for (let i = 0; i < arrayOfPromises?.length; i++) {
    //   arrayOfPromises[i]
    //     .then((res) => {
    //       console.log("Data is -> ", res);
    //       output[i] = res;
    //       if (i === arrayOfPromises?.length - 1) {
    //         resolve(output);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log("Err ::: ", err);
    //       reject(err);
    //     });
    // }
    arrayOfPromises.forEach((promise, index) => {
      promise
        .then((res) => {
          console.log("New ::: ", res);
          output[index] = res;
          if (index === arrayOfPromises?.length - 1) {
            resolve(output);
          }
        })
        .catch((err) => {
          console.log("Err ::: ", err);
          reject(err);
        });
    });
  });
};

promisePolyfill([p1(), p2(), p3()])
  .then((res) => {
    console.log("Res ::: ", res);
  })
  .catch((err) => {
    console.log("Err ::: ", err);
  });

// p1().then(res => console.log(res)).catch(err => console.log(err))
// p2().then(res => console.log(res)).catch(err => console.log(err))
// p3().then(res => console.log(res)).catch(err => console.log(err))

// console.log(promiseAll)
// const getResponse = async () => {
//     try{
//     const res = await p1()
//     console.log("Res ::: ", res)
//     }catch(err){
//         console.log("Err ::: ", err)
//     }
// }

// getResponse()
