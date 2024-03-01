async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
}


/* // This Genrate error

 let a = await sleep()
 let b = await sleep()

*/ 

// This is called IIFE9
(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
    
    
})()
    
    
/* 
    
    // This is called destucturing    
    (async function main(){
       let [x, y, ...rest] = [1, 5, 6,7,8,9]
       console.log(x,y,rest)
    })()

*/