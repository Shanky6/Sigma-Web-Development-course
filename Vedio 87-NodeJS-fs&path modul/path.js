import path from "path"

let mypath = " C:\\Users\\abc\\Desktop\\Vedio 87\\shanky.txt"
console.log(mypath);

console.log(path.extname(mypath));
console.log(path.basename(mypath));
console.log(path.join("C:/","programs\\shanky.txt"));


console.log(path.dirname(mypath));