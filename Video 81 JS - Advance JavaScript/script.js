const a = "the";
const b = "no";
const c = {a,b};
console.log(c);

//Practice - 1{
async function delay(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}
//IIFE function method.
(async function main(){
    await delay();
    console.log("Hello");
    await delay();
    console.log("World");
    
}
)();
//   }

function sum(a,b,c){
    return sum = a+b+c;
}

let num = [2,5,6];

let avg = (sum(...num)/num.length);
console.log(avg);


