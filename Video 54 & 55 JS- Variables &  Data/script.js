console.log("Hello world")

// Ecmascript -
/* ECMA Script is a standard on whnich Jaavascript is based!
It was created to ensure that different documents on javascript are actually talking about the same language.
JavaScript & ECMA Script can almost always be used interchangably.
Java Script is vary Liberal  in what it allows.*/

/* How to execute JS-
JS can be executed right inside one's browser.
We can open the  javascript console and start executing here.   OR
Another way to execute JS  is a  runtime like Node.js 
We can also run JS by inserting in inside <script> tag of an HTML document.*/

//Declaring Variables -
var a = 7;  // It is global Variable.
let b = 8;  // It is block Variable.  // this is  most  use variable.
const c = 70; // It si block Varibale

//Block Variables - which are define for specific block.
//Globle Variables - which are define for whole program.


// Primitive Data Types -
/* These are basic data types in JS
These are 7 -
Null, Number, String, Symbole, Undefined, Boolean, BigInt */
//Ex.
let p = 12;
let q = 3.5;
let r = "Shanky";
let s = undefined;
let t = true;

console.log(p, q, r, s, t);
console.log(typeof p, typeof q, typeof r, typeof s, typeof t);

//OBJECT in JS
let item = {
    name : "LED Bulb",
    price : 150 
}
console.log(item);

//Quick Quiz : Write JS program to store name, Phone number and marks of a student using objects.
let student1 ={
    name : "Shubham Kumar",
    "Phone Number" : 9846359854,
    Marks : 98
}
console.log(student1);

//Q1
let str = "Hello";
let num = 2;
console.log(str + num);

//Q2
console.log(typeof str);

//Q3
//ans- We cant change const variable.

//Q4
//we can't able to this.

//Q5 - Dictionary of 5 word meaning.
let Dictionary = {
    tidy : "Arraged with everything in good oreder.",
    rippled : "flowing.",

}
console.log(Dictionary);
