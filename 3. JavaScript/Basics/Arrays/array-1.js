//Arrays
const myArray = [];

//add elements to an array one by one via the index
myArray[0] = "Mercy";
myArray[1] = 24;
myArray[2] = true;

//refer to the array
console.log(myArray);  //outputs the array to the console

//length property
console.log(myArray.length);

//last element in the array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);  //prints the element at index 1

//add more elements to the end of the array| using the push method
myArray.push("school");
console.log(myArray);

//remove an element from the array| using the pop method
const lastItem = myArray.pop();
console.log(myArray);

// add an element from the front of the array| using the unshift method
myArray.unshift(42);
console.log(myArray);

//if variables are added
const newLength = myArray.unshift(42);
console.log(newLength);

const  firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);
console.log(myArray[1]);
console.log(myArray[2]);

//what if we want to remove an element in the middle of the array
delete myArray[1];
console.log(myArray); //we still have that position but it is undefined

//instead of deleting like that we can we the slice method
 myArray.splice(1,1);
 console.log(myArray);

 myArray.splice(1,1,56);//splice can be used to replace
 console.log(myArray);

 //Let's look at more array methods
  const Array = ["A", "B", "C", "D", "E", "F"];
const newArray = Array.slice(2,5);
console.log(newArray);

Array.reverse();  //reverse method
console.log(Array);

const newString = Array.join(); //join method

const newArrayy = newString.split(",");
console.log(newArrayy);

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const newArray1 = myArrayB.concat(myArrayA);//combines
console.log(newArray1);

const newArray2 = [...myArrayA, ...myArrayB]

//multi - dimensional arrays

