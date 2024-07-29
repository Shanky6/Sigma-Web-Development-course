/*
9. The Asynchronous Shopper:
   Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

*/
var flag = 0;
async function placeOrder() {
    let rn = Math.floor((Math.random() * (7 - 1) + 1) * 1000);
    console.log(rn);
    
    let p = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, rn);
    })

    p.then(() => {

        if (flag == 0) {

            let h1 = document.createElement('h1');
            h1.innerText = "Order Placed!";
            document.body.append(h1);
            flag++;
        }
    
        console.log("Your has been confirmed!");
        alert("Your order has been placed!  Thank You!");
    })
}
let b = document.querySelector("button");
b.addEventListener("click", () => {placeOrder();})






