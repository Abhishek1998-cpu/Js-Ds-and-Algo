// Program Fibonacci Series upto Nth term 

// f(n) = f(n-1) + f(n-2)

const printFib = (num) => {
    var X = [0,1]
    if(num == 0){
        return 0
    }
    if(num == 1){
        return 1
    }
    var firstNumber = 0
    var secondNumber = 1
    return num
}

function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}

console.log(fib(10))