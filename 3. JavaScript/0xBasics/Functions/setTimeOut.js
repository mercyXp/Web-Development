// setTimeOut(callback, delay)

function sayHi(){
    console.log("Hi");
}
setTimeout(sayHi, 3000) //3000 milisecs | 3 secs

//instead of a callback, we can use an anonymous function

setTimeout(function(){console.log("hi")}, 4000);

//using an arrow function

setTimeout(() => console.log("Hello"), 5000);

//cancelling the timeout

const timeoutId = setTimeout(() => console.log("My Time"), 5000); //My Time is not gonna show up to the console because it 
clearTimeout(timeoutId);