const obj = {
    name: "Abhishek",
    print: function(){
        // We want to use the this of this function in the arrow function  
        // return () => {
        //     console.log(`My name is ${this.name}`)
        //     return
        // }
        return () => {
            console.log(`My name is ${this.name}`)
            return
        }
    },
    print2: () => {
        console.log(`My name is ${this.name}`)
        return
    }
}

console.log(obj.print()())
console.log(obj.print2())