var p = prompt("Enter any Number :")
let a = 5

//Method - 1
function factorial(number) {
    
    let fact = 1 ;
    
    for(let i = 1; i <= number; i++){
    
        fact = fact*i ;
    }
    return fact;
}


//Method - 2
function Factorial_(number) {
    let arr = Array.from(Array(number + 1).keys());

    let c = arr.slice(1,).reduce((a,b)=> a*b)
    return c;
}




console.log(factorial(p));

console.log(Factorial_(p));