/*
// Interite one funtion to anothor funtion.


let obj ={
    a:1,
    b:2,
}
console.log(obj)

let animal ={
    eats : true,
}

let rabit ={
    jumps : true,
}

rabbit.__proto__ = animal; // sets rabbit.[[prototype]] = animal


 */




// class creation


class Animal{
    constructor(name){
        this.name = name
        console.log("object id created")
    }
    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("kood raha hoon")
    }
}


class Lion extends Animal {

    /*  // This line is also run 

     constructor(name){
             super();
             this.name = name
             console.log("object id created and he is a lion")
         }
    */

        constructor(name){
            super(name);
            console.log("object id created and he is a lion")
    }

}

let a = new Animal("Ankush Gupta");
console.log(a)

let l = new Lion("Aman Sahu");
console.log(l)