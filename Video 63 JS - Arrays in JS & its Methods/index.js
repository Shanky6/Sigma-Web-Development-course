console.log("Arrays Tutorial -");

/*
let numbers = [1,2,3,4,5,6,7,8,9]

1. Accessing Values - numbers [0] = 1, numbers [1] = 2
2. Finding the length - numbers.length -> 10
3. Changing the Values - numbers[2] = 6 --> [1,2,6,4,5,6,7,8,9]

In JS, Arrays are Objects. The typeof operator on arrays return -> object.
*/

let n = [1, 7, 9];
let a = [1, 7, 8, 6, 2, 4];
//Arrays Method -->

//1. toString() -> Converts an array to a String of comma separated values.

//2. join()  -> Joins all the arrray elements using a separator.

//3. pop() -> Remove last element from the array.

//4. push()  -> Adds a new element at the en of the array.

// 5. shift()  -> Removes first element and returns it .

// 6. unshift()  -> Adds element to the beginning Returns new array length.

// 7. delete  -> delete element.

// 8. concat()  -> join given arrays.

// 9. sort()  -> Sort the array alphabetically.

// 10. splice()  -> Splice can be used to add new items toan array.

// 11. slice()  -> Slics out a piece from an array it creates a new array.

// 12. reverse()  -> revereses the elemnts in the source array.

//Q1. Create an array of numbers and take input from the uwer to add numbers to this array.
// let num = [2, 6, 3, 5, 4, 8, 9];
// console.log(num);

// let input = prompt("Enter your number to add in array ");

// num.push(input);
// console.log(num);

//Q2. Keep adding numbers to the array in 1 until 0 is  added to the array.


let num = [2, 6, 3, 5, 4, 8, 9];
console.log(num);

    let input;
    do {
        input = prompt("Enter your number to add in array ");
        num.push(input);
        console.log(num);
    } while (input != 0);

   

