let temp = Math.random()
console.log(temp)

let a=prompt("Enter 1st element : ")
let b=prompt("Enter 2st element : ")
let c=prompt("Enter Operation: ")
console.log(a)
console.log(b)

let obj ={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*",
}

if(temp > 0.1){
    console.log('The right operation is  ${a} ${c} ${b} ')
    // alert('The right operation is ${eval('${a} ${c} ${b}')}')
}
