//  js is dynamin typed language 

// Primitive 
    /* 
        7  types : string , Number, Boolean, undefined , symbol, BigInt,
    */
   
//  Non Primitive or Reference 
    /* 
        Array, Objects, Function 
    */


// Stack(primitive) and 
// Heap(Non Primitive)

let myYtname = "harsh"

let anothername = myYtname
anothername = "harsh1"

// console.log(myYtname)
// console.log(anothername)


let userOne = {
    "email" : "harah@g.com",
    "skill" : "python"
}

let userTwo = userOne
userTwo.email = "harsh1@g.com"

console.log(userOne.email)
console.log(userTwo.email);
