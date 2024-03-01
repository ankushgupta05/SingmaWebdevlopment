console.log("Ankush")
/*
// class calling in js

let boxes = document.getElementsByClassName("box") 
console.log(boxes)

boxes[2].style.backgroundColor ="red" //  always index start from 0 here also 
*/

/* 
// ID calling in js

// document.getElementById("Special-box").style.background="green"
*/


/*
// Query Selector 
document.querySelector(".box").style.backgroundColor="pink"  //  It apply only 1st .box class 

*/


/*  
console.log(document.querySelectorAll(".box"))
it return HTML collection and all Element assgin in it.and we can be Access using Loop
here below one Example

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor="pink"
})


*/

// document.getElementsByTagName("div") /* It Give all div from Body */



/* 
// concept of matches

e = document.getElementsByTagName("div")
HTMLCollection(7) [div.container, div.box, div.box, div#Special-box.box, div.box, div.box, div.box, Special-box: div#Special-box.box]
e[4].matches("#Special-box")
false
e[3].matches("#Special-box")
true

*/



/* 
// concept of closest 

it always give nearest Engesters

e = document.getElementsByTagName("div")
HTMLCollection(7) [div.container, div.box, div.box, div#Special-box.box, div.box, div.box, div.box, Special-box: div#Special-box.box]
e[3].closest(".container")
<div class=​"container">​…​</div>​
 */


/*  
concept of contains

e = document.getElementsByTagName("div")
HTMLCollection(7) [div.container, div.box, div.box, div#Special-box.box, div.box, div.box, div.box, Special-box: div#Special-box.box]
document.querySelector(".container").contains(e[0])
true
document.querySelector(".container").contains(e[1])
true
document.querySelector(".container").contains("body")


*/