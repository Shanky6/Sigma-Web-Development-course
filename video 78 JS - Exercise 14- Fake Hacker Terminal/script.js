
// async function hacking() {

//     var line1 = document.createElement('div');
//     line1.className = "line";
//     line1.textContent = "Initializing Hacking";


//     var line2 = document.createElement('div');
//     line2.className = "line";
//     line2.textContent = "Reading your Files";

//     var line3 = document.createElement('div');
//     line3.className = "line";
//     line3.textContent = "Password files Detected";

//     var line4 = document.createElement('div');
//     line4.className = "line";
//     line4.textContent = "Sending all passwords and personal files to server";

//     var line5 = document.createElement('div');
//     line5.className = "line";
//     line5.textContent = "Cleaning up";

//     var rn = Math.floor((Math.random() * (7 - 1) + 1) * 1000);
//     console.log(rn);

//     let x = await setTimeout(() => {
//         document.querySelector(".terminal").append(line1);
//     }, rn);










// async function lin1() {
//     var rn = Math.floor((Math.random() * (7 - 1) + 1) * 1000);
//     console.log(rn);

//    await setTimeout(() => {
//         document.querySelector(".terminal").append(line1);
//     }, rn);
// }

// lin1().then(async function lin2() {
//     var rn = Math.floor((Math.random() * (7 - 1) + 1) * 1000);
//     console.log(rn);

//     setTimeout(() => {
//         document.querySelector(".terminal").append(line2);
//     }, rn);
// })

// async function lin3() {
//     var rn = Math.floor((Math.random() * (7 - 1) + 1) * 1000);
//     console.log(rn);

//     setTimeout(() => {
//         document.querySelector(".terminal").append(line3);
//     }, rn);
// }

// await lin3();
// async function lin4() {
//     var rn = Math.floor((Math.random() * (7 - 1) + 1) * 1000);
//     console.log(rn);

//     setTimeout(() => {
//         document.querySelector(".terminal").append(line4);
//     }, rn);
// }

// await lin4();
// async function lin5() {
//     var rn = Math.floor((Math.random() * (7 - 1) + 1) * 1000);
//     console.log(rn);

//     setTimeout(() => {
//         document.querySelector(".terminal").append(line5);
//     }, rn);
// }

// await lin5();


// }


async function randomDelay() {
    var rn = Math.floor((Math.random() * (5 - 1) + 1) * 1000);
    console.log(rn);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, rn);
    })
}
async function delay() {
    var rn = Math.floor(Math.random() * 10);
    console.log(rn);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, rn);
    })
}

async function addText(item) {
    await randomDelay();
    var div = document.createElement('div');
    div.className = "line"
    div.textContent = item;
    document.body.append(div);
}

async function blinkdot(item) {
    return new Promise((resolve) => {
        var r = Math.floor(Math.random() * 10);

        let count = 1;
        setInterval(() => {

            if (count == 3) {
                return resolve;
            }
            else {
                document.querySelector(".terminal").textContent = item + ".";
                count++;
            }
        }, r);
    }
    )
}



async function hack() {

    let t = setInterval(() => {
        // let last = document.body.getElementsByTagName("div");
        // last = last[last.length - 1]
        // if(last.innerHTML.endsWith("...")){
        //     last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        // }
        // else{

        //     last.innerHTML = last.innerHTML + "."
        // }
        let cont = document.querySelector("line");
        cont.textContent


    }, 300);


    let text = [
        ">>>Hacking terminal invoked",
        ">>>Initializing Hacking",
        ">>>Reading your Files",
        ">>>Password files Detected",
        ">>>Sending all passwords and personal files to server",
        ">>>Cleaning up"
    ];

    for (const item of text) {
        await addText(item);
        clearInterval(t);
    }

}

hack();