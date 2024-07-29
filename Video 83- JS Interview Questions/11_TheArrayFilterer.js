/*
11. The Array Filterer:
    You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
*/







function filterProducts(array, criterion){
    let filteredArr = {};
    for (const key in array) {
        if(key == criterion){
            filteredArr.push(key)
        }
    }
    console.log(filteredArr);
    
}

let array = {
    name : "Shubham"
}
let criterion = "name"

filterProducts(array, criterion)