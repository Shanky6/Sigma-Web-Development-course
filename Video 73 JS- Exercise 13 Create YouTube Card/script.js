function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let viewStr  ;
    if(999 < views && views < 1000000){
        viewStr = Math.floor(views/1000) + "K";
    }
    else if (views > 1000000){
        viewStr = Math.floor(views/1000000) + "M";
    }else{
        viewStr = views;
    }


    var Html = `
            <div class="thumb">
                <img src="${thumbnail}"
                    alt="df" srcset="">
                <p>${duration}</p>
            </div>
            <div class="textContent">
                <h3>${title}</h3>
                <span>${cName} . </span><span> ${viewStr} views . </span><span>${monthsOld} months ago</span>
            </div>
    `;

    
    

    let div = document.createElement('div');
    div.className = "card";
    div.innerHTML = `${Html}`;
    document.querySelector(".container").append(div);



    // let card = document.querySelector(".card")
    
}

// createCard("Introduction to HTML | Sigma Web Dev video #3", "CodeWithHarry", 550400, 4, "33:23", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

// createCard("Introduction to JavaScript | Sigma Web Dev video #4", "CodeWithHarry", 564000, 3, "28:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

// createCard("Introduction to CSS | Sigma Web Dev video #5", "CodeWithHarry", 545000, 3, "17:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");


document.querySelector("button").addEventListener("click", function(){
   let atitle, acName, aviews, amonthsOld, aduration, athumbnai ;
   atitle = prompt(" Enter Title ");
   acName = prompt("Enter your channel name");
   aviews = prompt("Enter views in numbers");
  amonthsOld = prompt("Enter how many months old in number");
   aduration = prompt("Enter video time");
   athumbnai = prompt("Paste thumbnail link ");

   createCard(atitle, acName, aviews, amonthsOld, aduration, athumbnai );

})