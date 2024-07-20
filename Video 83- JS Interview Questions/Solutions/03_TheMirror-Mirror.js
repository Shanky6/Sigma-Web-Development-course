/*
3. The Mirror Mirror:
   Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
*/



let string = "Hello World";
function convertMirrorText(string) {
    let mirChar = [];
    let st = Array.from(string);
    for (let i = st.length; i >= 0; i--) {
        mirChar.push(st[i]);

    }

    let mirrorString = mirChar.join('');
    console.log(mirrorString);
}

console.log('');

convertMirrorText(string);




