function factorial(number) {
    
    let fact = 1 ;
    
    for(let i = 1; i <= number; i++){
    
        fact = fact*i ;
    }
    return fact;
}

function Factorial_(number) {
    let arr = Array.from(Array(number + 1).keys());

    let c = arr.slice(1,).reduce((a,b)=> a*b)
    return c;
}

console.log(factorial(6));

console.log(Factorial_(6));