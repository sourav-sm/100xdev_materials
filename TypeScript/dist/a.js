"use strict";
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
;
function isLegal2(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal2({
    name: "sourav",
    age: 21,
    email: "njxjnsji"
}));
