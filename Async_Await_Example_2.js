function fetchData(data) {
  return new Promise((resolve, reject) => {
    if (data == "Available") {
      resolve("Data is Available")
    } else {
      reject("Data is Not Available")
    }
  })
}

// Promises
// fetchData("Not Available")
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// Async Await

;(async function getData() {
  const res = await fetchData("Available")
  try {
    console.log(res)
  } catch (error) {
    console.log(error)
  }
})()
