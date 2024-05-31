/* Create a business name generator by combining list of adjectives and shop name and another word.
Without using Array.


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/


var y = confirm("Do you want to name for your business.")


if(y == true){
 
let first, second, third;


//For Adjectives.
let rand = (Math.random() * 100);
if(rand <= 33.3){
    first = "Crazy";
}
else if(33.3 < rand && rand >= 66.6){
    first = "Amazing";
}
else{
    first = "Fire";
}


//For Shop Name.
rand = (Math.random() * 100) ;
if(rand <= 33.3){
    second = "Engine";
}
else if(33.3 < rand && rand >= 66.6){
    second = "Foods";
}
else{
    second = "Garments";
}


//For Another Word.
rand = (Math.random() * 100) ;
if(rand <= 33.3){
    third = "Bros";
}
else if(33.3 < rand && rand >= 66.6){
    third = "Limited";
}
else{
    third = "Hub";
}

console.log(`"Name for you :" ${first} ${second} ${third}`);
}