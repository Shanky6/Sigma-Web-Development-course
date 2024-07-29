/* 5. The Sum Selector:
   You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
*/



function sumSelector(arr){
    let sum = 0;

    for (const numbers of arr) {
        if(numbers >= 0){
            sum += numbers;
        }
        else{
            return sum;
        }
    }
}

let numbers = [56,32,-1,2,5,6,-5,35];
console.log(`The sum until negative number is: ${sumSelector(numbers)}`);

let numbers2 = [56,-32,1,2,5,6,-5,35];
console.log(`The sum until negative number is: ${sumSelector(numbers2)}`);

let numbers3 = [56,32,1,2,5,6,-5,35];
console.log(`The sum until negative number is: ${sumSelector(numbers3)}`);
