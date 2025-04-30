//String Methods = allow you to manipulate text(strings)

let username = "  Mercyanna   ";

//getting first character of a string
console.log(username.charAt(0));
console.log(username.charAt(5));

//index of first occurence of a character
console.log(username.indexOf("r"));

//length of string
console.log(username.length); //not a method but useful

//trimming a string
console.log(username.trim()); //no whitespace

//changing letter cases
console.log(username.toLowerCase());
console.log(username.toUpperCase());

//repeating a string
console.log(username.repeat(3)); //inside the brackets you write the number of times you want the string to be repeated

//To determine if a string starts with a given character
console.log(username.startsWith(" "));

//To determine if a string ends with a given character
console.log(username.endsWith("a"));

//To determine if  string includes a character
console.log(username.includes("r"));

//elimination and replacing
let phoneNumber = "+260-774-027-187";
phoneNumber = phoneNumber.replaceAll("-", " ");
console.log(phoneNumber);