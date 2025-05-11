//Function Expression = a way to define functions as values or variables

const hello = function(){
    console.log("Hello User");
}
hello();
setTimeout(hello, 2000); //it will execute after 2 secs

setTimeout(function(){
    console.log("Hi");
}, 5000);  //after 5 secss

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element,2);
})

console.log(squares);

