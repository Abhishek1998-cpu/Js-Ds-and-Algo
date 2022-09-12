const Obj = {
  name: "Abhishek",
  profession: {
    title: "Engineer",
    industry: "Software",
  },
  address: {
    city: {
      name: "Lucknow",
      pincode: "273001",
    },
  },
};

// Flattening of Js Object into single Depth Object / Example of Deep Flattening of an object - Recursive Function
const flattenObj = (obj) => {
    let res = {}
    for(const item in obj){
        if((typeof obj[item] === "object") && !Array.isArray(obj[item])){
            const temp = flattenObj(obj[item])
            for(const tempItem in temp){
                res[`${item}` + "." + `${tempItem}`] = temp[tempItem] 
            }
        }else{
            res[item] = obj[item]
        }
    }
    return res
}

console.log(flattenObj(Obj))