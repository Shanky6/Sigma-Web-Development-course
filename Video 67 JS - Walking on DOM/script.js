/*
 document.documentElement
->  <html lang=​"en">​<head>​…​</head>​<body>​…​</body>​<div class=​"container">​…​</div>​ flex </body>​</html>​
 let cont = document.body.childNodes[1]
->  undefined
 cont
->  <div class=​"container">​…​</div>​ flex 
 cont.firstChild
->  #text
 cont.lastChild
->  #text
 cont.childNodes
->  NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
 cont.childNodes[1]
->  <div class=​"box">​…​</div>​
 cont.childNodes[3]
->  <div class=​"box">​Box2​</div>​

*/

// Searching the DOM by More methods.

/*
let greenbox = document.getElementById("greenbox")
undefined

greenbox
<div id=​"greenbox" class=​"box">​Box2.5​</div>​

greenbox.style.backgroundColor = "greeen"
'greeen'

let queryall = document.querySelector(".box")
undefined

queryall.style.backgroundColor = "yellow"
'yellow'

queryall = document.querySelectorAll(".box")
NodeList(8) [div.box, div.box, div.box, div.box, div#greenbox.box, div.box, div.box, div.box]

queryall.forEach( e => { e.style.backgroundcolor = "blue"  }


*/