/*
7. The Local Storage Manager:
    You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

*/



function saveNoteToLocalStorage(note){
    localStorage.setItem("nottte", note );
}

let nnote = localStorage.getItem("nottte");
if(nnote){
    document.querySelector(".notes").innerHTML = nnote;
}

document.querySelector("button").addEventListener("click", ()=>{
    let note = prompt("Enter your note");
    saveNoteToLocalStorage(note);
    

    document.querySelector(".notes").innerHTML = note
})