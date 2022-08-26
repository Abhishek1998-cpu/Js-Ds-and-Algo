var hashMap = new Map()
function sumMemo(a,b){
    if(hashMap.has([a,b].toString())){
        console.log("Result from HashMap")
        return hashMap.get([a,b].toString())
    }else{
        console.log("Result from Calculation")
        hashMap.set([a,b].toString(), a + b)
        return a + b
    }
}

console.log(sumMemo(10,20))
console.log(sumMemo(10,20))