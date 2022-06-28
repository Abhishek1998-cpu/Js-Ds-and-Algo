// Async Await Example

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (location === "Google") {
        resolve("Google say Yes");
      } else {
        reject("Google say No");
      }
    }, 1000);
  });
}

// const res = makeRequest("Google");
// res
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function doWork() {
  try {
    const res = await makeRequest("Google");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

doWork();
