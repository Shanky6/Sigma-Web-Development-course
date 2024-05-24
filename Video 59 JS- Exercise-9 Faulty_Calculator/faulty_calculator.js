/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let random = (Math.random() * 100);
console.log(random);

let num1 = prompt("Enter First Number : ")
let operator = prompt("Enter Operation : ")
let num2 = prompt("Enter Second Number : ")

let faulty = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*"
}

console.log(` ${num1} ${operator} ${num2} = `);
if (random >= 10) {
    // Perform correct calculation
    console.log("Changed in : ",operator);
    alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);

}
else {
    // Perform faulty calculation
    operator = faulty[operator];
    console.log("Changed in : ",operator);
    alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`);
}

