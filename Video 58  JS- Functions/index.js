console.log("This is Function tutorial.")


function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}
nice("Shubham");
nice("Aryan");
nice("Shivam"); ``



function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);



//Q4. Write a function to find mean of 5 numbers.

function mean(num1,num2,num3,num4,num5){
    console.log(num1,num2,num3,num4,num5);
    let m = (num1+num2+num3+num4+num5)/5 ;
   console.log("Mean of these numbers is : ", m);
}

mean(2,3,4,5,6);
