console.log("ankush is a hecker")
console.log("ankush Gupta is a Genius")


setTimeout(() => {
    console.log("I am inside settimeout 1")
}, 2000);


setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 2000);

console.log("The End")


// Create a  callback


const callback = (arg)=>{
    console.log(arg)
}


const loadscript = (src, callback )=>{
    let sc = document.createElement("script")
    sc.src = src;
    // sc.onload = () =>{
        
    // }
    sc.src = callback("Ankush");
    document.head.append(sc)

}





