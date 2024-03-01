console.log("Hey This is Node js and tutorial no. 55")

var a=5;
var b= 6;
var c="ankush gupta";

console.log(a+b+8)
console.log(typeof a, typeof b, typeof c) 


{
    let b=5;
    console.log(b); /* let variable run only in this  block  */
}
/* 

NOTE :

var :- defind Globally scoped  (value of var can be change again  and it does not follow block scoped properties )
let :- defind Block scoped    (blocked scoped variable can be Access only in a block)  
const :- constant               (value of var can not change again )

*/


let x="ankush";
let y= 22;
let z= 22.5;
let p= true;
let q= undefined;
let r= null;

console.log(x,y,z,p,q,r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

/* output :-

string number number boolean undefined object

*/



let m ={
    name :"ankush",
    "id card": " 0187AS221010",
}

console.log(m)
