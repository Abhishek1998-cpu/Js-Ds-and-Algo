function myDisplayer(some) {
  //   document.getElementById("demo").innerHTML = some;
  console.log(some);
}

let myPromise = new Promise(function (Resolve, Reject) {
  let x = 0;
  setTimeout(() => {
    if (x == 5) {
      Resolve("OK");
    } else {
      Reject("Error");
    }
  }, 1000);
});

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

myPromise
  .then((res) => {
    myDisplayer(res);
  })
  .catch((err) => {
    myDisplayer(err);
  });
