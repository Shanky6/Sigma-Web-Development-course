
let rn = Math.random() * 100;
let val;
if (rn <= 33.3) {
    val = 'S';
}
else if (rn >= 33.3 && rn <= 66.6) {
    val = 'W';
}
else {
    val = 'G';
}



function Start() {

    let value = prompt('Enter - S for Snake, W for Water and G for Gun(IN CAPITAL LATER) :');
    if (value === 'S' || value === 'W' || value === 'G') {
        if (val === value) {
            alert('Tie');
        }
        else {
            if (val === 'S' && value === 'W') { alert('Your Lose') }
            else if (val === 'S' && value === 'G') { alert('Your Win') }
            else if (val === 'W' && value === 'S') { alert('Your Win') }
            else if (val === 'W' && value === 'G') { alert('Your Lose') }
            else if (val === 'G' && value === 'W') { alert('Your Win') }
            else if (val === 'G' && value === 'S') { alert('Your Lose') }
            
        }

        console.log(val);

    }
    else {
        alert('You Entered Wrong Input!');
    }
}

Start();
