/*
6. The Vowel Counter:
   You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

*/




function vowelCounter(string){
    let count = 0;
    for (let index = 0; index < string.length - 1; index++) {
        let code = string.charCodeAt(index); 

        if(code == 65 || code == 69 || code == 73 || code == 79 || code == 85 || code == 97 || code == 101 || code == 105 || code == 111 || code == 117  ){
            count += 1;
        }
        
    }
    console.log(`Total number of vowels in this string is : ${count}`);
    
}

let string = "Hello World";

console.log("");
console.log(string);
vowelCounter(string);
console.log("");