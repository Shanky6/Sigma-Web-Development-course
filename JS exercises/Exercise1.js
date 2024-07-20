let rn = Math.floor(Math.random() * (100 - 1 +1)+1);


let input = prompt("Guess the number between 1 - 100")
console.log(rn);

if (input <= 100) {
    var score;
    if (rn === input) {
        score = 100;
        alert(`You guessed Correct! Your Score is : ${score}`)
    }
    else if (rn < input) {
        score = input - rn;
        alert(`You guessed Greater! Your Score is : ${score}`)
    }
    else {
        score = rn - input;
        alert(`You guessed Lesser! Your Score is : ${score}`)
    }
}
else{alert("Wrong Input!")};