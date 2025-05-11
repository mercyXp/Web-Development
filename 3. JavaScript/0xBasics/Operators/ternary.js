//ternary operator = a shortcut of if{} and else{} statements
//                   helps to assign a variable based on a condition
//                   condition ? codeIfTrue : codeIfFalse

let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

/*
let message;

    if(age >= 21){
    message =  "You're an adult" ;
    }
    else{
        message = "You're a minor";
    }
*/

let isStudent = true;
let msg = isStudent ? "You're a student" : "You are not a student";
console.log(msg);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is' $${purchaseAmount -purchaseAmount * (discount/100)}`);