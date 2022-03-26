// Finding factorial with the help of recursion 

class factorial{
    constructor(){
        this.ans = 0
    }

    findFactorial(num){
        if(num<=1){
            return 1
        }else{
            this.ans = num * this.findFactorial(num - 1)
        }
        return this.ans
    }
}

var X = new factorial()
console.log(X.findFactorial(10))