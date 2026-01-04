
function sayMyName(){
    console.log("hello");  
}
// sayMyName() // execution of function 


// function addTwoNumber(number1,number2) // this is parameters number1 and number2
// {
//     console.log(number1 + number2);
// }
// addTwoNumber(3, 1) // this is argumets 3 , 1 



function addTwoNumber(number1,number2)
{
    // let result = number1 + number2
    // return result
    // console.log("harsh");

    return number1 + number2
}

// const result = addTwoNumber(2, 3)
// console.log("Result :", result);


function loginuserMessage(username = "sam"){
    if (!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log((loginuserMessage("")));

// console.log(loginuserMessage());
// console.log(loginuserMessage("harsh"))


