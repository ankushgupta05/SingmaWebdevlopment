import fs from "fs/promises"

let a = await fs.readFile("Ankush.txt")

let b = await fs.appendFile("Ankush.txt","\n\n\n\nThis is amazing promise")

console.log(a.toString(),b)