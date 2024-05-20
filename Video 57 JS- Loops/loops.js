console.log("Loops Tutorial");

//We use loops to perform repeated actions.
// Types of loops in JS ---
/* 1. for loop -> loop a block of code no. of times.
   2. for in loop -> loops through the keys of an Object.
   3. for of loop -> loops through the values of an object.
   4. while loop -> loops a block based on a apecific condition.
   5. do - while loop -> while loop variant which runs atleast once.
    */

// Quick quiz : Write a sample program demostrating for - in loop.
    let roll_no = {
        Rohan : 2,
        Sohan : 3,
        Shubham : 4,
        Aryan : 5, 
        Sanskar : 6
    }

    for (const key in roll_no) {
        const element = roll_no[key];
       console.log(key, element);
    }