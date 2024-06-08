/*Typescript provides you some basic types
number, string, boolean, null, undefined.
Let’s create some simple applications using these types - 
Problem 1 - Hello world
💡
Thing to learn - How to give types to arguments of a function
Write a function that greets a user given their first name. 
Argument - firstName
Logs - Hello {firstName}
Doesn’t return anything*/


// function great(name:string){
//     console.log("Hello "+name);
// }

// great("kumkum");


// function sum(num1:number ,num2:number):number{
//     return num1+num2;
// }

// console.log(sum(3,5));


// function isLegal(age:number){
//     if(age>=18){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isLegal(21));


// function delayedCall(fn:()=>void){
//     setTimeout(fn,1000)
// }

// delayedCall(function(){
//     console.log("hi there")
// })

interface User{
    name:string;
    age:number,
    email:string
};

function isLegal2(user:User){
    if(user.age>=18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegal2({
    name:"sourav",
    age:21,
    email:"njxjnsji"
}));