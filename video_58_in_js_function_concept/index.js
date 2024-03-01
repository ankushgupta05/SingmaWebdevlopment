// type 1

function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your t-shirt is nice!")
    console.log("Hey " + name + " your course is goot too!")
}

nice('ankush')


// type 2

function sum(a,b) {
    let c = a+b ;
    return c
}

let ans = sum(3,6)
console.log(ans)


// Type 3

const add = (a,b,c) => {
    let temp = a+b+c;
    return temp;
}

let y = add(1,3,5)
console.log(y)

/* NOTE :-  const can be declare a variable of same name  only one time  and as well as function */