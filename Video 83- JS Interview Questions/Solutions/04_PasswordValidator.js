/*4. The Password Validator:
   You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
   */


// let pass1  = "adfSd55d";
// let pass2 = "dfiSk9484";
// let pass3 = "k4dkoake4";
// let pass4 = "dfi4";
// let pass5 = "SLKDFJKDL455";
// let pass6 = "SJkdigjnd";


let password = prompt("Enter to set your password");


function check(password) {
    for (let i = 0; i <= password.length - 1; i++) {
        if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
            console.log(password.charCodeAt(i));
            for (let j = 0; j <= password.length - 1; j++) {
                if (password.charCodeAt(j) >= 97 && password.charCodeAt(j) <= 122) {
                    console.log(password.charCodeAt(j));
                    for (let k = 0; k <= password.length - 1; k++) {
                        if (password.charCodeAt(k) >= 48 && password.charCodeAt(k) <= 57) {
                            console.log(password.charCodeAt(k));
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false
}

function password_Validator(password) {
    if (password.length >= 8) {
        if (check(password) == true) {
            alert("Password Validated Successfully");
            console.log("Password Validated Successfully");
        }
        else {
            alert("Not Validate Please add atleast 1 Capital Letter, 1 small letter and 1 number !");
            console.log("Not Validate Please add atleast 1 Capital Letter, 1 small letter and 1 number !");
            location.reload();
        }
    }
    else {
        alert("Please enter atlest 8 characters");
        console.log("Please enter atlest 8 characters");
        location.reload();
    }

}

password_Validator(password);

// password_Validator(pass1);
// password_Validator(pass2);
// password_Validator(pass3);
// password_Validator(pass4);
// password_Validator(pass5);
// password_Validator(pass6);