//type conversion = changing the datatype of a value to another datatype
//                 (strings, booleans, numbers)

let age = 25;
age = Number(age);  //type conversion
age+=1;
console.log(age, typeof age);  //26

let x,y,z;
x ="pizza";
y ="pizza";
z ="";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);