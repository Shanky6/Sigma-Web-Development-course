/*
Asynchronous actions are the actions that we initiate now and they finish later. 
Aise Code jo baad me run hone ke liye hold par rakhe jaate hai unko Asynchronous Code kahte hai. Jabki Syncronous Code wo hote hai jo one by one line se chalte hai.
*/

//Callback functions - ye ek function argument hota hai jo kisi function ko leta hai. 
    // Jab ham koi Asynchronous Code likhte hai to use code ke argument me callback ko dete hai, ki jab wo async code complete ho jaye tab callback function wala code run ho jaye agar async code run na ho to callback run na ho.
//Example-----

function loadScript(src, Callback){
    let script = document.createElement("script")
    script.src = src

    // .onload tab run karte hai jab succesfully load ho jaye. 
    script.onload = function(){
        console.log("Script is loaded with SRC :",src)
        Callback(null,src);
    } 
    
    // .onerror tab run karte hai jab load karne me error aa jaye.
    script.onerror = function(){
        console.log("found some error with :" + src)
        Callback(new Error("Src got some error"))

    }

    document.head.append(script)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",hello );

// Uper ke Example me simply ham ek SRC ko load kar rahe hai kisi dusre website se, aur hamne callback likha hai ki jab SRC succsesfully load ho jaye to usko notify kar do , nhi to error ko notify kar do.





// this another method to loadscript.

function hello(error, src){
    if(error){
        alert("Error Ho gya!")
        return
    }

    alert('Hello your script is loaded.' +src)

}

// function loadScript(src, Callback){
//     var script = document.createElement("script")
//     script.src = src

//     script.onload = ()=> Callback(script)
    
//     document.head.append(script)

// }

// function hello(){
//     alert('Hello your script is loaded.')
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",(script)=> {
//     alert('Hello! Your Script is loaded Successfully.');
//     console.log("Script is loaded with SRC :",src);
//     // alert(script.src)
// } );



/*
Promises - A Promise is a "promise of code  execution".
Promise ko ham tab  implement karte hai jab hame koi asynchronous kam karna hota hai aur agla code ka kaam us asynchronous kaam par dependent rahta.
Jaise Hame koi data dusre server se apne code me lana hai aur uske base par usko apni website me show karna hai to ham ek Promise Cunstructor ko banayenge aur usko kisi variable me save kar lenge, us paromise me 2 arg dalenge 1. resolve AUR 2. reject. Jab data ayega to resolve return karenge aur jab data nhi aa payega to reject return karenge.
fir us data ko apne code me show karne ke liye .then ka use karenge us variable ke sath jisme hamne us promise ko store kiya tha, .then() tab use karenge jab promise resolve ho gya ho aur usme data print kara denge.
nahi to .catch use karenge jab promise reject ho gya ho usme error print kara denge.
*/
//Example----

let prom = new Promise(function(resolve, reject){
    console.log('Machine Chalu');
    setTimeout(() => {
        let rn = Math.random();
        console.log(rn);
        
        if(rn < 0.5){
        console.log('Hello');
        return resolve("Done");
        }
        else{
            console.log('Error ho raha hai');
            return reject("Not Done");
        }
    }, 3000);

})

prom.then(alert).catch(alert);



/*
Async/Await - There is special syntax ot work with promises in JS.
async keyword -- async ek aisa keyword hota hai jo kisi bhi function ke aage likhne se us pure function ko asychronous function ya Promises me badal deta hai. Fir ham is async function ke andar koi await code likh sakte hai jo pura hone tak wait kare.
await keyword -- await keyword ko ham sirf async function me hi likh sakte hai, iska use kis bhi async kaam ka wait karne ke liye karte hai.
*/
//Example - 

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}

async function main(){
    console.log("Loading modules")
    console.log("Do something else")
    console.log("Load data")

    let data = await getData()
    console.log(data)
    console.log("process data")
    console.log("task 2")

}

main();
