console.log("Hello word")


// Some Output of Experiment
/* 

Hello word
document.bo
undefined
document.body
<body>​<div class=​"container">​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​<div class=​"box">​Box5​</div>​</div>​<script src=​"script.js">​</script>​<!-- Code injected by live-server --><script>​…​</script>​</body>​
document.body.childNodes[0]
#text
document.body.childNodes[1]
<div class=​"container">​…​</div>​
document.body.childNodes[2]
#text
document.body.childNodes[3]
<script src=​"script.js">​</script>​
document.body.childNodes[4]
#text
document.body.childNodes[5]
<!-- Code injected by live-server -->
document.body.childNodes
NodeList(9) [text, div.container, text, script, text, comment, text, script, text]0: text1: div.container2: text3: script4: text5: comment6: text7: script8: textlength: 9[[Prototype]]: NodeList
document.body.childNodes[1]
<div class=​"container">​…​</div>​
document.body.childNodes[1].childElementCount
5
document.body.childNodes[1].childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
let count = document.body.childNodes[1]
undefined
count
<div class=​"container">​…​</div>​
count.lastChild
#text
count.firstChild
#text
count.firstchilenode
undefined
count.firstElementChild
<div class=​"box">​Box1​</div>​
count.secondElementChild
undefined
count.firstElementChild
<div class=​"box">​Box1​</div>​

count.firstElementChild
<div class=​"box">​Box1​</div>​
count.firstElementChild.style.background="red"
'red'

document.body.firstElementChild
<div class=​"container">​…​</div>​
document.body.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
document.body.firstElementChild.children[0]
<div class=​"box" style=​"background:​ red;​">​Box1​</div>​
document.body.firstElementChild.children[1]
<div class=​"box">​Box2​</div>​
document.body.firstElementChild.children[3]
<div class=​"box">​Box4​</div>​
document.body.firstElementChild.children[4]
<div class=​"box">​Box5​</div>​
document.body.firstElementChild.children[5]
undefined
document.body.firstElementChild.children[3].nextElementSibling
<div class=​"box">​Box5​</div>​
document.body.firstElementChild.children[3].previousElementSibling
<div class=​"box">​Box3​</div>​
document.body.firstElementChild.children[3].previousSibling
#text

*/


// after creating table in body
/*  

Hello word
document.body.children
HTMLCollection(4) [div.container, table, script, script]
document.body.children[1]
<table>​…​</table>​
document.body.children[1].rows
HTMLCollection(2) [tr, tr]

*/