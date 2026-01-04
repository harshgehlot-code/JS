
// litral and constructor 

// construcor se banaoge tua singleton banta h 
Object.create

//  litral ki tarah  banaoge tua singleton nhi banega 

const mySym = Symbol("key1")

const JsUser = {
    name : "harsh",
    age : 46,
    [mySym] : "mykey1",
    "fullname" : "harsh Gehlot",
    email : "harsh@gmail.com",
    isLogin : false,
    lastLoginDay : ["moday", "tuesday"]
}

// console.log(JsUser.name)
// console.log(JsUser["fullname"]); // using square bracket 
// console.log(JsUser[mySym]);

JsUser.email = "harshji@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "harshji12@gmail.com"

// console.log(JsUser.email);
// console.log(JsUser)


JsUser.greeting = function(){
    // console.log("hello JS user");
    console.log(`hello harsh ,${JsUser.name}`)
}

JsUser.greetingTwo = function(){
    console.log(`hello harsh ,${this.name}`)
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// ++++++++++++++++++++++++++++++++++ Object 2 v - 17 ++++++++++++++
 
// const tinderUser = new Object () // this is singleton object

const tinderUser = {} // non singleton Object 

tinderUser.id = "223"
tinderUser.name = "sam"
tinderUser.isLoginIn = false

// console.log(tinderUser); 

const regularUser = {
    email : "some@gmail.com",
    "fullname" : {
        userfullname:{
            firstname: "harsh",
            lastname: "Gehlot"
        }
    }
}


// Nested Object 
// console.log(regularUser.fullname.userfullname);

// protection for API 
// console.log(regularUser.fullname?.userfullname); 


// merge two object 

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

// const obj3 = {obj1, obj2}  // problem like array obj in obj will return 
// o/p > { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2) // this is like target and source ( {}> target, rest > sources)
// console.log(obj3);
// o/p > { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// spread approach 
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// user data from databse in Array of object 
const user = [
    {
        id : 1 ,
        email : "harsh@gmail.com"
    },
    {
        id : 1 ,
        email : "harsh@gmail.com"
    },
    {
        id : 1 ,
        email : "harsh@gmail.com"
    },
]

user[1].email
// console.log(tinderUser);

// we are fatching keys and values of object 
// console.log(Object.keys(tinderUser)); 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//  o/p
/* { id: '223', name: 'sam', isLoginIn: false }
[ 'id', 'name', 'isLoginIn' ]
[ '223', 'sam', false ]
[ [ 'id', '223' ], [ 'name', 'sam' ], [ 'isLoginIn', false ] ]
*/ 
 
// check property in objects 
// console.log(tinderUser.hasOwnProperty('isLoginIn'));





// ++++++++++++++++++++ object - 3 v-18 +++++++++++++++++

// de- structure of objects 

const course = {
    coursename : " js in hindi",
    price : "999",
    courseInstructor : "harsh" 
}

const{courseInstructor : instructor} = course
console.log(instructor);


// react  , // de structure of object in react 
// const navnar = ({company}) => {
// }
// navbar(company = "harsh")

// API 

//JSON format 
// {
//     "name" : 'harsh',
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// [
//     {

//     },
//     {
        
//     },

// ]


