const { error } = require("console");
const fs = require("fs")
// console.log(fs);

console.log("Starting");
// fs.writeFileSync("shanky.txt","Hi, my name is Shanky")
fs.writeFile("message.txt","Hello, Good Morning!",()=>{console.log("done");
    fs.readFile("message.txt",(error,data)=>{
        console.log(error,data.toString());
        
    })
})
fs.appendFile("shanky.txt"," \nHow are You?",(e,d)=>{console.log(d);
})

console.log("End");



