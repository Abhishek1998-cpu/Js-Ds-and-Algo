// const X = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Resolved");
//   }, 4000);
//   // rej("Error")
// });

// X.then((res) => {
//   console.log("Res -> ::: ", res);
// }).catch((err) => {
//   console.log("Err -> ::: ", err);
// });

class myPromise {
  constructor(executor) {
    this.onSuccess = null;
    this.onFailed = null;
    this.then = function (cb) {
      this.onSuccess = cb;
      return this; // for then catch block chaining
    };
    this.catch = function (cb) {
      this.onFailed = cb;
      return this;
    };

    executor(this.resolve, this.reject);
  }
  resolve = (params) => {
    // this params is passed from the res function called in the body of Promise
    this.onSuccess(params)
  };
  reject = (err) => {
    console.error("Err => ", err);
  };
}

const X = new myPromise((res, rej) => {
  setTimeout(() => {
    res("Good Data");
  }, 4000);
  // rej("Error")
});

X.then((res) => {
  console.log("Res -> ::: ", res);
}).catch((err) => {
  console.log("Err -> ::: ", err);
});
