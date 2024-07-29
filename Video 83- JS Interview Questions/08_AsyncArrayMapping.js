/*
8. Async Array Mapping:
   Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
*/





function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
             resolve();
        }, 500);
    })
}


async function arrMaping(arr) {

    let mappedArr = [];
    for (const number of arr) {
        await delay();
        mappedArr.push(number * 2);

        console.log(mappedArr);

    }

}

let arr = [12, 5, 3,65, 48, 85, ];

arrMaping(arr);