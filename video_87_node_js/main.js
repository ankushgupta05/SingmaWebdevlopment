const { error } = require("console")
const fs = require("fs")
// const fs = require("fs/promises")

console.log("starting")

// fs.writeFileSync("Ankush.txt","Ankush is a good boy")

fs.writeFile("ankush2.txt","Ankush is a good boy2",()=>{
    console.log("done")
    fs.readFile("Ankush2.txt",(error,data)=>{
        // console.log(error,data)
        console.log(error,data.toString())
    })
})

fs.appendFile("Ankush.txt","  ankush is not good boy",(e,d)=>{
    console.log(d)
})

console.log("ending")