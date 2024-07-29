/*
10. The Coffee Machine:
    In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

*/

async function brewCoffee(coffee){
    let rn = Math.floor((Math.random() * (15 -1) + 1 )*1000);
    // console.log(rn);
    
    return  new Promise((resolve)=>{
        setTimeout(() => {              
            console.log("Coffee is ready!\nPlease take it!");
            resolve();
        }, rn);
                    
        console.log(coffee);  
        console.log("Your Coffee is brewing...\nPlease wait...\n");  
    })
}  

let coffee = "1 Cup Coffee.";
brewCoffee(coffee);