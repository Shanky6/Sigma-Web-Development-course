/*2. The Double Trouble:
   You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
*/

let arr = [23,65,42,89,52,35,23,89,64];
let doubleArr = [];

function checkConsicutive(element){ 
for (const check of doubleArr) {
    if(check === element){
        return 1;
    }
}
}

for (const element of arr) {
    let consi = checkConsicutive(element);
    
    doubleArr.push(element);
    if(consi != 1)
    doubleArr.push(element);
    
}
console.log(doubleArr);
