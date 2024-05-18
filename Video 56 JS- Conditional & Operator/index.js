console.log("Conditionals & Expressinons");

console.log("Hello I am conditional tutorial")

let age1 = 1;
// let grace = 2;

// age += grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

/*
I am a 
multiline 
comment
*/

if (age1 == 18) {
    console.log("You can drive");
}

else if (age1 == 0) {
    console.log("Are you kidding?")
}

else if (age1 == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/


/* Q1. Use logical operators to find whether the age of a person lies bitween 10 and 20? */

let age = 45 ;

if(10<age>20){
    console.log("You are eligible.");
}
else{
    console.log("You are not eligible.");
}

/*Q2. Demonstrate the use of switch case statements in JS. */
const expr = 'Mangoes';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
/*Q4. Write a JS program to find whether a  number is divisible by either 2 or 3. */
let num = 60;

if (num%2 == 0 || num%3 == 0) {
    console.log("This Number is Divisible by Either 2 or 3.");
}
else{
    console.log("This Number is Not Divisible Neither 2 or Neither 3.");
}

/*Q5. Print " you can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator. */

let your_age = 45;
your_age>=18 ? console.log("You Can Drive.") : console.log("You Can't Drive.");
