// NOTE : Using  Actual function and leaen Fetch API Program

async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

async function main(){

    console.log("Loading modules")
    
    
    console.log("Do something else")
    
    
    console.log("Load data")
    
    
    let data = await getData()
    
    console.log(data)
    
    console.log("process data")
    
    console.log("task 2")
    
}

// Function calling here
main()






/* ************************XXX*******************************XXX*****************************************XXXX*********** */

/* 

// NOTE : Using  Async_Awiat Program

async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

async function main(){
    
    console.log("Loading modules")
    
    
    console.log("Do something else")
    
    
    console.log("Load data")
    
    
    let data = await getData()
    
    console.log(data)
    
    console.log("process data")
    
    console.log("task 2")
    
}

// Function calling here
main()

*/


/* ************************XXX*******************************XXX*****************************************XXXX*********** */



/* 
 NOTE : Without  Async_Awiat Program

function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

console.log("Loading modules")


console.log("Do something else")


console.log("Load data")


let data = getData()


data.then((v) =>{
    
    console.log(data)
    
    console.log("process data")
    
    
    console.log("task 2")
})


*/