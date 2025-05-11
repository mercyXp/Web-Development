//Defining a Function: function nameOfFunction()
//Function Declaration

function hello(){
    console.log("Hello");
}
hello();

setTimeout(hello, 2000); //callback

function makeNoise(){
    console.log("Pling!");
}
makeNoise(); //calling the function

function square(x){
    return x * x;
}
console.log(square(12));

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square_2)

console.log(squares);

function square_2(element){
    return Math.pow(element,2);
}

