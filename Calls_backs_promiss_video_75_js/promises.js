console.log('This is Promises');

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
      if(a < 0.5){
        reject("No random number was not supporting you")
      }
      else{
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Ankush")
        }, 3000);
      }
})

prom1.than((a) => {
    console.log(a)
}).catch((err) =>{
    console.log(err)
})
