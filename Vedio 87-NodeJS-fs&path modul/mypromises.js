import fs from "fs/promises"

let a = await fs.readFile("shanky.txt");

let b = await fs.writeFile("withEcma.txt","This file is created with ecmaScript code",(e,d)=>{
    console.log(d);
    
})

console.log(a.toString(),b);
